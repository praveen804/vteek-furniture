import React from "react";
import dynamic from "next/dynamic";


import ProductPagination from "@/components/productComponent/ProductPagination";
const ProductCard = dynamic(() => import("@/components/productComponent/ProductCard"));

const Product = () => {
  return (
    <>
      <ProductCard />
      <div className=" mt-10">
        <ProductPagination />
      </div>
    </>
  );
};

export default Product;
