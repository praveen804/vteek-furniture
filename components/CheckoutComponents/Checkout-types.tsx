export type CardDetails = {
	number: string;
	name: string;
	expiry: string;
	cvv: string;
};

export type UpiDetails = {
	upiId: string;
};

export type PaymentDetails = {
	card?: CardDetails;
	upi?: UpiDetails;
};


export type PaymentOption = {
	id: string;
	name: string;
	paymentMode: string;
	icon?: React.ReactNode;
};