/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useGlobalFurnitureContext } from "@/context/FurnitureContext";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { handleFilterChange } = useGlobalFurnitureContext();

  useEffect(() => {
    const debounce = setTimeout(() => {
      handleFilterChange("search", query);

      if (query) {
        router.push(`/products?search=${query}`);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [query, router, ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-60 md:w-80 flex items-center h-10 border-2 border-custom-1"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        name="search"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="block w-full h-full border-0 py-1.5 px-2 text-sm focus:ring-0 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="px-4 bg-custom-1 h-full text-white flex items-center justify-center hover:bg-custom-1 transition-colors"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
