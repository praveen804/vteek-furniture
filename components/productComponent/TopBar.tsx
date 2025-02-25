"use client";
import {
  Mail,
  PhoneCall,
  Heart,
  ShoppingCart,
  User,

} from "lucide-react";
import PriceComponent from "../globalComponent/PriceComponent";
import Link from "next/link";
import { useAppSelector } from "@/Redux-Toolkit/hooks";
import { RootState } from "@/Redux-Toolkit/store";
import LogoutButton from "../reusableComponents/LogoutButton";
import LocationComponent from "../globalComponent/LocationComponent";

const TopBar: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <section className="h-12 bg-purple-600 shadow-lg hidden  lg:block ">
      <div className="flex  justify-between items-center max-w-7xl mx-auto h-full px-4">
        {/* Left Section: Contact Info (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-6 items-center h-full">
          <div className="text-white flex gap-2 items-center hover:text-gray-200 transition-colors">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm">
              <a
                href="mailto:Vikash752200@gmail.com"
                className="hover:underline"
              >
                Vikash752200@gmail.com
              </a>
            </span>
          </div>
          <div className="text-white flex gap-2 items-center hover:text-gray-200 transition-colors">
            <PhoneCall className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm">
              <a href="tel:+918448925560" className="hover:underline">
                +91 8448925560
              </a>
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}


        {/* Right Section: Language, Price, and User Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {/* Location Selector */}
          <LocationComponent />

          {/* Price Selector */}
          <PriceComponent />

          {/* User Links */}
          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/user"
                  className="text-white uppercase font-semibold hover:text-gray-200 transition-colors flex items-center gap-1"
                  aria-label="User Profile"
                >
                  <User className="w-4 h-4" />
                  <span>{user?.name}</span>
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="text-white hover:text-gray-200 transition-colors flex items-center gap-1"
                aria-label="Login"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Wishlist Link */}
          <Link
            href="/wishlist"
            className="text-white flex gap-1 items-center hover:text-gray-200 transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            <span>Wishlist</span>
            <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 ml-1">
              2 {/* Replace with dynamic wishlist count */}
            </span>
          </Link>

          {/* Cart Link */}
          <Link
            href="/cart"
            className="text-white flex gap-1 items-center hover:text-gray-200 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" aria-hidden="true" />
            <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 ml-1">
              3 {/* Replace with dynamic cart count */}
            </span>
          </Link>
        </div>
      </div>


    </section>
  );
};

export default TopBar;
