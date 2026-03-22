import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Ruler, Palette, Hammer, ShoppingBag } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Custom Furniture Makers Vredenburg | Bespoke Furniture West Coast",
  description: "Professional custom furniture design in Vredenburg. Handcrafted bespoke pieces for the commercial heart of West Coast. Free consultation for Vredenburg residents.",
  keywords: "custom furniture Vredenburg, bespoke furniture Vredenburg, furniture makers Vredenburg, handcrafted furniture Vredenburg, custom dining tables Vredenburg, West Coast custom furniture",
  openGraph: {
    title: "Custom Furniture Makers in Vredenburg | Blooming Furniture",
    description: "Transform your Vredenburg home with handcrafted custom furniture. Quality pieces for West Coast's commercial hub.",
    url: "https://bloomingfurniture.co.za/custom-furniture-vredenburg",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/custom-furniture-vredenburg",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Custom Furniture Vredenburg",
  "url": "https://bloomingfurniture.co.za/custom-furniture-vredenburg",
  "telephone": "+27793752588",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vredenburg",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.9087,
    "longitude": 17.9896
  }
};

export default function CustomFurnitureVredenburg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Custom Furniture', href: '/custom-furniture' }, { label: 'Vredenburg', href: '/custom-furniture-vredenburg' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Furniture Makers in <span className="text-golden-center">Vredenburg</span></h1>
              <p className="text-xl mb-6 leading-relaxed">As the commercial heart of the West Coast, Vredenburg residents value quality and practicality. We create custom furniture that combines both - handcrafted pieces that work hard and look beautiful in your home.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Free Design Consultation</Link>
                <Link href="/portfolio" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">View Our Portfolio</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Vredenburg Residents Choose Custom Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ShoppingBag className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Quality & Value</h3>
                <p className="text-forest-green">Vredenburg appreciates quality. Our furniture offers better value than mass-produced pieces, built to last for generations.</p>
              </div>
              <div className="text-center">
                <Ruler className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Perfect Fit</h3>
                <p className="text-forest-green">Custom sizing means furniture that fits your exact space requirements, maximizing functionality in every room.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-wood mb-2">Local Service</h3>
                <p className="text-forest-green">Quick delivery to Vredenburg, personalized service, and support from a local West Coast business.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Popular Custom Furniture for Vredenburg Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Custom Dining Tables", desc: "Family-sized tables perfect for Vredenburg homes. Extendable options, durable finishes, and styles from traditional to modern.", price: "R6,000 - R19,000" },
                { title: "Built-in Wardrobes", desc: "Maximize bedroom space with custom wardrobes. Designed for your exact dimensions and storage needs.", price: "R8,000 - R24,000" },
                { title: "Home Office Furniture", desc: "Productive workspace solutions for Vredenburg's growing professional community. Desks, shelving, and storage.", price: "R5,500 - R18,000" },
                { title: "Living Room Units", desc: "TV stands, bookcases, and display cabinets crafted to complement your Vredenburg home's style.", price: "R4,500 - R16,000" }
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
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Custom Furniture in Vredenburg?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Quality custom furniture designed for Vredenburg homes. Free consultation and competitive pricing.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Your Free Design Consultation</Link>
            <p className="text-sm mt-6 opacity-90">Collection Fee: R300-R500 return • Free delivery on orders over R5,000</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">More Services in Vredenburg</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/furniture-restoration-vredenburg" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Hammer className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Furniture Restoration</h4>
                <p className="text-sm text-dark-wood">Restore existing furniture in Vredenburg</p>
              </Link>
              <Link href="/antique-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <Star className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Preserve family heirlooms</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-forest-green mx-auto mb-3" />
                <h4 className="font-semibold text-forest-green mb-2">All Services</h4>
                <p className="text-sm text-dark-wood">View complete offerings</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
