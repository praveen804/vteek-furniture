import WishListContainer from '@/components/WishlistComponents/WishListContainer';
import { WishlistMeta } from "@/src/meta/WishlistMeta";
import React from 'react';

export const metadata =WishlistMeta;
const WishList = () => {
	return <WishListContainer />;
};

export default WishList;
