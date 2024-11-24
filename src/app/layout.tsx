import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Landing/Footer";
import Header from "./components/Landing/Header";



const sfPro = localFont({
  src: "./fonts/SFPRODISPLAYREGULAR.woff",
  variable: "--font-sf-pro-regular",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Conexus",
  description: "Conexus - Where all Abilities meet Possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
