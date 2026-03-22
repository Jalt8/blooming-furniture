import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Mountain, Fish } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration in Elands Bay",
  description: "Expert furniture restoration, repair and refinishing services in Elands Bay, Western Cape. Specializing in coastal cottage and fishing village furniture restoration. Free quotes available.",
  keywords: "furniture restoration Elands Bay, furniture repair Elands Bay, furniture refinishing Elands Bay, coastal furniture restoration, Elands Bay furniture services, fishing village furniture, cottage furniture restoration",
  openGraph: {
    title: "Furniture Restoration in Elands Bay | Blooming Furniture",
    description: "Expert furniture restoration services in Elands Bay. Specializing in coastal cottage and fishing village furniture restoration.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-elands-bay",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Elands Bay Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-elands-bay",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Elands Bay, Western Cape, South Africa",
    "geo.position": "-32.3011;18.3372",
    "ICBM": "-32.3011, 18.3372",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Elands Bay Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Elands Bay, Western Cape. Specializing in coastal cottage and fishing village furniture restoration.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-elands-bay",
  "telephone": "+27793752588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Elands Bay",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.3011,
    "longitude": 18.3372
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Elands Bay"
    },
    {
      "@type": "City", 
      "name": "Baboon Point"
    },
    {
      "@type": "City",
      "name": "Lambert's Bay"
    },
    {
      "@type": "City",
      "name": "Graafwater"
    }
  ],
  "serviceType": [
    "Coastal Cottage Furniture Restoration",
    "Fishing Village Furniture Repair", 
    "Vintage Surfboard Restoration",
    "Beach House Furniture Care",
    "Rustic Furniture Refinishing"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Elands Bay Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Surf Culture Furniture Restoration",
          "description": "Restoration of vintage surf culture and beach lifestyle furniture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fishing Village Heritage Restoration",
          "description": "Preservation of furniture reflecting Elands Bay's fishing heritage"
        }
      }
    ]
  }
};

export default function ElandsBayFurnitureRestoration() {
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
                  Furniture Restoration in <span className="text-golden-center">Elands Bay</span>
                </h1>
                <p className="text-xl mb-6">
                  Restore and preserve your furniture in the laid-back surfing village of Elands Bay. 
                  From vintage surf culture pieces to fishing village heritage furniture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Elands Bay Quote
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
                  src="/images/portfolio/sunbed3.jpg"
                  alt="Surf culture furniture restoration in Elands Bay"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Elands Bay Culture Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Celebrating Elands Bay's Unique Character
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Elands Bay's reputation as South Africa's premier surfing destination brings a unique blend 
                of laid-back beach culture and traditional fishing village heritage that's reflected in local furniture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Fish className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Surf Culture Heritage</h3>
                <p className="text-forest-green">
                  Restoration of vintage surfboards, beach furniture, and pieces that celebrate 
                  Elands Bay's legendary left-hand point break.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Mountain className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Fishing Village Legacy</h3>
                <p className="text-forest-green">
                  Preserving furniture that tells the story of Elands Bay's traditional fishing community 
                  and West Coast heritage.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Award className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal Lifestyle</h3>
                <p className="text-forest-green">
                  Understanding the relaxed coastal lifestyle and how it influences furniture choices 
                  and restoration needs in Elands Bay.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Specialized Restoration Services for Elands Bay
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Fish className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Surf Culture & Beach Furniture</h3>
                <p className="text-forest-green mb-4">
                  Celebrating Elands Bay's world-famous surfing heritage through specialized restoration:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vintage surfboard restoration and display mounting</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Beach cottage furniture refinishing</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Surf camp and backpacker lodge furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weathered driftwood furniture restoration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Mountain className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Fishing Village Heritage</h3>
                <p className="text-forest-green mb-4">
                  Preserving furniture that reflects Elands Bay's traditional fishing community heritage:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Traditional fisherman's cottage furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>West Coast cultural heritage pieces</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Maritime-influenced dining and living furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rustic boat-building inspired pieces</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Coastal Protection & Repair</h3>
                <p className="text-forest-green mb-4">
                  Specialized treatments for Elands Bay's unique coastal and mountain-meets-sea environment:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Salt air corrosion prevention and repair</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>UV protection for high sun exposure</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wind and sand damage restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mountain-to-sea climate adaptation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Paintbrush className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Beach House & Holiday Home</h3>
                <p className="text-forest-green mb-4">
                  Specialized services for Elands Bay's popular holiday destination properties:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Holiday rental property furniture restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Beach house outdoor furniture weatherproofing</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vacation home seasonal preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-traffic furniture durability treatments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Understanding */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why Elands Bay Residents Choose Our Services
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Fish className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Surf Culture Appreciation</h3>
                      <p className="text-forest-green">
                        Understanding and respect for Elands Bay's legendary surf culture and the vintage boards, 
                        furniture, and memorabilia that celebrate this heritage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mountain className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Unique Environment Knowledge</h3>
                      <p className="text-forest-green">
                        Expertise in how Elands Bay's unique geography - where the Verlorenvlei meets the ocean - 
                        creates specific challenges for furniture preservation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Seasonal Service Understanding</h3>
                      <p className="text-forest-green">
                        Knowledge of Elands Bay's seasonal patterns - busy summer surf seasons and quiet winter months - 
                        and how to time restoration work accordingly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Remote Location Service</h3>
                      <p className="text-forest-green">
                        Reliable collection and delivery service to this remote but beloved West Coast destination, 
                        including surrounding areas like Baboon Point and Graafwater.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Elands Bay Service Area</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Primary Coverage:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Central Elands Bay village</li>
                      <li>• Baboon Point</li>
                      <li>• Beach cottages and surf camps</li>
                      <li>• Holiday home estates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Extended Service:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Lambert's Bay</li>
                      <li>• Graafwater</li>
                      <li>• Clanwilliam area</li>
                      <li>• Remote coastal properties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Special Services:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Surf camp furniture solutions</li>
                      <li>• Holiday rental preparation</li>
                      <li>• Remote property access</li>
                      <li>• Emergency coastal damage repair</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <blockquote className="text-sm italic">
                    "Elands Bay has this amazing laid-back vibe that's reflected in the furniture. 
                    We love helping preserve pieces that capture that authentic coastal lifestyle."
                  </blockquote>
                  <p className="text-golden-center font-semibold mt-2">- Coastal Restoration Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our Elands Bay Service Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Remote Assessment",
                  description: "We travel to Elands Bay to assess your furniture and provide detailed quotes"
                },
                {
                  step: "2", 
                  title: "Careful Collection",
                  description: "Professional collection service with protection for the journey from this remote location"
                },
                {
                  step: "3",
                  title: "Specialized Restoration", 
                  description: "Restoration using techniques suited to Elands Bay's coastal and cultural environment"
                },
                {
                  step: "4",
                  title: "Protected Return",
                  description: "Safe delivery back to Elands Bay with coastal protection treatments applied"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-wood mb-2">{item.title}</h3>
                  <p className="text-forest-green">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-8">Elands Bay Client Experience</h2>
            <blockquote className="text-xl italic text-forest-green mb-6">
              "They restored our vintage surfboard collection that we've had hanging in our Elands Bay surf shack 
              for decades. The boards look incredible and are now properly preserved for the coastal environment. 
              Great to work with professionals who understand the surf culture here."
            </blockquote>
            <cite className="text-golden-center font-semibold">— Dave M., Elands Bay Surf Shop Owner</cite>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Elands Bay Furniture?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether it's surf culture memorabilia, fishing village heritage pieces, or beach house furniture, 
              we understand what makes Elands Bay special. Contact us for expert restoration services.
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
                <span className="text-lg">Serving Elands Bay Area</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Get Your Free Elands Bay Quote
              </Link>
              <Link 
                href="tel:+27793752588"
                className="inline-block border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300"
              >
                Call: (079) 375 2588
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}