import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, CheckCircle, Star, Hammer, Wheat } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Hopefield | Expert Chair Restoration",
  description: "Professional chair repair in Hopefield. Fix farmhouse dining chairs, antique seating, and all chair types. Traditional craftsmanship. Free consultation.",
  keywords: "chair repair Hopefield, chair restoration, farmhouse chair repair, dining chair fix, West Coast chair repair",
  openGraph: {
    title: "Chair Repair Services in Hopefield | Blooming Furniture",
    description: "Expert chair repair in Hopefield. Traditional craftsmanship for all chair types.",
    url: "https://bloomingfurniture.co.za/chair-repair-hopefield",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-hopefield",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blooming Furniture - Chair Repair Hopefield",
  "url": "https://bloomingfurniture.co.za/chair-repair-hopefield",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Hopefield", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0667, "longitude": 18.3500 }
};

export default function ChairRepairHopefield() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Hopefield', href: '/chair-repair-hopefield' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">TRADITIONAL CRAFTSMANSHIP</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Hopefield</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Hopefield's farming heritage means chairs built to last generations. We use traditional joinery techniques to repair farmhouse dining sets, antique seating, and family heirlooms with the quality they deserve.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Chair Repair for Hopefield Families</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Farmhouse Dining Chairs", desc: "Repair robust dining sets with traditional techniques. Mortise and tenon joinery restored properly." },
                { title: "Heirloom Chair Restoration", desc: "Restore chairs passed through farming generations. Preserve family history with expert care." },
                { title: "Structural Reinforcement", desc: "Fix wobbly chairs with proper joinery. Traditional gluing and clamping for lasting repairs." },
                { title: "Period Reupholstery", desc: "Traditional upholstery techniques for antique chairs. Period-appropriate materials and methods." }
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
            <h2 className="text-3xl font-bold mb-6">Traditional Chair Repairs for Hopefield Heritage</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Time-honored techniques that honor Hopefield's farming traditions. Repairs built to last generations.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">Traditional Craftsmanship • Farming Heritage • Generational Quality</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Hopefield</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Joint Repair</h4>
                <p className="text-sm text-dark-wood">All furniture types</p>
              </Link>
              <Link href="/antique-restoration-hopefield" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
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
