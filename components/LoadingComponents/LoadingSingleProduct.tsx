"use client";
import React from "react";

const LoadingSingleProduct = () => {
  return (
    <div className="animate-pulse p-4 space-y-6 max-w-6xl min-h-[532px] mx-auto border ">
      {/* Image Skeleton */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 h-full">
        <div className="flex-1">
          <div className="bg-gray-300 h-[500px] w-full rounded-lg" />
        </div>

        <div className="space-y-4 flex-1">
          <div className="bg-gray-300 h-10 w-1/2 rounded-lg" />
          <div className="flex flex-col space-y-3">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-8 w-56 rounded-lg" />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-6">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="bg-gray-300 h-10 w-32 rounded-lg" />
            ))}
          </div>

          {/* Share Section */}
          <div className="bg-gray-300 h-10 w-56 rounded-lg" />
        </div>
      </div>

    </div>
  );
};

export default LoadingSingleProduct;
