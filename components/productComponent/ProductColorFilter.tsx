"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ProductColorFilter() {
  // List of colors for the filter
  const colors = [
    { id: "blue", name: "Blue", colorClass: "border-blue-500 bg-blue-500" },
    {
      id: "indigo",
      name: "Indigo",
      colorClass: "border-indigo-500 bg-indigo-500",
    },
    { id: "pink", name: "Pink", colorClass: "border-pink-500 bg-pink-500" },
    { id: "red", name: "Red", colorClass: "border-red-500 bg-red-500" },
    {
      id: "orange",
      name: "Orange",
      colorClass: "border-orange-500 bg-orange-500",
    },
    {
      id: "yellow",
      name: "Yellow",
      colorClass: "border-yellow-500 bg-yellow-500",
    },
    { id: "green", name: "Green", colorClass: "border-green-500 bg-green-500" },
  ];

  // State for selected colors
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());

  // Handle color selection
  const handleColorChange = (colorId: string) => {
    setSelectedColors((prev) => {
      const updated = new Set(prev);
      if (updated.has(colorId)) {
        updated.delete(colorId); // Deselect color
      } else {
        updated.add(colorId); // Select color
      }
      return updated;
    });
  };

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium leading-none text-foreground">
        Choose Colors
      </legend>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <div key={color.id} className="flex flex-col items-center gap-2">
            <Checkbox
              id={color.id}
              checked={selectedColors.has(color.id)}
              onCheckedChange={() => handleColorChange(color.id)}
              className={`size-6 shadow-none ${color.colorClass}`}
            />
            <Label
              htmlFor={color.id}
              className="text-sm font-medium text-gray-700 sr-only"
            >
              {color.name}
            </Label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
