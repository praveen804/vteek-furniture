import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'standalone',
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ lets build succeed even with lint errors
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all HTTPS sources (use carefully)
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
