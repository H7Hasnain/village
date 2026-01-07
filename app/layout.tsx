import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GHL AI Agents | Control Your GoHighLevel With AI",
  description: "Run your entire GoHighLevel CRM by simply sending a message. No dashboards, just results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
        
        {/* Simple Tidio Integration Placeholder (Real one would use a specific key) */}
        {/* <Script id="tidio-chat" strategy="lazyOnload">
          {`
            // Tidio Script would go here
            console.log("Tidio placeholder loaded");
          `}
        </Script> */}
      </body>
    </html>
  );
}
