'use client';

import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { color } from '@/src/data/productFilterData';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';

export default function ProductColorFilter() {
	const { filters, handleFilterChange } = useGlobalFurnitureContext();

	const handleColorChange = (color: string, checked: boolean) => {
		const updatedValue = checked
			? [...(filters.color || []), color]
			: (filters.color || []).filter((item) => item !== color);
		handleFilterChange('color', updatedValue);
		// window.scrollTo({
		//   top:200 ,
		//   behavior: "smooth",
		// });
	};

	return (
		<fieldset className='space-y-4'>
			<legend className='text-lg md:text-xl font-bold text-custom-4 underline space-y-2'>
				Choose Colors
			</legend>
			<div className='flex flex-wrap gap-2'>
				{color.map((color) => (
					<div
						key={color}
						className='flex flex-col items-center gap-2 cursor-pointer'
					>
						<Checkbox
							id={color}
							checked={filters.color?.includes(color) || false}
							onCheckedChange={(checked) => handleColorChange(color, !!checked)}
							className='size-6 shadow-none'
							style={{ backgroundColor: color }}
						/>
						<Label
							htmlFor={color}
							className='text-sm font-medium text-gray-700 sr-only'
						>
							{color}
						</Label>
					</div>
				))}
			</div>
		</fieldset>
	);
}
