import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { StructuredData } from "@/components/SEO";
import { WebVitals } from "@/components/Performance";
import { SkipLink } from "@/components/Accessibility";
import { PWAInstaller, ServiceWorkerRegistration } from "@/components/PWA";

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

        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kriptaz Docs" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />

        <StructuredData type="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1247.0"
        data-gr-ext-installed=""
      >
        <SkipLink />
        <WebVitals />
        <ServiceWorkerRegistration />
        <ClientLayout>
          {children}
        </ClientLayout>
        <PWAInstaller />
      </body>
    </html>
  );
}
