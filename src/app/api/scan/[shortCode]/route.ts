import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ shortCode: string }> }
) {
  const { shortCode } = await params;

  const qr = await prisma.qRCode.findUnique({ where: { shortCode } });

  if (!qr) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const headersList = await headers();
  const ua = headersList.get("user-agent") || "";
  const device = /mobile|android|iphone|ipad/i.test(ua) ? "mobile" : "desktop";

  await prisma.$transaction([
    prisma.qRCode.update({
      where: { id: qr.id },
      data: { scans: { increment: 1 } },
    }),
    prisma.scanLog.create({
      data: {
        qrCodeId: qr.id,
        device,
      },
    }),
  ]);

  return NextResponse.redirect(qr.url);
}
