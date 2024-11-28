"use client";

import { useEffect, useState } from "react";
import { UserDetailsResponse } from "@/utils/types/interface";
import {
  useQuery,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchUser, logoutUser } from "@/utils/api/userApi";
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "@/utils/utils-function/ReactToastify";

export const useGetUserData = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  // States to store user data and error
  const [user, setUser] = useState<UserDetailsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // React Query to fetch user data
  const {
    data: userData,
    isError,
    isLoading,
    error: queryError,
  }: UseQueryResult<UserDetailsResponse, Error> = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: false,
  });

  // Set user data when fetched and handle errors
  useEffect(() => {
    if (userData) {
      setUser(userData);
      setError(null);
    }
  }, [userData]);

  useEffect(() => {
    if (isError && queryError instanceof Error) {
      setError(queryError.message);
    }
  }, [isError, queryError]);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response) {
        router.push("/login");
        queryClient.setQueryData(["user"], null);
        setUser(null);
        ToastSuccess("Logout successfully!");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      setError("Logout failed. Please try again.");
      ToastError("Something wrong");
    }
  };

  return {
    user,
    error,
    isLoading,
    handleLogout,
  };
};
