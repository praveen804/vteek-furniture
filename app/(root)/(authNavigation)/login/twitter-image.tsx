import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Login to Your Luxe Furniture Account | Secure Access to Orders & Wishlist',
    description:
      'Access your Luxe Furniture account to view orders, manage your wishlist, and explore custom furniture options. Secure and easy login.',
  });
}
