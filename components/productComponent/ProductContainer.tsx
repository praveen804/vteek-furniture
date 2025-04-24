'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';
import ErrorFeaturedProduct from '../utils-components/error-components/ErrorFeaturedProduct';
import ProductLoading from '../utils-components/loading-components/ProductLoading';
import ProductPagination from "./ProductPagination";

const ProductContainer = () => {
	const { data, isError, isFetching } = useGlobalFurnitureContext();

	if (isError) return <ErrorFeaturedProduct />;

	return (
		<section className='max-w-7xl mx-auto px-1   '>
			<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-1 md:gap-2'>
				{isFetching ? (
					<ProductLoading />
				) : (
					data?.products?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))
				)}
			</div>
        <div className="py-5">
          <ProductPagination />
        </div>
		</section>
	);
};

export default ProductContainer;
