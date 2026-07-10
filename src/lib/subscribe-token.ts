import crypto from "crypto";

// Signed unsubscribe tokens so a link in an email can flip a subscriber's
// status without letting anyone unsubscribe an arbitrary address by guessing.
// HMAC over the (lowercased) email using the app secret.

function secret(): string {
  return process.env.NEXTAUTH_SECRET || process.env.UNSUBSCRIBE_SECRET || "dev-insecure-secret";
}

export function makeUnsubToken(email: string): string {
  return crypto
    .createHmac("sha256", secret())
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
}

export function verifyUnsubToken(email: string, token: string): boolean {
  const expected = makeUnsubToken(email);
  const a = Buffer.from(expected);
  const b = Buffer.from(token || "");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function unsubscribeUrl(baseUrl: string, email: string): string {
  const token = makeUnsubToken(email);
  const u = new URL("/api/unsubscribe", baseUrl);
  u.searchParams.set("email", email.trim().toLowerCase());
  u.searchParams.set("token", token);
  return u.toString();
}
