'use client';
import React from 'react';
import { CartItem } from './CartContainer';
import { FiTrash2 } from 'react-icons/fi';
import { useDeleteCartItemMutation } from '@/reducer/features/cart/cartApi';
import { ToastError, ToastSuccess } from '@/src/utils/ReactToastify';

const DeleteCart = ({ item }: { item: CartItem }) => {
	const [deleteCartItem, { isLoading }] = useDeleteCartItemMutation();

	const handleDelete = async () => {
		try {
			await deleteCartItem(item.id).unwrap();
			ToastSuccess('Item removed from cart');
		} catch (error) {
			console.error('Error:', error);
			ToastError(
				(error as { data?: { message?: string } })?.data?.message ||
					'Something went wrong. Please try again.'
			);
		}
	};

	return (
		<button
			type='button'
			onClick={handleDelete}
			aria-label={`Remove ${item.title}`}
			className='p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
			disabled={isLoading}
		>
			{isLoading ? (
				<div role='status' aria-label='Loading cart' className=''>
					<div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-pink-500'></div>
				</div>
			) : (
				<FiTrash2 size={16} />
			)}
		</button>
	);
};

export default DeleteCart;
