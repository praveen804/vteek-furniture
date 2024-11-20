'use client'
import useFurnitureSingeProductHook from "@/hooks/useFurnitureSingeProductHook"
import React from 'react'
import SingleProductCard from "./SingleProductCard";
import LoadingSingleProduct from "../LoadingComponents/LoadingSingleProduct";

const SingleProductContainer = ({id}:{id:string}) => {
  const { data, isError, isFetching, error } = useFurnitureSingeProductHook(id);

  // Loading State
  if (isFetching) {
    return (
      <LoadingSingleProduct />
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">Error: {error?.message}</p>
      </div>
    );
  }
  return <div>

        <SingleProductCard product={data?.product} />
  </div>;
}

export default SingleProductContainer
