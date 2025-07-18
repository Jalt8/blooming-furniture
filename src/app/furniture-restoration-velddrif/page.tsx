import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Truck, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Expert Furniture Restoration in Velddrif | Blooming Furniture",
  description: "Professional furniture restoration, repair and refinishing services in Velddrif, Western Cape. Specializing in coastal furniture protection. Free quotes and collection service for Velddrif residents.",
  keywords: "furniture restoration Velddrif, furniture repair Velddrif, furniture refinishing Velddrif, antique restoration Velddrif, Velddrif furniture services, Berg River furniture restoration, coastal furniture protection",
  openGraph: {
    title: "Expert Furniture Restoration in Velddrif | Blooming Furniture",
    description: "Professional furniture restoration, repair and refinishing services in Velddrif, Western Cape. Expert coastal furniture protection and restoration.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-velddrif",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Velddrif Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-velddrif",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Velddrif, Western Cape, South Africa",
    "geo.position": "-32.7892;18.1568",
    "ICBM": "-32.7892, 18.1568",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za/furniture-restoration-velddrif",
  "name": "Blooming Furniture - Velddrif Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Velddrif, Western Cape. Specializing in coastal environment furniture protection.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-velddrif",
  "telephone": "(079) 375 2588",
  "email": "info@bloomingfurniture.co.za",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Velddrif",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.7892,
    "longitude": 18.1568
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Velddrif"
    },
    {
      "@type": "City", 
      "name": "Laaiplek"
    },
    {
      "@type": "City",
      "name": "Aurora"
    },
    {
      "@type": "City",
      "name": "Dwarskersbos"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Furniture Repair", 
    "Furniture Refinishing",
    "Antique Restoration",
    "Coastal Furniture Protection"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Velddrif Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coastal Furniture Protection",
          "description": "Specialized treatments for furniture in Berg River coastal environment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Antique Restoration",
          "description": "Expert restoration of family heirlooms and valuable antiques"
        }
      }
    ]
  }
};

export default function VelddrifFurnitureRestoration() {
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
                  Expert Furniture Restoration in <span className="text-golden-center">Velddrif</span>
                </h1>
                <p className="text-xl mb-6">
                  Preserve your treasured furniture with specialized restoration services designed for Velddrif's 
                  unique Berg River coastal environment. Expert craftsmanship meets local knowledge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Velddrif Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/image_1.jpeg"
                  alt="Furniture restoration in Velddrif"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Velddrif's Premier Furniture Restoration Specialists
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Located at the mouth of the Berg River, Velddrif presents unique challenges for furniture preservation. 
                Our specialized knowledge ensures your pieces are protected and beautifully restored.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal Protection</h3>
                <p className="text-forest-green">
                  Specialized treatments to protect furniture from Velddrif's salt air, humidity, and Berg River moisture.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Truck className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Local Collection</h3>
                <p className="text-forest-green">
                  Convenient pickup and delivery throughout Velddrif, Laaiplek, and surrounding Berg River areas.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Award className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Heritage Expertise</h3>
                <p className="text-forest-green">
                  Understanding Velddrif's rich fishing heritage and the furniture styles that define the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Specific to Velddrif */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Furniture Restoration Services for Velddrif Residents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Marine Environment Restoration</h3>
                <p className="text-forest-green mb-4">
                  Velddrif's location at the Berg River mouth creates unique challenges. We specialize in:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Salt air damage restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Humidity protection treatments</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>River moisture prevention</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marine-grade protective finishes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Paintbrush className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Traditional Fishing Heritage Pieces</h3>
                <p className="text-forest-green mb-4">
                  Understanding Velddrif's fishing heritage, we expertly restore:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vintage fishing community furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Coastal cottage antiques</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weathered outdoor furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Family heirloom preservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Velddrif */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why Velddrif Residents Choose Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Berg River Knowledge</h3>
                      <p className="text-forest-green">
                        Deep understanding of how Velddrif's unique river-mouth environment affects furniture, 
                        from salt corrosion to moisture damage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Convenient Local Service</h3>
                      <p className="text-forest-green">
                        Collection and delivery throughout Velddrif, Laaiplek, Aurora, and Dwarskersbos. 
                        Same-day quotes for urgent restoration needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Fishing Community Heritage</h3>
                      <p className="text-forest-green">
                        Respect for Velddrif's fishing heritage and the unique furniture pieces that tell 
                        the story of this historic Berg River community.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Long-term Protection</h3>
                      <p className="text-forest-green">
                        Advanced protective treatments ensure your restored furniture withstands Velddrif's 
                        coastal challenges for years to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Velddrif Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Primary Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Central Velddrif</li>
                      <li>• Laaiplek</li>
                      <li>• Port Owen</li>
                      <li>• Berg River areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Extended Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Aurora</li>
                      <li>• Dwarskersbos</li>
                      <li>• Elands Bay</li>
                      <li>• Redelinghuys</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <p className="text-sm italic">
                    "Having grown up in the West Coast, I understand how the Berg River environment 
                    affects furniture. We use this knowledge to protect your pieces properly."
                  </p>
                  <p className="text-golden-center font-semibold mt-2">- Master Craftsman</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our Velddrif Restoration Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Free Assessment",
                  description: "We visit your Velddrif home to assess your furniture and provide a detailed quote"
                },
                {
                  step: "2", 
                  title: "Careful Collection",
                  description: "Professional collection with protective wrapping for transport from Velddrif"
                },
                {
                  step: "3",
                  title: "Expert Restoration", 
                  description: "Restoration using techniques suited to Berg River coastal environment"
                },
                {
                  step: "4",
                  title: "Protected Delivery",
                  description: "Safe delivery back to your Velddrif home with care instructions"
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

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Furniture in Velddrif?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. We understand Velddrif's unique coastal 
              environment and how to protect your furniture for lasting beauty.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <span className="text-lg">(079) 375 2588</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <span className="text-lg">info@bloomingfurniture.co.za</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-3" />
                <span className="text-lg">Serving Velddrif & Berg River</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Get Your Free Velddrif Quote
              </Link>
              <Link 
                href="tel:+27793752588"
                className="inline-block border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300"
              >
                Call Now: (079) 375 2588
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}