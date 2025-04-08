export const FAQSection = () => {
	const faqs = [
		{
			question: 'What is your return policy?',
			answer:
				'We offer a 30-day return policy for unused furniture in original condition.',
		},
		{
			question: 'Do you offer international shipping?',
			answer: 'Yes, we ship worldwide with various delivery options.',
		},
	];

	return (
		<section
			aria-labelledby='faq-heading'
			className=' bg-white p-8 rounded-lg shadow-lg'
		>
			<h2 id='faq-heading' className='text-3xl font-bold text-gray-900 mb-8'>
				Frequently Asked Questions
			</h2>

			<div className='space-y-4'>
				{faqs.map((faq, index) => (
					<div
						key={index}
						className='border border-gray-200 rounded-lg transition-all duration-200 hover:shadow-md'
					>
						<details className='group'>
							<summary className='flex justify-between items-center p-4 cursor-pointer list-none'>
								<span className='font-medium text-gray-900 group-hover:text-blue-600'>
									{faq.question}
								</span>
								<span className='ml-2 text-gray-500 group-open:rotate-180 transform transition-transform'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>
							<div className='px-4 pb-4 pt-2 text-gray-700'>{faq.answer}</div>
						</details>
					</div>
				))}
			</div>
		</section>
	);
};
