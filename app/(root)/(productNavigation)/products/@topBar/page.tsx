'use client'
import React from "react";
import { LayoutGrid, AlignJustify } from "lucide-react";
import SortComponent from "@/components/productComponent/ProductSortComponent";


const ProductTopBar = () => {
  return (
    <div className="max-w-6xl m-auto   h-full lg:flex flex-row gap-5 justify-between items-center  px-3 lg:px-0 ">
      <div className="lg:w-1/2">
        <p className="text-[#151875] text-md  md:text-2xl font-bold font-['Josefin Sans'] ">
          Ecommerce Acceories & Fashion item{" "}
        </p>
        <p className="text-[#8a8fb9] text-xs font-normal font-['Lato']">
          About 9,620 results (0.62 seconds)
        </p>
      </div>
      <div className="flex justify-between  py-4 lg:w-1/2">
        <div className="space-x-2 flex items-center">
          <div className="text-[#3f509e] text-base font-normal font-['Lato']">
            Sort By:
          </div>
          {/* Product Sort */}
          <SortComponent />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-[#3f509e] text-base font-normal font-['Lato']">
            View:
          </p>
          <LayoutGrid />
          <AlignJustify />
        </div>
      </div>
    </div>
  );
};

export default ProductTopBar;
