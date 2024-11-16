'use server';

import { revalidateTag } from "next/cache";



// Function to add product to the database
export const addProductToDataBase = async (e: FormData) => {
  try {
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) {
      console.log("Missing product or price.");
      return;
    }

    const newProduct = { product, price };
    console.log("New Product:", newProduct);

    const response = await fetch(
      "https://660ba608ccda4cbc75dd4d2a.mockapi.io/products",
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add product");
    } else {
      console.log("Product added successfully");
    }

    revalidateTag("products");

  } catch (error) {
    console.log("Error adding product:", error);
  }
};