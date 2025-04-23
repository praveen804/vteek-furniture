import React, { createContext, Suspense, useContext, useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchFurnitureProduct } from '@/src/services/proudctApi';
import {
	ProductsParams,
	ProductResponse,
	ProductContextType,
} from '@/src/types/productInterface';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const FurnitureContext = createContext({} as ProductContextType);

export const FurnitureProviderComponent = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	const [filters, setFilters] = useState<ProductsParams>({});

	const { data, isFetching, isError, error }: UseQueryResult<ProductResponse> =
		useQuery({
			queryKey: ['Product', filters],
			queryFn: () => fetchFurnitureProduct(filters),
			staleTime: 0,
		});

	const handleFilterChange = (
		key: keyof ProductsParams,
		value: string | number | string[]
	) => {
		setFilters({ ...filters, [key]: value });

		const params = new URLSearchParams(searchParams);

		// If the value is present, set the key-value pair; otherwise, remove the key
		if (value) {
			params.set(String(key), String(value));
		} else {
			params.delete(key);
		}

		// Update the URL without scrolling
		replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	const resetFilters = () => {
		setFilters({});
		replace(pathname);
	};

	return (
		<FurnitureContext.Provider
			value={{
				data,
				isFetching,
				isError,
				error,
				filters,
				handleFilterChange,
				resetFilters,
			}}
		>
			{children}
		</FurnitureContext.Provider>
	);
};

export const FurnitureProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<Suspense fallback={null}>
			<FurnitureProviderComponent>{children}</FurnitureProviderComponent>
		</Suspense>
	);
};

export const useGlobalFurnitureContext = () => {
	const context = useContext(FurnitureContext);
	if (!context) {
		throw new Error('useGlobalContext must be used within a FurnitureProvider');
	}
	return context;
};
