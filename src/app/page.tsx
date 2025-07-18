import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const ClientHome = dynamic(() => import('@/components/ClientHome'), {
  ssr: false,
})

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Restoration & Refurbishment",
  "description": "Expert furniture restoration and repair services in West Coast South Africa. Professional refinishing, antique restoration, and furniture makeovers serving Langebaan, Saldanha Bay, Vredenburg.",
  "url": "https://bloomingfurniture.co.za",
  "telephone": "(079) 375 2588",
  "email": "info@bloomingfurniture.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Langebaan",
    "addressLocality": "Langebaan", 
    "addressRegion": "Western Cape",
    "postalCode": "7357",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0895,
    "longitude": 18.0371
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
    "Furniture Restoration",
    "Furniture Repair",
    "Furniture Refinishing", 
    "Antique Restoration",
    "Wood Furniture Repair",
    "Furniture Makeover",
    "Furniture Refurbishment"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
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
  title: 'Expert Furniture Restoration & Repair | Blooming Furniture West Coast',
  description: 'Transform your beloved furniture with expert restoration services. Professional furniture repair, refinishing & antique restoration in West Coast South Africa. Free consultations available.',
  keywords: 'furniture restoration, furniture repair, furniture refinishing, antique restoration, West Coast furniture restoration, furniture makeover, Saldanha Bay, Vredenburg, Langebaan restoration',
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