import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

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
  openGraph: {
    title: 'Register | Luxe Furniture Faridabad',
    description:
      'Join Luxe Furniture and get access to premium features like wishlist, order tracking, and design consultations. Sign up today.',
    url: `${BASE_URL}/register`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/og-register.jpg`,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Registration Page Preview',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up for Luxe Furniture | Access Exclusive Member Benefits',
    description:
      'Register with Luxe Furniture to access your dashboard, save favorites, and receive personalized design help.',
    images: [`${BASE_URL}/images/twitter-register.jpg`],
    site: '@LuxeFurnitureFBD',
  },
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
