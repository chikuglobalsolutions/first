import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe, PLANS } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const planParam = searchParams.get("plan");

  if (!planParam || !(planParam in PLANS) || planParam === "free") {
    return NextResponse.redirect(new URL("/#pricing", req.url));
  }

  const plan = planParam as "pro" | "business";

  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.redirect(new URL(`/login?redirect=/api/stripe/checkout?plan=${plan}`, req.url));
  }

  const userId = (session.user as { id: string }).id;
  const user = await prisma.user.findUnique({ where: { id: userId } });

  let customerId = user?.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session.user.email!,
      name: session.user.name || undefined,
      metadata: { userId },
    });
    customerId = customer.id;
    await prisma.user.update({ where: { id: userId }, data: { stripeCustomerId: customerId } });
  }

  const planConfig = PLANS[plan];
  const checkout = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: planConfig.priceId, quantity: 1 }],
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?upgraded=1`,
    cancel_url: `${process.env.NEXTAUTH_URL}/#pricing`,
    metadata: { userId, plan },
    subscription_data: { metadata: { userId, plan } },
    allow_promotion_codes: true,
  });

  return NextResponse.redirect(checkout.url!);
}
