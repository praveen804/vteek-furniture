import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Your Orders | Luxe Furniture Account',
    description:
      'View your past and current Luxe Furniture orders, including tracking details, order status, and purchase history. Delivered with craftsmanship, care, and precision.',
  });
}
