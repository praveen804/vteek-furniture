'use client';
import React from 'react';
import { CheckCircle, Clock, ArrowRight, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useViewOrderDetails } from '@/src/hooks/useViewOrderDetails';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import BaseButton from '../utils-components/button-components/BaseButton';
import LoadingOrderSuccess from '../utils-components/loading-components/LoadingOrderSuccess';
import ErrorOrderSuccess from '../utils-components/error-components/ErrorOrderSuccess';
import { containerVariants,itemVariants } from "@/src/animation/orderSuccess.animation";

const OrderSuccessCard = () => {
	const { error, isLoading, order } = useViewOrderDetails();
	const router = useRouter();



	if (isLoading) {
		return <LoadingOrderSuccess />;
	}

	if (error) {
		return <ErrorOrderSuccess />;
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
					Thank you for your purchase. We have sent a confirmation email with
					all the details.
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
							${order?.totalAmount?.toLocaleString('en-IN')}
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
											${item.price.toLocaleString('en-IN')}
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
					<BaseButton
						type='button'
						onClick={() => router.push('/view-order-details')}
						className='w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02]'
						baseChildren={
							<>
								View Full Order Details
								<ArrowRight className='ml-2 h-4 w-4' />
							</>
						}
						ariaLabel='View Full Order Details Button'
					/>

					<Link href='/' passHref>
						<BaseButton
							type='button'
							variant='outline'
							className='w-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all'
							baseChildren='Continue Shopping'
							ariaLabel='Continue Shopping Button'
						/>
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
