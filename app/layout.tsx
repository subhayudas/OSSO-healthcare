import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// Load Urbanist font
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "OSSO | Orthopaedic Healthcare Clinic",
  description: "OSSO is a premier orthopaedic healthcare clinic providing specialized care for bone, joint, and muscle conditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-[#EEF2FF]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
