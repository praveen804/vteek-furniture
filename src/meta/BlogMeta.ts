import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const BlogMeta: Metadata = {
  title: ' Furniture trending Blogs | Luxe Furniture Design Tips & Trends',
  description:
    ' Example: "Explore the latest luxury furniture trends and expert design tips for your home. Discover how to elevate your interior with Luxe Furniture insights..',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: `/blog`,
  },
  keywords: [
    'luxury furniture trends',
    'home interior design tips',
    '{topic-specific keyword}',
    'Faridabad home decor',
    'premium furniture care',
  ],
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'article:published_time': '{YYYY-MM-DDTHH:MM:SSZ}',
    'article:modified_time': '{YYYY-MM-DDTHH:MM:SSZ}',
    'article:author': 'Luxe Furniture Team',
    'article:section': '{Category}', // e.g., "Living Room"
  },
};
