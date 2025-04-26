'use client';
import Image from 'next/image';
import React from 'react';
import { clsx } from 'clsx';

interface ImageOptimizedProps {
	src: string;
	alt: string;
	priority?: boolean;
	quality?: number;
	sizes?: string;
	className?: string;
	wrapperClassName?: string;
	style?: React.CSSProperties;
	objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export const ImageOptimized = ({
	src,
	alt,
	priority = false,
	quality = 75,
	sizes = '100vw',
	className,
	wrapperClassName,
}: ImageOptimizedProps) => {
	return (
		<div className={clsx('relative overflow-hidden', wrapperClassName)}>
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				priority={priority}
				quality={quality}
				className={clsx('object-cover', className)} // fallback to object-cover
				loading={priority ? 'eager' : 'lazy'}
			/>
		</div>
	);
};
