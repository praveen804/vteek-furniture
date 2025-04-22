import React from 'react';
import { Product, Review } from '@/utils/types/productInterface';
import ProductColor from './ProductColor';
import ProductShare from './ProductShare';
import AddToCart from '../cart-components/AddToCart';
import AddToWishlist from '../WishlistComponents/AddToWishlist';
import ProductQuantity from './ProductQuantity';
import SingleProductImageCardUI from './SingleProductImageCardUI';
import SingleProductDetailsCardUI from './SingleProductDetailsCardUI';

export interface SingleProductCardProps {
	product: Product | undefined;
	review: Review[] | undefined;
}
const SingleProductCard: React.FC<SingleProductCardProps> = ({
	product,
	review,
}) => {
	// Error State
	if (!product) {
		return (
			<div className='flex items-center justify-center min-h-[50vh]'>
				<div className='text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100 max-w-md w-full'>
					<h3 className='text-xl font-medium text-gray-800 mb-2'>
						Product Not Found
					</h3>
					<p className='text-gray-500'>
						The product you&apos;re looking for is not available.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<div
				className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100'
				aria-labelledby='product-details'
			>
				{/* Image Section */}
				<SingleProductImageCardUI product={product} />
				{/* Details Section */}
				<div className='p-6 lg:p-8'>
					<SingleProductDetailsCardUI product={product} review={review || []} />

					{/* color and quantity */}
					<section className='space-y-4 py-4'>
						<ProductColor color={product.color} />
						<ProductQuantity />
					</section>

					<section className='flex flex-col sm:flex-row gap-4 py-4'>
						<AddToCart productId={product._id} />
						<AddToWishlist productId={product._id} />
					</section>

					<div className='border-t border-gray-200 pt-6'>
						<h3 className='text-sm font-medium text-gray-600 mb-3'>
							Share this product
						</h3>
						<ProductShare />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProductCard;
