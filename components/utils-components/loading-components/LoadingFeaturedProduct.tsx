import React from 'react';

const LoadingFeaturedProduct = () => {
	return (
		<div className='relative w-full h-[250px] md:h-[361px] bg-white border-2 border-dotted border-custom-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
			{/* Skeleton Image */}
			<div className='w-full h-[70%] bg-gray-300'></div>

			{/* Skeleton Info */}
			<div className='p-4'>
				<div className='h-4 bg-gray-300 rounded mb-2'></div>
				<div className='h-3 bg-gray-300 rounded'></div>
			</div>

			{/* Skeleton Buttons */}
			<div className='absolute top-4 left-4 flex flex-col space-y-3'>
				<div className='w-8 h-8 bg-gray-300 rounded-full'></div>
				<div className='w-8 h-8 bg-gray-300 rounded-full'></div>
				<div className='w-8 h-8 bg-gray-300 rounded-full'></div>
			</div>
		</div>
	);
};

export default LoadingFeaturedProduct;
