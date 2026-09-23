import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clinquant-faloodeh-70c1be.netlify.app",
      },
      {
        protocol: "https",
        hostname: "bentos-nuxtjs-rktheme.vercel.app",
      },
    ],
  },
};

export default nextConfig;
