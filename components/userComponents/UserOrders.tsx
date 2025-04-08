'use client';
import React from 'react';
import SettingAnimatedCard from './UserSetting/SettingAnimatedCard';
import { FiClock, FiHeart, FiShoppingBag, FiTruck } from 'react-icons/fi';
import { stats } from './userData';

const UserOrders = () => {
	return (
		<div className='space-y-6'>
			{/* Stats Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				<SettingAnimatedCard key='total-orders' className='flex items-center'>
					<div className='p-3 bg-blue-100 rounded-full'>
						<FiShoppingBag className='h-6 w-6 text-blue-600' />
					</div>
					<div className='ml-4'>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Total Orders
						</p>
						<h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
							{stats.total}
						</h3>
					</div>
				</SettingAnimatedCard>

				<SettingAnimatedCard key='pending' className='flex items-center'>
					<div className='p-3 bg-yellow-100 rounded-full'>
						<FiClock className='h-6 w-6 text-yellow-600' />
					</div>
					<div className='ml-4'>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Pending</p>
						<h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
							{stats.pending}
						</h3>
					</div>
				</SettingAnimatedCard>

				<SettingAnimatedCard key='delivered' className='flex items-center'>
					<div className='p-3 bg-green-100 rounded-full'>
						<FiTruck className='h-6 w-6 text-green-600' />
					</div>
					<div className='ml-4'>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Delivered
						</p>
						<h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
							{stats.delivered}
						</h3>
					</div>
				</SettingAnimatedCard>

				<SettingAnimatedCard key='wishlist' className='flex items-center'>
					<div className='p-3 bg-red-100 rounded-full'>
						<FiHeart className='h-6 w-6 text-red-600' />
					</div>
					<div className='ml-4'>
						<p className='text-sm text-gray-500 dark:text-gray-400'>Wishlist</p>
						<h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
							{stats.wishlist}
						</h3>
					</div>
				</SettingAnimatedCard>
			</div>

			{/* Recent Orders */}
			<SettingAnimatedCard key='recent-orders'>
				<div className='flex items-center justify-between mb-4'>
					<h2 className='text-xl font-semibold text-gray-800 dark:text-white'>
						Recent Orders
					</h2>
					<button className='text-blue-500 hover:text-blue-600 text-sm font-medium'>
						View All
					</button>
				</div>
				<div className='overflow-x-auto'>
					<table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
						<thead>
							<tr>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Order ID
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Product
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Date
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Status
								</th>
								<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Amount
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
							{stats.recentOrders.map((order) => (
								<tr key={order.id}>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
										#{order.id}
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
										{order.product}
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
										{new Date(order.date).toLocaleDateString()}
									</td>
									<td className='px-6 py-4 whitespace-nowrap'>
										<span
											className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${
												order.status === 'delivered'
													? 'bg-green-100 text-green-800'
													: order.status === 'pending'
													? 'bg-yellow-100 text-yellow-800'
													: 'bg-blue-100 text-blue-800'
											}`}
										>
											{order.status.charAt(0).toUpperCase() +
												order.status.slice(1)}
										</span>
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
										${order.amount.toFixed(2)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</SettingAnimatedCard>
		</div>
	);
};

export default UserOrders;
