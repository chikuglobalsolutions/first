import type { Metadata } from "next";
import Link from "next/link";
import QRGenerator from "@/components/QRGenerator";

export const metadata: Metadata = {
  title: "Free QR Code Generator — Chiku Global Solutions",
  description:
    "Generate a QR code for free in seconds. No account needed. A free tool from Chiku Global Solutions LLC.",
  openGraph: {
    title: "Free QR Code Generator",
    description: "Instant QR code generator. Free, no signup, downloadable PNG.",
    type: "website",
  },
};

export default function GeneratePage() {
  return (
    <>
      {/* Minimal nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-white tracking-tight">
            Chiku Global Solutions
          </Link>
          <Link
            href="/promptempire"
            className="text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            AI Prompts →
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Free QR Code Generator
          </h1>
          <p className="text-gray-400 text-lg">
            Paste your link, generate, download — done in 5 seconds. No signup needed.
          </p>
        </div>

        <QRGenerator plan="free" />

        {/* Cross-sell to PromptEmpire */}
        <div className="max-w-2xl mx-auto mt-12 bg-brand-600/10 border border-brand-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="text-4xl">🤖</div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-white mb-1">Need prompts for your business?</p>
            <p className="text-sm text-gray-400">
              500 AI prompts for cold emails, sales pages, SOPs, and more — from Chiku Global Solutions.
            </p>
          </div>
          <Link
            href="/promptempire"
            className="flex-shrink-0 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
          >
            See PromptEmpire →
          </Link>
        </div>
      </main>
    </>
  );
}
