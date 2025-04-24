'use client';

import React from 'react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ErrorFeaturedProduct = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='w-full h-[300px] flex flex-col items-center justify-center text-center p-4 bg-red-50 rounded-xl border border-red-200 shadow-sm'
		>
			<AlertTriangle className='text-red-500 mb-2' size={40} />
			<h2 className='text-xl md:text-2xl font-semibold text-red-700 mb-1'>
				Oops! Failed to load featured products
			</h2>
			<p className='text-sm text-gray-600 mb-4'>
				Something went wrong while fetching the products. Please try again or go
				back home.
			</p>

			<div className='flex gap-4'>
				<button
					onClick={() => window.location.reload()}
					className='flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600 transition'
				>
					<RefreshCcw size={16} />
					Retry
				</button>

				<Link
					href='/'
					className='flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-100 transition'
				>
					<Home size={16} />
					Go Home
				</Link>
			</div>
		</motion.div>
	);
};

export default ErrorFeaturedProduct;
