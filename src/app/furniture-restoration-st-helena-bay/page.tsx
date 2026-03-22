import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Truck, Shield, Anchor, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration St Helena Bay | Expert Wood Repair",
  description: "Professional furniture restoration, repair and refinishing services in St Helena Bay, Western Cape. Specializing in coastal furniture protection from salt air damage. Free quotes and collection from our Langebaan workshop.",
  keywords: "furniture restoration St Helena Bay, furniture repair St Helena Bay, furniture refinishing St Helena Bay, antique restoration St Helena Bay, St Helena Bay furniture services, coastal furniture protection, Shelley Point furniture repair, Britannia Bay furniture restoration",
  openGraph: {
    title: "Furniture Restoration St Helena Bay | Expert Wood Repair | Blooming Furniture",
    description: "Expert furniture restoration, repair and refinishing services in St Helena Bay, Western Cape. Protecting your furniture from coastal salt air with professional craftsmanship.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-st-helena-bay",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - St Helena Bay Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-st-helena-bay",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "St Helena Bay, Western Cape, South Africa",
    "geo.position": "-32.7567;17.9833",
    "ICBM": "-32.7567, 17.9833",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - St Helena Bay Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in St Helena Bay, Western Cape. Specializing in coastal furniture protection from salt air damage.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-st-helena-bay",
  "telephone": "+27793752588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "St Helena Bay",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.7567,
    "longitude": 17.9833
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "St Helena Bay"
    },
    {
      "@type": "City",
      "name": "Shelley Point"
    },
    {
      "@type": "City",
      "name": "Britannia Bay"
    },
    {
      "@type": "City",
      "name": "Stompneus Bay"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Furniture Repair",
    "Furniture Refinishing",
    "Antique Restoration",
    "Coastal Furniture Protection",
    "Strip Sand and Re-Polish",
    "Re-riempie",
    "Collection and Delivery"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "St Helena Bay Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coastal Furniture Protection",
          "description": "Specialized treatments for furniture exposed to St Helena Bay's direct ocean salt air"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Holiday Home Furniture Maintenance",
          "description": "Restoration and protection services for seasonal holiday home furniture in St Helena Bay"
        }
      }
    ]
  }
};

export default function StHelenaBayFurnitureRestoration() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Expert Furniture Restoration in <span className="text-golden-center">St Helena Bay</span>
                </h1>
                <p className="text-xl mb-6">
                  Protect and restore your treasured furniture from the relentless coastal salt air of St Helena Bay.
                  From weathered holiday home pieces to cherished family heirlooms, our expert craftsmen bring
                  new life to every item with specialized coastal restoration techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free St Helena Bay Quote
                  </Link>
                  <Link
                    href="https://wa.me/27793752588?text=Hi%2C%20I%27m%20from%20St%20Helena%20Bay%20and%20need%20furniture%20restoration"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Chest3.jpg"
                  alt="Furniture restoration services in St Helena Bay"
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
                Serving St Helena Bay&apos;s Fishing Village Community
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                St Helena Bay, with its population of over 11,500 residents, is one of the West Coast&apos;s most
                beloved fishing villages. Located approximately 45km from our Langebaan workshop -- about a
                40-minute drive -- we provide dedicated collection and delivery services to St Helena Bay,
                Shelley Point, Britannia Bay, and Stompneus Bay. The direct ocean exposure here creates
                unique challenges for furniture that demand specialized knowledge and treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Anchor className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Fishing Heritage Specialists</h3>
                <p className="text-forest-green">
                  Understanding the deep fishing heritage of St Helena Bay and the functional, sturdy furniture
                  styles that have served this coastal community for generations.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Salt Air Protection</h3>
                <p className="text-forest-green">
                  St Helena Bay sits directly on the Atlantic coast where salt-laden winds batter furniture
                  year-round. We apply marine-grade protective finishes that withstand this harsh environment.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Truck className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Collection &amp; Delivery</h3>
                <p className="text-forest-green">
                  We collect furniture from your St Helena Bay home, restore it at our fully equipped
                  Langebaan workshop, and deliver it back in pristine condition with protective wrapping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday Home Furniture Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-4">
              Holiday Home Furniture Care in St Helena Bay
            </h2>
            <p className="text-lg text-forest-green text-center max-w-3xl mx-auto mb-12">
              St Helena Bay is home to hundreds of seasonal holiday properties at Shelley Point, Britannia Bay,
              and along the coastline. Furniture in these homes faces unique challenges: months of neglect
              during the off-season, extreme temperature fluctuations, and constant salt air exposure even
              when windows are closed. We offer specialized seasonal maintenance packages designed specifically
              for holiday homeowners who want their furniture looking its best when they arrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Shield className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Coastal Salt Air Restoration</h3>
                <p className="text-forest-green mb-4">
                  Living directly on the St Helena Bay coast means your furniture battles the elements daily.
                  Salt crystallizes on wood surfaces, penetrates finishes, and causes accelerated deterioration.
                  Our specialized services include:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Deep salt residue removal and wood cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Marine-grade sealant application for lasting protection</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Humidity damage repair and prevention</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>UV-resistant finishes for sun-facing rooms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Hammer className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Seasonal Holiday Home Packages</h3>
                <p className="text-forest-green mb-4">
                  For St Helena Bay&apos;s many holiday homeowners, we offer convenient seasonal restoration services
                  that work around your schedule:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pre-season furniture refresh before your arrival</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Post-season deep clean and protection treatment</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Outdoor stoep and patio furniture restoration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Full collection while you are away -- delivery when you return</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Full Services List */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-4">
              Complete Furniture Restoration Services for St Helena Bay
            </h2>
            <p className="text-lg text-forest-green text-center max-w-3xl mx-auto mb-12">
              Every service we offer is available to St Helena Bay residents with convenient collection
              and delivery included. View our full <Link href="/services" className="text-golden-center underline hover:text-dark-wood transition">services page</Link> for detailed information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Hammer className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Furniture Repairs</h3>
                <p className="text-forest-green text-sm">
                  Structural repairs, joint restoration, broken leg replacement, and damage repair for all
                  types of wooden furniture affected by St Helena Bay&apos;s coastal conditions.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Paintbrush className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Strip, Sand &amp; Re-Polish</h3>
                <p className="text-forest-green text-sm">
                  Complete stripping of old, salt-damaged finishes, thorough sanding, and application of
                  new protective polishes suited to coastal environments.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Star className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-deco</h3>
                <p className="text-forest-green text-sm">
                  Transform the look of your furniture with fresh paint, lime wash, or decorative finishes
                  that complement your St Helena Bay coastal home aesthetic.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Award className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-riempie</h3>
                <p className="text-forest-green text-sm">
                  Traditional riempie chair re-weaving using authentic techniques. Salt air can dry and
                  crack riempie -- we restore it to its original beauty and durability.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Paintbrush className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-design</h3>
                <p className="text-forest-green text-sm">
                  Give tired furniture a completely new identity. Ideal for holiday homes wanting a fresh
                  coastal look or updating inherited pieces for modern living.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Truck className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Collection &amp; Delivery</h3>
                <p className="text-forest-green text-sm">
                  Professional collection from anywhere in St Helena Bay, Shelley Point, or Britannia Bay.
                  Safe transport to our Langebaan workshop and careful delivery upon completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-wood mb-6">
                  Why St Helena Bay Residents Choose Blooming Furniture
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Anchor className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Coastal Furniture Expertise</h3>
                      <p className="text-forest-green">
                        St Helena Bay&apos;s position directly on the Atlantic coast means furniture faces some
                        of the harshest salt air conditions on the West Coast. We understand exactly how
                        this environment attacks wood finishes, corrodes metal hardware, and dries out
                        natural materials like riempie and cane.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Convenient 40-Minute Service</h3>
                      <p className="text-forest-green">
                        Just 45km from our Langebaan workshop, St Helena Bay is well within our regular
                        collection route. We schedule pickups weekly along the R79 corridor, making it
                        easy and affordable to have your furniture professionally restored.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Understanding the Fishing Community</h3>
                      <p className="text-forest-green">
                        St Helena Bay&apos;s fishing heritage runs deep, and many homes contain furniture that
                        has been passed down through generations of fishing families. We treat every piece
                        with the respect it deserves, preserving its character while extending its lifespan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Long-Lasting Protection</h3>
                      <p className="text-forest-green">
                        Our protective finishes are specifically chosen for direct coastal exposure. We use
                        marine-grade sealants and UV-resistant topcoats that keep your restored furniture
                        looking beautiful despite St Helena Bay&apos;s challenging conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">St Helena Bay Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Primary Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>&#8226; St Helena Bay Central</li>
                      <li>&#8226; Shelley Point</li>
                      <li>&#8226; Britannia Bay</li>
                      <li>&#8226; Stompneus Bay</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Nearby Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>&#8226; Velddrif</li>
                      <li>&#8226; Laaiplek</li>
                      <li>&#8226; Paternoster</li>
                      <li>&#8226; Saldanha Bay</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <p className="text-sm italic">
                    &quot;The salt air in St Helena Bay is relentless. Every piece of furniture we restore here
                    gets extra protective treatment to ensure it lasts. It&apos;s what the coastal environment demands.&quot;
                  </p>
                  <p className="text-golden-center font-semibold mt-2">- Coastal Restoration Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our St Helena Bay Restoration Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Free Assessment",
                  description: "Send us photos via WhatsApp or book a visit. We assess your furniture's condition and the specific salt air damage."
                },
                {
                  step: "2",
                  title: "Collection from St Helena Bay",
                  description: "Professional collection with protective wrapping. We pick up from Shelley Point to Britannia Bay and everywhere in between."
                },
                {
                  step: "3",
                  title: "Workshop Restoration",
                  description: "Expert restoration at our fully equipped Langebaan workshop using coastal-specific techniques and protective finishes."
                },
                {
                  step: "4",
                  title: "Protected Delivery",
                  description: "Careful delivery back to your St Helena Bay home with detailed care instructions for the coastal environment."
                }
              ].map((item, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg text-center">
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

        {/* Nearby Locations */}
        <section className="py-12 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-dark-wood mb-8">
              Also Serving Nearby West Coast Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/furniture-restoration-velddrif" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Velddrif
              </Link>
              <Link href="/furniture-repair-paternoster" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Paternoster
              </Link>
              <Link href="/furniture-repair-saldanha-bay" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Saldanha Bay
              </Link>
              <Link href="/furniture-restoration-langebaan" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Langebaan
              </Link>
              <Link href="/service-areas" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Furniture in St Helena Bay?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you live in St Helena Bay year-round or own a holiday home at Shelley Point,
              we are here to protect and restore your furniture. Contact us today for a free quote --
              collection and delivery to St Helena Bay is included in our service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <a href="tel:+27793752588" className="text-lg hover:text-golden-center transition">(079) 375 2588</a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <a href="mailto:wendydanie@gmail.com" className="text-lg hover:text-golden-center transition">wendydanie@gmail.com</a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-3" />
                <span className="text-lg">Serving St Helena Bay &amp; West Coast</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Get Your Free St Helena Bay Quote
              </Link>
              <Link
                href="https://wa.me/27793752588?text=Hi%2C%20I%27m%20from%20St%20Helena%20Bay%20and%20need%20furniture%20restoration"
                className="inline-block border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (079) 375 2588
              </Link>
              <Link
                href="tel:+27793752588"
                className="inline-block border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300"
              >
                Call Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}