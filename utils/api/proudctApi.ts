import {  ProductResponse } from "@/utils/types/productInterface";
import axiosInstance from "../utils-function/axiosInstance";

export const fetchFurnitureProduct = async () => {
  try {
    const response = await axiosInstance.get<ProductResponse[] | null>(`${process.env.NEXT_PUBLIC_BASE_URL}/furniture/products` );
    if (!response) {
      console.log("🚀 ~ file: proudctApi.ts:8 ~ response:", response);
      throw new Error("Failed to fetch products");
    }
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: product crud.ts:31 ~ error:", error);
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
