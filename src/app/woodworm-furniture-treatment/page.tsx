import { Metadata } from 'next';
import Link from 'next/link';
import { Bug, CheckCircle, Phone, Mail, Clock, Shield, AlertTriangle, Zap, Droplet } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Woodworm Furniture Treatment | Expert Pest Removal West Coast",
  description: "Expert woodworm furniture treatment on the West Coast. Eliminate wood-boring beetles and larvae. Professional pest treatment and wood restoration for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "woodworm treatment, furniture beetle removal, wood boring insects, pest treatment furniture, woodworm repair, West Coast pest control, furniture infestation",
  openGraph: {
    title: "Woodworm Furniture Treatment | Blooming Furniture West Coast",
    description: "Professional woodworm treatment and furniture restoration. Eliminate pests and repair damage expertly.",
    url: "https://bloomingfurniture.co.za/woodworm-furniture-treatment",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/woodworm-furniture-treatment",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can furniture with woodworm be saved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most woodworm-infested furniture can be saved. We treat active infestations with professional insecticides, repair damaged wood, and apply preventive treatments. Early treatment is crucial - severe infestations can compromise structural integrity. Success rate is very high when caught early."
      }
    },
    {
      "@type": "Question",
      "name": "How much does woodworm furniture treatment cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Woodworm treatment costs R2,000-R9,000 depending on infestation severity. Light infestation (treatment only): R2,000-R3,500. Moderate with wood repair: R3,500-R6,000. Severe with structural restoration: R6,000-R9,000. Includes professional treatment and prevention."
      }
    }
  ]
};

export default function WoodwormFurnitureTreatment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Woodworm Treatment', href: '/woodworm-furniture-treatment' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Bug className="h-10 w-10 text-golden-center" />
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">PEST TREATMENT SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Woodworm Furniture Treatment & Wood Boring Insect Removal</h1>
              <p className="text-xl mb-6 leading-relaxed">Woodworm destroys furniture from the inside. Tiny exit holes signal serious damage below. We specialize in eliminating active infestations, repairing structural damage, and preventing re-infestation. Save valuable furniture with professional treatment. Expert service across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Signs of Woodworm Infestation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Exit Holes", desc: "Small round holes (1-2mm) on wood surface - beetles emerging from wood", urgency: "Critical" },
                { title: "Frass (Wood Dust)", desc: "Fine sawdust-like powder around holes or beneath furniture", urgency: "Critical" },
                { title: "Live Beetles", desc: "Small brown beetles crawling on or near furniture, especially in spring", urgency: "Critical" },
                { title: "Tunnels in Wood", desc: "Visible tunneling when wood is broken open or examined closely", urgency: "High" },
                { title: "Weak or Crumbly Wood", desc: "Wood that crumbles easily or feels soft when pressed", urgency: "Critical" },
                { title: "Damaged Wood Veneer", desc: "Veneer bubbling or separating from tunneling underneath", urgency: "High" },
                { title: "Adult Beetles Found Dead", desc: "Dead beetles on windowsills or around furniture", urgency: "High" },
                { title: "Fresh Exit Holes", desc: "New holes with clean, light-colored edges (active infestation)", urgency: "Critical" }
              ].map((sign, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-red-600">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{sign.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{sign.desc}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    sign.urgency === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                  }`}>{sign.urgency} Urgency</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Common Wood-Boring Pests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Bug className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Common Furniture Beetle</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Most common woodworm in South Africa</li>
                  <li>• Attacks softwood and hardwood</li>
                  <li>• 1-2mm exit holes</li>
                  <li>• Larvae feed for 2-5 years before emerging</li>
                  <li>• Prefers damp, unheated areas</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <AlertTriangle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Deathwatch Beetle</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Attacks hardwoods (oak, mahogany)</li>
                  <li>• Larger exit holes (3mm)</li>
                  <li>• Causes severe structural damage</li>
                  <li>• Found in old, damp wood</li>
                  <li>• Named for ticking sound made by adults</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Zap className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Powderpost Beetle</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Attacks hardwoods with large pores</li>
                  <li>• Very fine powdery frass</li>
                  <li>• 1-2mm holes, clustered appearance</li>
                  <li>• Can re-infest same piece repeatedly</li>
                  <li>• Reduces wood to powder internally</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Shield className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Lyctus Beetle</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Attacks sapwood of hardwoods</li>
                  <li>• Common in coastal areas</li>
                  <li>• Fine powder frass like talc</li>
                  <li>• Can complete lifecycle in 1 year</li>
                  <li>• Multiple generations can inhabit same piece</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Act Fast - Woodworm Spreads Quickly</h4>
                  <p className="text-red-800 text-sm">Active woodworm can spread to other furniture and even building timbers. Females lay hundreds of eggs, creating rapid infestation growth. What damages one piece this year can destroy your entire collection next year. Professional treatment is essential.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Woodworm Treatment Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Thorough Inspection", desc: "Identify pest species, assess infestation extent, determine if infestation is active. Check all furniture and nearby items.", time: "1-2 hours" },
                { step: "2", title: "Isolation", desc: "Isolate infested furniture to prevent spread to other pieces. Prepare treatment area.", time: "1 day" },
                { step: "3", title: "Professional Treatment Application", desc: "Apply professional-grade insecticide deep into wood. Multiple applications ensure complete penetration and larval death.", time: "1-2 days" },
                { step: "4", title: "Fumigation (if severe)", desc: "For severe infestations: sealed fumigation treatment that penetrates entire piece. Guarantees elimination of all life stages.", time: "3-7 days" },
                { step: "5", title: "Monitoring Period", desc: "Monitor for new exit holes or frass indicating surviving beetles. Re-treat if necessary.", time: "2-3 months" },
                { step: "6", title: "Wood Repair & Restoration", desc: "Fill exit holes, repair damaged areas, restore structural integrity. Rebuild severely damaged sections.", time: "1-3 weeks" },
                { step: "7", title: "Preventive Treatment", desc: "Apply long-lasting preventive treatment. Create barrier against future infestation.", time: "1 day" },
                { step: "8", title: "Refinishing", desc: "Refinish furniture to restore appearance. Seal wood completely for added protection.", time: "1-2 weeks" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Treatment Time:</strong> 2-6 months (includes monitoring period)</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R2,000 - R9,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Woodworm Infestation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Preventive Treatment", tips: ["Treat new/old furniture preventively", "Apply wood preservatives", "Use insect-resistant finishes", "Regular preventive spraying in high-risk areas"] },
                { icon: Droplet, title: "Moisture Control", tips: ["Keep furniture dry (below 20% moisture)", "Use dehumidifiers in damp areas", "Ensure good ventilation", "Fix leaks immediately"] },
                { icon: CheckCircle, title: "Regular Inspection", tips: ["Check furniture quarterly", "Look for exit holes and frass", "Inspect especially in spring (beetle season)", "Professional inspection annually"] },
                { icon: Bug, title: "Quarantine New Items", tips: ["Inspect all secondhand furniture", "Quarantine before bringing into home", "Treat antiques preventively", "Check for active infestation signs"] },
                { icon: Clock, title: "Environmental Control", tips: ["Maintain temperatures below 18°C in storage", "Ensure dry, well-ventilated spaces", "Avoid damp basements for furniture", "Heat treatment kills all life stages"] },
                { icon: AlertTriangle, title: "Early Detection", tips: ["Act on first signs immediately", "Don't wait for extensive damage", "Professional treatment is most effective", "Spread prevention to other furniture"] }
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
            <Bug className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Eliminate Woodworm and Save Your Furniture</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't let woodworm destroy valuable furniture. Our professional treatment eliminates pests and restores wood integrity.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Woodworm Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Restoration Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/antique-restoration" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Antique Restoration</h4>
                <p className="text-sm text-dark-wood">Restore valuable antiques</p>
              </Link>
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Structural Repair</h4>
                <p className="text-sm text-dark-wood">Fix damaged wood</p>
              </Link>
              <Link href="/furniture-crack-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Crack Repair</h4>
                <p className="text-sm text-dark-wood">Repair wood cracks</p>
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
