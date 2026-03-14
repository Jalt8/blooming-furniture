import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, Star, Shield, Hammer, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Yzerfontein | Expert Furniture Restoration",
  description: "Professional antique restoration in Yzerfontein. Expert restoration of coastal antiques, salt-damaged furniture, and family heirlooms. Marine environment specialists.",
  keywords: "antique restoration Yzerfontein, furniture restoration Yzerfontein, coastal antiques, salt damage restoration, marine furniture restoration",
  openGraph: {
    title: "Antique Restoration Services in Yzerfontein | Blooming Furniture",
    description: "Expert antique and coastal furniture restoration in Yzerfontein. Marine environment damage specialists.",
    url: "https://bloomingfurniture.co.za/antique-restoration-yzerfontein",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-yzerfontein",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Yzerfontein",
  "url": "https://bloomingfurniture.co.za/antique-restoration-yzerfontein",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Yzerfontein", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.3467, "longitude": 18.1592 }
};

export default function AntiqueRestorationYzerfontein() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Yzerfontein', href: '/antique-restoration-yzerfontein' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">COASTAL DAMAGE EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Yzerfontein</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Yzerfontein's exposed coastal position creates extreme challenges for antique furniture. We specialize in reversing severe salt and UV damage while maintaining historical authenticity. Expert restoration despite the harshest marine conditions.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Yzerfontein's Coastal Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Extreme Salt Damage Reversal", desc: "Specialized treatment for severe coastal exposure. Restore antiques despite years of salt damage.", price: "R9,500 - R35,000" },
                { title: "Beach House Heirlooms", desc: "Antiques from Yzerfontein beach homes and cottages. Preserve family memories with marine protection.", price: "R7,500 - R28,000" },
                { title: "UV & Sun Damage Restoration", desc: "Reverse bleaching and sun damage from intense coastal exposure. Color and finish restoration.", price: "R8,500 - R30,000" },
                { title: "Coastal Victorian & Cape Dutch", desc: "Period furniture adapted to marine environment. Authentic restoration with modern protection.", price: "R9,500 - R36,000" }
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
            <h2 className="text-3xl font-bold mb-6">Restore Coastal Antiques Despite Extreme Exposure</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert restoration for Yzerfontein's challenging marine environment. Preserve value and history with marine-grade protection.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Marine Environment Specialists • Salt Damage Experts • Maximum Protection</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Yzerfontein</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-yzerfontein" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Marine-grade pieces</p>
              </Link>
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Shield className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Maximum weatherproofing</p>
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
