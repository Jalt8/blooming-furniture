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
  metadataBase: new URL('https://bloomingfurniture.co.za'),
  title: {
    default: "Blooming Furniture - Expert Woodwork & Furniture Restoration West Coast SA",
    template: "%s | Blooming Furniture"
  },
  description: "Professional woodwork restoration, furniture repair & refinishing services on the West Coast, South Africa. Expert wood furniture craftsmen serving Langebaan, Saldanha Bay, Vredenburg. Free quotes & collection.",
  keywords: "furniture restoration West Coast, wood furniture repair, woodwork restoration, furniture refinishing West Coast, antique wood restoration, Saldanha Bay furniture, Vredenburg woodwork, Langebaan furniture restoration, West Coast craftsmen",
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
    title: "Blooming Furniture - Expert Woodwork & Furniture Restoration West Coast SA",
    description: "Professional woodwork restoration, furniture repair & refinishing services on the West Coast, South Africa. Expert wood furniture craftsmen serving Langebaan, Saldanha Bay, Vredenburg.",
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
    title: "Blooming Furniture - Expert Woodwork & Furniture Restoration West Coast SA",
    description: "Professional woodwork restoration, furniture repair & refinishing services on the West Coast, South Africa.",
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
    "geo.placename": "West Coast, Western Cape, South Africa",
    "geo.position": "-32.9729;18.0189",
    "ICBM": "-32.9729, 18.0189"
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
              "@id": "https://bloomingfurniture.co.za",
              "name": "Blooming Furniture",
              "description": "Professional woodwork restoration, furniture repair and wood refinishing services on the West Coast, South Africa. Expert craftsmen specializing in all types of wood furniture restoration and woodwork.",
              "url": "https://bloomingfurniture.co.za",
              "telephone": "+27793752588",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Western Cape",
                "addressCountry": "South Africa",
                "addressLocality": "West Coast District"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -32.9729,
                "longitude": 18.0189
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
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
                      "name": "Wood Furniture Repair",
                      "description": "Professional wood furniture repair and restoration services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Woodwork Restoration",
                      "description": "Complete woodwork and furniture restoration services for all wood types"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wood Refinishing",
                      "description": "Expert wood refinishing and furniture refinishing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Antique Wood Restoration",
                      "description": "Specialist antique wooden furniture restoration and preservation"
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