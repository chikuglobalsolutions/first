import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";
import { SYSTEMS, getSystem } from "@/lib/ai-systems-data";

export async function generateStaticParams() {
  return SYSTEMS.map((s) => ({ slug: s.slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sys = getSystem(params.slug);
  if (!sys) return { title: "System not found" };
  return {
    title: `${sys.name} — Chiku AI Systems`,
    description: sys.shortDesc,
  };
}

export default function SystemDetailPage({ params }: Props) {
  const sys = getSystem(params.slug);
  if (!sys) notFound();

  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active={`/ai-systems/systems/${sys.slug}`} />

      <section className="pt-32 pb-14 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/ai-systems/systems" className="text-xs text-sky-400 hover:text-sky-300 font-bold uppercase tracking-widest">
              ← All systems
            </Link>
          </div>
          <div className="text-5xl mb-5">{sys.icon}</div>
          <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-3">AI System</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">{sys.name}</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">{sys.longDesc}</p>
        </div>
      </section>

      <section className="py-10 px-5 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {sys.outcomes.map((o) => (
            <div key={o.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400">{o.metric}</p>
              <p className="text-sm font-semibold text-white mt-1">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">The problem</p>
            <p className="text-gray-300 leading-relaxed">{sys.problem}</p>
          </div>
          <div>
            <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-3">The solution</p>
            <p className="text-gray-300 leading-relaxed">{sys.solution}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">How it works</p>
            <h2 className="text-3xl font-extrabold text-white">End-to-end</h2>
          </div>
          <ol className="space-y-4">
            {sys.howItWorks.map((step, i) => (
              <li key={step} className="flex items-start gap-4 bg-white/[0.03] border border-white/8 rounded-xl p-5">
                <div className="w-8 h-8 bg-sky-500/15 text-sky-400 font-extrabold rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-300 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Best for</p>
            <ul className="space-y-2">
              {sys.bestFor.map((b) => (
                <li key={b} className="flex items-center gap-2 text-gray-300">
                  <span className="text-sky-400">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Integrates with</p>
            <div className="flex flex-wrap gap-2">
              {sys.integrations.map((i) => (
                <span key={i} className="text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg">
                  {i}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/8">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Setup time</p>
              <p className="text-white font-bold">{sys.setupTime}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want this system in your business?</h2>
          <p className="text-gray-400 mb-8">
            Tell us about your business in the 3-minute intake form. We&apos;ll respond within 24 hours with a scope and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ai-systems#intake" className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Apply for this system →
            </Link>
            <Link href="/ai-systems/systems" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              See the other 5 systems
            </Link>
          </div>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
