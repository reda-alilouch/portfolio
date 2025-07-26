import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    css: {
      lightningcss: false,
    },
  },
} as any;

export default nextConfig;
