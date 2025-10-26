import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';
if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} 

export const CheckoutMeta: Metadata = {
  title: 'Secure Checkout | Luxe Furniture Faridabad',
  description:
    'Complete your Luxe Furniture purchase securely. Confirm delivery details, payment options, and review your handcrafted furniture order.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/checkout',
  },
  keywords: [
    'Luxe Furniture checkout',
    'secure payment furniture',
    'confirm furniture order',
    'luxury furniture billing',
    'Faridabad furniture delivery',
    'custom furniture purchase',
  ],

  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'checkout-process',
    'checkout:secure': 'true',
    'checkout:encryption': 'TLS 1.3',
    'checkout:payment_methods': 'Card, UPI, EMI, Bank Transfer',
    'checkout:estimated_delivery': '7–14 business days',
    'checkout:support_contact': 'support@luxefurniturefaridabad.com',
  },
};
