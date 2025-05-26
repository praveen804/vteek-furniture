import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';if (!BASE_URL) {
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
  openGraph: {
    title: 'Order Confirmed | Luxe Furniture',
    description:
      'Thank you for shopping with Luxe Furniture. Your order is confirmed and in progress. Expect craftsmanship updates and delivery notifications soon.',
    url: `${BASE_URL}/order-success`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Order Success Confirmation - Luxe Furniture',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Confirmed | Luxe Furniture Faridabad',
    description:
      'We’ve received your order and our artisans are getting started. Track your order and enjoy your Luxe experience.',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
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
