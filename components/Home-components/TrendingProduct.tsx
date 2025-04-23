"use client";
import React from "react";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import Image from "next/image";
import Heading from "../reusableComponents/Heading";
import { Product } from "@/utils/types/productInterface";
import ProductFirstDiscount from "./ProductFirstDiscount";
import useFurnitureProductHook from "@/utils/hooks/useFurnitureProductHook";

const SkeletonCard = () => (
  <div className="relative w-[271px] h-[361px] bg-gray-200 animate-pulse rounded-lg overflow-hidden border border-dotted border-gray-300">
    <div className="w-full h-[70%] bg-gray-300" />
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded" />
    </div>
    <div className="absolute top-4 left-4 flex flex-col space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-8 h-8 bg-gray-300 rounded-full" />
      ))}
    </div>
  </div>
);

const TrendingProduct = () => {
  const { data, isError, isFetching } = useFurnitureProductHook();

  return (
    <section className="py-20 bg-gray-50">
      <Heading title="Trending Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto place-items-center">
        {isFetching
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.products?.slice(0, 4).map((product: Product) => (
              <div
                key={product.id}
                className="relative w-[271px] h-[361px] bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full h-[70%]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">${product.finalPrice}</p>
                </div>
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {[ShoppingCart, Heart, Eye].map((Icon, i) => (
                    <button
                      key={i}
                      aria-label={`${
                        ["Add to Cart", "Add to Wishlist", "View Product"][i]
                      }`}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
      </div>
      <ProductFirstDiscount />
      {isError && (
        <p className="text-center text-red-600 mt-4">
          Failed to load products. Please try again later.
        </p>
      )}
    </section>
  );
};

export default TrendingProduct;
