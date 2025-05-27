/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

type TwitterImageProps = {
  title: string;
  description: string;
  logoUrl?: string;
  brandName?: string;
  theme?: {
    backgroundColor?: string;
    textColor?: string;
    logoBackground?: string;
  };
  size?: {
    width: number;
    height: number;
  };
};

export const defaultTwitterImageProps = {
  size: {
    width: 1500,
    height: 500,
  },
  contentType: 'image/png',
  theme: {
    backgroundColor: '#7C3AED',
    textColor: '#FFFFFF',
    logoBackground: '#FFFFFF',
  },
  logoUrl: 'https://luxe-furniture-ecommerce.vercel.app/apple-icon.png',
  brandName: 'Luxe Furniture',
};

export const generateTwitterImage = async (props: TwitterImageProps) => {
  const {
    title,
    description,
    logoUrl = defaultTwitterImageProps.logoUrl,
    brandName = defaultTwitterImageProps.brandName,
    theme = defaultTwitterImageProps.theme,
    size = defaultTwitterImageProps.size,
  } = props;

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            padding: '24px',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            {/* Branding */}
            {logoUrl && brandName && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img
                  src={logoUrl}
                  alt={brandName}
                  width={50}
                  height={50}
                  
                />
                <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>{brandName}</h1>
              </div>
            )}

            {/* Title */}
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.2' }}>{title}</h2>

            {/* Description */}
            <p style={{ fontSize: '18px', maxWidth: '720px', lineHeight: '1.5', opacity: 0.9 }}>
              {description}
            </p>
          </div>
        </div>
      ),
      {
        ...size,
      },
    );
  } catch (error) {
    console.error('Error generating Twitter image:', error);
    return new Response('Error generating Twitter image', { status: 500 });
  }
};

// Example usage for Luxe Furniture
// export default async function Image() {
//   return generateTwitterImage({
//     title: 'Premium Home & Office Furnishings in Faridabad',
//     description:
//       "Experience the perfect blend of style, durability, and sophistication. Transform your space with Luxe Furniture's curated collection of modern furnishings.",
//   });
// }

// export const alt = 'Luxe Furniture – Premium Furniture for Modern Living';
// export const size = defaultTwitterImageProps.size;
// export const contentType = defaultTwitterImageProps.contentType;
