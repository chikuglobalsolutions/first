import { describe, it, expect } from "vitest";
import { isValidEmail, validateIntake, REQUIRED_INTAKE_FIELDS } from "./validation";
import type { IntakePayload } from "./types";

describe("isValidEmail", () => {
  it.each([
    "jane@example.com",
    "a.b+tag@sub.domain.co",
    "x@y.z",
  ])("accepts %s", (email) => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    "",
    "plainaddress",
    "no-at-sign.com",
    "missing@domain",
    "spaces in@email.com",
    "two@@at.com",
    "@nolocal.com",
  ])("rejects %s", (email) => {
    expect(isValidEmail(email)).toBe(false);
  });
});

function fullPayload(overrides: Partial<IntakePayload> = {}): IntakePayload {
  return {
    businessName: "Acme Co.",
    businessType: "SaaS / digital product",
    contactName: "Jane Doe",
    contactEmail: "jane@example.com",
    currentChallenge: "Leads go cold",
    goalsIn90Days: "Double bookings",
    ...overrides,
  };
}

describe("validateIntake", () => {
  it("accepts a complete payload and normalizes fields", () => {
    const result = validateIntake(
      fullPayload({
        businessName: "  Acme Co.  ",
        contactEmail: "  Jane@Example.COM ",
        contactPhone: "  555  ",
      })
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.businessName).toBe("Acme Co.");
    // email trimmed + lowercased
    expect(result.data.contactEmail).toBe("jane@example.com");
    // optional field trimmed
    expect(result.data.contactPhone).toBe("555");
  });

  it("coerces blank optional fields to null", () => {
    const result = validateIntake(fullPayload({ contactPhone: "   ", teamSize: "" }));
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.contactPhone).toBeNull();
    expect(result.data.teamSize).toBeNull();
    expect(result.data.budgetRange).toBeNull();
  });

  it.each(REQUIRED_INTAKE_FIELDS)("rejects when %s is missing", (field) => {
    const result = validateIntake(fullPayload({ [field]: "" }));
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe(400);
    expect(result.error).toContain(field);
  });

  it("lists all missing required fields in the error", () => {
    const result = validateIntake({ contactEmail: "jane@example.com" });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error).toContain("businessName");
    expect(result.error).toContain("goalsIn90Days");
  });

  it("rejects an invalid email even when required fields are present", () => {
    const result = validateIntake(fullPayload({ contactEmail: "not-an-email" }));
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.status).toBe(400);
    expect(result.error).toBe("Invalid email");
  });
});
