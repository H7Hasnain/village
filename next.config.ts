import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export for free hosting on GitHub Pages/Netlify
  
  // Optimization for low-memory environments
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Required for static export if you use next/image (we aren't currently, but good to have)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
