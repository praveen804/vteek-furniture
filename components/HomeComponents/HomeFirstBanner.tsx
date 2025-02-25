import React from "react";
import { Button } from "@/components/ui/button"; 
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const HomeFirstBanner = () => {
  const features = [
    "Innovative designs for modern tastes",
    "Top-notch quality materials",
    "Affordable pricing for premium items",
    "Eco-friendly and sustainable production",
    "Unparalleled customer service experience",
  ];

  return (
    <section
      className="flex flex-col lg:flex-row justify-center items-center py-16 px-6 bg-[#F1F0FF] text-center lg:text-left"
      aria-labelledby="unique-features-title"
    >
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full gap-12 relative">
        {/* Image Section */}
        <div className="relative w-full max-w-md lg:max-w-lg flex justify-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] -z-10"
            aria-hidden="true"
          >
            <path
              fill="#F5E1FC"
              d="M52.7,-64.1C67.6,-50.4,78.4,-33.1,80.4,-15.1C82.5,2.8,75.7,21.3,64.9,35C54,48.6,39.1,57.4,22.8,63.7C6.6,70,-10.8,73.8,-24.4,68.3C-38,62.9,-47.8,48.1,-58.5,32.4C-69.1,16.8,-80.6,0.3,-80.3,-16.4C-80,-33.1,-68,-49.9,-52.7,-63.6C-37.4,-77.2,-18.7,-87.6,0.1,-87.7C18.9,-87.9,37.9,-77.8,52.7,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-md overflow-hidden shadow-lg">
            <Image
              src="/home/banner1.png"
              alt="Latest Trending Product"
              className="object-cover"
              fill
              sizes="50vw"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start max-w-xl">
          <h1
            id="unique-features-title"
            className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900"
          >
            Unique Features Of Latest & Trending Products
          </h1>
          <ul className="space-y-4 text-gray-700 w-full">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle
                  className="text-green-500 text-lg"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 w-max"
            aria-label="Explore more products"
            asChild
          >
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstBanner;
