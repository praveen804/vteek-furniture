import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} 
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
