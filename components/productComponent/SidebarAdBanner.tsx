'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from "next-view-transitions";

const SidebarAdBanner: React.FC = () => {
	return (
		<div className='relative w-full h-96 mt-6 rounded-xl overflow-hidden shadow-md'>
			<Image
				src='https://img.freepik.com/free-vector/application-smartphone-mobile-computer-payments-online-transaction-shopping-online-process-smartphone-vecter-cartoon-illustration-isometric-design_1150-62457.jpg?ga=GA1.1.702301108.1739318315&semt=ais_hybrid&w=740'
				alt='Ad Banner'
				fill
				className='object-cover'
				priority
				sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
			/>
			<div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex flex-col items-center justify-center px-4 text-center'>
				<h2 className='text-white text-xl font-bold uppercase tracking-wide'>
					Limited Time Offer
				</h2>
				<p className='text-white text-sm mt-2'>
					Save up to <span className='font-bold text-yellow-300'>50%</span> on
					selected items!
				</p>
				<Link
					href={'/products'}
					className='mt-4 px-5 py-2 text-sm text-black bg-yellow-300 hover:bg-yellow-400 rounded-full transition font-semibold'
				>
					Shop Now
				</Link>
			</div>
		</div>
	);
};

export default SidebarAdBanner;
