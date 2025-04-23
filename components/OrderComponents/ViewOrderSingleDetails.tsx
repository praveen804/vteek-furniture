'use client';
import React from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
	Calendar,
	Clock,
	Package,
	CreditCard,
	Truck,
	MapPin,
	CheckCircle,
	XCircle,
	AlertCircle,
} from 'lucide-react';
import { format } from 'date-fns';
import { useViewOrderDetails } from '@/src/hooks/useViewOrderDetails';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const statusIcons = {
	Delivered: <CheckCircle className='h-4 w-4 text-green-500' />,
	Cancelled: <XCircle className='h-4 w-4 text-red-500' />,
	Processing: <AlertCircle className='h-4 w-4 text-yellow-500' />,
	Shipped: <Truck className='h-4 w-4 text-blue-500' />,
};

const ViewOrderSingleDetails: React.FC = () => {
	const { order, isLoading, error } = useViewOrderDetails();
	console.log(
		'🚀 ~ ViewOrderSingleDetails.tsx:39 ~ order:',
		order?.paymentMethod
	);

	if (isLoading) {
		return (
			<div className='container py-8 space-y-6'>
				<Skeleton className='bg-gray-500 h-10 w-1/3 mb-6' />
				<div className='grid gap-6'>
					<Skeleton className='bg-gray-500 h-80 w-full' />
					<Skeleton className='bg-gray-500 h-40 w-full' />
					<Skeleton className='bg-gray-500 h-40 w-full' />
				</div>
			</div>
		);
	}

	if (error || !order) {
		return (
			<div className='container py-8'>
				<Card className='text-center p-8'>
					<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
						<XCircle className='h-6 w-6 text-red-600' />
					</div>
					<h3 className='mt-4 text-lg font-medium text-gray-900'>
						Order not found
					</h3>
					<p className='mt-2 text-sm text-gray-500'>
						We couldn&apos;t find this order. Please check the order ID and try
						again.
					</p>
					<Button className='mt-6' asChild>
						<Link href='/orders'>View all orders</Link>
					</Button>
				</Card>
			</div>
		);
	}

	return (
		<div className='max-w-[90vw] m-auto py-8 space-y-6'>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl font-bold tracking-tight'>Order Details</h1>
				<Button variant='outline' asChild>
					<Link href='/orders'>Back to orders</Link>
				</Button>
			</div>

			<Card>
				<CardHeader>
					<div className='flex justify-between items-start'>
						<div>
							<CardTitle>Order #{order._id.slice(-8).toUpperCase()}</CardTitle>
							<div className='flex items-center gap-4 mt-2 text-sm text-muted-foreground'>
								<div className='flex items-center gap-1'>
									<Calendar className='h-4 w-4' />
									{format(new Date(order.createdAt), 'MMMM do, yyyy')}
								</div>
								<div className='flex items-center gap-1'>
									<Clock className='h-4 w-4' />
									{format(new Date(order.createdAt), 'h:mm a')}
								</div>
							</div>
						</div>
						<Badge
							variant={
								order.status === 'Delivered'
									? 'default'
									: order.status === 'Cancelled'
									? 'destructive'
									: 'secondary'
							}
							className='gap-1'
						>
							{statusIcons[order.status as keyof typeof statusIcons]}
							{order.status}
						</Badge>
					</div>
				</CardHeader>

				<CardContent className='space-y-6'>
					<div className='flex flex-wrap gap-2'>
						<Badge variant='outline' className='flex items-center gap-1'>
							<Package className='h-4 w-4' />
							{order.items.length} {order.items.length === 1 ? 'item' : 'items'}
						</Badge>
						<Badge variant='outline' className='flex items-center gap-1'>
							<CreditCard className='h-4 w-4' />
							{order.paymentMethod}
						</Badge>
					</div>

					<Separator />

					<div>
						<h3 className='font-medium mb-3'>Shipping Information</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='border rounded-lg p-4'>
								<div className='flex items-center gap-2 mb-2'>
									<MapPin className='h-4 w-4 text-muted-foreground' />
									<h4 className='font-medium'>Shipping Address</h4>
								</div>
								<div className='text-sm text-muted-foreground space-y-1'>
									<p>{order.shippingAddress?.name}</p>
									<p>{order.shippingAddress?.street}</p>
									<p>
										{order.shippingAddress?.city},{' '}
										{order.shippingAddress?.state}{' '}
										{order.shippingAddress?.postalCode}
									</p>
									<p>{order.shippingAddress?.country}</p>
									<p className='mt-2'>
										Phone: {order?.shippingAddress?.mobile}
									</p>
								</div>
							</div>

							<div className='border rounded-lg p-4'>
								<div className='flex items-center gap-2 mb-2'>
									<CreditCard className='h-4 w-4 text-muted-foreground' />
									<h4 className='font-medium'>Payment Method</h4>
								</div>
								<div className='text-sm text-muted-foreground space-y-1'>
									<p className='capitalize'>{order.paymentMethod}</p>
									{order.paymentMethod === 'credit_card' && (
										<p>Card ending in •••• {order.paymentMethod}</p>
									)}
									<p>
										Status:{' '}
										{order?.paymentMethod === 'COD'
											? 'Cash on Delivery'
											: 'Paid'}
									</p>
								</div>
							</div>
						</div>
					</div>

					<Separator />

					<div>
						<h3 className='font-medium mb-3'>Order Items</h3>
						<div className='space-y-4'>
							{order.items.map((item) => (
								<div
									key={item._id}
									className='border rounded-lg p-4 flex flex-col sm:flex-row gap-4'
								>
									<div className='relative w-24 h-24 rounded-md overflow-hidden'>
										<Image
											src={item.productId.image}
											alt={item.productId.title}
											fill
											className='object-cover'
										/>
									</div>
									<div className='flex-1'>
										<div className='flex justify-between'>
											<div>
												<p className='font-medium'>{item.productId.title}</p>
												<p className='text-sm text-muted-foreground'>
													{item.productId.brand}
												</p>
											</div>
											<p className='font-semibold'>
												${item.price * item.quantity}
											</p>
										</div>
										<div className='mt-2 text-sm text-muted-foreground'>
											<p>Qty: {item.quantity}</p>
											<p>Color: {item.color || 'N/A'}</p>
										</div>
										<div className='mt-2'>
											<Badge variant='outline' className='mr-2'>
												{item.productId.category}
											</Badge>
											<Badge variant='outline'>
												Rating: {item.productId.rating} ★
											</Badge>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='space-y-2'>
						<Separator />
						<div className='flex justify-end gap-5 font-bold text-lg'>
							<span>Total</span>
							<span>${order.totalAmount.toLocaleString('en-US')}</span>
						</div>
					</div>
				</CardContent>

				<CardFooter className='flex flex-col sm:flex-row justify-between container m-auto gap-4 border-t pt-6'>
					<div className='text-sm text-muted-foreground'>
						<p>Need help with your order?</p>
						<Button variant='link' className='p-0 h-auto' asChild>
							<Link href='/contact'>Contact customer support</Link>
						</Button>
					</div>
					{order.status === 'Shipped' && (
						<Button className='w-full sm:w-auto'>Track Package</Button>
					)}
					{order.status === 'Delivered' && (
						<Button variant='outline' className='w-full sm:w-auto'>
							Leave a Review
						</Button>
					)}
				</CardFooter>
			</Card>
		</div>
	);
};

export default ViewOrderSingleDetails;
