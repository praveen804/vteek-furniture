export interface Link {
	href: string;
	label: string;
}

export const navigationLinks : Link[] = [
	{ href: '/', label: 'Home' },
	{ href: '/products', label: 'Furniture' },
	{ href: '/about', label: 'About' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact' },
];
