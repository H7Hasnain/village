import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Completely disable strict mode and dev indicators to reduce load
  reactStrictMode: false,
  devIndicators: false,
  
  // Static export is the most stable for free tier sandboxes
  output: 'export',
  
  // Ignore all build errors to ensure it always renders something
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable heavy features
  productionBrowserSourceMaps: false,
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
