"use client";
import Footer from "@/components/globalComponent/Footer";
import Navbar from "@/components/globalComponent/Navbar";
import { UserProvider } from "@/context/AuthContext";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing React Query Client and DevTools
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TopBar from "@/components/productComponent/TopBar";

// Initialize QueryClient
const queryClient = new QueryClient();

const GlobalLayout = ({children,}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <header>
          <TopBar />
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </UserProvider>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default GlobalLayout;
