import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Chiku Global Solutions",
  description:
    "Practical guides on AI prompts, budget bulking, practice automation, and small-business marketing from the Chiku Global brands.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-950">
      <section className="pt-28 pb-12 px-5 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 font-bold uppercase tracking-widest">
            ← Chiku Global
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-5 mb-4">The Blog</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Practical, no-fluff guides across our brands — AI prompts, budget bulking, practice
            automation, and small-business marketing.
          </p>
        </div>
      </section>

      <section className="py-12 px-5">
        <div className="max-w-3xl mx-auto space-y-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block bg-white/[0.03] border border-white/8 hover:border-white/20 rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold uppercase tracking-widest ${p.accent}`}>{p.brand}</span>
                <span className="text-xs text-gray-600">{p.date}</span>
                <span className="text-xs text-gray-600">· {p.readMins} min read</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">{p.title}</h2>
              <p className="text-gray-400 leading-relaxed">{p.description}</p>
              <p className="text-sm font-semibold text-white mt-4">Read →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
