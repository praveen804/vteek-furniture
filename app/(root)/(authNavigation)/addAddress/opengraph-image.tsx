import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Add New Address | Luxe Furniture Account Dashboard',
    description:
      'Add a new shipping or billing address to your Luxe Furniture account for faster checkout and order tracking.',
  });
}
