import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Waves, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: "Coastal Furniture Restoration in Yzerfontein | Blooming Furniture",
  description: "Expert furniture restoration, repair and refinishing services in Yzerfontein, Western Cape. Specializing in coastal furniture protection and marine environment restoration. Free quotes.",
  keywords: "furniture restoration Yzerfontein, furniture repair Yzerfontein, furniture refinishing Yzerfontein, coastal furniture restoration, Yzerfontein furniture services, marine furniture protection, beachfront furniture repair",
  openGraph: {
    title: "Coastal Furniture Restoration in Yzerfontein | Blooming Furniture",
    description: "Expert furniture restoration services in Yzerfontein. Specializing in coastal furniture protection and marine environment restoration.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-yzerfontein",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Yzerfontein Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-yzerfontein",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Yzerfontein, Western Cape, South Africa",
    "geo.position": "-33.3446;18.1593",
    "ICBM": "-33.3446, 18.1593",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Yzerfontein Coastal Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Yzerfontein, Western Cape. Specializing in coastal and marine environment furniture protection.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-yzerfontein",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Yzerfontein",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.3446,
    "longitude": 18.1593
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Yzerfontein"
    },
    {
      "@type": "City", 
      "name": "Churchhaven"
    },
    {
      "@type": "City",
      "name": "Bloubergstrand"
    },
    {
      "@type": "City",
      "name": "Melkbosstrand"
    }
  ],
  "serviceType": [
    "Coastal Furniture Restoration",
    "Marine Environment Furniture Repair", 
    "Salt Air Damage Restoration",
    "Beachfront Property Furniture Care",
    "Outdoor Furniture Weatherproofing"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Yzerfontein Coastal Furniture Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marine-Grade Furniture Protection",
          "description": "Advanced protection treatments for coastal environment furniture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Salt Air Damage Restoration",
          "description": "Specialized restoration of furniture damaged by coastal salt air"
        }
      }
    ]
  }
};

export default function YzerfonteintFurnitureRestoration() {
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
                  Coastal Furniture Restoration in <span className="text-golden-center">Yzerfontein</span>
                </h1>
                <p className="text-xl mb-6">
                  Protect and restore your furniture with specialized treatments designed for Yzerfontein's 
                  spectacular but challenging coastal environment. Expert care for beachfront living.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Coastal Assessment
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
                  src="/images/portfolio/Lime-Wash1.jpg"
                  alt="Coastal furniture restoration in Yzerfontein"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coastal Challenges Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Understanding Yzerfontein's Unique Coastal Environment
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Yzerfontein's stunning 16-mile white beach comes with unique challenges for furniture preservation. 
                Our specialized knowledge protects your investment in this beautiful but demanding environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Waves className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Salt Spray Protection</h3>
                <p className="text-forest-green text-sm">
                  Advanced treatments to protect against constant salt spray from the Atlantic Ocean.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Wind className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Wind Resistance</h3>
                <p className="text-forest-green text-sm">
                  Reinforcement and protection against Yzerfontein's strong coastal winds.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">UV Protection</h3>
                <p className="text-forest-green text-sm">
                  Special finishes to protect against intense UV exposure from beach reflection.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Humidity Control</h3>
                <p className="text-forest-green text-sm">
                  Treatments to prevent warping and cracking from high coastal humidity levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Specialized Coastal Furniture Services in Yzerfontein
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Waves className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Marine Environment Restoration</h3>
                <p className="text-forest-green mb-4">
                  Yzerfontein's direct Atlantic Ocean exposure requires specialized restoration techniques:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Salt corrosion removal and prevention</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marine-grade protective coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Moisture barrier applications</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Anti-fungal treatments for coastal humidity</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Wind className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Beachfront Property Furniture</h3>
                <p className="text-forest-green mb-4">
                  Specialized care for furniture in Yzerfontein's beachfront homes and holiday properties:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Outdoor deck and patio furniture restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Indoor furniture salt air protection</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Holiday home furniture preservation</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sand-resistant surface treatments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Emergency Coastal Damage Repair</h3>
                <p className="text-forest-green mb-4">
                  Rapid response services for furniture damaged by Yzerfontein's challenging coastal conditions:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Storm and wind damage restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sand and salt spray damage repair</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>UV fade and bleaching restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Structural reinforcement for coastal stress</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Paintbrush className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Coastal-Specific Finishes</h3>
                <p className="text-forest-green mb-4">
                  Advanced finishing techniques designed specifically for Yzerfontein's marine environment:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Yacht-grade polyurethane finishes</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>UV-resistant topcoats and stains</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Breathable moisture-resistant finishes</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Anti-slip treatments for deck furniture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why Yzerfontein Property Owners Choose Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Waves className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Coastal Environment Experts</h3>
                      <p className="text-forest-green">
                        Deep understanding of how Yzerfontein's direct ocean exposure, constant salt spray, 
                        and strong winds affect different furniture materials and finishes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Local Accessibility</h3>
                      <p className="text-forest-green">
                        Convenient collection and delivery throughout Yzerfontein, including beachfront properties, 
                        Churchhaven, and neighboring coastal communities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Marine-Grade Standards</h3>
                      <p className="text-forest-green">
                        Use of marine-grade materials and yacht industry techniques to ensure your furniture 
                        withstands the harshest coastal conditions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Seasonal Service</h3>
                      <p className="text-forest-green">
                        Understanding of Yzerfontein's seasonal patterns and how to prepare furniture 
                        for both summer tourist seasons and winter storms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Yzerfontein Coastal Service</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Service Coverage:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Yzerfontein beachfront properties</li>
                      <li>• Yzerfontein residential areas</li>
                      <li>• Churchhaven</li>
                      <li>• West Coast National Park properties</li>
                      <li>• Bloubergstrand</li>
                      <li>• Melkbosstrand</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Specialty Services:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Holiday home preparation</li>
                      <li>• Emergency storm damage repair</li>
                      <li>• Seasonal protection treatments</li>
                      <li>• Marine environment consultation</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <blockquote className="text-sm italic">
                    "Yzerfontein's beauty comes with challenges. We've spent years perfecting techniques 
                    to protect furniture in this incredible but demanding coastal environment."
                  </blockquote>
                  <p className="text-golden-center font-semibold mt-2">- Coastal Restoration Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-8">Yzerfontein Client Success</h2>
            <blockquote className="text-xl italic text-forest-green mb-6">
              "Our beachfront deck furniture was completely restored after years of salt spray damage. 
              The marine-grade protection they applied has kept it looking new through two more seasons 
              of Yzerfontein's coastal conditions. Excellent service and results!"
            </blockquote>
            <cite className="text-golden-center font-semibold">— Mark & Linda J., Yzerfontein Beachfront</cite>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Protect Your Coastal Furniture Investment</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't let Yzerfontein's beautiful but challenging coastal environment damage your furniture. 
              Contact us for expert restoration and protection services designed specifically for marine environments.
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
                <span className="text-lg">Serving Yzerfontein Coast</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Free Coastal Assessment
              </Link>
              <Link 
                href="tel:+27793752588"
                className="inline-block border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300"
              >
                Emergency Repair: (079) 375 2588
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}