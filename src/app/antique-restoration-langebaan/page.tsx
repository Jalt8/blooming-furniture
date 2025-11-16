import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Phone, CheckCircle, Star, Shield, Hammer, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Antique Restoration Langebaan | Expert Furniture Restoration Services",
  description: "Professional antique restoration in Langebaan. Expert restoration of heirloom furniture, antiques, and vintage pieces. Preserve family treasures. Free consultation.",
  keywords: "antique restoration Langebaan, furniture restoration Langebaan, heirloom furniture, vintage restoration, antique repair Langebaan, West Coast antique restoration",
  openGraph: {
    title: "Antique Restoration Services in Langebaan | Blooming Furniture",
    description: "Expert antique and heirloom furniture restoration in Langebaan. Preserve family treasures with professional care.",
    url: "https://bloomingfurniture.co.za/antique-restoration-langebaan",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/antique-restoration-langebaan",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blooming Furniture - Antique Restoration Langebaan",
  "url": "https://bloomingfurniture.co.za/antique-restoration-langebaan",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Langebaan", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0893, "longitude": 18.0371 }
};

export default function AntiqueRestorationLangebaan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Antique Restoration', href: '/antique-restoration' }, { label: 'Langebaan', href: '/antique-restoration-langebaan' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10 text-golden-center" />
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">HEIRLOOM SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Antique Restoration Services in <span className="text-golden-center">Langebaan</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Langebaan's coastal charm and historic homes hold treasured antiques and family heirlooms. We specialize in expert restoration that preserves authenticity while ensuring structural integrity. Your family's history deserves professional care.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Restoration Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Langebaan Residents Choose Our Antique Restoration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Authentic Preservation</h3>
                <p className="text-forest-green">Traditional techniques that honor the original craftsmanship and historical integrity of your antiques.</p>
              </div>
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal Protection</h3>
                <p className="text-forest-green">Special treatments for Langebaan's coastal environment. Preserve antiques despite salt air and humidity.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Value Preservation</h3>
                <p className="text-forest-green">Professional restoration maintains and often increases the value of antique furniture.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Antique Restoration Services for Langebaan Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Victorian & Edwardian Furniture", desc: "Expert restoration of period pieces common in Langebaan's historic homes. Ornate details and original finishes preserved.", price: "R8,500 - R28,000" },
                { title: "Cape Dutch Antiques", desc: "Specialized care for traditional Cape furniture. Yellowwood, stinkwood, and other indigenous wood restoration.", price: "R9,500 - R32,000" },
                { title: "Family Heirlooms", desc: "Sensitive restoration of pieces with sentimental value. Preserve history while ensuring functionality.", price: "R6,500 - R22,000" },
                { title: "Antique Chairs & Seating", desc: "Structural restoration, reupholstery, and finish restoration for valuable seating furniture.", price: "R5,500 - R18,000" }
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

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Restoration Philosophy</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { icon: Shield, title: "Preservation First", desc: "We prioritize preserving original materials and finishes whenever possible. Replacements only when absolutely necessary." },
                { icon: Star, title: "Documented Process", desc: "Full photo documentation before, during, and after restoration. You see exactly what we do and why." },
                { icon: Sparkles, title: "Period-Appropriate Methods", desc: "Using traditional techniques and materials that match the piece's era. Authentic restoration, not modern shortcuts." },
                { icon: CheckCircle, title: "Reversible Repairs", desc: "When possible, repairs are done in ways that future restorers can reverse without damaging the original piece." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <item.icon className="h-10 w-10 text-golden-center flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">{item.title}</h3>
                    <p className="text-forest-green">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Antiques in Langebaan?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Trust your family treasures to experts who understand both the craft and the history.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Restoration Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection & Delivery Available • Full Insurance • Professional Care</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Langebaan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/custom-furniture-langebaan" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Bespoke pieces</p>
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
