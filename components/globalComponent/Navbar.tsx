'use client';

import React, { useEffect, useState } from 'react';
import { Link } from 'next-view-transitions';
import SearchBar from '../productComponent/SearchBar';
import { josefinSans } from '@/utils/utils-function/fonts';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
	const path = usePathname();
	const [scrollActive, setScrollActive] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navigationLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/products', label: 'Furniture' },
		{ href: '/about', label: 'About' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
	];

	const getLinkClass = (href: string) =>
		path === href
			? 'text-custom-1 font-semibold'
			: 'text-gray-700 hover:text-custom-1 transition-colors duration-200';

	useEffect(() => {
		const handleScroll = () => setScrollActive(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	return (
		<nav
			className={`w-full py-4 px-2 lg:px-0 sticky top-0  transition-all duration-300 z-40 ${
				scrollActive ? 'bg-white shadow-lg ' : 'bg-white'
			}`}
		>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				{/* Logo and Mobile Menu Toggle */}
				<div className='flex items-center gap-6'>
					<button
						onClick={toggleMobileMenu}
						className='lg:hidden text-gray-700 focus:outline-none'
						aria-label='Toggle Menu'
						aria-expanded={isMobileMenuOpen}
						aria-controls='mobile-menu'
					>
						{isMobileMenuOpen ? (
							<X className='w-6 h-6' />
						) : (
							<Menu className='w-6 h-6' />
						)}
					</button>

					<Link href='/' className='hidden md:block'>
						<span
							className={`text-4xl font-bold text-[#0D0E43] ${josefinSans.className}`}
						>
							Luxe
						</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className='hidden lg:flex space-x-8 text-lg items-center'>
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

				{/* Search Bar */}
				<div className='flex items-center gap-4'>
					<SearchBar />
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className='lg:hidden bg-white shadow-lg mt-2'
					id='mobile-menu'
				>
					<div className='flex flex-col space-y-4 p-4'>
						{navigationLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={getLinkClass(link.href)}
								onClick={toggleMobileMenu}
							>
								<motion.span
									whileHover={{ x: 10 }}
									className='block py-2 text-lg'
								>
									{link.label}
								</motion.span>
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
