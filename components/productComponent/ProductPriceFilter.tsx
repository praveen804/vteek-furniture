'use client'
import { useGlobalFurnitureContext } from "@/context/FurnitureContext";
import React from "react";

const ProductPriceFilter = () => {
  const {filters,handleFilterChange}=useGlobalFurnitureContext();
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold  text-custom-4 underline space-y-2">Price</h2>
      <div className="flex gap-2 items-center justify-between">
        <div className="flex flex-col ">
          <label htmlFor="minPrice">Min</label>
          <input
            type="text"
            name="minPrice"
            id="minPrice"
            className=" border border-primary focus:outline-none w-20 px-4 py-1"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", Number(e.target.value))}

          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="maxPrice">Max</label>
          <input
            type="text"
            name="maxPrice"
            id="maxPrice"
            className=" border border-primary focus:outline-none w-20 px-4 py-1"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPriceFilter;
