import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Login to Your Luxe Furniture Account | Secure Access to Orders & Wishlist',
    description:
      'Access your Luxe Furniture account to view orders, manage your wishlist, and explore custom furniture options. Secure and easy login.',
  });
}
