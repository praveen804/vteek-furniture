'use client';

import React from 'react';
import { Cart } from './CartContainer';
import { Link } from 'next-view-transitions';

interface OrderSummaryProps {
	cartData: Cart;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartData }) => {
	const { totalOriginalPrice, discountPrice, totalAmount } = cartData;
	const shipping = totalAmount > 500 ? 0 : 29.99;
	const tax = totalAmount * 0.08;
	const grandTotal = totalAmount + tax + shipping;

	return (
		<aside className='lg:col-span-1' aria-label='Order Summary'>
			<div className='bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-20'>
				<h2 className='text-xl font-bold text-gray-900 mb-6'>Order Summary</h2>

				<div className='space-y-4'>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Original Price</span>
						<span className='font-medium'>
							${totalOriginalPrice.toFixed(2)}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Discount</span>
						<span className='font-medium'>- ${discountPrice.toFixed(2)}</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Subtotal</span>
						<span className='font-medium'>${totalAmount.toFixed(2)}</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Shipping</span>
						<span className='font-medium'>
							{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
						</span>
					</div>

					<div className='flex justify-between'>
						<span className='text-gray-600'>Tax (8%)</span>
						<span className='font-medium'>${tax.toFixed(2)}</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Total Products</span>
						<span className='font-medium'> {cartData.totalProducts}</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Total Quantity</span>
						<span className='font-medium'>{cartData.totalQuantity} </span>
					</div>

					<div className='border-t border-gray-200 pt-4 mt-4'>
						<div className='flex justify-between text-lg font-bold text-gray-900'>
							<span>Total</span>
							<span>${grandTotal.toFixed(2)}</span>
						</div>
					</div>

					<button
						type='button'
						className='w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500'
					>
						<Link href={'/checkout'}> Proceed to Buy</Link>
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
