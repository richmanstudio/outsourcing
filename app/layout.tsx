import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import type { ReactNode } from "react";
import { getAbsoluteSiteUrl, getSiteUrl, siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteConfig.name} — юридическая фирма в Хабаровске`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: getAbsoluteSiteUrl() },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — юридическая фирма в Хабаровске`,
    description: siteConfig.description,
    url: getAbsoluteSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — юридическая фирма в Хабаровске`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b171d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <a className="skip-link" href="#main">Перейти к содержанию</a>
        {children}
      </body>
    </html>
  );
}
