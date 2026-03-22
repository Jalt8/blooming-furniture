import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, CheckCircle, Star, Shield, Anchor } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Paternoster | Expert Chair Restoration",
  description: "Professional chair repair in Paternoster. Fix salt-damaged chairs, coastal seating, and fishing village furniture. Marine specialists. Free consultation.",
  keywords: "chair repair Paternoster, chair restoration, coastal chair repair, salt damage chairs, fishing village furniture repair",
  openGraph: {
    title: "Chair Repair Services in Paternoster | Blooming Furniture",
    description: "Expert chair repair in Paternoster. Coastal environment specialists for all chair types.",
    url: "https://bloomingfurniture.co.za/chair-repair-paternoster",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-paternoster",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Chair Repair Paternoster",
  "url": "https://bloomingfurniture.co.za/chair-repair-paternoster",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Paternoster", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.8059, "longitude": 17.8871 }
};

export default function ChairRepairPaternoster() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Paternoster', href: '/chair-repair-paternoster' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">COASTAL CHAIR EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Paternoster</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Paternoster's fishing village charm and intense salt exposure demand specialized chair care. We fix coastal damage, restore cottage seating, and provide marine-grade protection for lasting durability.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Chair Repair for Paternoster's Fishing Village</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Coastal Salt Damage Repair", desc: "Fix salt-weakened joints and corroded hardware. Marine-grade reinforcement and protection." },
                { title: "Cottage Chair Restoration", desc: "Restore Paternoster cottage seating. Whitewashed finishes and beach house character preserved." },
                { title: "Outdoor Patio Chair Repair", desc: "Weatherproof repairs for deck and patio seating. Built to withstand direct salt spray." },
                { title: "Fishing Family Heirlooms", desc: "Restore chairs passed through fishing generations. Preserve village heritage with expert care." }
              ].map((item, i) => (
                <div key={i} className="bg-white-daisy rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-dark-wood mb-4">{item.title}</h3>
                  <p className="text-forest-green mb-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Expert Chair Repairs for Paternoster's Unique Environment</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Specialized coastal repairs that preserve Paternoster's authentic fishing village character.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">Marine Environment Specialists • Village Heritage • Quality Repairs</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Paternoster</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">Marine damage fixes</p>
              </Link>
              <Link href="/antique-restoration-paternoster" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Heritage preservation</p>
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
