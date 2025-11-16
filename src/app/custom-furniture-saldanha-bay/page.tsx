import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Ruler, Palette, Hammer, Anchor } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Saldanha Bay | Bespoke Furniture Design",
  description: "Professional custom furniture design and creation in Saldanha Bay. Handcrafted bespoke pieces built for working port town living. Free design consultation for Saldanha Bay residents.",
  keywords: "custom furniture Saldanha Bay, bespoke furniture Saldanha Bay, furniture makers Saldanha Bay, handcrafted furniture Saldanha Bay, custom tables Saldanha Bay, West Coast custom furniture, port town furniture",
  openGraph: {
    title: "Custom Furniture Makers in Saldanha Bay | Blooming Furniture",
    description: "Transform your Saldanha Bay home with handcrafted custom furniture designed for practical port town living. Free consultation available.",
    url: "https://bloomingfurniture.co.za/custom-furniture-saldanha-bay",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-saldanha-bay",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za/custom-furniture-saldanha-bay",
  "name": "Blooming Furniture - Custom Furniture Saldanha Bay",
  "description": "Professional custom furniture design and creation services in Saldanha Bay, Western Cape. Bespoke handcrafted pieces for port town living.",
  "url": "https://bloomingfurniture.co.za/custom-furniture-saldanha-bay",
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
  "areaServed": {
    "@type": "City",
    "name": "Saldanha Bay"
  },
  "serviceType": ["Custom Furniture Design", "Bespoke Furniture Creation", "Handcrafted Furniture"],
  "priceRange": "$$$"
};

export default function CustomFurnitureSaldanhaBay() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs
          items={[
            { label: 'Custom Furniture', href: '/custom-furniture' },
            { label: 'Saldanha Bay', href: '/custom-furniture-saldanha-bay' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Custom Furniture Makers in <span className="text-golden-center">Saldanha Bay</span>
              </h1>
              <p className="text-xl mb-6 leading-relaxed">
                Saldanha Bay's working port atmosphere demands furniture that's both practical and beautiful.
                We create custom pieces that withstand the marine environment while adding character to your home.
                Built tough for port town living, designed beautiful for West Coast style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-consultation"
                  className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                >
                  Free Design Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Custom for Saldanha Bay */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Saldanha Bay Residents Choose Custom Furniture
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Anchor className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Built for Port Town Living</h3>
                <p className="text-forest-green">
                  Furniture designed to withstand Saldanha Bay's intense marine environment - salt spray, humidity, and industrial conditions.
                </p>
              </div>
              <div className="text-center">
                <Ruler className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Practical & Functional</h3>
                <p className="text-forest-green">
                  We understand Saldanha Bay homes need furniture that works hard - durable materials and practical designs that suit busy port town lifestyles.
                </p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Marine-Grade Protection</h3>
                <p className="text-forest-green">
                  Special treatments and finishes protect against the harsh conditions near South Africa's busiest port.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Custom Furniture for Saldanha Bay */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Popular Custom Furniture for Saldanha Bay Homes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Durable Dining Sets</h3>
                <p className="text-forest-green mb-4">
                  Family dining tables built to last generations in Saldanha Bay's challenging climate.
                  Hardwearing finishes that resist moisture and daily use. Perfect for busy family meals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Industrial-strength construction</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Marine-grade protective coatings</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Easy-clean surfaces for busy families</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R6,500 - R20,000</p>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Custom Storage Solutions</h3>
                <p className="text-forest-green mb-4">
                  Maximize space in Saldanha Bay homes with clever storage. Perfect for fishing gear, work equipment,
                  and keeping homes organized near the busy harbor.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Heavy-duty construction</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Moisture-resistant materials</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Practical organization systems</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R4,000 - R16,000</p>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Entertainment Centers</h3>
                <p className="text-forest-green mb-4">
                  Custom TV units and entertainment centers that fit Saldanha Bay homes perfectly. Built to house
                  modern technology while maintaining classic West Coast charm.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cable management systems</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Adjustable shelving</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dust-resistant finishes</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R5,500 - R18,000</p>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Office Furniture</h3>
                <p className="text-forest-green mb-4">
                  Home office solutions for Saldanha Bay's growing professional community. Desks, shelving,
                  and storage designed for productivity and comfort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ergonomic designs</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrated cable management</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ample storage space</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R7,000 - R22,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Custom Furniture Process in Saldanha Bay
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Free Consultation in Saldanha Bay",
                  description: "We visit your home to understand your needs, measure spaces, and discuss how furniture can work better for your lifestyle."
                },
                {
                  step: "2",
                  title: "Design & Planning",
                  description: "Detailed drawings showing exactly how your custom furniture will look and fit. We consider Saldanha Bay's climate in material selection."
                },
                {
                  step: "3",
                  title: "Material Selection",
                  description: "Choose from marine-grade woods and finishes proven to withstand port town conditions. We guide you to the best options."
                },
                {
                  step: "4",
                  title: "Expert Construction",
                  description: "Master craftsmen build your piece with attention to detail and structural integrity."
                },
                {
                  step: "5",
                  title: "Delivery to Saldanha Bay",
                  description: "Professional delivery and installation. We ensure everything fits perfectly and you're completely satisfied."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">{item.title}</h3>
                    <p className="text-forest-green">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Furniture in Saldanha Bay?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's design furniture that works for your Saldanha Bay home. Built to last in the marine environment,
              styled to match your taste. Free consultation for Saldanha Bay residents.
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
                <span className="text-lg">Serving All of Saldanha Bay</span>
              </div>
            </div>

            <Link
              href="/book-consultation"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Get Your Free Design Consultation
            </Link>

            <p className="text-sm mt-6 opacity-90">
              Collection Fee: R300-R500 return • Free delivery on orders over R5,000
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">
              More Services in Saldanha Bay
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/furniture-repair-saldanha-bay"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore existing furniture in Saldanha Bay</p>
              </Link>
              <Link
                href="/antique-restoration"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Preserve precious heirlooms</p>
              </Link>
              <Link
                href="/services"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">View complete service offerings</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
