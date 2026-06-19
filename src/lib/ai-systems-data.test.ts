import { describe, it, expect } from "vitest";
import { getSystem, getIndustry, SYSTEMS, INDUSTRIES } from "./ai-systems-data";

describe("getSystem", () => {
  it("returns the matching system by slug", () => {
    const system = getSystem("lead-followup");
    expect(system).toBeDefined();
    expect(system?.slug).toBe("lead-followup");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getSystem("does-not-exist")).toBeUndefined();
  });

  it("resolves every defined system slug", () => {
    for (const s of SYSTEMS) {
      expect(getSystem(s.slug)?.slug).toBe(s.slug);
    }
  });
});

describe("getIndustry", () => {
  it("returns the matching industry by slug", () => {
    const industry = getIndustry("dental-medical");
    expect(industry).toBeDefined();
    expect(industry?.slug).toBe("dental-medical");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getIndustry("nope")).toBeUndefined();
  });

  it("resolves every defined industry slug", () => {
    for (const i of INDUSTRIES) {
      expect(getIndustry(i.slug)?.slug).toBe(i.slug);
    }
  });
});

describe("data integrity", () => {
  it("has unique, non-empty system slugs", () => {
    const slugs = SYSTEMS.map((s) => s.slug);
    expect(slugs.every(Boolean)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has unique, non-empty industry slugs", () => {
    const slugs = INDUSTRIES.map((i) => i.slug);
    expect(slugs.every(Boolean)).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
