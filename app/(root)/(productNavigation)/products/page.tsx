import React from 'react';

import ProductContainer from '@/components/productComponent/ProductContainer';
import { FurnitureMeta } from "@/src/meta/FurnitureMeta";

export const metadata=FurnitureMeta
const Product = () => {
	return (
		<>
			<ProductContainer />

		</>
	);
};

export default Product;
