import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Secure Checkout | Luxe Furniture Faridabad',
    description:
      'Complete your Luxe Furniture purchase securely. Confirm delivery details, payment options, and review your handcrafted furniture order.',
  });
}
