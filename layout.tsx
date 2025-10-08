import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariem Ahmouda - Psychologue clinicien Psychothérapeute Lyon",
  description: "Cabinet de Psychologie clinique générale et de psychothérapies, consultations et thérapies enfants, adolescents, adultes et couples. Mariem Ahmouda, psychologue clinicien à Lyon.",
  keywords: "psychologue, psychothérapeute, Lyon, consultation, thérapie, enfants, adolescents, adultes, couples, Mariem Ahmouda",
  authors: [{ name: "Mariem Ahmouda" }],
  openGraph: {
    title: "Mariem Ahmouda - Psychologue clinicien Lyon",
    description: "Cabinet de Psychologie clinique générale et de psychothérapies à Lyon",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${openSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
