'use client';
import React from 'react';
import SortComponent from '@/components/productComponent/ProductSortComponent';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';
import MobileFilter from "@/components/mobile-components/MobileFilter";

const ProductTopBar: React.FC = () => {
	const { data } = useGlobalFurnitureContext();

	// Safely extract data values with fallbacks
	const currentPage = data?.currentPage || 1;
	const totalProducts = data?.totalProducts || 0;
	const itemsPerPage = 12; // Define how many items are shown per page
	const showingTo = Math.min(currentPage * itemsPerPage, totalProducts);
	const showingFrom = (currentPage - 1) * itemsPerPage + 1;

	return (
		<div className='max-w-6xl mx-auto lg:py-4 flex  justify-between items-center  px-2   '>
			{/* Left Section */}
			<div className="block lg:hidden">
				<MobileFilter />
			</div>
			<div className='lg:w-1/2 hidden lg:block'>
				<p className="text-[#151875] text-lg md:text-2xl font-bold font-['Josefin Sans']">
					Furniture Products
				</p>
				<p className="text-[#8a8fb9] text-xs font-normal font-['Lato']">
					Showing {showingFrom}-{showingTo} of {totalProducts} results
				</p>
				<p className="text-[#8a8fb9] text-xs font-normal font-['Lato']">
					About {totalProducts} results (0.62 seconds)
				</p>
			</div>

			{/* Right Section */}
			<div className='lg:w-1/2 flex justify-end items-center space-x-4 py-4 lg:py-0'>
				<div className='flex items-center space-x-2'>
					<div className="text-[#3f509e] text-sm md:text-base font-medium font-['Lato'] sr-only">
						Sort By:
					</div>
					{/* Sort Component */}
					<SortComponent />
				</div>
			</div>
		</div>
	);
};

export default ProductTopBar;
