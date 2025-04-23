'use client';
import React from 'react';
import { useGetReviewsByUserIdQuery } from '@/Redux-Toolkit/features/reviews/reviewApi';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import { ReviewSkeleton } from './ReviewSkeleton';
import { EmptyReviews } from './EmptyReviews';
import { ErrorDisplay } from './ErrorDisplay';
import { RenderStars } from './review-utils';
import { ReviewCard } from './ReviewCard';

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
							<RenderStars rating={parseFloat(data.averageRating)} />
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

export default ReviewSingleUser;
