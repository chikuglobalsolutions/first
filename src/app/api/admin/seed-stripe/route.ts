import { NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type SeedResult = {
  product: string;
  productId: string;
  prices: { id: string; nickname: string; amount: number; recurring: string | null }[];
  created: boolean;
};

const CATALOG = [
  // ── PromptEmpire ─────────────────────────────────────────────
  {
    key: "pe_500_prompts",
    name: "500 AI Business Prompts",
    description:
      "The complete library — 500 done-for-you prompts across 10 business categories. PDF + Notion template. Lifetime updates.",
    metadata: { brand: "PromptEmpire", category: "digital_product" },
    prices: [
      { nickname: "One-time $37", amount: 3700, currency: "usd", recurring: null },
    ],
  },
  {
    key: "pe_freelancer_command_center",
    name: "Freelancer Command Center",
    description:
      "Your AI-powered business OS. Client onboarding, proposals, invoices — all built with prompts. Includes 500 Prompts pack.",
    metadata: { brand: "PromptEmpire", category: "digital_product" },
    prices: [
      { nickname: "One-time $47", amount: 4700, currency: "usd", recurring: null },
    ],
  },
  {
    key: "pe_empire_bundle",
    name: "Empire Bundle",
    description:
      "The full PromptEmpire stack. Everything in the Command Center + agency scaling prompts, white-label templates, cold outreach sequences, priority support.",
    metadata: { brand: "PromptEmpire", category: "digital_product", popular: "true" },
    prices: [
      { nickname: "One-time $67", amount: 6700, currency: "usd", recurring: null },
    ],
  },

  // ── Chiku Fit ────────────────────────────────────────────────
  {
    key: "cf_8_week_mass_accelerator",
    name: "Chiku Fit — 8-Week Mass Accelerator",
    description:
      "Complete 8-week training program for skinny beginners. Double-progression overload, week-by-week structure, hypertrophy guidance. Instant PDF.",
    metadata: { brand: "Chiku Fit", category: "fitness_guide" },
    prices: [
      { nickname: "One-time $49.99", amount: 4999, currency: "usd", recurring: null },
    ],
  },
  {
    key: "cf_broke_bulk_meal_plan",
    name: "Chiku Fit — Broke Bulk Meal Plan Pack",
    description:
      "Budget bulking nutrition guide. Calorie surplus strategy, cheap-food grocery lists, daily meal layouts, high-cal shake protocol. Instant PDF.",
    metadata: { brand: "Chiku Fit", category: "fitness_guide" },
    prices: [
      { nickname: "One-time $29.99", amount: 2999, currency: "usd", recurring: null },
    ],
  },
  {
    key: "cf_complete_bulking_system",
    name: "Chiku Fit — Complete Bulking System",
    description:
      "Training + nutrition + recovery in one stack. Includes 8-Week Mass Accelerator + Broke Bulk Meal Plan + recovery protocols. Instant PDF bundle.",
    metadata: { brand: "Chiku Fit", category: "fitness_guide", popular: "true" },
    prices: [
      { nickname: "One-time $89.99", amount: 8999, currency: "usd", recurring: null },
    ],
  },

  // ── Chiku AI Systems ────────────────────────────────────────
  {
    key: "ais_starter_setup",
    name: "Chiku AI Systems — Starter Setup",
    description:
      "One AI system installed and integrated for your business in 2 weeks. Includes setup, configuration, 30-day optimization period.",
    metadata: { brand: "Chiku AI Systems", category: "service_setup", tier: "starter" },
    prices: [
      { nickname: "One-time setup $1,497", amount: 149700, currency: "usd", recurring: null },
    ],
  },
  {
    key: "ais_starter_retainer",
    name: "Chiku AI Systems — Starter Retainer",
    description:
      "Monthly maintenance, monitoring, and optimization for the Starter AI system. Includes monthly performance reports and email support.",
    metadata: { brand: "Chiku AI Systems", category: "service_retainer", tier: "starter" },
    prices: [
      { nickname: "Monthly $297", amount: 29700, currency: "usd", recurring: "month" },
    ],
  },
  {
    key: "ais_growth_setup",
    name: "Chiku AI Systems — Growth Setup",
    description:
      "Three integrated AI systems for your business. Priority 2-week setup, cross-system integration, bi-weekly strategy calls.",
    metadata: { brand: "Chiku AI Systems", category: "service_setup", tier: "growth", popular: "true" },
    prices: [
      { nickname: "One-time setup $2,497", amount: 249700, currency: "usd", recurring: null },
    ],
  },
  {
    key: "ais_growth_retainer",
    name: "Chiku AI Systems — Growth Retainer",
    description:
      "Monthly retainer for the Growth tier. Bi-weekly strategy calls, monthly performance reports, priority support across 3 AI systems.",
    metadata: { brand: "Chiku AI Systems", category: "service_retainer", tier: "growth", popular: "true" },
    prices: [
      { nickname: "Monthly $497", amount: 49700, currency: "usd", recurring: "month" },
    ],
  },
  {
    key: "ais_premium_setup",
    name: "Chiku AI Systems — Premium Setup",
    description:
      "Full AI infrastructure for your business. All 6 systems, custom AI assistant (your brand), full tech stack audit & setup.",
    metadata: { brand: "Chiku AI Systems", category: "service_setup", tier: "premium" },
    prices: [
      { nickname: "One-time setup $4,997", amount: 499700, currency: "usd", recurring: null },
    ],
  },
  {
    key: "ais_premium_retainer",
    name: "Chiku AI Systems — Premium Retainer",
    description:
      "Monthly retainer for the Premium tier. Weekly strategy calls, dedicated account manager, first-priority support across all AI systems.",
    metadata: { brand: "Chiku AI Systems", category: "service_retainer", tier: "premium" },
    prices: [
      { nickname: "Monthly $997", amount: 99700, currency: "usd", recurring: "month" },
    ],
  },
];

export async function POST(request: Request) {
  // Simple shared-secret auth
  const auth = request.headers.get("authorization") || "";
  const token = auth.replace(/^Bearer\s+/i, "").trim();
  const expected = process.env.ADMIN_SEED_TOKEN || "";
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json({ error: "STRIPE_SECRET_KEY not set" }, { status: 500 });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2025-02-24.acacia" });

  // Pull all existing products + prices once, then match by name (case-insensitive)
  const existingProducts = await stripe.products.list({ limit: 100, active: true });
  const existingByNameLower = new Map(existingProducts.data.map((p) => [p.name.trim().toLowerCase(), p]));

  const results: SeedResult[] = [];

  for (const item of CATALOG) {
    let product = existingByNameLower.get(item.name.trim().toLowerCase());
    let created = false;

    if (!product) {
      product = await stripe.products.create({
        name: item.name,
        description: item.description,
        metadata: item.metadata as Record<string, string>,
      });
      created = true;
    }

    // List current prices on this product
    const currentPrices = await stripe.prices.list({ product: product.id, active: true, limit: 50 });

    const desiredPriceIds: { id: string; nickname: string; amount: number; recurring: string | null }[] = [];

    for (const priceDef of item.prices) {
      // Match: same currency + amount + recurring interval
      let match = currentPrices.data.find((p) => {
        const sameCurrency = p.currency === priceDef.currency;
        const sameAmount = p.unit_amount === priceDef.amount;
        const sameRecurring =
          (priceDef.recurring === null && !p.recurring) ||
          (priceDef.recurring !== null && p.recurring?.interval === priceDef.recurring);
        return sameCurrency && sameAmount && sameRecurring;
      });

      if (!match) {
        const params: Stripe.PriceCreateParams = {
          product: product.id,
          currency: priceDef.currency,
          unit_amount: priceDef.amount,
          nickname: priceDef.nickname,
          tax_behavior: "exclusive",
        };
        if (priceDef.recurring) {
          params.recurring = { interval: priceDef.recurring as "month" | "year" };
        }
        match = await stripe.prices.create(params);
      }

      desiredPriceIds.push({
        id: match.id,
        nickname: priceDef.nickname,
        amount: priceDef.amount,
        recurring: priceDef.recurring,
      });
    }

    results.push({
      product: item.name,
      productId: product.id,
      prices: desiredPriceIds,
      created,
    });
  }

  return NextResponse.json({
    ok: true,
    summary: {
      total: results.length,
      created: results.filter((r) => r.created).length,
      existing: results.filter((r) => !r.created).length,
    },
    results,
  });
}

export async function GET() {
  return NextResponse.json({
    info:
      "POST with Authorization: Bearer <ADMIN_SEED_TOKEN> to seed the Stripe catalog. Idempotent — safe to run multiple times.",
    products: CATALOG.map((c) => ({
      name: c.name,
      prices: c.prices.map((p) => `${p.nickname}${p.recurring ? ` /${p.recurring}` : ""}`),
    })),
  });
}
