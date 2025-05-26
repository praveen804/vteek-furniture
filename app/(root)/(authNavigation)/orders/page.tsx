import OrderContainer from '@/components/OrderComponents/OrderContainer';
import { OrderSuccessMeta } from '@/src/meta/OrderSuccessMeta';
import React from 'react';

export const metadata = OrderSuccessMeta;
const Order = () => {
  return <OrderContainer />;
};

export default Order;
