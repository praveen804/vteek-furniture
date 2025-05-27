import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Create Your Luxe Furniture Account | Join Our Premium Furniture Community',
    description:
      'Register to access exclusive designs, track your orders, save favorites, and get custom furniture recommendations from Luxe Furniture Faridabad.',
  });
}
