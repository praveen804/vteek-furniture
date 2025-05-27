/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const alt = 'Luxe Furniture – Premium Furniture for Modern Living';
export const size = {
  width: 1500,
  height: 500,
};
export const contentType = 'image/png';

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: '#7C3AED',
            color: '#FFFFFF',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img
                src="https://luxe-furniture-ecommerce.vercel.app/apple-icon.png"
                alt="Luxe Furniture"
                width={50}
                height={50}
                style={{
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px',
                }}
              />
              <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Luxe Furniture</h1>
            </div>

            {/* Title */}
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.2' }}>
              About Luxe Furniture - Crafting Premium Furnishings in Faridabad Since 2010
            </h2>

            {/* Description */}
            <p style={{ fontSize: '18px', maxWidth: '720px', lineHeight: '1.5', opacity: 0.9 }}>
              Discover our legacy of handcrafted luxury furniture in Faridabad. Meet the artisans
              behind your premium home & office furnishings. Ethical sourcing, custom designs.
            </p>
          </div>
        </div>
      ),
      {
        ...size,
      },
    );
  } catch (error) {
    console.error('Error generating Open Graph image:', error);
    return new Response('Error generating OG image', { status: 500 });
  }
}
