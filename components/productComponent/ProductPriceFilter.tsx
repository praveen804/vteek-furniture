"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Define type for a price range
interface PriceRange {
  id: string;
  range: string;
}

const ProductPriceFilter = () => {
  // List of price ranges
  const priceRanges: PriceRange[] = [
    { id: "0-50", range: "$0 - $50" },
    { id: "50-100", range: "$50 - $100" },
    { id: "100-200", range: "$100 - $200" },
    { id: "200+", range: "$200 and above" },
  ];

  // State for selected price ranges
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<Set<string>>(
    new Set()
  );

  // Handle price range selection
  const handlePriceRangeChange = (id: string) => {
    setSelectedPriceRanges((prevSelected) => {
      const updated = new Set(prevSelected);

      // Add or remove the selected price range
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }

      return updated;
    });
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
        Price Range
      </h2>
      <div className="space-y-2 mt-2">
        {priceRanges.map((priceRange) => (
          <div key={priceRange.id} className="flex items-center gap-2">
            <Checkbox
              id={priceRange.id}
              checked={selectedPriceRanges.has(priceRange.id)}
              onCheckedChange={() => handlePriceRangeChange(priceRange.id)}
            />
            <Label
              htmlFor={priceRange.id}
              className="text-sm font-medium text-gray-700"
            >
              {priceRange.range}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPriceFilter;
