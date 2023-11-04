import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Footer, Navbar } from "@/components/organisms";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
