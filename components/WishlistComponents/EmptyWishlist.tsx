'use client';
import { Link } from 'next-view-transitions';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

const EmptyWishlist = () => {
  const router=useRouter();
	return (
		<motion.section
			className='flex flex-col items-center justify-center min-h-[80vh] text-center p-8'
			aria-labelledby='empty-wishlist-title'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='relative mb-8'>
				<div className='absolute -inset-4 rounded-full bg-rose-100 opacity-50 blur-md'></div>
				<motion.div
					animate={{
						scale: [1, 1.1, 1],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 3,
					}}
				>
					<FiHeart
						className='w-20 h-20 text-rose-500 fill-rose-100'
						aria-hidden='true'
					/>
				</motion.div>
			</div>

			<h2
				id='empty-wishlist-title'
				className='text-3xl font-bold text-gray-800 mb-3'
			>
				Your wishlist is empty
			</h2>

			<p className='text-gray-500 max-w-md mx-auto text-lg mb-8'>
				Save your favorite items here to keep them handy for later
			</p>

			<Link
				href='/products'
				passHref
				className='group relative overflow-hidden'
			>
				<motion.button
					type='button'
					className='px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-lg font-medium text-lg relative overflow-hidden'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					aria-label='Browse products'
          onClick={()=>router.push('/products')}
				>
					<span className='relative z-10'>Explore Products</span>
					<span className='absolute inset-0 bg-gradient-to-r from-rose-700 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
				</motion.button>
			</Link>

			<div className='mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg'>
				{[1, 2, 3].map((item) => (
					<motion.div
						key={item}
						className='bg-gray-50 rounded-lg p-4 h-32 flex flex-col items-center justify-center'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: item * 0.1 }}
					>
						<div className='w-10 h-10 bg-rose-100 rounded-full mb-2 flex items-center justify-center'>
							<FiHeart className='text-rose-400' />
						</div>
						<div className='w-full h-4 bg-gray-200 animate-pulse rounded'></div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default EmptyWishlist;
