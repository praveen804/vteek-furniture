"use client";
import useFurnitureSingeProductHook from "@/utils/hooks/useFurnitureSingeProductHook";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import LoadingSingleProduct from "../LoadingComponents/LoadingSingleProduct";
import ProductSingleInformation from "./ProductSingleInformation";
import ReviewForm from "../FormComponents/ReviewForm";
import LoadingProductSingleInformation from "../LoadingComponents/LoadingProductSingleInformation";
import LoadingReviewForm from "../LoadingComponents/LoadingReviewForm";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";


const SingleProductContainer = ({ id }: { id: string }) => {
  const { data, isError, isFetching,  } = useFurnitureSingeProductHook(id);
  const router=useRouter();


  // Error State
  if (isError) {
    return (
      <div className="flex justify-center items-center  flex-col gap-5 py-20">
        <p className="text-red-500 font-semibold text-2xl">Something went wrong!</p>
        <Button onClick={() => router.push("/products")}>Products</Button>
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
