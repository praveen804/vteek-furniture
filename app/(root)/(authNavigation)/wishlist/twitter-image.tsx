import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Your Wishlist | Luxe Furniture Favorites',
    description:
      'View your saved Luxe Furniture pieces. Easily revisit your favorite handcrafted furniture items and move them to your cart when ready.',
  });
}
