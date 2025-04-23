"use client";
import React, { useState, useTransition } from "react";
import { useAppSelector } from "@/Redux-Toolkit/hooks";
import { RootState } from "@/Redux-Toolkit/store";
import { ToastError, ToastSuccess } from "@/utils/utils-function/ReactToastify";
import { useRouter } from "next/navigation";
import { LiaStar, LiaStarSolid } from "react-icons/lia";
import UserReview from "../userComponents/UserReivew";
import { CircleUserRound } from "lucide-react";
import ReviewDiffDate from "../productComponent/ReviewDiffDate";
export interface ReviewData {
  userId: string;
  productId: string;
  comment: string;
  rating: number;
  date?: string;
}

export const dynamic = "force-dynamic";

const ReviewForm = ({
  productId,
  review,
}: {
  productId: string | undefined;
  review?: ReviewData[] | undefined;
}) => {
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const reverseData = review?.slice().reverse();
  const [reviewList, setReviewList] = useState<ReviewData[]>(reverseData || []);

  // Helper: Star Renderer
  const renderStars = () =>
    Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      return (
        <span
          key={index}
          className={`cursor-pointer text-2xl ${
            starValue <= rating ? "text-orange-500" : "text-gray-300"
          }`}
          onClick={() => setRating(starValue)}
          aria-label={`Rate ${starValue} stars`}
        >
          {starValue <= rating ? <LiaStarSolid /> : <LiaStar />}
        </span>
      );
    });

  // Submit Review
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user?._id) {
      ToastError("Please login to add a review.");
      push("/login");
      return;
    }

    if (!productId) {
      ToastError("Product ID is missing.");
      return;
    }

    if (!rating) {
      ToastError("Rating is required.");
      return;
    }

    startTransition(async () => {
      const args: Omit<ReviewData, "_id"> = {
        userId: user._id,
        productId,
        comment,
        rating,
      };

      try {
        const response = await fetch(
          `https://backend-house.vercel.app/reviews`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(args),
          }
        );

        const data = await response.json();

        if (response.ok && data.success) {
          ToastSuccess("Review added successfully!");
          setRating(0);
          setComment("");
          setReviewList((prev) => [
            { ...args, date: new Date().toISOString() },
            ...(prev || []),
          ]);
        } else {
          ToastError(data.message || "Failed to add review.");
        }
      } catch (error) {
        console.error("Error adding review:", error);
        ToastError("Something went wrong. Please try again later.");
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 my-10">
      {/* Add Review Form */}
      <div className="w-full border border-gray-300 rounded-lg shadow-md bg-white p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Add a Review
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Rating Section */}
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="text-sm font-medium text-gray-600 mb-2 block"
            >
              Your Rating
            </label>
            <div id="rating" className="flex items-center gap-2">
              {renderStars()}
            </div>
          </div>

          {/* Comment Section */}
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Your Review
          </label>
          <textarea
            id="review"
            cols={30}
            rows={2}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className={`bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors ${
                !rating || !comment || isPending
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!rating || !comment || isPending}
            >
              {isPending ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>

      {/* Display Reviews */}
      <div className="w-full border-b-0 border-black my-4 bg-gray-100 rounded-md">
        <div className="space-y-4">
          {reviewList.length === 0 ? (
            <p className="text-center p-10 text-red-500 text-xl">
              No review available for this Product
            </p>
          ) : (
            reviewList.map((review) => (
              <div
                key={review.userId}
                className="px-10 py-2 border-b border-gray-500 flex gap-4 items-center"
              >
                <div className="">
                  <CircleUserRound size={50} />
                </div>
                <div className=" space-y-2">
                  <UserReview rating={review.rating} />
                  <div className=" text-gray-500 text-xs"></div>
                  <ReviewDiffDate date={review.date} />
                  <p className="text-xl text-black/60">{review.comment}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
