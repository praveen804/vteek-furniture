import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	output: 'standalone',
	logging: {
		fetches: {
			fullUrl: true,
			hmrRefreshes: true,
		},
	},

	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
	splitChunks: {
		// Enable automatic code splitting
		chunks: 'all',
	},
	/* config options here */
};

export default nextConfig;
