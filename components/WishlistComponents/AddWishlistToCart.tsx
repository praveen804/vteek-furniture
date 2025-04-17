'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { cn } from '@/lib/utils'; // Optional: utility for class merging

import { WishListCardProps } from './WishListCard';
import { useAppDispatch, useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import { useAddItemToCartMutation } from '@/Redux-Toolkit/features/cart/cartApi';
import { useRemoveItemFromWishlistMutation } from '@/Redux-Toolkit/features/wishlist/wishlistApi';
import { ToastError, ToastSuccess } from '@/utils/utils-function/ReactToastify';
import { resetCartQuantity } from '@/Redux-Toolkit/features/cart/cartSlice';

const AddWishlistToCart: React.FC<WishListCardProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { quantity } = useAppSelector((state: RootState) => state.cart);

	const [addItemToCart] = useAddItemToCartMutation();
	const [removeItemFromWishlist] = useRemoveItemFromWishlistMutation();
	const [isLoading, setIsLoading] = useState(false); // Loading state

	const handleAddToCart = async () => {
		if (!user?._id) {
			ToastError('Please login to add items to cart.');
			return;
		}

		setIsLoading(true); // Set loading to true
		try {
			// Add item to cart
			await addItemToCart({
				userId: user._id,
				productId: item.productId,
				quantity,
				color: item.color,
			}).unwrap();

			// Remove item from wishlist
			await removeItemFromWishlist({ wishlistItemId: item.id }).unwrap();

			// console.log('Item added successfully:', response);
			dispatch(resetCartQuantity());
			ToastSuccess('Item added to cart successfully.');
		} catch (error) {
			// console.error('Error adding item to cart:', error);
			ToastError('Something went wrong. Please try again.');
		} finally {
			setIsLoading(false); // Set loading to false
		}
	};
	return (
		<button
			type='button'
			onClick={handleAddToCart}
			disabled={isLoading}
			className={cn(
				'group p-2 rounded-full border bg-white   border-gray-200 shadow hover:bg-pink-100 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500',
				'disabled:opacity-50 disabled:cursor-not-allowed'
			)}
			aria-label='Add wishlist item to cart'
		>
			{isLoading ? (
				<div role='status' aria-label='Loading cart' className=''>
					<div className='animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-pink-500'></div>
				</div>
			) : (
				<FiShoppingCart className='w-4 h-4  transition-transform group-hover:scale-110' />
			)}
		</button>
	);
};

export default AddWishlistToCart;
