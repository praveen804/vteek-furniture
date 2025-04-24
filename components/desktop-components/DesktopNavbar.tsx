import { navigationLinks } from "@/src/data/link.data";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import React from 'react'
import SearchBar from "../productComponent/SearchBar";
import { josefinSans } from "@/src/utils/fonts";


interface DesktopNavbarProps {
  getLinkClass: (href: string) => string;
}

const DesktopNavbar:React.FC<DesktopNavbarProps> = ({ getLinkClass })=> {
	return (
		<div className='max-w-7xl mx-auto flex flex-row items-center justify-between '>
			<Link
				href='/'
				className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0E43] ${josefinSans.className}`}
			>
				Luxe
			</Link>

			{/* Center: Desktop Navigation */}
			<div className='flex space-x-6 xl:space-x-8 text-lg items-center'>
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
			<div className="basis-[30%] ">
				<SearchBar />
			</div>
		</div>
	);
};

export default DesktopNavbar