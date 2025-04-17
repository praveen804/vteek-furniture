import { Link } from 'next-view-transitions';
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const EmptyCartItem = () => {
	return (
		<motion.section
			className='flex flex-col items-center justify-center min-h-[80vh] text-center p-8'
			aria-labelledby='empty-cart-title'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='relative mb-8'>
				<div className='absolute -inset-4 rounded-full bg-pink-100 opacity-50 blur-md'></div>
				<motion.div
					animate={{
						y: [0, -10, 0],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 3,
					}}
				>
					<HiOutlineShoppingBag
						className='w-20 h-20 text-pink-500'
						aria-hidden='true'
					/>
				</motion.div>
			</div>

			<h2
				id='empty-cart-title'
				className='text-3xl font-bold text-gray-800 mb-3'
			>
				Your shopping bag is empty
			</h2>

			<p className='text-gray-500 max-w-md mx-auto text-lg mb-8'>
				Discover our collection and find something special for yourself
			</p>

			<Link href='/' passHref className='group relative overflow-hidden'>
				<motion.button
					type='button'
					className='px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-medium text-lg relative overflow-hidden'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					aria-label='Continue shopping'
				>
					<span className='relative z-10'>Start Shopping</span>
					<span className='absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
				</motion.button>
			</Link>

			<div className='mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg'>
				{[1, 2, 3].map((item) => (
					<motion.div
						key={item}
						className='bg-gray-50 rounded-lg p-4 h-32'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: item * 0.1 }}
					>
						<div className='w-full h-full bg-gray-200 animate-pulse rounded'></div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default EmptyCartItem;
