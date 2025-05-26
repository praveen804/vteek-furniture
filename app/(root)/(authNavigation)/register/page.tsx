import RegisterForm from '@/components/utils-components/form-components/RegisterForm';
import { RegisterMeta } from "@/src/meta/RegisterMeta";
import React from 'react';

export const metadata = RegisterMeta;
const Register = () => {
	return (
		<div className='w-full min-h-screen '>
			<RegisterForm />
		</div>
	);
};

export default Register;
