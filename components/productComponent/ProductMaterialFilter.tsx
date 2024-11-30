"use client";
import React from "react";
import { materials } from "@/utils/data/productFilterData";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";
import { useGlobalFurnitureContext } from "@/context/FurnitureContext";

const ProductMaterialFilter : React.FC = () => {
  const { filters, handleFilterChange } = useGlobalFurnitureContext();

  // Handle checkbox state changes for material array
  const handleCheckboxChange = (material: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...(filters.material || []), material]
      : (filters.material || []).filter((item) => item !== material);

    handleFilterChange("material", updatedCategories); // Update global state
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
        Material
      </h2>
      <div className="space-y-2 mt-2">
        {materials.map((material) => (
          <ReusableCheckbox
            key={material}
            id={material}
            name={material}
            checked={filters?.material?.includes(material) || false}
            onCheckedChange={(checked) =>
              handleCheckboxChange(material, checked)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProductMaterialFilter
