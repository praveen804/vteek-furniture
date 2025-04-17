import React from 'react';

const LoadingContainer = () => {
	return (
		<div
			role='status'
			aria-label='Loading cart'
			className='flex justify-center items-center min-h-[80vh]'
		>
			<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500'></div>
		</div>
	);
};

export default LoadingContainer;
