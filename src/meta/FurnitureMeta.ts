import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

export const FurnitureMeta: Metadata = {
  title: 'Luxury Furniture Collection | Premium Handcrafted Designs by Luxe Furniture Faridabad',
  description:
    'Browse our exclusive collection of handcrafted luxury furniture for living rooms, bedrooms, and offices. Sustainably made by master artisans in Faridabad since 2010.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/furniture',
  },
  keywords: [
    'luxury furniture Faridabad',
    'handcrafted wooden furniture India',
    'premium sofas and chairs',
    'solid wood beds and tables',
    'artisan-made furniture Delhi NCR',
    'custom home furniture Faridabad',
    'Luxe Furniture collection',
  ],
  openGraph: {
    title: 'Our Luxury Furniture Collection | Luxe Furniture Faridabad',
    description:
      'Explore bespoke furniture handcrafted with care. From statement armchairs to solid wood beds, each piece reflects timeless craftsmanship.',
    url: `${BASE_URL}/furniture`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Luxury Furniture Showcase - Sofas, Beds, Chairs by Luxe Furniture',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Premium Furniture by Luxe Furniture Faridabad',
    description:
      'Luxury furniture crafted with love in Faridabad since 2010. Discover sofas, beds, dining sets and more in our premium collection.',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'business:business:company_name': 'Luxe Furniture Pvt. Ltd.',
    'business:business:founding_location': 'Faridabad, Haryana',
    'product:collection:category': 'Furniture',
    'product:collection:materials': 'Teakwood, Sheesham, Upholstery, Marble',
    'product:collection:styles': 'Modern, Classic, Mid-century, Rustic',
    'product:collection:customizable': 'Yes',
    'product:collection:artisan_count': '50+ skilled craftsmen',
    'product:collection:delivery_areas': 'Delhi NCR, Pan-India',
    'product:collection:showroom_location': 'Sector 21C, Faridabad',
  },
};
