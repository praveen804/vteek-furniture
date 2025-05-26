import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

export const WishlistMeta: Metadata = {
  title: 'Your Wishlist | Luxe Furniture Favorites',
  description:
    'View your saved Luxe Furniture pieces. Easily revisit your favorite handcrafted furniture items and move them to your cart when ready.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/wishlist',
  },
  keywords: [
    'Luxe Furniture wishlist',
    'saved furniture items',
    'favorite luxury furniture',
    'custom furniture wishlist',
    'Faridabad furniture showroom online',
    'bespoke furniture ideas',
  ],
  openGraph: {
    title: 'Your Luxe Furniture Wishlist',
    description:
      'Revisit your favorite handcrafted furniture anytime. Save, customize, and order when the time is right.',
    url: `${BASE_URL}/wishlist`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/og-wishlist.jpg`,
        width: 1200,
        height: 630,
        alt: 'Saved Furniture Wishlist - Luxe Furniture Faridabad',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wishlist | Luxe Furniture',
    description:
      'Keep track of the furniture you love. Your Luxe Furniture wishlist is just a click away from becoming your dream space.',
    images: [`${BASE_URL}/images/twitter-wishlist.jpg`],
    site: '@LuxeFurnitureFBD',
  },
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'wishlist',
    'wishlist:item_count': 'dynamic',
    'wishlist:shareable': 'false',
    'wishlist:synced': 'true',
    'wishlist:move_to_cart': 'enabled',
  },
};
