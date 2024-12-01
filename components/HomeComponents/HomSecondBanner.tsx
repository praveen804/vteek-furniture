import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomSecondBanner = () => {
  return (
    <section>
      {/* first */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/home/banner2.png"
          alt="banner"
          width={1000}
          height={500}
          className="object-cover w-full h-[350px]"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 ">
          <p className="text-center text-[#151875] text-[35px] font-bold font-['Josefin Sans'] leading-[54.25px] tracking-wide">
            Get Leatest Update By Subscribe
            <br />
            0ur Newslater
          </p>
          <Button asChild className="mt-4" size={"lg"}>
            <Link href={"/products"}>Shop Now</Link>
          </Button>
        </div>
      </div>
      {/* second     */}

      <div className="relative w-1/2 m-auto h-[100px] overflow-hidden py-20">
        <Image
          src="/home/brand.png"
          alt="banner"
          fill
          className="object-contain w-1/2 h-[100px] "
          sizes="50vw"
        />
      </div>
    </section>
  );
};

export default HomSecondBanner;
