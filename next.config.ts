import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    // Retirez la clé 'css' qui n'existe pas
  },
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
