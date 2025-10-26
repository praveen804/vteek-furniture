'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const AboutHero = () => {
	const pathName = usePathname();

	// Dynamic content based on the route
	const getHeroContent = () => {
		switch (pathName) {
			case '/about':
				return {
					title: 'About us',
					description: 'Welcome to VTekh Home Furniture, your trusted destination for stylish, durable, and affordable furniture in Hyderabad. We specialize in L-shape sofas, 3+1+1 sofa sets, and fully customizable furniture crafted to match your taste and space.At VTekh, we believe every home deserves furniture that combines comfort, elegance, and quality craftsmanship. Whether you’re furnishing a new home or upgrading your interiors, our expert team ensures you get the perfect blend of design and durability.',
					buttonText: 'Explore Our Collection',
					buttonLink: '/products',
				};
			case '/contact':
				return {
					title: 'Contact Our Furniture',
					description: "We're here to help. Reach out to us anytime!",
					buttonText: 'Get in Touch',
					buttonLink: '/contact',
				};
			default:
				return {
					title: 'Welcome to Our Furniture World',
					description: 'Discover the art of fine furniture.',
					buttonText: 'Explore Now',
					buttonLink: '/',
				};
		}
	};

	const { title, description, buttonText, buttonLink } = getHeroContent();

	return (
		<section className='relative w-full h-[30vh] md:h-[40vh] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden'>
			{/* Background Image */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='absolute inset-0 w-full h-full'
			>
				<Image
					src='https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80'
					alt='Furniture AboutHero Background'
					className='w-full h-full object-cover'
					fill
				/>
				<div className='absolute inset-0 bg-black bg-opacity-40'></div>
			</motion.div>

			{/* Content */}
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
				className='relative z-10 px-4'
			>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>{title}</h1>
				<p className='text-lg md:text-xl mb-8'>{description}</p>
				<a
					href={buttonLink}
					className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-[#e0266e] transition duration-300'
				>
					{buttonText}
				</a>
			</motion.div>
		</section>
	);
};

export default AboutHero;
