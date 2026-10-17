/**
 * Single source of truth for all payment / checkout links across the brands.
 *
 * Historically these URLs were copy-pasted into 6+ page files and both brand nav
 * components, so a link change meant hunting through the codebase. Import from here
 * instead. See SITE-PLAN.md (Phase 1) and MARKETING.md.
 */

export const STRIPE_LINKS = {
  /** PromptEmpire — 500 AI Business Prompts ($37) */
  aiBusinessPrompts: "https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh",
  /** PromptEmpire — Freelancer Command Center ($47) */
  freelancerCommandCenter: "https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01",
  /** PromptEmpire — Empire Bundle ($67) */
  empireBundle: "https://buy.stripe.com/7sI8wR50Kf2adoI28X",
} as const;

export const GUMROAD_LINKS = {
  /** Chiku Fit — 8-Week Mass Accelerator ($49.99) */
  eightWeekMassAccelerator: "https://chikuglobal.gumroad.com/l/teliz",
} as const;

/** PromptEmpire product catalog (prices in USD). */
export const PROMPTEMPIRE_PRODUCTS = [
  { id: "prompts", name: "500 AI Business Prompts", price: 37, href: STRIPE_LINKS.aiBusinessPrompts },
  { id: "freelancer", name: "Freelancer Command Center", price: 47, href: STRIPE_LINKS.freelancerCommandCenter },
  { id: "bundle", name: "Empire Bundle", price: 67, href: STRIPE_LINKS.empireBundle, highlight: true },
] as const;

/** Chiku Fit product catalog (prices in USD). Gumroad checkout URLs pending for #2 and #3. */
export const CHIKU_FIT_PRODUCTS = [
  { id: "8week", name: "8-Week Mass Accelerator", price: 49.99, href: GUMROAD_LINKS.eightWeekMassAccelerator },
  { id: "mealplan", name: "Broke Bulk Meal Plan Pack", price: null, href: null }, // TODO: add Gumroad URL
  { id: "system", name: "Complete Bulking System (Bundle)", price: null, href: null }, // TODO: add Gumroad URL
] as const;

/** AI Systems retainer packages. */
export const AI_SYSTEMS_PLANS = [
  { id: "starter", name: "Starter", setup: 1497, monthly: 297 },
  { id: "growth", name: "Growth", setup: 2497, monthly: 497, highlight: true },
  { id: "premium", name: "Premium", setup: 4997, monthly: 997 },
] as const;
