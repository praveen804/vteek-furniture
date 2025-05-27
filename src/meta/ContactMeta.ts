import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

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
