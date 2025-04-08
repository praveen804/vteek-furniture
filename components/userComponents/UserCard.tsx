'use client';
import React from 'react';
import { FiStar, FiUser } from 'react-icons/fi';

export default function UserCard({setActiveTab, activeTab}: {setActiveTab: (tab: string) => void; activeTab: string;}) {
	return (
		<div className='flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md p-6 mb-6'>
			<div className='flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-6'>
				<div className='w-24 h-24 rounded-full object-cover border border-black bg-pink-600  flex flex-col justify-center items-center' >
          <span className="text-6xl font-bold" >v </span>
        </div>
				<div className='ml-4 md:ml-6'>
					<h1 className='text-2xl font-bold text-gray-800'>{'vikash'}</h1>
					<p className='text-gray-600 mb-1 flex items-center'>
						<FiUser className='mr-2' /> {'vikash@gmai.com'}
					</p>
					<div className='flex items-center text-sm text-pink-600'>
						<FiStar className='mr-1' />
						<span>{100} Loyalty Points</span>
					</div>
				</div>
			</div>

			<div className='w-full md:w-auto flex-1'>
				<div className='flex flex-wrap border-b border-gray-200'>
					{['overview', 'orders', 'settings'].map((tab, index) => (
						<button
							type='button'
							key={index}
							onClick={() => setActiveTab(tab)}
							className={`px-4 py-2 font-medium ${
								activeTab === tab
									? 'text-pink-600 border-b-2 border-pink-600'
									: 'text-gray-500'
							}`}
						>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</button>
					))}
				</div>

				<div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
					<div className='bg-pink-50 p-3 rounded-lg text-center'>
						<div className='text-pink-600 font-bold'>{2}</div>
						<div className='text-xs text-gray-500'>Cart Items</div>
					</div>
					<div className='bg-pink-50 p-3 rounded-lg text-center'>
						<div className='text-pink-600 font-bold'>{2}</div>
						<div className='text-xs text-gray-500'>Wishlist</div>
					</div>
					<div className='bg-pink-50 p-3 rounded-lg text-center'>
						<div className='text-pink-600 font-bold'>{3}</div>
						<div className='text-xs text-gray-500'>Orders</div>
					</div>
					<div className='bg-pink-50 p-3 rounded-lg text-center'>
						<div className='text-pink-600 font-bold'>{1260}</div>
						<div className='text-xs text-gray-500'>Points</div>
					</div>
				</div>
			</div>
		</div>
	);
}
