import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { StructuredData } from "@/components/SEO";
import { WebVitals } from "@/components/Performance";
import { SkipLink } from "@/components/Accessibility";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kriptaz Blockchain Sənədləri",
    template: "%s | Kriptaz Blockchain"
  },
  description: "Bu sənəd Kriptaz Blockchain-in bütün layihə planlamasını və ətraflı sənədlərini əhatə edir. Texniki sənədlər, API referansları və inkişaf təlimatları.",
  keywords: [
    "Kriptaz",
    "Blockchain",
    "Cryptocurrency",
    "Documentation",
    "API",
    "Developer",
    "Sənədlər",
    "Texniki",
    "Azerbaijan"
  ],
  authors: [{ name: "Kriptaz Blockchain" }],
  creator: "Kriptaz Blockchain",
  publisher: "Kriptaz Blockchain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    url: 'https://docs.kriptaz.com',
    siteName: 'Kriptaz Blockchain Sənədləri',
    title: 'Kriptaz Blockchain Sənədləri',
    description: 'Bu sənəd Kriptaz Blockchain-in bütün layihə planlamasını və ətraflı sənədlərini əhatə edir.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kriptaz Blockchain Sənədləri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kriptazChain',
    creator: '@kriptazChain',
    title: 'Kriptaz Blockchain Sənədləri',
    description: 'Bu sənəd Kriptaz Blockchain-in bütün layihə planlamasını və ətraflı sənədlərini əhatə edir.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://docs.kriptaz.com',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <head>
        {/* Font Preloading */}
        <link
          rel="preload"
          href="/fonts/kriptaz/Kriptaz-Regular-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/kriptaz/Kriptaz-Medium-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/kriptaz/Kriptaz-Bold-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <StructuredData type="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1246.0"
        data-gr-ext-installed=""
      >
        <SkipLink />
        <WebVitals />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
