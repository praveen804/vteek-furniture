import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiCalendar, FiCheckCircle, FiTruck } from 'react-icons/fi';

// Type definitions
type OrderItem = {
	name: string;
	price: number;
	quantity: number;
};

type OrderStatus =
	| 'Pending'
	| 'Processing'
	| 'Shipped'
	| 'Delivered'
	| 'Cancelled';

type Order = {
	id: string;
	date: string;
	items: number;
	total: number;
	status: OrderStatus;
	itemsList: OrderItem[];
};

const orders: Order[] = [
	{
		id: '12345',
		date: '2025-03-27',
		items: 2,
		total: 120.99,
		status: 'Shipped',
		itemsList: [
			{ name: 'Wooden Chair', price: 50.99, quantity: 1 },
			{ name: 'Office Desk', price: 70.0, quantity: 1 },
		],
	},
];

const UserOrders: React.FC = () => {
	const getStatusIcon = (status: OrderStatus): JSX.Element => {
		switch (status) {
			case 'Delivered':
				return <FiCheckCircle className='text-green-500' />;
			case 'Shipped':
				return <FiTruck className='text-blue-500' />;
			default:
				return <FiPackage className='text-gray-500' />;
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className='bg-white rounded-xl shadow-md overflow-hidden p-6'
		>
			<h2 className='text-xl font-bold text-gray-800 mb-6 flex items-center'>
				<FiPackage className='mr-2 text-pink-600' /> Order History
			</h2>

			{orders.length === 0 ? (
				<div className='text-center py-8 text-gray-500'>
					You havent placed any orders yet
				</div>
			) : (
				orders.map((order) => (
					<div
						key={order.id}
						className='border border-gray-200 rounded-lg p-5 mb-6 last:mb-0'
					>
						<div className='flex justify-between items-start mb-4'>
							<div>
								<h3 className='text-lg font-medium text-gray-800'>
									Order #{order.id}
								</h3>
								<p className='text-sm text-gray-500 flex items-center mt-1'>
									<FiCalendar className='mr-1' /> Placed on {order.date}
								</p>
							</div>
							<div className='flex items-center bg-pink-50 px-3 py-1 rounded-full'>
								{getStatusIcon(order.status)}
								<span className='ml-2 capitalize text-sm font-medium'>
									{order.status}
								</span>
							</div>
						</div>

						<div className='border-t border-gray-200 pt-4'>
							<h4 className='font-medium mb-2'>Order Items:</h4>
							{order.itemsList.map((item, index) => (
								<div
									key={`${order.id}-${index}`}
									className='flex justify-between py-2 border-b border-gray-100 last:border-0'
								>
									<div>
										<p className='text-gray-800'>{item.name}</p>
										<p className='text-sm text-gray-500'>
											Qty: {item.quantity}
										</p>
									</div>
									<p className='text-gray-800'>${item.price.toFixed(2)}</p>
								</div>
							))}
						</div>

						<div className='flex justify-between items-center mt-4 pt-4 border-t border-gray-200'>
							<div>
								<p className='text-sm text-gray-500'>Total amount</p>
								<p className='text-lg font-bold text-pink-600'>
									${order.total.toFixed(2)}
								</p>
							</div>
							<button
								className='bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'
								onClick={() => console.log('Tracking order:', order.id)}
							>
								Track Order
							</button>
						</div>
					</div>
				))
			)}
		</motion.div>
	);
};

export default UserOrders;
