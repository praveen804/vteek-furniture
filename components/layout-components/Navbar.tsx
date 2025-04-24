'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import useScrollActive from '@/src/hooks/useScrollActive.hook';
import useMediaQuery from '@/src/hooks/useMediaQuery.hooks';
import DesktopNavbar from "../desktop-components/DesktopNavbar";
import MobileNavbar from "../mobile-components/MobileNavbar";

const Navbar = () => {
	const path = usePathname();
	const scrollActive = useScrollActive(80);
	const matches = useMediaQuery('(max-width: 1024px)');

	const getLinkClass = (href: string) =>
		path === href
			? 'text-custom-1 font-semibold'
			: 'text-gray-700 hover:text-custom-1 transition-colors duration-200';

	return (
		<nav
			className={`w-full px-4 md:px-6 sticky top-0 transition-all duration-300 z-40 ${
				scrollActive
					? 'bg-white shadow-md backdrop-blur-md border-b border-gray-200 py-2'
					: 'bg-transparent py-2'
			}`}
		>
			{!matches ? (
				<>
					<DesktopNavbar getLinkClass={getLinkClass} />
				</>
			) : (
				<>
					<MobileNavbar scrollActive={scrollActive} />
				</>
			)}
		</nav>
	);
};

export default Navbar;
