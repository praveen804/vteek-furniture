'use client'
import React from 'react'
import {  CardFooter } from '@/components/ui/card';
import {Truck,CheckCircle2,} from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderHistoryFooter = ({ status, amount }: { status: string,amount:number }) => {
	return (
		<CardFooter className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 bg-gray-50'>
			<div className='space-y-1'>
				<p className='text-sm text-gray-600'>Order Total</p>
				<p className='text-xl font-semibold text-gray-900'>
					${amount.toFixed(2)}
				</p>
			</div>

			<div className='flex gap-3'>


				{status === 'Delivered' ? (
					<Button size='sm' className='gap-1 bg-green-600 hover:bg-green-700'>
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
	);
};

export default OrderHistoryFooter