'use client';
import React from 'react';
import {
	FiUser,
	FiMapPin,
	FiEdit2,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import ReviewSingleUser from "../review-components/ReviewSingleUser";

const UserOverview = () => {



	// Mock data for recent activity
	const recentActivity = [
		{
			id: 1,
			action: 'Account details updated',
			date: '2 hours ago',
			icon: <FiEdit2 className='text-gray-500' />,
		},
		{
			id: 2,
			action: 'Added new shipping address',
			date: '1 day ago',
			icon: <FiMapPin className='text-gray-500' />,
		},
		{
			id: 3,
			action: 'Changed password',
			date: '3 days ago',
			icon: <FiUser className='text-gray-500' />,
		},
	];

	return (
		<div className='space-y-6'>



			{/* Recent Activity */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.2 }}
				className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'
			>
				<div className='p-6'>
					<h3 className='text-lg font-semibold text-gray-800 mb-4'>
						Recent Activity
					</h3>
					<div className='space-y-4'>
						{recentActivity.map((activity) => (
							<div
								key={activity.id}
								className='flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0'
							>
								<div className='p-2 bg-gray-100 rounded-lg mr-4'>
									{activity.icon}
								</div>
								<div className='flex-1'>
									<p className='text-sm font-medium text-gray-800'>
										{activity.action}
									</p>
									<p className='text-xs text-gray-500 mt-1'>{activity.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
			<ReviewSingleUser  />
		</div>
	);
};

export default UserOverview;
