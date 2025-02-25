"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeSecondBanner = () => {
  return (
    <section className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <Image
          src="/home/banner2.png"
          alt="Latest updates and newsletter subscription banner"
          width={1920}
          height={600}
          className="object-cover w-full h-full"
          sizes="100vw"
          priority
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#151875] leading-tight">
            Get the Latest Updates by Subscribing <br /> to Our Newsletter
          </h2>
          <Button asChild className="mt-4 px-6 py-3 text-lg">
            <Link href="/products" aria-label="Shop our latest products">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Brand Section */}
      <div className="w-full py-12 flex justify-center">
        <div className="relative w-[100%] sm:w-[60%] md:w-[50%] lg:w-[80%] h-[80px] sm:h-[100px]">
          <Image
            src="/home/brand.png"
            alt="Brand logo showcase"
            fill
            className="object-contain"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSecondBanner;
