import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';
if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const OrderSuccessMeta: Metadata = {
  title: 'Thank You for Your Order | Luxe Furniture Faridabad',
  description:
    'Your order has been placed successfully! Our artisans will begin crafting your luxury furniture shortly. Check your email for order details and delivery updates.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/order-success',
  },
  keywords: [
    'order confirmation Luxe Furniture',
    'thank you for your order',
    'furniture order success',
    'Luxe Furniture delivery confirmation',
    'custom furniture order placed',
    'Faridabad luxury furniture order complete',
  ],
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'order-confirmation',
    'order:status': 'success',
    'order:tracking_enabled': 'true',
    'support:contact_email': 'support@luxefurniturefaridabad.com',
    'customer:next_steps': 'track-order, receive updates, delivery scheduling',
  },
};
