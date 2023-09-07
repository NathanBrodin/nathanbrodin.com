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
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body
        className={`${satoshi.variable} ${satoshiItalic.variable} flex min-h-full flex-col bg-background font-sans`}
      >
        <Header />
        {children}
        <Footer />
        <div className="background fixed bottom-0 left-0 right-0 top-0 -z-10">
          <div className="m-auto grid max-w-7xl grid-cols-4 md:grid-cols-12 gap-8">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="min-h-screen border-l border-r border-gray-700/5"
              ></div>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
