'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';

// Define type for a discount
type Discount = {
	id: string;
	value: number;
	label: string;
};

const ProductDiscount: React.FC = () => {
	// Generate discounts dynamically
	const discounts: Discount[] = Array.from({ length: 7 }, (_, index) => {
		const percentage = (index + 1) * 10;
		return {
			id: `discount${index + 1}`,
			value: percentage,
			label: `${percentage}% Discount & up`,
		};
	});

	// State for selected discount

	const { filters, handleFilterChange } = useGlobalFurnitureContext();

	return (
		<section>
			<h2 className='text-lg md:text-xl font-semibold text-custom-4 underline'>
				Discount Offer
			</h2>
			<RadioGroup
				className='space-y-2 mt-2'
				value={String(filters.discount)} // Make sure the value is a string for RadioGroup
				onValueChange={(value) => handleFilterChange('discount', Number(value))} // Convert value back to number
			>
				{discounts.map((discount) => (
					<div key={discount.id} className='flex items-center space-x-2'>
						<RadioGroupItem value={String(discount.value)} id={discount.id} />
						<Label htmlFor={discount.id} className='font-serif font-medium'>
							{discount.label}
						</Label>
					</div>
				))}
			</RadioGroup>
		</section>
	);
};

export default ProductDiscount;
