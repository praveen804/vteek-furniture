"use client";
import useFurnitureSingeProductHook from "@/utils/hooks/useFurnitureSingeProductHook";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import LoadingSingleProduct from "../LoadingComponents/LoadingSingleProduct";
import ProductSingleInformation from "./ProductSingleInformation";
import ReviewForm from "../FormComponents/ReviewForm";
import LoadingProductSingleInformation from "../LoadingComponents/LoadingProductSingleInformation";

const SingleProductContainer = ({ id }: { id: string }) => {
  const { data, isError, isFetching, error } = useFurnitureSingeProductHook(id);


  // Error State
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">Error: {error?.message}</p>
      </div>
    );
  }
  return (
    <div>
      {isFetching ? (
        <LoadingSingleProduct />
      ) : (
        <SingleProductCard product={data?.product} review={data?.review} />
      )}
      {isFetching ? (
        <LoadingProductSingleInformation />
      ) : (
        <ProductSingleInformation product={data?.product} />
      )}
      {isFetching ? (
        <LoadingSingleProduct />
      ) : (
        <ReviewForm productId={data?.product?._id} review={data?.review} />
      )}
    </div>
  );
};

export default SingleProductContainer;
