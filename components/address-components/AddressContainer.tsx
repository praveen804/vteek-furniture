'use client';
import React, { useState } from 'react';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import { useGetAddressesByUserQuery } from '@/Redux-Toolkit/features/address/addressApi';
import LoadingContainer from '../reusableComponents/LoadingContainer';
import AddressCard from './AddressCard';
import AddAddressButton from './AddAddressButton';

const AddressContainer = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const user = useAppSelector((state: RootState) => state.auth.user);
	const {
		data: addresses,
		isLoading,
		refetch,
	} = useGetAddressesByUserQuery(user?._id ?? '');

	React.useEffect(() => {
		if (user?._id) {
			refetch();
		}
	}, [user?._id, refetch]);

	if (isLoading) {
		return <LoadingContainer />;
	}

	if (!addresses) {
		return (
			<div className='w-full min-h-[80vh] flex flex-col gap-5 justify-center items-center '>
				<AddAddressButton address={addresses} />
			</div>
		);
	}

	return (
		<div className='max-w-7xl mx-auto'>
			<h1 className='text-3xl font-bold text-gray-900 mb-8'>Your Addresses</h1>

			{/* Address List */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
				{addresses
					
					?.map((address) => (
						<AddressCard
							key={address._id}
							address={address}
							isSelected={selectedId === address._id}
							onSelect={setSelectedId}
						/>
					))}
			</div>
			{/*  add address button */}
			<AddAddressButton address={addresses} />
		</div>
	);
};

export default AddressContainer;
