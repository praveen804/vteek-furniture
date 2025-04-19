'use client';
import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
	Calendar,
	Clock,
	Package,
	CreditCard,
	Truck,
	CheckCircle2,
	ChevronDown,
	ChevronUp,
	Star,
	MessageSquare,
	RefreshCw,
} from 'lucide-react';
import { format } from 'date-fns';
import { OrderDetails } from '@/utils/types/orderType';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from '@/components/ui/tooltip';
import OrderHistoryLoading from "./OrderHistoryLoading";
import EmptyOrderState from "./EmptyOrderState";

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
		return (
				<OrderHistoryLoading />
		);
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			{orders && (
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Your Orders</h1>
					<div className='flex gap-2'>
						<Button variant='outline' size='sm'>
							<RefreshCw className='mr-2 h-4 w-4' />
							Refresh
						</Button>
						<Button variant='outline' size='sm'>
							Filter
						</Button>
					</div>
				</div>
			)}

			{!orders || orders?.length === 0 ? (
				<EmptyOrderState />
			) : (
				<div className='space-y-6'>
					{orders?.map((order) => (
						<Card
							key={order._id}
							className='overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200'
						>
							<CardHeader
								className={`p-4 sm:p-6 cursor-pointer transition-colors ${
									expandedOrder === order._id
										? 'bg-primary/5'
										: 'bg-gray-50 hover:bg-gray-100'
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
												<span>
													{format(new Date(order.createdAt), 'MMM dd, yyyy')}
												</span>
											</div>
											<div className='flex items-center gap-1'>
												<Clock className='h-4 w-4' />
												<span>
													{format(new Date(order.createdAt), 'h:mm a')}
												</span>
											</div>
										</div>
									</div>

									<div className='flex flex-wrap gap-3'>
										<Badge
											variant='outline'
											className='flex items-center gap-1'
										>
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

										<Badge
											variant='outline'
											className='flex items-center gap-1'
										>
											<CreditCard className='h-4 w-4' />
											<span>{order.paymentMethod}</span>
										</Badge>

										<Button variant='ghost' size='icon' className='h-8 w-8'>
											{expandedOrder === order._id ? (
												<ChevronUp className='h-4 w-4' />
											) : (
												<ChevronDown className='h-4 w-4' />
											)}
										</Button>
									</div>
								</div>

								{expandedOrder === order._id && (
									<div className='mt-4'>
										<div className='flex items-center gap-3 mb-2'>
											<span className='text-sm font-medium text-gray-700'>
												Order Progress
											</span>
											<span className='text-xs text-gray-500'>
												{getStatusProgress(order.status)}% complete
											</span>
										</div>
										<Progress
											value={getStatusProgress(order.status)}
											className='h-2'
										/>
										<div className='flex justify-between text-xs text-gray-500 mt-1'>
											<span>Placed</span>
											<span>Processed</span>
											<span>Shipped</span>
											<span>Delivered</span>
										</div>
									</div>
								)}
							</CardHeader>

							{expandedOrder === order._id && (
								<>
									<Separator />
									<CardContent className='p-0'>
										<ScrollArea className='h-64'>
											<div className='p-4 sm:p-6 space-y-6'>
												{order.items.map((item) => (
													<div key={item._id} className='flex gap-4 group'>
														<div className='relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 transition-all duration-300 group-hover:border-primary'>
															<Image
																fill
																src={item.productId.image}
																alt={item.productId.title}
																className='h-full w-full object-cover object-center'
															/>
															<div
																className='absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white shadow-sm'
																style={{ backgroundColor: item.color }}
															/>
															{order.status === 'Delivered' &&
																!ratedItems[item._id] && (
																	<div className='absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
																		<Button
																			variant='secondary'
																			size='sm'
																			className='shadow-md'
																			onClick={(e) => {
																				e.stopPropagation();
																				handleRateItem(item._id, 5);
																			}}
																		>
																			<Star className='h-4 w-4 mr-2' />
																			Rate Item
																		</Button>
																	</div>
																)}
														</div>

														<div className='flex flex-1 flex-col'>
															<div className='flex justify-between'>
																<h3 className='text-sm font-medium text-gray-900 line-clamp-2'>
																	{item.productId.title}
																</h3>
																<p className='ml-4 text-sm font-medium text-gray-900'>
																	${(item.price * item.quantity).toFixed(2)}
																</p>
															</div>

															<div className='flex-1 space-y-1 mt-1 text-sm text-gray-500'>
																<p>Qty: {item.quantity}</p>
																<p>
																	Color:{' '}
																	<span className='capitalize'>
																		{item.color.replace('#', '')}
																	</span>
																</p>
																<p className='flex items-center gap-1'>
																	<Truck className='h-4 w-4' />
																	<span>Free delivery</span>
																</p>

																{ratedItems[item._id] ? (
																	<div className='flex items-center gap-1 text-yellow-500'>
																		<Star className='h-4 w-4 fill-current' />
																		<span>
																			You rated {ratedItems[item._id]}/5
																		</span>
																	</div>
																) : order.status === 'Delivered' ? (
																	<div className='flex gap-1 mt-2'>
																		{[1, 2, 3, 4, 5].map((star) => (
																			<Star
																				key={star}
																				className='h-4 w-4 text-gray-300 cursor-pointer hover:text-yellow-500'
																				onClick={() =>
																					handleRateItem(item._id, star)
																				}
																			/>
																		))}
																	</div>
																) : null}
															</div>
														</div>
													</div>
												))}
											</div>
										</ScrollArea>
									</CardContent>
								</>
							)}

							<Separator />
							<CardFooter className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 bg-gray-50'>
								<div className='space-y-1'>
									<p className='text-sm text-gray-600'>Order Total</p>
									<p className='text-xl font-semibold text-gray-900'>
										${order.totalAmount.toFixed(2)}
									</p>
								</div>

								<div className='flex gap-3'>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger asChild>
												<Button variant='outline' size='sm'>
													<MessageSquare className='h-4 w-4 mr-2' />
													Support
												</Button>
											</TooltipTrigger>
											<TooltipContent>
												<p>Contact support about this order</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>

									{order.status === 'Delivered' ? (
										<Button
											size='sm'
											className='gap-1 bg-green-600 hover:bg-green-700'
										>
											<CheckCircle2 className='h-4 w-4' />
											Buy Again
										</Button>
									) : (
										<Button size='sm' className='gap-1'>
											<Truck className='h-4 w-4' />
											Track Order
										</Button>
									)}
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};

export default OrderHistory;
