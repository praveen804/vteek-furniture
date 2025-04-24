'use client';
import React from 'react';
import Heading from '../reusableComponents/Heading';
import { Product } from '@/src/types/productInterface';
import ProductFirstDiscount from './ProductFirstDiscount';
import useFurnitureProductHook from '@/src/hooks/useFurnitureProductHook';
import LoadingFeaturedProduct from '../utils-components/loading-components/LoadingFeaturedProduct';
import CardFeaturedProduct from '../utils-components/card-components/CardFeaturedProduct';
import ErrorFeaturedProduct from '../utils-components/error-components/ErrorFeaturedProduct';

const TrendingProduct = () => {
	const { data, isError, isFetching } = useFurnitureProductHook();

	return (
		<section className='py-4 md:py-8 lg:py-20 bg-gray-50'>
			<Heading title='Trending Products' />

			{/* Error State */}
			{isError ? (
				<ErrorFeaturedProduct />
			) : (
				<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-1 md:gap-4 lg:gap-6 mt-8 max-w-6xl mx-auto place-items-center'>
					{isFetching
						? Array.from({ length: 4 }).map((_, index) => (
								<LoadingFeaturedProduct key={index} />
						  ))
						: data?.products
								?.slice(0, 4)
								.map((product: Product) => (
									<CardFeaturedProduct product={product} key={product._id} />
								))}
				</div>
			)}

			<ProductFirstDiscount />
		</section>
	);
};

export default TrendingProduct;
