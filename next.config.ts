import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches :{
      fullUrl: true,
      

    }
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  /* config options here */
};

export default nextConfig;
