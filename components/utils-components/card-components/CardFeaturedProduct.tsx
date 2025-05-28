import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { Product } from '@/src/types/productInterface';

const CardFeaturedProduct = ({ product }: { product: Product }) => {
	return (
		<div
			key={product.id}
			className='relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[271px] h-[280px] sm:h-[320px] md:h-[361px] bg-white border-2 border-dotted border-custom-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto'
		>
			{/* Product Image */}
			<div className='relative w-full h-[55%] sm:h-[60%] md:h-[70%]'>
				<Image
					src={product.image}
					alt={product.title}
					fill
					className='object-cover object-center'
					sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw'
					priority
				/>
			</div>

			{/* Product Info */}
			<div className='p-3 sm:p-4 text-center'>
				<h3 className='text-base sm:text-lg font-semibold text-custom-3 '>
					{product.title}
				</h3>
				<p className='text-sm sm:text-md text-custom-4 mt-1'>
					${product.finalPrice}
				</p>
			</div>

			{/* Floating Action Buttons */}
			<div className='absolute top-3 left-3 flex flex-col gap-2 sm:gap-2.5'>
				<button
					type='button'
					aria-label='Add to Cart'
					className='p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition duration-200'
				>
					<ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5' />
				</button>
				<button
					type='button'
					aria-label='Add to Wishlist'
					className='p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition duration-200'
				>
					<Heart className='w-4 h-4 sm:w-5 sm:h-5' />
				</button>
				<Link
					href={`/products/${product._id}`}
					aria-label='View Product'
					className='group'
				>
					<span className='flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-md group-hover:bg-custom-1 group-hover:text-white transition duration-200'>
						<Eye className='w-4 h-4 sm:w-5 sm:h-5' />
					</span>
				</Link>
			</div>
		</div>
	);
};

export default CardFeaturedProduct;
