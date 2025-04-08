'use client';

// components
import AboutHero from '../AboutComponents/AboutHero';
import { FAQSection } from './FAQSection';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';

// Main Contact Container
const ContactContainer = () => {
	return (
		<>
			{/* Hero Section */}
			<AboutHero />

			{/* Main Content */}
			<div className='container mx-auto p-8 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
				{/* Contact Form Section */}
				<div className='lg:col-span-2'>
					<div className=''>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Get in Touch
						</h2>
						<ContactForm />
					</div>
				</div>

				{/* Contact Info and Social Links Section */}
				<div className='space-y-8'>
					<div className=''>
						<ContactInfo />
					</div>
					<div className=''>
						<SocialLinks />
					</div>
				</div>

				{/* FAQ Section */}
				<div className='lg:col-span-3'>
					<div className=''>
						<FAQSection />
					</div>
				</div>

				{/* Map Section */}
				<div className='lg:col-span-3'>
					<div className=''>
						<h2 className='text-3xl font-bold text-gray-900 mb-6'>
							Our Location
						</h2>
						<MapSection />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactContainer;

// Map Section Component
const MapSection = () => (
	<div className='bg-white p-8 rounded-lg shadow-lg'>
		<h2 className='text-2xl font-semibold text-gray-800 mb-6'>Our Location</h2>
		<div className='w-full h-96 rounded-lg overflow-hidden shadow-md'>
			<iframe
				title='Google Map'
				className='w-full h-full'
				src='https://maps.google.com/maps?q=New York&t=&z=13&ie=UTF8&iwloc=&output=embed'
				allowFullScreen
			></iframe>
		</div>
	</div>
);
