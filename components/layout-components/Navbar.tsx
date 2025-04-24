'use client';

import React from 'react';
import { Link } from 'next-view-transitions';
import SearchBar from '../productComponent/SearchBar';
import { josefinSans } from '@/src/utils/fonts';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { navigationLinks } from '@/src/data/link.data';
import useScrollActive from '@/src/hooks/useScrollActive.hook';

const Navbar = () => {
	const path = usePathname();
	const scrollActive = useScrollActive(50);

	const getLinkClass = (href: string) =>
		path === href
			? 'text-custom-1 font-semibold'
			: 'text-gray-700 hover:text-custom-1 transition-colors duration-200';

	return (
		<nav
			className={`w-full px-4 md:px-6 sticky top-0 transition-all duration-300 z-40 ${
				scrollActive
					? 'bg-white shadow-md backdrop-blur-md border-b border-gray-200 py-2'
					: 'bg-transparent py-4'
			}`}
		>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<div className='flex items-center gap-2 '>
					<Link href='/'>
						<span
							className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0E43] ${josefinSans.className}`}
						>
							Luxe
						</span>
					</Link>
				</div>

				{/* Center: Desktop Navigation */}
				<div className='hidden lg:flex space-x-6 xl:space-x-8 text-lg items-center'>
					{navigationLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={getLinkClass(link.href)}
						>
							<motion.span
								whileHover={{ scale: 1.05 }}
								className='cursor-pointer'
							>
								{link.label}
							</motion.span>
						</Link>
					))}
				</div>

				<div className='flex items-center gap-3 md:gap-4'>
					<div className='hidden lg:block'>
						<SearchBar />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
