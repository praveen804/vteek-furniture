'use client'
import React from "react";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";
import { brands } from "@/utils/data/productFilterData";
import { useGlobalFurnitureContext } from "@/context/FurnitureContext";


const ProductBrand = () => {
  const {filters,handleFilterChange}=useGlobalFurnitureContext();


  // Type for the selectedBrands state


  // Handle checkbox change
  const handleCheckboxChange = (brand: string, checked: boolean) => {
    const updatedBrands = checked
      ? [...(filters.brand || []), brand]
      : (filters.brand || []).filter((item) => item !== brand);

    handleFilterChange("brand", updatedBrands);
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
        Product Brands
      </h2>
      <div className="space-y-2 mt-2">
        {brands.map((brand) => (
          <ReusableCheckbox
            key={brand}
            id={brand}
            name={brand}
            checked={filters.brand?.includes(brand) || false}
            onCheckedChange={(checked) =>
              handleCheckboxChange(brand, checked)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProductBrand;
