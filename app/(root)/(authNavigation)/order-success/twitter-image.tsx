import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Thank You for Your Order | Luxe Furniture Faridabad',
    description:
      'Your order has been placed successfully! Our artisans will begin crafting your luxury furniture shortly. Check your email for order details and delivery updates.',
  });
}
