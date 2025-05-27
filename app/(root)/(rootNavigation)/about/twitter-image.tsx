import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'About Luxe Furniture | Crafting Premium Furnishings in Faridabad Since 2010',
    description:
      'Discover our legacy of handcrafted luxury furniture in Faridabad. Meet the artisans behind your premium home & office furnishings. Ethical sourcing, custom designs.',
  });
}
