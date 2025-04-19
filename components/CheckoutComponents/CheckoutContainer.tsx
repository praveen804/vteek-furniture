
import React from 'react';
import CheckoutAddress from "./CheckoutAddress";
import CheckoutDetails from "./CheckoutDetails";
import PaymentComponent from "./CheckoutPayment";
import CheckoutTotal from "./CheckoutTotal";

const CheckoutContainer = () => {
	return (
		<div className='max-w-7xl m-auto flex min-h-screen border ' >
			<div className='w-full lg:w-[75%] p-4 border  border-pink-500'>
				<CheckoutAddress />
				<CheckoutDetails />
				<PaymentComponent />

			</div>
			<div className='w-full lg:w-[25%] p-4 border border-green-500 '>
				<CheckoutTotal />
      </div>
		</div>
	);
};

export default CheckoutContainer;
