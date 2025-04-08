'use client';
import { useState, FormEvent, ChangeEvent } from 'react';

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert('Message Sent!');
		setFormData({ name: '', email: '', message: '' }); // Reset form after submission
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-white p-8 rounded-lg shadow-lg space-y-6'
		>
			<h2 className='text-2xl font-semibold text-gray-800'>
				Send Us a Message
			</h2>
			<input
				type='text'
				name='name'
				placeholder='Your Name'
				value={formData.name}
				required
				className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
				onChange={handleChange}
			/>
			<input
				type='email'
				name='email'
				placeholder='Your Email'
				value={formData.email}
				required
				className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
				onChange={handleChange}
			/>
			<textarea
				name='message'
				placeholder='Your Message'
				value={formData.message}
				required
				rows={5}
				className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500'
				onChange={handleChange}
			></textarea>
			<button
				type='submit'
				className='w-full bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-700 transition duration-300'
			>
				Send Message
			</button>
		</form>
	);
};
