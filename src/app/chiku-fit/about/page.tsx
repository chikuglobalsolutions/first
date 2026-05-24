import type { Metadata } from "next";
import Link from "next/link";
import { ChikuFitNav, ChikuFitFooter } from "@/components/ChikuFitNav";

export const metadata: Metadata = {
  title: "About Chiku Fit — Built by a Skinny Kid Who Figured It Out",
  description:
    "The story behind Chiku Fit — how Aku Nwabeke built a training and nutrition system for skinny beginners on a budget after failing every other program.",
};

export default function ChikuFitAboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ChikuFitNav active="/chiku-fit/about" />

      <section className="pt-32 pb-14 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">About Chiku Fit</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Built by a skinny kid who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              finally figured it out.
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            No transformation photos. No magic supplements. Just the system that actually worked when nothing else did.
          </p>
        </div>
      </section>

      <section className="py-12 px-5">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed text-lg">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">The starting point</h2>
            <p>
              Aku spent years as the skinny guy who couldn&apos;t put on weight no matter what he did.
              YouTube routines, random programs, expensive supplements — nothing stuck. He&apos;d gain 3lbs,
              lose focus on the program, drop back down, and start over.
            </p>
            <p className="mt-4">
              The frustrating part wasn&apos;t the effort. It was that the effort didn&apos;t produce results.
              He was lifting consistently. He was &quot;eating a lot.&quot; And his body didn&apos;t change.
            </p>
          </div>

          <div className="bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-xl p-6 my-8 italic text-emerald-100/80">
            <p>
              &quot;I followed every program. I bought every supplement. The thing that finally moved the needle
              was embarrassingly simple — and nobody was teaching it that way.&quot;
            </p>
            <p className="text-sm text-gray-500 mt-3 not-italic">— Aku Nwabeke</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">What finally worked</h2>
            <p>
              Two things. Not one of them was a secret supplement or a viral exercise.
            </p>
            <p className="mt-4">
              <strong className="text-white">First: actually eating in a calorie surplus.</strong> Not &quot;a lot&quot;
              by feel — a number. Tracked for 14 days. The honest truth was he was eating ~2,200 calories
              and thinking it was ~3,500. The body doesn&apos;t respond to vibes. It responds to math.
            </p>
            <p className="mt-4">
              <strong className="text-white">Second: double-progression overload.</strong> The boring, century-old method
              of adding reps until you hit the top of a range, then adding weight and resetting reps to the bottom.
              No fancy splits. No periodization. Just slowly, weekly, getting stronger.
            </p>
            <p className="mt-4">
              Combine those two and growth becomes almost automatic. The first 8 weeks of doing both
              produced more visible change than the previous 2 years combined.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Why we built Chiku Fit</h2>
            <p>
              Most fitness content is built for people who already get it. The advice assumes you already know
              what a calorie surplus is, that you know how to progress on the bench, that you have $200/month
              for a coach.
            </p>
            <p className="mt-4">
              Skinny beginners don&apos;t have any of that. They have a gym membership, $50 of grocery budget,
              and 8 weeks of motivation before they give up because nothing is changing.
            </p>
            <p className="mt-4">
              Chiku Fit is the system Aku wished existed when he started: <strong className="text-white">structured enough
              to follow without thinking, cheap enough to actually do, and honest enough to work.</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">What we don&apos;t promise</h2>
            <p>
              We don&apos;t promise you&apos;ll look like a fitness influencer in 12 weeks.
              We don&apos;t promise &quot;before and after&quot; transformation photos.
              We don&apos;t promise that this is easy.
            </p>
            <p className="mt-4">
              What we promise: if you eat in a surplus and run the program for 8 weeks, you will gain visible
              size and add weight to your main lifts. The math works. The history of strength training works.
              Your job is to follow the structure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to actually grow?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href="https://chikuglobal.gumroad.com/l/teliz" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Get the 8-Week Program — $49.99
            </a>
            <Link href="/chiku-fit/nutrition" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Read the nutrition philosophy
            </Link>
          </div>
        </div>
      </section>

      <ChikuFitFooter />
    </main>
  );
}
