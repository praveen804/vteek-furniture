'use client';
import { navigationLinks } from '@/src/data/link.data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNavigation = () => {
	const pathname = usePathname();

	const isActive = (href: string) => pathname === href;

	return (
		<div className=''>
			<aside className='flex-1 overflow-y-auto p-4'>
				<ul className='space-y-2'>
					{navigationLinks.map((link) => (
						<li key={link.href}>
							<div className='flex flex-col'>
								<Link
									href={link.href}
									className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
										isActive(link.href)
											? 'bg-pink-600 text-white font-medium'
											: ' hover:bg-pink-600 hover:text-white'
									}`}
								>
									<span>{link.label}</span>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
};

export default MobileNavigation;
