import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export const PLANS = {
  free: { name: "Free", price: 0, qrLimit: 5, analytics: false, customColors: false },
  pro: {
    name: "Pro",
    price: 9,
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    qrLimit: 500,
    analytics: true,
    customColors: true,
  },
  business: {
    name: "Business",
    price: 29,
    priceId: process.env.STRIPE_BUSINESS_PRICE_ID!,
    qrLimit: -1,
    analytics: true,
    customColors: true,
  },
} as const;
