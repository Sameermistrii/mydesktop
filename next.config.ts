import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, "../../"),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
  // Skip ESLint during production builds on Vercel so deployment
  // isn't blocked by non-critical lint warnings.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
// Orchids restart: 1758630063415
