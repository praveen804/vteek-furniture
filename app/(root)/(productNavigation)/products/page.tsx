import React from 'react';

import ProductPagination from '@/components/productComponent/ProductPagination';
import ProductContainer from '@/components/productComponent/ProductContainer';

const Product = () => {
	return (
		<>
			<ProductContainer />
			<div className=' my-10'>
				<ProductPagination />
			</div>
		</>
	);
};

export default Product;
