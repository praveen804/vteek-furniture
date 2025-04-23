'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useGlobalFurnitureContext } from '@/context/FurnitureContext';
import { ToastSuccess } from '@/src/utils-function/ReactToastify';
const ProductResetFilters = () => {
	const { resetFilters } = useGlobalFurnitureContext();
	const resetFiltersHandler = () => {
		resetFilters();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		ToastSuccess('Filters Reset Successfully');
	};
	return <Button onClick={resetFiltersHandler}>Reset Filters</Button>;
};

export default ProductResetFilters;
