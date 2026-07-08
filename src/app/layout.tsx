import type { Metadata } from "next";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Posgrado — Programas académicos",
    template: "%s | Posgrado",
  },
  description:
    "Explorá nuestra oferta de maestrías y doctorados. Impulsá tu futuro académico y profesional con programas de excelencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
