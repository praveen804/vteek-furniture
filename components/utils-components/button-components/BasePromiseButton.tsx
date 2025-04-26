'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { clsx } from 'clsx'; // Optional: if you want className merging flexibility

interface BasePromiseButtonProps {
	onClick: () => Promise<void>;
	isDisabled?: boolean;
	isLoading?: boolean;
	baseChildren: React.ReactNode;
	ariaLabel?: string;
	className?: string;
	size?: 'default' | 'sm' | 'lg';
	variant?:
		| 'default'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| 'link';
}

const BasePromiseButton: React.FC<BasePromiseButtonProps> = ({
	onClick,
	isDisabled = false,
	isLoading = false,
	baseChildren,
	ariaLabel = 'BasePromiseButton',
	className = '',
	variant = 'default',
	size = 'default',
}) => {
	return (
		<Button
			variant={variant}
			onClick={onClick}
			disabled={isDisabled || isLoading}
			aria-label={ariaLabel}
			aria-busy={isLoading}
			aria-disabled={isDisabled || isLoading}
			aria-live='polite'
			className={clsx(className)}
			size={size} 
		>
			{baseChildren}
		</Button>
	);
};

export default BasePromiseButton;
