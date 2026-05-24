import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Downloads — PromptEmpire",
  robots: { index: false, follow: false },
};

const DOWNLOADS = [
  {
    id: "core",
    featured: true,
    label: "Core Product",
    name: "500 AI Business Prompts",
    desc: "The complete library — 500 done-for-you prompts across 10 business categories. Works with free ChatGPT, Claude, or Gemini.",
    href: "/downloads/500-AI-Business-Prompts.pdf",
    size: "81 KB",
  },
  {
    id: "freelancer",
    featured: false,
    label: "Command Center",
    name: "Freelancer Command Center",
    desc: "Your full AI-powered business OS. Client onboarding, proposals, invoices, and project management — all built with prompts.",
    href: "/downloads/Freelancer-Command-Center.pdf",
    size: "61 KB",
  },
  {
    id: "email",
    featured: false,
    label: "Bonus",
    name: "Email Empire Swipe File",
    desc: "Proven cold email and follow-up templates. Copy, customize, and send — no writing required.",
    href: "/downloads/Email-Empire-Swipe-File.pdf",
    size: "43 KB",
  },
  {
    id: "content",
    featured: false,
    label: "Bonus",
    name: "30-Day Content Machine",
    desc: "A complete 30-day social content calendar with prompts for every post. Never wonder what to write again.",
    href: "/downloads/30-Day-Content-Machine.pdf",
    size: "41 KB",
  },
];

const NEXT_STEPS = [
  "Download all 4 files above — save them somewhere you'll actually find them",
  "Open 500-AI-Business-Prompts.pdf and browse the categories",
  "Go to ChatGPT (free) or Claude and try Prompt #1 in your niche",
  "Come back when you've used it — then try the cold outreach or sales page section",
];

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Success bar */}
      <div className="bg-emerald-600 text-white text-center py-3 px-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
        ORDER CONFIRMED — YOUR DOWNLOADS ARE BELOW
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold tracking-widest text-sky-500 uppercase">Chiku Global Solutions</p>
          <p className="text-lg font-extrabold text-gray-900 leading-tight">PromptEmpire</p>
        </div>
        <span className="text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-widest">
          Delivery Page
        </span>
      </header>

      {/* Hero */}
      <div className="bg-gray-900 text-white text-center py-14 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
          Welcome to <span className="text-sky-400">PromptEmpire.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Your downloads are ready. Save them to your device and open them in any PDF reader.
        </p>
      </div>

      {/* Downloads */}
      <div className="max-w-3xl mx-auto px-5 py-10 -mt-6 relative">
        <div className="space-y-4">
          {DOWNLOADS.map((file) => (
            <div
              key={file.id}
              className={`bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm ${
                file.featured ? "border-2 border-sky-400" : "border border-gray-200"
              }`}
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" strokeWidth={1.5} />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-0.5">{file.label}</p>
                <p className="font-extrabold text-gray-900 mb-1">{file.name}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{file.desc}</p>
              </div>
              <a
                href={file.href}
                download
                className="flex-shrink-0 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                Download
              </a>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="mt-10 bg-sky-50 border-l-4 border-sky-400 rounded-xl p-6">
          <h3 className="font-extrabold text-gray-900 mb-4">What to do next</h3>
          <ol className="space-y-2.5 list-decimal list-inside">
            {NEXT_STEPS.map((step) => (
              <li key={step} className="text-sm text-gray-700 leading-relaxed">{step}</li>
            ))}
          </ol>
        </div>

        {/* Help */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-sm text-gray-500">
            Questions? Email{" "}
            <a href="mailto:chikuglobalsolutions@gmail.com" className="text-sky-500 font-bold hover:text-sky-700">
              chikuglobalsolutions@gmail.com
            </a>{" "}
            — replies within 24 hours.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 text-center text-xs py-6 px-4 mt-10">
        <p>
          <Link href="/" className="text-gray-400 hover:text-white font-semibold">
            Chiku Global Solutions LLC
          </Link>
          {" · "}Wyoming{" · "}chikuglobalsolutions@gmail.com
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Chiku Global Solutions LLC — All rights reserved</p>
      </footer>
    </main>
  );
}
