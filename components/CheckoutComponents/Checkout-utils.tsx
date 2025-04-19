import { ToastError, ToastSuccess } from '@/utils/utils-function/ReactToastify';
import {CardDetails,UpiDetails} from './Checkout-types'

export const validateCard = (cardDetails: CardDetails | undefined): boolean => {
	if (!cardDetails) {
		ToastError('Payment method not selected');
		return false;
	}

	const { number, name, expiry, cvv } = cardDetails;

	if (!number || !name || !expiry || !cvv) {
		ToastError('Please fill all card details');
		return false;
	}

	if (!/^\d{16}$/.test(number.replace(/\s/g, ''))) {
		ToastError('Please enter a valid 16-digit card number');
		return false;
	}

	if (!/^\d{3,4}$/.test(cvv)) {
		ToastError('Please enter a valid 3 or 4-digit CVV');
		return false;
	}

	return true;
};

export const validateUpi = (upiDetails: UpiDetails | undefined): boolean => {
	if (!upiDetails?.upiId) {
		ToastError('Please enter your UPI ID');
		return false;
	}

	if (!/^[\w.-]+@[\w]+$/.test(upiDetails.upiId)) {
		ToastError('Please enter a valid UPI ID (e.g., name@upi)');
		return false;
	}

	return true;
};

export const processPayment = async (
	paymentMethod: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	paymentDetails: { card?: CardDetails; upi?: UpiDetails }
): Promise<boolean> => {
	try {
		// Simulate API call to payment gateway
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// In a real app, you would:
		// 1. Call your payment gateway API
		// 2. Handle the response
		// 3. Return success/failure

		ToastSuccess(`Payment via ${paymentMethod} processed successfully`);
		return true;
	} catch (error) {
		console.error('Payment processing error:', error);
		ToastError('There was an error processing your payment');
		return false;
	}
};
