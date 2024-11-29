"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptionsData } from "@/utils/data/productFilterData";
import React from "react";

const SortComponent = () => {
  const [sortOption, setSortOption] = React.useState<string>(""); // Default sorting: Low to High

  // Handle sort option change
  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  return (
    <Select value={sortOption} onValueChange={handleSortChange}>
      <SelectTrigger className=" focus:outline-none focus:ring-0 w-[165px] border border-primary">
        <SelectValue placeholder="Sort by" className="text-white" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort Options</SelectLabel>
          {sortOptionsData.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortComponent;
