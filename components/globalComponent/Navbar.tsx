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
    <nav className="w-full max-w-7xl mx-auto py-4 flex md:justify-between items-center px-2 lg:px-0">
      <div className="w-full flex gap-x-20 items-center">
        {/* Logo */}
        <Link href="/" className="hidden md:block">
          <span
            className={`text-4xl font-bold text-[#0D0E43] ${josefinSans.className}`}
          >
            Luxe
          </span>
        </Link>

        {/* Links */}
        <div className="lg:flex space-x-4 text-xl justify-center items-center  hidden">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={getLinkClass("/products")}>
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
      <div className="pe-2 md:pe-0">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
