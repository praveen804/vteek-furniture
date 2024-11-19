"use client";
import React, { useState } from "react";
import ReusableCheckbox from "../reusableComponents/ReusableCheckbox";

// Define type for a discount
interface Discount {
  id: string;
  percentage: string;
}

const ProductDiscount = () => {
  // List of available discounts
  const discounts: Discount[] = [
    { id: "discount1", percentage: "10% Discount" },
    { id: "discount2", percentage: "20% Discount" },
    { id: "discount3", percentage: "30% Discount" },
    { id: "discount4", percentage: "40% Discount" },
    { id: "discount5", percentage: "50% Discount" },
  ];

  // Type for the selectedDiscounts state
  const [selectedDiscounts, setSelectedDiscounts] = useState<
    Record<string, boolean>
  >({});

  // Handle checkbox change
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedDiscounts((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
         Discount Offer
      </h2>
      <div className="space-y-2 mt-2">
        {discounts.map((discount) => (
          <ReusableCheckbox
            key={discount.id}
            id={discount.id}
            name={discount.percentage}
            checked={selectedDiscounts[discount.id] || false}
            onCheckedChange={(checked) =>
              handleCheckboxChange(discount.id, checked)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProductDiscount;
