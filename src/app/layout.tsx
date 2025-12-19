import type { Metadata } from "next";
import "./globals.css";
import { Inter, Syncopate, Space_Mono, Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProviderWrapper } from "@/components/cart/CartProviderWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const syncopate = Syncopate({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-syncopate" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Deportament Stavok",
  description: "Two experts. Two approaches. One goal.",
  icons: {
    icon: "/photos/favic.jpeg",
    shortcut: "/photos/favic.jpeg",
    apple: "/photos/favic.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(
        inter.className,
        syncopate.variable,
        spaceMono.variable,
        manrope.variable,
        "min-h-screen bg-black text-white antialiased"
      )}>
        <CartProviderWrapper>
          <Header />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  );
}
