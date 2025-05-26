import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const OrdersMeta: Metadata = {
  title: 'Your Orders | Luxe Furniture Account',
  description:
    'View your past and current Luxe Furniture orders, including tracking details, order status, and purchase history. Delivered with craftsmanship, care, and precision.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/orders',
  },
  keywords: [
    'Luxe Furniture order history',
    'track furniture order India',
    'furniture delivery status',
    'view past orders Luxe Furniture',
    'custom furniture order tracking',
    'Luxe account order dashboard',
  ],
  openGraph: {
    title: 'Order History | Luxe Furniture',
    description:
      'Access all your Luxe Furniture orders in one place. Track status, view invoices, and manage your deliveries with ease.',
    url: `${BASE_URL}/orders`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Furniture Order History - Luxe Furniture Dashboard',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Luxe Furniture Orders',
    description:
      'See your full order history, status updates, and delivery information. All in your Luxe Furniture dashboard.',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'order-history',
    'order:tracking_enabled': 'true',
    'account:section': 'orders',
    'orders:invoice_download': 'true',
    'orders:support_contact': 'support@luxefurniturefaridabad.com',
  },
};
