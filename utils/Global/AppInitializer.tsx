"use client";
import React, { useEffect } from "react";
import { useGetUserQuery } from "@/Redux-Toolkit/features/auth/authApi";
import { useAppDispatch } from "@/Redux-Toolkit/hooks";
import { setUser, logout } from "@/Redux-Toolkit/features/auth/authSlice";

const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetUserQuery("Auth", {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.result) {
      dispatch(setUser(data.result));
    } else {
      dispatch(logout());
    }
  }, [data, dispatch]);

  return <>{children}</>;
};

export default AppInitializer;
