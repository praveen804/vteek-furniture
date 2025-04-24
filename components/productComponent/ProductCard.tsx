'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductColor from './ProductColor';
import {Product} from '@/src/types/productInterface'
type Props = {
	product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
	const hasDiscount = product.discount > 0;
	const savedAmount = product.originalPrice - product.finalPrice;

	return (
		<div className='bg-white shadow-md rounded-md overflow-hidden transition-shadow hover:shadow-lg group flex flex-col w-full'>
			{/* Image */}
			<div className='relative w-full h-40 lg:h-52'>
				<Image
					src={product.image}
					alt={product.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
					className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
				/>

				{hasDiscount && (
					<span className='absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full'>
						{product.discount}% OFF
					</span>
				)}
			</div>

			{/* Content */}
			<div className='flex flex-col gap-2 p-4 flex-1'>
				<h2 className='text-md md:text-lg font-semibold text-gray-800 '>
					{product.title}
				</h2>

				<ProductColor color={product.color} />

				{/* Price Section */}
				<div className='flex flex-wrap items-center gap-2'>
					<p className='text-md lg:text-lg font-bold text-primary'>
						${product.finalPrice}
					</p>
					{hasDiscount && (
						<>
							<p className='text-xs lg:text-sm line-through text-gray-400'>
								${product.originalPrice}
							</p>
							<p className='text-xs lg:text-sm text-green-600'>Save ${savedAmount}</p>
						</>
					)}
				</div>

				{/* About */}
				<p className=' text-sm lg:text-sm text-gray-600 line-clamp-2 hidden lg:block'>{product.about}</p>

				{/* CTA */}
				<div className='mt-auto'>
					<Button asChild className='w-full mt-2'>
						<Link href={`/products/${product._id}`}>View Product</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
