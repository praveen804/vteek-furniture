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
  }, [query, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="w-60 md:w-80 flex items-center h-12 rounded-lg shadow-sm bg-white border border-pink-600 overflow-hidden transition-all duration-300 focus-within:shadow-lg"
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
        className="flex-1 h-full border-0 py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none focus:border-transparent"
        placeholder="Search for furniture..."
        required
        aria-label="Search for furniture"
      />
      <button
        type="submit"
        className="px-4 bg-custom-1 h-full text-white flex items-center justify-center hover:bg-custom-1/90 transition-colors focus:outline-none focus:ring-2 focus:ring-custom-1 focus:ring-offset-2"
        aria-label="Submit search"
      >
        <Search
          size={20}
          className="transition-transform duration-300 transform hover:scale-110"
        />
      </button>
    </form>
  );
};

export default SearchBar;
