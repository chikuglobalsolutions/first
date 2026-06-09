import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";
import { AUDIENCES, getAudience } from "@/lib/promptempire-audiences";

type Params = { slug: string };

export function generateStaticParams() {
  return AUDIENCES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const a = getAudience(params.slug);
  if (!a) return { title: "Not found" };
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/promptempire/for/${a.slug}` },
    openGraph: { title: a.title, description: a.description, type: "website" },
  };
}

const STRIPE_LINKS = {
  prompts: "https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh",
  freelancer: "https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01",
  bundle: "https://buy.stripe.com/7sI8wR50Kf2adoI28X",
};

export default function AudiencePage({ params }: { params: Params }) {
  const a = getAudience(params.slug);
  if (!a) notFound();

  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active={`/promptempire/for/${a.slug}`} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs font-bold px-4 py-1.5 rounded-full mb-7 uppercase tracking-widest">
            {a.hero.eyebrow}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-5">
            {a.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {a.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={STRIPE_LINKS.bundle}
              className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-9 py-4 rounded-xl transition-all shadow-2xl shadow-violet-900/60"
            >
              Get the Empire Bundle — $67 →
            </a>
            <Link
              href="/promptempire/preview"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-colors"
            >
              See 10 free samples
            </Link>
          </div>
          <p className="text-sm text-gray-500">14-day money-back guarantee · Works with free ChatGPT · Instant download</p>
        </div>
      </section>

      {/* Pains */}
      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Sound familiar?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              You don&apos;t need another tool. You need the words.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {a.pains.map((p) => (
              <div key={p.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top categories for this audience */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">The 5 categories you&apos;ll use most</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              500 total prompts. <span className="text-violet-400">These are the ones you&apos;ll open first.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {a.topCategories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                    {cat.count} prompts
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/promptempire/categories" className="text-sm font-semibold text-violet-400 hover:text-violet-300">
              See all 10 categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Sample use cases */}
      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">What it actually does</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Real prompts. Real outcomes.
            </h2>
          </div>
          <div className="space-y-3">
            {a.sampleUseCases.map((u) => (
              <div key={u.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-32 shrink-0">
                  <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                    {u.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-white text-base mb-1">{u.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{u.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/promptempire/preview" className="text-sm font-semibold text-violet-400 hover:text-violet-300">
              Try 10 free prompts first →
            </Link>
          </div>
        </div>
      </section>

      {/* Why this offer */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Why this works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">The whole pitch in 5 lines.</h2>
          </div>
          <div className="space-y-3">
            {a.whyThis.map((line, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/8 rounded-2xl p-4">
                <span className="text-violet-400 font-extrabold text-lg leading-none mt-0.5">{i + 1}.</span>
                <p className="text-base text-gray-300 leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="pricing" className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Pick your tier</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Buy once. Own forever.
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <a href={STRIPE_LINKS.prompts} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-violet-500/30 transition-colors">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">500 Prompts</p>
              <p className="text-3xl font-extrabold text-white mb-3">$37</p>
              <p className="text-sm text-gray-400">The full library. PDF + Notion.</p>
            </a>
            <a href={STRIPE_LINKS.freelancer} className="bg-violet-500/10 border-2 border-violet-500/40 rounded-2xl p-6 hover:border-violet-500/60 transition-colors">
              <p className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-2">Command Center</p>
              <p className="text-3xl font-extrabold text-white mb-3">$47</p>
              <p className="text-sm text-gray-400">Pack + freelancer OS. Most popular.</p>
            </a>
            <a href={STRIPE_LINKS.bundle} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-violet-500/30 transition-colors">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Empire Bundle</p>
              <p className="text-3xl font-extrabold text-white mb-3">$67</p>
              <p className="text-sm text-gray-400">Everything + agency SOPs. Best value.</p>
            </a>
          </div>
        </div>
      </section>

      <PromptEmpireFooter />
    </main>
  );
}
