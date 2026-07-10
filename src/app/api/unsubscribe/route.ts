import { NextResponse } from "next/server";
import { verifyUnsubToken } from "@/lib/subscribe-token";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// One-click unsubscribe from the link in every marketing email.
// The token is an HMAC of the email, so a valid link can only come from us —
// nobody can unsubscribe an address they don't have a signed link for.

function redirectTo(request: Request, path: string) {
  const base = process.env.NEXTAUTH_URL || new URL(request.url).origin;
  return NextResponse.redirect(new URL(path, base));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = (searchParams.get("email") || "").trim().toLowerCase();
  const token = searchParams.get("token") || "";

  if (!email || !token || !verifyUnsubToken(email, token)) {
    return redirectTo(request, "/unsubscribed?status=invalid");
  }

  try {
    const { prisma } = await import("@/lib/prisma");
    await prisma.emailSubscriber.updateMany({
      where: { email },
      data: { status: "unsubscribed" },
    });
  } catch (err) {
    console.warn("unsubscribe: db update failed (non-fatal):", err instanceof Error ? err.message : err);
  }

  // Best-effort mirror to Mailchimp.
  try {
    const { unsubscribeFromMailchimp } = await import("@/lib/mailchimp");
    await unsubscribeFromMailchimp(email);
  } catch {
    /* non-fatal */
  }

  console.log("👋 UNSUBSCRIBED:", email);
  return redirectTo(request, "/unsubscribed?status=ok");
}
