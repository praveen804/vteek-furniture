'use client';
import { useGetWishlistQuery } from '@/reducer/features/wishlist/wishlistApi';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import React from 'react';
import LoadingContainer from '../reusableComponents/LoadingContainer';
import EmptyWishlist from './EmptyWishlist';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import WishListCard from './WishListCard';

interface WishlistItem {
	id: string;
	productId: string;
	title: string;
	image: string;
	price: number;
	color: string;
	addedAt: string;
}

const WishListContainer = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data, isLoading, refetch } = useGetWishlistQuery(user?._id ?? '', {
		skip: !user?._id,
	});

	React.useEffect(() => {
		if (user?._id) {
			refetch();
		}
	}, [user?._id, refetch]);

	if (isLoading) {
		return <LoadingContainer />;
	}

	if (!data?.items?.length) {
		return <EmptyWishlist />;
	}

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<div className='flex items-center justify-between mb-8'>
				<motion.h1
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					className='text-3xl font-bold text-gray-900 flex items-center gap-2'
				>
					<FiHeart className='text-rose-500' />
					My Wishlist ({data.items.length})
				</motion.h1>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{data.items.map((item: WishlistItem, index: number) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<WishListCard item={item} />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default WishListContainer;
