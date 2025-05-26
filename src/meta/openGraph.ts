const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
}

interface OpenGraphOptions {
  title?: string;
  description?: string;
  image?: string;
  urlPath?: string;
}

export function generateOpenGraph({
  title = 'Luxe Furniture | Premium Home & Office Furnishings',
  description = 'Explore Luxe Furniture curated collection of modern and luxurious home & office furniture. From designer sofas to handcrafted wood tables, find the perfect pieces to elevate your space.',
  image = 'https://luxe-furniture-ecommerce.vercel.app/opengraph-image.png',
  urlPath = '/',
}: OpenGraphOptions = {}) {
  return {
    title: {
      default: title,
      template: '%s | Luxe Furniture',
    },
    description,
    url: `${BASE_URL}${urlPath}`,
    siteName: 'Luxe Furniture',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: image,
        secureUrl: image,
        width: 1200,
        height: 630,
        alt: 'Luxe Furniture Open Graph Image',
      },
    ],
  };
}
