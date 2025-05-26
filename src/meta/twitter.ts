const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

interface TwitterOptions {
  title?: string;
  description?: string;
  image?: string;
}

export function generateTwitter({
  title = 'Luxe Furniture | Luxury Furniture for Home & Office',
  description = 'Shop Luxe Furniture online for elegant, handcrafted furniture. Discover premium collections for living, dining, office, and bedroom spaces.',
  image = `${BASE_URL}/opengraph-image.png`,
}: TwitterOptions = {}) {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
    creator: '@LuxeFurniture',
  };
}
