'use client';

import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '../ui/button';
import { Link } from 'next-view-transitions';
import ProductColor from './ProductColor';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';

const ProductLoading = dynamic(
	() => import('../LoadingComponents/ProductLoading'),
	{ ssr: false }
);

const ProductCard = () => {
	const { data, isError, error, isFetching } = useGlobalFurnitureContext();

	

	// Loading state
	if (isFetching) return <ProductLoading />;

	// Error state
	if (isError) {
		return (
			<div className='flex justify-center items-center h-48'>
				<p className='text-center text-red-500 font-semibold text-lg'>
					Error: {error?.message}
				</p>
			</div>
		);
	}

	// No data state
	if (!data?.products.length) {
		return (
			<div className='text-center text-gray-600 mt-4'>
				No products available at the moment.
			</div>
		);
	}

	// Render products
	return (
		<div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 w-full '>
			{data.products.map((product) => (
				<div
					key={product._id}
					className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group'
				>
					{/* Product Image */}
					<div className='relative w-full h-52 overflow-hidden'>
						<Image
							src={product.image}
							alt={`${product.title} - ${product.category}`}
							className='object-cover w-full h-full transform hover:scale-105 transition-transform duration-300'
							fill
							sizes='(min-width: 1280px) calc(20.87vw - 34px), (min-width: 1040px) calc(28.18vw - 41px), (min-width: 780px) calc(41.67vw - 36px), calc(83.26vw - 48px)'
						/>

						{product.discount > 0 && (
							<span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full uppercase'>
								{product.discount}% Off
							</span>
						)}
					</div>

					{/* Product Details */}
					<div className='p-4 flex flex-col gap-2 relative'>
						<h2 className='text-lg font-semibold text-gray-800 truncate'>
							{product.title}
						</h2>

						{/* Colors */}
						<ProductColor color={product.color} />
						{/* Pricing */}
						<div className='flex flex-col gap-1'>
							<div className='flex justify-between items-center'>
								<p className='text-xl font-semibold text-black'>
									${product.finalPrice}
								</p>
								{product.discount > 0 && (
									<p className='text-sm text-gray-500 line-through'>
										${product.originalPrice}
									</p>
								)}
							</div>
							{product.discount > 0 && (
								<p className='text-sm text-green-600'>
									Save ${product.originalPrice - product.finalPrice}
								</p>
							)}
						</div>

						{/* About */}
						<p className='text-sm text-gray-700 truncate'>{product.about}</p>
						{/* View Product Button */}
						<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
							<Button asChild>
								<Link
									href={`/products/${product._id}`}
									className='bg-black text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200'
								>
									View Product
								</Link>
							</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
