"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Define type for a category
interface Category {
  id: string;
  name: string;
}

const ProductCategoryFilter = () => {
  // List of product categories
  const categories: Category[] = [
    { id: "all", name: "All" },
    { id: "chair", name: "Chair" },
    { id: "bed", name: "Bed" },
    { id: "sofa", name: "Sofa" },
    { id: "armchair", name: "ArmChair" },
  ];

  // State for the selected categories
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(["all"])
  );

  // Handle category selection
  const handleCategoryChange = (id: string) => {
    setSelectedCategories((prevSelected) => {
      const updated = new Set(prevSelected);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }

      // If "All" is selected or deselected, reset other selections
      if (id === "all") {
        return new Set(["all"]);
      } else {
        updated.delete("all");
      }

      return updated;
    });
  };

  return (
    <section>
      <h2 className="text-lg md:text-xl font-semibold text-custom-4 underline">
        Categories
      </h2>
      <div className="space-y-2 mt-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-2">
            <Checkbox
              id={category.id}
              checked={selectedCategories.has(category.id)}
              onCheckedChange={() => handleCategoryChange(category.id)}
            />
            <Label
              htmlFor={category.id}
              className="text-sm font-medium text-gray-700"
            >
              {category.name}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategoryFilter;
