import Stripe from "stripe";

// `next build` collects page data for the API routes, which imports this
// module and constructs the Stripe client. The Stripe SDK throws at
// construction if no key is present ("Neither apiKey nor config.authenticator
// provided"), which would fail the build in any environment where the secret
// isn't set at build time (e.g. Netlify before env vars are configured).
// Fall back to a clearly-fake key so construction never throws; when the real
// STRIPE_SECRET_KEY is set (production), behaviour is identical to before.
// Any actual API call made without the real key fails loudly with an auth
// error, which is the correct signal that the env var is missing.
const stripeSecretKey =
  process.env.STRIPE_SECRET_KEY || "sk_test_missing_key_build_placeholder";

export const stripe = new Stripe(stripeSecretKey, {
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
