import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevXManish - Freelance Developer & Designer",
  description:
    "Professional freelance web developer and designer specializing in modern web applications, mobile apps, and UI/UX design. Available for hire.",
  keywords:
    "freelance developer, web development, mobile apps, UI/UX design, React, Next.js, Node.js",
  authors: [{ name: "DevXManish" }],
  creator: "DevXManish",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devxmanish.xyz",
    title: "DevXManish - Freelance Developer & Designer",
    description:
      "Professional freelance web developer and designer specializing in modern web applications, mobile apps, and UI/UX design.",
    siteName: "DevXManish Portfolio",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "DevXManish - Freelance Developer & Designer",
  //   description:
  //     "Professional freelance web developer and designer specializing in modern web applications, mobile apps, and UI/UX design.",
  //   creator: "@",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
