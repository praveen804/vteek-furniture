// components/ExpandedOrderDetails.tsx
'use client';
import React from 'react';
import { CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { Star, Truck } from 'lucide-react';
import { OrderDetails } from '@/utils/types/orderType';

interface ExpandedOrderDetailsProps {
	order: OrderDetails;
	ratedItems: Record<string, number>;
	handleRateItem: (itemId: string, rating: number) => void;
	getStatusProgress: (status: string) => number;
}

const ExpandedOrderDetails: React.FC<ExpandedOrderDetailsProps> = ({
	order,
	ratedItems,
	handleRateItem,
	getStatusProgress,
}) => {
	return (
		<>
			<div className='mt-4 px-4 sm:px-6'>
				<div className='flex items-center gap-3 mb-2'>
					<span className='text-sm font-medium text-gray-700'>
						Order Progress
					</span>
					<span className='text-xs text-gray-500'>
						{getStatusProgress(order.status)}% complete
					</span>
				</div>
				<Progress value={getStatusProgress(order.status)} className='h-2' />
				<div className='flex justify-between text-xs text-gray-500 mt-1'>
					<span>Placed</span>
					<span>Processed</span>
					<span>Shipped</span>
					<span>Delivered</span>
				</div>
			</div>

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
									{order.status === 'Delivered' && !ratedItems[item._id] && (
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
												<span>You rated {ratedItems[item._id]}/5</span>
											</div>
										) : order.status === 'Delivered' ? (
											<div className='flex gap-1 mt-2'>
												{[1, 2, 3, 4, 5].map((star) => (
													<Star
														key={star}
														className='h-4 w-4 text-gray-300 cursor-pointer hover:text-yellow-500'
														onClick={() => handleRateItem(item._id, star)}
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
	);
};

export default ExpandedOrderDetails;
