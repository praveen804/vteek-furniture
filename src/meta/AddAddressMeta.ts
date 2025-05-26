import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

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
  openGraph: {
    title: 'Add Address | Luxe Furniture Faridabad',
    description:
      'Securely add your address for quick furniture deliveries and hassle-free order processing.',
    url: `${BASE_URL}/addAddress`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Add New Address Form - Luxe Furniture Dashboard',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Add a Delivery Address | Luxe Furniture',
    description:
      'Save your address for easy furniture delivery across Delhi NCR and other regions in India.',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
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
