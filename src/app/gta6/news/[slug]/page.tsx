import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, PRODUCTS, WAITLIST_MAILTO, getArticle } from "@/lib/gta6-data";

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.title} — GTA 6 Hub`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default function GTA6ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const featured = PRODUCTS.find((p) => p.highlight) ?? PRODUCTS[0];

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-medium">
              Chiku Global Solutions
            </Link>
            <span className="text-white/20 text-sm">›</span>
            <Link href="/gta6" className="font-extrabold text-white tracking-tight text-sm hover:text-pink-300 transition-colors">
              GTA 6 Hub
            </Link>
          </div>
          <Link
            href="/gta6#guides"
            className="text-xs font-bold bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-lg transition-colors"
          >
            Get the guides →
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/gta6" className="text-xs text-pink-400 hover:text-pink-300 font-bold uppercase tracking-widest">
            ← All coverage
          </Link>
          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", {
                timeZone: "UTC",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-xs text-gray-600">· {article.readMinutes} min read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            {article.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">{article.excerpt}</p>
        </div>
      </section>

      {/* Body */}
      <article className="pb-16 px-5">
        <div className="max-w-3xl mx-auto space-y-12">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-extrabold text-white mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-gray-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Sources */}
          <section className="border-t border-white/8 pt-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Sources</p>
            <ul className="space-y-2">
              {article.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-pink-300 underline underline-offset-2 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      {/* Cross-sell */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">{featured.name}</h2>
          <p className="text-gray-400 mb-8">{featured.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={featured.href ?? WAITLIST_MAILTO}
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              {featured.href ? `${featured.cta} — ${featured.price}` : featured.cta} →
            </a>
            <Link
              href="/gta6#guides"
              className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              See all guides
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <span className="text-gray-400 font-bold">GTA 6 Hub</span>
            {" · "}A product of{" "}
            <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
              Chiku Global Solutions LLC
            </Link>
          </div>
          <p className="max-w-md text-center md:text-right leading-relaxed">
            Unofficial fan site. Not affiliated with or endorsed by Rockstar Games or Take-Two Interactive.
          </p>
        </div>
      </footer>
    </main>
  );
}
