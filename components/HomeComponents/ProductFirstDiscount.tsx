import Image from 'next/image';
import { Link } from 'next-view-transitions';
import React from 'react';

const chairCollection = [
	{
		image: '/home/image19.png',
		title: 'Luxury Lounge Chair',
		price: 299.99,
	},
	{
		image: '/home/image28.png',
		title: 'Modern Dining Chair',
		price: 159.99,
	},
	{
		image: '/home/image30.png',
		title: 'Comfortable Chair',
		price: 249.99,
	},
];

const ProductFirstDiscount = () => {
	return (
		<section className='max-w-6xl mx-auto px-4 py-10 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
			{/* Left Section */}
			<div className='bg-[#fff6fb] p-6 rounded-lg relative flex flex-col items-start justify-between'>
				<h2 className='text-[#151875] text-2xl font-semibold leading-tight'>
					23% off on all products
				</h2>
				<Link
					href='/products'
					className='text-custom-1 underline hover:text-custom-2 transition-colors'
					aria-label='Shop Now'
				>
					Shop Now
				</Link>
				<div className='absolute bottom-4 right-4 w-40 h-40'>
					<Image
						src='/home/discount1.png'
						alt='Discount Offer'
						fill
						sizes='(max-width: 768px) 100vw, 25vw'
						className='object-cover'
					/>
				</div>
			</div>

			{/* Middle Section */}
			<div className='bg-[#eeeffb] p-6 rounded-lg relative flex flex-col items-start justify-between'>
				<h2 className='text-[#151875] text-2xl font-semibold leading-tight'>
					Exclusive Collection
				</h2>
				<Link
					href='/products'
					className='text-custom-1 underline hover:text-custom-2 transition-colors'
					aria-label='View Collection'
				>
					View Collection
				</Link>
				<div className='absolute bottom-4 right-4 w-40 h-20'>
					<Image
						src='/home/discount2.png'
						alt='Discount Collection'
						fill
						sizes='(max-width: 768px) 100vw, 25vw'
						className='object-cover'
					/>
				</div>
			</div>

			{/* Right Section: Chair Collection */}
			<div className='flex flex-col gap-6'>
				{chairCollection.map((item) => (
					<div key={item.title} className='flex items-center gap-4'>
						<div className='w-16 h-16 relative'>
							<Image
								src={item.image}
								alt={item.title}
								width={100}
								height={100}
								className='object-cover rounded-md bg-gray-200'
							/>
						</div>
						<div className='text-sm text-gray-700'>
							<p className='font-medium'>{item.title}</p>
							<p className='text-custom-1 font-semibold'>
								${item.price.toFixed(2)}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductFirstDiscount;
