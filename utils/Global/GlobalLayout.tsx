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
import { FurnitureProvider } from "@/context/FurnitureContext";
import ScrollToTop from "@/components/globalComponent/ScrollToTop";



const GlobalLayout = ({children,}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ReduxToolkitGlobalLayout>
      <AppInitializer>
        <TanstackGlobalLayout>
          <FurnitureProvider>
            <TopBar />
            <Navbar />

            <main>{children}</main>
            <ScrollToTop />
            <Footer />
            <ToastContainer />
          </FurnitureProvider>
        </TanstackGlobalLayout>
      </AppInitializer>
    </ReduxToolkitGlobalLayout>
  );
};

export default GlobalLayout;
