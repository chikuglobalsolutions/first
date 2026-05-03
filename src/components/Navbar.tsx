"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-600">
          QRFlow
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#features" className="hover:text-gray-900 transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/generate" className="hover:text-gray-900 transition-colors">Generator</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/generate"
            className="text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get started free
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="#features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="#pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/generate" onClick={() => setOpen(false)}>Generator</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Sign in</Link>
          <Link
            href="/generate"
            className="bg-brand-600 text-white text-center py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Get started free
          </Link>
        </div>
      )}
    </nav>
  );
}
