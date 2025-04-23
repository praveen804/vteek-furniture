import { configureStore } from '@reduxjs/toolkit';

import authApi from './features/auth/authApi';
import authReducer from './features/auth/authSlice';
import cartReducer from './features/cart/cartSlice';
import productQueryReducer from './features/products/productQuerySlice';


// import reviewApi from './features/reviews/reviewApi';
import cartApi from './features/cart/cartApi';
import wishlistApi from './features/wishlist/wishlistApi';
import salesApi from './features/sales/salesApi';
import addressApi from './features/address/addressApi';
import addressReducer from './features/address/addressSlice';
import orderApi from './features/order/orderApi';
import productApi from './features/products/productApi';
import reviewApi from "./features/reviews/reviewApi";

export const store = configureStore({
	reducer: {
		productQuery: productQueryReducer,
		auth: authReducer,
		cart: cartReducer,
		address: addressReducer,
		[reviewApi.reducerPath]: reviewApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[cartApi.reducerPath]: cartApi.reducer,
		[wishlistApi.reducerPath]: wishlistApi.reducer,
		[salesApi.reducerPath]: salesApi.reducer,
		[addressApi.reducerPath]: addressApi.reducer,
		[orderApi.reducerPath]: orderApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			authApi.middleware,
			cartApi.middleware,
			wishlistApi.middleware,
			salesApi.middleware,
			addressApi.middleware,
			orderApi.middleware,
			reviewApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
