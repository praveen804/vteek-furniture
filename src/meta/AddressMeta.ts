import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const AddressMeta: Metadata = {
  title: 'Your Saved Addresses | Luxe Furniture Account Dashboard',
  description:
    'Manage your saved shipping and billing addresses for a faster, personalized Luxe Furniture shopping experience. Update, edit, or remove addresses anytime.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/address',
  },
  keywords: [
    'saved addresses Luxe Furniture',
    'manage shipping address',
    'account address book',
    'billing details Luxe Furniture',
    'update delivery location',
    'Luxe Furniture address list',
  ],
  openGraph: {
    title: 'Manage Your Addresses | Luxe Furniture Faridabad',
    description:
      'Securely manage all your saved addresses for seamless delivery of your handcrafted furniture.',
    url: `${BASE_URL}/address`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'User Address Book - Luxe Furniture',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saved Addresses | Luxe Furniture Account',
    description:
      'View, update, or add shipping and billing addresses to your Luxe Furniture account.',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'address-dashboard',
    'security:data_protection': 'enabled',
    'account:section': 'addresses',
    'form:address:max_saved': '5',
    'form:address:edit_enabled': 'true',
  },
};
