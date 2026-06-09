import type { Metadata } from "next";
import Link from "next/link";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { POSTS, readingMinutes } from "@/lib/promptempire-posts";

export const metadata: Metadata = {
  title: "PromptEmpire Blog — ChatGPT prompts, AI workflows & freelance playbooks",
  description:
    "Practical playbooks on ChatGPT prompts for cold email, content, sales pages, and AI workflows for freelancers and solopreneurs. Free reads from the 500 AI Business Prompts pack.",
};

const STRIPE_BUNDLE = "https://buy.stripe.com/7sI8wR50Kf2adoI28X";

export default function BlogIndexPage() {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active="/promptempire/blog" />

      <section className="pt-32 pb-12 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">The PromptEmpire blog</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Playbooks for getting <span className="text-violet-400">paid faster</span> with AI.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Practical, copy-paste prompts and frameworks for freelancers, solopreneurs, and ADHD entrepreneurs.
            Same prompts as the 500-pack — read free, ship today.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-4xl mx-auto space-y-4">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              href={`/promptempire/blog/${p.slug}`}
              className="block group bg-white/[0.03] border border-white/8 hover:border-violet-500/30 rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3 text-xs">
                <span className="font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                  {p.category}
                </span>
                <span className="text-gray-500">{readingMinutes(p)} min read</span>
                <span className="text-gray-600">·</span>
                <time className="text-gray-500" dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-violet-200 transition-colors mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
              <p className="mt-4 text-sm font-semibold text-violet-400 group-hover:text-violet-300">
                Read the playbook →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-xl mx-auto">
          <LeadMagnetForm
            source="promptempire-blog-index"
            context="blog index bottom CTA"
            headline="Want next week's playbook in your inbox?"
            sub="One email per week with the highest-converting prompt of the week — and the 30-Day Content Machine PDF in your first email."
            cta="Send me the playbook"
          />
        </div>
      </section>

      <section className="py-16 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Skip the reading list</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get the full 500 for $37.
          </h2>
          <p className="text-gray-400 mb-8">
            10 categories. PDF + Notion. Works with free ChatGPT. Lifetime updates.
          </p>
          <a
            href={STRIPE_BUNDLE}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-all shadow-2xl shadow-violet-900/60"
          >
            Get the Empire Bundle — $67 →
          </a>
        </div>
      </section>

      <PromptEmpireFooter />
    </main>
  );
}
