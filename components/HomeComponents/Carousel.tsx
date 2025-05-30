'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { motion, AnimatePresence } from 'framer-motion';

const carouselItems = [
	{
		image: '/carousel/slider1.jpeg',
		title: 'Discover Timeless Elegance',
		subtitle: 'Exclusive Jewelry Collection',
		description:
			'Unveil the artistry of our handpicked jewelry. Designed for moments that last forever.',
		buttonText: 'Shop Now',
		link: '/products',
	},
	{
		image: '/carousel/slider2.jpeg',
		title: 'Luxury Redefined',
		subtitle: 'Crafted with Perfection',
		description:
			'Indulge in jewelry that speaks of sophistication and grandeur. Perfect for every occasion.',
		buttonText: 'Shop Now',
		link: '/products',
	},
	{
		image: '/carousel/slider3.jpeg',
		title: 'The Essence of Beauty',
		subtitle: 'Jewels That Shine Bright',
		description:
			'Elevate your style with our exclusive range of dazzling jewelry pieces.',
		buttonText: 'Shop Now',
		link: '/products',
	},
];

export default function CustomCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
	}, []);

	const prevSlide = useCallback(() => {
		setCurrentSlide(
			(prev) => (prev - 1 + carouselItems.length) % carouselItems.length
		);
	}, []);

	const goToSlide = useCallback((index: number) => {
		setCurrentSlide(index);
	}, []);

	useEffect(() => {
		const timer = setInterval(nextSlide, 6000);
		return () => clearInterval(timer);
	}, [nextSlide]);

	const currentItem = useMemo(
		() => carouselItems[currentSlide],
		[currentSlide]
	);

	return (
    <div
      className="relative h-[250px] w-full overflow-hidden rounded-xl sm:h-[400px] md:h-[500px] lg:h-[85vh]"
      role="region"
      aria-label="Jewelry image carousel"
      aria-live="polite"
    >
      {/* Slide Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-[700px] w-full"
        >
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="-z-30 object-cover object-center"
            priority
            sizes="(min-width: 740px) 100vw, 686px"
            quality={100}
            loading="eager"
          />

          {/* Overlay Content */}
          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-between rounded-xl bg-black/40 px-6 py-10 backdrop-blur-sm lg:flex-row">
            <div className="space-y-1 text-center text-white md:space-y-4 lg:w-1/2 lg:text-left">
              <h2 className="text-lg font-semibold text-white lg:text-xl">
                {currentItem.subtitle}
              </h2>
              <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">{currentItem.title}</h1>
              <p className="max-w-lg text-base lg:text-lg">{currentItem.description}</p>

              <div className="">
                <Link
                  className="bg-custom-1 px-4 py-2 text-white hover:bg-pink-600"
                  href={currentItem.link}
                >
                  {currentItem.buttonText}
                </Link>
              </div>
            </div>
            {/* Optional preview image */}
            <div className="relative hidden h-[60vh] w-1/2 lg:block">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
                sizes="351px"
                quality={100}
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-2">
        {carouselItems.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="button"
            tabIndex={0}
            className={`h-6 w-6 border border-white rounded-full transition-all duration-300 ${
              i === currentSlide ? 'bg-custom-1' : 'bg-black'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-custom-1 p-2 transition hover:bg-custom-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-white lg:h-8 lg:w-8" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-custom-1 p-2 transition hover:bg-custom-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-white lg:h-8 lg:w-8" />
      </button>
    </div>
  );
}
