'use client';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';
import { sortOptionsData } from '@/src/data/productFilterData';
import React from 'react';

const SortComponent = () => {
	const { filters, handleFilterChange } = useGlobalFurnitureContext();

	return (
		<Select
			value={filters.sortBy} // Use the specific `sort` value
			onValueChange={(value) => handleFilterChange('sortBy', value)} // Correctly handle value change
		>
			<SelectTrigger className='focus:outline-none focus:ring-0 w-[165px] border border-primary'>
				<SelectValue placeholder='Sort by' className='text-white' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Sort Options</SelectLabel>
					{sortOptionsData.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SortComponent;
