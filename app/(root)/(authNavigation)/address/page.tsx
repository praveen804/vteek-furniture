import AddressContainer from '@/components/AddressComponents/AddressContainer';
import { AddressMeta } from "@/src/meta/AddressMeta";
import React from 'react';

export const metadata = AddressMeta;
const Address = () => {
	return <AddressContainer />;
};

export default Address;
