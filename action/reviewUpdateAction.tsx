"use server";

import {  revalidateTag } from "next/cache";
interface argsProps {
  productId: string | undefined;
  userId: string | undefined;
  rating: number;
}

const reviewUpdateAction = async (formData: FormData, args: argsProps) => {

  const review = formData.get("review")?.toString();

  const newReview = {
    userId: args.userId,
    productId: args.productId,
    comment: review,
    rating: args.rating,
  };

 try {
   await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews`, {
     method: "POST",
     body: JSON.stringify(newReview),
     headers: {
       "Content-Type": "application/json",
     },
   });

//    revalidatePath(`/product/${args.productId} `);
revalidateTag("singleProducts");

 } catch (error) {
   console.log("🚀 ~ file: reviewUpdateAction.tsx:32 ~ error:", error);
 }
};

export default reviewUpdateAction;
