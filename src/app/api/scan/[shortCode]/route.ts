import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { detectDevice } from "@/lib/scan";

export async function GET(
  req: NextRequest,
  { params }: { params: { shortCode: string } }
) {
  const { shortCode } = params;

  const qr = await prisma.qRCode.findUnique({ where: { shortCode } });

  if (!qr) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const headersList = headers();
  const device = detectDevice(headersList.get("user-agent"));

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
