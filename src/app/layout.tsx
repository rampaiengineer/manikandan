import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export const metadata: Metadata = {
  title: "Meenakshi & Meenakshi | Premium Steel, Brass & Copper Store",
  description:
    "Since 1970 – Meenakshi & Meenakshi brings premium stainless steel, brass and copper cookware & pooja items to families worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,#fff7e6,transparent_60%),linear-gradient(to_bottom,#ffffff,#f5f5f5)]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
