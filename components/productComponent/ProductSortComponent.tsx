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
import React from "react";

const SortComponent = () => {
  const [sortOption, setSortOption] = React.useState<string>("price-asc"); // Default sorting: Low to High

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
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="name-asc">Alphabetical A-Z</SelectItem>
          <SelectItem value="name-desc"> Alphabetical Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortComponent;
