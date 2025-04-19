import React from 'react'
import {OrderDetails} from '@/utils/types/orderType'
import { Button } from "../ui/button";
import { RefreshCw } from "lucide-react";


interface OrderCardProps {
  orders: OrderDetails[] | undefined;
}
const OrderHistoryHeader:React.FC<OrderCardProps> = ({orders}) => {
  return (
		<div>
			{orders && (
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Your Orders</h1>
					<div className='flex gap-2'>
						<Button variant='outline' size='sm'>
							<RefreshCw className='mr-2 h-4 w-4' />
							Refresh
						</Button>
						<Button variant='outline' size='sm'>
							Filter
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

export default OrderHistoryHeader