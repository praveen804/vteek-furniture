/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
export const alt = 'Luxe Furniture – Premium Furniture for Modern Living';

type OGImageProps = {
  title: string;
  description: string;
  imageUrl?: string;
  logoUrl?: string;
  brandName?: string;
  theme?: {
    primaryColor?: string;
    textColor?: string;
  };
};

export const defaultOGImageProps = {
  size: {
    width: 1200,
    height: 630,
  },
  contentType: 'image/png',
  theme: {
    primaryColor: '#7C3AED',
    textColor: '#FFFFFF',
  },
  logoUrl: 'https://luxe-furniture-ecommerce.vercel.app/apple-icon.png',
  brandName: 'Luxe Furniture',
  imageUrl:
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const generateOGImage = async (props: OGImageProps) => {
  const {
    title,
    description,
    imageUrl = defaultOGImageProps.imageUrl,
    logoUrl = defaultOGImageProps.logoUrl,
    brandName = defaultOGImageProps.brandName,
    theme = defaultOGImageProps.theme,
  } = props;

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: theme.primaryColor,
            color: theme.textColor,
            padding: '48px',
            boxSizing: 'border-box',
            fontFamily: 'sans-serif',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '60%' }}>
            {/* Branding */}
            {logoUrl && brandName && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={logoUrl}
                  alt={brandName}
                  width={60}
                  height={60}

                />
                <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>{brandName}</h1>
              </div>
            )}

            {/* Title + Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '1.2' }}>{title}</h2>
              <p style={{ fontSize: '20px', lineHeight: '1.5', opacity: 0.9 }}>{description}</p>
            </div>
          </div>

          {/* Right Image */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              width={400}
              height={300}
              style={{
                borderRadius: '16px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.25)',
                objectFit: 'cover',
              }}
            />
          )}
        </div>
      ),
      {
        ...defaultOGImageProps.size,
      },
    );
  } catch (error) {
    console.error('Error generating Open Graph image:', error);
    return new Response('Error generating OG image', { status: 500 });
  }
};

// // Example usage for Luxe Furniture
// export default async function Image() {
//   return generateOGImage({
//     title: 'Premium Home & Office Furnishings in Faridabad',
//     description:
//       'Discover a curated collection of luxury furniture that combines comfort, style, and craftsmanship. Perfect for modern homes and elegant office spaces.',
//   });
// }
