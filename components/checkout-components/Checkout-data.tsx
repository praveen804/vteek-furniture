import { PaymentOption } from './Checkout-types';

export const paymentOptions: PaymentOption[] = [
	{
		id: '1',
		name: 'COD',
		paymentMode: 'Cash on Delivery',
	},
	{
		id: '2',
		name: 'UPI',
		paymentMode: 'UPI Payment',
	},
	{
		id: '3',
		name: 'Card',
		paymentMode: 'Debit/Credit Card',
	},
];
