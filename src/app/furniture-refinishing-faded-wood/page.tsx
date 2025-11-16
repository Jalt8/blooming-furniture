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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can faded wood furniture be refinished?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Faded wood can be beautifully refinished. We strip old finish, restore wood color through staining or bleaching, and apply fresh protective finishes. Most faded furniture can look brand new or even better than original. Professional refinishing brings lasting results."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture refinishing cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture refinishing costs R2,800-R14,000 depending on piece size and complexity. Small items (chairs, side tables): R2,800-R5,500. Medium furniture (dining tables, dressers): R5,500-R9,500. Large or intricate pieces: R9,500-R14,000. Includes complete strip, color restoration, and protective finishing."
      }
    }
  ]
};

export default function FurnitureRefinishingFadedWood() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Wood Refinishing', href: '/furniture-refinishing-faded-wood' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Paintbrush className="h-10 w-10 text-golden-center" />
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">REFINISHING EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Furniture Refinishing for Faded Wood - Complete Color Restoration</h1>
              <p className="text-xl mb-6 leading-relaxed">Faded, dull furniture loses its character and beauty. Whether from age, sunlight, or wear, we restore wood to vibrant life. Complete refinishing brings back rich color, smooth finish, and lasting protection. Transform tired furniture into stunning centerpieces. Expert refinishing across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Signs Your Furniture Needs Refinishing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Color Loss", desc: "Wood has lost its rich, original color and looks washed out or pale", priority: "High" },
                { title: "Dull Finish", desc: "Surface lacks luster, looks flat, no longer reflects light beautifully", priority: "Moderate" },
                { title: "Uneven Tone", desc: "Blotchy appearance with some areas darker or lighter than others", priority: "Moderate" },
                { title: "Surface Damage", desc: "Scratches, water rings, or worn areas show through finish", priority: "High" },
                { title: "Failed Finish", desc: "Finish is peeling, cracking, or has completely worn away", priority: "Critical" },
                { title: "Outdated Look", desc: "Color or finish style doesn't match current décor or preferences", priority: "Moderate" },
                { title: "Sun Bleaching", desc: "Areas exposed to sunlight have turned white or very light", priority: "High" },
                { title: "Age & Wear", desc: "Years of use have taken toll - furniture looks tired and aged", priority: "Moderate" }
              ].map((sign, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-golden-center">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{sign.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{sign.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    sign.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                    sign.priority === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>{sign.priority} Priority</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Refinishing Transformations We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Paintbrush className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Color Restoration</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Restore original wood color and depth</li>
                  <li>• Custom color matching for exact tones</li>
                  <li>• Enhance natural wood grain beauty</li>
                  <li>• Fix uneven or blotchy coloring</li>
                  <li>• Transform to new color if desired</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Shield className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Finish Renewal</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Remove old, damaged finish completely</li>
                  <li>• Apply modern, durable protective coatings</li>
                  <li>• Choose from matte, satin, or gloss</li>
                  <li>• UV-blocking finishes for coastal areas</li>
                  <li>• Marine-grade options available</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Sun className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Surface Perfection</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Sand to glass-smooth perfection</li>
                  <li>• Remove scratches and water marks</li>
                  <li>• Fix dents and surface imperfections</li>
                  <li>• Create uniform, flawless surface</li>
                  <li>• Restore crisp edges and details</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <CheckCircle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Complete Transformation</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Furniture looks brand new or better</li>
                  <li>• Modernize outdated pieces</li>
                  <li>• Match new décor or style preferences</li>
                  <li>• Extend furniture life by decades</li>
                  <li>• Increase value of quality pieces</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Quality Refinishing Worth More Than New Furniture</h4>
                  <p className="text-green-800 text-sm">Well-made solid wood furniture is worth refinishing. Modern mass-produced furniture can't match the quality, wood species, and construction of older pieces. Professional refinishing costs less than quality new furniture and keeps valuable pieces in your home for generations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Complete Refinishing Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Detailed Assessment", desc: "Evaluate wood type, current finish, damage, and your goals. Determine best approach for stunning results.", time: "1 hour" },
                { step: "2", title: "Complete Stripping", desc: "Remove all old finish using safe, effective methods. Get down to bare wood to start fresh.", time: "2-4 days" },
                { step: "3", title: "Deep Cleaning", desc: "Remove all stripper residue, wax, oils, and contaminants. Ensure perfectly clean base.", time: "1 day" },
                { step: "4", title: "Wood Preparation", desc: "Repair any damage exposed. Fill imperfections. Prepare wood for even stain acceptance.", time: "1-3 days" },
                { step: "5", title: "Progressive Sanding", desc: "Sand through multiple grits to glass-smooth finish. Create perfect surface for stain and finish.", time: "2-5 days" },
                { step: "6", title: "Color Application", desc: "Apply stain, dye, or bleach to achieve desired color. Multiple applications ensure rich, even tone.", time: "2-4 days" },
                { step: "7", title: "Sealing", desc: "Seal wood to lock in color and prepare for finish coats. Ensure even finish acceptance.", time: "1-2 days" },
                { step: "8", title: "Finish Building", desc: "Apply multiple coats of protective finish. Build proper film thickness for durability and beauty.", time: "4-7 days" },
                { step: "9", title:="Curing & Final Polish", desc: "Allow proper cure time. Final rubbing and polishing to desired sheen. Perfection guaranteed.", time: "3-7 days" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-lg">{item.step}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-wood mb-2">{item.title}</h3>
                    <p className="text-forest-green mb-2">{item.desc}</p>
                    <p className="text-sm text-dark-wood font-semibold">⏱️ Timeframe: {item.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-forest-green mb-4"><strong>Total Refinishing Time:</strong> 3-6 weeks depending on piece complexity</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R2,800 - R14,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Maintaining Your Refinished Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Protective Care", tips: ["Use coasters and placemats always", "Apply furniture wax quarterly", "Avoid harsh cleaning chemicals", "Keep finish intact and sealed"] },
                { icon: Droplet, title: "Moisture Management", tips: ["Wipe spills immediately", "Maintain consistent humidity", "Avoid wet cloths on surface", "Use dehumidifiers in coastal areas"] },
                { icon: Sun, title: "UV Protection", tips: ["Keep away from direct sunlight", "Use window treatments", "Rotate furniture periodically", "Prevent fading with UV film"] },
                { icon: CheckCircle, title: "Regular Cleaning", tips: ["Dust with soft, dry cloth", "Clean with pH-neutral products", "Follow wood grain when wiping", "Avoid abrasive materials"] },
                { icon: Clock, title: "Periodic Maintenance", tips: ["Professional assessment every 3-5 years", "Refresh top coat when needed", "Address damage promptly", "Don't let wear accumulate"] },
                { icon: Paintbrush, title: "Long-Term Care", tips: ["Refinished furniture lasts decades with care", "Touch-ups extend life further", "Quality care preserves investment", "Professional maintenance prevents major work"] }
              ].map((item, i) => (
                <div key={i} className="bg-white-daisy rounded-lg p-6 shadow-lg">
                  <item.icon className="h-10 w-10 text-golden-center mb-4" />
                  <h3 className="text-lg font-bold text-dark-wood mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.tips.map((tip, j) => (
                      <li key={j} className="flex items-start text-forest-green text-sm">
                        <CheckCircle className="h-4 w-4 text-golden-center mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Paintbrush className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Transform Faded Furniture into Beautiful Centerpieces</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't replace quality furniture. Our expert refinishing restores beauty, color, and protection for decades of enjoyment.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Refinishing Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Refinishing Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/sun-faded-furniture-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Sun Fade Restoration</h4>
                <p className="text-sm text-dark-wood">Fix UV damage</p>
              </Link>
              <Link href="/peeling-furniture-finish-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Finish Peeling Repair</h4>
                <p className="text-sm text-dark-wood">Fix failing finishes</p>
              </Link>
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Marine-grade finishes</p>
              </Link>
              <Link href="/services" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
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
