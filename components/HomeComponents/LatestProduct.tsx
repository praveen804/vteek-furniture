'use client';

import React, { useState } from 'react';
import { Product } from '@/src/types/productInterface';
import Heading from '../reusableComponents/Heading';
import useFurnitureProductHook from '@/src/hooks/useFurnitureProductHook';
import { LatestFilterProduct } from '@/src/data/LatestFilterProduct.data';
import LatestProductTopBar from './LatestProductTopBar';
import CardFeaturedProduct from '../utils-components/card-components/CardFeaturedProduct';
import ErrorFeaturedProduct from '../utils-components/error-components/ErrorFeaturedProduct';
import LoadingFeaturedProduct from '../utils-components/loading-components/LoadingFeaturedProduct';

const LatestProduct = () => {
	const { data, isFetching } = useFurnitureProductHook();
	const [filter, setFilter] = useState('all');

	// Filter Products Logic
	const filteredProducts = data?.products.filter((product: Product) => {
		if (filter === 'all') return true;
		return product.category.toLowerCase() === filter;
	});

	const handleFilter = (filterType: string) => setFilter(filterType);

	return (
		<section className='pb-16'>
			<div className='max-w-7xl mx-auto px-1 mx:px-2 lg:px-4'>
				<div className='py-6'>
					<Heading title='Latest Product' />
				</div>

				{/* Filter Buttons */}
				<LatestProductTopBar
					isFetching={isFetching}
					LatestFilterProduct={LatestFilterProduct}
					handleFilter={handleFilter}
					filter={filter}
				/>

				{/* Products Grid */}
				<div
					className={`${
						filteredProducts?.length === 0
							? 'w-full'
							: 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 lg:gap-8'
					} `}
				>
					{isFetching ? (
						Array.from({ length: 12 }).map((_, index) => (
							<LoadingFeaturedProduct key={index} />
						))
					) : filteredProducts?.length === 0 ? (
						<ErrorFeaturedProduct />
					) : (
						filteredProducts
							?.slice(0, 12)
							.map((product: Product) => (
								<CardFeaturedProduct key={product._id} product={product} />
							))
					)}
				</div>
			</div>
		</section>
	);
};

export default LatestProduct;
