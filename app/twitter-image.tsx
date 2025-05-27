import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Luxe Furniture Faridabad | Premium Home & Office Furniture Store',
    description:
      "Faridabad's finest luxury furniture showroom. Handcrafted wooden furniture, premium sofas & complete home interiors. Free consultation & Delhi NCR delivery.",
  });
}
