import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PLANS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, label, color = "#000000", bgColor = "#ffffff", size = 300 } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try { new URL(url); } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    const userId = (session?.user as { id?: string })?.id;

    let isPro = false;

    if (userId) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      const planKey = (user?.plan ?? "free") as keyof typeof PLANS;
      const plan = PLANS[planKey] ?? PLANS.free;
      isPro = planKey !== "free";

      // qrLimit of -1 means unlimited (business tier)
      if (plan.qrLimit !== -1) {
        const count = await prisma.qRCode.count({ where: { userId } });
        if (count >= plan.qrLimit) {
          return NextResponse.json(
            { error: `${plan.name} plan limit reached (${plan.qrLimit} QR codes). Please upgrade.` },
            { status: 403 }
          );
        }
      }
    }

    const qrDataUrl = await QRCode.toDataURL(url, {
      width: size,
      margin: 2,
      color: {
        dark: isPro ? color : "#000000",
        light: isPro ? bgColor : "#ffffff",
      },
      errorCorrectionLevel: "M",
    });

    const qrRecord = await prisma.qRCode.create({
      data: {
        url,
        label: label || null,
        color: isPro ? color : "#000000",
        bgColor: isPro ? bgColor : "#ffffff",
        size,
        userId: userId || null,
      },
    });

    return NextResponse.json({
      dataUrl: qrDataUrl,
      shortCode: qrRecord.shortCode,
      id: qrRecord.id,
    });
  } catch (err) {
    console.error("QR generation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
