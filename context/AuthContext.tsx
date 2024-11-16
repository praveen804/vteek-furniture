"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { UserDetailsResponse } from "@/types/interface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchUser, logoutUser } from "@/utils/fetchUser";
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "@/utils/ReactToastify";

interface UserContextType {
  user: UserDetailsResponse | null;
  error: string | null;
  isLoading: boolean;
  handleLogout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserDetailsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    data: userData,
    isError,
    isLoading,
    error: queryError,
  }: UseQueryResult<UserDetailsResponse, Error> = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

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
        setUser(null);
        router.push("/login");
        ToastSuccess("Logout successfully!");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      setError("Logout failed. Please try again.");
      ToastError("Something went wrong.");
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        isLoading,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

