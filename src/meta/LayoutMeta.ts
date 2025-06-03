import { LayoutKeywords } from './keywords.meta';
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
}

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

  openGraph: {
    title: {
      default: 'Luxe Furniture | Premium Furniture Store in Faridabad',
      template: '%s | Luxe Furniture Faridabad',
    },
    description:
      "Faridabad's premier luxury furniture destination. Handcrafted wooden furniture, premium upholstery, and custom interior solutions for homes and offices across Delhi NCR.",
    url: BASE_URL,
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        // secureUrl: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Showroom in Faridabad - Premium Furniture Collection',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/opengraph-image`,
        // secureUrl: `${BASE_URL}/opengraph-image`,
        width: 1600,
        height: 900,
        alt: 'Luxe Furniture Faridabad - Interior Design Gallery',
        type: 'image/png',
      },
    ],
    emails: ['contact@luxefurniturefaridabad.com'],
    phoneNumbers: ['+91-9876543210'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Furniture | Luxury Furniture Store in Faridabad',
    description:
      'Premium furniture showroom in Faridabad offering handcrafted wooden furniture, modular designs, and complete home interior solutions for Delhi NCR residents.',
    images: [
      {
        url: `${BASE_URL}/twitter-image`,
        alt: 'Luxe Furniture Faridabad Showroom - Luxury Living Room Sets',
        width: 1200,
        height: 600,
      },
    ],
    site: '@LuxeFurnitureFBD',
    creator: '@LuxeFurnitureFBD',
  },


  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
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
    'og:street-address': 'House no 28,Pal, Furniture Market, Sector 37',
    'og:locality': 'Faridabad',
    'og:region': 'Haryana',
    'og:postal-code': '121003',
    'og:country-name': 'India',
    'og:email': 'contact@luxefurniturefaridabad.com',
    'og:phone_number': '+91-9876543210',
  },
};
