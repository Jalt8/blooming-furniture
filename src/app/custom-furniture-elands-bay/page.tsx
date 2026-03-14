import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Ruler, Star, Hammer, Waves, Wind } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Elands Bay | Surf Culture Bespoke Furniture",
  description: "Professional custom furniture in Elands Bay. Laid-back surf culture designs with weatherproof construction. Beach lifestyle furniture. Free consultation.",
  keywords: "custom furniture Elands Bay, bespoke furniture Elands Bay, surf furniture, beach house furniture, coastal furniture, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Elands Bay | Blooming Furniture",
    description: "Surf culture-inspired custom furniture for Elands Bay. Relaxed designs built for beach lifestyle living.",
    url: "https://bloomingfurniture.co.za/custom-furniture-elands-bay",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-elands-bay",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Elands Bay",
  "url": "https://bloomingfurniture.co.za/custom-furniture-elands-bay",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Elands Bay", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.3033, "longitude": 18.3219 }
};

export default function CustomFurnitureElandsBay() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Custom Furniture', href: '/custom-furniture' }, { label: 'Elands Bay', href: '/custom-furniture-elands-bay' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Furniture Makers in <span className="text-golden-center">Elands Bay</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Elands Bay's surf culture and relaxed beach vibe inspire unique furniture. We create custom pieces that match this laid-back coastal lifestyle - weatherproof, functional, and effortlessly cool.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Design Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Elands Bay Residents Choose Custom Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Waves className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Surf Culture Style</h3>
                <p className="text-forest-green">Furniture that captures Elands Bay's laid-back surf vibe. Relaxed, functional, authentic.</p>
              </div>
              <div className="text-center">
                <Wind className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Beach Lifestyle</h3>
                <p className="text-forest-green">Designed for sandy feet and salty air. Easy-care finishes perfect for beach house living.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Built Tough</h3>
                <p className="text-forest-green">Weatherproof construction withstands Elands Bay's coastal elements while looking effortlessly cool.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Custom Furniture for Elands Bay Beach Houses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Beach House Dining Sets", desc: "Relaxed dining tables perfect for post-surf meals. Weathered finishes and durable construction.", price: "R5,500 - R18,000" },
                { title: "Surf Gear Storage", desc: "Custom storage for boards, wetsuits, and beach equipment. Built tough with drainage and ventilation.", price: "R4,000 - R12,000" },
                { title: "Outdoor Lounging Furniture", desc: "Enjoy Elands Bay sunsets with weatherproof outdoor furniture. Low-maintenance and super comfortable.", price: "R5,000 - R16,000" },
                { title: "Coastal Bedroom Sets", desc: "Simple, functional bedroom furniture in beach house style. Easy-care finishes for sandy environments.", price: "R6,500 - R20,000" }
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
            <h2 className="text-3xl font-bold mb-6">Ready for Surf Culture Custom Furniture in Elands Bay?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Furniture that matches Elands Bay's relaxed beach lifestyle. Built tough, styled cool.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection Fee: R500-R800 • Free delivery over R5,000</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Elands Bay</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/furniture-restoration-elands-bay" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore beach furniture</p>
              </Link>
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Waves className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">Fix coastal damage</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">View all services</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
