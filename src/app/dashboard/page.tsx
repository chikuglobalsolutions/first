import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export const metadata = { title: "Dashboard – QRFlow" };

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { upgraded?: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login?redirect=/dashboard");
  }

  const userId = (session.user as { id: string }).id;

  const [user, qrCodes] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    prisma.qRCode.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      select: { id: true, url: true, label: true, scans: true, shortCode: true, createdAt: true },
    }),
  ]);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gray-50">
        {searchParams.upgraded === "1" && (
          <div className="max-w-5xl mx-auto px-4 pt-4">
            <div className="bg-green-50 border border-green-100 text-green-800 rounded-xl px-5 py-4 text-sm font-medium">
              🎉 Welcome to Pro! Your account has been upgraded. Enjoy analytics and custom branding.
            </div>
          </div>
        )}
        <Dashboard
          qrCodes={qrCodes.map((qr) => ({ ...qr, createdAt: qr.createdAt.toISOString() }))}
          plan={user?.plan ?? "free"}
          userEmail={session.user.email!}
        />
      </main>
    </>
  );
}
