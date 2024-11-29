import React from "react";
import dynamic from "next/dynamic";
import ProductPagination from "@/components/productComponent/ProductPagination";

const ProductCard = dynamic(
  () => import("@/components/productComponent/ProductCard")
);

const Product = () => {
  return (
    <div className="">
      <ProductCard />
      <div className=" mt-10">
        <ProductPagination />
      </div>
    </div>
  );
};

export default Product;
