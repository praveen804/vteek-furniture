/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const alt = 'Products Open Graph Image';
export const size = {
  width: 1600,
  height: 900,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {

  const product = await fetch(`https://backend-house.vercel.app/furniture/products/${params.id}`).then(
    (res) => res.json(),
  );

  const products = product?.product;

  if (!products) {
    return {
      title: 'Product Not Found | Luxe Furniture',
      description: 'This product could not be found.',
    };
  }

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex', // Explicitly set display: flex
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Image Side */}
          <div style={{ display: 'flex', flex: 1 }}>
            {' '}
            {/* Added display: flex */}
            <img
              src={products.image}
              alt="products"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text Side */}
          <div
            style={{
              display: 'flex', // Added display: flex
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: '#f9fafb',
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: '#7C3AED',
                marginBottom: 20,
                textTransform: 'uppercase',
              }}
            >
              {products.category}
            </span>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#111827',
                marginBottom: 16,
                lineHeight: '1.2',
              }}
            >
              {products.title}
            </h1>
            <p
              style={{
                fontSize: 20,
                color: '#4B5563',
                lineHeight: 1.4,
              }}
            >
              {products.description}
            </p>
          </div>
        </div>
      ),
      size,
    );
  } catch (error) {
    console.error('Error generating Open Graph image:', error);
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            color: '#555',
            fontSize: 48,
          }}
        >
          Error Generating Image
        </div>
      ),
      size,
    );
  }
}
