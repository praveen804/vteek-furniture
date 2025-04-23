'use client';
import { useAppDispatch, useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { removeFromCart, addToCart } from '@/reducer/features/cart/cartSlice';

const ProductQuantity = () => {
	const dispatch = useAppDispatch();
	const { quantity } = useAppSelector((state: RootState) => state.cart);

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(1));
	};

	const addFromCartHandler = () => {
		dispatch(addToCart(1));
	};
	return (
		<div className='flex items-center gap-4 mb-6'>
			<span className='text-gray-600 font-medium'>Quantity</span>
			<div className='flex items-center border border-gray-300 rounded-md'>
				<button
					type='button'
					className='px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors'
					aria-label='Decrease quantity'
					onClick={removeFromCartHandler}
					disabled={quantity <= 1}
				>
					<FiMinus className='w-4 h-4' />
				</button>
				<span className='px-4 py-2 text-gray-900 font-medium border-x border-gray-300'>
					{quantity}
				</span>
				<button
					type='button'
					className='px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors'
					aria-label='Increase quantity'
					onClick={addFromCartHandler}
					disabled={quantity >= 5}
				>
					<FiPlus className='w-4 h-4' />
				</button>
			</div>
		</div>
	);
};
export default ProductQuantity;
