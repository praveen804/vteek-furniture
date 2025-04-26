'use client';

import React from 'react';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { Button } from '@/components/ui/button';
import { MapPin, Pencil } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import BaseLinkIconButton from "../utils-components/button-components/BaseLinkIconButton";

const CheckoutAddress = () => {
	const { addresses } = useAppSelector((state: RootState) => state.address);
	const [showForm, setShowForm] = React.useState(false);
	const [instruction, setInstruction] = React.useState('');

	// Load instruction from localStorage on mount
	React.useEffect(() => {
		const saved = localStorage.getItem('deliveryInstruction');
		if (saved) setInstruction(saved);
	}, []);

	const handleSaveInstruction = () => {
		localStorage.setItem('deliveryInstruction', instruction);
		setShowForm(false);
	};

	if (!addresses)
		return (
			<div className='text-gray-500'>
				<h5>Not found Address</h5>
			</div>
		);

	const { name, street, city, state, postalCode, country, mobile, userId } =
		addresses;

	return (
		<div className='border rounded-2xl p-4 shadow-md space-y-4 bg-white'>
			<div className='flex items-start justify-between'>
				<div className='flex gap-3 items-start'>
					<MapPin className='text-primary mt-1' />
					<div>
						<p className='font-semibold text-gray-900'>
							Delivering to {name}
							{userId?.name && (
								<span className='ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full'>
									{userId.name}
								</span>
							)}
						</p>
						<p className='text-sm text-gray-700 mt-1'>
							{street}, {city}, {state}, {postalCode}, {country}
						</p>
						<p className='text-sm text-gray-500 mt-1'>Phone: {mobile}</p>
					</div>
				</div>
				<BaseLinkIconButton
					href='/address'
					buttonLinkChildren='Change'
					icon={<Pencil className='w-4 h-4' />}
					className='text-sm flex gap-1 items-center text-white'
					ariaLabel='Change Address'
					variant='default'
					size='default'
				/>
			</div>

			{/* Add Delivery Instruction Section */}
			{showForm ? (
				<div className='space-y-2'>
					<label htmlFor='delivery-instruction' className='text-sm font-medium'>
						Delivery Instructions
					</label>
					<Textarea
						id='delivery-instruction'
						value={instruction}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setInstruction(e.target.value)
						}
						rows={4}
						placeholder='Add specific delivery notes, gate codes, etc...'
						className='resize-none text-sm'
					/>
					<div className='flex justify-end gap-2'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => setShowForm(false)}
							className='text-sm'
						>
							Cancel
						</Button>
						<Button
							variant='default'
							size='sm'
							onClick={handleSaveInstruction}
							className='text-sm bg-pink-600 hover:bg-pink-700'
						>
							Save
						</Button>
					</div>
				</div>
			) : (
				<Button
					variant='outline'
					size='sm'
					className='text-sm w-full hover:border-pink-500 hover:text-pink-600 transition'
					onClick={() => setShowForm(true)}
				>
					+ Add delivery instructions
				</Button>
			)}

			{/* Show saved instruction */}
			{instruction && !showForm && (
				<div className='text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border mt-2'>
					<p className='font-medium text-gray-800'>Instruction:</p>
					<p>{instruction}</p>
				</div>
			)}
		</div>
	);
};

export default CheckoutAddress;
