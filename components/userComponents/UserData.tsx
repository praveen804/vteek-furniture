'use client';
import { useGetUserQuery } from '@/Redux-Toolkit/features/auth/authApi';
import React from 'react';
import LogoutButton from '../reusableComponents/LogoutButton';

const UserData = () => {
	// const { error, isLoading, user } = useGetUserData();
	const { isError, isLoading, data: user } = useGetUserQuery('Auth');

	return (
		<div className='w-full min-h-screen bg-gray-200 flex items-center justify-center'>
			{isLoading ? (
				<p className='text-gray-700 text-lg'>Loading user data...</p>
			) : isError ? (
				<p className='text-red-500 text-lg'>Something went wrong</p>
			) : user ? (
				<div className='bg-white shadow-md rounded p-6 max-w-md w-full flex flex-col gap-2 items-center'>
					<h1 className='text-2xl font-semibold mb-4'>User Details</h1>
					<p className='text-gray-800'>
						<strong>UserId:</strong> {user.result._id}
					</p>
					<p className='text-gray-800'>
						<strong>Name:</strong> {user.result.name}
					</p>
					<p className='text-gray-800'>
						<strong>Email:</strong> {user.result.email}
					</p>

					{user.result.phone && (
						<p className='text-gray-800'>
							<strong>Phone:</strong> {user.result.phone}
						</p>
					)}
					<LogoutButton className='your-class-name' />
				</div>
			) : (
				<p className='text-gray-700 text-lg'>No user data available.</p>
			)}
		</div>
	);
};

export default UserData;
