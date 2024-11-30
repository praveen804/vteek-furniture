import ProductBrand from "@/components/productComponent/ProductBrandFilter"
import ProductCategoryFilter from "@/components/productComponent/ProductCategoryFilter"
import ProductColorFilter from "@/components/productComponent/ProductColorFilter"
import ProductDiscount from "@/components/productComponent/ProductDiscountFilter"
import ProductMaterialFilter from "@/components/productComponent/ProductMaterialFilter"
import ProductPriceFilter from "@/components/productComponent/ProductPriceFilter"
import ProductFilterRating from "@/components/productComponent/ProductRatingFilter";
import ProductResetFilters from "@/components/productComponent/ProductResetFilters"
import React from 'react'

const ProductSidebar = () => {
  return (
    <div className="space-y-5">
      <ProductCategoryFilter />
      <ProductBrand />
      <ProductMaterialFilter />
      <ProductDiscount />
      <ProductFilterRating />
      <ProductPriceFilter />
      <ProductColorFilter />
      <ProductResetFilters />
    </div>
  );
}

export default ProductSidebar
