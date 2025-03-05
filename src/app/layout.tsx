import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Bounce, ToastContainer } from "react-toastify";
import ReduxProvider from "@/components/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nuntium - News App",
  description: "A publishing company that focuses on the essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Navbar />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            draggable
            theme="dark"
            transition={Bounce}
            closeOnClick
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
