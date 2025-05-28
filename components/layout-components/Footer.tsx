import { Input } from '@/components/ui/input';
import { Link } from 'next-view-transitions';
import BaseButton from "../utils-components/button-components/BaseButton";
import { useState } from "react";
import { ToastError, ToastSuccess } from "@/src/utils/ReactToastify";
import {Instagram,Linkedin,Youtube,Twitter} from '@/src/icons/lucideIcons'

export default function FooterV2() {
	const[email,setEmail]=useState('');
const newSellerFunHandler = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	if(email){
		ToastSuccess('Subscribed successfully!');
	}else{
		ToastError('Please enter a valid email address.');
	}
	setEmail('');
};

	return (
		<footer className=' w-full bg-white'>
			<section className='max-w-7xl m-auto'>
				<div className='container px-4 py-16 md:px-6'>
					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-2'>
								<span className='text-3xl font-bold'>Luxe</span>
							</div>
							<p className='text-sm '>
								Trusted in more than 100 countries & 5 million customers. Have
								any query? contact us we are here for you.
							</p>
							<div className='flex space-x-4'>
								<Link
									href='#'
									className='rounded-full bg-white p-2 hover:bg-white/90'
								>
									<Twitter className='h-4 w-4 text-primary' />
									<span className='sr-only'>Twitter</span>
								</Link>
								<Link
									href='#'
									className='rounded-full bg-white p-2 hover:bg-white/90'
								>
									<Instagram className='h-4 w-4 text-primary' />
									<span className='sr-only'>Instagram</span>
								</Link>
								<Link
									href='#'
									className='rounded-full bg-white p-2 hover:bg-white/90'
								>
									<Linkedin className='h-4 w-4 text-primary' />
									<span className='sr-only'>LinkedIn</span>
								</Link>
								<Link
									href='#'
									className='rounded-full bg-white p-2 hover:bg-white/90'
								>
									<Youtube className='h-4 w-4 text-primary' />
									<span className='sr-only'>YouTube</span>
								</Link>
							</div>
						</div>
						<div className='space-y-4'>
							<h3 className='text-lg font-bold'>Get In Touch</h3>
							<div className='space-y-2 text-sm'>
								<p>support@pagedone.com</p>
								<p>+91 945 658 3256</p>
								<p>61-A, Elm street, Gujarat, India.</p>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4 sm:grid-cols-2'>
							<div className='space-y-4'>
								<h3 className='text-lg font-bold'>Quick Links</h3>
								<nav className='flex flex-col space-y-2 text-sm'>
									<Link className='hover:underline' href='#'>
										Home
									</Link>
									<Link className='hover:underline' href='#'>
										FAQs
									</Link>
									<Link className='hover:underline' href='#'>
										Price Plan
									</Link>
									<Link className='hover:underline' href='#'>
										Features
									</Link>
								</nav>
							</div>
							<div className='space-y-4'>
								<h3 className='text-lg font-bold invisible'>Links</h3>
								<nav className='flex flex-col space-y-2 text-sm'>
									<Link className='hover:underline' href='#'>
										Careers
									</Link>
									<Link className='hover:underline' href='#'>
										About
									</Link>
									<Link className='hover:underline' href='#'>
										Contact
									</Link>
									<Link className='hover:underline' href='#'>
										Products
									</Link>
								</nav>
							</div>
						</div>
						<div className='space-y-4'>
							<h3 className='text-lg font-bold'>Newsletter</h3>
							<form className='space-y-2' onSubmit={newSellerFunHandler}>
								<Input
									className=' placeholder:text-custom-4 border border-primary focus:outline-none focus:ring-0  '
									placeholder='Enter email..'
									type='email'
									name='email'
									value={email}
									onChange={(e)=>setEmail(e.target.value)}
								/>
								<BaseButton
								type="submit"
								variant="default"
								size="default"
								baseChildren="Subscribe"
								ariaLabel="Subscribe to newsletter"
								className="w-full"

								/>

							</form>
						</div>
					</div>
				</div>
				<div className='border-t border-white/10 '>
					<div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-gray-600 md:h-16 md:flex-row md:py-0'>
					<p className='text-gray-700'>
							© {new Date().getFullYear()} Luxe. All rights reserved.
						</p>
						<div className='flex flex-wrap items-center gap-4'>
							<a
								href='/privacy-policy'
								className='hover:text-black transition-colors duration-200'
							>
								Privacy Policy
							</a>
							<a
								href='/terms'
								className='hover:text-black transition-colors duration-200'
							>
								Terms of Service
							</a>
							<a
								href='/contact'
								className='hover:text-black transition-colors duration-200'
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
