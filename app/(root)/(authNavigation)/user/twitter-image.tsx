import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Your Profile | Luxe Furniture Account Dashboard',
    description:
      'Manage your Luxe Furniture account settings, saved addresses, orders, and preferences. Personalized furniture experiences start here.',
  });
}
