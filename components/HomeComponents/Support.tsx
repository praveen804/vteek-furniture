"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaDollarSign,
  FaStar,
  FaHeadset,
} from "react-icons/fa";

const supportData = [
  {
    id: 1,
    title: "Free Delivery",
    description:
      "Enjoy free worldwide delivery on all orders with no hidden fees.",
    icon: <FaShippingFast className="text-6xl text-blue-500 mx-auto mb-4" />,
  },
  {
    id: 2,
    title: "Cashback",
    description:
      "Get cashback offers on select products, saving money with every purchase.",
    icon: <FaDollarSign className="text-6xl text-green-500 mx-auto mb-4" />,
  },
  {
    id: 3,
    title: "Premier Quality",
    description:
      "Experience top-tier craftsmanship and durable materials for long-lasting satisfaction.",
    icon: <FaStar className="text-6xl text-yellow-500 mx-auto mb-4" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service available to assist with any concerns.",
    icon: <FaHeadset className="text-6xl text-red-500 mx-auto mb-4" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Support = () => {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Shop With Us?
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {supportData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 text-center focus-within:ring-4 focus-within:ring-blue-200"
              tabIndex={0}
              role="article"
              aria-label={item.title}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
