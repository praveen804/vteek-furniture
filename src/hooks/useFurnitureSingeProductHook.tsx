'use client';
import { fetchFurnitureSingleProduct } from '@/src/services/proudctApi';
import { SingleProductResponse } from '@/src/types/productInterface';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

const useFurnitureSingeProductHook = (id: string) => {
	const {
		data,
		isError,
		isFetching,
		error,
	}: UseQueryResult<SingleProductResponse, Error> = useQuery({
		queryKey: ['furnitureSingleProduct', id],
		queryFn: () => fetchFurnitureSingleProduct(id),
		staleTime: 0, // Ensures the data is always considered stale
	});

	return {
		data,
		isError,
		isFetching,
		error,
	};
};

export default useFurnitureSingeProductHook;
