import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LEAD_MAGNETS, getLeadMagnet } from "@/lib/lead-magnets";

export function generateStaticParams() {
  return LEAD_MAGNETS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = getLeadMagnet(params.slug);
  if (!m) return { title: "Not found" };
  return {
    title: `${m.title} — free from Chiku Global`,
    description: m.subtitle,
    robots: { index: false }, // delivery page for opt-ins, keep out of search
  };
}

// Render trusted **bold** segments from the static lead-magnet content.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="text-white font-bold">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function LeadMagnetPage({ params }: { params: { slug: string } }) {
  const m = getLeadMagnet(params.slug);
  if (!m) notFound();

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
        <div className="text-5xl mb-4">{m.emoji}</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{m.title}</h1>
        <p className="text-lg text-gray-400 mb-8">{m.subtitle}</p>

        <p className="text-gray-300 leading-relaxed mb-10 bg-white/[0.03] border border-white/10 rounded-xl p-5">
          {m.intro}
        </p>

        {m.sections.map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-xl font-extrabold text-white mb-4">{s.heading}</h2>
            {s.body && (
              <p className="text-gray-300 leading-relaxed">
                <RichText text={s.body} />
              </p>
            )}
            {s.items && (
              <ul className="space-y-3">
                {s.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 leading-relaxed">
                    <span className="text-sky-500 mt-1 shrink-0">▸</span>
                    <span>
                      <RichText text={it} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-7 text-center">
          {m.cta.note && <p className="text-gray-300 mb-5">{m.cta.note}</p>}
          <Link
            href={m.cta.href}
            className="inline-block px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors shadow-lg shadow-sky-900/40"
          >
            {m.cta.label}
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-gray-600">
          A product of{" "}
          <Link href="/" className="text-gray-400 hover:text-white font-semibold">
            Chiku Global Solutions LLC
          </Link>
        </p>
      </div>
    </main>
  );
}
