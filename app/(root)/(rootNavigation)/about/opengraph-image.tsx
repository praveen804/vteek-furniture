import { generateOGImage } from '@/src/meta/ReusableOpenGraphImage';

export default async function Image() {
  return generateOGImage({
    title: 'About Luxe Furniture | Crafting Premium Furnishings in Faridabad Since 2010',
    description:
      'Discover our legacy of handcrafted luxury furniture in Faridabad. Meet the artisans behind your premium home & office furnishings. Ethical sourcing, custom designs.',
  });
}
