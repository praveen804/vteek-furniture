"use client";
import React from "react";
import {
  Mail,
  PhoneCall,
  Heart,
  ShoppingCart,
} from "lucide-react";
import PriceComponent from "../globalComponent/PriceComponent";
import LanguageSelectorComponent from "../globalComponent/LanguageSelectorComponent";
import Link from "next/link";
import { useAppSelector } from "@/Redux-Toolkit/hooks";
import { RootState } from "@/Redux-Toolkit/store";
import LogoutButton from "../reusableComponents/LogoutButton";

const TopBar: React.FC = () => {

 const user=useAppSelector((state:RootState)=>state.auth.user)

  return (
    <section className="h-12 bg-custom-3 hidden lg:block">
      <div className="flex justify-between items-center max-w-7xl mx-auto h-full">
        {/* Left Section: Contact Info */}
        <div className="flex gap-10 items-center h-full">
          <div className="text-white flex gap-3 items-center">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Vikash752200@gmail.com</span>
          </div>
          <div className="text-white flex gap-3 items-center">
            <PhoneCall className="w-4 h-4" />
            <span className="text-sm">+91 8448925560</span>
          </div>
        </div>

        {/* Right Section: Language, Price, and User Links */}
        <div className="flex gap-x-5 items-center">
          {/* Language Selector */}
          <LanguageSelectorComponent />

          {/* Price Selector */}
          <PriceComponent />
          <div className="">
            {user ? (
              <div className="flex flex-row gap-5 items-center">
                <Link href={'/user'} className="text-white uppercase font-mono" > {user?.name}</Link>
                <LogoutButton />
              </div>
            ) : (
              <div className="flex flex-row gap-5 items-center">
                <Link href="/login">login</Link>
                <Link href="/register">Register</Link>
              </div>
            )}
          </div>

          {/* Wishlist Link */}
          <Link
            href="/wishlist"
            className="text-white flex gap-1 items-center hover:text-gray-300 transition"
          >
            Wishlist
            <Heart className="w-3 h-3" />
          </Link>

          {/* Cart Link */}
          <Link
            href="/cart"
            className="text-white flex gap-1 items-center hover:text-gray-300 transition"
          >
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
