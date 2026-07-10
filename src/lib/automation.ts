// Outbound automation bridge.
//
// Posts a JSON event to a single webhook URL (a Zapier "Catch Hook" or a
// Make.com "Custom webhook"). That external scenario then does whatever the
// user wants — add the contact to Buffer, append to a Google Sheet, ping
// Slack, etc. Keeping the fan-out in Zapier/Make (not hard-coded here) means
// new automations need zero code changes.
//
// Config: AUTOMATION_WEBHOOK_URL — if unset, this is a no-op (returns false),
// so the app runs fine locally and in CI without it. Always best-effort /
// non-fatal: a webhook outage must never break a signup or intake.

export type AutomationEvent =
  | "subscriber.created"
  | "subscriber.unsubscribed"
  | "intake.submitted";

export async function sendToAutomation(
  event: AutomationEvent,
  payload: Record<string, unknown>
): Promise<boolean> {
  const url = process.env.AUTOMATION_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event,
        source: "chikuglobalsolutions.com",
        occurredAt: new Date().toISOString(),
        ...payload,
      }),
    });
    if (!res.ok) {
      console.warn("automation: webhook returned", res.status);
      return false;
    }
    return true;
  } catch (err) {
    console.warn("automation: webhook exception:", err instanceof Error ? err.message : err);
    return false;
  }
}
