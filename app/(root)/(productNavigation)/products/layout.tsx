'use client';
import React from 'react';
import { ProductLayoutProps } from '@/src/types/productInterface';
import { usePathname } from 'next/navigation';

const ProductLayout: React.FC<ProductLayoutProps> = ({
	children,
	sidebar,
	topBar,
}) => {
	const pathname = usePathname();
	console.log('🚀 ~ file: layout.tsx:15 ~ pathname:', pathname);

	return (
		<section>
			{pathname === '/products' ? (
				<div className='w-full min-h-screen flex flex-col gap-6'>
					{/* Top Bar */}
					<div className='h-16 mb-10'>{topBar}</div>

					{/* Content Section */}
					<div className='w-[1200px] m-auto lg:flex  gap-6'>
						{/* Sidebar */}
						<aside className='w-full lg:w-1/5 p-4 bg-white '>{sidebar}</aside>

						{/* Main Content */}
						<main className='w-full lg:w-4/5 bg-gray-50 p-6 rounded-md shadow-md mb-10'>
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
