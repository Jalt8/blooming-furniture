import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DoorOpen, Check, Star, Phone, MessageCircle, Clock, Shield, Wrench, Paintbrush, Settings } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cabinet Restoration Services | Kitchen, Display & Antique Cabinets',
  description: 'Professional cabinet restoration services on the West Coast. Restore kitchen cabinets, display cabinets, wardrobes & antique cabinets. Fix peeling finish, water damage, broken hinges & more. Free quotes!',
  keywords: 'cabinet restoration service, kitchen cabinet restoration, display cabinet repair, antique cabinet restoration, wardrobe restoration, cabinet refinishing, cabinet repair West Coast, cabinet restoration South Africa',
  openGraph: {
    title: 'Cabinet Restoration Services | Blooming Furniture',
    description: 'Expert restoration of kitchen, display, wardrobe & antique cabinets. Fix damage, refinish surfaces, replace hardware.',
    url: 'https://bloomingfurniture.co.za/cabinet-restoration',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/cabinet-restoration',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Cabinet Restoration",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://bloomingfurniture.co.za",
    "name": "Blooming Furniture",
    "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
    "telephone": "+27793752588",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Langebaan",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Western Cape"
  },
  "description": "Professional cabinet restoration services including kitchen cabinets, display cabinets, wardrobes, bathroom cabinets, and antique cabinets. Structural repair, refinishing, and hardware replacement.",
  "offers": {
    "@type": "Offer",
    "priceRange": "R2,000 - R15,000"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does cabinet restoration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cabinet restoration costs vary depending on the type and size. A single display cabinet or bookcase typically costs R2,000-R5,000. Antique cabinets requiring careful restoration range from R3,000-R8,000. Kitchen cabinet sets (doors and drawer fronts only) start from R5,000-R12,000. A full wardrobe restoration runs R3,500-R7,000. We provide free assessments and detailed quotes specific to your cabinet."
      }
    },
    {
      "@type": "Question",
      "name": "Can you restore kitchen cabinets without replacing them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Restoring existing kitchen cabinets is typically 60-70% cheaper than full replacement and produces excellent results. We can strip old paint or varnish, repair structural issues, fix or replace hinges and handles, and apply a fresh new finish in any colour. If the cabinet boxes (carcasses) are structurally sound, restoration is a smart, cost-effective choice that avoids weeks of kitchen disruption."
      }
    },
    {
      "@type": "Question",
      "name": "Do you replace cabinet hardware like hinges and handles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, hardware replacement is a common part of our cabinet restoration service. We can replace worn-out hinges with modern soft-close mechanisms, upgrade handles and knobs to match your desired style, install new drawer runners for smooth operation, and fit magnetic catches or push-to-open latches. We source quality hardware and can match existing period hardware for antique cabinets."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a kitchen cabinet restoration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full kitchen cabinet restoration typically takes 2-4 weeks depending on the number of doors and drawers, and the scope of repairs needed. We work in stages: doors and drawer fronts are removed and taken to our workshop for stripping, repair, and refinishing, while cabinet boxes can be cleaned and touched up in place. This minimises disruption to your kitchen. Single display cabinets or wardrobes usually take 1-2 weeks."
      }
    }
  ]
};

const cabinetTypes = [
  {
    title: "Kitchen Cabinets",
    description: "Upper and lower kitchen cabinets, pantry units, and kitchen islands. We restore doors, drawer fronts, and visible frames. Transform a dated kitchen without the cost of full replacement.",
    icon: DoorOpen,
    priceRange: "R5,000 - R15,000 (full kitchen set)"
  },
  {
    title: "Display Cabinets",
    description: "Glass-fronted display cabinets, china cabinets, and curio cabinets. We restore the wood, repair or replace glass panels, fix lighting, and refinish to showcase your collections beautifully.",
    icon: DoorOpen,
    priceRange: "R2,500 - R6,000"
  },
  {
    title: "Wardrobes & Armoires",
    description: "Free-standing wardrobes, built-in wardrobe doors, armoires, and linen cupboards. We fix sagging shelves, repair doors, replace rails, and refinish for a fresh new look.",
    icon: DoorOpen,
    priceRange: "R3,500 - R7,000"
  },
  {
    title: "Bathroom Cabinets",
    description: "Bathroom vanities, medicine cabinets, and storage units. These endure high humidity and moisture daily. We restore with water-resistant finishes that protect against coastal bathroom conditions.",
    icon: DoorOpen,
    priceRange: "R2,000 - R5,000"
  },
  {
    title: "Antique Cabinets",
    description: "Victorian display cabinets, Cape Dutch kas, Edwardian sideboards, and other period pieces. Restored with traditional techniques to preserve historical value and authenticity.",
    icon: DoorOpen,
    priceRange: "R3,000 - R8,000"
  },
  {
    title: "Office & Utility Cabinets",
    description: "Filing cabinets, bookcases, home office storage, and utility room cabinets. Practical pieces restored to look professional and work smoothly again.",
    icon: DoorOpen,
    priceRange: "R1,500 - R4,000"
  }
];

const commonIssues = [
  {
    issue: "Peeling & Flaking Finish",
    description: "Old paint, varnish, or lacquer that has begun to crack, bubble, peel, or flake away. One of the most common issues on cabinets over 10 years old, especially in humid rooms.",
    solution: "We strip the failing finish completely, sand smooth, prime where needed, and apply a fresh, durable finish in your chosen colour or stain."
  },
  {
    issue: "Water & Moisture Damage",
    description: "Swollen wood, warped panels, delaminating surfaces, and mould growth. Particularly common on kitchen and bathroom cabinets where water splashes and steam are daily occurrences.",
    solution: "Damaged wood is dried, stabilised, and repaired. Warped panels are straightened or replaced. Anti-fungal treatment eliminates mould. Water-resistant finishes prevent recurrence."
  },
  {
    issue: "Broken Hinges & Hardware",
    description: "Hinges that have pulled out of the wood, doors that sag or will not close properly, missing handles, and broken catches. Hardware failure is common on heavily used cabinets.",
    solution: "We repair hinge mount points with fresh timber inserts, install new quality hinges (including soft-close upgrades), and replace all worn handles, knobs, and catches."
  },
  {
    issue: "Sagging Shelves",
    description: "Shelves that bow under the weight of their contents, broken shelf supports, and collapsed internal structures. A sign that the cabinet needs structural attention.",
    solution: "We replace sagging shelves with thicker or reinforced boards, add centre supports, install new adjustable shelf pins, and reinforce the cabinet frame if needed."
  },
  {
    issue: "Scratches, Dents & Burns",
    description: "Surface damage from daily use: scratches from keys and utensils, dents from bumps and knocks, heat marks from kitchen appliances placed too close.",
    solution: "Scratches and dents are filled and sanded level. Burns are cleaned and patched. The entire surface is then refinished for a uniform, flawless appearance."
  },
  {
    issue: "Dated Appearance",
    description: "The cabinet is structurally fine but looks tired, dated, or no longer matches your interior style. Common with 1980s-2000s kitchen and bedroom cabinets.",
    solution: "A complete refinish transforms the look without the cost of replacement. Change from dark wood to light, add a painted finish, or modernise with new hardware."
  }
];

const refinishingOptions = [
  { name: "Painted Finish", description: "Any colour you choose, from classic white to bold statement colours. Includes primer and multiple topcoats for durability.", popular: true },
  { name: "Natural Stain", description: "Enhance the existing wood grain with a transparent stain. Light oak to dark walnut and everything between.", popular: false },
  { name: "Two-Tone", description: "Different colours for upper and lower cabinets, or contrasting island colour. A modern design trend.", popular: true },
  { name: "Whitewash / Lime Wash", description: "A light, coastal-inspired finish that softens wood grain while retaining texture and character.", popular: false },
  { name: "High-Gloss Lacquer", description: "A smooth, reflective finish for a contemporary, high-end kitchen look. Extremely durable.", popular: false },
  { name: "Distressed / Vintage", description: "A deliberately aged look with gentle wear-through on edges. Perfect for farmhouse or country-style kitchens.", popular: false }
];

const process = [
  {
    step: 1,
    title: "On-Site Assessment",
    description: "We visit your home to inspect the cabinets, assess structural condition, discuss your vision, and provide a detailed written quote. For free-standing cabinets, photos via WhatsApp also work."
  },
  {
    step: 2,
    title: "Door & Drawer Removal",
    description: "Cabinet doors, drawer fronts, and hardware are carefully labelled and removed. For kitchen cabinets, this is done quickly to minimise disruption. Items go to our workshop."
  },
  {
    step: 3,
    title: "Stripping & Repair",
    description: "Old finish is removed. All structural issues are fixed: re-gluing joints, replacing damaged panels, repairing hinge holes, fixing shelving, and treating any mould or rot."
  },
  {
    step: 4,
    title: "Sanding & Preparation",
    description: "All surfaces are sanded smooth through progressive grits. Edges are profiled, imperfections are filled, and surfaces are primed where needed for optimal paint or stain adhesion."
  },
  {
    step: 5,
    title: "Finishing",
    description: "Your chosen finish is applied: paint, stain, or specialist coating. We apply multiple coats with light sanding between each for a professional, factory-quality result."
  },
  {
    step: 6,
    title: "Hardware & Reinstallation",
    description: "New or restored hardware is fitted. Doors and drawers are reinstalled and adjusted for perfect alignment. All doors close properly and drawers slide smoothly."
  }
];

export default function CabinetRestorationPage() {
  return (
    <>
      {/* Service Schema - uses only hardcoded static data, safe for structured data output */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {/* FAQ Schema - uses only hardcoded static data, safe for structured data output */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Cabinet Restoration', href: '/cabinet-restoration' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <DoorOpen className="h-10 w-10 text-golden-center" />
                  <span className="text-golden-center font-semibold">Professional Cabinet Restoration</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Cabinet Restoration Services for Every Room
                </h1>
                <p className="text-xl mb-6">
                  From kitchen cabinets that need a fresh new look to antique display cabinets that deserve careful preservation, we restore all types of cabinets to look and function like new. Restoration is typically 60-70% cheaper than full replacement.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Kitchen, display, wardrobe & antique cabinets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Structural repair, refinishing & hardware upgrade</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Free on-site assessment & detailed quotes</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold hover:bg-white-daisy transition duration-300"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="https://wa.me/27793752588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Photos
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/Lime-Wash7.jpg"
                  alt="Beautifully restored cabinet with new finish"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white-daisy p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 fill-golden-center text-golden-center" />
                    <div>
                      <div className="font-bold text-dark-wood">Save 60-70%</div>
                      <div className="text-sm text-forest-green">vs. Full Replacement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cabinets */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Types of Cabinets We Restore
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Whether it is a full set of kitchen cabinets or a single treasured antique display piece, we have the expertise to restore it beautifully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cabinetTypes.map((cabinet, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <cabinet.icon className="h-12 w-12 text-forest-green mb-4" />
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{cabinet.title}</h3>
                  <p className="text-forest-green text-sm mb-4">{cabinet.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm font-semibold text-dark-wood">
                      Price range: <span className="text-forest-green">{cabinet.priceRange}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Common Cabinet Problems We Fix
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Cabinets are used every day and bear the brunt of kitchen steam, bathroom moisture, and household activity. Here are the issues we see most often.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonIssues.map((item, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{item.issue}</h3>
                  <p className="text-forest-green text-sm mb-3">{item.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm text-forest-green"><strong>Our solution:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restoration vs Replacement */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
                Restoration vs. Replacement: Why Restore?
              </h2>
              <div className="prose prose-lg max-w-none text-forest-green space-y-4 mt-8">
                <p>
                  Many homeowners assume that tired-looking cabinets need to be ripped out and replaced. In most cases, this is unnecessary and far more expensive than professional restoration. If the cabinet carcasses (boxes) are structurally sound -- and they usually are -- then restoration delivers a stunning transformation at a fraction of the cost.
                </p>
                <p>
                  Kitchen cabinet replacement in South Africa typically costs R30,000-R80,000 or more, involves weeks of disruption, requires plumbing and electrical disconnection, and generates significant waste. A professional cabinet restoration, by contrast, typically costs R5,000-R15,000 for a full kitchen, takes 2-4 weeks (with most work done off-site in our workshop), and results in a finish that is indistinguishable from new.
                </p>
                <p>
                  For antique and period cabinets, restoration is not just a cost-saving measure -- it is the responsible choice. Replacing an antique cabinet means losing a piece of history. Our restoration approach preserves the original craftsmanship, wood, and character while making the piece functional and beautiful for modern use. We use traditional techniques for period pieces and can match existing hardware and finishes for a seamless result.
                </p>
                <p>
                  The environmental argument is equally compelling. Restoring keeps quality timber out of landfill and avoids the carbon footprint of manufacturing new units. It is the sustainable choice that also happens to produce a superior result in most cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refinishing Options */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Cabinet Refinishing Options
            </h2>
            <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
              Transform the entire look of your cabinets with a new finish. From classic white to bold modern colours, the possibilities are endless.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {refinishingOptions.map((option, idx) => (
                <div key={idx} className="bg-white-daisy/10 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-golden-center">{option.name}</h3>
                    {option.popular && (
                      <span className="text-xs bg-golden-center/30 px-3 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-sm">{option.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm">
                See all finish options on our{' '}
                <Link href="/furniture-refinishing" className="text-golden-center font-semibold underline hover:text-white-daisy">
                  furniture refinishing page
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Cabinet Restoration Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-green text-white-daisy rounded-full flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-wood mb-2">{step.title}</h3>
                      <p className="text-forest-green">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware Upgrade Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
                Hardware Upgrades & Replacement
              </h2>
              <p className="text-center text-forest-green mb-8">
                New hardware can completely change the character of a cabinet. We source and install quality fittings to complement your new finish.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white-daisy p-6 rounded-lg">
                  <Settings className="h-8 w-8 text-forest-green mb-3" />
                  <h3 className="font-bold text-dark-wood mb-3">Functional Hardware</h3>
                  <ul className="space-y-2 text-forest-green text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Soft-close hinges for quiet, controlled door closing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Full-extension drawer slides for easy access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Push-to-open mechanisms for handleless designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Magnetic catches and cabinet locks</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white-daisy p-6 rounded-lg">
                  <Paintbrush className="h-8 w-8 text-forest-green mb-3" />
                  <h3 className="font-bold text-dark-wood mb-3">Decorative Hardware</h3>
                  <ul className="space-y-2 text-forest-green text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Modern bar handles in brushed nickel, matt black, or brass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Traditional knobs in ceramic, glass, or antique metal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Period-correct hardware for antique cabinet restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Cup pulls, ring pulls, and decorative escutcheons</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Choose Blooming Furniture for Cabinet Restoration?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Complete Service</h3>
                <p className="text-forest-green">Structural repair, refinishing, and hardware -- everything in one service</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Durable Finishes</h3>
                <p className="text-forest-green">Kitchen-grade finishes that withstand steam, splashes, and daily use</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Minimal Disruption</h3>
                <p className="text-forest-green">Most work done off-site. Your kitchen is only without doors for a short time.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Antique Expertise</h3>
                <p className="text-forest-green">Traditional techniques for period cabinets that preserve history and value</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">
              Related Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/wood-furniture-repair" className="bg-white-daisy p-6 rounded-lg hover:shadow-lg transition duration-300 block">
                <h4 className="font-bold text-dark-wood mb-2">Wood Furniture Repair</h4>
                <p className="text-sm text-forest-green">Structural repairs for all wooden furniture including cabinets, tables, and chairs.</p>
              </Link>
              <Link href="/furniture-refinishing" className="bg-white-daisy p-6 rounded-lg hover:shadow-lg transition duration-300 block">
                <h4 className="font-bold text-dark-wood mb-2">Furniture Refinishing</h4>
                <p className="text-sm text-forest-green">Custom stains, paints, and protective finishes for any furniture piece.</p>
              </Link>
              <Link href="/antique-restoration" className="bg-white-daisy p-6 rounded-lg hover:shadow-lg transition duration-300 block">
                <h4 className="font-bold text-dark-wood mb-2">Antique Restoration</h4>
                <p className="text-sm text-forest-green">Specialised restoration for antique and period furniture with traditional methods.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Frequently Asked Questions About Cabinet Restoration
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-wood mb-3">{faq.name}</h3>
                  <p className="text-forest-green">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-dark-wood to-forest-green text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <DoorOpen className="h-16 w-16 text-golden-center mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Transform Your Cabinets Without the Cost of Replacement</h2>
            <p className="text-xl mb-8">
              Send us photos of your cabinets and tell us your vision. We will provide a detailed quote showing how much you can save compared to full replacement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/book-consultation"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/27793752588"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Photos
              </a>
              <Link
                href="/contact"
                className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-dark-wood mb-4">
              Cabinet Restoration Across the West Coast
            </h3>
            <p className="text-forest-green mb-4">
              Langebaan - Saldanha Bay - Vredenburg - Paternoster - Velddrif - Hopefield - Yzerfontein - Elands Bay
            </p>
            <p className="text-sm text-forest-green">
              On-site assessment available. Collection and delivery for free-standing cabinets.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
