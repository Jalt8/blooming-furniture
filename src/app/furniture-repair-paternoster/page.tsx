import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Waves, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Repair in Paternoster | Coastal Furniture Specialists | Blooming Furniture",
  description: "Expert furniture repair and restoration in Paternoster, Western Cape. Specialized coastal furniture treatments for this iconic fishing village. Premium services for holiday homes and locals.",
  keywords: "furniture repair Paternoster, coastal furniture restoration Paternoster, holiday home furniture repair, Paternoster furniture services, fishing village furniture, luxury furniture repair West Coast",
  openGraph: {
    title: "Furniture Repair in Paternoster | Coastal Furniture Specialists",
    description: "Expert furniture repair and restoration in Paternoster, Western Cape. Specialized coastal furniture treatments for this iconic fishing village.",
    url: "https://bloomingfurniture.co.za/furniture-repair-paternoster",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Paternoster Furniture Repair",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-repair-paternoster",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Paternoster, Western Cape, South Africa",
    "geo.position": "-32.8083;17.8900",
    "ICBM": "-32.8083, 17.8900",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Paternoster Furniture Repair",
  "description": "Expert furniture repair and restoration services in Paternoster, Western Cape. Specialized coastal furniture treatments.",
  "url": "https://bloomingfurniture.co.za/furniture-repair-paternoster",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paternoster",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.8083,
    "longitude": 17.8900
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Paternoster"
    },
    {
      "@type": "City", 
      "name": "St Helena Bay"
    },
    {
      "@type": "City",
      "name": "Vredenburg"
    },
    {
      "@type": "City",
      "name": "Saldanha Bay"
    }
  ],
  "serviceType": [
    "Coastal Furniture Repair",
    "Holiday Home Furniture Services", 
    "Luxury Furniture Restoration",
    "Salt Air Protection Treatment"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$$"
};

export default function PaternosterFurnitureRepair() {
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
        <section className="bg-gradient-to-br from-white-daisy via-golden-center to-forest-green text-dark-wood py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Furniture Repair in <span className="text-forest-green">Paternoster</span>
                </h1>
                <p className="text-xl mb-6">
                  Premium furniture repair and restoration services for Paternoster's unique coastal environment. 
                  Specialized care for holiday homes, fishing cottages, and luxury properties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-forest-green text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-dark-wood transition duration-300 text-center"
                  >
                    Premium Service Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-forest-green text-forest-green px-8 py-3 rounded-lg font-semibold hover:bg-forest-green hover:text-white-daisy transition duration-300 text-center"
                  >
                    Holiday Home Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Lime-Wash4.jpg"
                  alt="Furniture repair in Paternoster"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coastal Specialization */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Coastal Furniture Specialists for Paternoster
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Paternoster's pristine beauty comes with unique challenges for furniture. 
                Our specialized treatments protect and restore furniture in this iconic coastal village.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Waves className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Salt Air Protection</h3>
                <p className="text-forest-green">
                  Specialized treatments to protect furniture from Paternoster's coastal salt air and moisture.
                </p>
              </div>
              <div className="text-center">
                <Camera className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Holiday Home Care</h3>
                <p className="text-forest-green">
                  Maintenance programs for holiday properties, keeping furniture pristine between visits.
                </p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Premium Services</h3>
                <p className="text-forest-green">
                  High-end restoration and repair services matching Paternoster's exclusive atmosphere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Paternoster */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Specialized Furniture Services for Paternoster
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Waves className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Coastal Damage Repair</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Salt corrosion treatment</li>
                  <li>• Moisture damage restoration</li>
                  <li>• UV damage repair</li>
                  <li>• Metal hardware restoration</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Camera className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Holiday Home Services</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Seasonal maintenance programs</li>
                  <li>• Pre-arrival preparations</li>
                  <li>• Storage and protection</li>
                  <li>• Emergency repair calls</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Fishing Cottage Furniture</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• Traditional fishing cottage styles</li>
                  <li>• Rustic furniture restoration</li>
                  <li>• Weather-resistant finishes</li>
                  <li>• Period-appropriate repairs</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Star className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Luxury Restoration</h3>
                <ul className="text-forest-green space-y-2">
                  <li>• High-end antique restoration</li>
                  <li>• Designer furniture repair</li>
                  <li>• Custom color matching</li>
                  <li>• Premium materials only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Paternoster Lifestyle */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Understanding Paternoster's Unique Furniture Needs
                </h2>
                <p className="text-lg text-forest-green mb-6">
                  Paternoster's blend of traditional fishing village charm and modern luxury creates 
                  unique furniture challenges. We understand and cater to both aspects of this special place.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Traditional Charm:</strong> Preserving the authentic character of old fishing cottage furniture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Modern Luxury:</strong> High-end restoration for contemporary holiday homes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Coastal Protection:</strong> Advanced treatments for salt air and ocean moisture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Flexible Service:</strong> Working around your Paternoster visit schedule
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/portfolio/portfolio-21.jpeg"
                  alt="Traditional Paternoster fishing cottage furniture"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/portfolio-22.jpeg"
                  alt="Luxury holiday home furniture Paternoster"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/portfolio-23.jpeg"
                  alt="Coastal furniture repair Paternoster"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/portfolio/portfolio-24.jpeg"
                  alt="Restored furniture in Paternoster home"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-8">Serving Paternoster & Surrounding Areas</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-daisy-cream rounded-lg p-4">
                <MapPin className="h-8 w-8 text-golden-center mx-auto mb-2" />
                <h3 className="font-semibold text-dark-wood">Paternoster Village</h3>
                <p className="text-sm text-forest-green">Traditional fishing cottages</p>
              </div>
              <div className="bg-daisy-cream rounded-lg p-4">
                <Camera className="h-8 w-8 text-golden-center mx-auto mb-2" />
                <h3 className="font-semibold text-dark-wood">Holiday Homes</h3>
                <p className="text-sm text-forest-green">Luxury coastal properties</p>
              </div>
              <div className="bg-daisy-cream rounded-lg p-4">
                <Waves className="h-8 w-8 text-golden-center mx-auto mb-2" />
                <h3 className="font-semibold text-dark-wood">St Helena Bay</h3>
                <p className="text-sm text-forest-green">Extended coastal area</p>
              </div>
              <div className="bg-daisy-cream rounded-lg p-4">
                <Star className="h-8 w-8 text-golden-center mx-auto mb-2" />
                <h3 className="font-semibold text-dark-wood">Surrounding Areas</h3>
                <p className="text-sm text-forest-green">West Coast region</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Premium Furniture Services for Paternoster</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us for specialized furniture repair and restoration services in Paternoster. 
              We understand the unique needs of this coastal paradise.
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
                <span className="text-lg">Serving Paternoster</span>
              </div>
            </div>
            
            <Link 
              href="/book-consultation"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Schedule Your Paternoster Service
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}