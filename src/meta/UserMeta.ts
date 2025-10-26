import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} 

export const UserMeta: Metadata = {
  title: 'Your Profile | Luxe Furniture Account Dashboard',
  description:
    'Manage your Luxe Furniture account settings, saved addresses, orders, and preferences. Personalized furniture experiences start here.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/user',
  },
  keywords: [
    'Luxe Furniture account',
    'profile settings',
    'update user details',
    'manage furniture orders',
    'user dashboard Luxe Furniture',
    'custom furniture account profile',
  ],

  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'account-dashboard',
    'account:user_type': 'authenticated',
    'account:edit_enabled': 'true',
    'account:email_verified': 'dynamic',
    'support:contact_email': 'support@luxefurniturefaridabad.com',
  },
};
