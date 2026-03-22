import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush } from 'lucide-react';

export const metadata: Metadata = {
  title: "Professional Woodwork & Furniture Restoration Langebaan",
  description: "Expert woodwork restoration, wood furniture repair and refinishing services in Langebaan, Western Cape. Transform your wooden furniture with local craftsmanship. Free quotes for Langebaan residents.",
  keywords: "woodwork restoration Langebaan, wood furniture repair Langebaan, furniture refinishing Langebaan, antique wood restoration Langebaan, Langebaan furniture services, West Coast woodwork, wooden furniture Langebaan",
  openGraph: {
    title: "Professional Furniture Restoration in Langebaan | Blooming Furniture",
    description: "Expert furniture restoration, repair and refinishing services in Langebaan, Western Cape. Transform your beloved furniture with local craftsmanship.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-langebaan",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Langebaan Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-langebaan",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Langebaan, Western Cape, South Africa",
    "geo.position": "-33.0893;18.0371",
    "ICBM": "-33.0893, 18.0371",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Langebaan Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Langebaan, Western Cape",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-langebaan",
  "telephone": "+27793752588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Langebaan",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0893,
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
    }
  ],
  "serviceType": [
    "Woodwork Restoration",
    "Wood Furniture Repair",
    "Furniture Restoration",
    "Wood Refinishing",
    "Antique Wood Restoration",
    "Wooden Furniture Refinishing"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$"
};

export default function LangebaanFurnitureRestoration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Professional Woodwork & Furniture Restoration in <span className="text-golden-center">Langebaan</span>
                </h1>
                <p className="text-xl mb-6">
                  Transform your wooden furniture with expert woodwork craftsmanship right here in Langebaan.
                  From antique wood restoration to modern furniture repair, we bring new life to all your wood pieces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Quote for Langebaan
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Lime-Wash2.jpg"
                  alt="Furniture restoration in Langebaan"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Serving Langebaan & Surrounding Areas
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Located in the heart of the West Coast, we provide professional furniture restoration 
                services to Langebaan residents and the greater West Coast region.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Local Expertise</h3>
                <p className="text-forest-green">
                  Based in Langebaan with deep knowledge of West Coast furniture styles and coastal environment challenges.
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Quick Response</h3>
                <p className="text-forest-green">
                  Fast collection and delivery within Langebaan. Same-day quotes for local residents.
                </p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal Specialists</h3>
                <p className="text-forest-green">
                  Expert in treating furniture affected by Langebaan's coastal salt air and humidity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Langebaan */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Woodwork & Furniture Restoration Services in Langebaan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Hammer className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Antique Wood Restoration</h3>
                <p className="text-forest-green">
                  Restore precious wooden heirlooms and valuable antique woodwork with traditional techniques.
                </p>
              </div>

              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Paintbrush className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Wood Refinishing</h3>
                <p className="text-forest-green">
                  Complete wood refinishing services including stripping, sanding, and applying new finishes to all wood types.
                </p>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Award className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal Protection</h3>
                <p className="text-forest-green">
                  Specialized treatments to protect furniture from Langebaan's salt air and moisture.
                </p>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Star className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Custom Repairs</h3>
                <p className="text-forest-green">
                  Structural repairs, joint restoration, and custom part replacement for any furniture piece.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Langebaan */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why Langebaan Residents Choose Blooming Furniture
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Local Expertise:</strong> Understanding Langebaan's unique coastal environment and its effects on furniture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Convenient Service:</strong> Collection and delivery available throughout Langebaan and surrounds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Quality Guarantee:</strong> Every piece restored with the highest standards of craftsmanship
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/portfolio/Chest1.jpg"
                  alt="Before furniture restoration in Langebaan"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/Chest2.jpg"
                  alt="After furniture restoration in Langebaan"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/sunbed1.jpg"
                  alt="Langebaan furniture repair process"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/sunbed7.jpg"
                  alt="Restored furniture in Langebaan home"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Furniture in Langebaan?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. We're here to help bring your 
              furniture back to life with professional restoration services in Langebaan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <span className="text-lg">(079) 375 2588</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <span className="text-lg">wendydanie@gmail.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-3" />
                <span className="text-lg">Serving Langebaan & West Coast</span>
              </div>
            </div>
            
            <Link 
              href="/book-consultation"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Get Your Free Quote Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}