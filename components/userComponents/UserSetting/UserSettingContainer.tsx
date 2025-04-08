// app/user-settings/page.tsx
'use client';

import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
	FiUser,
	FiLock,
	FiBell,
	FiCreditCard,
	FiMoon,
	FiSun,
} from 'react-icons/fi';
import { UserData, NotificationSettings, Tab } from './types';
import SettingAnimatedCard from "./SettingAnimatedCard";
import { SettingAvatarUpload } from "./SettingAvatarUpload";
import { SettingProfileTab } from "./SettingProfileTab";


const tabs: Tab[] = [
	{ id: 'profile', label: 'Profile', icon: <FiUser className='mr-2' /> },
	{ id: 'security', label: 'Security', icon: <FiLock className='mr-2' /> },
	{
		id: 'notifications',
		label: 'Notifications',
		icon: <FiBell className='mr-2' />,
	},
	{ id: 'billing', label: 'Billing', icon: <FiCreditCard className='mr-2' /> },
];

export default function UserSettingContainer() {
	const [activeTab, setActiveTab] = useState<string>('profile');
	const [darkMode, setDarkMode] = useState<boolean>(false);
	const [userData, setUserData] = useState<UserData>({
		name: '',
		email: '',
		phone: '',
		address: '',
		bio: '',
	});
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [notifications, setNotifications] = useState<NotificationSettings>({
		email: true,
		sms: false,
		promotions: true,
	});
	const [isSaving, setIsSaving] = useState<boolean>(false);
	const [avatarFile, setAvatarFile] = useState<File | null>(null);

	const handleSave = async () => {
		setIsSaving(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));
			// In a real app, you would send the data to your API here
			console.log('Data saved:', { userData, notifications, avatarFile });
		} catch (error) {
			console.error('Error saving data:', error);
		} finally {
			setIsSaving(false);
		}
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case 'profile':
				return (
					<SettingProfileTab
						userData={userData}
						onUserDataChange={setUserData}
						onSave={handleSave}
						isSaving={isSaving}
					/>
				);
			// case 'security':
			// 	return <SecurityTab />;
			// case 'notifications':
			// 	return (
			// 		<NotificationsTab
			// 			notifications={notifications}
			// 			setNotifications={setNotifications}
			// 		/>
			// 	);
			// case 'billing':
			// 	return <BillingTab />;
			default:
				return null;
		}
	};

	return (
		<>
			<Head>
				<title>User Settings | Your E-Commerce Site</title>
				<meta name='description' content='Manage your account settings' />
			</Head>

			<div className='min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className='max-w-6xl mx-auto'
				>
					<h1 className='text-3xl font-bold text-gray-800 dark:text-white mb-6'>
						Account Settings
					</h1>

					<div className='flex flex-col md:flex-row gap-6'>
						{/* Sidebar Navigation */}
						<div className='w-full md:w-64'>
							<SettingAnimatedCard className='sticky top-6'>
								<div className='flex flex-col items-center mb-6'>
									<SettingAvatarUpload
										onFileChange={setAvatarFile}
										initialAvatar={null}
									/>
									<h2 className='text-lg font-semibold text-gray-800 dark:text-white'>
										{userData.name || 'Anonymous User'}
									</h2>
									<p className='text-sm text-gray-500 dark:text-gray-400'>
										{userData.email || 'user@example.com'}
									</p>
								</div>

								<nav className='space-y-1'>
									{tabs.map((tab) => (
										<button
											key={tab.id}
											onClick={() => setActiveTab(tab.id)}
											className={`flex items-center w-full px-4 py-2 text-sm rounded-md transition-colors ${
												activeTab === tab.id
													? 'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400'
													: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
											}`}
										>
											{tab.icon}
											{tab.label}
										</button>
									))}
								</nav>

								<div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-700'>
									<button
										onClick={() => setDarkMode(!darkMode)}
										className='flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700'
									>
										<span>Dark Mode</span>
										{darkMode ? <FiMoon /> : <FiSun />}
									</button>
								</div>
							</SettingAnimatedCard>
						</div>

						{/* Main Content */}
						<div className='flex-1'>
							<AnimatePresence mode='wait'>
								{renderTabContent()}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}
