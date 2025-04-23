import {FaPhone,FaEnvelope,FaMapMarkerAlt,} from 'react-icons/fa';

export const ContactInfo = () => (
	<div className='bg-white p-8 rounded-lg shadow-lg space-y-6'>
		<h2 className='text-2xl font-semibold text-gray-800'>
			Contact Information
		</h2>
		<div className='space-y-4'>
			<p className='flex items-center text-gray-700'>
				<FaPhone className='mr-3 text-pink-600' /> +123 456 7890
			</p>
			<p className='flex items-center text-gray-700'>
				<FaEnvelope className='mr-3 text-pink-600' /> support@furnitureshop.com
			</p>
			<p className='flex items-center text-gray-700'>
				<FaMapMarkerAlt className='mr-3 text-pink-600' /> 123 Furniture St,
				Design City
			</p>
		</div>
	</div>
);
