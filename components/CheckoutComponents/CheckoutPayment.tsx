'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import CardPaymentForm from './CardPaymentForm';
import UpiPaymentForm from './UpiPaymentForm';
import { validateCard, validateUpi, processPayment } from './Checkout-utils';
import { paymentOptions } from './Checkout-data';
import { PaymentDetails } from './Checkout-types';
import { usePlaceOrderMutation } from '@/reducer/features/order/orderApi';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';
import { ToastError } from '@/src/utils-function/ReactToastify';
import { useRouter } from 'next/navigation';
const CheckoutPayment = () => {
	const [selectedPayment, setSelectedPayment] = useState<string>('');
	const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({});
	const [isProcessing, setIsProcessing] = useState(false);
	const router = useRouter();

	const [placeOrder, { isLoading }] = usePlaceOrderMutation();

	const { user } = useAppSelector((state: RootState) => state.auth);
	const { addresses } = useAppSelector((state: RootState) => state.address);

	const handlePaymentChange = (value: string) => {
		setSelectedPayment(value);
		setPaymentDetails({});
	};

	const handlePaymentSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsProcessing(true);

		try {
			let isValid = false;
			if (selectedPayment === 'Card') {
				isValid = validateCard(paymentDetails.card);
			} else if (selectedPayment === 'UPI') {
				isValid = validateUpi(paymentDetails.upi);
			} else if (selectedPayment === 'COD') {
				isValid = true; // Cash on delivery doesn't need validation
			}

			if (!isValid) {
				setIsProcessing(false);
				return;
			}

			// Process payment
			const paymentMethod =
				paymentOptions.find((opt) => opt.name === selectedPayment)
					?.paymentMode || selectedPayment;
			const success = await processPayment(paymentMethod, paymentDetails);

			if (success) {
				const data = {
					userId: user?._id ?? '',
					shippingAddressId: addresses?._id ?? '',
					paymentMethod: selectedPayment,
				};

				if (!data.userId || !data.shippingAddressId) {
					ToastError('User or address information is missing.');
					return;
				}

				await placeOrder(data).unwrap();
				router.push('/order-success');
			}
		} catch (error) {
			console.error('Payment submission error:', error);
			ToastError('Payment submission error');
		} finally {
			setIsProcessing(false);
		}
	};

	return (
		<Card className='w-full max-w-md mx-auto'>
			<CardHeader>
				<CardTitle className='text-xl font-semibold'>Payment Method</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handlePaymentSubmit}>
					<RadioGroup
						value={selectedPayment}
						onValueChange={handlePaymentChange}
						className='grid gap-4 mb-6'
					>
						{paymentOptions.map((option) => (
							<div key={option.id} className='flex items-center space-x-3'>
								<RadioGroupItem
									value={option.name}
									id={option.name}
									className='h-5 w-5'
								/>
								<Label htmlFor={option.name} className='text-base font-normal'>
									{option.paymentMode}
								</Label>
							</div>
						))}
					</RadioGroup>

					{selectedPayment === 'Card' && (
						<CardPaymentForm
							onDetailsChange={(details) =>
								setPaymentDetails({ card: details })
							}
						/>
					)}

					{selectedPayment === 'UPI' && (
						<UpiPaymentForm
							onDetailsChange={(details) => setPaymentDetails({ upi: details })}
						/>
					)}

					<Button
						type='submit'
						className='w-full mt-6 py-6 text-lg'
						disabled={!selectedPayment || isProcessing || isLoading}
					>
						{isProcessing || isLoading ? (
							<>
								<Loader2 className='mr-2 h-5 w-5 animate-spin' />
								Processing...
							</>
						) : (
							'Confirm Payment'
						)}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default CheckoutPayment;
