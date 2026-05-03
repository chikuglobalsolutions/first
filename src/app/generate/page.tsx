import Navbar from "@/components/Navbar";
import QRGenerator from "@/components/QRGenerator";
import Link from "next/link";

export const metadata = {
  title: "Free QR Code Generator – QRFlow",
  description: "Generate a QR code for free in seconds. No account needed.",
};

export default function GeneratePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Free QR Code Generator
          </h1>
          <p className="text-gray-500 text-lg">
            Paste your link, hit generate, download — done in 5 seconds.
          </p>
        </div>

        <QRGenerator plan="free" />

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            Need analytics & custom branding?{" "}
            <Link href="/#pricing" className="text-brand-600 font-semibold">
              See Pro plans →
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
