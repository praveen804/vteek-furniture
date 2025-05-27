import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

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
