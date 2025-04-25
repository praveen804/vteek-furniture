import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	output: 'standalone',
	reactStrictMode: true,

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
	},
};

export default nextConfig;
