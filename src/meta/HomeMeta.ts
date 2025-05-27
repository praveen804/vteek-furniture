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
