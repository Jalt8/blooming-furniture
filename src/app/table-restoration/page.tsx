import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Table2, Check, Star, Phone, MessageCircle, Clock, Shield, Wrench, Paintbrush } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Table Restoration Services | Dining, Coffee & Side Tables | Blooming Furniture',
  description: 'Professional table restoration services on the West Coast. Restore dining tables, coffee tables, side tables & console tables. Fix water rings, scratches, wobbly legs & sun fade. Free quotes!',
  keywords: 'table restoration service, dining table restoration, coffee table repair, table refinishing, wooden table repair, table restoration West Coast, scratched table repair, wobbly table fix, table restoration South Africa',
  openGraph: {
    title: 'Table Restoration Services | Blooming Furniture',
    description: 'Expert restoration of dining tables, coffee tables, side tables & more. Fix damage, refinish surfaces, and strengthen structure.',
    url: 'https://bloomingfurniture.co.za/table-restoration',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/table-restoration',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Table Restoration",
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
  "description": "Professional table restoration services including dining tables, coffee tables, side tables, and console tables. Structural repair, surface refinishing, and complete restoration.",
  "offers": {
    "@type": "Offer",
    "priceRange": "R1,500 - R8,000"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to restore a dining table?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dining table restoration costs typically range from R3,000 to R8,000 depending on size, condition, and chosen finish. A 4-seater table with surface refinishing starts around R3,000-R4,500. Larger 6-8 seater tables with structural repairs can range from R5,000-R8,000. We provide free, detailed quotes after assessing your table."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fix a wobbly table without replacing the legs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. Wobbly tables are usually caused by loose joints rather than damaged legs. We disassemble the affected joints, clean out old glue, re-glue with high-strength adhesive, and clamp until cured. If legs are damaged, we can often repair rather than replace them. The result is a table that is rock-solid and stable for years to come."
      }
    },
    {
      "@type": "Question",
      "name": "How do you remove water rings and heat marks from a table?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "White water rings trapped in the finish can often be removed using gentle abrasion techniques, steam, or oil treatments without a full refinish. Dark water stains that have penetrated the wood require sanding back to bare wood, possible bleaching, and a complete refinish. We assess the depth of damage and recommend the least invasive approach that achieves great results."
      }
    },
    {
      "@type": "Question",
      "name": "What finish options are available for a restored table?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a wide range of finish options: natural clear coats that showcase the wood grain, custom stain colours from light oak to dark walnut, chalk paint for a farmhouse look, whitewash for coastal style, two-tone combinations, and hard-wearing polyurethane or marine-grade varnish for heavy-use tables. We bring colour samples so you can choose the perfect look."
      }
    }
  ]
};

const tableTypes = [
  {
    title: "Dining Tables",
    description: "From 2-seater kitchen tables to 12-seater farmhouse banquet tables. We restore all sizes and styles, including extending tables with leaf mechanisms.",
    icon: Table2,
    priceRange: "R3,000 - R8,000"
  },
  {
    title: "Coffee Tables",
    description: "Living room centrepieces restored to perfection. Fix ring marks, scratches, and worn finishes. Refinish in any colour or style to match your decor.",
    icon: Wrench,
    priceRange: "R1,500 - R3,500"
  },
  {
    title: "Side & Accent Tables",
    description: "Bedside tables, hall tables, lamp tables, and nesting tables. Small but important pieces that complete a room. Quick turnaround on most side table repairs.",
    icon: Wrench,
    priceRange: "R1,200 - R2,500"
  },
  {
    title: "Console Tables",
    description: "Entrance console tables, sofa tables, and narrow hall tables. Often the first piece guests see -- we make sure yours looks its best.",
    icon: Wrench,
    priceRange: "R2,000 - R4,000"
  },
  {
    title: "Outdoor Tables",
    description: "Patio dining tables, garden coffee tables, and balcony tables. We use marine-grade finishes and UV-resistant coatings for lasting protection on the West Coast.",
    icon: Wrench,
    priceRange: "R2,500 - R5,500"
  },
  {
    title: "Desks & Writing Tables",
    description: "Home office desks, writing bureaus, and study tables. We preserve leather inserts, repair drawers, and refinish surfaces for a fresh working environment.",
    icon: Wrench,
    priceRange: "R2,500 - R6,000"
  }
];

const commonProblems = [
  {
    problem: "Water Rings & Stains",
    description: "White or dark rings from cups, glasses, and vases. A common issue especially on unprotected dining tables.",
    solution: "Depending on depth, we use steam treatment, gentle abrasion, or full strip-and-refinish to remove marks completely.",
    link: "/water-damaged-furniture-repair"
  },
  {
    problem: "Scratches & Gouges",
    description: "Surface scratches from plates, keys, and daily use. Deep gouges from impacts or dragging objects across the surface.",
    solution: "Light scratches are buffed out during refinishing. Deep gouges are filled with matching wood filler, sanded level, then finished to blend invisibly.",
    link: "/scratched-furniture-repair"
  },
  {
    problem: "Wobbly Legs & Loose Joints",
    description: "Tables that rock, wobble, or feel unstable. Usually caused by dried-out glue in the joints or wood shrinkage over time.",
    solution: "We disassemble joints, clean and re-glue with high-strength adhesive, add reinforcement where needed, and clamp until solid.",
    link: "/wood-furniture-repair"
  },
  {
    problem: "Split & Cracked Wood",
    description: "Cracks along the grain, split table tops, or separating planks. Common in solid wood tables exposed to fluctuating humidity.",
    solution: "We stabilise cracks with butterfly keys or internal splines, fill with colour-matched epoxy, and refinish for an invisible repair."
  },
  {
    problem: "Sun Fade & UV Damage",
    description: "Uneven fading from sunlight, bleached patches, or discolouration on one side of the table near windows.",
    solution: "The old finish is stripped, the wood is evened out with stain or bleach as needed, and a UV-resistant finish is applied to prevent future fading."
  },
  {
    problem: "Peeling & Flaking Finish",
    description: "Old varnish or lacquer that has cracked, bubbled, or begun peeling away from the surface. Common on older tables.",
    solution: "We strip the failing finish completely, sand to bare wood, repair any underlying damage, and apply a fresh, durable finish of your choice."
  }
];

const refinishingOptions = [
  { name: "Natural Clear Coat", description: "Showcase the original wood grain with a clear protective finish", style: "Classic" },
  { name: "Custom Stain", description: "Light oak, walnut, mahogany, ebony, or any custom colour", style: "Versatile" },
  { name: "Chalk Paint", description: "Matte, vintage look in any colour. Great for farmhouse style", style: "Trending" },
  { name: "Whitewash / Lime Wash", description: "Coastal-inspired light finish that lets grain show through", style: "Coastal" },
  { name: "Two-Tone", description: "Different colours for base and top, such as white legs with dark top", style: "Modern" },
  { name: "Marine-Grade Varnish", description: "Ultra-durable finish for outdoor or high-traffic tables", style: "Durable" }
];

const process = [
  {
    step: 1,
    title: "Assessment & Quote",
    description: "We inspect your table in person or via photos. We identify all damage, discuss your vision for the finished piece, and provide a detailed quote with timeline."
  },
  {
    step: 2,
    title: "Collection",
    description: "We collect your table from your home. Our team handles large, heavy pieces carefully with protective padding and a suitable vehicle."
  },
  {
    step: 3,
    title: "Stripping & Repairs",
    description: "The old finish is removed. All structural issues are addressed: loose joints are re-glued, cracks are filled, wobbly legs are stabilised, and damaged wood is repaired or replaced."
  },
  {
    step: 4,
    title: "Sanding & Preparation",
    description: "The entire surface is sanded through progressive grits from coarse to ultra-fine. This creates a perfectly smooth foundation for the new finish."
  },
  {
    step: 5,
    title: "Finishing",
    description: "Your chosen finish is applied: stain, paint, whitewash, or clear coat. Multiple coats with sanding between each ensure a durable, professional result."
  },
  {
    step: 6,
    title: "Delivery & Aftercare",
    description: "Your restored table is delivered and placed in your home. We provide care instructions to keep it looking beautiful for years to come."
  }
];

export default function TableRestorationPage() {
  return (
    <>
      {/* Service Schema - static data only, no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {/* FAQ Schema - static data only, no user input */}
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
            { label: 'Table Restoration', href: '/table-restoration' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Table2 className="h-10 w-10 text-golden-center" />
                  <span className="text-golden-center font-semibold">Professional Table Restoration</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Table Restoration Services for Every Style
                </h1>
                <p className="text-xl mb-6">
                  Your table is the heart of your home -- where family gathers, meals are shared, and memories are made. Whether it is a treasured dining table, a favourite coffee table, or an heirloom side table, we restore it to its former glory.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Dining, coffee, side, console & outdoor tables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Structural repair & surface refinishing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Free quotes & collection available</span>
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
                  src="/images/portfolio/portfolio-13.jpeg"
                  alt="Restored dining table with beautiful finish"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white-daisy p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 fill-golden-center text-golden-center" />
                    <div>
                      <div className="font-bold text-dark-wood">All Table Types</div>
                      <div className="text-sm text-forest-green">Fully Restored</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Tables */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Types of Tables We Restore
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              From compact side tables to grand 12-seater dining tables, no table is too big or too small for our workshop.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tableTypes.map((table, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <table.icon className="h-12 w-12 text-forest-green mb-4" />
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{table.title}</h3>
                  <p className="text-forest-green mb-4">{table.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm font-semibold text-dark-wood">
                      Price range: <span className="text-forest-green">{table.priceRange}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Table Problems */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Common Table Problems We Fix
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Tables take more daily wear than almost any other piece of furniture. Here are the most common issues we see -- and how we solve them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonProblems.map((item, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{item.problem}</h3>
                  <p className="text-forest-green text-sm mb-3">{item.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm text-forest-green"><strong>Our solution:</strong> {item.solution}</p>
                  </div>
                  {item.link && (
                    <Link href={item.link} className="text-sm text-forest-green font-semibold underline hover:text-dark-wood mt-2 inline-block">
                      Learn more
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refinishing Options */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Table Refinishing Options
            </h2>
            <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
              Restoration does not mean returning to the original look. You can completely transform the style of your table to match your current decor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {refinishingOptions.map((option, idx) => (
                <div key={idx} className="bg-white-daisy/10 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-golden-center">{option.name}</h3>
                    <span className="text-xs bg-white-daisy/20 px-3 py-1 rounded-full">{option.style}</span>
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
              Our Table Restoration Process
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

        {/* Coastal Table Care Tips */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
                Coastal Table Care Tips
              </h2>
              <p className="text-center text-forest-green mb-8">
                Living on the West Coast is beautiful but tough on furniture. Here is how to keep your table looking great between professional services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white-daisy p-6 rounded-lg">
                  <h3 className="font-bold text-dark-wood mb-3">Daily Maintenance</h3>
                  <ul className="space-y-2 text-forest-green text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Wipe up spills immediately -- do not let liquids sit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Use coasters and placemats to prevent heat and water marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Dust regularly with a soft, slightly damp cloth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Avoid placing tables in direct sunlight near windows</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white-daisy p-6 rounded-lg">
                  <h3 className="font-bold text-dark-wood mb-3">Seasonal Protection</h3>
                  <ul className="space-y-2 text-forest-green text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Apply quality furniture wax or oil every 3-6 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Keep indoor humidity consistent to prevent wood movement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>In winter, protect from damp and condensation near windows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                      <span>Have your table professionally inspected and touched up yearly</span>
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
              Why Choose Blooming Furniture for Table Restoration?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Paintbrush className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Any Finish You Want</h3>
                <p className="text-forest-green">Natural, stained, painted, whitewashed, or two-tone -- we do it all</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Structural Strength</h3>
                <p className="text-forest-green">Your table comes back solid and stable, not just pretty</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">1-3 Week Turnaround</h3>
                <p className="text-forest-green">Most table restorations completed within three weeks</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">100% Satisfaction</h3>
                <p className="text-forest-green">We guarantee you will love the result or we make it right</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Frequently Asked Questions About Table Restoration
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-wood mb-3">{faq.name}</h3>
                  <p className="text-forest-green">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Table2 className="h-16 w-16 text-golden-center mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Give Your Table a Second Life</h2>
            <p className="text-xl mb-8">
              Send us photos of your table and tell us your vision. We will provide a detailed quote and help you choose the perfect finish.
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
              Table Restoration Across the West Coast
            </h3>
            <p className="text-forest-green mb-4">
              Langebaan - Saldanha Bay - Vredenburg - Paternoster - Velddrif - Hopefield - Yzerfontein - Elands Bay
            </p>
            <p className="text-sm text-forest-green">
              Free collection and delivery available for table restoration projects in the Langebaan area
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
