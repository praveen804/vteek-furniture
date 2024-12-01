import React from "react";

const LoadingReviewForm = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 my-10 animate-pulse">
      {/* Loading Add Review Form */}
      <div className="w-full border border-gray-300 rounded-lg shadow-md bg-white p-5">
        <div className="h-6 w-1/3 bg-gray-300 rounded-md mb-4"></div>
        <div className="mb-4">
          <div className="h-4 w-1/4 bg-gray-300 rounded-md mb-2"></div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-8 w-8 bg-gray-300 rounded-full"
              ></div>
            ))}
          </div>
        </div>
        <div>
          <div className="h-4 w-1/4 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-20 w-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      {/* Loading Reviews */}
      <div className="w-full border-b-0 border-black my-4 bg-gray-100 rounded-md space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="px-10 py-4 border-b border-gray-300 flex gap-4 items-center"
          >
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
              <div className="h-3 w-1/4 bg-gray-300 rounded-md"></div>
              <div className="h-5 w-full bg-gray-300 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingReviewForm;
