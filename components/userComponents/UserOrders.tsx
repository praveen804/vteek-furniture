'use client';
import React from 'react';
import SettingAnimatedCard from './UserSetting/SettingAnimatedCard';
import { FiClock, FiShoppingBag, FiTruck } from 'react-icons/fi';
import { useAppSelector } from '@/Redux-Toolkit/hooks';
import { RootState } from '@/Redux-Toolkit/store';
import { useGetUserOrdersQuery } from '@/Redux-Toolkit/features/order/orderApi';
import OrderHistory from '@/components/Order-components/OrderHistory';

const UserOrders = () => {
	const { user } = useAppSelector((state: RootState) => state.auth);
	const userId = user?._id ?? ' ';
	const { data, isLoading } = useGetUserOrdersQuery(userId);
	console.log(
		'🚀 ~ OrderContainer.tsx:11 ~ data:',
		data?.orders.filter((value) => value.status === 'Pending').length
	);

	return (
		<div className='space-y-6'>
			{/* Stats Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<SettingAnimatedCard key='total-orders' className='flex items-center'>
					<div className='p-3 bg-blue-100 rounded-full'>
						<FiShoppingBag className='h-6 w-6 text-blue-600' />
					</div>
					<div className='ml-4'>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							Total Orders
						</p>
						<h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
							{data?.orders?.length}
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
							{data?.orders.filter((value) => value.status === 'Pending')
								.length || 0}
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
							{data?.orders.filter((value) => value.status === 'Delivered')
								.length || 0}{' '}
						</h3>
					</div>
				</SettingAnimatedCard>
			</div>

			{/* Recent Orders */}

			<OrderHistory orders={data?.orders} isLoading={isLoading} />
		</div>
	);
};

export default UserOrders;
