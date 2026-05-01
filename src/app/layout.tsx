import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cella Casalone Commercialisti Associati | Milano",
  description:
    "Commercialista abilitato all'esercizio della professione a Milano. Consulenza fiscale, societaria e aziendale per imprese e privati. Via Giotto 7, 20145 Milano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
