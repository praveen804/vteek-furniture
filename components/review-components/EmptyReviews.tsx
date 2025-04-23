import { FiShoppingBag } from 'react-icons/fi';

export const EmptyReviews = () => (
	<div className='max-w-6xl mx-auto px-4 py-8'>
		<div className='text-center py-12'>
			<FiShoppingBag className='mx-auto h-12 w-12 text-gray-400' />
			<h3 className='mt-2 text-lg font-medium text-gray-900 dark:text-white'>
				No reviews yet
			</h3>
			<p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
				You haven&apos;t reviewed any products yet. Your reviews will appear
				here.
			</p>
			<div className='mt-6'>
				<button
					type='button'
					className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Browse products
				</button>
			</div>
		</div>
	</div>
);
