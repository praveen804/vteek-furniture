import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const LoginMeta: Metadata = {
  title: 'Login to Your Luxe Furniture Account | Secure Access to Orders & Wishlist',
  description:
    'Access your Luxe Furniture account to view orders, manage your wishlist, and explore custom furniture options. Secure and easy login.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/login',
  },
  keywords: [
    'Luxe Furniture login',
    'customer login Faridabad furniture',
    'secure account access furniture store',
    'Luxe Furniture user portal',
    'track furniture orders India',
    'manage wishlist Luxe Furniture',
  ],
 
  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'customer-authentication',
    'security:login:encrypted': 'true',
    'security:login:oauth_supported': 'true',
    'security:login:session_timeout': '20min',
  },
};
