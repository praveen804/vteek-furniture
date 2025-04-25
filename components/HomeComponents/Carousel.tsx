'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { Button } from '../ui/button';
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
			className='relative w-full h-[250px] sm:h-[400px] md:h-[500px]  lg:h-[85vh] overflow-hidden rounded-xl '
			role='region'
			aria-label='Jewelry image carousel'
			aria-live='polite'
		>
			{/* Slide Transition */}
			<AnimatePresence mode='wait'>
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50 }}
					transition={{ duration: 0.5 }}
					className='absolute inset-0 w-full h-[700px] '
				>
					<Image
						src={currentItem.image}
						alt={currentItem.title}
						fill
						className='object-cover object-center -z-30'
						priority
						sizes='(min-width: 740px) 100vw, 686px'
						quality={100}
						loading='eager'
					/>

					{/* Overlay Content */}
					<div className='relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-10 bg-black/40 backdrop-blur-sm rounded-xl'>
						<div className='lg:w-1/2 text-center lg:text-left text-white space-y-1 md:space-y-4'>
							<h2 className='text-lg lg:text-xl font-semibold text-pink-300'>
								{currentItem.subtitle}
							</h2>
							<h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
								{currentItem.title}
							</h1>
							<p className='text-base lg:text-lg max-w-lg'>
								{currentItem.description}
							</p>
							<Button asChild className='bg-pink-500 hover:bg-pink-600 mt-4'>
								<Link href={currentItem.link}>{currentItem.buttonText}</Link>
							</Button>
						</div>
						{/* Optional preview image */}
						<div className='hidden lg:block w-1/2 h-[60vh] relative'>
							<Image
								src={currentItem.image}
								alt={currentItem.title}
								fill
								className='object-contain'
								priority
								sizes='351px'
								quality={100}
								loading='eager'
							/>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Dots */}
			<div className='absolute bottom-6 inset-x-0 flex justify-center gap-2 z-20'>
				{carouselItems.map((_, i) => (
					<button
						type='button'
						key={i}
						onClick={() => goToSlide(i)}
						aria-label={`Go to slide ${i + 1}`}
						role='button'
						tabIndex={0}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							i === currentSlide ? 'bg-pink-500' : 'bg-gray-400/70'
						}`}
					/>
				))}
			</div>

			{/* Prev / Next Buttons */}
			<button
				type='button'
				onClick={prevSlide}
				className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-20'
				aria-label='Previous slide'
			>
				<ChevronLeft className='w-6 h-6 text-white' />
			</button>
			<button
				type='button'
				onClick={nextSlide}
				className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-20'
				aria-label='Next slide'
			>
				<ChevronRight className='w-6 h-6 text-white' />
			</button>
		</div>
	);
}
