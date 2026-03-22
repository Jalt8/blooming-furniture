import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Truck, Home, Wine, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration Malmesbury | Professional Wood Repair",
  description: "Professional furniture restoration, repair and refinishing services in Malmesbury, Western Cape. Specializing in Cape Dutch heritage furniture and antique restoration. Free quotes for Malmesbury and Swartland residents.",
  keywords: "furniture restoration Malmesbury, furniture repair Malmesbury, furniture refinishing Malmesbury, antique restoration Malmesbury, Malmesbury furniture services, Swartland furniture restoration, Cape Dutch furniture repair, wine estate furniture restoration",
  openGraph: {
    title: "Furniture Restoration Malmesbury | Professional Wood Repair | Blooming Furniture",
    description: "Expert furniture restoration, repair and refinishing services in Malmesbury, Western Cape. Cape Dutch heritage and antique furniture specialists serving the Swartland region.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-malmesbury",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Malmesbury Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-malmesbury",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Malmesbury, Western Cape, South Africa",
    "geo.position": "-33.4614;18.7277",
    "ICBM": "-33.4614, 18.7277",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Malmesbury Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Malmesbury, Western Cape. Specializing in Cape Dutch heritage furniture and Swartland antique restoration.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-malmesbury",
  "telephone": "+27793752588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Malmesbury",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4614,
    "longitude": 18.7277
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Malmesbury"
    },
    {
      "@type": "City",
      "name": "Darling"
    },
    {
      "@type": "City",
      "name": "Riebeek Kasteel"
    },
    {
      "@type": "City",
      "name": "Riebeek West"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Furniture Repair",
    "Furniture Refinishing",
    "Antique Restoration",
    "Cape Dutch Furniture Restoration",
    "Strip Sand and Re-Polish",
    "Re-riempie",
    "Collection and Delivery"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Malmesbury Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cape Dutch Heritage Restoration",
          "description": "Specialized restoration of historic Cape Dutch furniture from Malmesbury and the Swartland region"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wine Estate Furniture Restoration",
          "description": "Professional restoration of antique and period furniture for Swartland wine estates"
        }
      }
    ]
  }
};

export default function MalmesburyFurnitureRestoration() {
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
                  Professional Furniture Restoration in <span className="text-golden-center">Malmesbury</span>
                </h1>
                <p className="text-xl mb-6">
                  Restore the grandeur of your Cape Dutch heritage furniture and Swartland antiques with
                  expert craftsmanship. From historic homestead pieces to wine estate furniture, we bring
                  Malmesbury&apos;s treasured wooden furniture back to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Malmesbury Quote
                  </Link>
                  <Link
                    href="https://wa.me/27793752588?text=Hi%2C%20I%27m%20from%20Malmesbury%20and%20need%20furniture%20restoration"
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
                  src="/images/portfolio/Chest5.jpg"
                  alt="Cape Dutch furniture restoration in Malmesbury"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Swartland Heritage Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Preserving Malmesbury&apos;s Rich Swartland Heritage
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Malmesbury, the historic capital of the Swartland with a population of approximately 35,000,
                is home to some of the Western Cape&apos;s finest Cape Dutch architecture and heritage furniture.
                Founded in 1745, this wheat-farming heartland has generations of family heirlooms, antique
                homestead furniture, and wine estate pieces that deserve expert restoration. Located approximately
                110km from our Langebaan workshop -- about a 1.5-hour drive -- Malmesbury sits at the outer
                edge of our extended service area, and we gladly serve this historically significant region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Home className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Cape Dutch Specialists</h3>
                <p className="text-forest-green">
                  Malmesbury&apos;s historic Cape Dutch homesteads contain some of the most remarkable furniture in
                  the Western Cape. We specialize in restoring these period pieces with techniques that honour
                  their original craftsmanship and historical significance.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Wine className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Wine Estate Furniture</h3>
                <p className="text-forest-green">
                  The Swartland wine region&apos;s boutique estates and tasting rooms feature beautiful antique
                  furniture that requires specialized care. We restore dining tables, display cabinets,
                  and bar furniture to complement these prestigious venues.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Truck className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Extended Area Collection</h3>
                <p className="text-forest-green">
                  While Malmesbury is at the outer edge of our regular service area, we arrange dedicated
                  collection trips for heritage pieces and larger restoration projects. Contact us to
                  schedule a convenient pickup time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Farming Heritage & Wine Estates */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-4">
              Furniture Restoration for Malmesbury&apos;s Historic Homesteads
            </h2>
            <p className="text-lg text-forest-green text-center max-w-3xl mx-auto mb-12">
              The Swartland&apos;s wheat farming heritage stretches back centuries, and many Malmesbury families
              still treasure the solid wood furniture that furnished their ancestors&apos; homesteads. These
              pieces -- from massive yellowwood dining tables to stinkwood wardrobes and riempie chairs --
              represent an irreplaceable part of South African furniture history that we are passionate
              about preserving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Home className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Cape Dutch Heritage Pieces</h3>
                <p className="text-forest-green mb-4">
                  Malmesbury&apos;s historic homesteads contain furniture that dates back to the 18th and 19th
                  centuries. We have deep experience restoring:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Yellowwood and stinkwood Cape Dutch armoires and wardrobes</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Traditional voorkamer furniture and display cabinets</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Heritage dining tables seating 12 or more</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Period-accurate restoration of antique chests and blanket boxes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Wine className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Swartland Wine Estate Furniture</h3>
                <p className="text-forest-green mb-4">
                  The Swartland wine revolution has brought renewed attention to the region&apos;s historic estates.
                  We work with wine farms to restore:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tasting room antique tables and display furniture</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Restaurant dining furniture needing regular maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Guest house and accommodation bedroom sets</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Outdoor stoep and veranda furniture for wine farm settings</span>
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
              Complete Furniture Services Available in Malmesbury
            </h2>
            <p className="text-lg text-forest-green text-center max-w-3xl mx-auto mb-12">
              All of our restoration services are available to Malmesbury residents and Swartland businesses.
              Visit our <Link href="/services" className="text-golden-center underline hover:text-dark-wood transition">services page</Link> for
              full details on each offering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Hammer className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Furniture Repairs</h3>
                <p className="text-forest-green text-sm">
                  Structural repairs, joint restoration, veneer repair, and damage restoration for heritage
                  and modern furniture. We work with all indigenous and imported wood types found in Swartland homes.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Paintbrush className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Strip, Sand &amp; Re-Polish</h3>
                <p className="text-forest-green text-sm">
                  Complete refinishing services ideal for reviving aged Cape Dutch furniture. We strip old
                  finishes, sand to perfection, and apply traditional or modern polishes to suit your preference.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Star className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-deco</h3>
                <p className="text-forest-green text-sm">
                  Transform furniture with fresh paint, lime wash, or decorative finishes. Perfect for updating
                  pieces to suit modern Swartland farmhouse interiors while respecting their original character.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Award className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-riempie</h3>
                <p className="text-forest-green text-sm">
                  Traditional riempie chair re-weaving, a craft deeply connected to South African furniture
                  heritage. Many Malmesbury homes have cherished riempie chairs needing expert restoration.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Paintbrush className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-design</h3>
                <p className="text-forest-green text-sm">
                  Give inherited furniture a new purpose. We help Malmesbury homeowners reimagine family
                  pieces for contemporary living without losing their heritage value.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Truck className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Collection &amp; Delivery</h3>
                <p className="text-forest-green text-sm">
                  Scheduled collection from Malmesbury and the greater Swartland area. We transport your
                  furniture safely to our Langebaan workshop and deliver it back upon completion.
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
                  Why Malmesbury Residents Trust Blooming Furniture
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Home className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Cape Dutch Furniture Knowledge</h3>
                      <p className="text-forest-green">
                        The Swartland is home to some of South Africa&apos;s finest Cape Dutch architecture, and
                        the furniture that fills these homesteads is equally remarkable. We understand the
                        construction techniques, wood types, and finishes used in these historic pieces,
                        ensuring authentic restoration that preserves their heritage value.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Farming Community Understanding</h3>
                      <p className="text-forest-green">
                        Malmesbury&apos;s wheat farming heritage means many families own generations-old furniture
                        that has endured decades of daily use. These sturdy pieces -- built to last by the
                        craftsmen of previous centuries -- deserve restoration that honours their history
                        while making them functional for modern families.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Extended Service Area Commitment</h3>
                      <p className="text-forest-green">
                        At approximately 110km from our workshop, Malmesbury represents the outer edge of
                        our service area. We schedule dedicated collection trips to the Swartland and are
                        happy to arrange special trips for larger projects or multiple pieces.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Wine className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Wine Estate Partnerships</h3>
                      <p className="text-forest-green">
                        We work with several Swartland wine estates to maintain their antique furniture
                        collections, tasting room pieces, and guest accommodation furniture. Our regular
                        trips to the region make ongoing maintenance convenient and cost-effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Malmesbury Service Coverage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Primary Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>&#8226; Malmesbury Central</li>
                      <li>&#8226; Abbotsdale</li>
                      <li>&#8226; Kalbaskraal</li>
                      <li>&#8226; Riebeek Kasteel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Extended Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>&#8226; Riebeek West</li>
                      <li>&#8226; Moorreesburg</li>
                      <li>&#8226; Darling</li>
                      <li>&#8226; Swartland farms</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <p className="text-sm italic">
                    &quot;Malmesbury&apos;s Cape Dutch homesteads hold some of the most beautiful furniture in the
                    Western Cape. Every piece we restore from this region is a privilege -- we are
                    preserving a chapter of South African heritage.&quot;
                  </p>
                  <p className="text-golden-center font-semibold mt-2">- Heritage Restoration Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our Malmesbury Restoration Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Free Assessment",
                  description: "Send us photos via WhatsApp or email. We provide a detailed quote and can arrange an on-site visit for valuable heritage pieces."
                },
                {
                  step: "2",
                  title: "Scheduled Collection",
                  description: "We arrange a dedicated collection trip to Malmesbury, carefully wrapping and transporting your furniture to our Langebaan workshop."
                },
                {
                  step: "3",
                  title: "Expert Restoration",
                  description: "Your furniture receives meticulous restoration using techniques appropriate to its period, style, and the Swartland's dry climate."
                },
                {
                  step: "4",
                  title: "Safe Delivery",
                  description: "Careful delivery back to your Malmesbury home or estate with detailed care instructions and aftercare recommendations."
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
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/furniture-restoration-darling" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Darling
              </Link>
              <Link href="/furniture-restoration-hopefield" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Hopefield
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
            <h2 className="text-3xl font-bold mb-6">Restore Your Heritage Furniture in Malmesbury</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you own a historic Cape Dutch homestead, a Swartland wine estate, or a modern Malmesbury
              home with treasured family furniture, we are here to help. Contact us today for a free assessment
              and discover how we can preserve your furniture&apos;s heritage for future generations.
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
                <span className="text-lg">Serving Malmesbury &amp; Swartland</span>
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
                href="https://wa.me/27793752588?text=Hi%2C%20I%27m%20from%20Malmesbury%20and%20need%20furniture%20restoration"
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