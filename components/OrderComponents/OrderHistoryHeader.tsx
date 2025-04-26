import React from 'react';
import { OrderDetails } from '@/src/types/orderType';
import { RefreshCw } from 'lucide-react';
import BaseButton from '../utils-components/button-components/BaseButton';
interface OrderCardProps {
	orders: OrderDetails[] | undefined;
}
const OrderHistoryHeader: React.FC<OrderCardProps> = ({ orders }) => {
	return (
		<div>
			{orders && (
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>Your Orders</h1>
					<div className='flex gap-2'>
						<BaseButton
							type='button'
							variant='outline'
							size='sm'
							baseChildren={
								<>
									<RefreshCw className='mr-2 h-4 w-4' />
									Refresh
								</>
							}
							ariaLabel='Refresh Button'
						/>

						<BaseButton
							type='button'
							variant='outline'
							size='sm'
							baseChildren='Filter'
							ariaLabel='Filter Button'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderHistoryHeader;
