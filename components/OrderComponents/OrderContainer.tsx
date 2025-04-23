'use client';
import { useGetUserOrdersQuery } from '@/reducer/features/order/orderApi';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import React from 'react';
import OrderHistory from './OrderHistory';

const OrderContainer = () => {
	const { user } = useAppSelector((state: RootState) => state.auth);
	const userId = user?._id ?? ' ';
	const { data, isLoading } = useGetUserOrdersQuery(userId);
	console.log('🚀 ~ OrderContainer.tsx:11 ~ data:', data?.orders);

	return (
		<div>
			<OrderHistory orders={data?.orders} isLoading={isLoading} />
		</div>
	);
};

export default OrderContainer;
