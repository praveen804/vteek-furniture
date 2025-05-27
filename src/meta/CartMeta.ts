import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const CartMeta: Metadata = {
  title: 'Your Shopping Cart | Luxe Furniture Faridabad',
  description:
    'Review the handcrafted furniture items you’ve added to your Luxe Furniture cart. Secure checkout with nationwide delivery and custom design options.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/cart',
  },
  keywords: [
    'Luxe Furniture cart',
    'review furniture order',
    'handcrafted furniture shopping bag',
    'checkout Luxe Furniture',
    'custom furniture cart',
    'Faridabad luxury furniture store cart',
  ],

  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'shopping-cart',
    'cart:status': 'active',
    'cart:item_count': 'dynamic',
    'checkout:secure': 'true',
    'checkout:estimated_delivery': '7-14 business days',
  },
};
