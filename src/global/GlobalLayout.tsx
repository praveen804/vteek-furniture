'use client';
import React from 'react';

// components
import Footer from '@/components/layout-components/Footer';
import Navbar from '@/components/layout-components/Navbar';
import ScrollToTop from '@/components/globalComponent/ScrollToTop';

// global components
import TanstackGlobalLayout from './TanstackGlobalLayout';
import AppInitializer from './AppInitializer';
import ReduxToolkitGlobalLayout from './ReduxToolkitGlobalLayout';

// npm package
import { ToastContainer } from 'react-toastify';

// context
import { FurnitureProvider } from '@/src/context/FurnitureContext';
import Header from "@/components/layout-components/Header";

const GlobalLayout = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<ReduxToolkitGlobalLayout>
			<AppInitializer>
				<TanstackGlobalLayout>
					<FurnitureProvider>
						<Header />
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
