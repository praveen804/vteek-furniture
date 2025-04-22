'use client';

import { motion } from 'framer-motion';
import { Link } from "next-view-transitions";
import React from 'react';

interface AddressErrorProps {
	error: unknown;

}

const AddressError: React.FC<AddressErrorProps> = ({ error }) => {
	return (
		<div className='max-w-7xl mx-auto p-4'>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className='bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm'
				role='alert'
			>
				<div className='flex'>
					<div className='flex-shrink-0'>
						<svg
							className='h-5 w-5 text-red-400'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<div className='ml-3'>
						<h3 className='text-sm font-medium text-red-800'>
							Error loading addresses
						</h3>
						<div className='mt-2 text-sm text-red-700'>
							<p>{error?.toString()}</p>
						</div>
						<div className='mt-4'>
							<button
								type='button'
								className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
							>
								<Link href={'/'} >back Home </Link>
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AddressError;
