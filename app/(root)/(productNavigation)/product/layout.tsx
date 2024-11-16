import React from 'react'
import {ProductLayoutProps} from '@/types/productInterface'




const ProductLayout:React.FC<ProductLayoutProps> = ({children,sidebar,topBar}) => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-1">
      <div className="bg-orange-500 h-16">{topBar}</div>
      <div className="w-full lg:flex min-h-screen gap-4">
        <aside className="w-1/6 bg-green-600 p-2">{sidebar}</aside>
        <main className="w-5/6 bg-gray-100 p-2 rounded-md">{children}</main>
      </div>
    </div>
  );
}

export default ProductLayout
