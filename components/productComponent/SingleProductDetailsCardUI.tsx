'use client';
import React from 'react';
import { Product, Review } from '@/utils/types/productInterface';
import ProductRating from './ProductRating';

interface ProductDetailsProps {
	product: Product;
	review: Review[];
}

export default function SingleProductDetailsCardUI({product,review,}: ProductDetailsProps) {
	
	const discountAmount = product.originalPrice - product.finalPrice;
	const hasDiscount = product.discount > 0;

	return (
		<div className='space-y-6'>
			{/* Header Section */}
			<header className='space-y-3'>
				<div className='flex flex-wrap items-center gap-2'>
					<span className='inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium'>
						{product.category}
					</span>

					{hasDiscount && (
						<span className='inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium'>
							{product.discount}% OFF
						</span>
					)}
				</div>

				<h1 className='text-3xl font-bold text-gray-900 tracking-tight'>
					{product.title}
				</h1>

				<div className='flex items-center gap-3 text-sm text-gray-600'>
					<ProductRating review={review} />
					<span className='w-1 h-1 rounded-full bg-gray-300'></span>
					<span>
						Origin: <span className='font-medium'>{product.origin}</span>
					</span>
				</div>
			</header>

			{/* Specifications Section */}
			<section className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg'>
				<div className='space-y-1'>
					<h3 className='text-xs font-medium text-gray-500 uppercase tracking-wider'>
						Material
					</h3>
					<p className='font-medium text-gray-800 capitalize'>
						{product.material}
					</p>
				</div>
				<div className='space-y-1'>
					<h3 className='text-xs font-medium text-gray-500 uppercase tracking-wider'>
						Dimensions
					</h3>
					<p className='font-medium text-gray-800'>
						{product.dimension.length} × {product.dimension.width} ×{' '}
						{product.dimension.height}
					</p>
				</div>
			</section>

			{/* Pricing Section */}
			<section className='space-y-2'>
				<div className='flex items-baseline gap-3'>
					<span className='text-3xl font-bold text-gray-900'>
						${product.finalPrice.toFixed(2)}
					</span>
					{hasDiscount && (
						<span className='line-through text-gray-400 text-lg'>
							${product.originalPrice.toFixed(2)}
						</span>
					)}
				</div>

				{hasDiscount && (
					<div className='flex items-center gap-2'>
						<span className='inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium'>
							Save ${discountAmount.toFixed(2)}
						</span>
						<span className='text-sm text-gray-500'>
							{product.discount}% off
						</span>
					</div>
				)}
			</section>
		</div>
	);
}
