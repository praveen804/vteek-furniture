'use client';
import React from 'react';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import {
	useAddItemToWishlistMutation,
	useGetWishlistQuery,
} from '@/reducer/features/wishlist/wishlistApi';
import { ToastError, ToastSuccess } from '@/src/utils/ReactToastify';
import BasePromiseButton from '../utils-components/button-components/BasePromiseButton';

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
		<>
			<BasePromiseButton
				onClick={handleAddToWishlist}
				isDisabled={isLoading || !!isDuplicate || !colors}
				isLoading={isLoading}
				baseChildren={
					isLoading
						? 'Adding...'
						: !colors
						? 'Select a color first'
						: isDuplicate
						? 'Already in Wishlist'
						: 'Add to Wishlist'
				}
				ariaLabel='Add to Wishlist'
				className={`flex-1 items-center  transition-colors disabled:cursor-not-allowed ${
					isDuplicate || (!colors && 'bg-gray-400 text-gray-500  disabled:cursor-not-allowed')
				}`}
				variant='outline'
				size='lg'
			/>


		</>
	);
};

export default AddToWishlist;
