import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, Playfair_Display, PT_Serif } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Zilnic header only: eyebrow font. */
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500"],
});

/** Zilnic header only: title + date font. PT Serif only ships 400/700 (no 500). */
const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Calendar Ortodox",
  description: "Calendarul ortodox zilnic, lunar și anual.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${inter.variable} ${cinzel.variable} ${ptSerif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg-app font-sans antialiased">
        <div className="app-frame">{children}</div>
      </body>
    </html>
  );
}
