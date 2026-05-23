import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-6xl font-extrabold text-brand-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-gray-400 mb-8">That page doesn&apos;t exist. Here&apos;s where you can go instead.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Home
          </Link>
          <Link
            href="/promptempire"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            PromptEmpire
          </Link>
          <Link
            href="/chiku-fit"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Chiku Fit
          </Link>
        </div>
      </div>
    </main>
  );
}
