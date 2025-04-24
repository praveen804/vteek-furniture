'use client'
import React, { lazy } from 'react';

import HomeDiscountItem from './HomeDiscountItem';
import HomeFirstBanner from './HomeFirstBanner';
import HomSecondBanner from './HomSecondBanner';
import Support from './Support';
import CustomCarousel from "./Carousel";

// lazy loading component
const FeaturedProduct = lazy(() => import('./FeaturedProduct'));
const LatestProduct = lazy(() => import('./LatestProduct'));
const TrendingProduct = lazy(() => import('./TrendingProduct'));

const HomeContainer = () => {
	return (
		<div>
			<CustomCarousel />
			<FeaturedProduct />
			<LatestProduct />
			<Support />
			<HomeFirstBanner />
			<TrendingProduct />
			<HomeDiscountItem />
			<HomSecondBanner />
		</div>
	);
};

export default HomeContainer;
