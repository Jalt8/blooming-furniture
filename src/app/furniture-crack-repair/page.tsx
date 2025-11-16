import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, CheckCircle, Phone, Mail, Clock, Shield, AlertTriangle, Droplet } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Furniture Crack Repair | Expert Wood Crack Restoration West Coast",
  description: "Expert furniture crack repair on the West Coast. Fix wood splits, cracks, and splits professionally. Structural crack restoration for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "furniture crack repair, wood crack fix, wood split repair, furniture restoration, crack filling, West Coast furniture repair, wood restoration",
  openGraph: {
    title: "Furniture Crack Repair | Blooming Furniture West Coast",
    description: "Professional wood crack repair and restoration. Fix splits, cracks, and structural damage with expert techniques.",
    url: "https://bloomingfurniture.co.za/furniture-crack-repair",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-crack-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can cracked furniture be repaired?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Wood cracks can be expertly repaired. We use specialized techniques including crack filling, wood stabilization, butterfly joints, and reinforcement. Most cracks can be made structurally sound and nearly invisible. Even severe splits can be restored successfully."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture crack repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crack repair costs R1,500-R8,500 depending on severity. Small surface cracks: R1,500-R3,000. Deep structural cracks: R3,000-R5,500. Severe splits requiring reconstruction: R5,500-R8,500. Multiple cracks on one piece may qualify for package pricing."
      }
    }
  ]
};

export default function FurnitureCrackRepair() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Crack Repair', href: '/furniture-crack-repair' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-10 w-10 text-golden-center" />
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">CRACK SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Furniture Crack Repair & Wood Split Restoration</h1>
              <p className="text-xl mb-6 leading-relaxed">Wood cracks are common but shouldn't be ignored. From hairline surface cracks to structural splits, we specialize in stabilizing and repairing damaged wood. Using traditional and modern techniques, we restore both structural integrity and appearance. Expert crack repair across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Types of Wood Cracks We Repair</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Hairline Cracks", desc: "Thin surface cracks, mostly cosmetic but can worsen", severity: "Moderate", repair: "Stabilize & fill" },
                { title: "Checking (End Grain)", desc: "Multiple small cracks at wood ends from drying", severity: "Moderate", repair: "Seal & stabilize" },
                { title: "Deep Structural Cracks", desc: "Cracks penetrating through wood thickness", severity: "High", repair: "Fill, reinforce, stabilize" },
                { title: "Through Splits", desc: "Complete separation splitting wood into pieces", severity: "Critical", repair: "Reglue, clamp, reinforce" },
                { title: "Radial Cracks", desc: "Cracks radiating from center outward", severity: "High", repair: "Butterfly joints & filling" },
                { title: "Season Checking", desc: "Cracks from humidity changes and wood movement", severity: "Moderate", repair: "Fill & moisture control" }
              ].map((type, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-golden-center">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{type.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{type.desc}</p>
                  <div className="space-y-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      type.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                      type.severity === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>{type.severity} Severity</span>
                    <p className="text-xs text-dark-wood mt-2"><strong>Repair:</strong> {type.repair}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Furniture Cracks on the West Coast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Droplet className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Humidity Fluctuations</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Coastal humidity causes wood to swell</li>
                  <li>• Dry periods cause shrinkage</li>
                  <li>• Constant expansion/contraction cycles</li>
                  <li>• Wood movement creates internal stress</li>
                  <li>• Eventually stress releases as cracks</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <AlertTriangle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Age & Drying</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Old furniture loses moisture over decades</li>
                  <li>• Wood naturally dries and shrinks with age</li>
                  <li>• Antique furniture especially susceptible</li>
                  <li>• Historic pieces may have original cracks</li>
                  <li>• Improper storage accelerates drying</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Zap className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Stress & Impact</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Heavy loads on table surfaces</li>
                  <li>• Sudden impacts or drops</li>
                  <li>• Structural stress from use</li>
                  <li>• Poor construction or weak grain</li>
                  <li>• Existing cracks worsening over time</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Small Cracks Become Big Problems</h4>
                  <p className="text-red-800 text-sm">Cracks expand with every humidity cycle. What starts as a hairline crack can split furniture completely within months. Early repair stabilizes wood and prevents catastrophic failure. Don't wait until it's too late.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Crack Repair Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Crack Assessment", desc: "Determine crack depth, cause, and progression risk. Test wood stability and structural impact.", time: "1 hour" },
                { step: "2", title: "Stabilization", desc: "Stop crack from spreading using clamps and stabilizing techniques. Apply wood hardener if needed.", time: "1-2 days" },
                { step: "3", title: "Crack Cleaning", desc: "Open crack carefully. Remove dirt, debris, and loose fibers. Prepare surfaces for optimal bonding.", time: "2-3 hours" },
                { step: "4", title: "Filling & Reinforcement", desc: "Fill crack with appropriate material (wood filler, epoxy, or wood shims). Add butterfly joints or dowels for structural cracks.", time: "1-3 days" },
                { step: "5", title: "Clamping & Curing", desc: "Apply precise clamping pressure. Allow proper cure time for adhesives. Monitor to prevent new cracks.", time: "2-7 days" },
                { step: "6", title: "Sanding & Leveling", desc: "Sand repair flush with surface. Ensure seamless integration with surrounding wood.", time: "3-4 hours" },
                { step: "7", title: "Color Matching & Refinishing", desc: "Stain to match original wood. Apply protective finish. Make repair nearly invisible.", time: "2-4 days" },
                { step: "8", title: "Prevention Treatment", desc: "Apply moisture barriers. Provide humidity control guidance. Prevent future cracking.", time: "1 day" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Repair Time:</strong> 2-4 weeks depending on crack severity</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R1,500 - R8,500</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Future Cracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Droplet, title: "Humidity Control", tips: ["Maintain 40-60% relative humidity", "Use dehumidifiers in coastal areas", "Avoid placing near AC or heaters", "Monitor humidity year-round"] },
                { icon: Shield, title: "Protective Finishes", tips: ["Keep finish intact and sealed", "Reapply protective coating regularly", "Seal end grain especially well", "Use moisture-resistant finishes"] },
                { icon: CheckCircle, title: "Proper Placement", tips: ["Keep away from direct sunlight", "Avoid extreme temperature areas", "Don't place against exterior walls", "Ensure adequate air circulation"] },
                { icon: Clock, title: "Regular Maintenance", tips: ["Apply furniture oil quarterly", "Inspect for early crack signs", "Address small cracks immediately", "Professional assessment annually"] },
                { icon: AlertTriangle, title: "Careful Handling", tips: ["Don't overload surfaces", "Avoid dropping heavy objects", "Use protective pads and coasters", "Move furniture carefully"] },
                { icon: Zap, title: "Early Intervention", tips: ["Stabilize cracks as soon as noticed", "Don't let small cracks expand", "Professional repair prevents splitting", "Act before structural damage occurs"] }
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
            <Zap className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Repair Cracks Before They Destroy Your Furniture</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let cracks ruin valuable furniture. Our expert repair stabilizes damage and prevents future splitting.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Crack Repair Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Structural Repair Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Joint Repair</h4>
                <p className="text-sm text-dark-wood">Fix broken joints</p>
              </Link>
              <Link href="/water-damaged-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Water Damage</h4>
                <p className="text-sm text-dark-wood">Moisture damage repair</p>
              </Link>
              <Link href="/antique-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Restore antiques</p>
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
