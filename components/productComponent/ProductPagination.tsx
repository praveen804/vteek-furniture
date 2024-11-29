"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGlobalFurnitureContext } from "@/context/FurnitureContext";

const ProductPagination = () => {
  const { data, filters, handleFilterChange } = useGlobalFurnitureContext();

  const currentPage = filters.page || 1;
  const totalPages = data?.totalPages || 1;

  // Navigate to a specific page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      handleFilterChange("page", page);
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
            className="cursor-pointer"
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (start > 1) {
      pages.unshift(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (end < totalPages) {
      pages.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={`cursor-pointer ${currentPage === 1 ? "hidden" : ""}`}
          />
        </PaginationItem>

        {renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={`cursor-pointer ${
              currentPage === totalPages ? "hidden" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
