'use client';
import React from 'react';
import { ProductLayoutProps } from '@/src/types/productInterface';
import { usePathname } from 'next/navigation';

const ProductLayout: React.FC<ProductLayoutProps> = ({	children,	sidebar,topBar,}) => {
	const pathname = usePathname();

	return (
		<section>
			{pathname === '/products' ? (
				<div className='w-full min-h-screen flex flex-col gap-4 '>
					{/* Top Bar */}
					<div className='w-full px-4 sm:px-6 lg:px-8 lg:mb-4'>{topBar}</div>

					{/* Content Section */}
					<div className='w-full max-w-7xl mx-auto  sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:gap-6 '>
						{/* Sidebar */}
						<aside className='w-full lg:w-1/4 bg-white p-4 rounded-md shadow-sm'>
							{sidebar}
						</aside>

						{/* Main Content */}
						<main className='w-full lg:w-3/4 bg-gray-50 lg:p-4 rounded-md shadow-md'>
							{children}
						</main>
					</div>
				</div>
			) : (
				<div>{children}</div>
			)}
		</section>
	);
};

export default ProductLayout;
