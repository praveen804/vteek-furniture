'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

interface BaseLinkButtonProps {
	href: string;
	buttonLinkChildren?: React.ReactNode;
	className?: string;
	ariaLabel?: string;
	size?: 'default' | 'sm' | 'lg';
	icon: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	variant?:
		| 'default'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| 'link';
}

const BaseLinkIconButton: React.FC<BaseLinkButtonProps> = ({
	href,
	buttonLinkChildren = 'View Product',
	className = '',
	variant = 'default',
	ariaLabel,
	size = 'default',
	icon,
	type = 'button',
}) => {
	return (
		<div className=''>
			<Button
				type={type}
				size={size}
				asChild
				className={` ${className}`}
				variant={variant}
				aria-label={ariaLabel}
			>
				<Link href={href}>
					{icon}
					{buttonLinkChildren}
				</Link>
			</Button>
		</div>
	);
};

export default BaseLinkIconButton;
