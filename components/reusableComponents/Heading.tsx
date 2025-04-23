'use client';
import React from 'react';
import { josefinSans } from '@/src/utils-function/fonts';
const Heading = ({ title }: { title: string }) => {
	return (
		<h2
			className={`${josefinSans.className} text-3xl font-bold text-custom-4 text-center`}
		>
			{title}{' '}
		</h2>
	);
};

export default Heading;
