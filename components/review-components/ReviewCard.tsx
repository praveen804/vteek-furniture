'use client'
import React from 'react'
import { formatDate, RenderStars } from "./review-utils";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { Review } from './review-types';

export const ReviewCard = ({ review }: { review: Review }) => {
	return (
		<div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
			<div className='p-6'>
				<div className='flex justify-between items-start'>
					<div className='flex items-center space-x-4'>
						<div className='flex-shrink-0 h-12 w-12 relative '>
							<span className='bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl'>
								{review.userId.name.slice(0, 2).toUpperCase()}{' '}
							</span>
						</div>
						<div>
							<h3 className='text-lg font-medium text-gray-900 dark:text-white'>
								{review.userId.name}
							</h3>
							<div className='flex items-center mt-1'>
								<RenderStars rating={review.rating} />
								<span className='ml-2 text-sm text-gray-500 dark:text-gray-400'>
									{formatDate(review.date)}
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-4'>
					<p className='text-gray-700 dark:text-gray-300'>{review.comment}</p>
				</div>

				<div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-700'>
					<div className='flex items-center space-x-4'>
						<div className='flex-shrink-0 h-16 w-16 relative overflow-auto'>
							<Image
								fill
								className='h-16 w-16 rounded-md object-cover'
								src={review.productId.image}
								alt={review.productId.title}
								loading='lazy'
							/>
						</div>
						<div className='flex-1 min-w-0'>
							<p className='text-sm font-medium text-gray-900 dark:text-white truncate'>
								{review.productId.title}
							</p>
							<p className='text-sm text-gray-500 dark:text-gray-400 capitalize'>
								{review.productId.category}
							</p>
							<p className='text-sm font-semibold text-gray-900 dark:text-white mt-1'>
								${review.productId.finalPrice}
							</p>
						</div>
						<div className='flex-shrink-0'>
							<button
								type='button'
								className='inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								View Product
								<IoIosArrowForward className='ml-1.5 h-4 w-4' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
