'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Address } from '@/src/types/addressType';
import { useAppDispatch } from '@/reducer/hooks';
import { addAddress } from '@/reducer/features/address/addressSlice';
import { useChooseAddressMutation } from '@/reducer/features/address/addressApi';
import { ToastError } from '@/src/utils/ReactToastify';
import AddressDelete from './AddressDelete';

type Props = {
	address: Address;
	isSelected: boolean;
	onSelect: (id: string) => void;
};

const AddressCard = ({ address, isSelected, onSelect }: Props) => {
	const dispatch = useAppDispatch();
	const [chooseAddress, { isLoading }] = useChooseAddressMutation();

	// Automatically select on first mount (once), only if not selected already
	useEffect(() => {
		if (!isSelected) {
			handleAddressSelect(address._id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Empty deps to run once on mount

	const handleAddressSelect = async (addressId: string) => {
		if (isSelected) return;

		try {
			await chooseAddress(addressId).unwrap();
			dispatch(addAddress(address));
			onSelect(addressId);
		} catch (err) {
			console.error('Failed to select address:', err);
			ToastError('Failed to select address!');
		}
	};

	return (
		<AnimatePresence>
			<motion.div
				key={address._id}
				layout
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.95 }}
				transition={{ type: 'spring', stiffness: 400, damping: 25 }}
				whileHover={{
					y: -4,
					boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
				}}
				className={`relative border ${
					isSelected ? 'border-pink-500' : 'border-gray-200'
				} bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md`}
			>
				<div className='p-6 space-y-4'>
					{/* Top Section */}
					<div className='flex items-start gap-4'>
						<div className='flex-1'>
							<div className='flex items-center justify-between mb-2 px-3'>
								<h3 className='text-base font-semibold text-gray-900'>
									{address.name}
								</h3>
								<p className='text-sm text-black bg-pink-200 px-4 py-1 rounded-full'>
									{address.addressType}
								</p>
							</div>
							<div className='text-sm text-gray-600 mt-1 leading-snug space-y-0.5'>
								<p className='flex items-start gap-1.5'>
									<FiMapPin className='mt-0.5 text-gray-400' size={14} />
									<span>{address.street}</span>
								</p>
								<p className='pl-5'>
									{address.city}, {address.state}
								</p>
								<p className='pl-5'>
									{address.postalCode}, {address.country}
								</p>
								<p className='flex items-start gap-1.5 font-medium pt-2'>
									<FiPhone className='mt-0.5 text-gray-400' size={14} />
									<span>{address.mobile}</span>
								</p>
							</div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className='flex justify-between items-center pt-4 border-t border-gray-100'>
						<label className='flex items-center gap-2 cursor-pointer'>
							<input
								type='radio'
								name='selectedAddress'
								checked={isSelected}
								onChange={() => handleAddressSelect(address._id)}
								className='accent-pink-600 w-4 h-4'
								aria-label='Choose this address'
								disabled={isLoading}
							/>
							<span className='text-sm text-gray-700'>Choose this address</span>
						</label>
						<AddressDelete addressId={address._id} />
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default AddressCard;
