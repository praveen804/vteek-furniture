"use client";

import reviewUpdateAction from "@/action/reviewUpdateAction";
import { useGetUserData } from "@/hooks/useGetUserData";
import { ToastError, ToastSuccess } from "@/utils/ReactToastify";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { LiaStar, LiaStarSolid } from "react-icons/lia";

const ReviewForm = ({ productId }: { productId: string | undefined }) => {
  const { user } = useGetUserData();
  const [rating, setRating] = useState(0);

  const handleSubmit = async (formData: FormData) => {
    const args = {
      productId,
      userId: user?.result._id,
      rating,
    };

    if (!user?.result._id) {
      redirect("/login");
    } else if (!productId) {
      return { error: "Product ID is missing." };
    } else {
      try {
        await reviewUpdateAction(formData, args);
        return { success: "Review submitted successfully!" };
      } catch (error) {
        console.error("🚀 ~ file: ReviewForm.tsx:34 ~ error:", error);
        return { error: "Failed to submit the review. Please try again." };
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white my-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Add a Review</h3>

      <form
        action={async (formData) => {

          const result = await handleSubmit(formData);
          if (result.error) {
            ToastError(result.error);
          }
          if (result.success) {
            ToastSuccess(result.success);
            redirect(`/product/${productId}`);
          }
        }}
      >
        {/* Rating Stars */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Your Rating</p>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }, (_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`cursor-pointer text-2xl ${
                    starValue <= rating ? "text-orange-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(starValue)}
                >
                  {starValue <= rating ? <LiaStarSolid /> : <LiaStar />}
                </span>
              );
            })}
          </div>
        </div>

        {/* Review Text Area */}
        <label
          htmlFor="review"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Your Review
        </label>
        <textarea
          name="review"
          id="review"
          cols={30}
          rows={2}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          placeholder="Write your review here..."
          required
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
