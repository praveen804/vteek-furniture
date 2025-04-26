'use client'
import React from 'react'
import BaseButton from "../button-components/BaseButton";

const ErrorOrderSuccess = () => {
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
				<p className='text-gray-600 mb-6'>{'Failed to load order details.'}</p>
				<BaseButton
					type='button'
					onClick={() => window.location.reload()}
					className='w-full'
					baseChildren='Try Again'
					ariaLabel='Try Again Button'
				/>
			</div>
		</div>
	);
}

export default ErrorOrderSuccess