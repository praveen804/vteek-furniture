import React from "react";
import { Button } from "@/components/ui/button"; // Replace with your actual Button import path
import Image from "next/image";

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
      className="flex justify-center items-center py-10 bg-[#F1F0FF]"
      aria-labelledby="unique-features-title"
    >
      <div className="grid grid-cols-2 items-center gap-8 max-w-4xl min-h-[500px] relative">
        {/* SVG Background */}
        <div className="relative w-full h-full flex justify-center items-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  w-[450px] h-[450px] "
          >
            <path
              fill="#F5E1FC"
              d="M52.7,-64.1C67.6,-50.4,78.4,-33.1,80.4,-15.1C82.5,2.8,75.7,21.3,64.9,35C54,48.6,39.1,57.4,22.8,63.7C6.6,70,-10.8,73.8,-24.4,68.3C-38,62.9,-47.8,48.1,-58.5,32.4C-69.1,16.8,-80.6,0.3,-80.3,-16.4C-80,-33.1,-68,-49.9,-52.7,-63.6C-37.4,-77.2,-18.7,-87.6,0.1,-87.7C18.9,-87.9,37.9,-77.8,52.7,-64.1Z"
              transform="translate(100 100)"
            />
          </svg>
          {/* Image */}
          <div className="absolute w-[300px] h-[300px] z-10 rounded-md overflow-hidden">
            <Image
              src="/home/banner1.png"
              alt="Product Image"
              className="object-cover"
              fill
              sizes="50vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <h1
            id="unique-features-title"
            className="text-3xl font-bold mb-6 text-custom-4"
          >
            Unique Features Of Latest & Trending Products
          </h1>
          <ul className="space-y-4 text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-custom-4 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8 w-max" aria-label="Explore more products">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstBanner;
