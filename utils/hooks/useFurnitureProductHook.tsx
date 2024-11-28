import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProductResponse } from "@/utils/types/productInterface";
import axios from "axios";

export const fetchFurnitureProduct = async () => {
  try {
    const response = await axios.get<ProductResponse[] | null>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/furniture/products`
    );
    if (!response) {
      throw new Error("Failed to fetch products");
    }
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: product crud.ts:31 ~ error:", error);
  }
};

const useFurnitureProductHook = () => {
  const {
    data,
    isFetching,
    isError,
    error,
  }: UseQueryResult<ProductResponse, Error> = useQuery({
    queryKey: ["furnitureProduct"],
    queryFn: fetchFurnitureProduct,
  });

  return {
    data,
    isFetching,
    isError,
    error,
  };
};

export default useFurnitureProductHook;
