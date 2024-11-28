import React from "react";
import Image from "next/image";
import { Product, Review } from "@/utils/types/productInterface";
import { Button } from "../ui/button";
import ProductRating from "./ProductRating";
import ProductColor from "./ProductColor";
import ProductShare from "./ProductShare";

const SingleProductCard = ({
  product,
  review,
}: {
  product: Product | undefined;
  review: Review[] | undefined;
}) => {
  if (!product) {
    return (
      <div className="text-center text-custom-4 font-bold">
        <p>Product data not available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-lg overflow-hidden"
        aria-labelledby="product-details"
      >
        {/* Image Section */}
        <div
          className="relative group overflow-hidden"
          role="img"
          aria-label={`Image of ${product.title}`}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 ">
          <h1
            id="product-details"
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
          >
            {product.title}
          </h1>
          <div className="mb-2 flex  items-center gap-2">
            <span className="text-custom-4 font-bold">Rating:</span>{" "}
            <span className="font-medium text-gray-800 capitalize">
              <ProductRating review={review} />
            </span>
          </div>
          <div className="mb-2 flex  items-center gap-2">
            <span className="text-custom-4 font-bold">Color:</span>{" "}
            <span className="font-medium text-gray-800 capitalize">
              <ProductColor color={product.color} />
            </span>
          </div>
          <div className="mb-2">
            <span className="text-custom-4 font-bold">Category:</span>{" "}
            <span className="font-medium text-gray-800 capitalize">
              {product.category}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-custom-4 font-bold">Origin:</span>{" "}
            <span className="font-medium text-gray-800">{product.origin}</span>
          </div>
          <div className="mb-2">
            <span className="text-custom-4 font-bold">Material:</span>{" "}
            <span className="font-medium text-gray-800">
              {product.material}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-custom-4 font-bold">Dimensions:</span>{" "}
            <span className="font-medium text-gray-800">
              {product.dimension.length} x {product.dimension.width} x{" "}
              {product.dimension.height}
            </span>
          </div>
          <div className="flex items-center space-x-4 mb-2">
            <span className="text-custom-4 font-bold">Price:</span>
            <span className="text-gray-900 text-lg font-semibold">
              ${product.finalPrice}
            </span>
            {product.discount > 0 && (
              <span className="line-through text-custom-1">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex space-x-10 mb-4">
            <Button>Add to Cart</Button>
            <Button>WishList</Button>
          </div>
          <div className="">
            <ProductShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
