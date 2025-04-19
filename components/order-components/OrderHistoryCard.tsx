'use client';
import React from 'react';
import {Calendar,Clock,Package,CreditCard,ChevronDown,ChevronUp,} from 'lucide-react';
import { format } from 'date-fns';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ExpandedOrderDetails from './ExpandedOrderDetails';
import OrderHistoryFooter from './OrderHistoryFooter';
import { OrderDetails } from '@/utils/types/orderType';

interface OrderHistoryCardProps {
	order: OrderDetails;
	expandedOrder: string | null;
	toggleOrderExpand: (orderId: string) => void;
	ratedItems: Record<string, number>;
	handleRateItem: (itemId: string, rating: number) => void;
	getStatusProgress: (status: string) => number;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
	order,
	expandedOrder,
	toggleOrderExpand,
	ratedItems,
	handleRateItem,
	getStatusProgress,
}) => {
	const isExpanded = expandedOrder === order._id;

	return (
		<Card
			className='overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200'
			key={order._id}
		>
			<CardHeader
				className={`p-4 sm:p-6 cursor-pointer transition-colors ${
					isExpanded ? 'bg-primary/5' : 'bg-gray-50 hover:bg-gray-100'
				}`}
				onClick={() => toggleOrderExpand(order._id)}
			>
				<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
					<div className='flex-1'>
						<div className='flex items-center gap-3'>
							<CardTitle className='text-lg font-semibold'>
								Order #{order._id.slice(-6).toUpperCase()}
							</CardTitle>
							{order.status === 'Delivered' && (
								<Badge variant='default' className='animate-pulse'>
									New
								</Badge>
							)}
						</div>
						<div className='flex items-center gap-4 mt-2 text-sm text-gray-600'>
							<div className='flex items-center gap-1'>
								<Calendar className='h-4 w-4' />
								<span>{format(new Date(order.createdAt), 'MMM dd, yyyy')}</span>
							</div>
							<div className='flex items-center gap-1'>
								<Clock className='h-4 w-4' />
								<span>{format(new Date(order.createdAt), 'h:mm a')}</span>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap gap-3'>
						<Badge variant='outline' className='flex items-center gap-1'>
							<Package className='h-4 w-4' />
							<span>
								{order.items.length}{' '}
								{order.items.length === 1 ? 'item' : 'items'}
							</span>
						</Badge>

						<Badge
							variant={
								order.status === 'Delivered'
									? 'default'
									: order.status === 'Cancelled'
									? 'destructive'
									: 'secondary'
							}
						>
							{order.status}
						</Badge>

						<Badge variant='outline' className='flex items-center gap-1'>
							<CreditCard className='h-4 w-4' />
							<span>{order.paymentMethod}</span>
						</Badge>

						<Button variant='ghost' size='icon' className='h-8 w-8'>
							{isExpanded ? (
								<ChevronUp className='h-4 w-4' />
							) : (
								<ChevronDown className='h-4 w-4' />
							)}
						</Button>
					</div>
				</div>
			</CardHeader>

			{isExpanded && (
				<ExpandedOrderDetails
					order={order}
					ratedItems={ratedItems}
					handleRateItem={handleRateItem}
					getStatusProgress={getStatusProgress}
				/>
			)}

			<Separator />
			<OrderHistoryFooter status={order.status} amount={order.totalAmount} />
		</Card>
	);
};

export default OrderHistoryCard;
