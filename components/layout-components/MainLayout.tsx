'use client';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

// components
import Footer from '@/components/layout-components/Footer';
import Navbar from '@/components/layout-components/Navbar';
import ScrollToTop from '@/components/layout-components/ScrollToTop';
import Header from '@/components/layout-components/Header';

// global components
import TanstackGlobalLayout from '@/src/global/TanstackGlobalLayout';
import AppInitializer from '@/src/global/AppInitializer';
import ReduxToolkitGlobalLayout from '@/src/global/ReduxToolkitGlobalLayout';

// npm package
import { ToastContainer } from 'react-toastify';

// context
import { FurnitureProvider } from '@/src/context/FurnitureContext';
import SearchBar from '../productComponent/SearchBar';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<ReduxToolkitGlobalLayout>
			<AppInitializer>
				<TanstackGlobalLayout>
					<FurnitureProvider>
						<Header />
						<Navbar />
						<div className=' lg:hidden p-1 md:p-2'>
							<SearchBar />
						</div>
						<main>{children}</main>
						<ToastContainer />

						<ScrollToTop />
						<Footer />
					</FurnitureProvider>
				</TanstackGlobalLayout>
			</AppInitializer>
		</ReduxToolkitGlobalLayout>
	);
};

export default MainLayout;
