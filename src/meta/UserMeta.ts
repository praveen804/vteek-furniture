import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

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
  openGraph: {
    title: 'Your Luxe Furniture Profile',
    description:
      'Access and manage your Luxe Furniture account, including your orders, preferences, and personal details.',
    url: `${BASE_URL}/user`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/og-user.jpg`,
        width: 1200,
        height: 630,
        alt: 'User Profile Dashboard - Luxe Furniture',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Furniture | Account Dashboard',
    description:
      'Manage your profile, address book, and order history from your Luxe Furniture account dashboard.',
    images: [`${BASE_URL}/images/twitter-user.jpg`],
    site: '@LuxeFurnitureFBD',
  },
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
