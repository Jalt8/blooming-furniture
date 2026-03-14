import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Hammer, Check, Star, Phone, MessageCircle, Clock, Shield, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wood Furniture Repair West Coast | Expert Woodwork Restoration',
  description: 'Professional wood furniture repair services on the West Coast, South Africa. Fix broken chairs, tables, cabinets & more. Expert craftsmen specializing in all wood types. Free quotes!',
  keywords: 'wood furniture repair, wooden furniture restoration, wood repair West Coast, furniture woodwork, broken furniture fix, wood damage repair, Langebaan wood repair, Saldanha Bay furniture repair',
  openGraph: {
    title: 'Wood Furniture Repair West Coast | Blooming Furniture',
    description: 'Expert wood furniture repair services. Fix broken joints, cracks, water damage & more. Serving the entire West Coast.',
    url: 'https://bloomingfurniture.co.za/wood-furniture-repair',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/wood-furniture-repair',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Wood Furniture Repair",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://bloomingfurniture.co.za",
    "name": "Blooming Furniture",
    "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
    "telephone": "+27793752588",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Langebaan",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Western Cape"
  },
  "description": "Professional wood furniture repair services including structural repairs, joint reinforcement, crack filling, water damage restoration, and woodwork restoration for all furniture types.",
  "offers": {
    "@type": "Offer",
    "priceRange": "$$"
  }
};

const repairTypes = [
  {
    title: "Broken Legs & Arms",
    description: "Repair or replace broken chair legs, table legs, and furniture arms",
    icon: Hammer,
    examples: ["Chair leg breaks", "Table leg splits", "Sofa arm damage"]
  },
  {
    title: "Loose Joints",
    description: "Reinforce wobbly furniture with proper joint repair and re-gluing",
    icon: Wrench,
    examples: ["Wobbly chairs", "Loose table joints", "Rickety cabinets"]
  },
  {
    title: "Cracks & Splits",
    description: "Fill and repair wood cracks, splits, and structural damage",
    icon: Hammer,
    examples: ["Table top cracks", "Panel splits", "Surface fractures"]
  },
  {
    title: "Water Damage",
    description: "Restore water-damaged wood, remove stains, and prevent further damage",
    icon: Wrench,
    examples: ["Water rings", "Swelling", "Warped surfaces"]
  },
  {
    title: "Broken Drawers",
    description: "Repair drawer runners, sides, and bottoms for smooth operation",
    icon: Hammer,
    examples: ["Stuck drawers", "Broken tracks", "Damaged bottoms"]
  },
  {
    title: "Missing Pieces",
    description: "Custom fabricate replacement parts to match original design",
    icon: Wrench,
    examples: ["Lost knobs", "Broken spindles", "Missing trim"]
  }
];

const woodTypes = [
  "Oak", "Pine", "Teak", "Mahogany", "Yellowwood", "Stinkwood",
  "Kiaat", "Imbuia", "Walnut", "Cherry", "Cedar", "Rosewood"
];

const process = [
  {
    step: 1,
    title: "Assessment",
    description: "We thoroughly inspect your furniture to identify all damage and determine the best repair approach."
  },
  {
    step: 2,
    title: "Disassembly (if needed)",
    description: "Carefully take apart affected areas to access and repair structural issues properly."
  },
  {
    step: 3,
    title: "Repair Work",
    description: "Fix broken joints, fill cracks, replace damaged wood, and reinforce weak areas using traditional techniques."
  },
  {
    step: 4,
    title: "Reassembly",
    description: "Put everything back together stronger than before, ensuring all joints are secure and tight."
  },
  {
    step: 5,
    title: "Finish Matching",
    description: "Touch up repairs to match existing finish so the repair blends seamlessly."
  },
  {
    step: 6,
    title: "Quality Check",
    description: "Test stability and durability to ensure your furniture is ready for years of use."
  }
];

export default function WoodFurnitureRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Expert Wood Furniture Repair Services
                </h1>
                <p className="text-xl mb-6">
                  Don't throw away that broken furniture! Our skilled craftsmen can repair virtually any wood furniture damage - from broken legs and loose joints to water damage and cracks.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>All wood types repaired</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Structural & cosmetic repairs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Free quotes & collection available</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/27793752588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 inline-flex items-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Quote
                  </a>
                  <a
                    href="tel:+27793752588"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 inline-flex items-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (079) 375 2588
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Chest7.jpg"
                  alt="Wood furniture repair services"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Repairs */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Common Wood Furniture Repairs We Handle
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              From minor fixes to major structural repairs, we have the expertise to restore your wooden furniture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairTypes.map((repair, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <repair.icon className="h-12 w-12 text-forest-green mb-4" />
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{repair.title}</h3>
                  <p className="text-forest-green mb-4">{repair.description}</p>
                  <div className="border-t border-golden-center/20 pt-4">
                    <p className="text-sm font-semibold text-dark-wood mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {repair.examples.map((example, i) => (
                        <li key={i} className="text-sm text-forest-green flex items-start gap-2">
                          <span className="text-golden-center">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wood Types */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              We Repair All Types of Wood
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Whether it's local South African wood or imported hardwood, our craftsmen have the expertise to work with any wood type.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {woodTypes.map((wood, idx) => (
                <div key={idx} className="bg-white-daisy p-4 rounded-lg text-center hover:bg-golden-center/10 transition duration-300">
                  <p className="font-semibold text-dark-wood">{wood}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-forest-green">
                Don't see your wood type? <strong>We can work with it!</strong> Contact us for expert advice.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Wood Repair Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-green text-white-daisy rounded-full flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-wood mb-2">{step.title}</h3>
                      <p className="text-forest-green">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Choose Blooming Furniture for Wood Repairs?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Expert Craftsmen</h3>
                <p className="text-forest-green">10+ years experience in wood furniture repair and restoration</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Quality Guaranteed</h3>
                <p className="text-forest-green">100% satisfaction guarantee on all repairs</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Fast Turnaround</h3>
                <p className="text-forest-green">Most repairs completed within 1-2 weeks</p>
              </div>
              <div className="text-center">
                <Phone className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Free Quotes</h3>
                <p className="text-forest-green">No obligation estimates provided within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Wood Furniture Repaired Today</h2>
            <p className="text-xl mb-8">
              Send us photos of your broken furniture for a free, detailed repair quote. Most quotes provided within 24 hours!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/27793752588"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Photos via WhatsApp
              </a>
              <Link
                href="/contact"
                className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-dark-wood mb-4">
              Serving the Entire West Coast
            </h3>
            <p className="text-forest-green mb-6">
              Langebaan • Saldanha Bay • Vredenburg • Paternoster • Velddrif • Hopefield • Yzerfontein • Elands Bay
            </p>
            <p className="text-sm text-forest-green">
              Collection and delivery available for all areas
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
