import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Paintbrush, Palette, Sparkles, Check, Star, Phone, MessageCircle, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Refinishing Services West Coast | Wood Refinishing Experts',
  description: 'Professional furniture refinishing on the West Coast, SA. Transform old furniture with new stains, paints & finishes. Custom colors, coastal protection. Free quotes available!',
  keywords: 'furniture refinishing, wood refinishing West Coast, furniture staining, chalk paint furniture, furniture makeover, re-finish furniture, Langebaan refinishing, custom furniture colors',
  openGraph: {
    title: 'Furniture Refinishing West Coast | Blooming Furniture',
    description: 'Transform your furniture with professional refinishing. Custom colors, stains, and coastal-resistant finishes.',
    url: 'https://bloomingfurniture.co.za/furniture-refinishing',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/furniture-refinishing',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Furniture Refinishing",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://bloomingfurniture.co.za",
    "name": "Blooming Furniture",
    "telephone": "+27793752588"
  },
  "description": "Professional furniture refinishing services including stripping, sanding, staining, painting, and protective finishing. Custom colors and coastal-resistant treatments available.",
  "offers": {
    "@type": "Offer",
    "priceRange": "$$"
  }
};

const finishOptions = [
  {
    title: "Natural Wood Stains",
    description: "Enhance the natural beauty of wood grain with professional staining",
    icon: Paintbrush,
    colors: ["Light Oak", "Medium Walnut", "Dark Mahogany", "Natural", "Weathered Grey", "Honey Pine"],
    bestFor: "Tables, cabinets, hardwood furniture"
  },
  {
    title: "Chalk Paint Finishes",
    description: "Transform furniture with trendy chalk paint in any color you desire",
    icon: Palette,
    colors: ["Any custom color!", "Distressed finishes", "Two-tone effects", "Vintage looks"],
    bestFor: "Bedroom sets, dressers, vintage pieces"
  },
  {
    title: "High-Gloss Lacquer",
    description: "Modern, durable high-shine finish perfect for contemporary pieces",
    icon: Sparkles,
    colors: ["Piano black", "Pure white", "Custom colors", "Metallics"],
    bestFor: "Modern furniture, cabinets, pianos"
  },
  {
    title: "Coastal Protection",
    description: "Marine-grade finishes designed for West Coast salt air and humidity",
    icon: Shield,
    colors: ["Clear protective", "Tinted options", "UV resistant", "Water repellent"],
    bestFor: "All furniture in coastal areas"
  }
];

const process = [
  {
    step: 1,
    title: "Stripping",
    description: "Carefully remove old finish, paint, or varnish without damaging the wood"
  },
  {
    step: 2,
    title: "Sanding",
    description: "Sand to a smooth finish, starting coarse and progressing to fine grits"
  },
  {
    step: 3,
    title: "Repairs",
    description: "Fill any cracks, gouges, or imperfections before finishing"
  },
  {
    step: 4,
    title: "Stain or Paint",
    description: "Apply your chosen color - stain for natural look or paint for bold transformation"
  },
  {
    step: 5,
    title: "Protective Coats",
    description: "Multiple layers of protective finish for durability and beauty"
  },
  {
    step: 6,
    title: "Final Inspection",
    description: "Quality check and touch-ups to ensure a flawless finish"
  }
];

const sheenLevels = [
  { name: "Matte", description: "No shine, contemporary look", popularity: "Modern styles" },
  { name: "Satin", description: "Soft, low sheen", popularity: "Most popular" },
  { name: "Semi-Gloss", description: "Noticeable shine, easy to clean", popularity: "High-traffic areas" },
  { name: "High-Gloss", description: "Mirror-like finish", popularity: "Statement pieces" }
];

export default function FurnitureRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Paintbrush className="h-10 w-10 text-golden-center" />
                  <span className="text-golden-center font-semibold">Professional Refinishing Services</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Transform Your Furniture with Expert Refinishing
                </h1>
                <p className="text-xl mb-6">
                  Give old furniture new life! From natural wood stains to bold chalk paint makeovers, we'll refinish your pieces to match your vision perfectly.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Unlimited custom color options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Coastal-resistant protective finishes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Expert stripping, sanding & finishing</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold hover:bg-white-daisy transition duration-300"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="https://wa.me/27793752588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Photos
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Lime-Wash3.jpg"
                  alt="Furniture refinishing services - painted furniture"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white-daisy p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <Palette className="h-6 w-6 text-forest-green" />
                    <div>
                      <div className="font-bold text-dark-wood">Any Color</div>
                      <div className="text-sm text-forest-green">You Can Imagine!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Finish Options */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Choose Your Perfect Finish
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              From natural wood beauty to bold painted transformations, we offer every finish option you can imagine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finishOptions.map((option, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <option.icon className="h-12 w-12 text-forest-green flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-dark-wood mb-2">{option.title}</h3>
                      <p className="text-forest-green mb-4">{option.description}</p>
                    </div>
                  </div>

                  <div className="border-t border-golden-center/20 pt-4">
                    <p className="text-sm font-semibold text-dark-wood mb-2">Popular Options:</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {option.colors.map((color, i) => (
                        <span key={i} className="text-xs bg-white-daisy px-3 py-1 rounded-full text-forest-green">
                          {color}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-forest-green">
                      <strong>Best for:</strong> {option.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sheen Levels */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Choose Your Sheen Level
            </h2>
            <p className="text-center text-forest-green mb-12">
              From matte to high-gloss, select the perfect level of shine for your furniture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {sheenLevels.map((sheen, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-3">
                    {idx === 0 && "⚪"}
                    {idx === 1 && "🌙"}
                    {idx === 2 && "✨"}
                    {idx === 3 && "💎"}
                  </div>
                  <h3 className="text-xl font-bold text-dark-wood mb-2">{sheen.name}</h3>
                  <p className="text-sm text-forest-green mb-3">{sheen.description}</p>
                  <div className="text-xs bg-golden-center/20 text-dark-wood px-3 py-1 rounded-full inline-block">
                    {sheen.popularity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Refinishing Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-green text-white-daisy rounded-full flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-wood mb-2">{step.title}</h3>
                      <p className="text-forest-green">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Preview */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              See the Transformation
            </h2>
            <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
              From tired and dated to stunning and modern - refinishing can completely transform your furniture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-4 h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/portfolio/Chest5.jpg"
                    alt="Natural wood stain finish on furniture"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-golden-center mb-2">Natural Stain Finish</h3>
                <p className="text-sm">Brought out the beautiful grain in this wood furniture</p>
              </div>
              <div className="text-center">
                <div className="relative mb-4 h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/portfolio/Lime-Wash5.jpg"
                    alt="Chalk paint lime wash furniture refinishing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-golden-center mb-2">Chalk Paint Makeover</h3>
                <p className="text-sm">Vintage furniture transformed with lime wash chalk paint finish</p>
              </div>
              <div className="text-center">
                <div className="relative mb-4 h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/portfolio/Chest2.jpg"
                    alt="Modern furniture refinishing with smooth finish"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-golden-center mb-2">Modern Smooth Finish</h3>
                <p className="text-sm">Sleek refinish for a contemporary, clean look</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-block bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Choose Blooming Furniture for Refinishing?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Palette className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Unlimited Colors</h3>
                <p className="text-forest-green">Any color you can dream of - we can create it!</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Coastal Protection</h3>
                <p className="text-forest-green">Marine-grade finishes for West Coast climate</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Expert Application</h3>
                <p className="text-forest-green">Smooth, professional finish every time</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Fast Service</h3>
                <p className="text-forest-green">Most projects done in 1-3 weeks</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Paintbrush className="h-16 w-16 text-golden-center mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Furniture?</h2>
            <p className="text-xl mb-8">
              Send us photos and let us know your color vision. We'll provide a detailed quote and color samples!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/27793752588"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Photos
              </a>
              <Link
                href="/contact"
                className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300"
              >
                Request Quote
              </Link>
              <a
                href="tel:+27793752588"
                className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-dark-wood mb-4">
              Serving the West Coast
            </h3>
            <p className="text-forest-green mb-4">
              Langebaan • Saldanha Bay • Vredenburg • Paternoster • Velddrif • Hopefield • Yzerfontein • Elands Bay
            </p>
            <p className="text-sm text-forest-green">
              Free collection & delivery available for projects over R 3,000 in Langebaan area
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
