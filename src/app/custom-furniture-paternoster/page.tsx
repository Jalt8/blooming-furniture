import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Ruler, Palette, Hammer, Home } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Paternoster | Coastal Bespoke Furniture",
  description: "Professional custom furniture design in Paternoster. Handcrafted pieces for the charming fishing village. Coastal-chic furniture for Paternoster homes. Free consultation.",
  keywords: "custom furniture Paternoster, bespoke furniture Paternoster, coastal furniture Paternoster, whitewashed furniture, fishing village furniture, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Paternoster | Blooming Furniture",
    description: "Coastal-chic custom furniture for Paternoster's charming fishing village. Handcrafted pieces that match the whitewashed aesthetic.",
    url: "https://bloomingfurniture.co.za/custom-furniture-paternoster",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-paternoster",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Paternoster",
  "url": "https://bloomingfurniture.co.za/custom-furniture-paternoster",
  "telephone": "(079) 375 2588",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paternoster",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.8086,
    "longitude": 17.8894
  }
};

export default function CustomFurniturePaternoster() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Custom Furniture', href: '/custom-furniture' }, { label: 'Paternoster', href: '/custom-furniture-paternoster' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Furniture Makers in <span className="text-golden-center">Paternoster</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Paternoster's charming fishing village aesthetic deserves furniture that matches. We create coastal-chic custom pieces that complement whitewashed cottages and capture the relaxed West Coast vibe. Handcrafted for Paternoster living.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Design Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Our Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Paternoster Residents Choose Custom Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Home className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal-Chic Aesthetic</h3>
                <p className="text-forest-green">Furniture designed to match Paternoster's unique whitewashed fishing village charm. Relaxed, elegant, and authentic.</p>
              </div>
              <div className="text-center">
                <Palette className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Beach House Finishes</h3>
                <p className="text-forest-green">Weathered whites, soft blues, and natural wood tones that perfectly suit Paternoster's coastal cottages.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Salt-Resistant</h3>
                <p className="text-forest-green">Built to withstand Paternoster's exposed coastal position with special marine-grade treatments.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Popular Custom Furniture for Paternoster Cottages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Coastal Dining Tables", desc: "Weathered-finish tables perfect for Paternoster beach houses. Light, airy designs in whites and natural wood.", price: "R5,500 - R17,000" },
                { title: "Whitewashed Storage", desc: "Beach-style storage solutions. Perfect for keeping sandy floors clean and maintaining that cottage aesthetic.", price: "R4,000 - R14,000" },
                { title: "Coastal Bedroom Sets", desc: "Relaxed, elegant bedroom furniture in coastal finishes. Platform beds, nightstands, and dressers.", price: "R7,500 - R23,000" },
                { title: "Outdoor Benches", desc: "Weather-resistant seating for enjoying Paternoster's stunning sunsets. Built for coastal exposure.", price: "R3,500 - R9,000" }
              ].map((item, i) => (
                <div key={i} className="bg-white-daisy rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-dark-wood mb-4">{item.title}</h3>
                  <p className="text-forest-green mb-4">{item.desc}</p>
                  <p className="text-sm text-dark-wood font-semibold">Average cost: {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Furniture in Paternoster?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Coastal-chic furniture crafted for Paternoster's unique charm. Free consultation and delivery to your cottage.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Your Free Design Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection Fee: R350-R600 return • Free delivery on orders over R5,000</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Paternoster</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/furniture-repair-paternoster" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore cottage furniture</p>
              </Link>
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Weatherproof your furniture</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">View all offerings</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
