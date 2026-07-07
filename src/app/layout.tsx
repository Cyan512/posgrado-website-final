import type { Metadata } from "next";
import Header from "@/src/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Posgrado",
  description: "Explorá nuestros programas de posgrado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
