import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "Tutlee",
  description:
    "Join us as a tutor and guide students on the educational path, share your expertise and availability, and make a meaningful impact!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-[20px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
