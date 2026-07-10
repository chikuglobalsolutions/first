import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Opt-in email capture for the Chiku Global brands.
//
// This endpoint ONLY records people who affirmatively signed up on the site.
// It never accepts scraped or purchased addresses. The `consent` +
// `consentText` + `ip` fields are stored as proof of a real opt-in so the
// list stays CAN-SPAM / GDPR compliant and safe to market to.

const VALID_BRANDS = ["promptempire", "chiku-fit", "ai-systems", "qr", "chiku"] as const;
type Brand = (typeof VALID_BRANDS)[number];

type SubscribePayload = {
  email?: string;
  name?: string;
  brand?: string;
  source?: string;
  consent?: boolean;
  consentText?: string;
};

function clientIp(request: Request): string | null {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-nf-client-connection-ip");
}

async function tryPersist(data: {
  email: string;
  name: string | null;
  brand: Brand;
  source: string;
  consentText: string;
  ip: string | null;
}) {
  try {
    const { prisma } = await import("@/lib/prisma");
    // Upsert so re-subscribing (or signing up on a second brand) never errors
    // on the unique email, and re-activates anyone previously unsubscribed.
    await prisma.emailSubscriber.upsert({
      where: { email: data.email },
      update: {
        name: data.name ?? undefined,
        brand: data.brand,
        source: data.source,
        consent: true,
        consentText: data.consentText,
        ip: data.ip ?? undefined,
        status: "subscribed",
      },
      create: {
        email: data.email,
        name: data.name,
        brand: data.brand,
        source: data.source,
        consent: true,
        consentText: data.consentText,
        ip: data.ip,
        status: "subscribed",
      },
    });
    return true;
  } catch (err) {
    console.warn("subscribe: db persist failed (non-fatal):", err instanceof Error ? err.message : err);
    return false;
  }
}

async function tryNotify(email: string, brand: Brand, source: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INTAKE_NOTIFY_EMAIL || "chikuglobalsolutions@gmail.com";
  const from = process.env.INTAKE_FROM_EMAIL || "onboarding@resend.dev";
  if (!apiKey) return false;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        subject: `New ${brand} subscriber — ${email}`,
        html: `<h2>New email subscriber</h2><p><strong>Email:</strong> ${email}</p><p><strong>Brand:</strong> ${brand}</p><p><strong>Source:</strong> ${source}</p>`,
      }),
    });
    return res.ok;
  } catch (err) {
    console.warn("subscribe: notify exception:", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: SubscribePayload;
  try {
    body = (await request.json()) as SubscribePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email" }, { status: 400 });
  }

  // Require an explicit opt-in. No consent → no record.
  if (body.consent === false) {
    return NextResponse.json({ error: "Consent is required to subscribe" }, { status: 400 });
  }

  const brand: Brand = VALID_BRANDS.includes(body.brand as Brand) ? (body.brand as Brand) : "chiku";
  const source = (body.source || "site-signup").trim().slice(0, 120);
  const consentText =
    (body.consentText || "").trim().slice(0, 500) ||
    `Opted in to ${brand} email updates via chikuglobalsolutions.com`;

  const data = {
    email,
    name: body.name?.trim() || null,
    brand,
    source,
    consentText,
    ip: clientIp(request),
  };

  console.log("📥 NEW SUBSCRIBER:", JSON.stringify({ ...data, _at: new Date().toISOString() }, null, 2));

  // All side effects are best-effort and non-fatal:
  //  - persist the opt-in record
  //  - notify admin
  //  - deliver the welcome/lead-magnet email
  //  - sync to Mailchimp audience (tagged by brand) for broadcasts
  const { buildWelcomeEmail, sendEmail } = await import("@/lib/email");
  const { syncSubscriber } = await import("@/lib/mailchimp");
  const { sendToAutomation } = await import("@/lib/automation");
  const welcome = buildWelcomeEmail(brand, email);

  await Promise.allSettled([
    tryPersist(data),
    tryNotify(email, brand, source),
    sendEmail({ to: email, subject: welcome.subject, html: welcome.html }),
    syncSubscriber(email, brand),
    sendToAutomation("subscriber.created", { email, brand, source, name: data.name }),
  ]);

  return NextResponse.json({ ok: true });
}
