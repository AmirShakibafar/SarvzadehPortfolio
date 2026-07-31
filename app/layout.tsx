import type { Metadata } from "next";
import { Vazirmatn, Lateef } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
});

const lateef = Lateef({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-lateef",
});

export const metadata: Metadata = {
  title: "پورتفولیو",
  description: "پروژه پورتفولیو Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.variable} ${lateef.variable} font-sans antialiased text-start`}
      >
        {children}
      </body>
    </html>
  );
}
