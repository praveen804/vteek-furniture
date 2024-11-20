import React from 'react'
import { LiaStar, LiaStarHalfAltSolid, LiaStarSolid } from "react-icons/lia";
const ProductRating = ({rating}:{rating:number}) => {

    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
            <span key={index}>
                {starValue <= rating ? (
                    <LiaStarSolid />
                ) : starValue - rating < 1 ? (
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
      <span className="text-sm text-custom-4"> ({Math.floor(Math.random() * 50) + 1})</span>
    </div>
  );
}

export default ProductRating
