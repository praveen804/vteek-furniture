'use client';
import React from 'react';
import Heading from '../reusableComponents/Heading';
import { Product } from '@/src/types/productInterface';
import useFurnitureProductHook from '@/src/hooks/useFurnitureProductHook';
import LoadingFeaturedProduct from '../utils-components/loading-components/LoadingFeaturedProduct';
import ErrorFeaturedProduct from '../utils-components/error-components/ErrorFeaturedProduct';
import CardFeaturedProduct from '../utils-components/card-components/CardFeaturedProduct';

const FeaturedProduct = () => {
	const { data, isError, isFetching } = useFurnitureProductHook();

const renderLoading = () => (
	<>
		{Array.from({ length: 4 }).map((_, index) => (
			<LoadingFeaturedProduct key={index} />
		))}
	</>
);	const renderError = () => <ErrorFeaturedProduct />;

	const renderProducts = () => {
		if (!data?.products || data.products.length === 0)
			return <ErrorFeaturedProduct />;

		const featured = [...data.products]
			.sort(() => Math.random() - 0.5)
			.slice(0, 4);

		return featured.map((product: Product) => (
			<CardFeaturedProduct key={product._id} product={product} />
		));
	};

	return (
		<section className=' pt-5 lg:py-20'>
			<Heading title='Featured Product' />
			<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3 md:mt-6 lg:mt-8 max-w-6xl mx-auto place-items-center px-1'>
				{isError
					? renderError()
					: isFetching
					? renderLoading()
					: renderProducts()}
			</div>
		</section>
	);
};

export default FeaturedProduct;
