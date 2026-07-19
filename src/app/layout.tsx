import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import "aos/dist/aos.css";
import { AOSInit } from "@/components/AOSInit";
import Watermarks from "@/components/Watermarks";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const perandory = localFont({
  src: "../fonts/Perandory-Regular.otf",
  variable: "--font-perandory",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RACRIT",
  description: "The official website of Rotaract Club of Rajalakshmi Institute of Technology (RACRIT).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${perandory.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background overflow-x-hidden text-dark">
        <NextTopLoader color="#a855f7" showSpinner={false} height={3} shadow="0 0 10px #a855f7,0 0 5px #a855f7" />
        <AOSInit />
        <Watermarks />
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
