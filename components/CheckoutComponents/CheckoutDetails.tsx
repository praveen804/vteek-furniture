'use client';

import React from 'react';
import Image from 'next/image';
import { useGetCartQuery } from '@/reducer/features/cart/cartApi';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import LoadingContainer from '../reusableComponents/LoadingContainer';

export interface CartItem {
	id: string;
	productId: string;
	title: string;
	image: string;
	color: string;
	availableColors: string[];
	price: number;
	originalPrice: number;
	discount: number;
	quantity: number;
	total: number;
}

export interface Cart {
	cartId: string;
	userId: string;
	items: CartItem[];
	totalQuantity: number;
	totalProducts: number;
	totalAmount: number;
	totalOriginalPrice: number;
	discountPrice: number;
}

// 1. Create a color name map
const colorNameMap: Record<string, string> = {
	'#ff0000': 'Red',
	'#0000ff': 'Blue',
	'#00ff00': 'Green',
	'#ffff00': 'Yellow',
	'#000000': 'Black',
	'#ffffff': 'White',
	'#808080': 'Gray',
	'#ff69b4': 'Pink',
	'#8a2be2': 'Purple',
	'#ffa500': 'Orange',
	// Add more as needed
};

// 2. Helper to get color name
const getColorName = (hex: string): string => {
	const normalizedHex = hex.toLowerCase();
	return colorNameMap[normalizedHex] || normalizedHex;
};

const CheckoutDetails = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data: cartData, isLoading } = useGetCartQuery(user?._id ?? '') as {
		data: Cart | undefined;
		isLoading: boolean;
	};

	if (isLoading) {
		return <LoadingContainer />;
	}

	return (
		<section
			className=' w-full px-4 sm:px-6 lg:px-8 py-8'
			aria-label='Checkout Page '
		>
			<div className=''>
				<section className='lg:col-span-2 space-y-6' aria-label='Cart Items'>
					{cartData?.items.map((item) => (
						<article
							key={item.id}
							className='flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow'
							aria-label={`Item: ${item.title}`}
						>
							{/* Product Image */}
							<div className='size-14 bg-gray-100 rounded-lg overflow-hidden relative'>
								<Image
									src={item.image}
									alt={item.title}
									fill
									sizes='(max-width: 640px) 100vw, 33vw'
									className='object-cover'
									priority={false}
								/>
							</div>

							{/* Product Details */}
							<div className='flex-1'>
								<header className='flex justify-between items-start'>
									<div>
										<h3 className='text-sm font-medium text-gray-900'>
											{item.title}
										</h3>

										{/* Color display */}
										<div className='flex items-center gap-2 mt-1 text-sm text-gray-600'>
											<span>Color:</span>
											<div
												className='w-5 h-5 rounded-full border border-gray-300'
												style={{ backgroundColor: item.color }}
												aria-label={`Selected color: ${item.color}`}
											/>
											<span className='capitalize'>
												{getColorName(item.color)}
											</span>
										</div>
									</div>
								</header>
							</div>
						</article>
					))}
				</section>
			</div>
		</section>
	);
};

export default CheckoutDetails;
