import React from 'react'
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import { Skeleton } from "../ui/skeleton";

const OrderHistoryLoading = () => {
  return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold text-gray-900 mb-8'>Your Orders</h1>
			<div className='space-y-6'>
				{[...Array(3)].map((_, i) => (
					<Card key={i} className='overflow-hidden'>
						<CardHeader className='bg-gray-500 p-6'>
							<Skeleton className='h-6 w-1/4 mb-4 bg-gray-500 ' />
							<div className='flex gap-4'>
								<Skeleton className='h-4 w-32 bg-gray-500' />
								<Skeleton className='h-4 w-32 bg-gray-500' />
							</div>
						</CardHeader>
						<CardContent className='p-6'>
							<div className='space-y-4'>
								{[...Array(2)].map((_, j) => (
									<div key={j} className='flex gap-4'>
										<Skeleton className='h-24 w-24 rounded-md bg-gray-500' />
										<div className='flex-1 space-y-2'>
											<Skeleton className='h-4 w-3/4 bg-gray-500' />
											<Skeleton className='h-4 w-1/2 bg-gray-500' />
											<Skeleton className='h-4 w-1/3 bg-gray-500' />
										</div>
									</div>
								))}
							</div>
						</CardContent>
						<CardFooter className='flex justify-between p-6 bg-gray-500'>
							<Skeleton className='h-8 w-24 bg-gray-500' />
							<Skeleton className='h-8 w-24 bg-gray-500' />
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

export default OrderHistoryLoading