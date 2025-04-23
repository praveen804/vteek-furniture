/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { cn } from '@/lib/utils'; // Optional: utility for class merging
import { useRemoveItemFromWishlistMutation } from '@/reducer/features/wishlist/wishlistApi';
import { ToastError, ToastSuccess } from '@/utils/utils-function/ReactToastify';

const RemoveFromWishlist = ({ wishlistId }: { wishlistId: string }) => {
	const [removeItemFromWishlist, { isLoading }] =
		useRemoveItemFromWishlistMutation();

	const RemoveWishlistHandler = async () => {
		try {
			await removeItemFromWishlist({ wishlistItemId: wishlistId }).unwrap();

			ToastSuccess('Item removed from wishlist successfully.');
		} catch (error) {
			ToastError('Failed to remove item from wishlist');
		}
	};
	return (
		<button
			type='button'
			onClick={RemoveWishlistHandler}
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
				<FiTrash2 className='w-4 h-4  transition-transform group-hover:scale-110' />
			)}
		</button>
	);
};

export default RemoveFromWishlist;
