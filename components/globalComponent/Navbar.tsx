"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "../productComponent/SearchBar";
import { josefinSans } from "@/utils/utils-function/fonts";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname(); // Get the current path
  const [scrollActive, setScrollActive] = useState(false);

  // Helper function to determine if a link is active
  const getLinkClass = (href: string) => {
    return path === href ? "text-custom-1" : "hover:text-custom-1";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 50);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full  py-4  px-2 lg:px-0 sticky top-0 z-50 transition-all duration-300 ${
        scrollActive ? "bg-custom-8 shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex md:justify-between items-center">
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
          <div className="lg:flex space-x-4 text-xl justify-center items-center hidden">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/products" className={getLinkClass("/products")}>
              Furniture
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>
            <Link href="/blog" className={getLinkClass("/blog")}>
              Blog
            </Link>
            <Link href="/contact" className={getLinkClass("/contact")}>
              Contact
            </Link>
          </div>
        </div>
        <div className="pe-2 md:pe-0">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
