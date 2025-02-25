"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "../productComponent/SearchBar";
import { josefinSans } from "@/utils/utils-function/fonts";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const path = usePathname(); // Get the current path
  const [scrollActive, setScrollActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to determine if a link is active
  const getLinkClass = (href: string) => {
    return path === href
      ? "text-custom-1 font-semibold"
      : "text-gray-700 hover:text-custom-1 transition-colors duration-200";
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`w-full py-4 px-2 lg:px-0 sticky top-0 z-50 transition-all duration-300 ${
        scrollActive ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link href="/">
            <span
              className={`text-4xl hidden md:block font-bold text-[#0D0E43] ${josefinSans.className}`}
            >
              Luxe
            </span>
          </Link>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex space-x-8 text-lg items-center">
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

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className={getLinkClass("/")}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={getLinkClass("/products")}
              onClick={toggleMobileMenu}
            >
              Furniture
            </Link>
            <Link
              href="/about"
              className={getLinkClass("/about")}
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={getLinkClass("/blog")}
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={getLinkClass("/contact")}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
