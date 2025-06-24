import "@/styles/global.css";

import type { Metadata } from "next";
import React, { Suspense } from "react";

import Header from "@/components/Header/Header";
import Footer from "@/shared/Footer/Footer";

import Loading from "./loading";

export const metadata: Metadata = {
  title: "FITMEX STORE",
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/logo-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logo-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/flogo-icon.png",
    },
    {
      rel: "icon",
      url: "/logo-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
