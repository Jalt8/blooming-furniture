import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Phone, CheckCircle, Star, Shield, Hammer, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Saldanha Bay | Expert Furniture Restoration",
  description: "Professional antique restoration in Saldanha Bay. Expert restoration of heirloom furniture, antiques, and vintage pieces. Marine environment expertise. Free consultation.",
  keywords: "antique restoration Saldanha Bay, furniture restoration Saldanha Bay, heirloom furniture, maritime antiques, West Coast antique restoration",
  openGraph: {
    title: "Antique Restoration Services in Saldanha Bay | Blooming Furniture",
    description: "Expert antique and heirloom furniture restoration in Saldanha Bay. Maritime heritage furniture specialists.",
    url: "https://bloomingfurniture.co.za/antique-restoration-saldanha-bay",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-saldanha-bay",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Saldanha Bay",
  "url": "https://bloomingfurniture.co.za/antique-restoration-saldanha-bay",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Saldanha Bay", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0117, "longitude": 17.9442 }
};

export default function AntiqueRestorationSaldanhaBay() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Saldanha Bay', href: '/antique-restoration-saldanha-bay' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">MARITIME HERITAGE EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Saldanha Bay</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Saldanha Bay's rich maritime history means homes often contain naval antiques and fishing industry heirlooms. We specialize in restoring coastal antiques affected by the marine environment, preserving both history and value despite challenging conditions.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Saldanha Bay Chooses Our Antique Restoration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Maritime Expertise</h3>
                <p className="text-forest-green">Specialized knowledge of naval and fishing industry antiques. Understanding Saldanha's unique maritime heritage.</p>
              </div>
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Salt Damage Treatment</h3>
                <p className="text-forest-green">Expert restoration of salt-damaged antiques. Marine-grade protection for long-term preservation.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Historical Accuracy</h3>
                <p className="text-forest-green">Period-appropriate restoration that maintains historical and monetary value.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Saldanha Bay Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Maritime & Naval Antiques", desc: "Ships' furniture, navigation equipment cases, and naval officer pieces. Specialized maritime restoration.", price: "R7,500 - R26,000" },
                { title: "Fishing Industry Heritage", desc: "Furniture from fishing families and company offices. Preserving Saldanha's fishing heritage.", price: "R6,500 - R22,000" },
                { title: "Salt-Damaged Antiques", desc: "Expert treatment of coastal salt damage. Reverse corrosion and protect for the future.", price: "R8,500 - R30,000" },
                { title: "Victorian Coastal Pieces", desc: "Period furniture from Saldanha's historic homes. Coastal adaptation with authentic restoration.", price: "R9,500 - R32,000" }
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
            <h2 className="text-3xl font-bold mb-6">Preserve Saldanha Bay's Maritime Heritage</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Expert restoration of coastal and maritime antiques. Honor your family's history with professional care.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Marine Environment Specialists • Professional Care • Full Documentation</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Saldanha Bay</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-saldanha-bay" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Maritime-inspired pieces</p>
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
