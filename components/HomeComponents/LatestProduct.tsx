"use client";

import React, { useState } from "react";
import { ProductProps } from "@/types/productInterface";
import { useAllProductHook } from "@/hooks/useAllProductHook";
import Heading from "../reusableComponents/Heading";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LatestProduct = () => {
  const { data, isFetching } = useAllProductHook();
  const [filter, setFilter] = useState("all");

  // Filter Buttons
  const filterButtons = [
    { id: "all", label: "All" },
    { id: "chair", label: "Chair" },
    { id: "table", label: "Table" },
    { id: "armchair", label: "Armchair" },
    { id: "bed", label: "Bed" },
  ];

  // Filter Products Logic
  const filteredProducts = data?.filter((product: ProductProps) => {
    if (filter === "all") return true;
    return product.category.toLowerCase() === filter;
  });

  const handleFilter = (filterType: string) => setFilter(filterType);

  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="py-4">
          <Heading title="Latest Product" />
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {isFetching
            ? Array.from({ length: filterButtons.length }).map((_, index) => (
                <div
                  key={index}
                  className="w-32 h-10 bg-gray-200 animate-pulse rounded-md"
                ></div>
              ))
            : filterButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => handleFilter(button.id)}
                  className={`px-4 py-2 rounded-md border ${
                    filter === button.id
                      ? "bg-custom-1 text-white"
                      : "border-custom-4 text-gray-700"
                  } transition-all duration-200`}
                >
                  {button.label}
                </button>
              ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isFetching
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"
                ></div>
              ))
            : filteredProducts?.slice(0, 6).map((product: ProductProps) => (
                <div
                  key={product.id}
                  className="border-dotted border border-custom-4 rounded-lg p-4 relative flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  {/* Title and Price */}
                  <h3 className="text-custom-1 font-semibold text-lg mb-2">
                    {product.title}
                  </h3>
                  <p className="text-custom-4 font-medium text-base">
                    ${product.price}
                  </p>

                  {/* Icons (Cart, Wishlist, View) */}
                  <div className="absolute top-6 left-8 flex flex-col space-y-2">
                    <button
                      aria-label="Add to Cart"
                      className="p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button
                      aria-label="Add to Wishlist"
                      className="p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <Link
                      href={`/product/${product.id}`}
                      aria-label="View Product"
                      className="p-2 bg-white rounded-full shadow hover:bg-custom-1 hover:text-white transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
