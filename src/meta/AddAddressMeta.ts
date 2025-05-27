import type { Metadata } from 'next';

const BASE_URL = 'https://luxe-furniture-ecommerce.vercel.app';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

export const AddAddressMeta: Metadata = {
  title: 'Add New Address | Luxe Furniture Account Dashboard',
  description:
    'Add a new shipping or billing address to your Luxe Furniture account for faster checkout and order tracking.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/addAddress',
  },
  keywords: [
    'add address Luxe Furniture',
    'update shipping details',
    'furniture delivery address form',
    'Luxe Furniture account address',
    'manage billing address India',
    'Faridabad furniture delivery info',
  ],

  robots: {
    index: false,
    follow: false,
  },
  other: {
    'page:purpose': 'address-management',
    'security:form:encrypted': 'true',
    'form:type': 'shipping-and-billing',
    'form:validation': 'enabled',
    'form:address:country_restriction': 'India only',
  },
};
