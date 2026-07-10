import crypto from "crypto";

// Best-effort sync of opt-in subscribers into a Mailchimp audience so email
// broadcasts can be sent from Mailchimp. Every function returns false rather
// than throwing — a Mailchimp outage must never break the signup flow.
//
// Config (all optional; if unset, sync is skipped):
//   MAILCHIMP_API_KEY        e.g. abc123...-us21
//   MAILCHIMP_AUDIENCE_ID    the list/audience id
//   MAILCHIMP_SERVER_PREFIX  e.g. us21 (falls back to the suffix of the API key)

function config() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const dc = process.env.MAILCHIMP_SERVER_PREFIX || apiKey?.split("-")[1];
  if (!apiKey || !listId || !dc) return null;
  return { apiKey, listId, dc };
}

function subscriberHash(email: string): string {
  return crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

function authHeader(apiKey: string): string {
  // Mailchimp accepts HTTP Basic auth with any username and the API key as password.
  return "Basic " + Buffer.from(`anystring:${apiKey}`).toString("base64");
}

// Upsert a member as subscribed and tag them with their brand.
export async function syncSubscriber(email: string, brand: string): Promise<boolean> {
  const cfg = config();
  if (!cfg) {
    console.warn("mailchimp: not configured — skipping sync");
    return false;
  }
  const hash = subscriberHash(email);
  const headers = { Authorization: authHeader(cfg.apiKey), "Content-Type": "application/json" };
  try {
    const put = await fetch(
      `https://${cfg.dc}.api.mailchimp.com/3.0/lists/${cfg.listId}/members/${hash}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          email_address: email.trim().toLowerCase(),
          status_if_new: "subscribed",
          status: "subscribed",
        }),
      }
    );
    if (!put.ok) {
      console.warn("mailchimp: upsert failed:", put.status, await put.text());
      return false;
    }
    // Tag with the brand (best-effort; don't fail the whole sync on a tag error).
    await fetch(
      `https://${cfg.dc}.api.mailchimp.com/3.0/lists/${cfg.listId}/members/${hash}/tags`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ tags: [{ name: brand, status: "active" }] }),
      }
    ).catch(() => undefined);
    return true;
  } catch (err) {
    console.warn("mailchimp: sync exception:", err);
    return false;
  }
}

export async function unsubscribeFromMailchimp(email: string): Promise<boolean> {
  const cfg = config();
  if (!cfg) return false;
  const hash = subscriberHash(email);
  try {
    const res = await fetch(
      `https://${cfg.dc}.api.mailchimp.com/3.0/lists/${cfg.listId}/members/${hash}`,
      {
        method: "PATCH",
        headers: { Authorization: authHeader(cfg.apiKey), "Content-Type": "application/json" },
        body: JSON.stringify({ status: "unsubscribed" }),
      }
    );
    return res.ok;
  } catch (err) {
    console.warn("mailchimp: unsubscribe exception:", err);
    return false;
  }
}
