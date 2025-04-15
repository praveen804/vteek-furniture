'use client';

import React, { useState } from 'react';
import { Product } from '@/utils/types/productInterface';
import Heading from '../reusableComponents/Heading';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import useFurnitureProductHook from '@/utils/hooks/useFurnitureProductHook';

const LatestProduct = () => {
	const { data, isFetching } = useFurnitureProductHook();
	const [filter, setFilter] = useState('all');

	// Filter Buttons
	const filterButtons = [
		{ id: 'all', label: 'All' },
		{ id: 'chair', label: 'Chair' },
		{ id: 'sofa', label: 'Sofa' },
		{ id: 'dining', label: 'Dining' },
		{ id: 'bed', label: 'Bed' },
	];

	// Filter Products Logic
	const filteredProducts = data?.products.filter((product: Product) => {
		if (filter === 'all') return true;
		return product.category.toLowerCase() === filter;
	});

	const handleFilter = (filterType: string) => setFilter(filterType);

	return (
		<section className='pb-16'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='py-6'>
					<Heading title='Latest Product' />
				</div>

				{/* Filter Buttons */}
				<div className='flex flex-wrap justify-center gap-4 mb-10'>
					{isFetching
						? Array.from({ length: filterButtons.length }).map((_, index) => (
								<div
									key={index}
									className='w-28 h-10 bg-gray-200 animate-pulse rounded-md'
								></div>
						  ))
						: filterButtons.map((button) => (
								<button
									key={button.id}
									onClick={() => handleFilter(button.id)}
									className={`px-5 py-2 rounded-lg border ${
										filter === button.id
											? 'bg-custom-1 text-white border-custom-1'
											: 'bg-white text-gray-700 border-gray-300'
									} hover:bg-custom-1 hover:text-white transition-all duration-200`}
								>
									{button.label}
								</button>
						  ))}
				</div>

				{/* Products Grid */}
				<div
					className={`${
						filteredProducts?.length === 0
							? 'w-full'
							: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
					} `}
				>
					{isFetching ? (
						Array.from({ length: 9 }).map((_, index) => (
							<div
								key={index}
								className='w-full h-72 bg-gray-200 animate-pulse rounded-lg'
							></div>
						))
					) : filteredProducts?.length === 0 ? (
						<div className='w-full flex justify-center items-center  my-32 rel'>
							<p className='text-gray-600 font-medium text-lg'>
								No products available at the moment.
							</p>
						</div>
					) : (
						filteredProducts?.slice(0, 9).map((product: Product) => (
							<div
								key={product.id}
								className='border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow relative'
							>
								{/* Image */}
								<div className='relative w-full h-48 mb-4'>
									<Image
										src={product.image}
										alt={product.title}
										fill
										className='rounded-md object-cover'
									/>
								</div>

								{/* Title and Price */}
								<h3 className='text-custom-1 font-semibold text-lg mb-1'>
									{product.title}
								</h3>
								<p className='text-gray-600 font-medium text-base mb-4'>
									${product.finalPrice}
								</p>

								{/* Icons (Cart, Wishlist, View) */}
								<div className='absolute top-6 left-6 flex flex-col space-y-2'>
									<button
										aria-label='Add to Cart'
										className='p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors'
									>
										<ShoppingCart className='w-5 h-5' />
									</button>
									<button
										aria-label='Add to Wishlist'
										className='p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors'
									>
										<Heart className='w-5 h-5' />
									</button>
									<Link
										href={`/products/${product._id}`}
										aria-label='View Product'
										className='p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors'
									>
										<Eye className='w-5 h-5' />
									</Link>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default LatestProduct;
