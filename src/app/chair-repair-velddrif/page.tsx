import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, CheckCircle, Star, Shield, Waves } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Velddrif | Expert Chair Restoration",
  description: "Professional chair repair in Velddrif. Fix river cottage chairs, salt damage, and all seating types. Expert service for Berg River homes. Free consultation.",
  keywords: "chair repair Velddrif, chair restoration, river cottage furniture, coastal chair repair, West Coast chair repair",
  openGraph: {
    title: "Chair Repair Services in Velddrif | Blooming Furniture",
    description: "Expert chair repair in Velddrif. All chair types serviced professionally.",
    url: "https://bloomingfurniture.co.za/chair-repair-velddrif",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-velddrif",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Chair Repair Velddrif",
  "url": "https://bloomingfurniture.co.za/chair-repair-velddrif",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Velddrif", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.7725, "longitude": 18.1658 }
};

export default function ChairRepairVelddrif() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Velddrif', href: '/chair-repair-velddrif' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">RIVER TOWN CHAIR EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Velddrif</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Velddrif's river location and fishing heritage create unique furniture challenges. We fix chairs affected by humidity, salt, and coastal conditions while preserving the character of river cottage living.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Chair Repair for Velddrif River Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Humidity Damage Repair", desc: "Fix chairs weakened by Berg River humidity. Reinforce joints and apply moisture-resistant finishes." },
                { title: "River Cottage Seating", desc: "Restore casual cottage chairs with river-appropriate finishes. Durable and relaxed style." },
                { title: "Fishing Family Chairs", desc: "Repair robust seating from fishing households. Built to last with practical finishes." },
                { title: "Coastal Protection Refinishing", desc: "Marine-grade finishes for outdoor and patio chairs. Withstand river and ocean exposure." }
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
            <h2 className="text-3xl font-bold mb-6">River-Proof Chair Repairs in Velddrif</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert repairs designed for river humidity and coastal conditions. Keep chairs stable and beautiful.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">River Environment Specialists • Maritime Heritage • Quality Work</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Velddrif</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Marine-grade finishes</p>
              </Link>
              <Link href="/antique-restoration-velddrif" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">River heritage</p>
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
