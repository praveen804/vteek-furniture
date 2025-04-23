'use client';
import React from 'react';

// components
import Footer from '@/components/globalComponent/Footer';
import Navbar from '@/components/globalComponent/Navbar';
import TopBar from '@/components/layout-components/TopBar';
import ScrollToTop from '@/components/globalComponent/ScrollToTop';

// global components
import TanstackGlobalLayout from './TanstackGlobalLayout';
import AppInitializer from './AppInitializer';
import ReduxToolkitGlobalLayout from './ReduxToolkitGlobalLayout';

// npm package
import { ToastContainer } from 'react-toastify';

// context
import { FurnitureProvider } from '@/src/context/FurnitureContext';

const GlobalLayout = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<ReduxToolkitGlobalLayout>
			<AppInitializer>
				<TanstackGlobalLayout>
					<FurnitureProvider>
						<TopBar />
						<Navbar />
						<main>{children}</main>
						<ScrollToTop />
						<Footer />
						<ToastContainer />
					</FurnitureProvider>
				</TanstackGlobalLayout>
			</AppInitializer>
		</ReduxToolkitGlobalLayout>
	);
};

export default GlobalLayout;
