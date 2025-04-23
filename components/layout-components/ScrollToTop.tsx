import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		// Corrected the event listener to use 'scroll' and the proper function
		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className='fixed bottom-6 right-6 z-50'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ type: 'spring', damping: 20, stiffness: 300 }}
				>
					<motion.button
						className={`
              flex items-center justify-center
              w-12 h-12 
              rounded-full shadow-xl
              bg-gradient-to-br from-indigo-600 to-purple-600
              text-white
              focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
              overflow-hidden
            `}
						onClick={scrollToTop}
						onHoverStart={() => setIsHovered(true)}
						onHoverEnd={() => setIsHovered(false)}
						whileHover={{
							scale: 1.05,
							boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
						}}
						whileTap={{ scale: 0.95 }}
					>
						<motion.div
							animate={{
								y: isHovered ? -40 : 0,
								opacity: isHovered ? 0 : 1,
							}}
							transition={{ duration: 0.3 }}
						>
							<HiArrowUp size={24} />
						</motion.div>

						<motion.div
							className='absolute'
							initial={{ y: 40, opacity: 0 }}
							animate={{
								y: isHovered ? 0 : 40,
								opacity: isHovered ? 1 : 0,
							}}
							transition={{ duration: 0.3 }}
						>
							<FaRocket size={20} />
						</motion.div>

						{/* Progress indicator circle */}
						<motion.div
							className='absolute inset-0 border-2 border-white rounded-full'
							initial={{ pathLength: 0 }}
							animate={{
								pathLength:
									window.scrollY /
									(document.body.scrollHeight - window.innerHeight),
							}}
							transition={{ duration: 0.5 }}
							style={{
								rotate: -90,
								scale: 1.1,
								strokeDasharray: '100',
								strokeDashoffset: '100',
							}}
						/>
					</motion.button>

					{/* Optional tooltip */}
					<motion.div
						className='absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap'
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
						transition={{ duration: 0.2 }}
					>
						Back to top
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
