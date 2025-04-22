'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type CardDetails = {
	number: string;
	name: string;
	expiry: string;
	cvv: string;
};

type CardPaymentFormProps = {
	onDetailsChange: (details: CardDetails) => void;
};

const CardPaymentForm = ({ onDetailsChange }: CardPaymentFormProps) => {
	const [cardDetails, setCardDetails] = React.useState<CardDetails>({
		number: '',
		name: '',
		expiry: '',
		cvv: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const newDetails = { ...cardDetails, [name]: value };
		setCardDetails(newDetails);
		onDetailsChange(newDetails);
	};

	const formatCardNumber = (value: string): string => {
		const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
		const matches = v.match(/\d{4,16}/g);
		const match = (matches && matches[0]) || '';
		const parts = [];

		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}

		return parts.length ? parts.join(' ') : value;
	};

	return (
		<div className='space-y-4 mb-6'>
			<div>
				<Label htmlFor='cardNumber'>Card Number</Label>
				<Input
					id='cardNumber'
					name='number'
					value={formatCardNumber(cardDetails.number)}
					onChange={(e) => {
						e.target.value = formatCardNumber(e.target.value);
						handleChange(e);
					}}
					placeholder='1234 5678 9012 3456'
					maxLength={19}
				/>
			</div>
			<div>
				<Label htmlFor='cardName'>Cardholder Name</Label>
				<Input
					id='cardName'
					name='name'
					value={cardDetails.name}
					onChange={handleChange}
					placeholder='John Doe'
				/>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div>
					<Label htmlFor='cardExpiry'>Expiry Date</Label>
					<Input
						id='cardExpiry'
						name='expiry'
						value={cardDetails.expiry}
						onChange={(e) => {
							// Format as MM/YY
							let value = e.target.value.replace(/\D/g, '');
							if (value.length > 2) {
								value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
							}
							e.target.value = value;
							handleChange(e);
						}}
						placeholder='MM/YY'
						maxLength={5}
					/>
				</div>
				<div>
					<Label htmlFor='cardCvv'>CVV</Label>
					<Input
						id='cardCvv'
						name='cvv'
						type='password'
						value={cardDetails.cvv}
						onChange={handleChange}
						placeholder='123'
						maxLength={4}
					/>
				</div>
			</div>
		</div>
	);
};

export default CardPaymentForm;
