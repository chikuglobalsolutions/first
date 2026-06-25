import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Chiku Global`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-gray-950">
      <article className="pt-28 pb-16 px-5">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="text-xs text-gray-500 hover:text-gray-300 font-bold uppercase tracking-widest">
            ← All posts
          </Link>

          <div className="flex items-center gap-3 mt-6 mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest ${post.accent}`}>{post.brand}</span>
            <span className="text-xs text-gray-600">{post.date}</span>
            <span className="text-xs text-gray-600">· {post.readMins} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8">{post.title}</h1>

          {post.videoSrc && (
            <video
              className="w-full max-w-sm mx-auto rounded-2xl border border-white/10 mb-10"
              src={post.videoSrc}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          <div className="space-y-8">
            {post.body.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>
                )}
                {section.paras?.map((p, j) => (
                  <p key={j} className="text-gray-300 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mt-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 leading-relaxed">
                        <span className={`${post.accent} mt-1`}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/8 text-center">
            <Link
              href={post.cta.href}
              className="inline-block bg-white text-gray-950 font-bold px-7 py-3.5 rounded-xl hover:bg-gray-200 transition-colors"
            >
              {post.cta.label} →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
