import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, CheckCircle, Star, Shield, Hammer } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Saldanha Bay | Expert Chair Restoration",
  description: "Professional chair repair in Saldanha Bay. Fix wobbly chairs, broken legs, salt damage, and reupholstery. Marine environment specialists. Free consultation.",
  keywords: "chair repair Saldanha Bay, chair restoration, wobbly chair fix, coastal chair repair, West Coast chair repair",
  openGraph: {
    title: "Chair Repair Services in Saldanha Bay | Blooming Furniture",
    description: "Expert chair repair in Saldanha Bay. Structural repairs, refinishing, and marine damage treatment.",
    url: "https://bloomingfurniture.co.za/chair-repair-saldanha-bay",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-saldanha-bay",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Chair Repair Saldanha Bay",
  "url": "https://bloomingfurniture.co.za/chair-repair-saldanha-bay",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Saldanha Bay", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0117, "longitude": 17.9442 }
};

export default function ChairRepairSaldanhaBay() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Saldanha Bay', href: '/chair-repair-saldanha-bay' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">MARINE CHAIR EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Saldanha Bay</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Saldanha Bay's marine environment is tough on chairs. We fix salt-damaged joints, corroded hardware, and structural issues unique to coastal seating. Expert repairs that withstand the bay environment.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Chair Repair for Saldanha Bay's Marine Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Salt Damage Treatment", desc: "Fix salt-corroded joints and hardware. Marine-grade replacements for coastal durability." },
                { title: "Structural Marine Repairs", desc: "Reinforce chairs weakened by humidity. Coastal-proof joint repairs and gluing." },
                { title: "Weatherproof Refinishing", desc: "Marine-grade finishes for outdoor and patio chairs. UV and salt resistant." },
                { title: "Office & Dining Chair Repair", desc: "Fix wobbles, broken wheels, gas lift replacements. All chair types serviced." }
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
            <h2 className="text-3xl font-bold mb-6">Marine-Proof Chair Repairs in Saldanha Bay</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert repairs designed for coastal conditions. Keep chairs stable despite salt and humidity.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">Marine Environment Specialists • Quality Repairs • Fast Service</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Saldanha Bay</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">All furniture types</p>
              </Link>
              <Link href="/antique-restoration-saldanha-bay" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Maritime heritage</p>
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
