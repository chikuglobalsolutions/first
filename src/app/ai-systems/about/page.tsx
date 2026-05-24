import type { Metadata } from "next";
import Link from "next/link";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";

export const metadata: Metadata = {
  title: "About — Chiku AI Systems",
  description:
    "Chiku AI Systems builds done-for-you AI growth infrastructure for businesses across every industry. Founded by Akujuobi Nwabeke.",
};

const PRINCIPLES = [
  {
    icon: "⚡",
    title: "Speed over perfection",
    desc: "A live system with 80% optimization beats a perfect plan that's still in a slide deck. We ship, then we improve from real data.",
  },
  {
    icon: "📐",
    title: "Systems, not campaigns",
    desc: "A campaign runs once. A system runs forever. Every automation we build compounds in value the longer it runs.",
  },
  {
    icon: "🔢",
    title: "Revenue first",
    desc: "Every system we build has a direct line to revenue — leads booked, customers retained, deals closed. No vanity metrics.",
  },
  {
    icon: "🔓",
    title: "You own everything",
    desc: "Your automations run in your accounts. Your data stays yours. We build assets, not dependencies.",
  },
  {
    icon: "🧪",
    title: "Data-driven optimization",
    desc: "We test, measure, and iterate. Every system gets better over time because we track what's actually working.",
  },
  {
    icon: "🤝",
    title: "Honest scoping",
    desc: "We scope before we charge. If your business isn't a fit for AI systems right now, we'll tell you — and tell you what to fix first.",
  },
];

const STATS = [
  { metric: "12", label: "industries served" },
  { metric: "6", label: "core AI systems" },
  { metric: "2-3 wks", label: "avg time to live" },
  { metric: "100%", label: "client ownership of systems" },
];

export default function AISystemsAboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active="/ai-systems/about" />

      {/* Hero */}
      <section className="pt-32 pb-14 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            We build AI infrastructure for businesses that are done leaving growth on the table.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Chiku AI Systems is a done-for-you AI automation service built for business owners who know they need to
            move faster but don&apos;t have time to become AI engineers to do it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-5 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400">{s.metric}</p>
              <p className="text-sm font-semibold text-white mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-6">The story</p>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              Chiku AI Systems started as a question: why are small and mid-size businesses still manually following up
              with leads in 2024? Not because the automation doesn&apos;t exist — it does. Because no one has set it up
              for them.
            </p>
            <p>
              Most AI tools are either too complex (built for enterprises with IT teams) or too generic (chatbot
              templates that don&apos;t reflect how your business actually works). The result is that the businesses
              that need AI the most — the dental practice with a 3-person front desk, the real estate team chasing 200
              leads a month, the agency drowning in client reporting — are the ones still doing everything manually.
            </p>
            <p>
              We built Chiku AI Systems to be the implementation layer. You shouldn&apos;t have to know what Zapier is.
              You shouldn&apos;t have to configure an OpenAI API key. You should just tell us where your growth is
              stuck, and we build the system that fixes it.
            </p>
            <p>
              Our founder,{" "}
              <Link href="/about" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
                Akujuobi Nwabeke
              </Link>
              , built Chiku AI Systems as a service division of{" "}
              <Link href="/" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
                Chiku Global Solutions LLC
              </Link>
              . The mandate: make enterprise-grade AI automation accessible to any business, in any industry.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">What we believe</p>
            <h2 className="text-3xl font-extrabold text-white">How we think about this work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-extrabold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we're not */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs text-red-400 uppercase tracking-widest font-bold mb-4">What we&apos;re not</p>
              <ul className="space-y-3">
                {[
                  "A SaaS tool you configure yourself",
                  "A consulting firm that delivers slide decks",
                  "An agency that runs your ads",
                  "A chatbot company that installs a widget",
                  "A 6-month retainer before you see any results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-4">What we are</p>
              <ul className="space-y-3">
                {[
                  "A done-for-you implementation partner",
                  "Experts across 12 industries and 6 AI systems",
                  "A team that builds and then optimizes from real data",
                  "A service that hands you ownership of the final system",
                  "Live in 2-3 weeks, not months",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-sky-400 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent company */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Part of</p>
            <h2 className="text-2xl font-extrabold text-white mb-3">Chiku Global Solutions LLC</h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              Chiku AI Systems is one of three business divisions under Chiku Global Solutions LLC — a Wyoming LLC
              registered with the U.S. federal government (SAM.gov). Our mission is building revenue infrastructure
              that works even when you&apos;re not.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.05] border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-all"
              >
                Chiku Global Solutions →
              </Link>
              <Link
                href="/promptempire"
                className="text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.05] border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-all"
              >
                PromptEmpire →
              </Link>
              <Link
                href="/chiku-fit"
                className="text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.05] border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-all"
              >
                Chiku Fit →
              </Link>
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 md:w-56 flex-shrink-0 text-sm text-gray-400 space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Legal</p>
            <p>Wyoming LLC</p>
            <p>SAM.gov registered</p>
            <p>EIN on file</p>
            <p className="text-gray-600 text-xs">1621 Central Ave, Ste 8572<br />Cheyenne WY 82001</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to work with us?</h2>
          <p className="text-gray-400 mb-8">
            Fill out the 3-minute intake form. We review every application personally and respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ai-systems#intake"
              className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Apply now →
            </Link>
            <Link
              href="/ai-systems/process"
              className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              See how we work
            </Link>
          </div>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
