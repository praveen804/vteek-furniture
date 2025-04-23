'use client';
import { useDeleteAddressMutation } from '@/reducer/features/address/addressApi';
import { ToastError, ToastSuccess } from '@/src/utils-function/ReactToastify';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const AddressDelete = ({ addressId }: { addressId: string }) => {
	const [deleteAddress, { isLoading }] = useDeleteAddressMutation();

	const deleteHandler = async () => {
		try {
			await deleteAddress(addressId).unwrap();
			ToastSuccess('Address deleted successfully!');
		} catch (error) {
			console.error(error);
			ToastError('Failed to delete address.');
		}
	};

	return (
		<div>
			<button
				type='button'
				onClick={deleteHandler}
				aria-label='Delete address'
				className='p-1.5 text-gray-400 hover:text-red-500 hover:bg-gray-50 rounded-full transition-colors disabled:opacity-50'
				disabled={isLoading}
			>
				<FiTrash2 size={16} />
			</button>
		</div>
	);
};

export default AddressDelete;
