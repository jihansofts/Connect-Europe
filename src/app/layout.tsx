import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { ModelProvider } from "@/context/ModelContext";
import InputModal from "@/common/InputModel";

const geistSans = Roboto({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = Poppins({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100",
});

export const metadata: Metadata = {
  title: "Connect Europe",
  description: "Connect Europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ModelProvider>
          {children}
          <InputModal />
        </ModelProvider>
      </body>
    </html>
  );
}
