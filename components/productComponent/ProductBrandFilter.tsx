'use client'
import React, { useState } from "react";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";
import { brands } from "@/utils/data/productFilterData";


const ProductBrand = () => {


  // Type for the selectedBrands state
  const [selectedBrands, setSelectedBrands] = useState<Record<string, boolean>>(
    {}
  );

  // Handle checkbox change
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedBrands((prevState) => ({ ...prevState, [id]: checked, }));
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
            checked={selectedBrands[brand] || false}
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
