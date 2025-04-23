'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import {
	useAddItemToCartMutation,
	useGetCartQuery,
} from '@/reducer/features/cart/cartApi';
import { ToastError, ToastSuccess } from '@/src/utils/ReactToastify';
import { resetCartQuantity } from '@/reducer/features/cart/cartSlice';
import { useRouter } from 'next/navigation';

interface AddToCartProps {
	productId: string;
}

const AddToCart = ({ productId }: AddToCartProps) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state: RootState) => state.auth);
	const { colors, quantity } = useAppSelector((state: RootState) => state.cart);

	const [addItemToCart, { isLoading }] = useAddItemToCartMutation();
	const { data: cartData } = useGetCartQuery(user?._id ?? '');

	const cartItem = cartData?.items?.find(
		(item) => item.productId === productId
	);
	const totalCartQuantity = cartData?.totalQuantity ?? 0;

	const isDisabled =
		isLoading ||
		!colors ||
		quantity <= 0 ||
		(cartItem?.quantity ?? 0) >= 5 ||
		totalCartQuantity >= 10;

	const handleAddToCart = async () => {
		if (!user) {
			ToastError('Please log in to add items to your cart.');
			router.push('/login');
			return;
		}

		try {
			await addItemToCart({
				userId: user._id,
				productId,
				quantity,
				color: colors,
			}).unwrap();

			dispatch(resetCartQuantity());
			ToastSuccess('Item added to cart successfully.');
		} catch (error) {
			console.error('Add to cart error:', error);
			ToastError(
				(error as { data?: { message?: string } })?.data?.message ||
					'Something went wrong. Please try again.'
			);
		}
	};

	return (
		<Button
			onClick={handleAddToCart}
			disabled={isDisabled}
			className={`bg-pink-600 flex-1 py-6 rounded-lg items-center shadow-lg transition-opacity ${
				isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-700'
			}`}
		>
			{isLoading ? 'Adding...' : 'Add to Cart'}
		</Button>
	);
};

export default AddToCart;
