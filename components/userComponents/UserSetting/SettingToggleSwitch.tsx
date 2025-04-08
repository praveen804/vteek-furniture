'use client';

import { ToggleSwitchProps } from './types';

export const ToggleSwitch = ({
	enabled,
	setEnabled,
	label,
	className = '',
}: ToggleSwitchProps) => (
	<div className={`flex items-center justify-between mb-4 ${className}`}>
		<span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
			{label}
		</span>
		<button
			type='button'
			className={`${
				enabled ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
			} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
			onClick={() => setEnabled(!enabled)}
			aria-pressed={enabled}
			aria-label={label}
		>
			<span
				className={`${
					enabled ? 'translate-x-6' : 'translate-x-1'
				} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
			/>
		</button>
	</div>
);
