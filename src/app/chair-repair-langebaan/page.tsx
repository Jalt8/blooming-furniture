import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, Phone, CheckCircle, Star, Shield, Hammer, Wrench } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Langebaan | Expert Chair Restoration Services",
  description: "Professional chair repair in Langebaan. Fix wobbly chairs, broken legs, loose joints, and reupholstery. Expert structural repair and refinishing. Free consultation.",
  keywords: "chair repair Langebaan, chair restoration Langebaan, wobbly chair fix, chair reupholstery, broken chair repair, West Coast chair repair",
  openGraph: {
    title: "Chair Repair Services in Langebaan | Blooming Furniture",
    description: "Expert chair repair and restoration in Langebaan. Fix structural issues, refinish, and reupholster.",
    url: "https://bloomingfurniture.co.za/chair-repair-langebaan",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-langebaan",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Chair Repair Langebaan",
  "url": "https://bloomingfurniture.co.za/chair-repair-langebaan",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Langebaan", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0893, "longitude": 18.0371 }
};

export default function ChairRepairLangebaan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Langebaan', href: '/chair-repair-langebaan' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">CHAIR SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Langebaan</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Wobbly dining chairs? Broken office chairs? Antique seating needing restoration? We fix all chair problems - from structural repairs to complete restoration. Expert service keeps Langebaan chairs stable and beautiful.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Chair Repair Services for Langebaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Structural Repairs", desc: "Fix wobbly chairs, broken legs, loose joints. Professional re-gluing and reinforcement." },
                { title: "Chair Reupholstery", desc: "New fabric, foam, and springs. Modern or period-appropriate upholstery." },
                { title: "Refinishing & Restoration", desc: "Strip and refinish wooden chairs. Restore beauty and protection." },
                { title: "Antique Chair Restoration", desc: "Period-appropriate restoration of valuable antique seating. Expert care." }
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
            <h2 className="text-3xl font-bold mb-6">Get Your Langebaan Chairs Fixed Professionally</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't throw away wobbly or damaged chairs. Expert repair costs less than replacement and preserves quality furniture.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">Fast Turnaround • Quality Repairs • Reasonable Rates</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Langebaan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Joint Repair</h4>
                <p className="text-sm text-dark-wood">All furniture types</p>
              </Link>
              <Link href="/antique-restoration-langebaan" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Heirloom preservation</p>
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
