import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";
import { POSTS, getPost, readingMinutes, type Post } from "@/lib/promptempire-posts";

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} | PromptEmpire`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
    alternates: { canonical: `/promptempire/blog/${post.slug}` },
  };
}

const STRIPE_BUNDLE = "https://buy.stripe.com/7sI8wR50Kf2adoI28X";

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active="/promptempire/blog" />

      {post.faq && post.faq.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Chiku Global Solutions LLC" },
            publisher: { "@type": "Organization", name: "PromptEmpire" },
          }),
        }}
      />

      <article className="pt-32 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/promptempire/blog" className="text-xs text-gray-500 hover:text-gray-300 font-semibold">
            ← All posts
          </Link>
          <div className="mt-6 mb-5 flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">{readingMinutes(post)} min read</span>
            <span className="text-gray-600">·</span>
            <time className="text-gray-500" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{post.description}</p>
        </div>
      </article>

      <section className="pb-16 px-5">
        <div className="max-w-3xl mx-auto space-y-5">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </section>

      {post.faq && post.faq.length > 0 ? (
        <section className="py-12 px-5 bg-white/[0.015] border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {post.faq.map((f, i) => (
                <details key={i} className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 group">
                  <summary className="text-base font-bold text-white cursor-pointer flex items-start justify-between gap-3">
                    <span>{f.q}</span>
                    <span className="text-violet-400 group-open:rotate-45 transition-transform text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-gray-400 leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Stop reading, start shipping</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            500 prompts. One payment. Lifetime use.
          </h2>
          <p className="text-gray-400 mb-8">
            10 categories. PDF + Notion. Works on free ChatGPT, Claude, or Gemini. 14-day refund.
          </p>
          <a
            href={STRIPE_BUNDLE}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-all shadow-2xl shadow-violet-900/60"
          >
            Get the Empire Bundle — $67 →
          </a>
          <p className="mt-4 text-xs text-gray-500">
            Or{" "}
            <Link href="/promptempire/preview" className="text-violet-400 hover:text-violet-300 underline">
              try 10 free prompts first
            </Link>
          </p>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-16 px-5 bg-white/[0.015] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold text-white mb-6">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/promptempire/blog/${p.slug}`}
                  className="block bg-white/[0.03] border border-white/8 hover:border-violet-500/30 rounded-2xl p-5 transition-colors"
                >
                  <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-extrabold text-white text-base leading-tight">{p.title}</h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-3">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <PromptEmpireFooter />
    </main>
  );
}

function Block({ block }: { block: Post["body"][number] }) {
  switch (block.type) {
    case "p":
      return <p className="text-base md:text-lg text-gray-300 leading-relaxed">{block.text}</p>;
    case "h2":
      return (
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-10 tracking-tight">{block.text}</h2>
      );
    case "h3":
      return <h3 className="text-xl font-extrabold text-white mt-6">{block.text}</h3>;
    case "ul":
      return (
        <ul className="list-none space-y-2 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-gray-300 leading-relaxed">
              <span className="text-violet-500 mt-2 text-xs">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-none space-y-2 pl-0 counter-reset-list">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-gray-300 leading-relaxed">
              <span className="text-violet-400 font-bold min-w-[1.5rem]">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-violet-500/40 pl-5 italic text-gray-300 text-lg">
          “{block.text}”
          {block.cite ? <footer className="text-sm text-gray-500 mt-2 not-italic">— {block.cite}</footer> : null}
        </blockquote>
      );
    case "code":
      return (
        <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden">
          {block.label ? (
            <div className="px-5 py-2 text-xs font-bold text-violet-400 bg-violet-500/5 border-b border-white/5 uppercase tracking-widest">
              {block.label}
            </div>
          ) : null}
          <pre className="px-5 py-4 text-xs md:text-sm leading-relaxed text-gray-200 font-mono whitespace-pre-wrap overflow-x-auto">
            {block.text}
          </pre>
        </div>
      );
    case "cta":
      return (
        <div className="text-center my-6">
          <a
            href={STRIPE_BUNDLE}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-base px-6 py-3 rounded-xl transition-all shadow-2xl shadow-violet-900/60"
          >
            {block.text} →
          </a>
        </div>
      );
  }
}
