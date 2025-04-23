'use client';

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { useGlobalFurnitureContext } from '@/src/context/FurnitureContext';

const ProductPagination = () => {
	const { data, filters, handleFilterChange } = useGlobalFurnitureContext();

	const currentPage = filters.page || 1;
	const totalPages = data?.totalPages || 1;
	const totalProducts = data?.totalProducts || 0;

	// Scroll to top when the page changes
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Navigate to a specific page
	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			handleFilterChange('page', page);
			scrollToTop(); // Scroll to the top after page change
		}
	};

	// Render pagination items
	const renderPaginationItems = () => {
		const pages = [];
		const range = 5; // Maximum visible pages at a time
		const start = Math.max(currentPage - Math.floor(range / 2), 1);
		const end = Math.min(start + range - 1, totalPages);

		for (let page = start; page <= end; page++) {
			pages.push(
				<PaginationItem key={page}>
					<PaginationLink
						isActive={page === currentPage}
						onClick={() => handlePageChange(page)}
						className='cursor-pointer'
					>
						{page}
					</PaginationLink>
				</PaginationItem>
			);
		}

		if (start > 1) {
			pages.unshift(
				<PaginationItem key='start-ellipsis'>
					<PaginationEllipsis />
				</PaginationItem>
			);
		}

		if (end < totalPages) {
			pages.push(
				<PaginationItem key='end-ellipsis'>
					<PaginationEllipsis />
				</PaginationItem>
			);
		}

		return pages;
	};

	// Conditionally render pagination only if totalProducts is greater than 12
	if (totalProducts <= 12) return null;

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => handlePageChange(currentPage - 1)}
						className={`cursor-pointer ${currentPage === 1 ? 'hidden' : ''}`}
					/>
				</PaginationItem>

				{renderPaginationItems()}

				<PaginationItem>
					<PaginationNext
						onClick={() => handlePageChange(currentPage + 1)}
						className={`cursor-pointer ${
							currentPage === totalPages ? 'hidden' : ''
						}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default ProductPagination;
