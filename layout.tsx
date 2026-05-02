import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Made with App Studio",
  description: "Tạo thiệp mời sinh nhật, đám cưới, khai trương... Gửi ngay qua Zalo, Facebook, messenger. Hoàn toàn miễn phí",
    generator: 'v0.app'
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#e91e63",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="vi" 
      className={`${playfairDisplay.variable} ${roboto.variable} ${GeistMono.variable}`}
      style={{
        background: "linear-gradient(135deg, rgba(233, 30, 99, 0.08) 0%, rgba(248, 193, 77, 0.06) 100%)",
      }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gradient-to-br from-pink-50 via-white to-yellow-50 antialiased">
        {children}
      </body>
    </html>
  );
}
