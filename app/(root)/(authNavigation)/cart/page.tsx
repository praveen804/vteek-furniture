import CartContainer from '@/components/cartComponents/CartContainer';
import { CartMeta } from '@/src/meta/CartMeta';
import React from 'react';
export const metadata = CartMeta;
const Cart = () => {
  return <CartContainer />;
};

export default Cart;
