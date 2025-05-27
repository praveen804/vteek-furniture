import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'Your Wishlist | Luxe Furniture Favorites',
    description:
      'View your saved Luxe Furniture pieces. Easily revisit your favorite handcrafted furniture items and move them to your cart when ready.',
  });
}
