'use client';

import { blogsData } from '@/src/data/BlogData';
import Image from 'next/image';
import React from 'react';
import { CalendarDays } from 'lucide-react';

type Props = {
  id: string;
};

const SingleBlogContainer = ({ id }: Props) => {
  const blog = blogsData.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <div className="py-16 text-center text-lg text-gray-500">Blog not found.</div>;
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-80 md:h-96">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="mt-4">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
            {blog.category}
          </span>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{blog.title}</h1>

          <div className="mt-1 flex items-center text-sm text-gray-500">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {blog.date}
          </div>
        </div>
      </header>

      <section className="text-base leading-relaxed text-gray-700 sm:text-lg">
        <p>{blog.description}</p>
        {/* Add full blog content here if available */}
      </section>
    </article>
  );
};

export default SingleBlogContainer;
