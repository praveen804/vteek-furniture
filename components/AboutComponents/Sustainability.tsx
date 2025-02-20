'use client'
import React from "react";
import { FaLeaf, FaRecycle, FaTree, FaHandHoldingHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Sustainability: React.FC = () => {
  const sustainabilityFeatures = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Eco-Friendly Materials",
      description:
        "100% of our wood comes from FSC-certified sustainable forests",
    },
    {
      icon: <FaRecycle className="w-8 h-8" />,
      title: "Zero Waste Production",
      description: "95% of manufacturing waste is recycled or repurposed",
    },
    {
      icon: <FaTree className="w-8 h-8" />,
      title: "Carbon Neutral",
      description: "We plant 10 trees for every product sold",
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Ethical Practices",
      description: "Fair wages and safe working conditions at all facilities",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-[#FB2E86]">Sustainability</span>{" "}
            Commitment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just making furniture - we&apos;re building a greener future.
            From sustainable sourcing to carbon-neutral shipping, every step of
            our process prioritizes environmental responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Sustainable forestry"
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[#FB2E86] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FB2E86] text-white p-8 rounded-2xl shadow-lg"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Our 2025 Sustainability Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="py-4">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p>Renewable Energy Use</p>
              </div>
              <div className="py-4">
                <div className="text-4xl font-bold mb-2">0%</div>
                <p>Landfill Waste</p>
              </div>
              <div className="py-4">
                <div className="text-4xl font-bold mb-2">1M+</div>
                <p>Trees Planted</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;