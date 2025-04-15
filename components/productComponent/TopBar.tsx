'use client';
import {
	Mail,
	Phone,
	Heart,
	ShoppingCart,
	User,
	ChevronDown,
} from 'lucide-react';
import PriceComponent from '../globalComponent/PriceComponent';
import { Link } from 'next-view-transitions';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import LogoutButton from '../reusableComponents/LogoutButton';
import LocationComponent from '../globalComponent/LocationComponent';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const TopBar: React.FC = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isHovering, setIsHovering] = useState(false);

	// Sample counts - replace with real data from your store
	const wishlistCount = 2;
	const cartCount = 3;

	return (
		<nav
			className='h-12 bg-gradient-to-r from-purple-700 to-purple-600 shadow-sm border-b border-purple-500/20'
			onClick={() => setIsHovering(false)}
		>
			<div className='flex justify-between items-center max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8'>
				{/* Left Section: Contact Information */}
				<div className='hidden lg:flex items-center space-x-6'>
					<div className='flex items-center space-x-2 group'>
						<Mail className='h-4 w-4 text-purple-200' aria-hidden='true' />
						<a
							href='mailto:Vikash752200@gmail.com'
							className='text-sm font-medium text-purple-100 hover:text-white transition-colors duration-200'
							aria-label='Contact us via email'
						>
							Vikash752200@gmail.com
						</a>
					</div>

					<div className='flex items-center space-x-2'>
						<Phone className='h-4 w-4 text-purple-200' aria-hidden='true' />
						<a
							href='tel:+918448925560'
							className='text-sm font-medium text-purple-100 hover:text-white transition-colors duration-200'
							aria-label='Contact us via phone'
						>
							+91 844 892 5560
						</a>
					</div>
				</div>

				{/* Right Section: User Controls */}
				<div className='flex items-center space-x-6'>
					<LocationComponent />
					<PriceComponent />

					<div className='hidden lg:flex items-center space-x-4'>
						{/* User Menu */}
						<div className='relative' onMouseEnter={() => setIsHovering(true)}>
							{user ? (
								<>
									<button
										className='flex items-center space-x-1 text-purple-100 hover:text-white transition-colors duration-200'
										aria-haspopup='true'
										aria-expanded={isHovering}
										onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
									>
										<User className='h-4 w-4' />
										<span className='text-sm font-medium max-w-[120px] truncate'>
											{user?.name}
										</span>
										<ChevronDown
											className={cn(
												'h-4 w-4 transition-transform',
												isHovering && 'rotate-180'
											)}
										/>
									</button>

									{/* Dropdown Menu */}
									{isHovering && (
										<div className='absolute  -right-20 top-8 mt-2 w-48 bg-violet-600 rounded-lg shadow-xl border border-gray-100 z-50'>
											<div className='p-2 space-y-1'>
												<Link
													href='/user'
													className='flex items-center px-3 py-2 text-sm text-white hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors'
													role='menuitem'
													onClick={() => setIsHovering(false)}
												>
													<User className='h-4 w-4 mr-2 ' />
													Profile
												</Link>
												<Link
													href='/wishlist'
													className='flex items-center px-3 py-2 text-sm text-white hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors'
													role='menuitem'
													onClick={() => setIsHovering(false)}
												>
													<Heart className='h-4 w-4 mr-2 ' />
													Wishlist
													{wishlistCount > 0 && (
														<span className='ml-auto bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full'>
															{wishlistCount}
														</span>
													)}
												</Link>
												<Link
													href='/cart'
													className='flex items-center px-3 py-2 text-sm text-white hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors'
													role='menuitem'
													onClick={() => setIsHovering(false)}
												>
													<ShoppingCart className='h-4 w-4 mr-2' />
													<span className=''> Cart</span>{' '}
													{cartCount > 0 && (
														<span className='ml-auto bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full'>
															{cartCount}
														</span>
													)}
												</Link>
												<div className='border-t border-gray-100 my-1' />
												<LogoutButton className='w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md' />
											</div>
										</div>
									)}
								</>
							) : (
								<Link
									href='/login'
									className='flex items-center space-x-1 text-purple-100 hover:text-white transition-colors duration-200'
									aria-label='Login or register'
								>
									<User className='h-4 w-4' />
									<span className='text-sm font-medium'>Login</span>
								</Link>
							)}
						</div>

						{/* Quick Action Icons */}
						<div className='flex items-center space-x-3'>
							<Link
								href='/wishlist'
								className='p-1.5 text-purple-100 hover:text-white relative transition-colors'
								aria-label='View wishlist'
							>
								<Heart className='h-5 w-5' />
								{wishlistCount > 0 && (
									<span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs h-4 w-4 rounded-full flex items-center justify-center'>
										{wishlistCount}
									</span>
								)}
							</Link>

							<Link
								href='/cart'
								className='p-1.5 text-purple-100 hover:text-white relative transition-colors'
								aria-label='View shopping cart'
							>
								<ShoppingCart className='h-5 w-5' />
								{cartCount > 0 && (
									<span className='absolute -top-1 -right-1 bg-purple-500 text-white text-xs h-4 w-4 rounded-full flex items-center justify-center'>
										{cartCount}
									</span>
								)}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default TopBar;
