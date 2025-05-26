import ContactContainer from '@/components/ContactComponents/ContactContainer';
import { ContactMeta } from "@/src/meta/ContactMeta";
import React from 'react';
export const metadata=ContactMeta
const Contact = () => {
	return (
		<>
			<ContactContainer />
		</>
	);
};

export default Contact;
