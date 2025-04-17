import Image from "next/image";
import React from 'react'
import { Product } from "@/utils/types/productInterface";
export default function SingleProductImageCardUI({product}:{product:Product}) {
  return (
		<div>
			<div className='relative group overflow-hidden bg-gray-50'>
				<div className='aspect-square w-full'>
					<Image
						src={product.image}
						alt={product.title}
						width={600}
						height={600}
						className='object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105'
						sizes='(max-width: 768px) 100vw, 50vw'
						priority
					/>
				</div>
				{product.discount > 0 && (
					<div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md'>
						{product.discount}% OFF
					</div>
				)}
			</div>
		</div>
	);
}
