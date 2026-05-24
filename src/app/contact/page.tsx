import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Chiku Global Solutions LLC",
  description:
    "Get in touch with Chiku Global Solutions LLC. For sales, partnerships, support, or press inquiries — we read every email and respond within 24 hours.",
};

const CONTACT_REASONS = [
  {
    icon: "💼",
    title: "AI Systems inquiry",
    desc: "You want to talk about getting an AI growth system built for your business.",
    action: "Use the intake form",
    href: "/ai-systems#intake",
    isExternal: false,
  },
  {
    icon: "🤝",
    title: "Partnerships & affiliates",
    desc: "You have an audience or business that lines up with one of our products.",
    action: "Email us",
    href: "mailto:chikuglobalsolutions@gmail.com?subject=Partnership%20Inquiry",
    isExternal: true,
  },
  {
    icon: "💬",
    title: "Product support",
    desc: "You bought PromptEmpire or Chiku Fit and need help with your download or refund.",
    action: "Email support",
    href: "mailto:chikuglobalsolutions@gmail.com?subject=Product%20Support",
    isExternal: true,
  },
  {
    icon: "📰",
    title: "Press & media",
    desc: "You're writing about ADHD entrepreneurship, AI in business, or Wyoming-based startups.",
    action: "Email press",
    href: "mailto:chikuglobalsolutions@gmail.com?subject=Press%20Inquiry",
    isExternal: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-white tracking-tight">
            Chiku Global <span className="text-gray-600 text-sm font-medium hidden sm:inline">Solutions LLC</span>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">About</Link>
            <Link href="/promptempire" className="text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">PromptEmpire</Link>
            <Link href="/chiku-fit" className="text-gray-400 hover:text-white transition-colors font-medium hidden md:block">Chiku Fit</Link>
            <Link href="/ai-systems" className="text-gray-400 hover:text-white transition-colors font-medium hidden md:block">AI Systems</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-5 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Real founder. <span className="text-violet-400">Real replies.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Every email goes straight to Aku. No tickets, no bots, no tier-3 escalations.
            We reply within 24 hours (usually within a few).
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
          {CONTACT_REASONS.map((r) => (
            <div key={r.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 flex flex-col">
              <div className="text-3xl mb-4">{r.icon}</div>
              <h2 className="font-extrabold text-white text-lg mb-2">{r.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{r.desc}</p>
              {r.isExternal ? (
                <a href={r.href} className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-bold text-sm transition-colors">
                  {r.action} →
                </a>
              ) : (
                <Link href={r.href} className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-bold text-sm transition-colors">
                  {r.action} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Direct contact</h2>
          <p className="text-gray-400 mb-8">For anything not covered above — just email us directly.</p>
          <div className="space-y-3">
            <a
              href="mailto:chikuglobalsolutions@gmail.com"
              className="inline-block text-2xl font-extrabold text-violet-400 hover:text-violet-300 transition-colors"
            >
              chikuglobalsolutions@gmail.com
            </a>
            <p className="text-sm text-gray-500">Phone: (781) 375-9585</p>
            <p className="text-sm text-gray-500">Mail: 1621 Central Ave, Ste 8572 · Cheyenne, WY 82001</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-4">Browse our brands while you wait</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/promptempire" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">PromptEmpire</Link>
            <Link href="/chiku-fit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">Chiku Fit</Link>
            <Link href="/ai-systems" className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">AI Systems</Link>
          </div>
        </div>
      </section>

      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p className="text-gray-400 font-bold text-sm">Chiku Global Solutions LLC</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/promptempire" className="hover:text-gray-400">PromptEmpire</Link>
            <Link href="/chiku-fit" className="hover:text-gray-400">Chiku Fit</Link>
            <Link href="/ai-systems" className="hover:text-gray-400">AI Systems</Link>
          </div>
          <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
        </div>
      </footer>
    </main>
  );
}
