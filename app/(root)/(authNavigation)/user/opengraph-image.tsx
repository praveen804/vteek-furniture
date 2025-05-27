import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Your Profile | Luxe Furniture Account Dashboard',
    description:
      'Manage your Luxe Furniture account settings, saved addresses, orders, and preferences. Personalized furniture experiences start here.',
  });
}
