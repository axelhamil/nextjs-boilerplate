import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ReactNode } from "react";

import { cn } from "@/app/_components/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  description: "",
  title: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full"}>
      <body
        className={cn(
          `${fontSans.variable} h-full w-full font-sans antialiased`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
