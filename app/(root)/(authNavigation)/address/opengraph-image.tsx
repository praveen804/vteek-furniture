import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Your Saved Addresses | Luxe Furniture Account Dashboard',
    description:
      'Manage your saved shipping and billing addresses for a faster, personalized Luxe Furniture shopping experience. Update, edit, or remove addresses anytime.',
  });
}
