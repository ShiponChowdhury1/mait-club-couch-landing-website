import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import ToastProvider from "./components/ToastProvider";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mait Club - A Coach in your Pocket",
  description: "Upload. Get AI Feedback. Train Smarter. AI-powered video analysis for athletes who want to train smarter and perform better.",
  other:{
    "facebook-domain-verification": "qnpjcc4ivdz0j7i2aespj6zp4rtz3e",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
