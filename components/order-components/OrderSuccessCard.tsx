'use client';
import React from 'react';
import { CheckCircle, Clock, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useViewOrderDetails } from '@/hooks/useViewOrderDetails';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const OrderSuccessCard = () => {
	const { error, isLoading, order } = useViewOrderDetails();
	const router = useRouter();

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	if (isLoading) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
				<div className='w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden p-8'>
					<div className='flex flex-col space-y-4'>
						<Skeleton className='h-12 w-12 mx-auto rounded-full' />
						<Skeleton className='h-8 w-3/4 mx-auto' />
						<Skeleton className='h-4 w-5/6 mx-auto' />
						<div className='space-y-3 mt-6'>
							<Skeleton className='h-20 w-full rounded-lg' />
						</div>
						<div className='space-y-2 mt-4'>
							<Skeleton className='h-4 w-full' />
							<Skeleton className='h-4 w-5/6' />
						</div>
						<div className='flex flex-col space-y-3 mt-6'>
							<Skeleton className='h-10 w-full rounded-lg' />
							<Skeleton className='h-10 w-full rounded-lg' />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
				<div className='w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden p-8 text-center'>
					<div className='text-red-500 mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-12 w-12 mx-auto'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</div>
					<h2 className='text-xl font-semibold text-gray-800 mb-2'>
						Error Loading Order
					</h2>
					<p className='text-gray-600 mb-6'>
						{ 'Failed to load order details.'}
					</p>
					<Button onClick={() => window.location.reload()} className='w-full'>
						Try Again
					</Button>
				</div>
			</div>
		);
	}

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={containerVariants}
			className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'
		>
			<motion.div
				variants={itemVariants}
				className='w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden p-8'
			>
				<motion.div
					variants={itemVariants}
					className='flex justify-center mb-6'
				>
					<div className='relative'>
						<div className='absolute inset-0 bg-green-200 rounded-full blur-md opacity-75 animate-pulse'></div>
						<div className='relative bg-green-100 p-5 rounded-full'>
							<CheckCircle className='h-16 w-16 text-green-600' />
						</div>
					</div>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className='text-3xl font-bold text-gray-800 mb-3 text-center'
				>
					Order Confirmed!
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className='text-gray-600 mb-8 text-center max-w-md mx-auto'
				>
					Thank you for your purchase. We have sent a confirmation email with all
					the details.
				</motion.p>

				<motion.div
					variants={itemVariants}
					className='bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 space-y-4'
				>
					<div className='flex items-center justify-between'>
						<span className='text-gray-500'>Order Number</span>
						<span className='font-medium text-gray-800'>
							#{order?._id.slice(-8).toUpperCase()}
						</span>
					</div>

					<div className='flex items-center justify-between'>
						<span className='text-gray-500'>Date & Time</span>
						<div className='flex items-center gap-2 text-gray-800'>
							<Clock className='h-4 w-4 text-gray-500' />
							{order && order.createdAt
								? format(new Date(order.createdAt), 'MMM d, yyyy · h:mm a')
								: 'N/A'}
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<span className='text-gray-500'>Total Amount</span>
						<span className='font-semibold text-lg text-green-600'>
							₹{order?.totalAmount?.toLocaleString('en-IN')}
						</span>
					</div>

					{order?.items?.length && (
						<div className='pt-4 border-t border-gray-200'>
							<div className='text-gray-500 mb-2'>Items Ordered</div>
							<div className='space-y-2'>
								{order.items.map((item) => (
									<div key={item._id} className='flex items-center gap-3'>
										<div className='bg-gray-200 rounded-md w-10 h-10 flex items-center justify-center'>
											<ShoppingBag className='h-4 w-4 text-gray-600' />
										</div>
										<div className='flex-1 truncate'>
											<div className='text-sm font-medium text-gray-800 truncate'>
												{item?._id}
											</div>
											<div className='text-xs text-gray-500'>
												Qty: {item.quantity}
											</div>
										</div>
										<div className='text-sm font-medium'>
											₹{item.price.toLocaleString('en-IN')}
										</div>
									</div>
								))}
								{order.items.length > 2 && (
									<div className='text-sm text-gray-500 text-center pt-2'>
										+{order.items.length - 2} more items
									</div>
								)}
							</div>
						</div>
					)}
				</motion.div>

				<motion.div variants={itemVariants} className='flex flex-col space-y-4'>
					<Button
						onClick={() => router.push('/view-order-details')}
						className='w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02]'
					>
						View Full Order Details
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>

					<Link href='/' passHref>
						<Button
							variant='outline'
							className='w-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all'
						>
							Continue Shopping
						</Button>
					</Link>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className='mt-6 text-center text-sm text-gray-500'
				>
					Need help?{' '}
					<Link href='/contact' className='text-green-600 hover:underline'>
						Contact us
					</Link>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default OrderSuccessCard;
