import React from 'react'
import dynamic from "next/dynamic"


const ProductCard = dynamic(() => import("@/components/productComponent/ProductCard",), );

const Product = () => {
  return (
    <div className="">
        <ProductCard />
    </div>
  )
}

export default Product
