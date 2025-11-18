import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";
import ClientWrapper from "./component/ClientWrapper"; // Adjust path as needed
import Nav2 from "./component/nav2";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken-grotesk",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FORESE-Home page",
  description: "The Home page of Forum for Economic Studies by Engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <ClientWrapper>
          <Nav2 />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
