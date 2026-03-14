import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, CheckCircle, Phone, Mail, Clock, Shield, Droplet, Wind, Waves } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Salt Damaged Furniture Repair | Coastal Restoration Specialists",
  description: "Expert salt damage furniture repair on the West Coast. Fix corrosion, white deposits, and coastal damage. Marine-grade restoration for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "salt damaged furniture repair, coastal furniture damage, salt air corrosion, salt deposit removal, marine furniture repair, West Coast furniture repair, coastal restoration",
  openGraph: {
    title: "Salt Damaged Furniture Repair | Blooming Furniture West Coast",
    description: "Professional coastal furniture restoration. Fix salt damage, corrosion, and white deposits. Expert marine environment repairs.",
    url: "https://bloomingfurniture.co.za/salt-damaged-furniture-repair",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/salt-damaged-furniture-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can salt-damaged furniture be repaired?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most salt-damaged furniture can be fully restored. We remove salt deposits, treat corrosion, refinish surfaces, and apply marine-grade protective coatings. Early treatment prevents permanent damage and extends furniture life significantly."
      }
    },
    {
      "@type": "Question",
      "name": "How much does salt damage furniture repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt damage repair costs R1,500-R8,000 depending on severity. Light surface damage: R1,500-R3,500. Moderate corrosion and refinishing: R3,500-R6,000. Severe damage with structural repairs: R6,000-R8,000. Free assessment included."
      }
    }
  ]
};

export default function SaltDamagedFurnitureRepair() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Salt Damage Repair', href: '/salt-damaged-furniture-repair' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="h-10 w-10 text-golden-center" />
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">COASTAL SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Salt Damaged Furniture Repair & Coastal Restoration</h1>
              <p className="text-xl mb-6 leading-relaxed">Living on the West Coast takes a toll on furniture. Salt air causes white deposits, metal corrosion, and finish deterioration. We specialize in reversing coastal damage and applying marine-grade protection. Expert restoration across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Signs of Salt Damage on Your Furniture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "White Crystalline Deposits", desc: "Salt crystals forming on wood surfaces, especially in crevices and joints", urgency: "High" },
                { title: "Corroded Metal Hardware", desc: "Rust or green corrosion on hinges, handles, nails, and screws", urgency: "High" },
                { title: "Cracking or Bubbling Finish", desc: "Protective coating breaking down from salt penetration", urgency: "Moderate" },
                { title: "Discoloration & Staining", desc: "Dark patches or whitish areas where salt has penetrated wood", urgency: "Moderate" },
                { title: "Weakened Wood Structure", desc: "Wood becoming soft or crumbly from prolonged salt exposure", urgency: "Critical" },
                { title: "Sticky or Tacky Surfaces", desc: "Finish feeling rough or attracting moisture from salt", urgency: "Moderate" },
                { title: "Accelerated Aging", desc: "Furniture aging faster than expected in coastal environment", urgency: "Moderate" },
                { title: "Joint Separation", desc: "Glue failing faster due to moisture from hygroscopic salt", urgency: "High" }
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
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why West Coast Furniture Needs Special Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Droplet className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Salt Air Exposure</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Direct salt spray near beaches</li>
                  <li>• Airborne salt particles inland</li>
                  <li>• Humidity carrying salt moisture</li>
                  <li>• Windows open to ocean breezes</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Wind className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Hygroscopic Effect</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Salt attracts and holds moisture</li>
                  <li>• Creates perpetual dampness</li>
                  <li>• Accelerates wood deterioration</li>
                  <li>• Promotes corrosion of metal parts</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Waves className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Coastal Wind & Sand</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Strong winds drive salt deeper</li>
                  <li>• Sand abrasion damages finishes</li>
                  <li>• Temperature fluctuations</li>
                  <li>• Exposure in multiple directions</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">West Coast Expertise Matters</h4>
                  <p className="text-blue-800 text-sm">We live and work on the West Coast. We understand exactly how salt affects furniture in Langebaan, Paternoster, Saldanha Bay, and surrounding areas. Our treatments are specifically designed for these challenging coastal conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Salt Damage Repair Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Deep Cleaning & Salt Removal", desc: "Complete removal of salt deposits using specialized cleaning solutions. Neutralize salt to prevent continued damage.", time: "1-2 days" },
                { step: "2", title: "Corrosion Treatment", desc: "Remove rust and corrosion from all metal components. Replace severely damaged hardware with marine-grade alternatives.", time: "2-3 days" },
                { step: "3", title: "Complete Finish Stripping", desc: "Remove compromised finish that's been penetrated by salt. Expose fresh wood for proper treatment.", time: "3-5 days" },
                { step: "4", title: "Wood Treatment & Repair", desc: "Treat wood fibers, repair any structural damage, restore integrity. Fill cracks and reinforce joints if needed.", time: "2-4 days" },
                { step: "5", title: "Marine-Grade Refinishing", desc: "Apply multiple layers of marine-grade sealers and finishes. Create moisture barrier against future salt penetration.", time: "5-7 days" },
                { step: "6", title: "Protection & Maintenance Plan", desc: "Final protective coatings. Provide care instructions and maintenance schedule for coastal conditions.", time: "1 day" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Repair Time:</strong> 2-4 weeks depending on severity</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R1,500 - R8,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Future Salt Damage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Marine-Grade Finishes", tips: ["Apply protective sealers annually", "Use UV-blocking top coats", "Multi-layer protection systems"] },
                { icon: CheckCircle, title: "Regular Cleaning", tips: ["Wipe furniture weekly", "Remove salt buildup promptly", "Use appropriate cleaning products"] },
                { icon: Waves, title: "Strategic Placement", tips: ["Avoid direct salt spray zones", "Keep away from open windows", "Use barriers where possible"] },
                { icon: Wind, title: "Ventilation", tips: ["Prevent moisture buildup", "Allow air circulation", "Dehumidifiers in humid months"] },
                { icon: Clock, title: "Annual Maintenance", tips: ["Professional inspection yearly", "Reapply protective coatings", "Replace hardware as needed"] },
                { icon: Droplet, title: "Immediate Action", tips: ["Address issues quickly", "Don't let salt accumulate", "Early intervention prevents major damage"] }
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
              <Link href="/coastal-furniture-protection" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold text-forest-green">Coastal Furniture Protection</h3>
                <p className="text-sm text-dark-wood mt-1">Marine-grade weatherproofing for West Coast furniture</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Waves className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Protect Your Coastal Furniture Investment</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let salt damage destroy your furniture. Our marine-grade restoration and protection services keep furniture beautiful on the West Coast.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Salt Damage Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Coastal Furniture Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/water-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Water Damage Repair</h4>
                <p className="text-sm text-dark-wood">Fix moisture issues</p>
              </Link>
              <Link href="/sun-faded-furniture-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Sun Fade Restoration</h4>
                <p className="text-sm text-dark-wood">Restore UV damage</p>
              </Link>
              <Link href="/coastal-furniture-protection" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Coastal Protection</h4>
                <p className="text-sm text-dark-wood">Weatherproofing services</p>
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
