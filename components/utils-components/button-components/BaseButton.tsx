'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { clsx } from 'clsx';

interface BaseButtonProps {
onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
	baseChildren: React.ReactNode;
	ariaLabel?: string;
	className?: string;
	size?: 'default' | 'sm' | 'lg'|'icon';
	type: 'button' | 'submit' | 'reset';
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
	type = 'button',
}) => {
	return (
		<Button
			type={type}
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
