import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

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
  openGraph: {
    title: 'Your Luxe Furniture Cart',
    description:
      'Check your selected items before finalizing your order. From bespoke sofas to solid wood beds, shop premium pieces now.',
    url: `${BASE_URL}/cart`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/og-cart.jpg`,
        width: 1200,
        height: 630,
        alt: 'Furniture Shopping Cart - Luxe Furniture Faridabad',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Luxe Furniture Cart',
    description:
      'Finalize your order of handcrafted furniture. Luxe Furniture offers secure checkout and nationwide delivery.',
    images: [`${BASE_URL}/images/twitter-cart.jpg`],
    site: '@LuxeFurnitureFBD',
  },
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
