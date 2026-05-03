import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
          Free plan — no credit card required
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          QR codes that{" "}
          <span className="text-brand-600">work for you</span>{" "}
          24/7
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Generate beautiful, trackable QR codes in seconds. Watch your scans roll in while you sleep.
          Upgrade for real-time analytics, custom branding, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-brand-100"
          >
            Create your first QR code
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center font-semibold text-lg px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-700 transition-colors"
          >
            See pricing
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Trusted by 10,000+ creators, marketers, and small businesses
        </p>

        {/* Mock QR preview */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          {["Restaurant Menu", "Product Page", "WiFi Password", "Business Card"].map((label) => (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col items-center gap-3 w-36"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-gray-800" fill="currentColor">
                  <rect x="10" y="10" width="30" height="30" rx="4" />
                  <rect x="60" y="10" width="30" height="30" rx="4" />
                  <rect x="10" y="60" width="30" height="30" rx="4" />
                  <rect x="60" y="60" width="10" height="10" />
                  <rect x="80" y="60" width="10" height="10" />
                  <rect x="60" y="80" width="10" height="10" />
                  <rect x="80" y="80" width="10" height="10" />
                  <rect x="70" y="70" width="10" height="10" />
                </svg>
              </div>
              <span className="text-xs text-gray-500 text-center font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
