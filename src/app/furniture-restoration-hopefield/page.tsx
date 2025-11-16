import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Home, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: "Professional Furniture Restoration in Hopefield | Blooming Furniture",
  description: "Expert furniture restoration, repair and refinishing services in Hopefield, Western Cape. Specializing in heritage and farmhouse furniture restoration. Free quotes for Hopefield residents.",
  keywords: "furniture restoration Hopefield, furniture repair Hopefield, furniture refinishing Hopefield, antique restoration Hopefield, Hopefield furniture services, farmhouse furniture restoration, heritage furniture repair",
  openGraph: {
    title: "Professional Furniture Restoration in Hopefield | Blooming Furniture",
    description: "Expert furniture restoration, repair and refinishing services in Hopefield, Western Cape. Heritage and farmhouse furniture specialists.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-hopefield",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Hopefield Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-hopefield",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Hopefield, Western Cape, South Africa",
    "geo.position": "-33.0649;18.3542",
    "ICBM": "-33.0649, 18.3542",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za/furniture-restoration-hopefield",
  "name": "Blooming Furniture - Hopefield Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Hopefield, Western Cape. Specializing in heritage and farmhouse furniture restoration.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-hopefield",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hopefield",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0649,
    "longitude": 18.3542
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Hopefield"
    },
    {
      "@type": "City", 
      "name": "Moorreesburg"
    },
    {
      "@type": "City",
      "name": "Koringberg"
    },
    {
      "@type": "City",
      "name": "Darling"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Furniture Repair", 
    "Furniture Refinishing",
    "Antique Restoration",
    "Heritage Furniture Restoration",
    "Farmhouse Furniture Repair"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hopefield Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heritage Furniture Restoration",
          "description": "Specialized restoration of historical and heritage furniture pieces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Farmhouse Furniture Repair",
          "description": "Expert repair and restoration of traditional farmhouse furniture"
        }
      }
    ]
  }
};

export default function HopefieldFurnitureRestoration() {
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
                  Professional Furniture Restoration in <span className="text-golden-center">Hopefield</span>
                </h1>
                <p className="text-xl mb-6">
                  Preserve the rich heritage of your furniture with expert restoration services in Hopefield. 
                  From Victorian antiques to farmhouse pieces, we honor your furniture's history.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Hopefield Quote
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
                  src="/images/portfolio/sunbed2.jpg"
                  alt="Heritage furniture restoration in Hopefield"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Heritage & History Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Honoring Hopefield's Rich Heritage Through Furniture Restoration
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Founded in 1851, Hopefield has a rich history reflected in its beautiful heritage buildings and furniture. 
                We specialize in restoring pieces that tell the story of this historic West Coast town.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Home className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Victorian Heritage</h3>
                <p className="text-forest-green">
                  Expert restoration of Victorian-era furniture that reflects Hopefield's founding period and 
                  architectural heritage.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Leaf className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Farming Legacy</h3>
                <p className="text-forest-green">
                  Restoration of traditional farmhouse furniture that tells the story of Hopefield's 
                  agricultural heritage and wheat farming history.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Award className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Local Expertise</h3>
                <p className="text-forest-green">
                  Understanding of Hopefield's unique climate and how it affects different wood types 
                  and furniture finishes over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Specialized Furniture Restoration Services in Hopefield
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Home className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Heritage & Antique Restoration</h3>
                <p className="text-forest-green mb-4">
                  Specialized in restoring furniture pieces from Hopefield's rich historical periods:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Victorian-era family heirlooms (1850s-1900)</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Colonial period furniture restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Edwardian dining and bedroom sets</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Art Deco pieces from the 1920s-30s</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Leaf className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Farmhouse & Rural Furniture</h3>
                <p className="text-forest-green mb-4">
                  Expert in restoring traditional farmhouse pieces that reflect Hopefield's agricultural heritage:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solid wood farmhouse dining tables</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Traditional stoep and veranda furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vintage farm kitchen pieces</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rustic storage and display furniture</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Structural Restoration</h3>
                <p className="text-forest-green mb-4">
                  Complete structural restoration services for Hopefield's challenging climate:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Joint repair and reinforcement</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wood replacement with period-appropriate materials</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Termite and pest damage repair</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Climate protection treatments</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Paintbrush className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Period-Accurate Refinishing</h3>
                <p className="text-forest-green mb-4">
                  Authentic refinishing that honors original craftsmanship and Hopefield's history:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Traditional hand-rubbed finishes</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Period-appropriate stains and colors</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>French polishing for fine antiques</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weatherproofing for outdoor pieces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Knowledge Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why Hopefield Residents Trust Our Expertise
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Home className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Historical Knowledge</h3>
                      <p className="text-forest-green">
                        Understanding of Hopefield's founding period (1851) and the furniture styles 
                        that were popular during different eras of the town's development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Leaf className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Agricultural Heritage</h3>
                      <p className="text-forest-green">
                        Appreciation for Hopefield's wheat farming legacy and the sturdy, functional 
                        furniture that served farming families for generations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Climate Expertise</h3>
                      <p className="text-forest-green">
                        Knowledge of how Hopefield's semi-arid climate affects different wood types 
                        and the best preservation methods for local conditions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Local Service</h3>
                      <p className="text-forest-green">
                        Convenient collection and delivery throughout Hopefield, Moorreesburg, 
                        Koringberg, and surrounding farming communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Hopefield Service Coverage</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Primary Service Areas:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Central Hopefield</li>
                      <li>• Hopefield surrounding farms</li>
                      <li>• Moorreesburg</li>
                      <li>• Koringberg</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-golden-center">Extended Service Areas:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Darling</li>
                      <li>• Malmesbury (heritage pieces)</li>
                      <li>• Riebeek Valley</li>
                      <li>• Piketberg</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <blockquote className="text-sm italic">
                    "Every piece of furniture tells a story of Hopefield's history. Our job is to preserve 
                    those stories for future generations to treasure."
                  </blockquote>
                  <p className="text-golden-center font-semibold mt-2">- Heritage Restoration Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-8">What Hopefield Residents Say</h2>
            <blockquote className="text-xl italic text-forest-green mb-6">
              "They restored my great-grandmother's dining table that came with our family to Hopefield 
              in the 1890s. The attention to historical detail and craftsmanship was exceptional. 
              It's now the centerpiece of our farmhouse dining room again."
            </blockquote>
            <cite className="text-golden-center font-semibold">— Sarah van der Merwe, Hopefield</cite>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Restore Your Heritage Furniture in Hopefield</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to preserve your family's furniture heritage? Contact us for a free consultation 
              and discover how we can honor your pieces' history while ensuring they last for future generations.
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
                <span className="text-lg">Serving Hopefield & District</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-consultation"
                className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Free Heritage Assessment
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