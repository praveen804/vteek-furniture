/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const alt = 'Luxe Furniture – Premium Furniture for Modern Living';
export const size = {
  width: 1200,
  height: 630,
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="https://luxe-furniture-ecommerce.vercel.app/icon.png"
                alt="Luxe Furniture"
                width={60}
                height={60}
                style={{
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px',
                }}
              />
              <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Luxe Furniture</h1>
            </div>

            {/* Title + Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: '34px', fontWeight: 'bold', lineHeight: '1.2' }}>
                About Luxe Furniture - Crafting Premium Furnishings in Faridabad Since 2010
              </h2>
              <p style={{ fontSize: '20px', lineHeight: '1.5', opacity: 0.9 }}>
                Discover our legacy of handcrafted luxury furniture in Faridabad. Meet the artisans
                behind your premium home & office furnishings. Ethical sourcing, custom designs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://luxe-furniture-ecommerce.vercel.app/"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'black',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
              >
                Shop Now
              </a>
              <a
                href="https://luxe-furniture-ecommerce.vercel.app/about"
                style={{
                  backgroundColor: '#6D28D9',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  fontSize: '16px',
                }}
              >
                About Us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Modern Luxury Sofa"
            width={400}
            height={300}
            style={{
              borderRadius: '16px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.25)',
              objectFit: 'cover',
            }}
          />
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
