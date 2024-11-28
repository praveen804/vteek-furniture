"use client";

import React from "react";
import { useLogoutMutation } from "@/Redux-Toolkit/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux-Toolkit/hooks";
import { logout as logoutAction } from "@/Redux-Toolkit/features/auth/authSlice";
import { ToastError, ToastSuccess } from "@/utils/utils-function/ReactToastify";

const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      // Call the API to perform the logout
      await logout("").unwrap(); // Pass an empty string or required data if needed

      // Update the Redux state to clear user data
      dispatch(logoutAction());

      // Navigate the user to the login page
      router.push("/login");
      ToastSuccess("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
      ToastError("Logout failed. Please try again.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
