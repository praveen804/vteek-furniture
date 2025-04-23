"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {  FaArrowRight } from "react-icons/fa";

const CTA: React.FC = () => {
  const router = useRouter();

  return (
    <section className="py-20 px-6 sm:px-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-2xl mx-4 sm:mx-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Discover Your Perfect Style
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
          Explore our exclusive collection of high-quality furniture designed to
          elevate your space. Experience comfort, style, and elegance in every
          piece.
        </p>
        <ul className="mt-8 text-md sm:text-lg text-gray-200 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-blue-300" /> Premium quality materials
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-blue-300" /> Modern and timeless
            designs
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-blue-300" /> Fast and reliable
            shipping
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRight className="text-blue-300" /> Exclusive deals for
            members
          </li>
        </ul>
        <div className="w-full m-auto">
          <button
            onClick={() => router.push("/products")}
            className="mt-10   bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          > Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
