import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Add New Address | Luxe Furniture Account Dashboard',
    description:
      'Add a new shipping or billing address to your Luxe Furniture account for faster checkout and order tracking.',
  });
}
