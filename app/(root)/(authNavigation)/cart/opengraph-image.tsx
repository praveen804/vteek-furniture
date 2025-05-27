import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Your Shopping Cart | Luxe Furniture Faridabad',
    description:
      'Review the handcrafted furniture items you’ve added to your Luxe Furniture cart. Secure checkout with nationwide delivery and custom design options.',
  });
}
