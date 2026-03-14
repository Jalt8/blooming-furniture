import { Metadata } from 'next';
import Link from 'next/link';
import { Sun, CheckCircle, Phone, Mail, Clock, Shield, Droplet, AlertTriangle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Sun Faded Furniture Restoration | UV Damage Repair West Coast",
  description: "Expert sun fade furniture restoration on the West Coast. Fix UV damage, restore color, and protect against fading. Professional refinishing for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "sun faded furniture restoration, UV damage repair, furniture color restoration, sun bleached wood, faded furniture repair, West Coast furniture restoration, coastal sun damage",
  openGraph: {
    title: "Sun Faded Furniture Restoration | Blooming Furniture West Coast",
    description: "Professional UV damage repair and color restoration. Fix sun-faded furniture with expert refinishing and UV protection.",
    url: "https://bloomingfurniture.co.za/sun-faded-furniture-restoration",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/sun-faded-furniture-restoration",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can sun-faded furniture be restored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Sun-faded furniture can be completely restored. We remove damaged finish, restore wood color through specialized techniques, and apply UV-blocking protective coatings. Most pieces return to their original beauty or better, with added protection against future fading."
      }
    },
    {
      "@type": "Question",
      "name": "How much does sun fade furniture restoration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sun fade restoration costs R2,000-R9,000 depending on severity. Light fading (surface only): R2,000-R4,500. Moderate fading with color loss: R4,500-R7,000. Severe bleaching requiring color restoration: R7,000-R9,000. Includes UV protection coating."
      }
    }
  ]
};

export default function SunFadedFurnitureRestoration() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Sun Fade Restoration', href: '/sun-faded-furniture-restoration' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="h-10 w-10 text-golden-center" />
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">UV DAMAGE EXPERTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sun Faded Furniture Restoration & UV Damage Repair</h1>
              <p className="text-xl mb-6 leading-relaxed">West Coast sunshine is relentless. Furniture near windows and outdoor pieces fade, bleach, and lose their beauty. We specialize in reversing UV damage - restoring color, refinishing surfaces, and applying UV-blocking protection. Expert restoration across Langebaan, Saldanha Bay, Paternoster, and all coastal areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Signs Your Furniture Has Sun Damage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Faded Color", desc: "Original wood color has lightened, especially on surfaces facing windows", severity: "Moderate" },
                { title: "Bleached Patches", desc: "White or very light areas where sunlight hits directly", severity: "High" },
                { title: "Uneven Tone", desc: "Some areas darker than others, creating blotchy appearance", severity: "Moderate" },
                { title: "Dried Out Finish", desc: "Surface feels rough, chalky, or powdery to touch", severity: "High" },
                { title: "Cracked or Peeling", desc: "Finish breaking down from UV exposure", severity: "High" },
                { title: "Lost Luster", desc: "Dull appearance, no longer reflects light properly", severity: "Moderate" },
                { title: "Color Shift", desc: "Wood has changed to completely different color (yellowing, graying)", severity: "High" },
                { title: "Wood Fiber Damage", desc: "Surface feels soft or fuzzy from UV degradation", severity: "Critical" }
              ].map((sign, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-forest-green">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{sign.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{sign.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    sign.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                    sign.severity === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>{sign.severity} Damage</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why West Coast Furniture Fades Faster</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Sun className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Intense UV Exposure</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Year-round strong sunshine</li>
                  <li>• Less atmospheric protection near coast</li>
                  <li>• Reflected UV from ocean surfaces</li>
                  <li>• Long summer daylight hours</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Droplet className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Humidity Amplification</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Moisture accelerates UV damage</li>
                  <li>• Coastal humidity levels</li>
                  <li>• Temperature fluctuations</li>
                  <li>• Combined sun and salt effects</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <AlertTriangle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Unprotected Finishes</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Most standard finishes lack UV blockers</li>
                  <li>• Older furniture never had protection</li>
                  <li>• Outdoor furniture without marine finishes</li>
                  <li>• Windows magnify UV intensity</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">West Coast Sun Damage Specialists</h4>
                  <p className="text-blue-800 text-sm">We understand exactly how West Coast sunlight affects furniture. Our restoration techniques and UV-blocking finishes are specifically designed for this intense coastal environment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Sun Fade Restoration Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Damage Assessment", desc: "Evaluate depth of UV damage, test wood response, determine best restoration approach. Check for structural issues.", time: "1 day" },
                { step: "2", title: "Finish Removal", desc: "Strip damaged finish completely. Remove oxidized layers to reveal fresh wood beneath.", time: "2-3 days" },
                { step: "3", title: "Color Restoration", desc: "Apply specialized wood bleaching or staining to restore even color. Custom color matching when needed.", time: "2-4 days" },
                { step: "4", title: "Surface Preparation", desc: "Sand to perfect smoothness. Ensure even absorption of new finish. Repair any fiber damage.", time: "2-3 days" },
                { step: "5", title: "UV-Blocking Finish Application", desc: "Apply multiple layers of UV-blocking sealer and finish. Create protective barrier against future fading.", time: "4-6 days" },
                { step: "6", title: "Final Protection & Placement Advice", desc: "Final protective coating. Provide guidance on furniture placement and window treatments to prevent future damage.", time: "1 day" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Restoration Time:</strong> 2-3 weeks depending on damage severity</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R2,000 - R9,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Future Sun Damage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "UV-Blocking Finishes", tips: ["Apply UV-resistant top coats", "Reapply protection every 2-3 years", "Use marine-grade outdoor finishes"] },
                { icon: Sun, title: "Smart Placement", tips: ["Avoid direct sunlight when possible", "Rotate furniture periodically", "Use furniture away from west-facing windows"] },
                { icon: CheckCircle, title: "Window Treatments", tips: ["Install UV-blocking window film", "Use curtains during peak sun hours", "Consider tinted glass for rooms with valuable furniture"] },
                { icon: Clock, title: "Regular Maintenance", tips: ["Apply furniture oil quarterly", "Clean and inspect monthly", "Professional assessment every 2 years"] },
                { icon: Droplet, title: "Moisture Control", tips: ["Maintain consistent humidity", "Avoid combining sun + damp conditions", "Use dehumidifiers in humid months"] },
                { icon: AlertTriangle, title: "Early Intervention", tips: ["Address fading immediately", "Don't wait for severe bleaching", "Regular UV protection reapplication"] }
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
            <Sun className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Restore Your Sun-Damaged Furniture to Its Former Glory</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let West Coast sunshine ruin your furniture. Our expert restoration and UV protection keeps pieces beautiful for years.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Sun Damage Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Furniture Restoration Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/water-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Water Damage Repair</h4>
                <p className="text-sm text-dark-wood">Fix moisture damage</p>
              </Link>
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">Coastal corrosion fixes</p>
              </Link>
              <Link href="/scratched-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Scratch Repair</h4>
                <p className="text-sm text-dark-wood">Remove scratches & marks</p>
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
