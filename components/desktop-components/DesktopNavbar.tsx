import { navigationLinks } from "@/src/data/link.data";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import React from 'react'
import SearchBar from "../productComponent/SearchBar";
import { josefinSans } from "@/src/utils/fonts";

const DesktopNavbar = ({ getLinkClass }: { getLinkClass : (href: string) => string}) => {
	return (
		<div>
			{' '}
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
		</div>
	);
};

export default DesktopNavbar