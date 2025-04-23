import LoginForm from '@/components/utils-components/form-components/LoginForm';
import React from 'react';

const Login = () => {
	return (
		<div className='flex flex-col gap-5 w-full min-h-screen justify-center items-center'>
			<LoginForm />
		</div>
	);
};

export default Login;
