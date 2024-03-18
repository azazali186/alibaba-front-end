import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Exchange Hub",
  description:
    "Global Exchange Hub is the platform where you can get your needs from the menufacturere, with the best price and best quality goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen">{children}</main>
      </body>
    </html>
  );
}
