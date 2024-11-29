"use client";
import React from "react";
import SortComponent from "@/components/productComponent/ProductSortComponent";

const ProductTopBar = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 lg:flex items-center justify-between px-4 lg:px-0 border-b border-gray-200">
      {/* Left Section */}
      <div className="lg:w-1/2 ">
        <p className="text-[#151875] text-lg md:text-2xl font-bold font-['Josefin Sans']">
          Furniture Products
        </p>
        <p className="text-[#8a8fb9] text-sm  font-normal font-['Lato']">
          Showing 1-12 of 35 results
        </p>
        <p className="text-[#8a8fb9] text-sm  font-normal font-['Lato']">
          About 9,620 results (0.62 seconds)
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-end items-center space-x-4 py-4 lg:py-0">
        <div className="flex items-center space-x-2">
          <div className="text-[#3f509e] text-sm md:text-base font-medium font-['Lato']">
            Sort By:
          </div>
          {/* Sort Component */}
          <SortComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductTopBar;
