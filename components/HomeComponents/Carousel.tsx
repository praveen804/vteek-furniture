"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const carouselItems = [
  {
    image: "/carousel/slider1.jpeg",
    title: "Discover Timeless Elegance",
    subtitle: "Exclusive Jewelry Collection",
    description:
      "Unveil the artistry of our handpicked jewelry. Designed for moments that last forever.",
    buttonText: "Explore Collection",
    link: "/collections",
  },
  {
    image: "/carousel/slider2.jpeg",
    title: "Luxury Redefined",
    subtitle: "Crafted with Perfection",
    description:
      "Indulge in jewelry that speaks of sophistication and grandeur. Perfect for every occasion.",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    image: "/carousel/slider3.jpeg",
    title: "The Essence of Beauty",
    subtitle: "Jewels That Shine Bright",
    description:
      "Elevate your style with our exclusive range of dazzling jewelry pieces.",
    buttonText: "View More",
    link: "/about",
  },
];

export default function CustomCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] bg-[#F2F0FF] rounded-lg overflow-hidden">
      <div className="max-w-7xl mx-auto lg:flex justify-between items-center h-full p-6">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-xl text-custom-1 font-semibold">
            {carouselItems[currentSlide].subtitle}
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            {carouselItems[currentSlide].title}
          </h1>
          <p className="text-gray-600 lg:text-lg">
            {carouselItems[currentSlide].description}
          </p>
          <Button asChild>
            <Link
              href={carouselItems[currentSlide].link}
            >
              {carouselItems[currentSlide].buttonText}
            </Link>
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[60vh] rounded-full">
          <Image
            src={carouselItems[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className=" object-contain"
            sizes="100vw"

          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rotate-45 transition-all ${
              index === currentSlide ? "bg-custom-1" : "bg-black"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full hover:bg-gray-300 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-custom-1" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full hover:bg-gray-300 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-custom-1" />
      </button>
    </div>
  );
}
