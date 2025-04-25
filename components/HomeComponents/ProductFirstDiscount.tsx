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
		<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Left Offer Card */}
				<div className='bg-[#fff6fb] p-6 md:p-8 rounded-2xl relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all'>
					<div className='flex flex-col gap-3'>
						<h2 className='text-[#151875] text-2xl font-bold'>
							23% Off on All Products
						</h2>
						<Link
							href='/products'
							className='text-custom-1 text-base font-medium underline hover:text-custom-2 transition'
						>
							Shop Now
						</Link>
					</div>
					<div className='relative mt-6 w-32 h-32 md:w-40 md:h-40 self-end'>
						<Image
							src='/home/discount1.png'
							alt='Discount Offer'
							fill
							className='object-contain'
							sizes='114px'
						/>
					</div>
				</div>

				{/* Middle Collection Card */}
				<div className='bg-[#eeeffb] p-6 md:p-8 rounded-2xl relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all'>
					<div className='flex flex-col gap-3'>
						<h2 className='text-[#151875] text-2xl font-bold'>
							Exclusive Collection
						</h2>
						<Link
							href='/products'
							className='text-custom-1 text-base font-medium underline hover:text-custom-2 transition'
						>
							View Collection
						</Link>
					</div>
					<div className='relative mt-6 w-32 h-16 md:w-40 md:h-20 self-end'>
						<Image
							src='/home/discount2.png'
							alt='Discount Collection'
							fill
							className='object-contain'
							sizes='114px'
						/>
					</div>
				</div>

				{/* Right Chair List */}
				<div className='flex flex-col gap-4'>
					{chairCollection.map((item) => (
						<div
							key={item.title}
							className='flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow'
						>
							<div className='w-16 h-16 relative flex-shrink-0'>
								<Image
									src={item.image}
									alt={item.title}
									fill
									className='object-cover rounded-md bg-gray-100'
									sizes='64px'
								/>
							</div>
							<div className='text-sm text-gray-800'>
								<p className='font-semibold'>{item.title}</p>
								<p className='text-custom-1 font-bold'>
									${item.price.toFixed(2)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductFirstDiscount;
