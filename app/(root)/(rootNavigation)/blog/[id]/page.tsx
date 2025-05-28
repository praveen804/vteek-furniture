// app/blog/[id]/page.tsx

import SingleBlogContainer from '@/components/BlogComponents/SingleBlogContainer';
import { blogsData } from '@/src/data/BlogData';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

// ✅ SEO-Friendly Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id.toString() === id);

  // const baseUrl =
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://luxe-furniture-ecommerce.vercel.app'
  //     : 'http://localhost:3000';

  if (!blog) {
    return {
      title: 'Blog Not Found | Elegant Living',
      description: 'This blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Elegant Living`,
    description: blog.description,
    keywords: [
      blog.category,
      blog.title,
      'home decor',
      'interior design',
      'living room',
      'sofa guide',
    ],
  };
}

// ✅ Page Component
export default async function SingleBlog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <SingleBlogContainer id={id} />
    </main>
  );
}
