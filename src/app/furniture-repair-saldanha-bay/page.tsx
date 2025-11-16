import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: "Expert Furniture Repair in Saldanha Bay | Blooming Furniture",
  description: "Professional furniture repair and restoration services in Saldanha Bay, Western Cape. Quick, reliable furniture fixes for residential and commercial clients. Free estimates available.",
  keywords: "furniture repair Saldanha Bay, furniture restoration Saldanha Bay, furniture fixing Saldanha Bay, Saldanha furniture services, West Coast furniture repair, commercial furniture repair",
  openGraph: {
    title: "Expert Furniture Repair in Saldanha Bay | Blooming Furniture",
    description: "Professional furniture repair and restoration services in Saldanha Bay, Western Cape. Quick, reliable furniture fixes for residential and commercial clients.",
    url: "https://bloomingfurniture.co.za/furniture-repair-saldanha-bay",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Saldanha Bay Furniture Repair",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-repair-saldanha-bay",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Saldanha Bay, Western Cape, South Africa",
    "geo.position": "-33.0117;17.9442",
    "ICBM": "-33.0117, 17.9442",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za/furniture-repair-saldanha-bay",
  "name": "Blooming Furniture - Saldanha Bay Furniture Repair",
  "description": "Professional furniture repair and restoration services in Saldanha Bay, Western Cape",
  "url": "https://bloomingfurniture.co.za/furniture-repair-saldanha-bay",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Saldanha Bay",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0117,
    "longitude": 17.9442
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Saldanha Bay"
    },
    {
      "@type": "City", 
      "name": "Saldanha"
    },
    {
      "@type": "City",
      "name": "Vredenburg"
    },
    {
      "@type": "City",
      "name": "Langebaan"
    }
  ],
  "serviceType": [
    "Furniture Repair",
    "Furniture Restoration", 
    "Commercial Furniture Repair",
    "Emergency Furniture Fixes"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$"
};

export default function SaldanhaBayFurnitureRepair() {
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
        <section className="bg-gradient-to-br from-dark-wood to-forest-green text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Expert Furniture Repair in <span className="text-golden-center">Saldanha Bay</span>
                </h1>
                <p className="text-xl mb-6">
                  Quick, reliable furniture repair services for Saldanha Bay residents and businesses. 
                  From emergency fixes to complete restorations, we handle all your furniture repair needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Repair Estimate
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                  >
                    Emergency Repairs
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Chest6.jpg"
                  alt="Furniture repair in Saldanha Bay"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Furniture Repair Services Across Saldanha Bay
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Serving the greater Saldanha Bay area including Saldanha, the industrial areas, 
                and surrounding communities with professional furniture repair services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Industrial Area Service</h3>
                <p className="text-forest-green">
                  Specialized commercial furniture repair for Saldanha Bay's industrial sector and office buildings.
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Same-Day Service</h3>
                <p className="text-forest-green">
                  Emergency furniture repairs available throughout Saldanha Bay with same-day response for urgent needs.
                </p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Mobile Repair Service</h3>
                <p className="text-forest-green">
                  On-site furniture repairs at your Saldanha Bay location for large items and bulk repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Services */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Comprehensive Furniture Repair in Saldanha Bay
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Structural Repairs</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Broken leg and joint repairs</li>
                  <li>• Frame reinforcement and stabilization</li>
                  <li>• Drawer slide replacement</li>
                  <li>• Door hinge adjustments</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Paintbrush className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Surface Repairs</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Scratch and dent removal</li>
                  <li>• Water damage restoration</li>
                  <li>• Burn mark repair</li>
                  <li>• Color matching and touch-ups</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Award className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Commercial Services</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Office furniture maintenance</li>
                  <li>• Restaurant seating repairs</li>
                  <li>• Hotel furniture restoration</li>
                  <li>• Industrial furniture fixes</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Star className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Emergency Repairs</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Same-day urgent repairs</li>
                  <li>• Safety hazard corrections</li>
                  <li>• Temporary stabilization</li>
                  <li>• Insurance claim support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Focus */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Commercial Furniture Repair in Saldanha Bay
                </h2>
                <p className="text-lg text-forest-green mb-6">
                  Saldanha Bay's industrial and commercial sector relies on functional furniture. 
                  We provide specialized repair services for businesses throughout the area.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Industrial Sector:</strong> Specialized repairs for industrial offices and facilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Hospitality:</strong> Restaurant, hotel, and accommodation furniture repairs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Marine Industry:</strong> Understanding of salt air effects on furniture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Contract Services:</strong> Ongoing maintenance contracts available
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/portfolio/portfolio-12.jpeg"
                  alt="Commercial furniture repair Saldanha Bay"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/portfolio-14.jpeg"
                  alt="Office furniture repair Saldanha"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/portfolio-15.jpeg"
                  alt="Restaurant furniture repair Saldanha Bay"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/portfolio-16.jpeg"
                  alt="Industrial furniture repair Saldanha"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Emergency Furniture Repair in Saldanha Bay</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Furniture emergency? We provide same-day repair services throughout Saldanha Bay 
              for urgent situations and safety concerns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white-daisy bg-opacity-10 rounded-lg p-4">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Same-Day Service</h3>
                <p className="text-sm">Emergency repairs within 24 hours</p>
              </div>
              <div className="bg-white-daisy bg-opacity-10 rounded-lg p-4">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">24/7 Contact</h3>
                <p className="text-sm">Call anytime for urgent repairs</p>
              </div>
              <div className="bg-white-daisy bg-opacity-10 rounded-lg p-4">
                <Wrench className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Mobile Service</h3>
                <p className="text-sm">We come to your Saldanha location</p>
              </div>
              <div className="bg-white-daisy bg-opacity-10 rounded-lg p-4">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Safety Priority</h3>
                <p className="text-sm">Immediate safety hazard fixes</p>
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Call for Emergency Repair: (079) 375 2588
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Furniture Repaired in Saldanha Bay</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for professional furniture repair services in Saldanha Bay. 
              From quick fixes to complete restorations, we're here to help.
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
                <span className="text-lg">Serving All Saldanha Bay</span>
              </div>
            </div>
            
            <Link 
              href="/book-consultation"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Book Your Repair Service Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}