
export interface OrderStats {
	total: number;
	pending: number;
	delivered: number;
	wishlist: number;
	recentOrders: RecentOrder[];
}

export interface RecentOrder {
	id: string;
	product: string;
	date: string;
	status: 'pending' | 'delivered' | 'processing';
	amount: number;
}
