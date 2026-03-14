import { Metadata } from 'next';
import Link from 'next/link';
import { Paintbrush, CheckCircle, Phone, Mail, Clock, Shield, Sun, Droplet } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Furniture Refinishing Faded Wood | Color Restoration West Coast",
  description: "Expert furniture refinishing for faded wood on the West Coast. Restore color, beauty, and protection. Professional wood refinishing for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "furniture refinishing, faded wood restoration, wood color restoration, refinishing services, wood refinishing, West Coast furniture refinishing, restore wood color",
  openGraph: {
    title: "Furniture Refinishing Faded Wood | Blooming Furniture West Coast",
    description: "Professional wood refinishing and color restoration. Bring faded furniture back to life with expert refinishing.",
    url: "https://bloomingfurniture.co.za/furniture-refinishing-faded-wood",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-refinishing-faded-wood",
  },
};

export default function FurnitureRefinishingFadedWood() {
  return (
    <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Wood Refinishing', href: '/furniture-refinishing-faded-wood' }]} className="max-w-7xl mx-auto" />
      <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Paintbrush className="h-10 w-10 text-golden-center" />
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">REFINISHING EXPERTS</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Furniture Refinishing for Faded Wood</h1>
            <p className="text-xl mb-6 leading-relaxed">Expert refinishing services to restore faded wood furniture across the West Coast.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
              <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white-daisy">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-dark-wood mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/furniture-refinishing" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-forest-green">Furniture Refinishing</h3>
              <p className="text-sm text-dark-wood mt-1">Custom stains, paints, and coastal-resistant finishes</p>
            </Link>
            <Link href="/sun-faded-furniture-restoration" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-forest-green">Sun Faded Furniture Restoration</h3>
              <p className="text-sm text-dark-wood mt-1">Reverse UV damage and restore original color and beauty</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
