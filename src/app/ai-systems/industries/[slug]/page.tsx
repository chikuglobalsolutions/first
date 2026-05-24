import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";
import { INDUSTRIES, SYSTEMS, getIndustry } from "@/lib/ai-systems-data";

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = getIndustry(params.slug);
  if (!ind) return { title: "Industry not found" };
  return {
    title: `AI Systems for ${ind.name} — Chiku AI Systems`,
    description: ind.shortDesc,
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  const recommendedSystems = ind.recommendedSystems
    .map((slug) => SYSTEMS.find((s) => s.slug === slug))
    .filter(Boolean) as typeof SYSTEMS;

  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active={`/ai-systems/industries/${ind.slug}`} />

      {/* Hero */}
      <section className="pt-32 pb-14 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/ai-systems/industries"
              className="text-xs text-sky-400 hover:text-sky-300 font-bold uppercase tracking-widest"
            >
              ← All industries
            </Link>
          </div>
          <div className="text-5xl mb-5">{ind.icon}</div>
          <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-3">Industry playbook</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">{ind.name}</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">{ind.shortDesc}</p>
        </div>
      </section>

      {/* Outcome metrics */}
      <section className="py-10 px-5 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {ind.caseSnapshot.map((o) => (
            <div key={o.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400">{o.metric}</p>
              <p className="text-sm font-semibold text-white mt-1">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pain + workflow */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">The problem</p>
            <p className="text-gray-300 leading-relaxed">{ind.pain}</p>
          </div>
          <div>
            <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-3">How it works in practice</p>
            <p className="text-gray-300 leading-relaxed">{ind.exampleWorkflow}</p>
          </div>
        </div>
      </section>

      {/* Recommended systems */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Recommended for this industry</p>
            <h2 className="text-3xl font-extrabold text-white">The systems we build for {ind.name}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {recommendedSystems.map((sys) => (
              <Link
                key={sys.slug}
                href={`/ai-systems/systems/${sys.slug}`}
                className="group bg-white/[0.03] border border-white/8 hover:border-sky-500/40 rounded-2xl p-6 transition-all"
              >
                <div className="text-3xl mb-4">{sys.icon}</div>
                <h3 className="font-extrabold text-white mb-2 group-hover:text-sky-300 transition-colors text-sm">
                  {sys.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{sys.shortDesc}</p>
                <div className="grid grid-cols-3 gap-1 pt-4 border-t border-white/5">
                  {sys.outcomes.map((o) => (
                    <div key={o.label} className="text-center">
                      <p className="text-xs font-extrabold text-sky-400">{o.metric}</p>
                      <p className="text-[9px] text-gray-500 leading-tight mt-0.5">{o.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  See full breakdown →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-6 text-center">Other industries</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {INDUSTRIES.filter((i) => i.slug !== ind.slug).map((i) => (
              <Link
                key={i.slug}
                href={`/ai-systems/industries/${i.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 hover:border-white/20 px-3 py-1.5 rounded-lg transition-all"
              >
                <span>{i.icon}</span>
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to build these systems for your {ind.name.toLowerCase()} business?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us about your business — we&apos;ll scope out which of these systems has the highest leverage for your
            specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ai-systems#intake"
              className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Apply for a system →
            </Link>
            <Link
              href="/ai-systems/systems"
              className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Browse all systems
            </Link>
          </div>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
