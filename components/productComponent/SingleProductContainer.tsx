"use client";
import useFurnitureSingeProductHook from "@/utils/hooks/useFurnitureSingeProductHook";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import LoadingSingleProduct from "../LoadingComponents/LoadingSingleProduct";
import ProductSingleInformation from "./ProductSingleInformation";
import ReviewForm from "../FormComponents/ReviewForm";
import LoadingProductSingleInformation from "../LoadingComponents/LoadingProductSingleInformation";
import LoadingReviewForm from "../LoadingComponents/LoadingReviewForm";
import { Button } from "../ui/button";
import Link from "next/link";

const SingleProductContainer = ({ id }: { id: string }) => {
  const { data, isError, isFetching,  } = useFurnitureSingeProductHook(id);


  // Error State
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold text-2xl">Something went wrong!</p>
        <Button asChild> <Link href="/products">Products</Link> </Button>
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
        <LoadingReviewForm />
      ) : (
        <ReviewForm productId={data?.product?._id} review={data?.review} />
      )}
    </div>
  );
};

export default SingleProductContainer;
