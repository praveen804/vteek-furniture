import AddressForm from '@/components/AddressComponents/AddressForm';
import { AddAddressMeta } from "@/src/meta/AddAddressMeta";
import React from 'react';

export const metadata = AddAddressMeta;
const AddAddress = () => {
	return <AddressForm />;
};

export default AddAddress;
