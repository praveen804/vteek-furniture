'use client';
import React from 'react';
import { FaSeedling, FaAward, FaUsers, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CompanyStory = () => {
	return (
		<section className='py-16 px-6 bg-gray-50'>
			<div className='max-w-6xl mx-auto'>
				{/* Heading */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl font-bold text-center mb-12'
				>
					Our <span className='text-primary'>Story</span>
				</motion.h2>

				{/* Content */}
				<div className='grid md:grid-cols-2 gap-12'>
					{/* Left Column: Story */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='space-y-6'
					>
						<p className='text-lg text-gray-700'>
							Founded in 2000, our company began as a small workshop with a
							passion for creating timeless furniture. Over the years, we have
							grown into a global brand, dedicated to delivering high-quality,
							handcrafted furniture designed for comfort and style.
						</p>
						<p className='text-lg text-gray-700'>
							Our mission is to blend traditional craftsmanship with modern
							design, ensuring every piece we create is both functional and
							beautiful. We believe in sustainability and source our materials
							responsibly to minimize our environmental impact.
						</p>
						<button className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300'>
							Learn More
						</button>
					</motion.div>

					{/* Right Column: Milestones */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='space-y-8'
					>
						{/* Milestone 1 */}
						<div className='flex items-start space-x-4'>
							<div className='p-3 bg-primary rounded-full text-white'>
								<FaSeedling className='text-2xl' />
							</div>
							<div>
								<h3 className='text-xl font-semibold'>Sustainable Practices</h3>
								<p className='text-gray-600'>
									We use eco-friendly materials and processes to reduce our
									carbon footprint.
								</p>
							</div>
						</div>

						{/* Milestone 2 */}
						<div className='flex items-start space-x-4'>
							<div className='p-3 bg-primary rounded-full text-white'>
								<FaAward className='text-2xl' />
							</div>
							<div>
								<h3 className='text-xl font-semibold'>Award-Winning Designs</h3>
								<p className='text-gray-600'>
									Our furniture has been recognized globally for its innovation
									and quality.
								</p>
							</div>
						</div>

						{/* Milestone 3 */}
						<div className='flex items-start space-x-4'>
							<div className='p-3 bg-primary rounded-full text-white'>
								<FaUsers className='text-2xl' />
							</div>
							<div>
								<h3 className='text-xl font-semibold'>Happy Customers</h3>
								<p className='text-gray-600'>
									Over 100,000 satisfied customers trust us for their home and
									office needs.
								</p>
							</div>
						</div>

						{/* Milestone 4 */}
						<div className='flex items-start space-x-4'>
							<div className='p-3 bg-primary rounded-full text-white'>
								<FaHeart className='text-2xl' />
							</div>
							<div>
								<h3 className='text-xl font-semibold'>Crafted with Love</h3>
								<p className='text-gray-600'>
									Every piece is made with care and attention to detail.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CompanyStory;
