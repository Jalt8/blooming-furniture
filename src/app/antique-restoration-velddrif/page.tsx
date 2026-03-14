import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, Star, Shield, Hammer, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Velddrif | Expert Furniture Restoration",
  description: "Professional antique restoration in Velddrif. Expert restoration of river heritage, fishing industry antiques, and family heirlooms. Free consultation.",
  keywords: "antique restoration Velddrif, furniture restoration Velddrif, river heritage furniture, fishing antiques Velddrif, West Coast antique restoration",
  openGraph: {
    title: "Antique Restoration Services in Velddrif | Blooming Furniture",
    description: "Expert antique and river heritage furniture restoration in Velddrif. Preserve fishing and boatbuilding history.",
    url: "https://bloomingfurniture.co.za/antique-restoration-velddrif",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-velddrif",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Velddrif",
  "url": "https://bloomingfurniture.co.za/antique-restoration-velddrif",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Velddrif", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.7725, "longitude": 18.1658 }
};

export default function AntiqueRestorationVelddrif() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Velddrif', href: '/antique-restoration-velddrif' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">RIVER HERITAGE EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Velddrif</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Velddrif's rich fishing and boatbuilding heritage means unique antiques from river and ocean industries. We specialize in restoring maritime furniture, fishing family heirlooms, and boatbuilder pieces that tell Velddrif's story.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Velddrif Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Fishing Industry Antiques", desc: "Furniture from fishing families and industry offices. Preserve Velddrif's fishing heritage.", price: "R6,500 - R24,000" },
                { title: "Boatbuilding Heritage", desc: "Pieces from boatbuilding families and workshops. Traditional maritime craftsmanship.", price: "R7,500 - R26,000" },
                { title: "River Cottage Furniture", desc: "Antiques from Berg River cottages and homes. Unique river heritage preservation.", price: "R6,500 - R22,000" },
                { title: "Maritime & Naval Pieces", desc: "Ships' furniture, navigation equipment, and maritime heritage items.", price: "R8,500 - R30,000" }
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
            <h2 className="text-3xl font-bold mb-6">Preserve Velddrif's Maritime & Fishing Heritage</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert restoration honoring Velddrif's unique river and ocean heritage. Professional care for family treasures.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Maritime Specialists • River Heritage • Professional Documentation</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Velddrif</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-velddrif" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">River-inspired pieces</p>
              </Link>
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Marine-grade finishes</p>
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
