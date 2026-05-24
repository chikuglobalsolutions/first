import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type IntakePayload = {
  businessName?: string;
  businessType?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  monthlyRevenue?: string;
  teamSize?: string;
  currentChallenge?: string;
  goalsIn90Days?: string;
  budgetRange?: string;
  preferredPlan?: string;
};

const REQUIRED_FIELDS = [
  "businessName",
  "businessType",
  "contactName",
  "contactEmail",
  "currentChallenge",
  "goalsIn90Days",
] as const;

export async function POST(request: Request) {
  let body: IntakePayload;
  try {
    body = (await request.json()) as IntakePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((f) => !body[f]);
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const email = body.contactEmail!.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const submission = await prisma.intakeSubmission.create({
      data: {
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
      },
    });

    return NextResponse.json({ ok: true, id: submission.id });
  } catch (err) {
    console.error("intake error:", err);
    return NextResponse.json({ error: "Could not save submission" }, { status: 500 });
  }
}
