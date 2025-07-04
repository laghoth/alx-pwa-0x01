import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  // ...existing config...
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default nextConfig;
