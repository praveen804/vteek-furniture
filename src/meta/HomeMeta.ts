import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

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
    title: 'Luxe Furniture Faridabad | Premium Furniture Showroom',
    description:
      'Explore our exclusive collection of luxury furniture in Faridabad. Custom designs, premium materials & expert craftsmanship for your dream home.',
    url: BASE_URL,
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Faridabad Showroom - Premium Sofa Collections',
      },
    ],
    emails: ['showroom@luxefurniturefaridabad.com'],
    phoneNumbers: ['+91-9876543210', '+91-11-41234567'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Furniture Faridabad | Luxury Furniture Showroom',
    description:
      'Premium furniture solutions in Faridabad. Custom designs, free consultation & installation across Delhi NCR.',
    images: [`${BASE_URL}/opengraph-image.png`],
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
