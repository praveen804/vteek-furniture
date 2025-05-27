import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: ' Furniture trending Blogs - Luxe Furniture Design Tips & Trends',
    description:
      ' Example: "Explore the latest luxury furniture trends and expert design tips for your home. Discover how to elevate your interior with Luxe Furniture insights..',
  });
}
