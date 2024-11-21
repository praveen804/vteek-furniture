"use client";
import useFurnitureSingeProductHook from "@/hooks/useFurnitureSingeProductHook";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import LoadingSingleProduct from "../LoadingComponents/LoadingSingleProduct";
import ProductSingleInformation from "./ProductSingleInformation";
import { useParams } from "next/navigation";
import ReviewForm from "../FormComponents/ReviewForm";


const SingleProductContainer = ({ id }: { id: string }) => {
  const params=useParams();
  console.log("🚀 ~ file: SingleProductContainer.tsx:11 ~ params:", params);
  const { data, isError, isFetching, error } = useFurnitureSingeProductHook(id);
  console.log("🚀 ~ file: SingleProductContainer.tsx:10 ~ data:", data?.review);

  // Loading State
  if (isFetching) {
    return <LoadingSingleProduct />;
  }

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
      <SingleProductCard product={data?.product} review={data?.review} />
      <ProductSingleInformation product={data?.product} review={data?.review} />
      <ReviewForm productId={data?.product?._id} />
    </div>
  );
};

export default SingleProductContainer;
