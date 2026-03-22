import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, Star, Shield, Hammer, Wheat } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Hopefield | Expert Furniture Restoration",
  description: "Professional antique restoration in Hopefield. Expert restoration of farmhouse antiques, Cape Dutch furniture, and agricultural heritage. Free consultation.",
  keywords: "antique restoration Hopefield, furniture restoration Hopefield, farmhouse antiques, Cape Dutch furniture, agricultural heritage Hopefield",
  openGraph: {
    title: "Antique Restoration Services in Hopefield | Blooming Furniture",
    description: "Expert antique and farmhouse furniture restoration in Hopefield. Preserve agricultural heritage professionally.",
    url: "https://bloomingfurniture.co.za/antique-restoration-hopefield",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-hopefield",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Hopefield",
  "url": "https://bloomingfurniture.co.za/antique-restoration-hopefield",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Hopefield", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0667, "longitude": 18.3500 }
};

export default function AntiqueRestorationHopefield() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Hopefield', href: '/antique-restoration-hopefield' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">FARMING HERITAGE EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Hopefield</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Hopefield's agricultural heritage means homes treasure antiques passed through farming generations. We specialize in restoring robust farmhouse furniture, Cape Dutch pieces, and agricultural antiques that represent Hopefield's rich farming history.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Hopefield Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Cape Dutch Farmhouse Furniture", desc: "Yellowwood, stinkwood, and Oregon pine antiques. Traditional Cape furniture restoration.", price: "R9,500 - R38,000" },
                { title: "Agricultural Heritage Pieces", desc: "Furniture from farming families and estates. Robust restoration for working heirlooms.", price: "R7,500 - R28,000" },
                { title: "Generational Family Treasures", desc: "Pieces passed through generations of Hopefield families. Preserve family history with care.", price: "R8,500 - R32,000" },
                { title: "Victorian Rural Furniture", desc: "Period pieces from Hopefield's historic farms and homes. Authentic rural restoration.", price: "R8,500 - R30,000" }
              ].map((item, i) => (
                <div key={i} className="bg-white-daisy rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-dark-wood mb-4">{item.title}</h3>
                  <p className="text-forest-green mb-4">{item.desc}</p>
                  <p className="text-sm text-dark-wood font-semibold">Typical investment: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Honor Hopefield's Agricultural Heritage</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert restoration that respects the craftsmanship and history of farming families. Preserve treasures for future generations.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Traditional Techniques • Family Heritage • Generational Quality</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Hopefield</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-hopefield" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Heirloom-quality pieces</p>
              </Link>
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Structural Repair</h4>
                <p className="text-sm text-dark-wood">Joint restoration</p>
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
