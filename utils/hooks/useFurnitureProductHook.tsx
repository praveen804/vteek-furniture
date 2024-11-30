import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProductResponse } from "@/utils/types/productInterface";
import { fetchFurnitureProduct } from "../services/proudctApi";

const useFurnitureProductHook = () => {
  const {
    data,
    isFetching,
    isError,
    error,
  }: UseQueryResult<ProductResponse, Error> = useQuery({
    queryKey: ["furnitureProduct"],
    queryFn: () => fetchFurnitureProduct({}),
    staleTime: 0,
  });

  return {
    data,
    isFetching,
    isError,
    error,
  };
};

export default useFurnitureProductHook;
