'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useGlobalFurnitureContext } from '@/context/FurnitureContext';
import { ratings } from '@/src/data/productFilterData';

export default function ProductFilterRating() {
	const { filters, handleFilterChange } = useGlobalFurnitureContext();

	const handleRatingChange = (rating: number) => {
		handleFilterChange('minRating', rating);
	};

	return (
		<div className='space-y-4'>
			{/* Rating Filter */}
			<div>
				<h3 className='text-lg font-semibold underline pb-2'>Rating Item</h3>
				<div className='space-y-2'>
					{ratings.map((rating) => (
						<div className='flex items-center gap-2' key={rating}>
							<RadioGroup
								value={String(filters.minRating)}
								onValueChange={() => handleRatingChange(Number(rating))}
							>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value={String(rating)}
										id={`rating-${rating}`}
									/>
									<Label htmlFor={`rating-${rating}`}>
										<span
											className='inline-flex items-center text-amber-500'
											aria-hidden='true'
										>
											{Array.from(
												{ length: Math.floor(rating) },
												(_, index) => (
													<FaStar key={index} className='text-orange-500' />
												)
											)}
											{rating % 1 !== 0 && (
												<FaStarHalfAlt className='text-orange-500' />
											)}
											<span className='ml-2'>& up</span>
										</span>
									</Label>
								</div>
							</RadioGroup>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
