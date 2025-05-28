/* eslint-disable @next/next/no-img-element */
import { blogsData } from '@/src/data/BlogData';
import { ImageResponse } from 'next/og';

export const alt = 'Blog Open Graph Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {

  const blog = blogsData.find((blog) => blog.id.toString() === params.id);

  if (!blog || !blog.image || !blog.title || !blog.category || !blog.description) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#555',
          }}
        >
          Blog data invalid or missing
        </div>
      ),
      {
        ...size,
      },
    );
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
              src={blog.image}
              alt="blog"
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
              {blog.category}
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
              {blog.title}
            </h1>
            <p
              style={{
                fontSize: 20,
                color: '#4B5563',
                lineHeight: 1.4,
              }}
            >
              {blog.description}
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
