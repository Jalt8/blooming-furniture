import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, CheckCircle, Star, Shield, Hammer, Sparkles, Home } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Vredenburg | Expert Furniture Restoration",
  description: "Professional antique restoration in Vredenburg. Expert restoration of heirloom furniture, Cape Dutch antiques, and family treasures. Free consultation.",
  keywords: "antique restoration Vredenburg, furniture restoration Vredenburg, Cape Dutch furniture, heirloom furniture Vredenburg, West Coast antique restoration",
  openGraph: {
    title: "Antique Restoration Services in Vredenburg | Blooming Furniture",
    description: "Expert antique and Cape Dutch furniture restoration in Vredenburg. Preserve family heritage professionally.",
    url: "https://bloomingfurniture.co.za/antique-restoration-vredenburg",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-vredenburg",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Antique Restoration Vredenburg",
  "url": "https://bloomingfurniture.co.za/antique-restoration-vredenburg",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Vredenburg", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.9082, "longitude": 17.9860 }
};

export default function AntiqueRestorationVredenburg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Vredenburg', href: '/antique-restoration-vredenburg' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">CAPE HERITAGE EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Vredenburg</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Vredenburg's West Coast hub status means homes contain diverse antiques - from Cape Dutch heritage pieces to imported Victorian furniture. We restore with expertise in both local and international antique traditions, preserving Vredenburg's rich history.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration for Vredenburg Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Cape Dutch Furniture", desc: "Yellowwood, stinkwood, and indigenous wood restoration. Traditional joinery and period finishes.", price: "R9,500 - R35,000" },
                { title: "Victorian & Edwardian", desc: "Imported European antiques common in Vredenburg homes. Authentic period restoration.", price: "R8,500 - R28,000" },
                { title: "Family Heirlooms", desc: "Sentimental pieces requiring careful restoration. Preserve memories while ensuring usability.", price: "R6,500 - R24,000" },
                { title: "Farming Heritage Pieces", desc: "Agricultural antiques from Vredenburg's farming history. Robust restoration for working pieces.", price: "R7,500 - R26,000" }
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
            <h2 className="text-3xl font-bold mb-6">Restore Your Vredenburg Antiques with Experts</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Professional restoration that honors both Cape heritage and international antique traditions.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Convenient Vredenburg Location • Expert Care • Value Preservation</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Vredenburg</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-vredenburg" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Bespoke pieces</p>
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
