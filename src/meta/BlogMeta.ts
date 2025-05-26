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
  openGraph: {
    title: ' Furniture trending Blogs | Luxe Furniture Insights',
    description: '{Truncated version of meta description for social sharing}',
    url: `/blog`,
    type: 'article',
    publishedTime: '{YYYY-MM-DDTHH:MM:SSZ}', // e.g., "2024-05-20T08:00:00Z"
    modifiedTime: '{YYYY-MM-DDTHH:MM:SSZ}',
    authors: ['Luxe Furniture Team', '{Author Name (if applicable)}'],
    tags: ['{Tag 1}', '{Tag 2}'], // e.g., ["Sofas", "Interior Design"]
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: '{Descriptive alt text for the image}',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{Blog Post Title}',
    description: '{Hook-like teaser for Twitter (under 120 chars)}',
    images: [`${BASE_URL}/opengraph-image.png`],
    creator: '@LuxeFurnitureFBD',
  },
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
