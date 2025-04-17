'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RemoveFromWishlist from './RemoveFromWishlist';
import AddWishlistToCart from './AddWishlistToCart';

export interface WishListCardProps {
	item: {
		id: string;
		productId: string;
		title: string;
		image: string;
		price: number;
		color: string;
		addedAt: string;
	};
}

const WishListCard: React.FC<WishListCardProps> = ({ item }) => {
	return (
		<div className='group relative bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden'>
			{/* Product Image */}
			<div className='relative aspect-square w-full'>
				<Link href={`/products/${item.productId}`}>
					<Image
						src={item.image}
						alt={item.title}
						fill
						className='object-cover transition-transform group-hover:scale-105'
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
					/>
				</Link>

				{/* Actions */}
				<div className='absolute top-3 right-3 flex flex-col gap-5'>
					<RemoveFromWishlist wishlistId={item.id} />
					<AddWishlistToCart item={item} />
				</div>
			</div>

			{/* Product Details */}
			<div className='p-4'>
				<Link href={`/products/${item.productId}`}>
					<h3 className='font-medium text-gray-900 mb-1 hover:text-indigo-600 line-clamp-1'>
						{item.title}
					</h3>
				</Link>

				<div className='flex items-center justify-between mt-2'>
					<span className='text-lg font-bold text-gray-900'>
						${item.price.toFixed(2)}
					</span>

					<div className='flex items-center gap-1'>
						<span
							className='w-5 h-5 rounded-full border-2 border-black'
							style={{ backgroundColor: item.color }}
							aria-label={`Color: ${item.color}`}
						/>
					</div>
				</div>

				<div className='mt-3 flex justify-between items-center text-sm text-gray-500'>
					<span>Added: {new Date(item.addedAt).toLocaleDateString()}</span>
				</div>
			</div>
		</div>
	);
};

export default WishListCard;
