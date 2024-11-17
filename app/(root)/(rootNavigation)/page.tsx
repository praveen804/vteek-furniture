
import React, { lazy } from "react";
import CustomCarousel from "@/components/HomeComponents/Carousel";
import HomeDiscountItem from "@/components/HomeComponents/HomeDiscountItem";
import HomeFirstBanner from "@/components/HomeComponents/HomeFirstBanner";
import HomSecondBanner from "@/components/HomeComponents/HomSecondBanner";
import Support from "@/components/HomeComponents/Support";

// lazy loading component
const FeaturedProduct= lazy(() => import("@/components/HomeComponents/FeaturedProduct"));
const LatestProduct= lazy(() => import("@/components/HomeComponents/LatestProduct"));
const TrendingProduct= lazy(() => import("@/components/HomeComponents/TrendingProduct"));



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
