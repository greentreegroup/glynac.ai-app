import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "./components/menu/MenuBar";
import Footer from "./widgets/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glynac.AI",
  description: "Glynac.AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <MenuBar/>
      
            {children}
      
            <Footer
              title="Glynac.AI"
              description="Glynac.AI"
            />  
          </body>
        </html>
  );
}
