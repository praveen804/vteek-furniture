'use client';
import React from 'react';
import { FiUser, FiShoppingCart, FiHeart, FiPackage } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import { motion } from 'framer-motion';
import { useGetCartQuery } from "@/Redux-Toolkit/features/cart/cartApi";
import { useGetWishlistQuery } from "@/Redux-Toolkit/features/wishlist/wishlistApi";
import { useGetUserOrdersQuery } from "@/Redux-Toolkit/features/order/orderApi";

type Props = {
	setActiveTab: (tab: string) => void;
	activeTab: string;
};



const tabs = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'orders', label: 'Orders' },
	{ id: 'settings', label: 'Settings' },
];

export default function UserCard({ setActiveTab, activeTab }: Props) {
	const { user } = useAppSelector((state: RootState) => state.auth);

	const { data } = useGetCartQuery(user?._id ?? '');
		const { data: wishlist } = useGetWishlistQuery(user?._id ?? '');
		const { data: orderData } = useGetUserOrdersQuery(user?._id ?? '');

		const orderCount=orderData?.orders?.length || 0

		const wishlistCount = wishlist?.items?.length || 0;

		const cartCount = data?.items?.length || 0;



		const statItems = [
			{
				label: 'Cart Items',
				value: cartCount,
				icon: <FiShoppingCart className='text-lg' />,
			},
			{
				label: 'Wishlist',
				value: wishlistCount,
				icon: <FiHeart className='text-lg' />,
			},
			{
				label: 'Orders',
				value: orderCount,
				icon: <FiPackage className='text-lg' />,
			},
		];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className='flex flex-col lg:flex-row items-start bg-white rounded-2xl shadow-lg p-6 mb-6 gap-6 w-full'
		>
			{/* User Info */}
			<div className='flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto'>
				<div
					aria-label='User avatar'
					className='w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white shadow-md flex items-center justify-center text-white text-4xl font-extrabold uppercase'
				>
					{user?.name?.charAt(0)?.toUpperCase() || (
						<FiUser className='text-3xl' />
					)}
				</div>
				<div className='text-center sm:text-left'>
					<h2 className='text-2xl font-semibold text-gray-800'>
						{user?.name || 'User'}
					</h2>
					<p className='text-sm text-gray-600 flex items-center justify-center sm:justify-start mt-1'>
						<FiUser className='mr-1.5 flex-shrink-0' />
						<span className='truncate max-w-[180px] md:max-w-none'>
							{user?.email || 'email@example.com'}
						</span>
					</p>
					{user?.phone && (
						<a
							href={`tel:${user.phone}`}
							className='text-pink-600 hover:text-pink-700 text-sm flex items-center justify-center sm:justify-start mt-1 transition-colors'
						>
							{user.phone}
						</a>
					)}
				</div>
			</div>

			{/* Tab Nav + Stats */}
			<div className='flex-1 w-full'>
				{/* Tabs */}
				<div
					className='flex flex-wrap border-b border-gray-200 mb-6'
					role='tablist'
				>
					{tabs.map((tab) => (
						<button
							type='button'
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={cn(
								'relative px-4 py-2 font-medium text-sm sm:text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2',
								activeTab === tab.id
									? 'text-pink-600'
									: 'text-gray-500 hover:text-pink-600'
							)}
							role='tab'
							aria-selected={activeTab === tab.id}
							aria-controls={`tabpanel-${tab.id}`}
						>
							{tab.label}
							{activeTab === tab.id && (
								<motion.div
									layoutId='activeTab'
									className='absolute bottom-0 left-0 right-0 h-0.5 bg-pink-600'
									transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
								/>
							)}
						</button>
					))}
				</div>

				{/* Stats */}
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
					{statItems.map((stat, index) => (
						<motion.div
							key={index}
							whileHover={{ y: -2 }}
							className='bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300 p-4 rounded-xl shadow-sm border border-gray-100'
						>
							<div className='flex items-center justify-between'>
								<div>
									<div className='text-2xl font-bold text-gray-800'>
										{stat.value}
									</div>
									<div className='text-xs text-gray-600 mt-1'>{stat.label}</div>
								</div>
								<div className='p-2 rounded-full bg-pink-100 text-pink-600'>
									{stat.icon}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
