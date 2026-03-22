import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Ruler, Star, Hammer, Waves, Sun } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Yzerfontein | Coastal Bespoke Furniture",
  description: "Professional custom furniture in Yzerfontein. Marine-grade handcrafted pieces for pristine beach living. Built for exposed coastal conditions. Free consultation.",
  keywords: "custom furniture Yzerfontein, bespoke furniture Yzerfontein, beach furniture, coastal furniture, marine grade furniture, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Yzerfontein | Blooming Furniture",
    description: "Marine-grade custom furniture for Yzerfontein's pristine beaches. Built to withstand exposed coastal conditions.",
    url: "https://bloomingfurniture.co.za/custom-furniture-yzerfontein",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-yzerfontein",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Yzerfontein",
  "url": "https://bloomingfurniture.co.za/custom-furniture-yzerfontein",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Yzerfontein", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.3467, "longitude": 18.1592 }
};

export default function CustomFurnitureYzerfontein() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Custom Furniture', href: '/custom-furniture' }, { label: 'Yzerfontein', href: '/custom-furniture-yzerfontein' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Furniture Makers in <span className="text-golden-center">Yzerfontein</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Yzerfontein's pristine beaches and exposed coastal position demand furniture with maximum protection. We create custom pieces using marine-grade treatments that withstand salt spray, wind, and intense sun exposure.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Design Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Yzerfontein Residents Choose Custom Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Waves className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Marine-Grade Protection</h3>
                <p className="text-forest-green">Maximum protection against Yzerfontein's intense salt spray and exposed coastal position.</p>
              </div>
              <div className="text-center">
                <Sun className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">UV Resistant</h3>
                <p className="text-forest-green">Special UV-blocking finishes prevent fading from Yzerfontein's strong coastal sun.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Built for Beach Living</h3>
                <p className="text-forest-green">Designs that complement Yzerfontein's pristine beach aesthetic while being practically indestructible.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Custom Furniture for Yzerfontein Beach Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Marine-Grade Dining Tables", desc: "Maximum protection dining tables for Yzerfontein homes. Multi-layer marine coatings resist salt and sun.", price: "R7,500 - R23,000" },
                { title: "Weatherproof Storage", desc: "Keep beach gear organized with storage built to withstand coastal conditions. Salt-resistant hardware.", price: "R5,500 - R17,000" },
                { title: "Outdoor Beach Furniture", desc: "Enjoy Yzerfontein sunsets with outdoor furniture engineered for exposed positions. UV and salt resistant.", price: "R6,000 - R19,000" },
                { title: "Coastal Bedroom Sets", desc: "Sleep soundly with bedroom furniture protected against humidity and salt air. Light, airy designs.", price: "R8,500 - R26,000" }
              ].map((item, i) => (
                <div key={i} className="bg-white-daisy rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-dark-wood mb-4">{item.title}</h3>
                  <p className="text-forest-green mb-4">{item.desc}</p>
                  <p className="text-sm text-dark-wood font-semibold">Average cost: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for Marine-Grade Custom Furniture in Yzerfontein?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Furniture engineered for Yzerfontein's coastal challenges. Maximum protection, beautiful design.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection Fee: R400-R700 • Free delivery over R5,000</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Yzerfontein</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/furniture-restoration-yzerfontein" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore beach furniture</p>
              </Link>
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Waves className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Weatherproof treatments</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">Complete services</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
