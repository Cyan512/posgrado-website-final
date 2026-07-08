import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import "./globals.css";
import { Geist, Instrument_Serif, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://posgrado.edu.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Escuela de Posgrado — Excelencia Académica",
    template: "%s | Escuela de Posgrado",
  },
  description:
    "Explorá nuestra oferta de maestrías y doctorados. Impulsá tu futuro académico y profesional con programas de excelencia internacional.",
  keywords: ["posgrado", "maestría", "doctorado", "universidad", "educación", "posgrado Perú"],
  authors: [{ name: "Escuela de Posgrado" }],
  creator: "Escuela de Posgrado",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: "Escuela de Posgrado",
    title: "Escuela de Posgrado — Excelencia Académica",
    description:
      "Explorá nuestra oferta de maestrías y doctorados. Impulsá tu futuro académico y profesional con programas de excelencia internacional.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escuela de Posgrado — Excelencia Académica",
    description:
      "Explorá nuestra oferta de maestrías y doctorados. Impulsá tu futuro académico y profesional con programas de excelencia internacional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        geist.variable,
        instrumentSerif.variable,
        geistMono.variable
      )}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <TooltipProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
