'use client';
import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { blogsData as blogs } from '@/src/data/BlogData';
import { ImageOptimized } from '../utils-components/image-components/ImageOptimized';

const BlogContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const categories = [
		'All',
		'Trends',
		'Guides',
		'Sustainability',
		'Design Tips',
		'Space Optimization',
		'Technology',
	];

	const filteredBlogs =
		selectedCategory === 'All'
			? blogs
			: blogs.filter((blog) => blog.category === selectedCategory);

	return (
		<section className='max-w-7xl mx-auto px-1 lg:px-6  py-2 lg:py-16'>
			<h2 className='text-4xl font-bold text-center text-gray-900 mb-4 lg:mb-10'>
				Latest Articles
			</h2>
			<div className='flex justify-center gap-4 mb-12 flex-wrap'>
				{categories.map((category) => (
					<button
						type='button'
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
							selectedCategory === category
								? 'bg-pink-600 text-white'
								: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
						}`}
					>
						{category}
					</button>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{filteredBlogs.map((blog) => (
					<motion.article
						key={blog.id}
						whileHover={{ scale: 1.02 }}
						className='rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white w-full'
					>
						<div></div>
						<Link href={blog.link}>
							<ImageOptimized
								src={blog.image}
								alt={blog.title}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='w-full h-48 '
								priority={false}
								wrapperClassName='w-full h-48 '
							/>

							<div className='p-5'>
								<span className='text-sm text-gray-500'>{blog.date}</span>
								<h3 className='mt-2 text-2xl font-semibold text-gray-900'>
									{blog.title}
								</h3>
								<p className='mt-3 text-gray-600'>{blog.description}</p>
								<div className='mt-4'>
									<span className='text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
										{blog.category}
									</span>
								</div>
								<button
									type='button'
									className='mt-4 inline-block text-pink-600 font-medium hover:text-pink-700 transition-colors'
								>
									Read More →
								</button>
							</div>
						</Link>
					</motion.article>
				))}
			</div>
		</section>
	);
};

export default BlogContainer;
