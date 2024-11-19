import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ReusableBanner = () => {
  return (
    <section className="w-full h-24 sm:h-32 md:h-48 lg:h-60 bg-[#F6F5FF]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 md:py-0 h-full">
        {/* Text and Heading Section */}
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Welcome to our store
          </h1>
          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg text-gray-600">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <ChevronRight className="text-gray-400" size={20} />
            <span className="text-custom-1 font-medium">Product</span>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ReusableBanner;
