import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        {/* Social proof / CTA strip */}
        <section className="py-20 px-4 bg-brand-600">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Start earning while you sleep
            </h2>
            <p className="text-brand-100 text-xl mb-8">
              Set up once. Your QR codes do the work — in restaurants, storefronts, social media, and print.
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-50 transition-colors"
            >
              Generate your first QR code — free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-4 border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <span className="font-bold text-gray-700">QRFlow</span>
            <div className="flex gap-6">
              <Link href="/generate" className="hover:text-gray-700">Generator</Link>
              <Link href="#pricing" className="hover:text-gray-700">Pricing</Link>
              <Link href="/dashboard" className="hover:text-gray-700">Dashboard</Link>
            </div>
            <span>© {new Date().getFullYear()} QRFlow. All rights reserved.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
