"use client";
import React from "react";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Heading from "../reusableComponents/Heading";
import { Product } from "@/utils/types/productInterface";
import ProductFirstDiscount from "./ProductFirstDiscount";
import useFurnitureProductHook from "@/utils/hooks/useFurnitureProductHook";

const SkeletonCard = () => {
  return (
    <div className="relative w-[271px] h-[361px] bg-gray-200 animate-pulse rounded-lg overflow-hidden border border-dotted border-gray-300">
      {/* Skeleton Image */}
      <div className="w-full h-[70%] bg-gray-300"></div>

      {/* Skeleton Info */}
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 bg-gray-300 rounded"></div>
      </div>

      {/* Skeleton Buttons */}
      <div className="absolute top-4 left-4 flex flex-col space-y-3">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

const TrendingProduct = () => {
  const { data, isError, isFetching } = useFurnitureProductHook();

  return (
    <section className="py-20">
      <Heading title="Trending Product" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 max-w-6xl mx-auto place-items-center">
        {isFetching
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.products
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((product: Product) => (
                <div
                  key={product.id}
                  className="relative w-[271px]  h-[361px] bg-white border-2 border-dotted border-custom-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-[70%]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-custom-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-custom-4">
                      ${product.finalPrice}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-3">
                    <button
                      aria-label="Add to Cart"
                      className="p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors duration-200"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button
                      aria-label="Add to Wishlist"
                      className="p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors duration-200"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <Link
                      href={`/product/${product._id}`}
                      aria-label="View Product"
                      className="group"
                    >
                      <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md transition-all duration-200 group-hover:bg-custom-1 group-hover:text-white">
                        <Eye className="w-5 h-5" />
                      </span>
                    </Link>
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
