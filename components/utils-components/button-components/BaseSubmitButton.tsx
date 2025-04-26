'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface BaseSubmitButtonProps {
	onClick?: () => void;
	disabled?: boolean;
	label?: string;
	loadingLabel?: string;
	size?: 'default' | 'sm' | 'lg';
	className?: string;
	variant?:
		| 'default'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| 'link';
	ariaLabel?: string;
	baseChildren: React.ReactNode;
}

const BaseSubmitButton: React.FC<BaseSubmitButtonProps> = ({
	onClick,
	disabled = false,
	size = 'lg',
	className = '',
	variant = 'default',
	ariaLabel = 'Submit Button',
  baseChildren,
}) => {

	return (
		<Button
			type='submit'
			onClick={onClick}
			className={` ${className}`}
			disabled={disabled }
			variant={variant}
			size={size}
			aria-label={ariaLabel}
		>
			{baseChildren}
		</Button>
	);
};

export default BaseSubmitButton;
