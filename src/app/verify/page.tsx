import Link from "next/link";

export const metadata = { title: "Check your email – QRFlow" };

export default function VerifyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-6">📬</div>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Check your email</h1>
        <p className="text-gray-500 mb-6">
          A sign-in link has been sent to your email. Click it to access your dashboard.
        </p>
        <Link href="/" className="text-sm text-brand-600 font-semibold hover:underline">
          ← Back to QRFlow
        </Link>
      </div>
    </main>
  );
}
