import MainLayout from '@/components/layout-components/MainLayout';
import './globals.css';
import { lato } from '@/src/utils/fonts';
import { ViewTransitions } from 'next-view-transitions';
import React from 'react';
import { Metadata } from 'next';
import { LayoutMeta } from '@/src/meta/LayoutMeta';

export const metadata: Metadata = LayoutMeta;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`$ ${lato.className} scroll-smooth antialiased`}>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
