"use client";
import React, { useState } from "react";
import { categories } from "@/utils/data/productFilterData";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";



const ProductCategoryFilter = () => {

  // State for the selected categories
const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({});
const handleCheckboxChange = (id: string, checked: boolean) => {
  setSelectedCategories((prevState) => ({ ...prevState, [id]: checked }));
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
            checked={selectedCategories[category] || false}
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
