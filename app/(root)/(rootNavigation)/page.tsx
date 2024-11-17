import CustomCarousel from "@/components/HomeComponents/Carousel";
import FeaturedProduct from "@/components/HomeComponents/FeaturedProduct";
import HomeDiscountItem from "@/components/HomeComponents/HomeDiscountItem";
import HomeFirstBanner from "@/components/HomeComponents/HomeFirstBanner";
import HomSecondBanner from "@/components/HomeComponents/HomSecondBanner";
import LatestProduct from "@/components/HomeComponents/LatestProduct";
import Support from "@/components/HomeComponents/Support";
import TrendingProduct from "@/components/HomeComponents/TrendingProduct";
import React from "react";

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
