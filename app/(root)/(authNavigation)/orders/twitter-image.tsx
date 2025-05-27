import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Your Orders | Luxe Furniture Account',
    description:
      'View your past and current Luxe Furniture orders, including tracking details, order status, and purchase history. Delivered with craftsmanship, care, and precision.',
  });
}
