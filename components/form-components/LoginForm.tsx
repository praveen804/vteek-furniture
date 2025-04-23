'use client';
import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { useRouter } from 'next/navigation';
import { ToastError, ToastSuccess } from '@/src/utils/ReactToastify';
import { useLoginMutation } from '@/reducer/features/auth/authApi';
import ReusableInputField from './ReusableInputField';

const LoginForm: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();
	const [login, { isLoading, isError }] = useLoginMutation();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await login({ email, password }).unwrap();
			if (response.success) {
				ToastSuccess('Login Successfully');
				router.replace('/');
			}
		} catch (err: Error | unknown) {
			console.error('Login error:', err);
			ToastError('Login Failed');
		}
	};

	return (
		<div className='max-w-md mx-auto my-10 p-8 border border-gray-300 rounded-lg shadow-lg'>
			<h2 className='text-2xl font-bold text-center mb-6'>Login</h2>

			{isError && (
				<p aria-live='polite' className='text-red-600 text-center mb-4'>
					{'An error occurred. Please try again.'}
				</p>
			)}

			<form onSubmit={handleSubmit} className='space-y-4'>
				{/* Email Field */}
				<ReusableInputField
					id='email'
					name='email'
					type='email'
					label='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				{/* Password Field */}
				<ReusableInputField
					id='password'
					name='password'
					type='password'
					label='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				{/* Submit Button */}
				<button
					type='submit'
					className={`w-full bg-violet-600 text-white py-2 rounded-lg transition duration-200 ${
						isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-violet-700'
					}`}
					disabled={isLoading}
				>
					{isLoading ? 'Logging in...' : 'Login'}
				</button>
			</form>

			{/* Register Link */}
			<p className='text-center text-gray-600 mt-4'>
				Don&#39;t have an account?{' '}
				<Link href='/register' className='text-violet-600 hover:underline'>
					Register here
				</Link>
			</p>
		</div>
	);
};

export default LoginForm;
