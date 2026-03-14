import { Metadata } from 'next';
import Link from 'next/link';
import { Layers, CheckCircle, Phone, Mail, Clock, Shield, AlertTriangle, Droplet } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Peeling Furniture Finish Repair | Professional Refinishing West Coast",
  description: "Expert peeling furniture finish repair on the West Coast. Fix bubbling, flaking, and peeling finishes. Professional refinishing for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "peeling furniture finish, bubbling finish repair, flaking furniture, refinishing, finish restoration, West Coast furniture repair, varnish peeling",
  openGraph: {
    title: "Peeling Furniture Finish Repair | Blooming Furniture West Coast",
    description: "Professional finish repair and refinishing. Fix peeling, bubbling, and flaking furniture finishes expertly.",
    url: "https://bloomingfurniture.co.za/peeling-furniture-finish-repair",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/peeling-furniture-finish-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can peeling furniture finish be repaired?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Peeling finish requires complete removal and refinishing for lasting results. We strip old finish, prepare wood properly, and apply new protective coatings. Attempting to patch over peeling finish never works - proper stripping and refinishing is the only permanent solution."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture finish repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Finish repair costs R2,500-R12,000 depending on piece size and complexity. Small items (chairs, side tables): R2,500-R4,500. Medium furniture (dining tables, dressers): R4,500-R8,000. Large pieces (bedroom sets, dining sets): R8,000-R12,000. Includes complete strip and refinish."
      }
    }
  ]
};

export default function PeelingFurnitureFinishRepair() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Finish Peeling Repair', href: '/peeling-furniture-finish-repair' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-10 w-10 text-golden-center" />
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">REFINISHING EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Peeling Furniture Finish Repair & Professional Refinishing</h1>
              <p className="text-xl mb-6 leading-relaxed">Peeling, bubbling, or flaking finish ruins furniture appearance and leaves wood unprotected. We specialize in complete finish restoration - stripping failed coatings and applying durable new finishes. Professional refinishing makes furniture look brand new. Expert service across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Signs Your Finish is Failing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Peeling & Flaking", desc: "Finish lifting away from wood in sheets or flakes", urgency: "High" },
                { title: "Bubbling", desc: "Air pockets forming under finish surface, creating bubbles", urgency: "High" },
                { title: "Alligatoring", desc: "Finish cracking in pattern resembling alligator skin", urgency: "Moderate" },
                { title: "Cloudy or Milky", desc: "Finish has white, cloudy, or hazy appearance", urgency: "Moderate" },
                { title: "Sticky or Tacky", desc: "Finish never fully dries, remains sticky to touch", urgency: "High" },
                { title: "Crazing", desc: "Fine cracks covering finish surface like spider web", urgency: "Moderate" },
                { title: "Checking", desc: "Small cracks in finish following wood grain", urgency: "Moderate" },
                { title: "Complete Failure", desc: "Large areas of bare wood exposed, finish gone", urgency: "Critical" }
              ].map((sign, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-forest-green">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{sign.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{sign.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    sign.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    sign.urgency === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>{sign.urgency} Urgency</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Furniture Finish Peels on the West Coast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Droplet className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Moisture Issues</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Coastal humidity penetrates finish</li>
                  <li>• Moisture trapped between wood and finish</li>
                  <li>• Finish adhesion breaks down</li>
                  <li>• Bubbling from water vapor pressure</li>
                  <li>• Seasonal humidity cycles accelerate failure</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <AlertTriangle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Poor Application</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Wrong finish type for wood or conditions</li>
                  <li>• Insufficient surface preparation</li>
                  <li>• Applied over contaminated surface</li>
                  <li>• Incompatible finish layers</li>
                  <li>• DIY application mistakes</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Layers className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Age & UV Damage</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Old finishes break down naturally</li>
                  <li>• UV exposure degrades finish</li>
                  <li>• Loss of plasticizers over time</li>
                  <li>• Oxidation and chemical breakdown</li>
                  <li>• Finish becomes brittle and cracks</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">No Shortcuts - Complete Refinishing Required</h4>
                  <p className="text-yellow-800 text-sm">You cannot successfully patch or touch-up peeling finish. The only permanent solution is complete removal and refinishing. Attempting shortcuts wastes time and money. Professional stripping and refinishing ensures lasting beauty and protection.</p>
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
                { step: "1", title: "Finish Assessment", desc: "Identify finish type, wood species, and failure cause. Determine best stripping method and new finish.", time: "1 hour" },
                { step: "2", title: "Complete Stripping", desc: "Remove all old finish using appropriate chemical or heat methods. Get down to bare wood completely.", time: "1-3 days" },
                { step: "3", title: "Deep Cleaning", desc: "Remove all stripper residue, wax, oils, and contaminants. Ensure perfectly clean surface for new finish.", time: "1 day" },
                { step: "4", title: "Wood Repair", desc: "Fix any damage exposed during stripping. Fill scratches, cracks, or dents revealed by finish removal.", time: "1-2 days" },
                { step: "5", title: "Sanding Progression", desc: "Sand through grits from coarse to fine. Create perfectly smooth, uniform surface for finish acceptance.", time: "2-4 days" },
                { step: "6", title: "Staining (if needed)", desc: "Apply color to match original or create new look. Ensure even penetration and proper drying.", time: "1-2 days" },
                { step: "7", title: "Finish Application", desc: "Apply multiple coats of high-quality finish. Build proper protection with adequate film thickness.", time: "4-7 days" },
                { step: "8", title: "Curing & Final Buffing", desc: "Allow proper cure time. Final polish to desired sheen. Furniture is fully protected and beautiful.", time: "3-7 days" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Refinishing Time:</strong> 3-5 weeks depending on piece complexity</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R2,500 - R12,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Future Finish Failure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Quality Finishes", tips: ["Use marine-grade finishes for coastal areas", "Apply adequate number of coats", "Allow proper drying between coats", "Choose finish appropriate for use"] },
                { icon: Droplet, title: "Moisture Control", tips: ["Maintain consistent humidity", "Use dehumidifiers in humid months", "Keep furniture away from moisture sources", "Seal wood properly before finishing"] },
                { icon: CheckCircle, title: "Proper Maintenance", tips: ["Clean with appropriate products", "Avoid harsh chemicals", "Apply furniture wax seasonally", "Address damage promptly"] },
                { icon: Clock, title: "Regular Inspection", tips: ["Check finish condition annually", "Look for early signs of failure", "Professional assessment every 3-5 years", "Recoat before complete failure"] },
                { icon: Layers, title: "Environmental Protection", tips: ["Keep away from direct sunlight", "Avoid temperature extremes", "Don't place near heaters or AC", "Use window treatments for UV protection"] },
                { icon: AlertTriangle, title: "Early Intervention", tips: ["Address small issues immediately", "Don't wait for widespread peeling", "Spot repairs prevent full refinish", "Professional touch-ups extend finish life"] }
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

        {/* Related Services */}
        <section className="py-12 bg-white-daisy">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-dark-wood mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/furniture-refinishing" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold text-forest-green">Furniture Refinishing</h3>
                <p className="text-sm text-dark-wood mt-1">Custom stains, paints, and coastal-resistant finishes</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Layers className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Restore Beautiful, Lasting Protection</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let peeling finish ruin furniture. Our expert refinishing makes pieces beautiful and fully protected for years.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Finish Repair Assessment</Link>
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
              <Link href="/furniture-refinishing-faded-wood" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Faded Wood Refinishing</h4>
                <p className="text-sm text-dark-wood">Color restoration</p>
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
