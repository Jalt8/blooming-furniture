import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const ClientHome = dynamic(() => import('@/components/ClientHome'))

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Woodwork Restoration & Refurbishment",
  "description": "Expert woodwork and furniture restoration services on the West Coast South Africa. Professional wood refinishing, antique wood restoration, and wooden furniture repair serving Langebaan, Saldanha Bay, Vredenburg.",
  "url": "https://bloomingfurniture.co.za",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "West Coast",
    "addressLocality": "Langebaan",
    "addressRegion": "Western Cape",
    "postalCode": "7357",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.9729,
    "longitude": 18.0189
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Langebaan"
    },
    {
      "@type": "City",
      "name": "Saldanha Bay" 
    },
    {
      "@type": "City",
      "name": "Vredenburg"
    },
    {
      "@type": "City",
      "name": "Paternoster"
    },
    {
      "@type": "City",
      "name": "Velddrif"
    },
    {
      "@type": "City", 
      "name": "Hopefield"
    },
    {
      "@type": "City",
      "name": "Yzerfontein"
    },
    {
      "@type": "City",
      "name": "Elands Bay"
    }
  ],
  "serviceType": [
    "Woodwork Restoration",
    "Wood Furniture Repair",
    "Furniture Restoration",
    "Wood Refinishing",
    "Antique Wood Restoration",
    "Wooden Furniture Refinishing",
    "Wood Furniture Refurbishment",
    "Custom Woodwork Repair"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Consultation",
          "description": "Complimentary assessment and quote for furniture restoration projects"
        }
      }
    ]
  }
}

export const metadata: Metadata = {
  title: 'Expert Woodwork & Furniture Restoration West Coast | Blooming Furniture',
  description: 'Transform your wooden furniture with expert woodwork restoration services. Professional wood furniture repair, refinishing & antique wood restoration on the West Coast South Africa. Free consultations available.',
  keywords: 'woodwork restoration West Coast, wood furniture repair, furniture restoration, wood refinishing, antique wood restoration, West Coast furniture restoration, wooden furniture repair, Saldanha Bay, Vredenburg, Langebaan woodwork',
  openGraph: {
    title: 'Blooming Furniture - Expert Furniture Restoration West Coast South Africa',
    description: 'Professional furniture restoration & repair services in West Coast, South Africa. Expert craftsmanship serving Saldanha Bay, Vredenburg, Langebaan.',
    url: 'https://bloomingfurniture.co.za',
    images: ['/blooming-furniture.png'],
    type: 'website',
    locale: 'en_ZA'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <main>
        <ClientHome />
      </main>
    </>
  )
}