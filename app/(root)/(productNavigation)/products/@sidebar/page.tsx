import ProductBrand from "@/components/productComponent/ProductBrandFilter"
import ProductCategoryFilter from "@/components/productComponent/ProductCategoryFilter"
import ProductColorFilter from "@/components/productComponent/ProductColorFilter"
import ProductDiscount from "@/components/productComponent/ProductDiscountFilter"
import ProductPriceFilter from "@/components/productComponent/ProductPriceFilter"
import ProductFilterRating from "@/components/productComponent/ProductRatingFilter";
import React from 'react'

const ProductSidebar = () => {
  return (
    <div className="space-y-5">
      <ProductCategoryFilter />
      <ProductBrand />
      <ProductDiscount />
      <ProductFilterRating />
      <ProductPriceFilter />
      <ProductColorFilter />
    </div>
  );
}

export default ProductSidebar
