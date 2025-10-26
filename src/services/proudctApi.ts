import { furnitureProducts } from "../data/furnitureProducts";
import { ProductsParams, ProductResponse } from "@/src/types/productInterface";

export const fetchFurnitureProduct = async (
  params?: ProductsParams
): Promise<ProductResponse> => {
  return new Promise<ProductResponse>((resolve) => {
    setTimeout(() => resolve(furnitureProducts), 100);
  });
};

export const fetchFurnitureSingleProduct = async (id: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = furnitureProducts.products.find((p) => p.id.toString() === id);
      if (product) resolve(product);
      else reject(new Error("Product not found"));
    }, 100);
  });
};
