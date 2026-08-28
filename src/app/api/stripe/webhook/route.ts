import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { matchProductByName } from "@/lib/promptempire-catalog";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

async function recordPromptEmpirePurchase(session: Stripe.Checkout.Session) {
  // Re-fetch with line_items expanded — they're not in the webhook payload by default.
  const full = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items.data.price.product"],
  });

  const items = full.line_items?.data ?? [];
  for (const item of items) {
    const product = item.price?.product;
    const productName =
      product && typeof product === "object" && "name" in product ? product.name : "";
    const matched = matchProductByName(productName);
    if (!matched) continue;

    await prisma.purchase.upsert({
      where: { stripeSessionId: full.id },
      create: {
        stripeSessionId: full.id,
        stripeCustomerId: typeof full.customer === "string" ? full.customer : full.customer?.id,
        stripePaymentIntent:
          typeof full.payment_intent === "string" ? full.payment_intent : full.payment_intent?.id,
        email: full.customer_details?.email ?? "",
        amount: full.amount_total ?? 0,
        currency: full.currency ?? "usd",
        productKey: matched.key,
        productName: matched.name,
        status: full.payment_status ?? "paid",
      },
      update: {
        // Idempotent re-deliveries from Stripe just refresh the status.
        status: full.payment_status ?? "paid",
      },
    });
    return;
  }
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook signature invalid" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const { userId, plan } = session.metadata ?? {};
      if (userId && plan) {
        // Subscription checkout (qrflow Pro/Business) — sync plan.
        await prisma.user.update({
          where: { id: userId },
          data: {
            plan,
            stripeSubscriptionId: session.subscription as string,
          },
        });
      } else if (session.mode === "payment" && session.payment_status === "paid") {
        // Direct PromptEmpire payment link — record the purchase so /delivery can gate.
        await recordPromptEmpirePurchase(session);
      }
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (userId) {
        const status = sub.status;
        const plan = status === "active" ? (sub.metadata?.plan ?? "free") : "free";
        await prisma.user.update({ where: { id: userId }, data: { plan } });
      }
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const userId = sub.metadata?.userId;
      if (userId) {
        await prisma.user.update({
          where: { id: userId },
          data: { plan: "free", stripeSubscriptionId: null },
        });
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
