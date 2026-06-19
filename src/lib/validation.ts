import type { IntakePayload } from "./types";

/** Shared email format check used by both the intake API and the intake form. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const REQUIRED_INTAKE_FIELDS = [
  "businessName",
  "businessType",
  "contactName",
  "contactEmail",
  "currentChallenge",
  "goalsIn90Days",
] as const;

export type IntakeValidationResult =
  | { ok: true; data: Record<string, string | null> }
  | { ok: false; status: number; error: string };

/**
 * Validates and normalizes an intake payload.
 * - Ensures all required fields are present.
 * - Validates + normalizes the email (trim + lowercase).
 * - Trims every field, coercing empty optional fields to null.
 */
export function validateIntake(body: IntakePayload): IntakeValidationResult {
  const missing = REQUIRED_INTAKE_FIELDS.filter((f) => !body[f]);
  if (missing.length) {
    return {
      ok: false,
      status: 400,
      error: `Missing required fields: ${missing.join(", ")}`,
    };
  }

  const email = body.contactEmail!.trim().toLowerCase();
  if (!isValidEmail(email)) {
    return { ok: false, status: 400, error: "Invalid email" };
  }

  const data = {
    businessName: body.businessName!.trim(),
    businessType: body.businessType!.trim(),
    contactName: body.contactName!.trim(),
    contactEmail: email,
    contactPhone: body.contactPhone?.trim() || null,
    monthlyRevenue: body.monthlyRevenue?.trim() || null,
    teamSize: body.teamSize?.trim() || null,
    currentChallenge: body.currentChallenge!.trim(),
    goalsIn90Days: body.goalsIn90Days!.trim(),
    budgetRange: body.budgetRange?.trim() || null,
    preferredPlan: body.preferredPlan?.trim() || null,
  };

  return { ok: true, data };
}
