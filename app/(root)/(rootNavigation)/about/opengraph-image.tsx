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
        <div tw="flex w-full h-full bg-violet-500 text-white">
          <div tw="flex flex-col w-full h-full p-12 justify-between">
            {/* Top: Logo */}
            <div tw="flex items-center space-x-4">
              <img
                src="https://luxe-furniture-ecommerce.vercel.app/apple-icon.png"
                alt="Luxe Furniture"
                width={60}
                height={60}
                tw="rounded-full bg-white p-1"
              />
              <h1 tw="text-4xl font-bold  ">Luxe Furniture</h1>
            </div>

            {/* Middle: Headline + Description */}
            <div tw="flex flex-col gap-4 mt-12">
              <h2 tw="text-5xl font-bold leading-tight">Discover Elegant Living</h2>
              <p tw="text-xl max-w-2xl leading-snug text-white/90">
                Premium furniture that combines craftsmanship and comfort. Elevate your space with
                Luxe Furniture today.
              </p>
            </div>

            {/* Bottom: CTA + Product Preview */}
            <div tw="flex items-center justify-between mt-12">
              <div tw="flex gap-4">
                <a tw="bg-white text-violet-600 font-semibold px-6 py-3 rounded-md shadow">
                  Shop Now
                </a>
                <a tw="bg-violet-700 border border-white font-semibold px-6 py-3 rounded-md shadow">
                  Explore More
                </a>
              </div>
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Elegant Sofa"
                width={300}
                height={200}
                tw="rounded-lg shadow-lg"
              />
            </div>
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
