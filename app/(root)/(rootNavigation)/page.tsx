
import React, { lazy } from "react";
import CustomCarousel from "@/components/Home-components/Carousel";
import HomeDiscountItem from "@/components/Home-components/HomeDiscountItem";
import HomeFirstBanner from "@/components/Home-components/HomeFirstBanner";
import HomSecondBanner from "@/components/Home-components/HomSecondBanner";
import Support from "@/components/Home-components/Support";

// lazy loading component
const FeaturedProduct= lazy(() => import("@/components/Home-components/FeaturedProduct"));
const LatestProduct= lazy(() => import("@/components/Home-components/LatestProduct"));
const TrendingProduct= lazy(() => import("@/components/Home-components/TrendingProduct"));



const Home = () => {
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

export default Home;
