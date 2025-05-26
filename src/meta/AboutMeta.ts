import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;
export const AboutMeta: Metadata = {
  title: 'About Luxe Furniture | Crafting Premium Furnishings in Faridabad Since 2010',
  description:
    'Discover our legacy of handcrafted luxury furniture in Faridabad. Meet the artisans behind your premium home & office furnishings. Ethical sourcing, custom designs.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/about',
  },
  keywords: [
    'luxury furniture makers Faridabad',
    'about our furniture workshop',
    'handcrafted furniture artisans',
    'Luxe Furniture story',
    'premium furniture craftsmanship',
    'ethical furniture production India',
    'custom furniture designers Delhi NCR',
  ],
  openGraph: {
    title: 'Our Story | Luxe Furniture Faridabad',
    description:
      "For over a decade, we've transformed spaces with heirloom-quality furniture crafted by Faridabad's finest artisans.",
    url: `${BASE_URL}/about`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Artisans Handcrafting Wooden Furniture',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
    emails: ['craftsmen@luxefurniturefaridabad.com'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the Makers Behind Luxe Furniture',
    description:
      'Since 2010, our Faridabad workshop has delivered bespoke furniture to 1000+ happy homes across Delhi NCR.',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'business:business:company_name': 'Luxe Furniture Pvt. Ltd.',
    'business:business:founder': 'Rajiv Malhotra',
    'business:business:founding_date': '2010-05-15',
    'business:business:founding_location': 'Faridabad, Haryana',
    'business:business:employee_count': '50+ artisans',
    'business:business:awards': 'Best Luxury Furniture Brand 2023 (Haryana)',
  },
};
