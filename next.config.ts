import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable strict mode to save memory in dev
  reactStrictMode: false,
  
  // Static export for free hosting
  output: 'export',
  
  // Optimization for low-memory environments
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable source maps in production to save build memory
  productionBrowserSourceMaps: false,
  
  // Required for static export
  images: {
    unoptimized: true,
  },
  
  // Experimental options to reduce memory usage
  experimental: {
    // optimizeCss: true, // sometimes causes issues, keeping off for safety
    // scrollRestoration: true,
  },
};

export default nextConfig;
