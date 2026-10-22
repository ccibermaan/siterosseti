import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import "./globals.css";

const serifDisplay = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const sansBody = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Peplum Esmalteria & Beleza | Unhas, Cabelo e Estética em São Paulo",
  description:
    "Esmalteria e salão de beleza no Parque São Domingos, São Paulo. Esmaltação em gel, nail art, alongamentos, cabelo, sobrancelhas, cílios e estética — beleza completa em um só lugar. Agende pelo WhatsApp.",
  keywords: [
    "esmalteria São Paulo",
    "salão de beleza Parque São Domingos",
    "esmaltação em gel",
    "nail art",
    "alongamento de unhas",
    "manicure e pedicure",
    "Peplum",
  ],
  icons: {
    icon: "/images/favicon-peplum.png",
  },
  openGraph: {
    title: "Peplum Esmalteria & Beleza",
    description:
      "Beleza completa em um só lugar — unhas, cabelo, sobrancelhas, cílios e estética no Parque São Domingos, São Paulo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${serifDisplay.variable} ${scriptFont.variable} ${sansBody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
