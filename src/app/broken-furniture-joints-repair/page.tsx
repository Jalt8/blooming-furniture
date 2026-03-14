import { Metadata } from 'next';
import Link from 'next/link';
import { Hammer, CheckCircle, Phone, Mail, Clock, Shield, AlertTriangle, Wrench } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Broken Furniture Joints Repair | Expert Joint Restoration West Coast",
  description: "Expert broken furniture joints repair on the West Coast. Fix loose chairs, wobbly tables, and separated joints. Professional structural repairs for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "broken furniture joints, loose chair repair, wobbly table fix, joint restoration, furniture structural repair, West Coast furniture repair, chair leg repair",
  openGraph: {
    title: "Broken Furniture Joints Repair | Blooming Furniture West Coast",
    description: "Professional furniture joint repair. Fix loose, broken, and separated joints. Structural restoration for lasting stability.",
    url: "https://bloomingfurniture.co.za/broken-furniture-joints-repair",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/broken-furniture-joints-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can broken furniture joints be repaired?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Broken furniture joints can be expertly repaired. We disassemble joints, clean old glue, re-glue with proper techniques, and reinforce with traditional joinery methods. Most joints become stronger than original. Professional repairs last for decades."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture joint repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Joint repair costs R1,200-R7,000 depending on complexity. Single loose joint: R1,200-R2,500. Multiple joints on one piece: R2,500-R4,500. Complete structural restoration with multiple broken joints: R4,500-R7,000. Chair repairs typically R1,500-R3,500."
      }
    }
  ]
};

export default function BrokenFurnitureJointsRepair() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Joint Repair', href: '/broken-furniture-joints-repair' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Hammer className="h-10 w-10 text-golden-center" />
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">STRUCTURAL SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Broken Furniture Joints Repair & Structural Restoration</h1>
              <p className="text-xl mb-6 leading-relaxed">Wobbly chairs? Loose table legs? Separated joints? We specialize in structural furniture repair using traditional joinery techniques. From single loose joints to complete structural restoration, we make furniture rock-solid again. Expert joint repair across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Signs Your Furniture Joints Need Repair</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Wobbling", desc: "Chair or table rocks when you sit or lean on it", urgency: "High" },
                { title: "Creaking Sounds", desc: "Furniture makes noise when weight is applied or during use", urgency: "Moderate" },
                { title: "Visible Gaps", desc: "Separation visible between joints that should be tight", urgency: "High" },
                { title: "Loose Legs", desc: "Table or chair legs feel loose when moved or shaken", urgency: "High" },
                { title: "Drawers Misaligned", desc: "Drawer fronts no longer sit flush or straight", urgency: "Moderate" },
                { title: "Doors Sagging", desc: "Cabinet doors hang crooked or don't close properly", urgency: "Moderate" },
                { title: "Complete Separation", desc: "Parts have completely come apart from joints", urgency: "Critical" },
                { title: "Frame Distortion", desc: "Furniture frame is twisted or out of square", urgency: "Critical" }
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
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Why Furniture Joints Fail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <AlertTriangle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Age & Glue Failure</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Old animal glue breaks down over time</li>
                  <li>• Natural aging of wood and adhesives</li>
                  <li>• Decades of stress on joints</li>
                  <li>• Original glue may have been poor quality</li>
                  <li>• Historical furniture with weakened joints</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Wrench className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Humidity & Climate</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Coastal humidity causes wood swelling</li>
                  <li>• Seasonal expansion and contraction</li>
                  <li>• Glue weakens in moisture</li>
                  <li>• Wood movement stresses joints</li>
                  <li>• West Coast conditions accelerate wear</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Hammer className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Heavy Use & Stress</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Daily use puts constant stress on joints</li>
                  <li>• Leaning back in chairs repeatedly</li>
                  <li>• Moving furniture frequently</li>
                  <li>• Weight exceeding design limits</li>
                  <li>• Children climbing or jumping on furniture</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Shield className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Poor Construction</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Inadequate glue in original assembly</li>
                  <li>• Weak joinery techniques used</li>
                  <li>• Missing reinforcements or dowels</li>
                  <li>• Mass-produced furniture shortcuts</li>
                  <li>• Wrong wood species for application</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Don't Wait - Loose Joints Get Worse Fast</h4>
                  <p className="text-red-800 text-sm">A wobbly chair or loose joint will only deteriorate. Movement causes more damage. What starts as minor looseness can lead to complete joint failure and expensive structural damage. Early repair saves money and prevents accidents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Joint Repair Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Structural Assessment", desc: "Identify all loose or broken joints. Test structural integrity. Determine root cause and best repair approach.", time: "1 hour" },
                { step: "2", title: "Careful Disassembly", desc: "Separate joints without damaging wood. Number parts for correct reassembly. Preserve original joinery.", time: "2-4 hours" },
                { step: "3", title: "Clean & Prepare", desc: "Remove all old glue completely. Clean joint surfaces. Ensure perfect fit for maximum glue contact.", time: "3-5 hours" },
                { step: "4", title: "Repair Damaged Wood", desc: "Fill gaps or damaged areas. Build up worn mortises. Replace broken tenons if needed.", time: "1-2 days" },
                { step: "5", title: "Re-gluing with Proper Technique", desc: "Apply professional wood glue. Use correct clamping pressure and time. Ensure joints are perfectly square.", time: "1 day + cure time" },
                { step: "6", title: "Reinforcement", desc: "Add dowels, corner blocks, or traditional reinforcements. Make joints stronger than original construction.", time: "1-2 days" },
                { step: "7", title: "Finishing & Testing", desc: "Touch up finish if needed. Stress-test all repairs. Ensure furniture is rock-solid before return.", time: "1 day" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Repair Time:</strong> 1-2 weeks depending on number of joints</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R1,200 - R7,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Future Joint Problems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Avoid Stress", tips: ["Don't lean back on chair back legs", "Lift chairs by frame, not back", "Avoid rocking or tilting", "Keep furniture level on floor"] },
                { icon: CheckCircle, title: "Control Humidity", tips: ["Maintain consistent indoor humidity", "Use dehumidifiers in coastal areas", "Avoid placing near heaters or AC vents", "Allow furniture to acclimate before use"] },
                { icon: Wrench, title: "Regular Checks", tips: ["Inspect joints quarterly", "Tighten loose screws promptly", "Check for wobbling or creaking", "Professional inspection every 2-3 years"] },
                { icon: Hammer, title: "Proper Use", tips: ["Respect weight limits", "Don't drag furniture across floors", "Lift to move, don't push", "Supervise children on furniture"] },
                { icon: Clock, title: "Early Intervention", tips: ["Address looseness immediately", "Don't wait for complete failure", "Small repairs prevent big problems", "Professional assessment for antiques"] },
                { icon: AlertTriangle, title: "Moving Precautions", tips: ["Disassemble furniture for moves", "Use proper padding and support", "Hire professional movers for valuables", "Reassemble carefully after transport"] }
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
              <Link href="/wood-furniture-repair" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-semibold text-forest-green">Wood Furniture Repair</h3>
                <p className="text-sm text-dark-wood mt-1">Professional repair for broken joints, cracks, and structural damage</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Hammer className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Make Your Furniture Rock-Solid Again</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't live with wobbly furniture. Our expert joint repair makes pieces stable and safe for decades of use.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Joint Repair Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Structural Repair Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/furniture-crack-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Crack Repair</h4>
                <p className="text-sm text-dark-wood">Fix wood cracks</p>
              </Link>
              <Link href="/scratched-furniture-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Scratch Repair</h4>
                <p className="text-sm text-dark-wood">Remove scratches</p>
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
