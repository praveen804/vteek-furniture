'use client';
import React, { useState, useEffect } from 'react';
import { FiPlus, FiMinus, FiCheck } from 'react-icons/fi';
import { CartItem } from './CartContainer';
import { useUpdateCartItemMutation } from '@/reducer/features/cart/cartApi';
import { ToastError, ToastSuccess } from '@/utils/utils-function/ReactToastify';
import { debounce } from 'lodash';

const UpdateQuantity = ({ item }: { item: CartItem }) => {
	const [quantity, setQuantity] = useState(item.quantity);
	const [isEditing, setIsEditing] = useState(false);
	const [updateCartItem, { isLoading }] = useUpdateCartItemMutation();

	// Debounce the save function to prevent rapid API calls
	const debouncedSave = debounce(async (qty: number) => {
		try {
			await updateCartItem({ cartItemId: item.id, quantity: qty }).unwrap();
			ToastSuccess('Quantity updated successfully');
			setIsEditing(false);
		} catch (error) {
			console.error('Update error:', error);
			ToastError('Failed to update quantity');
			setQuantity(item.quantity); // Revert on error
		}
	}, 500);

	// Auto-save when quantity changes after a delay
	useEffect(() => {
		if (quantity !== item.quantity && !isEditing) {
			setIsEditing(true);
		}
	}, [quantity, item.quantity, isEditing]);

	// Handle manual save
	const handleSave = () => {
		debouncedSave(quantity);
	};

	// Handle increment with validation
	const increment = () => {
		if (quantity < 5) {
			// Set reasonable max limit
			setQuantity((prev) => prev + 1);
		}
	};

	// Handle decrement with validation
	const decrement = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	// Handle direct input changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		if (!isNaN(value) && value >= 1 && value <= 5) {
			setQuantity(value);
		}
	};

	return (
		<div className='flex items-center gap-2'>
			<div
				className='flex items-center border border-gray-200 rounded-lg'
				role='group'
				aria-label={`Quantity controls for ${item.title}`}
			>
				<button
					type='button'
					aria-label={`Decrease quantity`}
					className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
					onClick={decrement}
					disabled={quantity <= 1 || isLoading}
				>
					<FiMinus size={16} />
				</button>

				<input
					type='number'
					min='1'
					max='5'
					value={quantity}
					onChange={handleChange}
					className='w-12 px-2 py-1 text-center border-0 focus:ring-2 focus:ring-indigo-500 rounded'
					aria-label='Item quantity'
					disabled={isLoading}
				/>

				<button
					type='button'
					aria-label={`Increase quantity`}
					className='px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
					onClick={increment}
					disabled={quantity >= 5 || isLoading}
				>
					<FiPlus size={16} />
				</button>
			</div>

			{isEditing && (
				<button
					type='button'
					onClick={handleSave}
					disabled={isLoading}
					className='px-2 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors flex items-center gap-1'
					aria-label='Save quantity'
				>
					{isLoading ? (
						<span className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent'></span>
					) : (
						<>
							<FiCheck size={14} />
							<span className='text-sm'>Save</span>
						</>
					)}
				</button>
			)}
		</div>
	);
};

export default React.memo(UpdateQuantity);
