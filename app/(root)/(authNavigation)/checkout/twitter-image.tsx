import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Secure Checkout | Luxe Furniture Faridabad',
    description:
      'Complete your Luxe Furniture purchase securely. Confirm delivery details, payment options, and review your handcrafted furniture order.',
  });
}
