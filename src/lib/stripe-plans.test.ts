import { describe, it, expect, vi, beforeEach } from "vitest";

// stripe.ts instantiates the Stripe SDK at module load; stub it so importing
// PLANS doesn't require a real API key or network.
vi.mock("stripe", () => ({
  default: class {
    constructor() {}
  },
}));

beforeEach(() => {
  vi.resetModules();
});

describe("PLANS config", () => {
  it("defines free, pro and business tiers with consistent feature gating", async () => {
    const { PLANS } = await import("./stripe");

    // Free tier: limited, no premium features.
    expect(PLANS.free.qrLimit).toBe(5);
    expect(PLANS.free.analytics).toBe(false);
    expect(PLANS.free.customColors).toBe(false);
    expect(PLANS.free.price).toBe(0);

    // Paid tiers unlock analytics + custom colors.
    for (const tier of [PLANS.pro, PLANS.business] as const) {
      expect(tier.analytics).toBe(true);
      expect(tier.customColors).toBe(true);
      expect(tier.price).toBeGreaterThan(0);
    }

    // Business is unlimited (sentinel -1) and pro is finite-but-larger than free.
    expect(PLANS.pro.qrLimit).toBeGreaterThan(PLANS.free.qrLimit);
    expect(PLANS.business.qrLimit).toBe(-1);
  });
});
