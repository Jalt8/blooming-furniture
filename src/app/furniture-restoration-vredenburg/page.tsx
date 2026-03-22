import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Home, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration Services in Vredenburg",
  description: "Professional furniture restoration and refinishing services in Vredenburg, Western Cape. Antique restoration, modern furniture makeovers, and custom refinishing for Vredenburg residents.",
  keywords: "furniture restoration Vredenburg, furniture refinishing Vredenburg, antique restoration Vredenburg, furniture makeover Vredenburg, West Coast furniture restoration, custom furniture Vredenburg",
  openGraph: {
    title: "Furniture Restoration Services in Vredenburg | Blooming Furniture",
    description: "Professional furniture restoration and refinishing services in Vredenburg, Western Cape. Antique restoration, modern furniture makeovers, and custom refinishing.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-vredenburg",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Vredenburg Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-vredenburg",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Vredenburg, Western Cape, South Africa",
    "geo.position": "-32.9083;18.0061",
    "ICBM": "-32.9083, 18.0061",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Vredenburg Furniture Restoration",
  "description": "Professional furniture restoration and refinishing services in Vredenburg, Western Cape",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-vredenburg",
  "telephone": "+27793752588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vredenburg",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.9083,
    "longitude": 18.0061
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Vredenburg"
    },
    {
      "@type": "City", 
      "name": "Saldanha Bay"
    },
    {
      "@type": "City",
      "name": "Hopefield"
    },
    {
      "@type": "City",
      "name": "Langebaan"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Antique Restoration", 
    "Furniture Refinishing",
    "Custom Furniture Makeovers"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$"
};

export default function VredenburgFurnitureRestoration() {
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
        <section className="bg-gradient-to-br from-golden-center to-forest-green text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Furniture Restoration in <span className="text-dark-wood">Vredenburg</span>
                </h1>
                <p className="text-xl mb-6">
                  Transform your furniture with expert restoration services in Vredenburg. 
                  From antique treasures to modern makeovers, we bring new life to every piece.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/book-consultation"
                    className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                  >
                    Free Vredenburg Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Chest3.jpg"
                  alt="Furniture restoration in Vredenburg"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Focus */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Vredenburg's Premier Furniture Restoration Service
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                As the largest town in the West Coast region, Vredenburg has a rich history 
                and diverse furniture restoration needs. We're proud to serve this vibrant community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Home className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Residential Specialists</h3>
                <p className="text-forest-green">
                  Expert restoration of family furniture, antiques, and modern pieces for Vredenburg homes.
                </p>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Commercial Services</h3>
                <p className="text-forest-green">
                  Professional furniture restoration for Vredenburg businesses, offices, and public spaces.
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Heritage Preservation</h3>
                <p className="text-forest-green">
                  Specialized in preserving Vredenburg's historical furniture and family heirlooms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restoration Services */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Complete Furniture Restoration Services in Vredenburg
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Hammer className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Antique Restoration</h3>
                <p className="text-forest-green mb-4">
                  Preserve your family treasures with traditional restoration techniques and period-appropriate materials.
                </p>
                <ul className="text-sm text-forest-green text-left">
                  <li>• Victorian furniture restoration</li>
                  <li>• Art Deco pieces</li>
                  <li>• Colonial furniture</li>
                  <li>• Family heirlooms</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Paintbrush className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Modern Makeovers</h3>
                <p className="text-forest-green mb-4">
                  Transform contemporary furniture with creative refinishing and color updates.
                </p>
                <ul className="text-sm text-forest-green text-left">
                  <li>• Color transformations</li>
                  <li>• Texture additions</li>
                  <li>• Hardware upgrades</li>
                  <li>• Style updates</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg text-center">
                <Star className="h-12 w-12 text-forest-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Custom Refinishing</h3>
                <p className="text-forest-green mb-4">
                  Personalized finishing solutions to match your Vredenburg home's unique style.
                </p>
                <ul className="text-sm text-forest-green text-left">
                  <li>• Custom color matching</li>
                  <li>• Specialty finishes</li>
                  <li>• Distressing techniques</li>
                  <li>• Personal design consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our Vredenburg Restoration Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-golden-center text-dark-wood rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Free Assessment</h3>
                <p className="text-forest-green">
                  We visit your Vredenburg location to assess your furniture and provide a detailed quote.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-golden-center text-dark-wood rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Careful Collection</h3>
                <p className="text-forest-green">
                  Safe collection from your Vredenburg home with protective wrapping and transport.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-golden-center text-dark-wood rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Expert Restoration</h3>
                <p className="text-forest-green">
                  Professional restoration using quality materials and traditional techniques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-golden-center text-dark-wood rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Delivery & Setup</h3>
                <p className="text-forest-green">
                  Careful delivery to your Vredenburg location with placement and final inspection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Vredenburg Furniture Transformations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/portfolio/portfolio-3.jpeg"
                  alt="Before restoration - Vredenburg antique"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-dark-wood mb-2">Victorian Chair Restoration</h3>
                  <p className="text-forest-green text-sm">Vredenburg family heirloom restored to original glory</p>
                </div>
              </div>
              
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/portfolio/portfolio-7.jpeg"
                  alt="Dining table restoration Vredenburg"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-dark-wood mb-2">Modern Table Makeover</h3>
                  <p className="text-forest-green text-sm">Contemporary dining set refreshed for Vredenburg home</p>
                </div>
              </div>
              
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/portfolio/portfolio-9.jpeg"
                  alt="Cabinet restoration Vredenburg"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-dark-wood mb-2">Kitchen Cabinet Renewal</h3>
                  <p className="text-forest-green text-sm">Complete kitchen transformation in Vredenburg</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why Vredenburg Chooses Blooming Furniture
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Local Knowledge:</strong> Understanding of Vredenburg's architectural styles and furniture heritage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Quality Materials:</strong> Premium finishes and hardware suitable for West Coast conditions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Convenient Service:</strong> Collection and delivery throughout Vredenberg and surrounds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-6 w-6 text-golden-center mt-1 mr-3 flex-shrink-0" />
                    <span className="text-forest-green">
                      <strong>Satisfaction Guarantee:</strong> Every restoration backed by our quality promise
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Lime-Wash6.jpg"
                  alt="Vredenburg furniture restoration workshop"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Furniture in Vredenburg?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for expert furniture restoration services in Vredenburg. 
              Let's bring new life to your beloved pieces with professional craftsmanship.
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
                <span className="text-lg">Serving Vredenburg & Region</span>
              </div>
            </div>
            
            <Link 
              href="/book-consultation"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Get Your Free Vredenburg Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}