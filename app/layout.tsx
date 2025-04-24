import MainLayout from "@/components/layout-components/MainLayout";
import './globals.css';
import { lato } from '@/src/utils/fonts';
import { ViewTransitions } from 'next-view-transitions';

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ViewTransitions>
			<html lang='en' suppressHydrationWarning={true}>
				<body className={`$ ${lato.className} antialiased scroll-smooth   `}>
					<MainLayout>{children}</MainLayout>
				</body>
			</html>
		</ViewTransitions>
	);
}
