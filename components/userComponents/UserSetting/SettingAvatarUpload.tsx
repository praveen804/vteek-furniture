'use client';

import Image from "next/image";
import { useState, useCallback } from 'react';
import { FiUser, FiUpload } from 'react-icons/fi';

type AvatarUploadProps = {
	onFileChange: (file: File | null) => void;
	initialAvatar?: string | null;
};

export const SettingAvatarUpload = ({
	onFileChange,
	initialAvatar = null,
}: AvatarUploadProps) => {
	const [avatar, setAvatar] = useState<string | null>(initialAvatar);

	const handleFileChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0] || null;
			if (file) {
				const reader = new FileReader();
				reader.onloadend = () => {
					const result = reader.result as string;
					setAvatar(result);
					onFileChange(file);
				};
				reader.readAsDataURL(file);
			}
		},
		[onFileChange]
	);

	return (
		<div className='relative mb-4'>
			<div className='w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden'>
				{avatar ? (
					<Image
						src={avatar}
						alt='User avatar'
						className='w-full h-full object-cover'
						width={96}
						height={96}
					/>
				) : (
					<div className='w-full h-full flex items-center justify-center text-gray-400'>
						<FiUser size={32} />
					</div>
				)}
			</div>
			<label className='absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600'>
				<FiUpload />
				<label htmlFor='avatar' className='sr-only'>
					{' '}
					avatar
				</label>
				<input
					id='avatar'
					type='file'
					className='hidden'
					accept='image/*'
					onChange={handleFileChange}
				/>
			</label>
		</div>
	);
};
