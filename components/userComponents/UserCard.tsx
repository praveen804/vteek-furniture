'use client';
import React from 'react';
import { FiStar, FiUser } from 'react-icons/fi';
import { cn } from '@/lib/utils'; // Optional: utility for merging Tailwind classes

type Props = {
	setActiveTab: (tab: string) => void;
	activeTab: string;
};

export default function UserCard({ setActiveTab, activeTab }: Props) {
	const tabs = ['overview', 'orders', 'settings'];

	return (
		<div className='flex flex-col md:flex-row items-start bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 gap-6'>
			{/* User Info */}
			<div className='flex items-center w-full md:w-auto'>
				<div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-pink-600 border-2 border-black flex items-center justify-center text-white text-4xl font-extrabold uppercase'>
					v
				</div>
				<div className='ml-4'>
					<h2 className='text-2xl font-semibold text-zinc-800'>Vikash</h2>
					<p className='text-sm text-gray-600 flex items-center mt-1'>
						<FiUser className='mr-1.5' /> vikash@gmai.com
					</p>
					<div className='text-pink-600 text-sm flex items-center mt-1'>
						<FiStar className='mr-1' />
						100 Loyalty Points
					</div>
				</div>
			</div>

			{/* Tab Nav + Stats */}
			<div className='flex-1 w-full'>
				{/* Tabs */}
				<div className='flex flex-wrap border-b border-gray-200 mb-4'>
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={cn(
								'px-4 py-2 font-medium capitalize transition-colors duration-200',
								activeTab === tab
									? 'text-pink-600 border-b-2 border-pink-600'
									: 'text-gray-500 hover:text-pink-600'
							)}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Stats */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
					{[
						{ label: 'Cart Items', value: 2 },
						{ label: 'Wishlist', value: 2 },
						{ label: 'Orders', value: 3 },
						{ label: 'Points', value: 1260 },
					].map((stat, index) => (
						<div
							key={index}
							className='bg-pink-300 hover:bg-pink-200 transition-colors duration-200 p-4 rounded-xl text-center shadow-sm'
						>
							<div className='text-xl font-bold text-pink-600'>
								{stat.value}
							</div>
							<div className='text-xs text-gray-500 mt-1'>{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
