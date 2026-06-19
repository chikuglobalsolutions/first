/** Subscription/plan resolution helpers shared by the Stripe webhook. */

/**
 * Resolves the plan a user should have given a subscription status.
 * Only an `active` subscription keeps the paid plan; anything else
 * (past_due, canceled, unpaid, etc.) falls back to "free".
 */
export function planForSubscription(
  status: string,
  metadataPlan?: string | null
): string {
  return status === "active" ? (metadataPlan ?? "free") : "free";
}
