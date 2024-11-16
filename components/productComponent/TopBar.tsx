'use client'
import React from "react";
import { Mail, PhoneCall, User, Heart, ShoppingCart,LogOut } from "lucide-react";
import PriceComponent from "../globalComponent/PriceComponent";
import LanguageSelectorComponent from "../globalComponent/LanguageSelectorComponent";
import Link from "next/link";
import { useGetUserData } from "@/hooks/useGetUserData";

const TopBar = () => {
  const {isLoading,user, handleLogout}=useGetUserData();
  return (
    <section className="h-12 bg-custom-3 ">
      {/* Add your content here */}
      <div className="flex justify-between items-center max-w-7xl mx-auto h-full">
        <div className="flex gap-10 items-center h-full">
          <div className="text-white flex gap-3 items-center">
            <Mail className="w-4 h-4 " />
            <span className="text-sm">Vikash752200@gmail.com</span>
          </div>
          <div className="text-white  flex gap-3 items-center">
            <PhoneCall className="w-4 h-4 " />
            <span className="text-sm">+91 8448925560</span>
          </div>
        </div>
        {/* second half */}
        <div className="flex gap-x-5">
          {/* <FlagComponent /> */}
          <LanguageSelectorComponent />
          <PriceComponent />
          {isLoading ? (
            <span className="text-gray-400">Loading...</span>
          ) : user ? (
            <>
              {/* <Link
                href="/user"
                className="w-8 h-8 bg-white text-2xl rounded-full flex flex-col justify-center items-center"
              >
                {user?.result.name.charAt(0)}{" "}
              </Link> */}
              <button onClick={handleLogout} className="text-white flex gap-1 items-center ">
                Logout <LogOut size={16} />
              </button>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="text-white flex gap-1 items-center"
              >
                Login <User className="w-4 h-4 " />
              </Link>
            </>
          )}

          <Link
            href={"/wishlist"}
            className="text-white flex gap-1 items-center"
          >
            Wishlist
            <Heart className="w-3 h-3" />
          </Link>
          <Link href={"/cart"} className="text-white flex gap-1 items-center">
            <ShoppingCart className="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
