import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Head from 'next/head';
import GoogleTagManager from '@/components/GoogleTagManager';
import MetaPixel from '@/components/MetaPixel';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Blooming Furniture - Expert Furniture Restoration West Coast South Africa",
    template: "%s | Blooming Furniture"
  },
  description: "Professional furniture restoration, repair & refinishing services in West Coast, South Africa. Serving Saldanha Bay, Vredenburg, Langebaan. Expert craftsmen, free quotes & collection.",
  keywords: "furniture restoration, furniture repair, West Coast South Africa, furniture refinishing, antique restoration, Saldanha Bay, Vredenburg, Langebaan, furniture makeover",
  authors: [{ name: "Blooming Furniture" }],
  creator: "Blooming Furniture",
  publisher: "Blooming Furniture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://bloomingfurniture.co.za",
    siteName: "Blooming Furniture",
    title: "Blooming Furniture - Expert Furniture Restoration West Coast South Africa",
    description: "Professional furniture restoration, repair & refinishing services in West Coast, South Africa. Expert craftsmen serving Saldanha Bay, Vredenburg, Langebaan.",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 1200,
        height: 630,
        alt: "Blooming Furniture - Professional Furniture Restoration"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blooming Furniture - Expert Furniture Restoration West Coast South Africa",
    description: "Professional furniture restoration, repair & refinishing services in West Coast, South Africa.",
    images: ["/blooming-furniture.png"]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Blooming Furniture",
  },
  applicationName: "Blooming Furniture",
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Cape Town, South Africa",
    "geo.position": "-33.0895;18.0371",
    "ICBM": "-33.0895, 18.0371"
  }
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
        <CookieConsent />
        <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID || ''} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Blooming Furniture",
              "description": "Professional furniture restoration, repair and refinishing services in West Coast, South Africa",
              "url": "https://bloomingfurniture.co.za",
              "telephone": "+27793752588",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Western Cape",
                "addressCountry": "South Africa",
                "addressLocality": "Cape Town"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.0895,
                "longitude": 18.0371
              },
              "openingHours": [
                "Mo-Fr 08:00-17:00",
                "Sa 08:00-14:00"
              ],
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -33.0895,
                  "longitude": 18.0371
                },
                "geoRadius": "100000"
              },
              "sameAs": [
                "https://wa.me/27793752588"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Furniture Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Furniture Repair",
                      "description": "Professional furniture repair services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Furniture Restoration",
                      "description": "Complete furniture restoration services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Furniture Refinishing",
                      "description": "Professional furniture refinishing"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
          <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID || ''} />
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