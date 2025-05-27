import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: ' Furniture trending Blogs - Luxe Furniture Design Tips & Trends',
    description:
      ' Example: "Explore the latest luxury furniture trends and expert design tips for your home. Discover how to elevate your interior with Luxe Furniture insights..',
  });
}
