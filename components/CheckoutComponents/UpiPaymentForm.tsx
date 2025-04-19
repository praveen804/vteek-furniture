'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type UpiDetails = {
	upiId: string;
};

type UpiPaymentFormProps = {
	onDetailsChange: (details: UpiDetails) => void;
};

const UpiPaymentForm = ({ onDetailsChange }: UpiPaymentFormProps) => {
	const [upiDetails, setUpiDetails] = React.useState<UpiDetails>({ upiId: '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newDetails = { upiId: e.target.value };
		setUpiDetails(newDetails);
		onDetailsChange(newDetails);
	};

	return (
		<div className='mb-6'>
			<Label htmlFor='upiId'>UPI ID</Label>
			<Input
				id='upiId'
				name='upiId'
				value={upiDetails.upiId}
				onChange={handleChange}
				placeholder='yourname@upi'
			/>
			<p className='text-sm text-muted-foreground mt-2'>
				Enter your UPI ID (e.g., name@upi)
			</p>
		</div>
	);
};

export default UpiPaymentForm;
