/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain website to ./out
  // that can be uploaded to any host (Vercel, Netlify, Cloudflare Pages, cPanel, Nginx...).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
