'use client';

import React from 'react';
import { Package, ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const EmptyOrderState = () => {
	const title = 'No Orders Yet';
	const description =
		'Looks like you haven’t placed any orders yet. Start exploring our products to find something you love.';
	const ctaText = 'Start Shopping';
	const ctaHref = '/';

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className='min-h-screen flex items-center justify-center px-4'>
			<motion.div
				className='text-center max-w-md mx-auto'
				initial='hidden'
				animate='show'
				variants={containerVariants}
			>
				{/* Animated package icon with floating effect */}
				<motion.div
					className='relative inline-block mb-8'
					variants={itemVariants}
				>
					<div className='absolute inset-0 bg-primary/10 rounded-full blur-xl scale-110' />
					<motion.div
						animate={{
							rotate: [0, 5, -5, 0],
							y: [0, -8, 8, 0],
						}}
						transition={{
							repeat: Infinity,
							duration: 4,
							ease: 'easeInOut',
						}}
						className='relative z-10'
					>
						<div className='relative'>
							<Package className='mx-auto h-20 w-20 text-primary' />
							<motion.div
								className='absolute -top-2 -right-2'
								animate={{ scale: [1, 1.2, 1] }}
								transition={{ repeat: Infinity, duration: 2 }}
							>
								<Sparkles className='h-5 w-5 text-yellow-400' />
							</motion.div>
						</div>
					</motion.div>
				</motion.div>

				{/* Title with subtle animation */}
				<motion.h3
					className='text-3xl font-bold text-gray-900 mb-4'
					variants={itemVariants}
				>
					{title}
				</motion.h3>

				{/* Description with fade-in */}
				<motion.p
					className='text-gray-600 text-base mb-8'
					variants={itemVariants}
				>
					{description}
				</motion.p>

				{/* Interactive button with hover effects */}
				<motion.div variants={itemVariants}>
					<Link href={ctaHref} passHref >
						<motion.button
							type='button'
							className='group relative px-8 py-4 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 bg-pink-600 text-white  overflow-hidden'
							whileHover={{
								scale: 1.05,
								boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
							}}
							whileTap={{
								scale: 0.98,
								boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.1)',
							}}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: 'spring', stiffness: 300, damping: 20 }}
						>
							{/* Ripple effect background */}
							<span className='absolute inset-0 overflow-hidden'>
								<span className='absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
							</span>

							{/* Button content */}
							<span className='flex items-center gap-3 text-base font-semibold relative z-10'>
								<motion.span
									animate={{
										rotate: [0, 5, -5, 0],
										y: [0, -2, 2, 0],
									}}
									transition={{
										repeat: Infinity,
										duration: 3,
										ease: 'easeInOut',
									}}
									className='inline-flex items-center justify-center'
								>
									<ShoppingCart className='h-6 w-6 group-hover:scale-110 transition-transform' />
								</motion.span>

								<span>{ctaText}</span>

								<motion.span
									className='inline-flex items-center'
									initial={{ x: 0 }}
									whileHover={{ x: 5 }}
									transition={{ type: 'spring', stiffness: 500 }}
								>
									<ArrowRight className='h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform' />
								</motion.span>
							</span>

							{/* Glow effect */}
							<span className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
								<span className='absolute inset-0 bg-primary/20 blur-md'></span>
							</span>
						</motion.button>
					</Link>
				</motion.div>

				{/* Additional decorative elements */}
				<motion.div
					className='mt-12 text-sm text-gray-400'
					variants={itemVariants}
				>
					<p>
						Need help?{' '}
						<Link href='/contact' className='text-primary hover:underline'>
							Contact our support
						</Link>
					</p>
				</motion.div>

				{/* Floating decorative dots */}
				<AnimatePresence>
					{[...Array(5)].map((_, i) => (
						<motion.span
							key={i}
							className='absolute rounded-full bg-primary/10'
							style={{
								width: Math.random() * 10 + 5 + 'px',
								height: Math.random() * 10 + 5 + 'px',
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							initial={{ opacity: 0 }}
							animate={{
								opacity: [0, 0.3, 0],
								y: [0, -20, 0],
							}}
							transition={{
								duration: Math.random() * 5 + 5,
								repeat: Infinity,
								ease: 'linear',
								delay: Math.random() * 2,
							}}
						/>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default EmptyOrderState;
