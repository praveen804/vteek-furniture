"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "Top 5 Modern Furniture Trends in 2025",
      date: "February 25, 2025",
      description:
        "Discover the latest trends in furniture design that are shaping modern interiors. From minimalist designs to bold colors, we cover it all.",
      image:
        "https://images.unsplash.com/photo-1640938776314-4d303f8a1380?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8MHwwfHx8MA%3D%3D",
      category: "Trends",
      link: "/blog/furniture-trends-2025",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa for Your Living Room",
      date: "February 20, 2025",
      description:
        "A guide to selecting the right sofa that blends style, comfort, and durability. Learn about materials, sizes, and styles.",
      image:
        "https://images.unsplash.com/photo-1558898434-af897d9ac0a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZmF8ZW58MHwwfDB8fHww",
      category: "Guides",
      link: "/blog/choosing-the-perfect-sofa",
    },
    {
      id: 3,
      title: "Sustainable Furniture: Eco-Friendly Choices for Your Home",
      date: "February 15, 2025",
      description:
        "Learn how to incorporate sustainable furniture into your home without compromising on style. Discover eco-friendly materials and brands.",
      image:
        "https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?auto=format&fit=crop&w=600&q=80",
      category: "Sustainability",
      link: "/blog/sustainable-furniture",
    },
    {
      id: 4,
      title: "The Art of Mixing and Matching Furniture Styles",
      date: "February 10, 2025",
      description:
        "Learn how to mix and match different furniture styles to create a cohesive and unique look in your home.",
      image:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlJTIwc3R5bGVzfGVufDB8MHwwfHx8MA%3D%3D",
      category: "Design Tips",
      link: "/blog/mixing-matching-furniture",
    },
    {
      id: 5,
      title: "Maximizing Small Spaces: Furniture Solutions for Apartments",
      date: "February 5, 2025",
      description:
        "Discover space-saving furniture ideas and tips to make the most out of small living spaces.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBzcGFjZXxlbnwwfDB8MHx8fDA%3D",
      category: "Space Optimization",
      link: "/blog/small-space-furniture",
    },
    {
      id: 6,
      title: "The Rise of Smart Furniture: Technology Meets Design",
      date: "January 30, 2025",
      description:
        "Explore how technology is revolutionizing furniture design with smart features and innovative functionalities.",
      image:
        "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjBmdXJuaXR1cmV8ZW58MHwwfDB8fHww",
      category: "Technology",
      link: "/blog/smart-furniture",
    },
  ];

  const categories = [
    "All",
    "Trends",
    "Guides",
    "Sustainability",
    "Design Tips",
    "Space Optimization",
    "Technology",
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Latest Articles
      </h2>
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-pink-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <motion.article
            key={blog.id}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white"
          >
            <Link href={blog.link}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600">{blog.description}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <button className="mt-4 inline-block text-pink-600 font-medium hover:text-pink-700 transition-colors">
                  Read More →
                </button>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogContainer;
