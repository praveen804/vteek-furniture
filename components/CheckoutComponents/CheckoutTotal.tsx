'use client';

import React from 'react';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { useGetCartQuery } from '@/reducer/features/cart/cartApi';

const CheckoutTotal = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data: cartData, isLoading } = useGetCartQuery(user?._id ?? '');

	if (isLoading) {
		return (
			<aside className='lg:col-span-1'>
				<div className='bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-20'>
					<div className='animate-pulse space-y-4'>
						<div className='h-6 bg-gray-200 rounded w-3/4'></div>
						{[...Array(5)].map((_, i) => (
							<div key={i} className='flex justify-between'>
								<div className='h-4 bg-gray-200 rounded w-1/3'></div>
								<div className='h-4 bg-gray-200 rounded w-1/4'></div>
							</div>
						))}
						<div className='border-t border-gray-200 pt-4 mt-4'>
							<div className='flex justify-between'>
								<div className='h-6 bg-gray-200 rounded w-1/4'></div>
								<div className='h-6 bg-gray-200 rounded w-1/4'></div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		);
	}

	return (
		<aside className='lg:col-span-1' aria-label='Order Summary'>
			<div className='bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-20'>
				<h2 className='text-xl font-bold text-gray-900 mb-6'>Order Summary</h2>

				<div className='space-y-3'>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Subtotal</span>
						<span className='font-medium'>
							${cartData?.totalAmount?.toFixed(2) ?? '0.00'}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Discount</span>
						<span className='font-medium text-green-600'>
							- ${cartData?.discountPrice?.toFixed(2) ?? '0.00'}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Shipping</span>
						<span className='font-medium'>Free</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Total Items</span>
						<span className='font-medium'>{cartData?.totalQuantity ?? 0}</span>
					</div>

					<div className='border-t border-gray-200 pt-4 mt-2'>
						<div className='flex justify-between text-lg font-bold text-gray-900'>
							<span>Order Total</span>
							<span>${cartData?.totalAmount?.toFixed(2) ?? '0.00'}</span>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default CheckoutTotal;
