import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const vazir = localFont({
  src: [
    {
      path: "../public/fonts/vazir/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <title>دکتر رضا سرورزاده - تغذیه بالینی</title>

        <meta
          name="description"
          content="تغذیه شخصی‌سازی شده برای مدیریت بهتر ام‌اس و بهبود کیفیت زندگی."
        />
      </head>

      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {/* Global Navbar */}
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>

        {children}

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
