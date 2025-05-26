import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL as string;

export const ContactMeta: Metadata = {
  title: 'Contact Luxe Furniture Faridabad | Showroom & Interior Design Consultation',
  description:
    'Visit our Faridabad furniture showroom or schedule a free design consultation. Call +91-9876543210 or email contact@luxefurniturefaridabad.com for inquiries.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/contact',
  },
  keywords: [
    'luxury furniture contact faridabad',
    'furniture showroom near me',
    'interior designer consultation',
    'custom furniture inquiry',
    'visit furniture store faridabad',
    'luxe furniture phone number',
    'office furniture contact delhi ncr',
    'home decor consultation',
  ],
  openGraph: {
    title: 'Contact Our Furniture Experts | Luxe Furniture Faridabad',
    description:
      'Get in touch for premium furniture solutions. Showroom address: 123, Furniture Market, Sector 12, Faridabad. Open Mon-Sat 10AM-8PM.',
    url: `${BASE_URL}/contact`,
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Faridabad Showroom Entrance - Visit Us Today',
      },
    ],
    siteName: 'Luxe Furniture Faridabad',
    locale: 'en_IN',
    emails: ['contact@luxefurniturefaridabad.com', 'showroom@luxefurniturefaridabad.com'],
    phoneNumbers: ['+91-9876543210', '+91-11-41234567'],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Luxe Furniture Faridabad Showroom',
    description:
      '📍 Sector 12, Faridabad | ☎ +91-9876543210 | 💻 contact@luxefurniturefaridabad.com | Open Mon-Sat 10AM-8PM',
    images: [`${BASE_URL}/opengraph-image.png`],
    site: '@LuxeFurnitureFBD',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.placename': 'Faridabad, Haryana',
    'geo.position': '28.4089;77.3178',
    'geo.region': 'IN-HR',
    ICBM: '28.4089, 77.3178',
    'business:contact_data:opening_hours': 'Mo-Sa 10:00-20:00',
    'business:contact_data:website': BASE_URL,
    'business:contact_data:email': 'contact@luxefurniturefaridabad.com',
    'business:contact_data:phone_number': '+919876543210',
    'business:contact_data:street_address': '123, Furniture Market, Sector 12',
    'business:contact_data:locality': 'Faridabad',
    'business:contact_data:region': 'Haryana',
    'business:contact_data:postal_code': '121007',
    'business:contact_data:country_name': 'India',
  },
};
