import {  ProductResponse } from "@/utils/types/productInterface";
import axiosInstance from "../utils-function/axiosInstance";
import {ProductsParams} from '@/utils/types/productInterface'
export const fetchFurnitureProduct = async ( params: ProductsParams): Promise<ProductResponse> => {
  try {
    const response = await axiosInstance.get<ProductResponse>(`${process.env.NEXT_PUBLIC_BASE_URL}/furniture/products`, { params });
    return response.data; // Return response data directly
  } catch (error) {
    console.error("Error fetching furniture products:", error);
    throw error; // Rethrow the error for proper handling by the caller
  }
};

export const fetchFurnitureSingleProduct = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/furniture/products/${id}`,
      {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
        cache: "no-store",
        next: { revalidate: 100, tags: [`singleProducts:${id}`] },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
