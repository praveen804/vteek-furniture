'use client';

import { FormFieldProps } from './types';

export const SettingFormField = ({
	label,
	id,
	type = 'text',
	value,
	onChange,
	placeholder = '',
	required = false,
	className = '',
}: FormFieldProps) => {
	const InputComponent = type === 'textarea' ? 'textarea' : 'input';

	return (
		<div className={`mb-4 ${className}`}>
			<label
				htmlFor={id}
				className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
			>
				{label} {required && <span className='text-red-500'>*</span>}
			</label>
			<InputComponent
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				aria-label={label}
				className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white'
				{...(type === 'textarea' ? { rows: 4 } : {})}
			/>
		</div>
	);
};
