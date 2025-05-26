import CheckoutContainer from "@/components/CheckoutComponents/CheckoutContainer";
import { CheckoutMeta } from "@/src/meta/CheckoutMeta";
import React from 'react';

export const metadata = CheckoutMeta;
const Checkout = () => {
	return <CheckoutContainer />;
};

export default Checkout;
