import { Metadata } from 'next';
import Link from 'next/link';
import { Tool, CheckCircle, Phone, Mail, Clock, Shield, AlertCircle, Zap } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Scratched Furniture Repair | Professional Scratch Removal West Coast",
  description: "Expert scratched furniture repair on the West Coast. Remove deep scratches, surface marks, and gouges. Professional refinishing for Langebaan, Saldanha Bay, Paternoster.",
  keywords: "scratched furniture repair, furniture scratch removal, deep scratch repair, wood scratch fix, furniture refinishing, West Coast furniture repair, scratch restoration",
  openGraph: {
    title: "Scratched Furniture Repair | Blooming Furniture West Coast",
    description: "Professional scratch removal and furniture refinishing. Fix surface marks, deep scratches, and gouges expertly.",
    url: "https://bloomingfurniture.co.za/scratched-furniture-repair",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/scratched-furniture-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can deep scratches in furniture be repaired?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Deep scratches can be completely repaired. We use wood fillers, color matching, and refinishing techniques to make scratches disappear. Even gouges and severe damage can be restored so well that you won't see where the scratch was. Professional results guaranteed."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture scratch repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture repair costs vary depending on the piece, its condition, and services needed. Each project is unique. We provide free assessments and detailed quotes. Contact us for a personalized estimate."
      }
    }
  ]
};

export default function ScratchedFurnitureRepair() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Scratch Repair', href: '/scratched-furniture-repair' }]} className="max-w-7xl mx-auto" />

        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Tool className="h-10 w-10 text-golden-center" />
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">SCRATCH SPECIALISTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Scratched Furniture Repair & Professional Scratch Removal</h1>
              <p className="text-xl mb-6 leading-relaxed">Scratches happen - pets, kids, accidents, moves. We specialize in making them disappear. From light surface marks to deep gouges, our expert techniques restore furniture to flawless condition. Professional scratch removal across Langebaan, Saldanha Bay, Paternoster, and all West Coast areas.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center">Get Free Assessment</Link>
                <a href="tel:+27793752588" className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center">Call: (079) 375 2588</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Types of Furniture Scratches We Repair</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Surface Scratches", desc: "Light marks that don't penetrate finish. Visible but shallow.", repair: "Buffing & refinishing", cost: "R800-R2,000" },
                { title: "Finish-Deep Scratches", desc: "Through the protective coating, exposing bare wood.", repair: "Fill, color match, refinish", cost: "R1,500-R3,000" },
                { title: "Wood-Deep Scratches", desc: "Grooves carved into the wood itself. Significant depth.", repair: "Wood filler, sanding, refinishing", cost: "R2,500-R4,500" },
                { title: "Gouges & Dents", desc: "Deep damage with wood removal. Structural impact.", repair: "Wood reconstruction, refinishing", cost: "R3,500-R6,000" },
                { title: "Pet Scratches", desc: "Multiple claw marks, often in clusters or patterns.", repair: "Comprehensive refinishing", cost: "R2,000-R5,000" },
                { title: "White Heat Marks", desc: "Cloudy scratches from hot items sliding across surface.", repair: "Specialized heat treatment", cost: "R1,000-R2,500" }
              ].map((type, i) => (
                <div key={i} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-golden-center">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{type.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{type.desc}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-dark-wood"><strong>Repair Method:</strong> {type.repair}</p>
                    <p className="text-xs text-dark-wood"><strong>Cost:</strong> {type.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Common Causes of Furniture Scratches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <AlertCircle className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Daily Living</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Keys, phones, and hard objects placed on surfaces</li>
                  <li>• Moving items across tabletops</li>
                  <li>• Plates, glasses, and utensils</li>
                  <li>• Jewelry catching on surfaces</li>
                  <li>• Children's toys and activities</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Zap className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Pets & Animals</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Cat claws on furniture surfaces</li>
                  <li>• Dogs jumping on and off furniture</li>
                  <li>• Pet nails during play or climbing</li>
                  <li>• Animals scratching at furniture</li>
                  <li>• Repetitive claw marks in same spots</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Tool className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Moving & Accidents</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Furniture being moved or rearranged</li>
                  <li>• Objects dropped onto surfaces</li>
                  <li>• Accidental impacts and bumps</li>
                  <li>• Poor moving or delivery handling</li>
                  <li>• Storage damage</li>
                </ul>
              </div>
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Shield className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Cleaning & Maintenance</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Abrasive cleaning products</li>
                  <li>• Rough cleaning cloths or sponges</li>
                  <li>• Dragging objects during cleaning</li>
                  <li>• Improper polish application</li>
                  <li>• Sandy or gritty cloths on coastal furniture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Our Scratch Repair Process</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: "1", title: "Scratch Assessment", desc: "Identify scratch depth, wood type, finish type. Determine best repair approach for invisible results.", time: "30 min" },
                { step: "2", title: "Surface Preparation", desc: "Clean area thoroughly. Remove any wax, polish, or contaminants. Prepare for repair.", time: "1 hour" },
                { step: "3", title: "Scratch Filling (if needed)", desc: "For deep scratches: apply wood filler matched to exact wood color. Allow proper curing time.", time: "1-2 days" },
                { step: "4", title: "Sanding & Leveling", desc: "Sand filled areas flush with surface. Create perfectly smooth base for refinishing.", time: "2-3 hours" },
                { step: "5", title: "Color Matching & Staining", desc: "Custom color match to surrounding wood. Apply stain to blend repair seamlessly.", time: "1-2 days" },
                { step: "6", title: "Finish Application", desc: "Apply multiple layers of protective finish. Ensure repair is invisible and protected.", time: "2-4 days" },
                { step: "7", title: "Buffing & Polishing", desc: "Final polish to match sheen of surrounding area. Furniture looks flawless.", time: "1 hour" }
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
              <p className="text-lg text-forest-green mb-4"><strong>Total Repair Time:</strong> 3-7 days depending on scratch severity</p>
              <p className="text-lg text-forest-green"><strong>Cost Range:</strong> R800 - R6,000</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">Preventing Future Scratches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Use Protection", tips: ["Placemats and coasters always", "Tablecloths for daily use", "Felt pads under decorative items", "Protective film on high-use surfaces"] },
                { icon: CheckCircle, title: "Pet Management", tips: ["Keep pet nails trimmed", "Provide scratching posts for cats", "Train pets to stay off furniture", "Use pet-friendly furniture covers"] },
                { icon: Tool, title: "Careful Handling", tips: ["Lift items, don't drag", "Use moving pads when rearranging", "Place felt pads under everything", "Be mindful with sharp objects"] },
                { icon: Clock, title: "Regular Maintenance", tips: ["Apply furniture wax quarterly", "Inspect for early damage", "Address small scratches immediately", "Professional refinishing every 5-7 years"] },
                { icon: AlertCircle, title: "Smart Cleaning", tips: ["Use soft, lint-free cloths", "Avoid abrasive cleaners", "Clean in direction of grain", "No sandy cloths on coastal furniture"] },
                { icon: Zap, title: "Quick Response", tips: ["Address scratches immediately", "Don't let damage worsen", "Professional assessment for deep scratches", "Early repair prevents further damage"] }
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
            <Tool className="h-16 w-16 mx-auto mb-6 text-golden-center" />
            <h2 className="text-3xl font-bold mb-6">Make Scratches Disappear with Expert Repair</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Don't live with scratched furniture. Our professional repair makes damage invisible. Perfect results guaranteed.</p>
            <Link href="/book-consultation" className="inline-block bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300">Get Free Scratch Assessment</Link>
            <p className="text-sm mt-6 opacity-90">Serving Langebaan, Saldanha Bay, Paternoster, Vredenburg & All West Coast Areas</p>
          </div>
        </section>

        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">Related Furniture Repair Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/broken-furniture-joints-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Joint Repair</h4>
                <p className="text-sm text-dark-wood">Fix loose or broken joints</p>
              </Link>
              <Link href="/furniture-crack-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Crack Repair</h4>
                <p className="text-sm text-dark-wood">Repair wood cracks</p>
              </Link>
              <Link href="/peeling-furniture-finish-repair" className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                <h4 className="font-semibold text-forest-green mb-2">Finish Peeling</h4>
                <p className="text-sm text-dark-wood">Fix peeling finishes</p>
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
