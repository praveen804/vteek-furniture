'use client';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import React from 'react';
import { FiChevronRight, FiPlus } from 'react-icons/fi';
import { Address } from '@/reducer/types';
const AddAddressButton = ({ address }: { address: Address[] | undefined }) => {
	return (
		<div className='py-10'>
			<div>
				<Link href={'/addAddress'} passHref>
					<motion.div
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className='border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-pink-300 hover:bg-pink-50/50 transition-all cursor-pointer mb-8'
					>
						<div className='flex flex-col items-center justify-center'>
							<div className='bg-pink-100 p-3 rounded-full mb-3'>
								<FiPlus className='text-pink-600' size={24} />
							</div>
							<h3 className='font-medium text-gray-900 mb-1'>
								Add New Address
							</h3>
							<p className='text-sm text-gray-500'>
								Save addresses for faster checkout
							</p>
						</div>
					</motion.div>
				</Link>
			</div>

			{address && (
				<div className='mt-8 pt-6 border-t border-gray-200 flex justify-end'>
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						// disabled={!selectedAddress}
						className={`px-8 py-3 rounded-xl font-medium text-white shadow-md transition-all ${
							true
								? 'bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600'
								: 'bg-gray-300 cursor-not-allowed'
						}`}
					>
						<Link href={'/checkout'}> Proceed to Checkout</Link>
						<FiChevronRight className='inline ml-1' size={18} />
					</motion.button>
				</div>
			)}
		</div>
	);
};

export default AddAddressButton;
