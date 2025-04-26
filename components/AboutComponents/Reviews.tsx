'use client';
import React from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const reviews = [
	{
		name: 'Alice',
		comment: 'Best furniture ever! Comfortable and stylish.',
		rating: 5,
		date: '2023-10-01',
		product: 'Modern Sofa',
	},
	{
		name: 'Bob',
		comment: 'Amazing quality and service! Highly recommended.',
		rating: 4.5,
		date: '2023-09-25',
		product: 'Wooden Dining Table',
	},
	{
		name: 'Charlie',
		comment: 'Great value for money. Delivery was super fast!',
		rating: 5,
		date: '2023-09-20',
		product: 'Leather Recliner',
	},
	{
		name: 'Diana',
		comment: 'Loved the design and craftsmanship. Perfect for my home.',
		rating: 4,
		date: '2023-09-15',
		product: 'Bookshelf',
	},
	{
		name: 'Ethan',
		comment: 'Very sturdy and elegant. Worth every penny!',
		rating: 4.8,
		date: '2023-09-10',
		product: 'Glass Coffee Table',
	},
	{
		name: 'Fiona',
		comment: 'Excellent craftsmanship, and it fits perfectly in my space.',
		rating: 5,
		date: '2023-09-05',
		product: 'King Size Bed',
	},
];

const Reviews: React.FC = () => {
	return (
		<section className='py-16 px-6 bg-gray-50 text-center'>
			<h2 className='text-4xl font-bold text-primary mb-4'>
				What Our Customers Say
			</h2>
			<p className='text-gray-600 text-lg mb-12'>
				Hear from our happy customers about their experiences.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{reviews.map((review, index) => (
					<div
						key={index}
						className='bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl'
					>
						<div className='flex justify-center text-[#FFD700] mb-4'>
							{[...Array(5)].map((_, i) => (
								<FaStar
									key={i}
									className={`text-xl ${
										i < Math.floor(review.rating)
											? 'text-[#FFD700]'
											: 'text-gray-300'
									}`}
								/>
							))}
						</div>
						<div className='text-gray-600 mb-4'>
							<FaQuoteLeft className='inline-block mr-2' />
							<p className='inline italic'>{review.comment}</p>
							<FaQuoteRight className='inline-block ml-2' />
						</div>
						<div className='text-sm text-gray-500 mb-2'>
							Reviewed on: {review.date}
						</div>
						<div className='text-sm text-gray-500 mb-4'>
							Product: {review.product}
						</div>
						<div className='text-lg font-semibold text-primary'>
							- {review.name}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Reviews;
