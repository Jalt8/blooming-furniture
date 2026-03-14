import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, Star, Shield, Hammer, Waves } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Elands Bay | Expert Furniture Restoration",
  description: "Professional antique restoration in Elands Bay. Expert restoration of surf culture antiques, coastal heirlooms, and beach house furniture. Free consultation.",
  keywords: "antique restoration Elands Bay, furniture restoration Elands Bay, surf culture antiques, beach house heirlooms, coastal furniture restoration",
  openGraph: {
    title: "Antique Restoration Services in Elands Bay | Blooming Furniture",
    description: "Expert antique and surf culture furniture restoration in Elands Bay. Preserve coastal heritage professionally.",
    url: "https://bloomingfurniture.co.za/antique-restoration-elands-bay",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-elands-bay",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Elands Bay",
  "url": "https://bloomingfurniture.co.za/antique-restoration-elands-bay",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Elands Bay", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.3033, "longitude": 18.3219 }
};

export default function AntiqueRestorationElandsBay() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Elands Bay', href: '/antique-restoration-elands-bay' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">BEACH HERITAGE SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Elands Bay</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Elands Bay's laid-back surf culture and fishing heritage create unique antiques. We restore beach house heirlooms, surf culture pieces, and coastal antiques with respect for Elands Bay's authentic character and challenging marine environment.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Elands Bay's Beach Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Beach House Heirlooms", desc: "Restore furniture from generations of beach house living. Preserve family memories with marine protection.", price: "R6,500 - R24,000" },
                { title: "Surf Culture Antiques", desc: "Vintage surf culture pieces and memorabilia. Authentic restoration honoring Elands Bay's surf heritage.", price: "R5,500 - R20,000" },
                { title: "Fishing Village Heritage", desc: "Antiques from Elands Bay's fishing community. Traditional coastal restoration techniques.", price: "R6,500 - R22,000" },
                { title: "Salt-Damaged Coastal Pieces", desc: "Expert treatment of severe marine exposure. Reverse years of salt and wind damage.", price: "R8,500 - R30,000" }
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
            <h2 className="text-3xl font-bold mb-6">Preserve Elands Bay's Beach & Surf Heritage</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert restoration honoring Elands Bay's unique surf culture and coastal character. Professional care for laid-back treasures.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Surf Culture Experts • Marine Environment • Authentic Restoration</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Elands Bay</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-elands-bay" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Surf-inspired pieces</p>
              </Link>
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">Coastal damage fixes</p>
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
