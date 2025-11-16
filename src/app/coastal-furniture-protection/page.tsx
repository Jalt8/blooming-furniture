import { Metadata } from 'next';
import Link from 'next/link';
import { Waves, CheckCircle, Phone, Mail, Clock, Shield, Sun, Droplet } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Coastal Furniture Protection | Marine-Grade Weatherproofing West Coast",
  description: "Expert coastal furniture protection on the West Coast. Marine-grade finishes against salt, sun, and moisture. Weatherproofing for Langebaan, Saldanha Bay, Paternoster furniture.",
  keywords: "coastal furniture protection, marine grade finish, weatherproofing, salt protection furniture, coastal weatherproofing, West Coast furniture care, beach furniture protection",
  openGraph: {
    title: "Coastal Furniture Protection | Blooming Furniture West Coast",
    description: "Professional marine-grade furniture protection. Defend against salt, UV, and coastal elements with expert weatherproofing.",
    url: "https://bloomingfurniture.co.za/coastal-furniture-protection",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/coastal-furniture-protection",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you protect furniture in coastal areas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coastal furniture protection requires marine-grade finishes, UV blockers, and moisture barriers. We apply multiple protective layers including sealers, UV-resistant top coats, and salt-resistant treatments. Regular maintenance and reapplication every 2-3 years keeps furniture protected on the West Coast."
      }
    },
    {
      "@type": "Question",
      "name": "How much does coastal furniture protection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coastal protection costs R1,800-R8,000 depending on piece size. Small items (chairs, side tables): R1,800-R3,500. Medium furniture (dining tables, dressers): R3,500-R6,000. Large pieces or outdoor furniture: R6,000-R8,000. Includes marine-grade treatment and UV protection."
      }
    }
  ]
};

export default function CoastalFurnitureProtection() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Coastal Protection', href: '/coastal-furniture-protection' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="h-10 w-10 text-golden-center" />
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">MARINE-GRADE SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Coastal Furniture Protection & Marine-Grade Weatherproofing</h1>
              <p className="text-xl mb-6 leading-relaxed">Living on the West Coast means furniture faces relentless salt, sun, and moisture. Standard finishes fail quickly. We specialize in marine-grade protection systems designed for harsh coastal conditions. Keep furniture beautiful for years despite challenging environment. Expert protection across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Coastal Threats to Your Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Salt Air Corrosion", desc: "Airborne salt crystals penetrate finishes, corrode metal, and draw moisture into wood", severity: "Critical" },
                { title: "Direct Salt Spray", desc: "Near-beach furniture hit by spray containing concentrated salt water", severity: "Critical" },
                { title: "Intense UV Exposure", desc: "Year-round strong sunshine fades, cracks, and degrades unprotected finishes", severity: "High" },
                { title: "Humidity Cycles", desc: "Coastal moisture causes wood swelling and finish breakdown", severity: "High" },
                { title: "Sand Abrasion", desc: "Windblown sand acts like sandpaper on furniture surfaces", severity: "Moderate" },
                { title: "Temperature Swings", desc: "Day/night and seasonal temperature changes stress wood and finishes", severity: "Moderate" },
                { title: "Wind Exposure", desc: "Constant coastal winds drive salt deeper into wood grain", severity: "High" },
                { title: "Combined Effects", desc: "Multiple factors working together accelerate deterioration exponentially", severity: "Critical" }
              ].map((threat, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{threat.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{threat.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    threat.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                    threat.severity === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>{threat.severity} Risk</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Marine-Grade Protection System</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Shield className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Multi-Layer Defense</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Deep-penetrating wood sealers</li>
                  <li>• Moisture barrier base coats</li>
                  <li>• UV-blocking middle layers</li>
                  <li>• Sacrificial top coats</li>
                  <li>• 6-8 protective layers total</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Waves className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Salt Resistance</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Marine-grade epoxy sealers</li>
                  <li>• Salt-repellent coatings</li>
                  <li>• Stainless or bronze hardware only</li>
                  <li>• Hygroscopic salt neutralization</li>
                  <li>• Corrosion inhibitors</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Sun className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">UV Protection</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• UV-absorbing additives</li>
                  <li>• Sun-blocking pigments</li>
                  <li>• HALS (light stabilizers)</li>
                  <li>• Prevents fading and cracking</li>
                  <li>• 10+ year UV resistance</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">West Coast-Specific Protection</h4>
                  <p className="text-blue-800 text-sm">We don't use standard furniture finishes. Our marine-grade systems are specifically formulated for West Coast conditions - tested in Langebaan, Paternoster, and Saldanha Bay. Protection that actually works where you live.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Protection Application Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Condition Assessment", desc: "Evaluate current finish and wood condition. Identify existing damage. Determine protection level needed for exposure.", time: "1 hour" },
                { step: "2", title: "Surface Preparation", desc: "Strip old finish if failing. Sand to bare wood. Clean thoroughly. Create perfect base for protection.", time: "2-4 days" },
                { step: "3", title: "Wood Treatment", desc: "Apply deep-penetrating wood preservative. Stabilize wood fibers. Create internal moisture barrier.", time: "1-2 days" },
                { step: "4", title: "Sealer Application", desc: "Multiple coats of marine-grade sealer. Seal wood pores completely. Block moisture penetration.", time: "2-3 days" },
                { step: "5", title: "Build Coat Layers", desc: "Apply UV-blocking intermediate coats. Build protective film thickness. Each layer adds specific protection.", time: "3-5 days" },
                { step: "6", title: "Hardware Protection", desc: "Replace standard hardware with marine-grade components. Apply corrosion inhibitors to metal parts.", time: "1-2 days" },
                { step: "7", title: "Top Coat Application", desc: "Apply sacrificial UV-blocking top coats. Create tough, weather-resistant surface. Ensure even coverage.", time: "2-3 days" },
                { step: "8", title: "Curing & Inspection", desc: "Allow proper cure time for maximum protection. Inspect all surfaces. Provide maintenance instructions.", time: "3-7 days" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Protection Time:</strong> 2-4 weeks depending on piece size</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R1,800 - R8,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Ongoing Coastal Furniture Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Droplet, title: "Regular Cleaning", tips: ["Wipe down weekly with damp cloth", "Remove salt deposits immediately", "Use pH-neutral cleaners only", "Dry thoroughly after cleaning"] },
                { icon: Shield, title: "Protective Maintenance", tips: ["Reapply protective wax quarterly", "Top coat refresh every 2-3 years", "Professional inspection annually", "Address damage promptly"] },
                { icon: Waves, title: "Salt Management", tips: ["Clean after windy/stormy days", "Rinse outdoor furniture monthly", "Don't let salt accumulate", "Neutralize hygroscopic effects"] },
                { icon: Sun, title: "UV Defense", tips: ["Use window treatments", "Rotate furniture periodically", "Avoid prolonged direct sun", "UV top coat renewal every 2 years"] },
                { icon: CheckCircle, title: "Strategic Placement", tips: ["Keep furniture away from windows when possible", "Use barriers for direct spray zones", "Ensure good ventilation", "Avoid ground moisture contact"] },
                { icon: Clock, title: "Seasonal Care", tips: ["Extra protection before winter storms", "Summer UV protection boost", "Spring salt removal treatment", "Autumn moisture barrier check"] }
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
            <Waves className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Protect Your Investment from Coastal Elements</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let salt and sun destroy beautiful furniture. Our marine-grade protection keeps pieces looking new for years on the West Coast.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Protection Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Coastal Protection Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/salt-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Salt Damage Repair</h4>
                <p className="text-sm text-dark-wood">Fix existing salt damage</p>
              </Link>
              <Link href="/sun-faded-furniture-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Sun Fade Restoration</h4>
                <p className="text-sm text-dark-wood">Restore UV damage</p>
              </Link>
              <Link href="/water-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Water Damage Repair</h4>
                <p className="text-sm text-dark-wood">Fix moisture damage</p>
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
