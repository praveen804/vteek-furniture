'use client';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { ToastError, ToastSuccess } from '@/utils/utils-function/ReactToastify';
import { useAddAddressMutation } from '@/Redux-Toolkit/features/address/addressApi';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import { useRouter } from "next/navigation";
import AddressInput from "./AddressInput";

const addressTypes = ['Home', 'Work', 'Billing', 'Shipping'];

const AddressForm = () => {
	const [address, setAddress] = useState({
		name: '',
		street: '',
		city: '',
		state: '',
		postalCode: '',
		country: '',
		mobile: '',
		addressType: '',
	});
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [addAddress, { isLoading }] = useAddAddressMutation();
	const user = useAppSelector((state: RootState) => state.auth.user);
	const router=useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAddress((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddAddressSubmit = async () => {
		if (!address.name || !address.street || !address.city || !address.mobile) {
			ToastError('Please fill in all required fields.');
			return;
		}

		try {
			await addAddress({
				userId: user?._id ?? '',
				name: address.name,
				street: address.street,
				city: address.city,
				state: address.state,
				postalCode: address.postalCode,
				country: address.country,
				mobile: address.mobile,
				addressType: address.addressType,
			}).unwrap();

			ToastSuccess('Address saved successfully!');
			setAddress({
				name: '',
				street: '',
				city: '',
				state: '',
				postalCode: '',
				country: '',
				mobile: '',
				addressType: '',
			});
			router.push('/address');
		} catch (error) {
			console.error('Error saving address:', error);
			ToastError('Failed to save address.');
		}
	};

	return (
		<form onSubmit={(e)=>e.preventDefault()} className='flex justify-center min-h-screen py-10'>
			<div className='w-full max-w-md rounded-lg bg-gray-50 border border-pink-700'>
				{/* Header */}
				<div className='flex items-center justify-between border-b p-4'>
					<h2 className='text-xl font-bold text-gray-800'>Add New Address</h2>
				</div>

				{/* Form Body */}
				<div className='space-y-4 p-6'>
					<AddressInput
						label='Name'
						name='name'
						value={address.name}
						onChange={handleInputChange}
						placeholder='Full Name'
					/>
					<AddressInput
						label='Street'
						name='street'
						value={address.street}
						onChange={handleInputChange}
						placeholder='Street Address'
					/>
					<div className='grid grid-cols-2 gap-4'>
						<AddressInput
							label='City'
							name='city'
							value={address.city}
							onChange={handleInputChange}
							placeholder='City'
						/>
						<AddressInput
							label='State'
							name='state'
							value={address.state}
							onChange={handleInputChange}
							placeholder='State'
						/>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<AddressInput
							label='Postal Code'
							name='postalCode'
							value={address.postalCode}
							onChange={handleInputChange}
							placeholder='Postal Code'
						/>
						<AddressInput
							label='Country'
							name='country'
							value={address.country}
							onChange={handleInputChange}
							placeholder='Country'
						/>
					</div>
					<AddressInput
						label='Mobile Number'
						name='mobile'
						type='tel'
						value={address.mobile}
						onChange={handleInputChange}
						placeholder='Mobile Number'
					/>

					{/* Address Type Dropdown */}
					<div>
						<label
							htmlFor='addressType'
							className='mb-1 block text-sm font-medium text-gray-700'
						>
							Address Type
						</label>
						<div className='relative'>
							<button
								type='button'
								id='addressType'
								name='addressType'
								onClick={() => setDropdownOpen(!dropdownOpen)}
								className='flex w-full items-center justify-between rounded-md border border-gray-300 p-3 text-left focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500'
							>
								<span>{address.addressType || 'Select Address Type'}</span>
								{dropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
							</button>
							{dropdownOpen && (
								<ul className='absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg'>
									{addressTypes.map((type) => (
										<li key={type}>
											<button
												type='button'
												onClick={() => {
													setAddress((prev) => ({
														...prev,
														addressType: type,
													}));
													setDropdownOpen(false);
												}}
												className='w-full px-4 py-2 text-left hover:bg-pink-50 hover:text-pink-700'
											>
												{type}
											</button>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='flex justify-end border-t p-4'>
					<button
						type='button'
						onClick={handleAddAddressSubmit}
						disabled={isLoading}
						className='rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
					>
						{isLoading ? 'saving...' : 'Save Address'}{' '}
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddressForm;
