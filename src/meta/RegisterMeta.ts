import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';
if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} 

export const RegisterMeta: Metadata = {
  title: 'Create Your Luxe Furniture Account | Join Our Premium Furniture Community',
  description:
    'Register to access exclusive designs, track your orders, save favorites, and get custom furniture recommendations from Luxe Furniture Faridabad.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/register',
  },
  keywords: [
    'Luxe Furniture sign up',
    'create account Faridabad furniture',
    'register Luxe Furniture India',
    'custom furniture portal login',
    'track orders Luxe Furniture',
    'join Luxe Furniture community',
  ],

  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'user-registration',
    'security:register:encrypted': 'true',
    'security:register:spam_protection': 'reCAPTCHA v3',
    'registration:incentives': 'early access, custom design wishlist, exclusive discounts',
  },
};
