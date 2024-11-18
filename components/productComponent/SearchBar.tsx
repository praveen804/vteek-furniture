import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic (you can pass the query to a search function or redirect)
    console.log("Search Query:", query);
  };

  return (
    <form
      className=" w-60 md:w-80 flex items-center h-10 border-2 border-custom-1 "
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
        className="px-4 bg-custom-1 h-full text-white flex items-center justify-center  hover:bg-custom-1 transition-colors"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
