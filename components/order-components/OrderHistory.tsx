'use client';
import React, { useState } from 'react';
import { OrderDetails } from '@/utils/types/orderType';
import OrderHistoryLoading from './OrderHistoryLoading';
import EmptyOrderState from './EmptyOrderState';
import OrderHistoryHeader from "./OrderHistoryHeader";
import OrderHistoryCard from "./OrderHistoryCard";


interface OrderCardProps {
	orders: OrderDetails[] | undefined;
	isLoading?: boolean;
}

const OrderHistory: React.FC<OrderCardProps> = ({ orders, isLoading }) => {
	const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
	const [ratedItems, setRatedItems] = useState<Record<string, number>>({});

	const toggleOrderExpand = (orderId: string) => {
		setExpandedOrder(expandedOrder === orderId ? null : orderId);
	};
	const handleRateItem = (itemId: string, rating: number) => {
		setRatedItems((prev) => ({ ...prev, [itemId]: rating }));
	};

	const getStatusProgress = (status: string) => {
		switch (status) {
			case 'Pending':
				return 25;
			case 'Processing':
				return 50;
			case 'Shipped':
				return 75;
			case 'Delivered':
				return 100;
			default:
				return 0;
		}
	};

	if (isLoading) {
		return <OrderHistoryLoading />;
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<OrderHistoryHeader orders={orders} />

			{!orders || orders?.length === 0 ? (
				<EmptyOrderState />
			) : (
				<div className='space-y-6'>
					{orders?.map((order) => (
						<OrderHistoryCard
							key={order._id}
							order={order}
							expandedOrder={expandedOrder}
							toggleOrderExpand={toggleOrderExpand}
							ratedItems={ratedItems}
							handleRateItem={handleRateItem}
							getStatusProgress={getStatusProgress}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default OrderHistory;
