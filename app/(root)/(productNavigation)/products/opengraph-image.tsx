import { generateOGImage } from "@/src/meta/ReusableOpenGraphImage";


export default async function Image() {
  return generateOGImage({
    title: 'Luxury Furniture Collection | Premium Handcrafted Designs by Luxe Furniture Faridabad',
    description:
      'Browse our exclusive collection of handcrafted luxury furniture for living rooms, bedrooms, and offices. Sustainably made by master artisans in Faridabad since 2010.',
  });
}
