"use client";

import React from "react";
import Link from "next/link";
import SearchBar from "../productComponent/SearchBar";
import { josefinSans } from "@/utils/fonts";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname(); // Get the current path

  // Helper function to determine if a link is active
  const getLinkClass = (href: string) => {
    return path === href ? "text-custom-1" : "hover:text-custom-1";
  };

  return (
    <nav className="w-full max-w-7xl mx-auto py-4 flex justify-between items-center">
      <div className="w-full flex gap-x-20 items-center">
        {/* Logo */}
        <Link href="/">
          <span
            className={`text-4xl font-bold text-[#0D0E43] ${josefinSans.className}`}
          >
            Luxe
          </span>
        </Link>

        {/* Links */}
        <div className="flex space-x-4 text-xl justify-center items-center">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/product" className={getLinkClass("/product")}>
            Product
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link href="/about" className={getLinkClass("/blog")}>
            Blog
          </Link>
          <Link href="/about" className={getLinkClass("/contact")}>
            Contact
          </Link>


        </div>
      </div>
      <div className="">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
