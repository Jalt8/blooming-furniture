import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Head from 'next/head';
import GoogleTagManager from '@/components/GoogleTagManager';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Blooming Furniture",
  description: "Discover timeless elegance with our expert furniture restoration and custom design services.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Blooming Furniture",
  },
  applicationName: "Blooming Furniture",
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <link
          rel="preload"
          href="/blooming-furniture.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} bg-white-daisy text-dark-wood`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppWidget phoneNumber="+27793752588" message="Hi, I'm interested in your furniture restoration services." />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script dangerouslySetInnerHTML={{
          __html: `
            function gtagSendEvent(eventName, url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', eventName, {
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            }
          `
        }} />
      </body>
    </html>
  );
}