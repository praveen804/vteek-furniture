import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "standalone",
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  devIndicators: {
    buildActivity: true, // Shows build activity in the browser
    buildActivityPosition: "bottom-left", // Position for build activity indicator
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  /* config options here */
};

export default nextConfig;
