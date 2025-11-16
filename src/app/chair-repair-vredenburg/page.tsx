import { Metadata } from 'next';
import Link from 'next/link';
import { Armchair, CheckCircle, Star, Hammer, Home } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Chair Repair Vredenburg | Expert Chair Restoration",
  description: "Professional chair repair in Vredenburg. Fix wobbly dining chairs, office chairs, and antique seating. Fast, reliable service. Free consultation.",
  keywords: "chair repair Vredenburg, chair restoration, dining chair repair, office chair fix, West Coast chair repair",
  openGraph: {
    title: "Chair Repair Services in Vredenburg | Blooming Furniture",
    description: "Expert chair repair in Vredenburg. All types of chair repairs and restoration.",
    url: "https://bloomingfurniture.co.za/chair-repair-vredenburg",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/chair-repair-vredenburg",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blooming Furniture - Chair Repair Vredenburg",
  "url": "https://bloomingfurniture.co.za/chair-repair-vredenburg",
  "telephone": "(079) 375 2588",
  "address": { "@type": "PostalAddress", "addressLocality": "Vredenburg", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -32.9082, "longitude": 17.9860 }
};

export default function ChairRepairVredenburg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Chair Repair Vredenburg', href: '/chair-repair-vredenburg' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Armchair className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">CHAIR REPAIR EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Chair Repair Services in <span className="text-golden-center">Vredenburg</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Vredenburg's central West Coast location makes us your go-to chair repair specialists. From dining sets to office chairs, we fix all types with professional quality and fast turnaround.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Chair Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Complete Chair Repair Services for Vredenburg</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Dining Chair Repairs", desc: "Fix wobbly sets, broken spindles, loose joints. Keep your dining room functional." },
                { title: "Office Chair Servicing", desc: "Gas lift replacement, wheel fixes, mechanism repair. Keep working comfortably." },
                { title: "Reupholstery Services", desc: "Fresh fabric and padding for dining and accent chairs. Modern or traditional styles." },
                { title: "Antique Chair Restoration", desc: "Period-appropriate restoration of valuable seating. Expert structural and cosmetic work." }
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
            <h2 className="text-3xl font-bold mb-6">Vredenburg's Trusted Chair Repair Service</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Convenient location, professional quality, fair prices. Your chairs deserve expert care.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Chair Repair Quote</Link>
            <p className="text-sm mt-6 opacity-90">Central West Coast Location • Fast Service • Quality Work</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Vredenburg</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Joint Repair</h4>
                <p className="text-sm text-dark-wood">All furniture types</p>
              </Link>
              <Link href="/custom-furniture-vredenburg" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Home className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Custom Furniture</h4>
                <p className="text-sm text-dark-wood">Bespoke pieces</p>
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
