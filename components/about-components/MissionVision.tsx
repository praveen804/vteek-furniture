'use client'
import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-[#FB2E86]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to create elegant, durable, and sustainable
              furniture that enhances every home. We strive to deliver
              exceptional quality and design that inspires and enriches the
              lives of our customers.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center">
              <svg
                className="w-12 h-12 text-[#FB2E86]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              Our Vision
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our vision is to become a global leader in sustainable furniture
              design, setting new standards for innovation, quality, and
              environmental responsibility. We aim to create a world where every
              home is a reflection of timeless beauty and conscious living.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <p className="text-lg text-gray-600">
            At our core, we believe in the power of design to transform spaces
            and lives. Join us on our journey to create a better future, one
            piece of furniture at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
