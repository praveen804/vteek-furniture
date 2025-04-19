'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const OrderSuccessPage = () => {
	const router = useRouter();

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4'>
			<div className='w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden p-8 text-center'>
				<div className='flex justify-center mb-6'>
					<div className='bg-green-100 p-4 rounded-full'>
						<CheckCircle className='h-12 w-12 text-green-600' />
					</div>
				</div>

				<h1 className='text-2xl font-bold text-gray-800 mb-2'>
					Order Confirmed!
				</h1>
				<p className='text-gray-600 mb-6'>
					Thank you for your purchase. Your order has been received and is being
					processed.
				</p>

				<div className='bg-gray-100 rounded-lg p-4 mb-6 text-left'>
					<div className='flex justify-between mb-2'>
						<span className='text-gray-600'>Order Number:</span>
						<span className='font-medium'>#ORD-123456</span>
					</div>
					<div className='flex justify-between mb-2'>
						<span className='text-gray-600'>Date:</span>
						<span className='font-medium'>
							{new Date().toLocaleDateString()}
						</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-gray-600'>Total:</span>
						<span className='font-medium'>$129.99</span>
					</div>
				</div>

				<p className='text-gray-500 text-sm mb-6'>
					Weve sent a confirmation email to your registered email address with
					all the details.
				</p>

				<div className='flex flex-col space-y-3'>
					<Button
						onClick={() => router.push('/orders')}
						className='w-full bg-primary hover:bg-primary-dark'
					>
						View Order Details
					</Button>
					<Link href='/' passHref>
						<Button variant='outline' className='w-full'>
							Continue Shopping
						</Button>
					</Link>
				</div>
			</div>

			<div className='mt-8 text-center'>
				<h2 className='text-lg font-semibold text-gray-700 mb-4'>
					Whats Next?
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto'>
					<div className='bg-white p-4 rounded-lg shadow-sm'>
						<div className='text-blue-500 mb-2'>1</div>
						<h3 className='font-medium mb-1'>Order Processing</h3>
						<p className='text-sm text-gray-500'>
							Were preparing your items for shipment
						</p>
					</div>
					<div className='bg-white p-4 rounded-lg shadow-sm'>
						<div className='text-blue-500 mb-2'>2</div>
						<h3 className='font-medium mb-1'>Shipping</h3>
						<p className='text-sm text-gray-500'>
							Your order will be shipped within 24 hours
						</p>
					</div>
					<div className='bg-white p-4 rounded-lg shadow-sm'>
						<div className='text-blue-500 mb-2'>3</div>
						<h3 className='font-medium mb-1'>Delivery</h3>
						<p className='text-sm text-gray-500'>
							Expected delivery in 3-5 business days
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSuccessPage;
