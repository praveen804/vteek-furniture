'use client';

import React from 'react';
import { Link } from 'next-view-transitions';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { useGetCartQuery } from '@/reducer/features/cart/cartApi';

const OrderSummary = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data: cartData } = useGetCartQuery(user?._id ?? '');

	return (
		<aside className='lg:col-span-1' aria-label='Order Summary'>
			<div className='bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-20'>
				<h2 className='text-xl font-bold text-gray-900 mb-6'>Order Summary</h2>

				<div className='space-y-4'>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Original Price</span>
						<span className='font-medium'>
							${cartData?.totalOriginalPrice.toFixed(2)}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Discount</span>
						<span className='font-medium'>
							- ${cartData?.discountPrice.toFixed(2)}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Subtotal</span>
						<span className='font-medium'>
							${cartData?.totalAmount.toFixed(2)}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Shipping Charge </span>
						<span className='font-medium'>${0.0}</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Tax (0%)</span>
						<span className='font-medium'>${0.0}</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Total Products</span>
						<span className='font-medium'> {cartData?.totalProducts}</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Total Quantity</span>
						<span className='font-medium'>{cartData?.totalQuantity} </span>
					</div>

					<div className='border-t border-gray-200 pt-4 mt-4'>
						<div className='flex justify-between text-lg font-bold text-gray-900'>
							<span>Total</span>
							<span>${cartData?.totalAmount}</span>
						</div>
					</div>

					<button
						type='button'
						className='w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500'
					>
						<Link href={'/address'}> Proceed to Buy</Link>
					</button>

					<p className='text-center text-sm text-gray-500 mt-4'>
						or{' '}
						<Link
							href='/'
							className='text-pink-600 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-500'
						>
							Continue Shopping
						</Link>
					</p>
				</div>
			</div>
		</aside>
	);
};

export default OrderSummary;
