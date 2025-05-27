import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';
if (!BASE_URL) {
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
