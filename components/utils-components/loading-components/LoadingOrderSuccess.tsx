'use client'
import { Skeleton } from "@/components/ui/skeleton";
import React from 'react'

const LoadingOrderSuccess = () => {
  return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4'>
			<div className='w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden p-8'>
				<div className='flex flex-col space-y-4'>
					<Skeleton className=' bg-gray-500 h-12 w-12 mx-auto rounded-full' />
					<Skeleton className=' bg-gray-500 h-8 w-3/4 mx-auto' />
					<Skeleton className=' bg-gray-500 h-4 w-5/6 mx-auto' />
					<div className='space-y-3 mt-6'>
						<Skeleton className=' bg-gray-500 h-20 w-full rounded-lg' />
					</div>
					<div className='space-y-2 mt-4'>
						<Skeleton className=' bg-gray-500 h-4 w-full' />
						<Skeleton className=' bg-gray-500 h-4 w-5/6' />
					</div>
					<div className='flex flex-col space-y-3 mt-6'>
						<Skeleton className=' bg-gray-500 h-10 w-full rounded-lg' />
						<Skeleton className=' bg-gray-500 h-10 w-full rounded-lg' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoadingOrderSuccess