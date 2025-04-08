'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

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

	const goToSlide = useCallback((index:number) => {
		setCurrentSlide(index);
	}, []);

	useEffect(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	}, [nextSlide]);

	const currentItem = useMemo(
		() => carouselItems[currentSlide],
		[currentSlide]
	);

	return (
		<div
			className='relative w-full h-[90vh] rounded-lg overflow-hidden '
			role='region'
			aria-label='Image carousel with jewelry promotions'
		>
			{/* Gradient Overlay for Contrast */}
			<div className='absolute inset-0  -z-30' aria-hidden='true' />

			{/* Carousel Content */}
			<div className='relative -z-20 max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-between items-center p-6'>
				{/* Left Content */}
				<div className='lg:w-1/2 space-y-4 text-center lg:text-left'>
					<h2 className=' text-xl lg:text-2xl text-custom-1 font-semibold'>
						{currentItem.subtitle}
					</h2>
					<h1 className='text-4xl lg:text-5xl font-bold'>
						{currentItem.title}
					</h1>
					<p className='lg:text-lg'>{currentItem.description}</p>
					<Button
						asChild
						className='mt-4 bg-pink-500 hover:bg-pink-600'
						aria-label={`Shop now for ${currentItem.title}`}
					>
						<Link href={'/products'}>{currentItem.buttonText}</Link>
					</Button>
				</div>

				{/* Right Image */}
				<div className='relative w-full lg:w-1/2 h-[50vh] lg:h-[60vh] mt-8 lg:mt-0'>
					<Image
						src={currentItem.image}
						alt={currentItem.title}
						fill
						className='object-contain object-center'
						priority={currentSlide === 0}
						sizes='(max-width: 768px) 100vw, 50vw'
					/>
				</div>
			</div>

			{/* Dots Navigation */}
			<div className='absolute bottom-6 inset-x-0 flex justify-center space-x-3 -z-20'>
				{carouselItems.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-all ${
							index === currentSlide ? 'bg-custom-1' : 'bg-gray-400'
						}`}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			{/* Navigation Buttons */}
			<button
				type='button'
				onClick={prevSlide}
				className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition -z-20'
				aria-label='Previous slide'
			>
				<ChevronLeft className='w-6 h-6 text-white' />
			</button>
			<button
				type='button'
				onClick={nextSlide}
				className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition -z-20'
				aria-label='Next slide'
			>
				<ChevronRight className='w-6 h-6 text-white' />
			</button>
		</div>
	);
}
