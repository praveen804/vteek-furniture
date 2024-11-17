"use client";
import React from "react";
import Image from "next/image";

const Support = () => {
const supportData = [
  {
    id: 2,
    title: "Free Delivery",
    description:
      "Enjoy free worldwide delivery on all orders with no hidden fees.",
    image: "/home/free-delivery 1.jpg",
  },
  {
    id: 3,
    title: "Cashback",
    description:
      "Get cashback offers on select products, saving money with every purchase.",
    image: "/home/cashback 1.jpg",
  },
  {
    id: 4,
    title: "Premier Quality",
    description:
      "Experience top-tier craftsmanship and durable materials for long-lasting satisfaction.",
    image: "/home/premium-quality 1.jpg",
  },
  {
    id: 5,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service available to assist with any concerns.",
    image: "/home/24-hours-support 1.jpg",
  },
];


  return (
    <section className="pb-20 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {supportData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-custom-1 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-md  object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-custom-1 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
