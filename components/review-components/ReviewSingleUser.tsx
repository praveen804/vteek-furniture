'use client';
import { useGetReviewsByUserIdQuery } from '@/Redux-Toolkit/features/reviews/reviewApi';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import Image from 'next/image';
import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

type User = {
	_id: string;
	name: string;
	email: string;
};

type Product = {
	_id: string;
	title: string;
	category: string;
	image: string;
	finalPrice: number;
};
type Review = {
	_id: string;
	userId: User;
	productId: Product;
	comment: string;
	rating: number;
	date: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

const ReviewSingleUser = () => {
	const { user } = useAppSelector((state: RootState) => state.auth);
	const { data, isLoading, error } = useGetReviewsByUserIdQuery(
		user?._id ?? ''
	);

	if (isLoading) return <ReviewSkeleton />;
	if (error) return <ErrorDisplay error={error} />;
	if (!data?.reviews?.length) return <EmptyReviews />;

	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
				<div>
					<h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
						Your Reviews
					</h1>
					<div className='flex items-center mt-2'>
						<div className='flex items-center'>
							{renderStars(data.averageRating)}
							<span className='ml-2 text-gray-700 dark:text-gray-300'>
								{data.averageRating} out of 5
							</span>
						</div>
						<span className='mx-2 text-gray-400'>•</span>
						<span className='text-gray-600 dark:text-gray-400'>
							{data.reviews.length}{' '}
							{data.reviews.length === 1 ? 'review' : 'reviews'}
						</span>
					</div>
				</div>
			</div>

			<div className='space-y-6'>
				{data.reviews.map((review) => (
					<ReviewCard key={review._id} review={review} />
				))}
			</div>
		</div>
	);
};

const ReviewCard = ({ review }: { review: Review }) => {
	return (
		<div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
			<div className='p-6'>
				<div className='flex justify-between items-start'>
					<div className='flex items-center space-x-4'>
						<div className='flex-shrink-0 h-12 w-12 relative '>
							<span className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl" >{review.userId.name.slice(0, 2).toUpperCase()} </span>
						</div>
						<div>
							<h3 className='text-lg font-medium text-gray-900 dark:text-white'>
								{review.userId.name}
							</h3>
							<div className='flex items-center mt-1'>
								{renderStars(review.rating)}
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

const renderStars = (rating: number | string) => {
	const numRating = typeof rating === 'string' ? parseFloat(rating) : rating;
	const fullStars = Math.floor(numRating);
	const hasHalfStar = numRating % 1 >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className='flex'>
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={`full-${i}`} className='text-yellow-400 w-5 h-5' />
			))}
			{hasHalfStar && <FaStarHalfAlt className='text-yellow-400 w-5 h-5' />}
			{[...Array(emptyStars)].map((_, i) => (
				<FaRegStar key={`empty-${i}`} className='text-yellow-400 w-5 h-5' />
			))}
		</div>
	);
};

const formatDate = (dateString: string) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};
	return new Date(dateString).toLocaleDateString(undefined, options);
};

const ReviewSkeleton = () => (
	<div className='max-w-6xl mx-auto px-4 py-8'>
		<div className='animate-pulse space-y-6'>
			<div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3'></div>
			<div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4'></div>
			{[...Array(3)].map((_, i) => (
				<div
					key={i}
					className='bg-white dark:bg-gray-800 rounded-xl p-6 space-y-4'
				>
					<div className='flex items-center space-x-4'>
						<div className='h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full'></div>
						<div className='space-y-2'>
							<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-32'></div>
							<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-24'></div>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded'></div>
						<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6'></div>
					</div>
					<div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
						<div className='flex items-center space-x-4'>
							<div className='h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-md'></div>
							<div className='flex-1 space-y-2'>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4'></div>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2'></div>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4'></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
);

const ErrorDisplay = ({ error }: { error: unknown }) => (
	<div className='max-w-6xl mx-auto px-4 py-8'>
		<div className='bg-red-50 dark:bg-red-900 dark:bg-opacity-20 border-l-4 border-red-500 p-4'>
			<div className='flex'>
				<div className='flex-shrink-0'>
					<svg
						className='h-5 w-5 text-red-500'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<div className='ml-3'>
					<h3 className='text-sm font-medium text-red-800 dark:text-red-200'>
						Error loading reviews
					</h3>
					<div className='mt-2 text-sm text-red-700 dark:text-red-300'>
						{error instanceof Error
							? error.message
							: 'Failed to fetch your reviews. Please try again later.'}
					</div>
				</div>
			</div>
		</div>
	</div>
);

const EmptyReviews = () => (
	<div className='max-w-6xl mx-auto px-4 py-8'>
		<div className='text-center py-12'>
			<FiShoppingBag className='mx-auto h-12 w-12 text-gray-400' />
			<h3 className='mt-2 text-lg font-medium text-gray-900 dark:text-white'>
				No reviews yet
			</h3>
			<p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
				You haven&apos;t reviewed any products yet. Your reviews will appear
				here.
			</p>
			<div className='mt-6'>
				<button
					type='button'
					className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Browse products
				</button>
			</div>
		</div>
	</div>
);

export default ReviewSingleUser;
