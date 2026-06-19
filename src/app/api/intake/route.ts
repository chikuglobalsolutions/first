import { NextResponse } from "next/server";
import { validateIntake } from "@/lib/validation";
import type { IntakePayload } from "@/lib/types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function tryPersistToDb(data: Record<string, string | null>) {
  try {
    const { prisma } = await import("@/lib/prisma");
    await prisma.intakeSubmission.create({
      data: {
        businessName: data.businessName!,
        businessType: data.businessType!,
        contactName: data.contactName!,
        contactEmail: data.contactEmail!,
        contactPhone: data.contactPhone,
        monthlyRevenue: data.monthlyRevenue,
        teamSize: data.teamSize,
        currentChallenge: data.currentChallenge!,
        goalsIn90Days: data.goalsIn90Days!,
        budgetRange: data.budgetRange,
        preferredPlan: data.preferredPlan,
      },
    });
    return true;
  } catch (err) {
    console.warn("intake: db persist failed (non-fatal):", err instanceof Error ? err.message : err);
    return false;
  }
}

async function tryEmailViaResend(data: Record<string, string | null>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INTAKE_NOTIFY_EMAIL || "chikuglobalsolutions@gmail.com";
  const from = process.env.INTAKE_FROM_EMAIL || "onboarding@resend.dev";
  if (!apiKey) return false;

  try {
    const lines = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
      .join("");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New AI Systems intake — ${data.businessName} (${data.businessType})`,
        html: `<h2>New Chiku AI Systems intake</h2>${lines}`,
        reply_to: data.contactEmail || undefined,
      }),
    });
    if (!res.ok) {
      console.warn("intake: resend failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.warn("intake: resend exception:", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: IntakePayload;
  try {
    body = (await request.json()) as IntakePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = validateIntake(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  const data = result.data;

  // Always log full submission — visible in Netlify function logs as a backup
  console.log("📥 INTAKE SUBMISSION:", JSON.stringify({ ...data, _at: new Date().toISOString() }, null, 2));

  // Best-effort persist + notify, both non-fatal
  await Promise.allSettled([tryPersistToDb(data), tryEmailViaResend(data)]);

  return NextResponse.json({ ok: true });
}
