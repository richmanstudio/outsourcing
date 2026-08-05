import type { Metadata, Viewport } from "next";
import { Manrope, Prata } from "next/font/google";
import type { ReactNode } from "react";
import { getAbsoluteSiteUrl, getSiteUrl, siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const prata = Prata({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${siteConfig.name} — юридическая компания в Хабаровске`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: getAbsoluteSiteUrl() },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — юридическая компания в Хабаровске`,
    description: siteConfig.description,
    url: getAbsoluteSiteUrl(),
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — юридическая компания в Хабаровске`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#171719",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${prata.variable}`}>
      <body>
        <a className="skip-link" href="#main">Перейти к содержанию</a>
        {children}
      </body>
    </html>
  );
}
