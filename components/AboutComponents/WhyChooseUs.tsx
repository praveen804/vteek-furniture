'use client'
import React from "react";
import {
  FaCheckCircle,
  FaLeaf,
  FaHandsHelping,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premium Quality */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center text-[#FB2E86]">
              <FaCheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Premium Quality
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We use only the finest materials and craftsmanship to ensure our
              furniture is durable, stylish, and built to last.
            </p>
          </div>

          {/* Eco-Friendly Materials */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center text-[#FB2E86]">
              <FaLeaf className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Eco-Friendly Materials
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our furniture is made from sustainable, eco-friendly materials,
              helping you reduce your carbon footprint.
            </p>
          </div>

          {/* Handmade with Love */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center text-[#FB2E86]">
              <FaHandsHelping className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Handmade with Love
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Each piece is carefully crafted by skilled artisans, ensuring
              attention to detail and a personal touch.
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center text-[#FB2E86]">
              <FaTruck className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Fast Delivery
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We offer fast and reliable delivery services to ensure your
              furniture arrives on time and in perfect condition.
            </p>
          </div>

          {/* Excellent Customer Support */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center text-[#FB2E86]">
              <FaHeadset className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Excellent Customer Support
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our dedicated support team is available 24/7 to assist you with
              any questions or concerns.
            </p>
          </div>

          {/* Affordable Pricing */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center text-[#FB2E86]">
              <FaCheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Affordable Pricing
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              We offer high-quality furniture at competitive prices, making
              luxury accessible to everyone.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <p className="text-lg text-gray-600">
            At our core, we are committed to providing you with the best
            furniture shopping experience. From premium quality to exceptional
            customer service, we’ve got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
