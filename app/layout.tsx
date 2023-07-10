import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const satoshiItalic = localFont({
  src: "./fonts/Satoshi-VariableItalic.woff2",
  display: "swap",
  variable: "--font-satoshi-italic",
});

export const metadata: Metadata = {
  title: "Portfolio | Nathan Brodin",
  description: "Here's my portfolio to showcase my projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body
        className={`${satoshi.variable} ${satoshiItalic.variable} font-sans bg-background`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
