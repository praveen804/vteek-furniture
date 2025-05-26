import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

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
  openGraph: {
    title: 'Luxe Furniture | Secure Checkout',
    description:
      'Finalize your handcrafted furniture purchase with Luxe Furniture. Secure payment, easy delivery, and custom options available.',
    url: `${BASE_URL}/checkout`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/og-checkout.jpg`,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Secure Checkout Page Preview',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Checkout | Luxe Furniture',
    description:
      'Complete your order of luxury furniture with confidence. Enjoy secure payments and quick delivery across India.',
    images: [`${BASE_URL}/images/twitter-checkout.jpg`],
    site: '@LuxeFurnitureFBD',
  },
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
