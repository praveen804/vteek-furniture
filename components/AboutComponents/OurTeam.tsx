'use client';
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { ImageOptimized } from "../utils-components/image-components/ImageOptimized";

const teamMembers = [
	{
		name: 'John Doe',
		role: 'CEO',
		img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
	},
	{
		name: 'Jane Smith',
		role: 'Designer',
		img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
	},
	{
		name: 'Alice Johnson',
		role: 'Developer',
		img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
	},
	{
		name: 'Michael Brown',
		role: 'Marketing Lead',
		img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
	},
];

const OurTeam: React.FC = () => {
	return (
		<section className='py-20 px-8 bg-gray-50 text-center'>
			<h2 className='text-5xl font-bold text-primary mb-4'>Meet Our Team</h2>
			<p className='text-gray-600 text-lg'>
				Passionate professionals dedicated to excellence.
			</p>
			<div className='flex flex-wrap justify-center mt-12 gap-8'>
				{teamMembers.map((member, index) => (
					<div
						key={index}
						className='bg-white shadow-2xl rounded-2xl p-6 w-72 transition-transform transform hover:scale-105 hover:shadow-3xl'
					>
						<ImageOptimized
							src={member.img}
							alt={member.name}
							className='rounded-full object-cover'
							wrapperClassName='w-40 h-40 mx-auto relative overflow-hidden rounded-full border-4 border-primary'
							sizes='(max-width: 768px) 100vw, 1200px'
              priority={false}
						/>

						<h3 className='text-2xl font-semibold mt-6'>{member.name}</h3>
						<p className='text-gray-500 text-lg mt-2'>{member.role}</p>
						<div className='flex justify-center gap-6 mt-6 text-primary'>
							<FaLinkedin className='text-3xl cursor-pointer hover:text-gray-700 transition-colors' />
							<FaTwitter className='text-3xl cursor-pointer hover:text-gray-700 transition-colors' />
							<FaFacebook className='text-3xl cursor-pointer hover:text-gray-700 transition-colors' />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurTeam;
