'use client';
import { addColor } from '@/reducer/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import React, { useEffect } from 'react';

const ProductColor = ({ color }: { color: string[] }) => {
	const dispatch = useAppDispatch();
	const { colors } = useAppSelector((state: RootState) => state.cart);

	useEffect(() => {
		if (color && color.length > 0) {
			dispatch(addColor(color[0]));
		}
	}, [color, dispatch]);

	return (
		<section className='hidden lg:flex flex-row items-center gap-1 md:gap-4'>
			<span className='text-gray-600 font-medium'>Color</span>
			<div className='flex gap-1 lg:gap-4 items-center lg:ps-5'>
				{color.map((item, index) => (
					<div
						key={index}
						className={`w-5 lg:w-8 h-5 lg:h-8 rounded-full border-2 border-gray-600 cursor-pointer transition duration-200 ease-in-out hover:scale-105 ${
							item === colors && ' border-4 lg:border-8 border-pink-600 '
						}`}
						style={{ backgroundColor: item }}
						onClick={() => dispatch(addColor(item))}
						aria-label={`Select color ${item}`}
					></div>
				))}
			</div>
		</section>
	);
};

export default ProductColor;
