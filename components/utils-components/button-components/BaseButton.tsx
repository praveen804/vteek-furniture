'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { clsx } from 'clsx';

interface BaseButtonProps {
	onClick: () => void;
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

const BaseButton: React.FC<BaseButtonProps> = ({
	onClick,
	baseChildren,
	ariaLabel = 'BaseButton',
	className = '',
	variant = 'default',
	size = 'default',
}) => {
	return (
		<Button
			variant={variant}
			onClick={onClick}
			aria-label={ariaLabel}
			aria-live='polite'
			className={clsx(className)}
			size={size}
		>
			{baseChildren}
		</Button>
	);
};

export default BaseButton;
