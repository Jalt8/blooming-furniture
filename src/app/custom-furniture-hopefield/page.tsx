import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Ruler, Star, Hammer, Wheat } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Hopefield | Heirloom Quality Bespoke Furniture",
  description: "Professional custom furniture design in Hopefield. Handcrafted heirloom-quality pieces for West Coast farming heritage. Free consultation for Hopefield residents.",
  keywords: "custom furniture Hopefield, bespoke furniture Hopefield, heirloom furniture, farmhouse furniture Hopefield, antique style furniture, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Hopefield | Blooming Furniture",
    description: "Heirloom-quality custom furniture for Hopefield. Honoring farming heritage with handcrafted pieces built to last generations.",
    url: "https://bloomingfurniture.co.za/custom-furniture-hopefield",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-hopefield",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Hopefield",
  "url": "https://bloomingfurniture.co.za/custom-furniture-hopefield",
  "telephone": "+27793752588",
  "address": { "@type": "PostalAddress", "addressLocality": "Hopefield", "addressRegion": "Western Cape", "addressCountry": "ZA" },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.0667, "longitude": 18.3500 }
};

export default function CustomFurnitureHopefield() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Custom Furniture', href: '/custom-furniture' }, { label: 'Hopefield', href: '/custom-furniture-hopefield' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Furniture Makers in <span className="text-golden-center">Hopefield</span></h1>
              <p className="text-xl mb-6 leading-relaxed">Hopefield's rural farming heritage means families treasure furniture that lasts. We create heirloom-quality custom pieces using traditional techniques - furniture your grandchildren will cherish.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Design Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Hopefield Residents Choose Custom Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Wheat className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Farming Heritage</h3>
                <p className="text-forest-green">We honor Hopefield's agricultural traditions with furniture built to last for generations.</p>
              </div>
              <div className="text-center">
                <Ruler className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Traditional Craftsmanship</h3>
                <p className="text-forest-green">Time-honored techniques create furniture with authentic character and superior quality.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Heirloom Quality</h3>
                <p className="text-forest-green">Investment pieces designed to become treasured family heirlooms.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Custom Furniture for Hopefield Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Farmhouse Dining Tables", desc: "Solid, substantial tables for family gatherings. Built with traditional joinery to last generations.", price: "R7,000 - R22,000" },
                { title: "Heirloom Cabinets", desc: "Display cabinets and china hutches worthy of passing down. Crafted with attention to detail.", price: "R8,500 - R26,000" },
                { title: "Traditional Bedroom Sets", desc: "Classic bedroom furniture with timeless appeal. Quality construction in traditional styles.", price: "R9,000 - R28,000" },
                { title: "Custom Storage Chests", desc: "Blanket chests and storage trunks built to last. Perfect for preserving family treasures.", price: "R4,500 - R14,000" }
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
            <h2 className="text-3xl font-bold mb-6">Ready for Heirloom-Quality Custom Furniture in Hopefield?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Furniture crafted to honor Hopefield's heritage and last for generations.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection Fee: R400-R700 • Free delivery over R5,000</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Hopefield</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/furniture-restoration-hopefield" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore family heirlooms</p>
              </Link>
              <Link href="/antique-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Preserve antiques</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">View all services</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
