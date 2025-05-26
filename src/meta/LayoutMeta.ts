import { LayoutKeywords } from "./keywords.meta";



const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const openGraph = {
  title: {
    default: 'Luxe Furniture | Premium Home & Office Furnishings',
    template: '%s | Luxe Furniture',
  },
  description:
    'Explore Luxe Furniture curated collection of modern and luxurious home & office furniture. From designer sofas to handcrafted wood tables, find the perfect pieces to elevate your space.',
  url: BASE_URL,
  siteName: 'Luxe Furniture',
  locale: 'en_US',
  type: 'website',
  images: [
    {
      url: `${BASE_URL}/opengraph-image.png`,
      secureUrl: `${BASE_URL}/opengraph-image.png`,
      width: 1200,
      height: 630,
      alt: 'Luxe Furniture Open Graph Image',
    },
  ],
};

const twitter = {
  card: 'summary_large_image',
  title: 'Luxe Furniture | Luxury Furniture for Home & Office',
  description:
    'Shop Luxe Furniture online for elegant, handcrafted furniture. Discover premium collections for living, dining, office, and bedroom spaces.',
  images: [`${BASE_URL}/opengraph-image.png`],
  creator: '@LuxeFurniture',
};



export const LayoutMeta = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Luxe Furniture | Premium Home & Office Furnishings',
    template: '%s | Luxe Furniture',
  },
  description:
    'Discover Luxe Furniture — your destination for premium home and office furnishings. Shop luxury sofas, tables, chairs, and decor with modern design, top-quality craftsmanship, and fast shipping.',
  openGraph,
  twitter,
  applicationName: 'Luxe Furniture ',
  keywords: LayoutKeywords,
  authors: [{ name: 'Luxe Furniture' }, { name: 'Luxe Furniture Team', url: BASE_URL }],
  creator: 'Luxe Furniture',
  publisher: BASE_URL,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'fr-FR': '/fr-FR',
    },
  },
};
