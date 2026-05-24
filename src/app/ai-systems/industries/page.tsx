import type { Metadata } from "next";
import Link from "next/link";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";
import { INDUSTRIES } from "@/lib/ai-systems-data";

export const metadata: Metadata = {
  title: "Industries We Serve — Chiku AI Systems",
  description:
    "AI growth systems built for 12 industries: dental, legal, real estate, local services, restaurants, e-commerce, SaaS, coaching, fitness, agencies, financial services, and automotive.",
};

export default function IndustriesListPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active="/ai-systems/industries" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Industries we serve</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            12 industries. <span className="text-sky-400">One playbook per vertical.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve built AI systems across every industry below. Click yours for the specific systems and workflows we recommend.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/ai-systems/industries/${ind.slug}`}
              className="group bg-white/[0.03] border border-white/8 hover:border-sky-500/40 rounded-2xl p-6 transition-all"
            >
              <div className="text-3xl mb-4">{ind.icon}</div>
              <h2 className="font-extrabold text-white mb-2 group-hover:text-sky-300 transition-colors">{ind.name}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{ind.shortDesc}</p>
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                See playbook →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Don&apos;t see your industry?</h2>
          <p className="text-gray-400 mb-8">
            We&apos;ve built systems for plenty of industries that aren&apos;t listed. Tell us yours and we&apos;ll scope a custom system.
          </p>
          <Link href="/ai-systems#intake" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-all shadow-2xl shadow-sky-900/60">
            Tell us about your business →
          </Link>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
