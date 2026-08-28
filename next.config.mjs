/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ship the private PDFs with the gated download function bundle on Netlify
  // so they're readable via fs at runtime without being publicly served.
  outputFileTracingIncludes: {
    "/api/delivery/download/[product]": ["./private/pdfs/**/*"],
  },
};

export default nextConfig;
