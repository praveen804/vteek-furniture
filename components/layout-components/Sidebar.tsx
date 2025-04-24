'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, User, AtSign } from 'lucide-react';

export default function Sidebar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button type="button">
          <Menu className='h-6 w-6  ' />
        </button>
			</SheetTrigger>
			<SheetContent side='left' className='w-[280px] sm:w-[300px]'>
				<SheetHeader>
					<SheetTitle>Edit Profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when done.
					</SheetDescription>
				</SheetHeader>

				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							<User className='inline mr-2 h-4 w-4' />
							Name
						</Label>
						<Input id='name' value='Pedro Duarte' className='col-span-3' />
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							<AtSign className='inline mr-2 h-4 w-4' />
							Username
						</Label>
						<Input id='username' value='@peduarte' className='col-span-3' />
					</div>
				</div>

				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit'>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
