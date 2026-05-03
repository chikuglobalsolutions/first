import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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

    if (userId) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (user?.plan === "free") {
        const count = await prisma.qRCode.count({ where: { userId } });
        if (count >= 5) {
          return NextResponse.json(
            { error: "Free plan limit reached (5 QR codes). Please upgrade to Pro." },
            { status: 403 }
          );
        }
      }
    }

    const isPro = userId
      ? (await prisma.user.findUnique({ where: { id: userId } }))?.plan !== "free"
      : false;

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
