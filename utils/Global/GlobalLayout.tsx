"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import Footer from "@/components/globalComponent/Footer";
import Navbar from "@/components/globalComponent/Navbar";
import TopBar from "@/components/productComponent/TopBar";
import TanstackGlobalLayout from "./TanstackGlobalLayout";

import { ToastContainer } from "react-toastify";
import ReduxToolkitGlobalLayout from "./ReduxToolkitGlobalLayout";
import AppInitializer from "./AppInitializer";



const GlobalLayout = ({children,}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ReduxToolkitGlobalLayout>
      <AppInitializer>
        <TanstackGlobalLayout>
            <header className="fixed z-50 w-full">
              <TopBar />
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
          <ToastContainer />
        </TanstackGlobalLayout>
      </AppInitializer>
    </ReduxToolkitGlobalLayout>
  );
};

export default GlobalLayout;
