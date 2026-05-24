import type { Metadata } from "next";
import Link from "next/link";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";
import { SYSTEMS } from "@/lib/ai-systems-data";

export const metadata: Metadata = {
  title: "All AI Systems — 6 Done-For-You Growth Systems | Chiku AI Systems",
  description:
    "Browse the 6 AI growth systems we build for businesses: lead follow-up, review generation, booking optimization, AI sales assistant, reactivation campaigns, and reporting automation.",
};

export default function SystemsListPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active="/ai-systems/systems" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">All AI systems</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            6 systems. <span className="text-sky-400">Mix and match for your business.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every system is custom-built for your business — not a template, not a plugin. Click any to see the full breakdown.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {SYSTEMS.map((sys) => (
            <Link
              key={sys.slug}
              href={`/ai-systems/systems/${sys.slug}`}
              className="group bg-white/[0.03] border border-white/8 hover:border-sky-500/40 rounded-2xl p-7 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{sys.icon}</span>
                <span className="text-xs text-sky-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2">{sys.name}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{sys.shortDesc}</p>
              <div className="grid grid-cols-3 gap-2 pt-5 border-t border-white/5">
                {sys.outcomes.map((o) => (
                  <div key={o.label} className="text-center">
                    <p className="text-base font-extrabold text-sky-400">{o.metric}</p>
                    <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{o.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not sure which one fits?</h2>
          <p className="text-gray-400 mb-8">
            Fill out the intake form — we&apos;ll recommend the 1-3 systems with the highest leverage for your business.
          </p>
          <Link href="/ai-systems#intake" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-all shadow-2xl shadow-sky-900/60">
            Get a recommendation →
          </Link>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
