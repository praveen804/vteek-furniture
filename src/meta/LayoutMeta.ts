import { LayoutKeywords } from './keywords.meta';
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const LayoutMeta: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Luxe Furniture | Premium Home & Office Furnishings in Faridabad',
    template: '%s | Luxe Furniture Faridabad',
  },
  description:
    'Discover Luxe Furniture in Faridabad — your destination for premium home and office furnishings. Shop luxury sofas, tables, chairs, and decor with modern designs crafted by skilled Indian artisans. Free delivery across Delhi NCR.',
  applicationName: 'Luxe Furniture Faridabad',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  icons: {
    icon: [
      { url: `${BASE_URL}/favicon.ico` },
      { url: `${BASE_URL}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${BASE_URL}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: `${BASE_URL}/apple-icon.png` },
      { url: `${BASE_URL}/apple-icon-180x180.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: `${BASE_URL}/site.webmanifest`,
  category: 'furniture',
  keywords: [...LayoutKeywords, 'Faridabad', 'Delhi NCR', 'Indian furniture'],
  authors: [
    {
      name: 'Luxe Furniture Faridabad',
      url: BASE_URL,
    },
    {
      name: 'Luxe Furniture Team',
      url: `${BASE_URL}/about`,
    },
  ],
  creator: 'Luxe Furniture Faridabad',
  publisher: 'Luxe Furniture Faridabad',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-IN',
      'hi-IN': '/hi-IN',
    },
  },
  other: {
    'og:latitude': '28.4089',
    'og:longitude': '77.3178',
    'og:street-address': '123, Furniture Market, Sector 12',
    'og:locality': 'Faridabad',
    'og:region': 'Haryana',
    'og:postal-code': '121007',
    'og:country-name': 'India',
    'og:email': 'contact@luxefurniturefaridabad.com',
    'og:phone_number': '+91-9876543210',
  },
};
