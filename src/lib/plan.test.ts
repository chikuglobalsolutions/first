import { describe, it, expect } from "vitest";
import { planForSubscription } from "./plan";

describe("planForSubscription", () => {
  it("keeps the metadata plan while the subscription is active", () => {
    expect(planForSubscription("active", "pro")).toBe("pro");
    expect(planForSubscription("active", "business")).toBe("business");
  });

  it("falls back to free for an active subscription with no plan metadata", () => {
    expect(planForSubscription("active", undefined)).toBe("free");
    expect(planForSubscription("active", null)).toBe("free");
  });

  it.each(["past_due", "canceled", "unpaid", "incomplete", "paused"])(
    "downgrades to free when status is %s",
    (status) => {
      expect(planForSubscription(status, "pro")).toBe("free");
    }
  );
});
