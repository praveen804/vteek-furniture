import type { Metadata } from "next";
import "./globals.css";
import GlobalLayout from "@/utils/GlobalLayout";
import {lato} from '@/utils/fonts'

export const metadata: Metadata = {
  title: "Luxe - Premium Furniture Brand",
  description:
    "Luxe offers a curated collection of high-quality, luxurious furniture that blends style and comfort for your home.",
  keywords: [
    "Luxe",
    "furniture brand",
    "luxury furniture",
    "high-quality furniture",
    "modern furniture",
    "home decor",
    "stylish furniture",
    "premium furniture",
  ],
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="hi" suppressHydrationWarning={true}>
      <body
        className={`$ ${lato.className} antialiased`}
      >
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
