'use client';
import React, { useState } from 'react';
import UserOverview from './UserOverview';
import UserOrders from './UserOrders';
import UserSettingContainer from './UserSetting/UserSettingContainer';
import UserCard from './UserCard';

const UserContainer = () => {
	const [activeTab, setActiveTab] = useState('overview');

	return (
		<div className='min-h-screen bg-gray-50 p-4 md:p-8'>
			<div className='max-w-6xl mx-auto'>
				{/* user card */}
				<UserCard setActiveTab={setActiveTab} activeTab={activeTab} />

				{/* Main Content */}
				{activeTab === 'overview' && <UserOverview />}
				{activeTab === 'orders' && <UserOrders />}
				{activeTab === 'settings' && <UserSettingContainer />}
			</div>
		</div>
	);
};

export default UserContainer;
