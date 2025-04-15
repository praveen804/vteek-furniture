'use client';
import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { useRouter } from 'next/navigation';
import { ToastError, ToastSuccess } from '@/utils/utils-function/ReactToastify';
import { useRegisterMutation } from '@/Redux-Toolkit/features/auth/authApi';
import ReusableInputField from './ReusableInputField';

const RegisterForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
	});
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic client-side validation
		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.password
		) {
			ToastError('All fields are required!');
			return;
		}

		try {
			const response = await register(formData).unwrap(); // Using `.unwrap()` for cleaner error handling
			if (response.success === true) {
				ToastSuccess('Registration successful!');
				router.push('/login');
			}
		} catch (error: unknown) {
			console.error('Registration error:', error);
			ToastError('Registration failed. Please try again.');
		}
	};

	return (
		<div className='max-w-md mx-auto my-10 p-8 border border-gray-300 rounded-lg shadow-lg'>
			<h2 className='text-2xl font-bold text-center mb-6'>Register</h2>

			<form onSubmit={handleSubmit} className='space-y-4'>
				{/* Name Field */}
				<ReusableInputField
					name='name'
					id='name'
					type='text'
					label='Name'
					value={formData.name}
					onChange={handleChange}
				/>

				{/* Email Field */}
				<ReusableInputField
					name='email'
					id='email'
					type='email'
					label='Email'
					value={formData.email}
					onChange={handleChange}
				/>

				{/* Phone Field */}
				<ReusableInputField
					name='phone'
					id='phone'
					type='text'
					label='Phone'
					value={formData.phone}
					onChange={handleChange}
				/>

				{/* Password Field */}
				<ReusableInputField
					name='password'
					id='password'
					type='password'
					label='Password'
					value={formData.password}
					onChange={handleChange}
				/>

				{/* Submit Button */}
				<button
					type='submit'
					className={`w-full bg-indigo-600 text-white py-2 rounded-lg transition duration-200 ${
						isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-indigo-700'
					}`}
					disabled={isLoading}
					aria-busy={isLoading}
				>
					{isLoading ? 'Registering...' : 'Register'}
				</button>
			</form>

			{/* Login Link */}
			<p className='text-center text-gray-600 mt-4'>
				Already have an account?{' '}
				<Link href='/login'>
					<span className='text-indigo-600 hover:underline'>Go to Login</span>
				</Link>
			</p>
		</div>
	);
};

export default RegisterForm;
