import { getLeadMagnetForBrand } from "@/lib/lead-magnets";
import { unsubscribeUrl } from "@/lib/subscribe-token";

// Thin wrapper over Resend's HTTP API (same provider the intake route uses).
// Returns false instead of throwing so callers can treat sending as a
// best-effort, non-fatal side effect.

const BRAND_LABEL: Record<string, string> = {
  promptempire: "PromptEmpire",
  "chiku-fit": "Chiku Fit",
  "ai-systems": "Chiku AI Systems",
  qr: "QRFlow",
  chiku: "Chiku Global Solutions",
};

function baseUrl(): string {
  return (process.env.NEXTAUTH_URL || "https://chikuglobalsolutions.com").replace(/\/$/, "");
}

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MARKETING_FROM_EMAIL || process.env.INTAKE_FROM_EMAIL || "onboarding@resend.dev";
  if (!apiKey) {
    console.warn("email: RESEND_API_KEY not set — skipping send to", opts.to);
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: opts.to, subject: opts.subject, html: opts.html }),
    });
    if (!res.ok) {
      console.warn("email: resend failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.warn("email: resend exception:", err);
    return false;
  }
}

function footer(email: string): string {
  const unsub = unsubscribeUrl(baseUrl(), email);
  const address = process.env.COMPANY_MAILING_ADDRESS || "Chiku Global Solutions LLC, Wyoming, USA";
  // CAN-SPAM: every marketing email needs an unsubscribe link + physical address.
  return `
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0 16px" />
    <p style="font-size:12px;color:#9ca3af;line-height:1.6">
      You're getting this because you signed up on chikuglobalsolutions.com.
      <a href="${unsub}" style="color:#6b7280">Unsubscribe</a> anytime.<br/>
      ${address}
    </p>`;
}

// Welcome email — delivers the brand's lead magnet (if any) and links to it.
export function buildWelcomeEmail(brand: string, email: string): { subject: string; html: string } {
  const label = BRAND_LABEL[brand] || "Chiku Global Solutions";
  const magnet = getLeadMagnetForBrand(brand);
  const link = magnet ? `${baseUrl()}/free/${magnet.slug}` : null;

  const subject = magnet ? `Here's your ${magnet.title.toLowerCase()} 🎉` : `Welcome to ${label} 👋`;

  const body = magnet
    ? `
      <p style="font-size:16px;color:#111827;line-height:1.6">You're in — thanks for signing up.</p>
      <p style="font-size:16px;color:#111827;line-height:1.6">Here's the <strong>${magnet.title}</strong> I promised you:</p>
      <p style="margin:24px 0">
        <a href="${link}" style="background:#0284c7;color:#fff;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:700;display:inline-block">Open your ${magnet.title} →</a>
      </p>
      <p style="font-size:15px;color:#374151;line-height:1.6">Bookmark it — the link stays live. I'll send you the occasional genuinely-useful email from ${label}. No spam, and you can leave anytime.</p>`
    : `
      <p style="font-size:16px;color:#111827;line-height:1.6">You're on the list — thanks for signing up.</p>
      <p style="font-size:15px;color:#374151;line-height:1.6">I'll email you when there's something worth your time from ${label} — new drops, tools, and deals. No spam, and you can leave anytime.</p>`;

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;padding:8px">
      ${body}
      ${footer(email)}
    </div>`;

  return { subject, html };
}
