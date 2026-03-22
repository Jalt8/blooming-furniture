import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Ruler, Palette, Hammer } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Langebaan | Bespoke Furniture Design",
  description: "Professional custom furniture design and creation in Langebaan. Handcrafted bespoke pieces tailored to your West Coast home. Free design consultation for Langebaan residents.",
  keywords: "custom furniture Langebaan, bespoke furniture Langebaan, furniture makers Langebaan, handcrafted furniture Langebaan, custom dining tables Langebaan, bespoke wardrobes Langebaan, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Langebaan | Blooming Furniture",
    description: "Transform your Langebaan home with handcrafted custom furniture designed specifically for West Coast coastal living. Free consultation available.",
    url: "https://bloomingfurniture.co.za/custom-furniture-langebaan",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-langebaan",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Langebaan",
  "description": "Professional custom furniture design and creation services in Langebaan, Western Cape. Bespoke handcrafted pieces for coastal living.",
  "url": "https://bloomingfurniture.co.za/custom-furniture-langebaan",
  "telephone": "+27793752588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Langebaan",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0893,
    "longitude": 18.0371
  },
  "areaServed": {
    "@type": "City",
    "name": "Langebaan"
  },
  "serviceType": ["Custom Furniture Design", "Bespoke Furniture Creation", "Handcrafted Furniture"],
  "priceRange": "$$$"
};

export default function CustomFurnitureLangebaan() {
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
            { label: 'Langebaan', href: '/custom-furniture-langebaan' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Custom Furniture Makers in <span className="text-golden-center">Langebaan</span>
              </h1>
              <p className="text-xl mb-6 leading-relaxed">
                Transform your Langebaan home with bespoke furniture designed specifically for coastal living.
                Our handcrafted pieces combine functionality, beauty, and durability to withstand Langebaan's
                unique lagoon environment.
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

        {/* Why Choose Custom for Langebaan */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Langebaan Residents Choose Custom Furniture
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Ruler className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Perfect for Coastal Homes</h3>
                <p className="text-forest-green">
                  Furniture sized perfectly for Langebaan's unique home layouts, from compact cottages to spacious lagoon-view properties.
                </p>
              </div>
              <div className="text-center">
                <Palette className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal-Resistant Materials</h3>
                <p className="text-forest-green">
                  We select wood and finishes that thrive in Langebaan's salt air, humidity, and sun exposure.
                </p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Local Expertise</h3>
                <p className="text-forest-green">
                  Based in Langebaan, we understand the lifestyle and aesthetic that fits West Coast living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Custom Furniture for Langebaan */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Popular Custom Furniture for Langebaan Homes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Coastal Dining Tables</h3>
                <p className="text-forest-green mb-4">
                  Perfect for entertaining with lagoon views. We create extendable dining tables using marine-grade
                  finishes that resist salt air and moisture. Choose from live-edge designs or classic styles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Extendable options for hosting</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weather-resistant marine finishes</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sizes to fit Langebaan home layouts</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R5,500 - R18,000</p>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Built-in Coastal Storage</h3>
                <p className="text-forest-green mb-4">
                  Maximize space in Langebaan homes with custom built-in storage. Perfect for storing beach gear,
                  linens, and keeping sandy floors clean. Designed to fit any space perfectly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom dimensions for awkward spaces</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Beach-friendly organizational systems</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Moisture-resistant materials</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R4,500 - R15,000</p>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Outdoor Entertainment Units</h3>
                <p className="text-forest-green mb-4">
                  Make the most of Langebaan's perfect weather with custom outdoor bars, BBQ stations, and
                  entertainment centers built to withstand coastal conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weatherproof construction</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integrated storage and serving areas</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Salt and UV resistant finishes</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R6,000 - R20,000</p>
              </div>

              <div className="bg-white-daisy rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-4">Bespoke Bedroom Suites</h3>
                <p className="text-forest-green mb-4">
                  Create your dream bedroom with custom beds, nightstands, and wardrobes designed to maximize
                  Langebaan's beautiful morning light and lagoon breezes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Platform beds with under-storage</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Matching nightstands and dressers</span>
                  </li>
                  <li className="flex items-start text-forest-green">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coastal-chic or classic styles</span>
                  </li>
                </ul>
                <p className="text-sm text-dark-wood mt-4 font-semibold">Average cost: R8,000 - R25,000+</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Custom Furniture Process in Langebaan
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Free Home Consultation",
                  description: "We visit your Langebaan home to understand your space, style, and needs. Measure rooms and discuss your vision."
                },
                {
                  step: "2",
                  title: "Design & 3D Renderings",
                  description: "Receive detailed drawings and 3D visualizations of your custom furniture, ensuring it fits perfectly."
                },
                {
                  step: "3",
                  title: "Material Selection",
                  description: "Choose from coastal-appropriate woods, finishes, and hardware. We guide you to materials that thrive in Langebaan."
                },
                {
                  step: "4",
                  title: "Expert Craftsmanship",
                  description: "Our master craftsmen build your piece using traditional techniques and modern precision."
                },
                {
                  step: "5",
                  title: "Delivery & Installation",
                  description: "Free delivery to Langebaan and professional installation. We ensure everything is perfect before we leave."
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
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Furniture in Langebaan?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's bring your vision to life with bespoke furniture designed specifically for your Langebaan home.
              Free consultation and delivery included for Langebaan residents.
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
                <Clock className="h-6 w-6 mr-3" />
                <span className="text-lg">Mon-Sat: 9AM - 5PM</span>
              </div>
            </div>

            <Link
              href="/book-consultation"
              className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Get Your Free Design Consultation
            </Link>

            <p className="text-sm mt-6 opacity-90">
              Collection Fee: R200-R400 return • Free for Langebaan residents on orders over R5,000
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">
              More Services in Langebaan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/furniture-restoration-langebaan"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore your existing furniture in Langebaan</p>
              </Link>
              <Link
                href="/antique-restoration"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Preserve precious heirlooms with care</p>
              </Link>
              <Link
                href="/services"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">View our complete service offerings</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
