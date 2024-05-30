import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-950">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <div className="dark relative w-full flex items-center jus">
            <Navbar />
          </div>
        </div>
        {children}
        <div>
        <Footer/>
        </div>
      </body>

    </html>
  );
}
