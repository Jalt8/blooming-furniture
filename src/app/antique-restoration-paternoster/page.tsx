import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, Star, Shield, Hammer, Sparkles, Anchor } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Paternoster | Expert Furniture Restoration",
  description: "Professional antique restoration in Paternoster. Expert restoration of fishing village heritage, coastal antiques, and family heirlooms. Free consultation.",
  keywords: "antique restoration Paternoster, furniture restoration Paternoster, fishing village antiques, coastal heritage furniture, West Coast antique restoration",
  openGraph: {
    title: "Antique Restoration Services in Paternoster | Blooming Furniture",
    description: "Expert antique and fishing heritage furniture restoration in Paternoster. Preserve coastal history professionally.",
    url: "https://bloomingfurniture.co.za/antique-restoration-paternoster",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-paternoster",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Paternoster",
  "url": "https://bloomingfurniture.co.za/antique-restoration-paternoster",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Paternoster", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.8059, "longitude": 17.8871 }
};

export default function AntiqueRestorationPaternoster() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Paternoster', href: '/antique-restoration-paternoster' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">FISHING HERITAGE SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Paternoster</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Paternoster's authentic fishing village character means unique antiques - from fishing family heirlooms to whitewashed cottage furniture. We specialize in preserving this coastal heritage despite intense marine exposure, honoring Paternoster's authentic charm.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Paternoster's Unique Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Fishing Village Heirlooms", desc: "Furniture from fishing families passed through generations. Authentic village character preservation.", price: "R6,500 - R22,000" },
                { title: "Extreme Salt Damage Restoration", desc: "Expert treatment of severe coastal exposure. Specialized techniques for Paternoster's harsh environment.", price: "R8,500 - R32,000" },
                { title: "Whitewashed Cottage Pieces", desc: "Traditional Paternoster cottage furniture. Preserve authentic beach cottage aesthetic.", price: "R7,500 - R24,000" },
                { title: "Maritime & Naval Antiques", desc: "Lighthouse, boat, and naval heritage pieces. Authentic maritime restoration.", price: "R8,500 - R30,000" }
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
            <h2 className="text-3xl font-bold mb-6">Preserve Paternoster's Fishing Village Heritage</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert restoration of coastal antiques with understanding of Paternoster's unique character and challenges.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Marine Environment Experts • Authentic Preservation • Family Heritage</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Paternoster</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-paternoster" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Coastal-style pieces</p>
              </Link>
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">Marine damage fixes</p>
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
