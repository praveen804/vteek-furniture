'use client';
import React, { useEffect } from 'react';
import { useGetUserQuery } from '@/reducer/features/auth/authApi';
import { useAppDispatch } from '@/reducer/hooks';
import { setUser, logout } from '@/reducer/features/auth/authSlice';

const AppInitializer = ({ children }: { children: React.ReactNode }) => {
	const { data } = useGetUserQuery('Auth', {
		refetchOnMountOrArgChange: true,
		refetchOnReconnect: true,
		refetchOnFocus: true,
	});
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data?.result) {
			dispatch(setUser(data.result));
		} else {
			dispatch(logout());
		}
	}, [data, dispatch]);

	return <>{children}</>;
};

export default AppInitializer;
