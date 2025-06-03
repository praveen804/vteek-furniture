import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
}

export const HomeMeta: Metadata = {
  title: 'Luxe Furniture Faridabad | Premium Home & Office Furniture Store',
  description:
    "Faridabad's finest luxury furniture showroom. Handcrafted wooden furniture, premium sofas & complete home interiors. Free consultation & Delhi NCR delivery.",
  keywords: [
    'luxury furniture faridabad',
    'premium furniture store',
    'wooden furniture showroom',
    'home interior designers',
    'sofa set faridabad',
    'modular kitchen faridabad',
    'office furniture delhi ncr',
    'handcrafted furniture india',
  ],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-IN',
      'hi-IN': '/hi-IN',
    },
  },

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

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  other: {
    'geo.placename': 'Faridabad, Haryana',
    'geo.position': '28.4089;77.3178',
    'geo.region': 'IN-HR',
    ICBM: '28.4089, 77.3178',
    'business:contact_data:website': BASE_URL,
    'business:contact_data:email': 'contact@luxefurniturefaridabad.com',
    'business:contact_data:phone_number': '+919876543210',
  },
};
