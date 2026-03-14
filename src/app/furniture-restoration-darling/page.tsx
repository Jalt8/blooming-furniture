import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Hammer, Paintbrush, Truck, Palette, Wine, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration Darling | Wood Repair & Refinishing | Blooming Furniture",
  description: "Professional furniture restoration, repair and refinishing services in Darling, Western Cape. Specializing in boutique guest house and artistic home furniture care. Free quotes for Darling residents.",
  keywords: "furniture restoration Darling, furniture repair Darling, furniture refinishing Darling, antique restoration Darling, Darling furniture services, Darling West Coast furniture, guest house furniture restoration, Evita se Perron Darling",
  openGraph: {
    title: "Furniture Restoration Darling | Wood Repair & Refinishing | Blooming Furniture",
    description: "Expert furniture restoration, repair and refinishing services in Darling, Western Cape. Serving the artistic community with premium furniture care and restoration.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-darling",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - Darling Furniture Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-darling",
  },
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Darling, Western Cape, South Africa",
    "geo.position": "-33.3753;18.3867",
    "ICBM": "-33.3753, 18.3867",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Darling Furniture Restoration",
  "description": "Professional furniture restoration, repair and refinishing services in Darling, Western Cape. Serving the artistic community, boutique guest houses, and wine estates.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-darling",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Darling",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.3753,
    "longitude": 18.3867
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Darling"
    },
    {
      "@type": "City",
      "name": "Yzerfontein"
    },
    {
      "@type": "City",
      "name": "Hopefield"
    },
    {
      "@type": "City",
      "name": "Malmesbury"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Furniture Repair",
    "Furniture Refinishing",
    "Antique Restoration",
    "Guest House Furniture Restoration",
    "Strip Sand and Re-Polish",
    "Re-riempie",
    "Collection and Delivery"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Darling Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boutique Guest House Furniture Care",
          "description": "Specialized restoration and maintenance for Darling's boutique guest house and accommodation furniture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Creative Furniture Re-design",
          "description": "Artistic furniture transformation and re-design for Darling's creative community"
        }
      }
    ]
  }
};

export default function DarlingFurnitureRestoration() {
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
                  Furniture Restoration in <span className="text-golden-center">Darling</span>
                </h1>
                <p className="text-xl mb-6">
                  In a town celebrated for its creativity, wildflowers, and artistic soul, your furniture
                  deserves the same attention to beauty and craft. From boutique guest house pieces to
                  cherished family heirlooms, we restore Darling&apos;s furniture with the artistry this
                  community inspires.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                  >
                    Free Darling Quote
                  </Link>
                  <Link
                    href="https://wa.me/27793752588?text=Hi%2C%20I%27m%20from%20Darling%20and%20need%20furniture%20restoration"
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
                  src="/images/portfolio/Chest6.jpg"
                  alt="Furniture restoration in artistic Darling community"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Darling's Creative Community Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Serving Darling&apos;s Creative &amp; Artistic Community
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Darling, with its population of around 5,000 residents, is one of the West Coast&apos;s most
                charming towns -- famous for its wildflower route, the iconic Evita se Perron theatre
                created by Pieter-Dirk Uys, boutique wine estates, and a thriving artistic community.
                Located approximately 75km from our Langebaan workshop -- about an hour&apos;s drive -- we
                provide regular collection and delivery services to this creative corner of the West Coast.
                The creative homeowners and discerning hospitality businesses here demand furniture care
                that matches their eye for beauty and quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Palette className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Arts &amp; Culture Community</h3>
                <p className="text-forest-green">
                  Darling attracts artists, designers, and creative homeowners who curate their living
                  spaces with care. We understand that furniture in these homes is not just functional
                  -- it is an expression of personal style and artistic sensibility.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Wine className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Wine Estate Specialists</h3>
                <p className="text-forest-green">
                  Darling&apos;s boutique wine estates -- including Groote Post, Ormonde, and Darling Cellars
                  -- feature beautiful tasting rooms and guest areas that require furniture matching their
                  premium wine experiences. We restore and maintain these pieces to the highest standard.
                </p>
              </div>
              <div className="text-center bg-daisy-cream p-6 rounded-lg">
                <Truck className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Regular Collection Route</h3>
                <p className="text-forest-green">
                  Darling is on our regular West Coast collection route via the R315. We schedule weekly
                  pickups through the area, making it convenient and affordable to have your furniture
                  professionally restored at our Langebaan workshop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Houses & Tourism */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-4">
              Furniture Care for Darling&apos;s Tourism &amp; Hospitality
            </h2>
            <p className="text-lg text-forest-green text-center max-w-3xl mx-auto mb-12">
              Darling&apos;s wildflower season draws thousands of visitors each spring, and the town&apos;s growing
              reputation as a weekend destination means boutique guest houses, bed-and-breakfasts, and
              wine estate accommodation are busier than ever. The furniture in these establishments
              sees heavy use and needs regular professional care to maintain the charm and character
              that guests expect from a Darling stay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Palette className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Creative Home Furniture</h3>
                <p className="text-forest-green mb-4">
                  Darling&apos;s artistic residents have an eye for unique, characterful furniture. Whether you
                  have collected vintage pieces, inherited family antiques, or commissioned custom work,
                  we provide restoration that respects and enhances each piece&apos;s individuality:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vintage and antique furniture restoration to gallery standard</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Creative re-design and upcycling for artistic homes</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Colour matching and custom finishes for curated interiors</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mixed-media furniture repair (wood, metal, cane combinations)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <Award className="h-12 w-12 text-forest-green mb-4" />
                <h3 className="text-2xl font-semibold text-dark-wood mb-4">Guest House &amp; Hospitality</h3>
                <p className="text-forest-green mb-4">
                  Darling&apos;s boutique accommodation needs furniture that impresses guests while withstanding
                  daily use. We offer tailored services for the hospitality industry:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bedroom suite restoration for guest rooms</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dining furniture maintenance for breakfast rooms</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Outdoor stoep and garden furniture weatherproofing</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Seasonal furniture refresh packages for peak tourist periods</span>
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
              Complete Furniture Restoration Services for Darling
            </h2>
            <p className="text-lg text-forest-green text-center max-w-3xl mx-auto mb-12">
              Every service we offer is available to Darling residents and businesses with convenient
              collection and delivery. See our full <Link href="/services" className="text-golden-center underline hover:text-dark-wood transition">services page</Link> for
              detailed information on each service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Hammer className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Furniture Repairs</h3>
                <p className="text-forest-green text-sm">
                  Structural repairs, broken joints, wobbly legs, damaged surfaces, and complete rebuild
                  of damaged sections. We repair all types of wooden furniture found in Darling homes.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Paintbrush className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Strip, Sand &amp; Re-Polish</h3>
                <p className="text-forest-green text-sm">
                  Complete stripping of old finishes, meticulous sanding, and application of your choice
                  of polish or varnish. Ideal for revealing the natural beauty of older furniture.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Star className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-deco</h3>
                <p className="text-forest-green text-sm">
                  Transform your furniture with fresh paint, lime wash, chalk paint, or decorative finishes.
                  Perfect for Darling&apos;s creative homeowners who want a unique, personalised look.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Award className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-riempie</h3>
                <p className="text-forest-green text-sm">
                  Traditional riempie chair re-weaving using authentic leather strips. A treasured South
                  African craft that brings new life to classic Cape riempie chairs and benches.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Palette className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Re-design</h3>
                <p className="text-forest-green text-sm">
                  Give old furniture a completely new identity. Darling&apos;s creative community loves this
                  service for transforming found treasures and inherited pieces into statement furniture.
                </p>
              </div>

              <div className="bg-daisy-cream rounded-lg p-6 shadow-md">
                <Truck className="h-10 w-10 text-forest-green mb-3" />
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Collection &amp; Delivery</h3>
                <p className="text-forest-green text-sm">
                  Professional collection from anywhere in Darling and surrounds. Safe transport to our
                  Langebaan workshop and careful delivery back to your door upon completion.
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
                  Why Darling Residents Choose Blooming Furniture
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Palette className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Creative Sensibility</h3>
                      <p className="text-forest-green">
                        Darling&apos;s artistic community expects more than basic restoration. We approach every
                        piece with a creative eye, understanding that furniture in this town often serves
                        as both functional object and artistic expression. Our re-design service is
                        especially popular with Darling&apos;s designers and artists.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Wine className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Wine Estate Experience</h3>
                      <p className="text-forest-green">
                        Darling&apos;s boutique wine estates need furniture that reflects the premium quality of
                        their wines. We work with estates to maintain tasting room furniture, restaurant
                        tables, and guest accommodation pieces to the standard their visitors expect.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Convenient One-Hour Service</h3>
                      <p className="text-forest-green">
                        Just 75km from our Langebaan workshop, Darling is on our regular West Coast
                        collection route. We schedule pickups weekly and can accommodate urgent requests
                        for hospitality businesses preparing for busy seasons.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-golden-center mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark-wood mb-1">Tourism Season Support</h3>
                      <p className="text-forest-green">
                        The wildflower season brings a surge of visitors to Darling each spring. We help
                        guest houses and restaurants prepare their furniture before peak season, ensuring
                        every piece looks its absolute best when guests arrive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-forest-green text-white-daisy p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Darling Service Coverage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Primary Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>&#8226; Darling Village</li>
                      <li>&#8226; Darling wine farms</li>
                      <li>&#8226; Darling Hills</li>
                      <li>&#8226; Surrounding smallholdings</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-golden-center">Nearby Areas:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>&#8226; Yzerfontein</li>
                      <li>&#8226; Hopefield</li>
                      <li>&#8226; Malmesbury</li>
                      <li>&#8226; Langebaan</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white-daisy/20">
                  <p className="text-sm italic">
                    &quot;Darling&apos;s creative spirit is infectious. The furniture we restore here often has the
                    most character and the most interesting stories. It is always a joy to work with
                    pieces from this community.&quot;
                  </p>
                  <p className="text-golden-center font-semibold mt-2">- Creative Restoration Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our Darling Restoration Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Free Assessment",
                  description: "Send us photos via WhatsApp or book a consultation. We discuss your vision for the piece and provide a detailed quote."
                },
                {
                  step: "2",
                  title: "Collection from Darling",
                  description: "Professional collection from your Darling home, guest house, or wine estate. Careful wrapping ensures safe transport."
                },
                {
                  step: "3",
                  title: "Artisan Restoration",
                  description: "Expert restoration at our Langebaan workshop. We keep you updated with progress photos throughout the process."
                },
                {
                  step: "4",
                  title: "Delivery & Reveal",
                  description: "Careful delivery back to Darling with detailed care instructions. See your furniture transformed and ready to shine."
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
              <Link href="/furniture-restoration-yzerfontein" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Yzerfontein
              </Link>
              <Link href="/furniture-restoration-hopefield" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Hopefield
              </Link>
              <Link href="/furniture-restoration-malmesbury" className="bg-white-daisy px-6 py-3 rounded-lg text-forest-green hover:bg-golden-center hover:text-dark-wood transition duration-300 shadow-md">
                Malmesbury
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
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Furniture in Darling?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you are a creative homeowner with a treasured vintage find, a guest house owner
              preparing for wildflower season, or a wine estate looking to refresh your tasting room
              furniture, we are here to help. Contact us today for a free quote with collection
              and delivery included.
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
                <span className="text-lg">Serving Darling &amp; West Coast</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Get Your Free Darling Quote
              </Link>
              <Link
                href="https://wa.me/27793752588?text=Hi%2C%20I%27m%20from%20Darling%20and%20need%20furniture%20restoration"
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