import type { Metadata } from "next";
import { Nunito_Sans, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const darker_grotesque = Darker_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-darker-grotesque",
});

export const metadata: Metadata = {
  title: "Gerardor de cartão de visita",
  description: "App para gerar cartão de visita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.variable} ${darker_grotesque.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
