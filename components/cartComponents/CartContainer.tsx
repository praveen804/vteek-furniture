'use client';

import React from 'react';
import Image from 'next/image';
import { useGetCartQuery } from '@/reducer/features/cart/cartApi';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import EmptyCartItem from './EmptyCartItem';
import OrderSummary from './OrderSummary';
import UpdateQuantity from './UpdateQuantity';
import DeleteCart from './DeleteCart';
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

const CartContainer = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data: cartData, isLoading } = useGetCartQuery(user?._id ?? '') as {
		data: Cart | undefined;
		isLoading: boolean;
	};

	if (isLoading) {
		return <LoadingContainer />;
	}

	if (!cartData?.items?.length) {
		return <EmptyCartItem />;
	}

	return (
		<section
			className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
			aria-label='Cart Page'
		>
			<h1 className='text-3xl font-bold text-gray-900 mb-8'>
				Your Cart ({cartData.totalProducts} items)
			</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				<section className='lg:col-span-2 space-y-6' aria-label='Cart Items'>
					{cartData.items.map((item) => (
						<article
							key={item.id}
							className='flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow'
							aria-label={`Item: ${item.title}`}
						>
							{/* Product Image */}
							<div className='w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden relative'>
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
										<h3 className='text-lg font-medium text-gray-900'>
											{item.title}
										</h3>
										<p className='text-gray-500 text-sm flex flex-row gap-2'>
											Color:{' '}
											<div
												className='size-5 rounded-full '
												style={{ backgroundColor: `${item.color}` }}
											></div>
										</p>
									</div>
									<DeleteCart item={item} />
								</header>

								{/* Price and Quantity */}
								<div className='mt-2 flex flex-wrap items-center justify-between gap-3'>
									<div className='space-y-1'>
										<p className='text-xl font-bold text-gray-900'>
											${item.price.toFixed(2)}
										</p>
										<span className='font-medium'>
											{item.quantity} × ${item.price.toFixed(2)} = $
											{(item.price * item.quantity).toFixed(2)}
										</span>

										{item.discount > 0 && (
											<div className='flex items-center gap-2'>
												<span className='line-through text-gray-400 text-sm'>
													${item.originalPrice.toFixed(2)}
												</span>
												<span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>
													{item.discount}% OFF
												</span>
											</div>
										)}
									</div>

									<UpdateQuantity item={item} />
								</div>
							</div>
						</article>
					))}
				</section>

				<OrderSummary />
			</div>
		</section>
	);
};

export default CartContainer;
