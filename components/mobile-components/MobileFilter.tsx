'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetDescription,
} from '@/components/ui/sheet';
import { VscFilterFilled } from 'react-icons/vsc';
import ProductSideBarContainer from '../productComponent/ProductSideBarContainer';

export default function MobileFilter() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button
					type='button'
					className='flex gap-1 border border-pink-600 px-2 py-1 rounded-md'
					aria-label='Open filters'
				>
					<VscFilterFilled className='h-6 w-6' />
					<span>Filters</span>
				</button>
			</SheetTrigger>
			<SheetContent side='top' className='w-full h-screen p-4 flex flex-col'>
				<SheetHeader>
					<SheetTitle className='text-2xl font-semibold text-primary'>
						Product Filters
					</SheetTitle>
					<SheetDescription className='mt-1 text-sm text-muted-foreground'>
						Bring luxury home with Luxe Furniture. Refine your search to find
						the perfect piece.
					</SheetDescription>
				</SheetHeader>

				{/* Scrollable Content */}
				<div className='flex-1 overflow-y-auto mt-4 lg:hidden'>
					<ProductSideBarContainer />
				</div>

				<SheetFooter className='mt-4 sr-only'>
					<SheetClose asChild>
						<Button type='button'>Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
