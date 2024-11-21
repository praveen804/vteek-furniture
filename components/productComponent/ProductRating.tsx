'use client'
import {  Review } from "@/types/productInterface";
import React from 'react'
import { LiaStar, LiaStarHalfAltSolid, LiaStarSolid } from "react-icons/lia";
const ProductRating = ({  review}:{ review?:Review[] | undefined}) => {
    const averageRating = review && review.length > 0 ? review.reduce((total, review) => total + review.rating, 0) / review.length : 0;
    // const {rating}=product


    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span key={index}>
            {starValue <= averageRating ? (
              <LiaStarSolid />
            ) : starValue - averageRating < 1 ? (
              <LiaStarHalfAltSolid />
            ) : (
              <LiaStar />
            )}
          </span>
        );
    })

  return (
    <div className="flex items-center   gap-1">
      <span className=" text-xl text-orange-500 flex">{stars} </span>{" "}
      <span className="text-sm text-custom-4"> ({averageRating.toFixed(1)})</span>

    </div>
  );
}

export default ProductRating
