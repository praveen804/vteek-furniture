import React from 'react';
import Sidebar from '../layout-components/Sidebar';
import { Link } from 'next-view-transitions';
import { josefinSans } from '@/src/utils/fonts';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { useGetCartQuery } from '@/reducer/features/cart/cartApi';
import { ChevronRight } from 'lucide-react';
const MobileNavbar = () => {
	const user = useAppSelector((state: RootState) => state.auth.user);
	const { data } = useGetCartQuery(user?._id ?? '');
	const cartCount = data?.items?.length || 0;
	return (
		<div className='w-full flex flex-row justify-between items-center h-10'>
			<div className='flex  gap-2 items-center'>
				<Sidebar />
				<Link
					href='/'
					className={`text-2xl md:text-3xl lg:text-4xl font-bold subpixel-antialiased mt-1 text-[#0D0E43] ${josefinSans.className}`}
				>
					Luxe
				</Link>
			</div>
			<div className='flex flex-row gap-3 items-center'>
				<div className=''>
					<Link
						href={'/register'}
						className='flex items-center  text-black  transition-colors duration-200'
						aria-label='Login or register'
					>
						<div className=' flex items-center flex-row '>
							<span className="text-md font-semibold">Sign in</span>
							<ChevronRight size={18} className="mt-1 font-semibold" />
						</div>
					</Link>
				</div>
				<div className=''>
					<Link
						href='/cart'
						className='p-1.5  relative transition-colors'
						aria-label='View shopping cart'
					>
						<ShoppingCart className='h-5 w-5' />
						{cartCount > 0 && (
							<span className='absolute top-6 -right-5  bg-purple-500 text-white text-[8px] h-3 w-3 rounded-full flex items-center justify-center'>
								{cartCount}
							</span>
						)}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
