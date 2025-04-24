import React from 'react';
import Sidebar from '../layout-components/Sidebar';
import { Link } from 'next-view-transitions';
import { josefinSans } from '@/src/utils/fonts';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { useGetCartQuery } from '@/reducer/features/cart/cartApi';
import { ChevronRight } from 'lucide-react';
import SearchBar from '../productComponent/SearchBar';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = ({ scrollActive }: { scrollActive: boolean }) => {
	const { isAuthenticated, user } = useAppSelector(
		(state: RootState) => state.auth
	);
	const { data } = useGetCartQuery(user?._id ?? '');
	const cartCount = data?.items?.length || 0;

	// Animation variants for better organization
	const containerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 10,
				stiffness: 100,
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
	};

	const logoVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 15,
			},
		},
		exit: {
			opacity: 0,
			x: -10,
			transition: { duration: 0.15 },
		},
	};

	const searchVariants = {
		hidden: { opacity: 0, scaleX: 0.8 },
		visible: {
			opacity: 1,
			scaleX: 1,
			transition: {
				type: 'spring',
				stiffness: 200,
				damping: 15,
			},
		},
		exit: {
			opacity: 0,
			scaleX: 0.8,
			transition: { duration: 0.15 },
		},
	};

	const authVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3 },
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.15 },
		},
	};

	const cartBadgeVariants = {
		hidden: { scale: 0 },
		visible: {
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 500,
				damping: 15,
			},
		},
	};

	return (
		<motion.div
			className='w-full flex flex-row justify-between items-center h-10'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<div className='flex gap-2 items-center'>
				<Sidebar />
				<AnimatePresence mode='wait'>
					{!scrollActive && (
						<motion.div
							variants={logoVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<Link
								href='/'
								className={`text-2xl md:text-3xl lg:text-4xl font-bold subpixel-antialiased mt-1 text-[#0D0E43] ${josefinSans.className}`}
							>
								Luxe
							</Link>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className='w-full px-2'>
				<AnimatePresence mode='wait'>
					{scrollActive && (
						<motion.div
							className='flex-1'
							variants={searchVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<SearchBar />
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className='flex flex-row gap-3 items-center'>
				<AnimatePresence mode='wait'>
					{!scrollActive && (
						<motion.div
							variants={authVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							{isAuthenticated ? (
								<Link href={'/user'} className='flex items-center' passHref>
									<motion.div
										className='bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold'
										whileHover={{
											scale: 1.1,
											rotate: [0, 5, -5, 0],
											transition: { duration: 0.4 },
										}}
										whileTap={{
											scale: 0.95,
											transition: { duration: 0.1 },
										}}
									>
										{user?.name.slice(0, 2).toUpperCase()}
									</motion.div>
								</Link>
							) : (
								<div className=''>
									<Link
										href={'/register'}
										className='flex items-center text-black transition-colors duration-200  flex-row'
										aria-label='Login or register'
									>
										<motion.div
											className='flex items-center flex-row'
											whileHover={{
												x: [0, 2, 0],
												transition: {
													duration: 0.6,
													repeat: Infinity,
													repeatType: 'reverse',
												},
											}}
										>
											<span className='text-md font-semibold text-nowrap'>Sign in</span>
											<motion.span
												animate={{
													x: [0, 3, 0],
												}}
												transition={{
													duration: 1.5,
													repeat: Infinity,
													ease: 'easeInOut',
												}}
											>
												<ChevronRight
													size={18}
													className='mt-1 font-semibold'
												/>
											</motion.span>
										</motion.div>
									</Link>
								</div>
							)}
						</motion.div>
					)}
				</AnimatePresence>

				<motion.div
					whileHover={{
						scale: 1.1,
						rotate: [0, 5, -5, 0],
						transition: { duration: 0.4 },
					}}
					whileTap={{
						scale: 0.9,
						transition: { duration: 0.1 },
					}}
				>
					<Link
						href='/cart'
						className='p-1.5 relative transition-colors'
						aria-label='View shopping cart'
					>
						<motion.div
							animate={{
								y: [0, -2, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<ShoppingCart className='h-6 w-6' />
						</motion.div>
						{cartCount > 0 && (
							<motion.span
								className='absolute top-5 -right-6 bg-purple-500 text-white text-[8px] h-4 w-4 rounded-full flex items-center justify-center'
								variants={cartBadgeVariants}
								initial='hidden'
								animate='visible'
								whileHover={{ scale: 1.2 }}
							>
								{cartCount}
							</motion.span>
						)}
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default MobileNavbar;
