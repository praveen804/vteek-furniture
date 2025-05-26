
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
if (!BASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APP_URL');
} ;

interface ReusableMetaOptions {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export const generateMetadata = ({ title, description, image = `${BASE_URL}/opengraph-image.png`, path = '/',}: ReusableMetaOptions) => {

  const formattedTitle = title  ? `${title} | Luxe Furniture`  : 'Luxe Furniture | Premium Home & Office Furnishings';
  const formattedDescription =  description ||  'Discover Luxe Furniture — your destination for premium home and office furnishings. Shop luxury sofas, tables, chairs, and decor with modern design, top-quality craftsmanship, and fast shipping.';
  const url = `${BASE_URL}${path}`;

  return {
    title: formattedTitle,
    description: formattedDescription,
    openGraph: {
      title: formattedTitle,
      description: formattedDescription,
      url,
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
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: formattedDescription,
      images: [image],
      creator: '@LuxeFurniture',
    },
    alternates: {
      canonical: path,
      languages: {
        'en-US': '/en-US',
        'fr-FR': '/fr-FR',
      },
    },
  };
};
