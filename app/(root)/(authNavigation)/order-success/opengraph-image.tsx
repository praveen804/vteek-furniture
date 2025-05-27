import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Thank You for Your Order | Luxe Furniture Faridabad',
    description:
      'Your order has been placed successfully! Our artisans will begin crafting your luxury furniture shortly. Check your email for order details and delivery updates.',
  });
}
