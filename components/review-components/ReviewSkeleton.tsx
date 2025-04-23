export const ReviewSkeleton = () => (
	<div className='max-w-6xl mx-auto px-4 py-8'>
		<div className='animate-pulse space-y-6'>
			<div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3'></div>
			<div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4'></div>
			{[...Array(3)].map((_, i) => (
				<div
					key={i}
					className='bg-white dark:bg-gray-800 rounded-xl p-6 space-y-4'
				>
					<div className='flex items-center space-x-4'>
						<div className='h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full'></div>
						<div className='space-y-2'>
							<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-32'></div>
							<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-24'></div>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded'></div>
						<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6'></div>
					</div>
					<div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
						<div className='flex items-center space-x-4'>
							<div className='h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-md'></div>
							<div className='flex-1 space-y-2'>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4'></div>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2'></div>
								<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4'></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
);
