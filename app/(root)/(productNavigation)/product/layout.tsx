import React from "react";
import { ProductLayoutProps } from "@/types/productInterface";
import ReusableBanner from "@/components/reusableComponents/ReusableBanner";

const ProductLayout: React.FC<ProductLayoutProps> = ({ children, sidebar, topBar }) => {
  return (
    <section>
      {/* Reusable Banner */}
      <ReusableBanner />

      {/* Main Layout */}
      <div className="w-full min-h-screen flex flex-col gap-6">
        {/* Top Bar */}
        <div className="h-16 my-6">{topBar}</div>

        {/* Content Section */}
        <div className="w-[1200px] m-auto lg:flex  gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/5 p-4 bg-white ">
            {sidebar}
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-4/5 bg-gray-50 p-6 rounded-md shadow-md">
            {children}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ProductLayout;
