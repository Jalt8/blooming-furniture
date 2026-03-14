import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Ruler, Star, Hammer, Waves } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Velddrif | Riverside Bespoke Furniture",
  description: "Professional custom furniture design in Velddrif. Handcrafted pieces for Berg River living. Moisture-resistant furniture for riverside homes. Free consultation.",
  keywords: "custom furniture Velddrif, bespoke furniture Velddrif, riverside furniture, Berg River furniture, moisture resistant furniture, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Velddrif | Blooming Furniture",
    description: "Custom furniture designed for Velddrif's riverside location. Built to withstand humidity and moisture.",
    url: "https://bloomingfurniture.co.za/custom-furniture-velddrif",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-velddrif",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Velddrif",
  "url": "https://bloomingfurniture.co.za/custom-furniture-velddrif",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Velddrif", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.7727, "longitude": 18.1647 }
};

export default function CustomFurnitureVelddrif() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Custom Furniture', href: '/custom-furniture' }, { label: 'Velddrif', href: '/custom-furniture-velddrif' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Furniture Makers in <span className="text-golden-center">Velddrif</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Situated on the Berg River, Velddrif homes face unique moisture challenges. We create custom furniture with specialized treatments that resist humidity and warping, ensuring lasting beauty by the riverside.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Design Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Velddrif Residents Choose Custom Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Waves className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Moisture-Resistant</h3>
                <p className="text-forest-green">Special treatments protect against Velddrif's riverside humidity and prevent warping or damage.</p>
              </div>
              <div className="text-center">
                <Ruler className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Riverside Living</h3>
                <p className="text-forest-green">Designed for the unique lifestyle of Berg River residents - practical and beautiful.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Built to Last</h3>
                <p className="text-forest-green">Quality construction that withstands Velddrif's environmental challenges for generations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Custom Furniture for Velddrif Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Moisture-Resistant Dining Sets", desc: "Tables and chairs with special moisture barriers. Perfect for riverside homes with humidity concerns.", price: "R6,500 - R19,000" },
                { title: "Waterproof Storage Solutions", desc: "Keep belongings safe from moisture. Custom cabinets and wardrobes with protective treatments.", price: "R5,000 - R16,000" },
                { title: "Outdoor Riverside Furniture", desc: "Built for Berg River views. Weather-resistant pieces for patios and outdoor entertaining.", price: "R4,500 - R14,000" },
                { title: "Custom Bedroom Furniture", desc: "Sleep soundly with bedroom sets treated to resist Velddrif's humidity. Durable and beautiful.", price: "R7,000 - R21,000" }
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
            <h2 className="text-3xl font-bold mb-6">Ready for Moisture-Resistant Custom Furniture in Velddrif?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Furniture built for riverside living. Protected against humidity and built to last.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection Fee: R350-R600 • Free delivery over R5,000</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Velddrif</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/furniture-restoration-velddrif" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore existing furniture</p>
              </Link>
              <Link href="/water-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Waves className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Water Damage Repair</h4>
                <p className="text-sm text-dark-wood">Fix moisture damage</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">Complete offerings</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
