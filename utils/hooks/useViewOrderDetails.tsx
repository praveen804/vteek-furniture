import {
	useGetOrderByIdQuery,
	useGetUserOrdersQuery,
} from '@/reducer/features/order/orderApi';
import { useAppSelector } from '@/reducer/hooks';
import { RootState } from '@/reducer/store';

export const useViewOrderDetails = () => {
	const { user } = useAppSelector((state: RootState) => state.auth);
	const userId = user?._id ?? '';

	const { data: userOrdersData } = useGetUserOrdersQuery(userId);

	const orderId = userOrdersData?.orders?.[0]?._id;

	const {
		data: orderResponse,
		isLoading: isOrderLoading,
		error,
	} = useGetOrderByIdQuery(orderId as string, {
		skip: !orderId,
	});

	const order = orderResponse?.order;

	return {
		order,
		isLoading: isOrderLoading,
		error,
	};
};
