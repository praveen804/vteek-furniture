import { generateOGImage } from "@/src/meta/ReusableOpenGraphImage";


export default async function Image() {
  return generateOGImage({
    title: 'Luxe Furniture Faridabad | Premium Home & Office Furniture Store',
    description:
      "Faridabad's finest luxury furniture showroom. Handcrafted wooden furniture, premium sofas & complete home interiors. Free consultation & Delhi NCR delivery.",
  });
}
