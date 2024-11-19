'use client'
import React, { useState } from "react";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";


// Define type for a brand
interface Brand {
  id: string;
  name: string;
}

const ProductBrand = () => {
  // List of furniture brands
  const brands: Brand[] = [
    { id: "brand1", name: "Ikea" },
    { id: "brand2", name: "Ashley Furniture" },
    { id: "brand3", name: "Wayfair" },
    { id: "brand4", name: "Rooms To Go" },
    { id: "brand5", name: "Crate & Barrel" },
  ];

  // Type for the selectedBrands state
  const [selectedBrands, setSelectedBrands] = useState<Record<string, boolean>>(
    {}
  );

  // Handle checkbox change
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedBrands((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
        Product Brands
      </h2>
      <div className="space-y-2 mt-2">
        {brands.map((brand) => (
          <ReusableCheckbox
            key={brand.id}
            id={brand.id}
            name={brand.name}
            checked={selectedBrands[brand.id] || false}
            onCheckedChange={(checked) =>
              handleCheckboxChange(brand.id, checked)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProductBrand;
