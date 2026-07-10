import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsubscribed — Chiku Global Solutions",
  robots: { index: false },
};

export default function UnsubscribedPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const invalid = searchParams.status === "invalid";

  return (
    <main className="min-h-screen bg-black text-gray-200 flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center bg-white/[0.03] border border-white/10 rounded-2xl p-10">
        <div className="text-5xl mb-5">{invalid ? "🤔" : "✅"}</div>
        <h1 className="text-2xl font-extrabold text-white mb-3">
          {invalid ? "That link didn't work" : "You're unsubscribed"}
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          {invalid
            ? "The unsubscribe link looks expired or invalid. If you keep getting emails you don't want, reply to any of them and we'll remove you right away."
            : "You won't receive any more marketing emails from us. No hard feelings — you're always welcome back."}
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors"
        >
          Back to Chiku Global
        </Link>
      </div>
    </main>
  );
}
