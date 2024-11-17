import Image from "next/image";
import Link from "next/link";
import React from 'react'


const chairCollection = [
  {
    image: "/home/image19.png",
    title: "Luxury Lounge Chair",
    price: 299.99,
  },
  {
    image: "/home/image28.png",
    title: "Modern Dining Chair",
    price: 159.99,
  },
  {
    image: "/home/image30.png",
    title: "Comfortable  Chair",
    price: 249.99,
  },
];


const ProductFirstDiscount = () => {
  return (
    <div className="w-full h-60 mt-10  flex  max-w-6xl m-auto gap-4">
      <div className="w-[40%] h-full bg-[#fff6fb] p-5  relative">
        <p className=" text-[#151875] text-[26px] font-semibold font-['Josefin Sans'] ">
          23% off in all products
        </p>
        <Link href={"/product"} className="text-custom-1 underline">
          Shop Now
        </Link>
        <div className="absolute bottom-2 right-2 overflow-hidden w-52 h-52">
          <Image
            src={"/home/discount1.png"}
            alt="discount"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-[40%] h-full bg-[#eeeffb] p-5  relative">
        <p className=" text-[#151875] text-[26px] font-semibold font-['Josefin Sans'] ">
          23% off in all products
        </p>
        <Link href={"/product"} className="text-custom-1 underline">
          View Collection
        </Link>
        <div className="absolute bottom-2 right-2 overflow-hidden w-72 h-32">
          <Image
            src={"/home/discount2.png"}
            alt="discount"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-[20%] h-full   flex flex-col gap-5 justify-between  ">
        {
            chairCollection.map((value)=>{
                return(
                    <div key={value.price} className="flex gap-5">
                           <div className="">
                            <Image src={value.image} alt={value.title} width={100} height={100} className="w-14 h-14 object-cover bg-gray-200 " />
                           </div>
                           <div className="text-sm  text-custom-4">
                            <p>{value.title} </p>
                            <p>{value.price} </p>
                           </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default ProductFirstDiscount
