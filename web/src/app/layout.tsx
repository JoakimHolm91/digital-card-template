import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import customer from "../customer.restaurant.json";
import { getThemeClasses } from "../theme/themeClasses";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeClasses = getThemeClasses(customer.theme);

export const metadata: Metadata = {
  title: customer.name,
  description: customer.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen ${themeClasses.pageBg} ${themeClasses.pageText}`}
      >
        <Navbar customer={customer} themeClasses={themeClasses} />
        {children}
      </body>
    </html>
  );
}
