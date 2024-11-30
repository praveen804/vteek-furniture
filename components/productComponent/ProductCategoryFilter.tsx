"use client";
import React from "react";
import { categories } from "@/utils/data/productFilterData";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";
import { useGlobalFurnitureContext } from "@/context/FurnitureContext";

const ProductCategoryFilter: React.FC = () => {
  const { filters, handleFilterChange } = useGlobalFurnitureContext();

  // Handle checkbox state changes for category array
  const handleCheckboxChange = (category: string, checked: boolean) => {
    const updatedCategories = checked ? [...(filters.category || []), category] : (filters.category || []).filter((item) => item !== category);

    handleFilterChange("category", updatedCategories); // Update global state
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
        Categories
      </h2>
      <div className="space-y-2 mt-2">
        {categories.map((category) => (
          <ReusableCheckbox
            key={category}
            id={category}
            name={category}
            checked={filters?.category?.includes(category) || false}
            onCheckedChange={(checked) =>
              handleCheckboxChange(category, checked)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategoryFilter;
