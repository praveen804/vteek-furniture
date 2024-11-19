"use client";

import { useAllProductHook } from "@/hooks/useAllProductHook";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { ProductProps } from "@/types/productInterface";

const ProductLoading = dynamic(
  () => import("../LoadingComponents/ProductLoading"),
  { ssr: false }
);

const ProductCard = () => {
  const { data, isError, error, isFetching } = useAllProductHook();

  // Shuffle the data randomly
  const randomData: ProductProps[] = [...(data || [])].sort(
    () => Math.random() - 0.5
  );

  // Loading state
  if (isFetching) return <ProductLoading />;

  // Error state
  if (isError) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-center text-red-500 font-semibold text-lg">
          Error: {error?.message}
        </p>
      </div>
    );
  }

  // No data state
  if (!randomData.length) {
    return (
      <div className="text-center text-gray-600 mt-4">
        No products available at the moment.
      </div>
    );
  }

  // Render products
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-4 w-full">
      {randomData.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <div className="relative overflow-hidden w-full h-48">
            <Image
              src={product.image}
              alt={`${product.title} - ${product.category}`}
              className="w-full h-48 object-cover"
              fill
              sizes="(min-width: 1280px) calc(20.87vw - 34px), (min-width: 1040px) calc(28.18vw - 41px), (min-width: 780px) calc(41.67vw - 36px), calc(83.26vw - 48px)"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="text-gray-500 text-xs">{product.location}</p>
            <p className="text-blue-600 font-bold mt-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 text-sm mt-2">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
