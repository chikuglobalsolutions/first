import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type LeadPayload = {
  email?: string;
  source?: string;
  context?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: LeadPayload = {};
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const source = (body.source ?? "promptempire").slice(0, 64);
  const context = body.context?.slice(0, 200) ?? null;
  const userAgent = req.headers.get("user-agent")?.slice(0, 400) ?? null;

  // Always log so we never silently drop a lead — even if the DB is missing.
  console.log("[leads] capture", JSON.stringify({ email, source, context }));

  // Best-effort persist. If the table isn't migrated yet, the log above is the receipt.
  try {
    const { prisma } = await import("@/lib/prisma");
    await prisma.lead.create({ data: { email, source, context, userAgent } });
  } catch (err) {
    console.warn("[leads] persist failed (non-fatal):", err instanceof Error ? err.message : err);
  }

  return NextResponse.json({
    ok: true,
    // Magnet payload: the URL the client can immediately deep-link the lead to.
    downloadUrl: "/downloads/30-Day-Content-Machine.pdf",
  });
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "leads", method: "POST" });
}
