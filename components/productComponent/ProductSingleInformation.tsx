import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/src/types/productInterface';

export const dynamic = 'force-dynamic';

const tabData = {
	description:
		'This is a high-quality jewelry item made with exquisite craftsmanship, designed to last a lifetime.',
	additionalInfo: {
		material: '18K Gold',
		weight: '15g',
		dimensions: '2x2 inches',
		warranty: '1 year',
	},

	video: 'https://www.youtube.com/embed/RQKlzdkcoYM', // Replace with an actual video link
};

const ProductSingleInformation = ({
	product,
}: {
	product: Product | undefined;
}) => {
	const [activeTab, setActiveTab] = useState('description');

	const tabContent = () => {
		switch (activeTab) {
			case 'description':
				return (
					<div className='text-gray-700 text-sm md:text-base'>
						<p className='text-2xl text-custom-4 '>{product?.title} </p>
						<p className='text-xl '>{product?.about} </p>
						<p className='text-gray-500'>{product?.description} </p>
					</div>
				);
			case 'additionalInfo':
				return (
					<ul className='text-gray-700 text-sm md:text-base space-y-2'>
						<li>Material : {product?._id} </li>
						<li>Material : {product?.material} </li>
						<li> Weight : {product?.weight} </li>
						<li>
							{' '}
							Dimensions : {product?.dimension.height} x{' '}
							{product?.dimension.width} x {product?.dimension.length}{' '}
						</li>
						<li> Brand : {product?.brand} </li>
						<li> Category : {product?.category} </li>
						<li> Origin : {product?.origin} </li>
						<li> Weight : {product?.weight} </li>
					</ul>
				);

			case 'video':
				return (
					<div className='aspect-w-16 aspect-h-9'>
						<iframe
							src={tabData.video}
							title='Product Video'
							allowFullScreen
							className='rounded-md w-full h-80'
						/>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className=' bg-[#eeeffb]'>
			<div className='max-w-4xl mx-auto p-4'>
				<div className='flex justify-around border-b border-gray-300 mb-4'>
					{['description', 'additionalInfo', 'video'].map((tab) => (
						<motion.button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`text-sm md:text-base px-4 py-2 ${
								activeTab === tab
									? 'text-indigo-600 border-b-2 border-indigo-600'
									: 'text-gray-500'
							}`}
							whileHover={{ scale: 1.1 }}
						>
							{tab.replace(/([A-Z])/g, ' $1').toUpperCase()}
						</motion.button>
					))}
				</div>
				<motion.div
					className='p-4 bg-white rounded-md shadow-md'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{tabContent()}
				</motion.div>
			</div>
		</div>
	);
};

export default ProductSingleInformation;
