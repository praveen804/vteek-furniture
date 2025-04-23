'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import {
	useAddItemToWishlistMutation,
	useGetWishlistQuery,
} from '@/reducer/features/wishlist/wishlistApi';
import { ToastError, ToastSuccess } from '@/src/utils/ReactToastify';

interface Props {
	productId: string;
}

const AddToWishlist = ({ productId }: Props) => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { colors } = useAppSelector((state: RootState) => state.cart);

	const [addItemToWishlist, { isLoading }] = useAddItemToWishlistMutation();
	const { data: wishlistData } = useGetWishlistQuery(user?._id ?? '');

	const isDuplicate = wishlistData?.items?.some(
		(item) => item.productId === productId && item.color === colors
	);

	const handleAddToWishlist = async () => {
		if (!user) {
			ToastError('Please log in to use the wishlist.');
			return;
		}
		try {
			await addItemToWishlist({
				userId: user._id,
				productId,
				color: colors,
			}).unwrap();
			ToastSuccess('Item added to wishlist!');
		} catch (error) {
			ToastError(
				(error as { data?: { message?: string } })?.data?.message ||
					'Something went wrong. Please try again.'
			);
		}
	};

	return (
		<Button
			onClick={handleAddToWishlist}
			disabled={isLoading || !!isDuplicate || !colors}
			variant='outline'
			className={`flex-1 py-6 rounded-lg items-center shadow-md text-sm font-medium transition-colors ${
				isDuplicate || !colors
					? 'bg-gray-200 text-gray-500 cursor-not-allowed'
					: 'hover:bg-pink-50 hover:text-pink-600'
			}`}
			aria-label='Add to Wishlist'
		>
			{isLoading
				? 'Adding...'
				: !colors
				? 'Select a color first'
				: isDuplicate
				? 'Already in Wishlist'
				: 'Add to Wishlist'}
		</Button>
	);
};

export default AddToWishlist;
