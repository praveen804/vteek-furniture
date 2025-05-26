import OrderSuccessCard from '@/components/OrderComponents/OrderSuccessCard';
import { OrderSuccessMeta } from "@/src/meta/OrderSuccessMeta";
import React from 'react';


export const metadata = OrderSuccessMeta;
const OrderSuccess = () => {
	return <OrderSuccessCard />;
};

export default OrderSuccess;
