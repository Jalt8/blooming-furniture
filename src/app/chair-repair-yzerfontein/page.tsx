import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, CheckCircle, Star, Shield, Sun } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Yzerfontein | Expert Chair Restoration",
  description: "Professional chair repair in Yzerfontein. Fix extreme salt damage, coastal seating, and beach house chairs. Marine environment specialists. Free consultation.",
  keywords: "chair repair Yzerfontein, chair restoration, coastal chair repair, salt damaged chairs, marine furniture repair",
  openGraph: {
    title: "Chair Repair Services in Yzerfontein | Blooming Furniture",
    description: "Expert chair repair in Yzerfontein. Extreme coastal environment specialists.",
    url: "https://bloomingfurniture.co.za/chair-repair-yzerfontein",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-yzerfontein",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Chair Repair Yzerfontein",
  "url": "https://bloomingfurniture.co.za/chair-repair-yzerfontein",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Yzerfontein", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.3467, "longitude": 18.1592 }
};

export default function ChairRepairYzerfontein() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Yzerfontein', href: '/chair-repair-yzerfontein' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">EXTREME COASTAL SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Yzerfontein</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Yzerfontein's exposed coastal position creates extreme challenges for chairs. We specialize in reversing severe salt damage, UV bleaching, and structural weakening from intense marine exposure.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Chair Repair for Yzerfontein's Extreme Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Severe Salt Damage Repair", desc: "Reverse extreme salt corrosion and joint failure. Complete structural rebuilding with marine-grade protection." },
                { title: "UV Damage Restoration", desc: "Fix sun-bleached and degraded chairs. Restore color and apply maximum UV protection." },
                { title: "Beach House Chair Repair", desc: "Marine-grade repairs for exposed coastal furniture. Built to withstand direct salt spray." },
                { title: "Complete Chair Reconstruction", desc: "Rebuild severely damaged chairs. Structural restoration with maximum coastal protection." }
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
            <h2 className="text-3xl font-bold mb-6">Maximum Protection Chair Repairs for Yzerfontein</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert repairs engineered for extreme coastal exposure. Marine-grade protection for lasting durability.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">Extreme Coastal Specialists • Maximum Protection • Expert Care</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Yzerfontein</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Maximum weatherproofing</p>
              </Link>
              <Link href="/antique-restoration-yzerfontein" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Coastal heritage</p>
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
