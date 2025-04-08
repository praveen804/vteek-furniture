'use client';
import { UserData } from './types';
import { SettingFormField } from "./SettingFormField";
import SettingAnimatedCard from "./SettingAnimatedCard";

type ProfileTabProps = {
	userData: UserData;
	onUserDataChange: (data: UserData) => void;
	onSave: () => Promise<void>;
	isSaving: boolean;
};

export const SettingProfileTab = ({
	userData,
	onUserDataChange,
	onSave,
	isSaving,
}: ProfileTabProps) => {
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		onUserDataChange({ ...userData, [id]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await onSave();
	};

	return (
		<SettingAnimatedCard key='profile'>
			<h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-6'>
				Profile Information
			</h2>
			<form onSubmit={handleSubmit}>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<SettingFormField
						label='Full Name'
						id='name'
						value={userData.name}
						onChange={handleInputChange}
						placeholder='John Doe'
						required
					/>
					<SettingFormField
						label='Email'
						id='email'
						type='email'
						value={userData.email}
						onChange={handleInputChange}
						placeholder='john@example.com'
						required
					/>
					<SettingFormField
						label='Phone Number'
						id='phone'
						type='tel'
						value={userData.phone}
						onChange={handleInputChange}
						placeholder='+1 (555) 123-4567'
					/>
					<SettingFormField
						label='Address'
						id='address'
						value={userData.address}
						onChange={handleInputChange}
						placeholder='123 Main St, City, Country'
					/>
				</div>
				<SettingFormField
					label='Bio'
					id='bio'
					type='textarea'
					value={userData.bio}
					onChange={handleInputChange}
					placeholder='Tell us about yourself...'
				/>
				<div className='mt-6 flex justify-end'>
					<button
						type='submit'
						disabled={isSaving}
						className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center'
					>
						{isSaving ? (
							<>
								<svg
									className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
									></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									></path>
								</svg>
								Saving...
							</>
						) : (
							'Save Changes'
						)}
					</button>
				</div>
			</form>
		</SettingAnimatedCard>
	);
};
