import SingleProductContainer from '@/components/productComponent/SingleProductContainer';
import ReusableBanner from '@/components/reusableComponents/ReusableBanner';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await fetch(`https://backend-house.vercel.app/furniture/products/${id}`).then(
    (res) => res.json(),
  );

  const products = product?.product;
  console.log("🚀 ~ page.tsx:17 ~ products:", products);

  if (!products) {
    return {
      title: 'Product Not Found | Luxe Furniture',
      description: 'This product could not be found.',
    };
  }

  return {
    title: `${products.title} `,
    description: products.description,
    keywords: [
      products.category,
      products.title,
      products.description,
      'luxury furniture',
      'furniture',
      'modern furniture',
      'luxury furniture',
      'home decor',
      'interior design',
    ],
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (
    <div>
      <ReusableBanner />
      <SingleProductContainer id={id} />
    </div>
  );
}
