"use client";

import { fetchProduct } from "@/utils/api/proudctApi";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProductProps } from "@/utils/types/productInterface";

export const useAllProductHook = () => {
  const {
    data,
    isError,
    error,
    isFetching,
  }: UseQueryResult<ProductProps[], Error> = useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });

  return {
    data,
    isError,
    error,
    isFetching,
  };
};
