"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { furnitureCollectionData } from "@/utils/data/HomeData";
import { FurnitureItem } from "@/utils/types/types";
import Heading from "../reusableComponents/Heading";
import { Check } from "lucide-react";
import Link from "next/link";

const HomeDiscountItem: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Wood Chair");

  // Filter data based on the selected category
  const filteredData: FurnitureItem[] = furnitureCollectionData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Heading title="Luxe Discount" />
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6 w-full justify-center my-8">
        {["Wood Chair", "Plastic Chair", "Sofa Collection"].map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 py-10">
        {/* Left Side: Data */}
        <div>
          {filteredData.map((item) => (
            <div key={item.id} className=" p-4">
              <p className="text-3xl font-bold text-custom-4">
                {item.discounts}
              </p>
              <h2 className="text-xl font-semibold text-primary">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>

              <ul className="mt-2">
                {item.properties.map((prop, index) => (
                  <li key={index} className="text-sm text-gray-500 flex gap-2">
                    <span>
                      <Check absoluteStrokeWidth className="text-primary" />{" "}
                    </span>
                    <span> {prop.value}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4 " size={"lg"}>
                <Link href={"/product"}> Shop Now</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="flex items-center justify-center ">
          {filteredData.length > 0 && (
            <Image
              src={filteredData[0].image}
              alt={filteredData[0].title}
              width={400}
              height={400}
              className="rounded-lg  bg-pink-100 py-5  w-72 h-72 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeDiscountItem;
