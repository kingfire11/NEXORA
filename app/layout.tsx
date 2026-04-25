import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import Cursor from "@/components/layout/Cursor";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: "NEXORA — Automation that thinks ahead",
  description:
    "NEXORA builds AI agents, sales workflows, and support bots that replace your most repetitive hours. Almaty / Dubai.",
  metadataBase: new URL("https://nexora.studio"),
  openGraph: {
    title: "NEXORA — Automation that thinks ahead",
    description: "AI agents, sales workflows, and support bots for operators that ship.",
    url: "https://nexora.studio",
    siteName: "NEXORA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA — Automation that thinks ahead",
    description: "AI agents, sales workflows, and support bots for operators that ship.",
  },
  icons: {
    icon: "/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jbMono.variable} ${display.variable}`}
    >
      <body>
        <LenisProvider>
          <Cursor />
          <Nav />
          <main>{children}</main>
          <Footer />
          <div className="noise-overlay" aria-hidden />
        </LenisProvider>
      </body>
    </html>
  );
}
