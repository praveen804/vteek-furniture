import React from "react";

const LoadingProductSingleInformation = () => {
  return (
    <div className="bg-[#eeeffb] animate-pulse">
      <div className="max-w-4xl mx-auto p-4">
        {/* Tab Buttons Skeleton */}
        <div className="flex justify-around border-b border-gray-300 mb-4">
          {["description", "additionalInfo", "video"].map((_, index) => (
            <div key={index} className="h-8 w-24 bg-gray-300 rounded-md"></div>
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="p-4 bg-white rounded-md shadow-md">
          {/* Title Skeleton */}
          <div className="h-6 w-3/4 bg-gray-300 rounded-md mb-4"></div>
          {/* Paragraph Skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded-md"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-2/3 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProductSingleInformation;
