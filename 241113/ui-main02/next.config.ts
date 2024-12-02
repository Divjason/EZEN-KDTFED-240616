import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"],
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:12345/api",
  },
};

export default nextConfig;
