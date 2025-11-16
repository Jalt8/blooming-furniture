import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, CheckCircle, Phone, Mail, Clock, Shield, Droplet, Wind, Home } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Water Damaged Furniture Repair & Restoration | West Coast Specialists",
  description: "Expert water damage furniture repair in West Coast South Africa. Fix water rings, warped wood, swelling, and moisture damage. Same-day quotes. Serving Langebaan, Saldanha Bay, Vredenburg.",
  keywords: "water damaged furniture repair, water damage restoration, warped wood repair, furniture water rings, swollen furniture repair, moisture damage furniture, West Coast furniture repair, furniture drying",
  openGraph: {
    title: "Water Damaged Furniture Repair | Blooming Furniture West Coast",
    description: "Professional water damage furniture restoration. From white rings to severe warping, we fix all types of water damage. Fast response across West Coast.",
    url: "https://bloomingfurniture.co.za/water-damaged-furniture-repair",
    type: "website",
    locale: "en_ZA",
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/water-damaged-furniture-repair",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can water-damaged furniture be repaired?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most water-damaged furniture can be successfully repaired. The extent of repair depends on how long the water has been present and the type of wood. We can fix water rings, warped wood, peeling veneer, and even severe moisture damage. Early intervention is key to preventing permanent damage."
      }
    },
    {
      "@type": "Question",
      "name": "How much does water damage furniture repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Water damage repair costs vary based on severity. Minor water rings: R600-R1,500. Moderate warping and staining: R1,500-R4,000. Severe damage requiring complete refinishing: R3,000-R7,500. We provide free assessments and detailed quotes before starting work."
      }
    },
    {
      "@type": "Question",
      "name": "How long does water damage furniture repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repair timelines depend on damage severity. Minor surface damage: 1-2 weeks. Moderate warping that needs controlled drying: 2-4 weeks. Severe damage requiring complete restoration: 4-6 weeks. We provide a specific timeline with your quote."
      }
    }
  ]
};

export default function WaterDamagedFurnitureRepair() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Water Damage Repair', href: '/water-damaged-furniture-repair' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-10 w-10 text-golden-center" />
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">URGENT SERVICE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Water Damaged Furniture Repair & Restoration
              </h1>
              <p className="text-xl mb-6 leading-relaxed">
                Don't let water damage ruin your valuable furniture. Our expert repair services fix water rings,
                warped wood, swelling, peeling veneer, and severe moisture damage. Fast response across the West Coast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-consultation"
                  className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300 text-center"
                >
                  Get Emergency Quote
                </Link>
                <a
                  href="tel:+27793752588"
                  className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center"
                >
                  Call Now: (079) 375 2588
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Signs of Water Damage */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Signs Your Furniture Has Water Damage
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Recognize these symptoms early to prevent permanent damage and reduce repair costs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "White Rings & Dark Stains",
                  description: "Circular water rings or dark moisture stains on wood surfaces",
                  urgency: "Moderate"
                },
                {
                  title: "Warped or Swollen Wood",
                  description: "Wood that's bent, twisted, or expanded from moisture absorption",
                  urgency: "High"
                },
                {
                  title: "Peeling Veneer",
                  description: "Thin wood layers lifting or bubbling from the surface",
                  urgency: "High"
                },
                {
                  title: "Mold & Mildew Growth",
                  description: "Visible mold, musty smell, or dark discoloration",
                  urgency: "Critical"
                },
                {
                  title: "Loose Joints",
                  description: "Wobbly structure from moisture weakening glue joints",
                  urgency: "High"
                },
                {
                  title: "Finish Damage",
                  description: "Cloudy, cracked, or peeling finish from water exposure",
                  urgency: "Moderate"
                },
                {
                  title: "Cracking or Splitting",
                  description: "Wood developing cracks as it dries unevenly",
                  urgency: "High"
                },
                {
                  title: "Rust on Hardware",
                  description: "Corroded hinges, handles, or metal components",
                  urgency: "Moderate"
                }
              ].map((sign, index) => (
                <div key={index} className="bg-daisy-cream rounded-lg p-6 border-l-4 border-forest-green">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{sign.title}</h3>
                  <p className="text-forest-green text-sm mb-3">{sign.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    sign.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                    sign.urgency === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {sign.urgency} Urgency
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Causes of Water Damage */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Common Causes of Furniture Water Damage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Droplet className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Spills & Standing Water</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Beverage spills not cleaned immediately</li>
                  <li>• Vase or plant pot overflows</li>
                  <li>• Wet items placed on furniture</li>
                  <li>• Condensation from cold drinks</li>
                </ul>
              </div>

              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Home className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Leaks & Flooding</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• Roof leaks during heavy rain</li>
                  <li>• Plumbing failures and burst pipes</li>
                  <li>• Flooding events</li>
                  <li>• Window leaks in coastal storms</li>
                </ul>
              </div>

              <div className="bg-white-daisy rounded-lg p-6 shadow-lg">
                <Wind className="h-10 w-10 text-forest-green mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Coastal Environment</h3>
                <ul className="space-y-2 text-forest-green text-sm">
                  <li>• High humidity in coastal areas</li>
                  <li>• Condensation buildup</li>
                  <li>• Salt air moisture absorption</li>
                  <li>• Poor ventilation</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Act Fast to Minimize Damage!</h4>
                  <p className="text-orange-800 text-sm">
                    Water damage spreads quickly. The longer moisture remains in wood, the more severe the damage becomes.
                    Contact us immediately for emergency assessment and treatment to save your furniture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Water Damage Repair Process
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Emergency Assessment",
                  description: "Fast evaluation of damage severity. We determine if furniture can be saved and create an action plan. Same-day assessment available for urgent cases.",
                  timeframe: "Same day"
                },
                {
                  step: "2",
                  title: "Controlled Drying",
                  description: "Carefully dry the furniture using professional techniques. Rapid drying causes cracking, so we use controlled methods to prevent further damage.",
                  timeframe: "1-3 weeks"
                },
                {
                  step: "3",
                  title: "Damage Repair",
                  description: "Remove stains, flatten warped wood, repair loose joints, and replace damaged veneer. Each piece receives customized treatment based on damage type.",
                  timeframe: "1-2 weeks"
                },
                {
                  step: "4",
                  title: "Refinishing",
                  description: "Complete surface preparation, staining to match original color, and application of water-resistant protective finish.",
                  timeframe: "1-2 weeks"
                },
                {
                  step: "5",
                  title: "Quality Check & Delivery",
                  description: "Final inspection to ensure all damage is repaired. Delivery with care instructions to prevent future water damage.",
                  timeframe: "1-2 days"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-wood mb-2">{item.title}</h3>
                    <p className="text-forest-green mb-2">{item.description}</p>
                    <p className="text-sm text-dark-wood font-semibold">⏱️ Timeframe: {item.timeframe}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-forest-green mb-4">
                <strong>Total Repair Time:</strong> 2-6 weeks depending on severity
              </p>
              <p className="text-lg text-forest-green">
                <strong>Cost Range:</strong> R1,000 - R7,500
              </p>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Preventing Future Water Damage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Use Protective Finishes",
                  tips: ["Apply water-resistant sealers", "Re-finish every 3-5 years", "Use furniture wax monthly"]
                },
                {
                  icon: CheckCircle,
                  title: "Immediate Action",
                  tips: ["Wipe spills instantly", "Don't let water sit", "Dry thoroughly after cleaning"]
                },
                {
                  icon: Home,
                  title: "Environmental Control",
                  tips: ["Maintain 40-55% humidity", "Good ventilation", "Use dehumidifiers in humid areas"]
                },
                {
                  icon: Droplet,
                  title: "Use Protection",
                  tips: ["Coasters for all drinks", "Placemats at dining tables", "Waterproof pads under plants"]
                },
                {
                  icon: Wind,
                  title: "Coastal Precautions",
                  tips: ["Marine-grade finishes", "Regular inspections", "Extra protection near windows"]
                },
                {
                  icon: Clock,
                  title: "Regular Maintenance",
                  tips: ["Annual professional check", "Touch up worn areas", "Replace old finish as needed"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-white-daisy rounded-lg p-6 shadow-lg">
                  <item.icon className="h-10 w-10 text-golden-center mb-4" />
                  <h3 className="text-lg font-bold text-dark-wood mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-forest-green text-sm">
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

        {/* FAQ */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Water Damage Furniture Repair FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can all water-damaged furniture be saved?",
                  a: "Most furniture can be saved if treated promptly. However, severely damaged pieces with extensive rot, mold penetration, or complete structural failure may not be salvageable. Our expert assessment will determine if repair is possible and cost-effective."
                },
                {
                  q: "Should I try to dry water-damaged furniture myself?",
                  a: "No. Rapid drying causes wood to crack and warp further. Professional controlled drying is essential. If you must do something immediately, gently blot excess water and place furniture in a well-ventilated area away from direct heat or sunlight."
                },
                {
                  q: "Will water rings disappear completely?",
                  a: "Yes! White water rings (trapped moisture) usually disappear completely with proper treatment. Dark water stains that have penetrated deep into wood may require color matching, but we can restore the piece to look like new."
                },
                {
                  q: "How much does water damage furniture repair cost?",
                  a: "Costs vary: Minor water rings R600-R1,500, Moderate damage R1,500-R4,000, Severe damage R3,000-R7,500. We provide free assessments and detailed quotes before any work begins."
                },
                {
                  q: "Do you offer emergency water damage service?",
                  a: "Yes! We understand water damage urgency. Contact us immediately for same-day assessment across Langebaan, Saldanha Bay, Vredenburg, and West Coast areas. The faster we act, the better the outcome."
                },
                {
                  q: "Can you repair furniture damaged by coastal humidity?",
                  a: "Absolutely. We specialize in coastal furniture issues. West Coast humidity causes unique damage patterns, and we have specific techniques and treatments for moisture damage from our marine environment."
                }
              ].map((item, index) => (
                <details key={index} className="bg-daisy-cream rounded-lg p-6 group">
                  <summary className="font-bold text-dark-wood cursor-pointer list-none flex items-center justify-between">
                    <span>{item.q}</span>
                    <CheckCircle className="h-5 w-5 text-forest-green group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-forest-green mt-4 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-6">Act Fast - Water Damage Spreads Quickly!</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every hour counts when furniture is water-damaged. Contact us now for emergency assessment
              and prevent permanent damage to your valuable pieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+27793752588"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: (079) 375 2588
              </a>
              <Link
                href="/book-consultation"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300"
              >
                Request Urgent Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
              <div>
                <p className="font-semibold mb-1">⚡ Same-Day Assessment</p>
                <p className="opacity-90">Available for emergency cases</p>
              </div>
              <div>
                <p className="font-semibold mb-1">🚚 Free Collection</p>
                <p className="opacity-90">Across West Coast region</p>
              </div>
              <div>
                <p className="font-semibold mb-1">✅ Satisfaction Guaranteed</p>
                <p className="opacity-90">Expert restoration you can trust</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">
              Related Furniture Repair Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link
                href="/sun-faded-furniture-restoration"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-forest-green mb-2">Sun Fade Restoration</h4>
                <p className="text-sm text-dark-wood">Fix UV and sun damage</p>
              </Link>
              <Link
                href="/scratched-furniture-repair"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-forest-green mb-2">Scratch Repair</h4>
                <p className="text-sm text-dark-wood">Remove scratches and gouges</p>
              </Link>
              <Link
                href="/broken-furniture-joints-repair"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
                <h4 className="font-semibold text-forest-green mb-2">Joint Repair</h4>
                <p className="text-sm text-dark-wood">Fix wobbly furniture</p>
              </Link>
              <Link
                href="/services"
                className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300"
              >
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
