import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Restoration vs Buying New: Which Saves You More Money in South Africa?',
  description: 'Furniture restoration vs buying new in South Africa: direct price comparison with real pricing from @Home, Coricraft, and Mr Price Home. Quality, environmental impact, and resale value compared.',
  keywords: 'furniture restoration vs buying new, restore or buy new furniture, furniture restoration south africa, furniture cost comparison, restore vs replace furniture, new furniture prices south africa',
  openGraph: {
    title: 'Furniture Restoration vs Buying New: Which Saves You More Money in South Africa?',
    description: 'Direct price comparison: furniture restoration vs buying new in South Africa. Real pricing, quality comparison, and honest advice.',
    url: 'https://bloomingfurniture.co.za/blog/furniture-restoration-vs-buying-new',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'Furniture Restoration vs Buying New in South Africa',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/furniture-restoration-vs-buying-new',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/furniture-restoration-vs-buying-new",
  "headline": "Furniture Restoration vs Buying New: Which Saves You More Money in South Africa?",
  "description": "Direct price comparison of furniture restoration versus buying new in South Africa with real pricing from popular retailers.",
  "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
  "datePublished": "2026-03-14",
  "dateModified": "2026-03-14",
  "author": {
    "@type": "Person",
    "name": "Wendy Erasmus",
    "url": "https://bloomingfurniture.co.za/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bloomingfurniture.co.za/blooming-furniture.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bloomingfurniture.co.za/blog/furniture-restoration-vs-buying-new"
  },
  "articleSection": "Comparison Guides",
  "keywords": ["furniture restoration vs buying new", "cost comparison", "south africa furniture", "restore or replace", "furniture value"],
  "wordCount": 2300,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is furniture restoration cheaper than buying new in South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in most cases furniture restoration costs 40-60% less than buying a new piece of comparable quality. A solid wood dining table restoration costs R2,500-R5,000, while a new solid wood table from a South African retailer costs R15,000-R35,000. Budget MDF alternatives are cheaper upfront but last only 5-10 years versus 50+ years for restored solid wood."
      }
    },
    {
      "@type": "Question",
      "name": "How does restored furniture quality compare to new furniture from South African stores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restored solid wood furniture is typically far superior in quality to new furniture at similar price points. Most affordable new furniture (under R10,000) is made from MDF, chipboard, or thin veneer, while furniture worth restoring is usually solid hardwood with traditional joinery. After professional restoration, these pieces outperform new furniture in durability, appearance, and longevity."
      }
    },
    {
      "@type": "Question",
      "name": "How long does restored furniture last compared to new furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professionally restored solid wood furniture typically lasts another 50-100 years. New budget furniture from chain stores (MDF/chipboard) lasts 5-15 years on average. New solid wood furniture from premium retailers can last 30-50 years but costs significantly more than restoration."
      }
    },
    {
      "@type": "Question",
      "name": "Does restored furniture have better resale value than new furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, restored solid wood and antique furniture holds its value far better than new mass-produced furniture. Antique pieces can actually appreciate in value after professional restoration. New budget furniture typically loses 60-80% of its value immediately and has virtually no resale value after a few years."
      }
    },
    {
      "@type": "Question",
      "name": "What is the environmental difference between restoring and buying new furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restoration is significantly more environmentally friendly. It prevents 50-150kg of waste per piece from reaching landfill, uses a fraction of the energy and materials compared to manufacturing, and preserves existing timber including potentially irreplaceable indigenous hardwoods. New furniture production contributes to deforestation, manufacturing emissions, and transport pollution."
      }
    }
  ]
};

export default function FurnitureRestorationVsBuyingNew() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <article className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-forest-green">
            <Link href="/" className="hover:text-dark-wood">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-dark-wood">Blog</Link>
            <span>/</span>
            <span className="text-dark-wood">Furniture Restoration vs Buying New</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-forest-green hover:text-dark-wood transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>

            <div className="mb-6">
              <span className="px-3 py-1 bg-golden-center text-dark-wood text-sm font-semibold rounded-full">
                Comparison Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              Furniture Restoration vs Buying New: Which Saves You More Money in South Africa?
            </h1>

            <p className="text-xl text-forest-green mb-6">
              When that dining table starts looking tired or the wardrobe doors no longer close properly, you face a choice that every South African homeowner encounters: restore what you have or buy something new? This guide lays out the real numbers, compares quality honestly, and helps you make the smartest financial decision.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 14, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>13 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Blooming Furniture Experts</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">

            {/* Table of Contents */}
            <div className="bg-daisy-cream p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-dark-wood mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <a href="#price-comparison" className="block text-forest-green hover:text-dark-wood">1. The Price Comparison: Real South African Numbers</a>
                <a href="#quality-comparison" className="block text-forest-green hover:text-dark-wood">2. Quality Comparison: Solid Wood vs Chipboard</a>
                <a href="#timeline" className="block text-forest-green hover:text-dark-wood">3. Timeline Comparison: How Long Does Each Take?</a>
                <a href="#environmental-impact" className="block text-forest-green hover:text-dark-wood">4. Environmental Impact</a>
                <a href="#resale-value" className="block text-forest-green hover:text-dark-wood">5. Resale Value Comparison</a>
                <a href="#cost-per-year" className="block text-forest-green hover:text-dark-wood">6. The True Cost: Price Per Year of Use</a>
                <a href="#when-buy-new" className="block text-forest-green hover:text-dark-wood">7. When Buying New Actually Makes Sense</a>
                <a href="#faq" className="block text-forest-green hover:text-dark-wood">8. Frequently Asked Questions</a>
                <a href="#contact" className="block text-forest-green hover:text-dark-wood">9. Get a Free Restoration Quote</a>
              </nav>
            </div>

            {/* Section 1: Price Comparison */}
            <section id="price-comparison" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                The Price Comparison: Real South African Numbers
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Let us start with what matters most to most people: the money. We have compared professional <Link href="/blog/furniture-restoration-cost-south-africa" className="text-dark-wood font-semibold hover:underline">furniture restoration costs</Link> against current 2026 retail prices from popular South African furniture stores. These are real numbers, not theoretical estimates.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  The comparison includes three tiers: professional restoration of an existing solid wood piece, buying a new solid wood equivalent from a premium retailer, and buying a new budget alternative (typically MDF or chipboard with veneer).
                </p>
              </div>

              {/* Main comparison table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-4 py-4 text-left font-semibold">Furniture Piece</th>
                      <th className="px-4 py-4 text-left font-semibold">Restoration Cost</th>
                      <th className="px-4 py-4 text-left font-semibold">New (Coricraft / Wetherlys)</th>
                      <th className="px-4 py-4 text-left font-semibold">New (@Home / Mr Price Home)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-4 py-4 text-dark-wood font-medium">6-seater dining table</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R2,500 &ndash; R5,000</td>
                      <td className="px-4 py-4 text-forest-green">R15,000 &ndash; R35,000</td>
                      <td className="px-4 py-4 text-forest-green">R4,000 &ndash; R10,000</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-4 py-4 text-dark-wood font-medium">Large wardrobe</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R3,500 &ndash; R7,000</td>
                      <td className="px-4 py-4 text-forest-green">R20,000 &ndash; R45,000</td>
                      <td className="px-4 py-4 text-forest-green">R5,000 &ndash; R15,000</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-4 py-4 text-dark-wood font-medium">Sideboard / buffet</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R2,000 &ndash; R5,000</td>
                      <td className="px-4 py-4 text-forest-green">R12,000 &ndash; R30,000</td>
                      <td className="px-4 py-4 text-forest-green">R3,500 &ndash; R9,000</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-4 py-4 text-dark-wood font-medium">Set of 6 dining chairs</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R3,000 &ndash; R9,000</td>
                      <td className="px-4 py-4 text-forest-green">R18,000 &ndash; R42,000</td>
                      <td className="px-4 py-4 text-forest-green">R6,000 &ndash; R15,000</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-4 py-4 text-dark-wood font-medium">Chest of drawers</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R1,500 &ndash; R4,000</td>
                      <td className="px-4 py-4 text-forest-green">R8,000 &ndash; R22,000</td>
                      <td className="px-4 py-4 text-forest-green">R2,500 &ndash; R7,000</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-4 py-4 text-dark-wood font-medium">Bedside tables (pair)</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R1,000 &ndash; R3,000</td>
                      <td className="px-4 py-4 text-forest-green">R6,000 &ndash; R16,000</td>
                      <td className="px-4 py-4 text-forest-green">R1,500 &ndash; R5,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 text-dark-wood font-medium">Antique display cabinet</td>
                      <td className="px-4 py-4 text-green-700 font-semibold">R4,000 &ndash; R12,000</td>
                      <td className="px-4 py-4 text-forest-green">R25,000 &ndash; R60,000+</td>
                      <td className="px-4 py-4 text-forest-green">N/A (not comparable)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-golden-center/20 border border-golden-center rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">The Bottom Line on Price</h3>
                <p className="text-forest-green leading-relaxed">
                  Restoration consistently costs <strong>40&ndash;70% less</strong> than buying a new piece of equivalent solid wood quality. Even compared to budget MDF alternatives, restoration is often comparable in price but delivers vastly superior quality and longevity. The savings become even more dramatic with larger pieces and antiques, where new equivalents simply do not exist at affordable prices.
                </p>
              </div>
            </section>

            {/* Section 2: Quality Comparison */}
            <section id="quality-comparison" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Quality Comparison: Solid Wood vs Chipboard
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Price is only half the story. What you get for your money differs dramatically between restoration and buying new. Here is an honest quality comparison that most furniture retailers would prefer you did not see.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-dark-wood">Restored Furniture</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Solid hardwood construction</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Traditional mortise &amp; tenon joinery</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Hand-applied professional finish</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unique character and patina</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Can be refinished again in future</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Lifespan: 50&ndash;100+ years</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-4">New Premium (R15k+)</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Solid wood or quality veneer</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Modern joinery (dowels, cam locks)</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Factory-applied finish</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Contemporary design</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Some can be refinished</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Lifespan: 25&ndash;50 years</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-dark-wood">New Budget (Under R10k)</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MDF, chipboard, or melamine</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cam locks and staples</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Paper or foil veneer finish</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identical to thousands of others</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cannot be repaired or refinished</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Lifespan: 3&ndash;10 years</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed mb-4">
                The quality difference is not subtle. Older solid wood furniture was built to last generations. The wood is denser, the joints are stronger, and the craftsmanship is evident in every detail. Most budget modern furniture is engineered to hit a price point, not to endure. When that MDF sideboard gets a water ring, the particle board swells and the damage is permanent. When a solid wood sideboard gets the same damage, it can be sanded out and refinished like new.
              </p>

              <p className="text-forest-green leading-relaxed">
                At <Link href="/services" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we regularly restore pieces that have already been through one or two previous restorations over their lifetime. This is the beauty of solid wood &mdash; it is a renewable surface that can be brought back to life repeatedly. Try doing that with a flat-pack table.
              </p>
            </section>

            {/* Section 3: Timeline */}
            <section id="timeline" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Timeline Comparison: How Long Does Each Take?
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Time is a practical consideration. Here is what to expect for each option.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Furniture Restoration Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">Basic repair (joints, legs)</span>
                      <span className="text-dark-wood font-semibold">1&ndash;3 days</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">Full strip, sand &amp; refinish</span>
                      <span className="text-dark-wood font-semibold">3&ndash;7 days</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">Chalk paint / decorative finish</span>
                      <span className="text-dark-wood font-semibold">2&ndash;5 days</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">French polishing</span>
                      <span className="text-dark-wood font-semibold">1&ndash;2 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-forest-green"><Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">Antique restoration</Link></span>
                      <span className="text-dark-wood font-semibold">1&ndash;4 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Buying New Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">In-stock budget furniture</span>
                      <span className="text-dark-wood font-semibold">Same day &ndash; 1 week</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">In-stock premium furniture</span>
                      <span className="text-dark-wood font-semibold">1&ndash;2 weeks delivery</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">Made-to-order (local)</span>
                      <span className="text-dark-wood font-semibold">4&ndash;8 weeks</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-forest-green">Imported furniture (on order)</span>
                      <span className="text-dark-wood font-semibold">8&ndash;16 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-forest-green">Assembly time (flat-pack)</span>
                      <span className="text-dark-wood font-semibold">2&ndash;6 hours per piece</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed">
                Surprisingly, restoration and buying new often take similar amounts of time. Budget flat-pack furniture is fast to acquire but requires assembly. Quality new furniture frequently involves waiting weeks for delivery. Restoration fits comfortably within these timelines, and you get the piece back better than new without the hassle of shopping, selecting, and disposing of the old piece.
              </p>
            </section>

            {/* Section 4: Environmental Impact */}
            <section id="environmental-impact" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Environmental Impact
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                The environmental argument for restoration is overwhelmingly strong. If sustainability matters to you, the choice is clear.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Restoration Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Zero furniture waste</strong> to landfill</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Minimal new materials</strong> required (finish, hardware)</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>No manufacturing emissions</strong></span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Preserves irreplaceable indigenous timber</strong></span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Local craftsman, supporting local economy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Buying New Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>50&ndash;150kg of waste</strong> from discarded old piece</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Full manufacturing resources</strong> for new piece</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Transport emissions</strong> (often imported from overseas)</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Contributes to deforestation</strong></span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MDF/chipboard releases formaldehyde in landfill</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed">
                Many older South African furniture pieces are made from now-protected indigenous species like Stinkwood and Yellowwood. Restoring these pieces is not just environmentally responsible &mdash; it is an act of preservation. These woods can never be replaced, and every piece that avoids the landfill keeps this irreplaceable craftsmanship alive.
              </p>
            </section>

            {/* Section 5: Resale Value */}
            <section id="resale-value" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Resale Value Comparison
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Furniture is often overlooked as an asset, but resale value differs dramatically between restored and new pieces.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Value After 5 Years</th>
                      <th className="px-6 py-4 text-left font-semibold">Value After 20 Years</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Restored antique furniture</td>
                      <td className="px-6 py-4 text-green-700 font-semibold">100&ndash;150% of restoration cost</td>
                      <td className="px-6 py-4 text-green-700 font-semibold">150&ndash;300%+ (appreciating asset)</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Restored solid wood (non-antique)</td>
                      <td className="px-6 py-4 text-forest-green">70&ndash;90% of restoration cost</td>
                      <td className="px-6 py-4 text-forest-green">60&ndash;80% (holds value well)</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">New premium solid wood</td>
                      <td className="px-6 py-4 text-forest-green">40&ndash;60% of purchase price</td>
                      <td className="px-6 py-4 text-forest-green">30&ndash;50%</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 text-dark-wood font-medium">New budget (MDF/chipboard)</td>
                      <td className="px-6 py-4 text-red-600 font-semibold">10&ndash;20% of purchase price</td>
                      <td className="px-6 py-4 text-red-600 font-semibold">R0 (likely in landfill)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-golden-center/20 border border-golden-center rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Investment Perspective</h3>
                <p className="text-forest-green leading-relaxed">
                  Restored antique furniture is one of the few home purchases that can actually <em>increase</em> in value. A beautifully restored Stinkwood sideboard or Cape Dutch dining table becomes more valuable with each passing year. In contrast, that R8,000 flat-pack wardrobe from a chain store is worth virtually nothing the moment you assemble it.
                </p>
              </div>
            </section>

            {/* Section 6: Cost Per Year */}
            <section id="cost-per-year" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                The True Cost: Price Per Year of Use
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                The smartest way to compare furniture costs is not the purchase price &mdash; it is the cost per year of use. This metric reveals the true value of your investment.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Option</th>
                      <th className="px-6 py-4 text-left font-semibold">Cost</th>
                      <th className="px-6 py-4 text-left font-semibold">Lifespan</th>
                      <th className="px-6 py-4 text-left font-semibold">Cost Per Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Restored dining table</td>
                      <td className="px-6 py-4 text-forest-green">R4,000</td>
                      <td className="px-6 py-4 text-forest-green">50+ years</td>
                      <td className="px-6 py-4 text-green-700 font-bold">R80/year</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">New premium table (Coricraft)</td>
                      <td className="px-6 py-4 text-forest-green">R22,000</td>
                      <td className="px-6 py-4 text-forest-green">35 years</td>
                      <td className="px-6 py-4 text-dark-wood font-bold">R629/year</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 text-dark-wood font-medium">New budget table (@Home)</td>
                      <td className="px-6 py-4 text-forest-green">R6,000</td>
                      <td className="px-6 py-4 text-forest-green">7 years</td>
                      <td className="px-6 py-4 text-red-600 font-bold">R857/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-forest-green leading-relaxed">
                The numbers do not lie. A restored dining table costs roughly <strong>R80 per year</strong> of use. A budget new table costs over <strong>R850 per year</strong> &mdash; more than ten times as much. Even a premium new table costs nearly eight times more per year than restoration. When you frame the decision in these terms, restoration is not just the smart choice &mdash; it is the overwhelmingly obvious choice.
              </p>
            </section>

            {/* Section 7: When Buying New Makes Sense */}
            <section id="when-buy-new" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                When Buying New Actually Makes Sense
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                We are a restoration business, but we believe in honesty. There are situations where buying new is the better choice.
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Your current piece is chipboard or MDF</h3>
                  <p className="text-forest-green">If the furniture you have is already made from chipboard, MDF, or laminate, restoration is rarely worthwhile. These materials cannot be sanded, refinished, or structurally repaired effectively. Your budget is better spent on a quality new piece or a second-hand solid wood piece that can then be restored.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">You need a specific size or configuration</h3>
                  <p className="text-forest-green">If your space requires very specific dimensions that your current piece does not meet, buying or commissioning new furniture may be necessary. That said, many pieces can be adapted &mdash; <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link> has converted tables, wardrobes, and cabinets to fit new spaces.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Severe structural damage with no sentimental value</h3>
                  <p className="text-forest-green">If the piece has extensive rot, catastrophic structural failure, or severe woodworm throughout, and it has no sentimental or antique value, the cost of structural rebuilding may exceed the cost of a quality new piece.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">You do not have any furniture to restore</h3>
                  <p className="text-forest-green">If you are furnishing a new home from scratch, you will obviously need to purchase furniture. Our recommendation: look for quality second-hand solid wood pieces on Facebook Marketplace or at antique dealers, then have them professionally restored. This gives you the best of both worlds.</p>
                </div>
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Is furniture restoration cheaper than buying new in South Africa?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, in most cases furniture restoration costs 40&ndash;60% less than buying a new piece of comparable quality. A solid wood dining table restoration costs R2,500&ndash;R5,000, while a new solid wood table from a South African retailer costs R15,000&ndash;R35,000. Budget MDF alternatives are cheaper upfront but last only 5&ndash;10 years versus 50+ years for restored solid wood, making restoration far cheaper per year of use. See our <Link href="/blog/furniture-restoration-cost-south-africa" className="text-dark-wood font-semibold hover:underline">detailed pricing guide</Link> for more information.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How does restored furniture quality compare to new furniture from South African stores?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Restored solid wood furniture is typically far superior in quality to new furniture at similar price points. Most affordable new furniture (under R10,000) is made from MDF, chipboard, or thin veneer with cam lock assembly. Furniture worth restoring is usually solid hardwood with traditional mortise and tenon or dovetail joinery. After professional <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">refinishing</Link>, these pieces outperform new furniture in durability, appearance, and longevity.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How long does restored furniture last compared to new furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Professionally restored solid wood furniture typically lasts another 50&ndash;100 years with reasonable care. New budget furniture from chain stores (MDF/chipboard construction) lasts 5&ndash;15 years on average before joints fail, surfaces delaminate, or hardware breaks. New solid wood furniture from premium retailers can last 30&ndash;50 years but costs significantly more than restoration.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Does restored furniture have better resale value than new furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, restored solid wood and <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">antique furniture</Link> holds its value far better than new mass-produced furniture. Antique pieces can actually appreciate in value after professional restoration. New budget furniture typically loses 60&ndash;80% of its value immediately upon purchase and has virtually no resale value after a few years of use.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">What is the environmental difference between restoring and buying new furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Restoration is significantly more environmentally friendly. It prevents 50&ndash;150kg of waste per piece from reaching landfill, uses a fraction of the energy and raw materials compared to manufacturing, and preserves existing timber including potentially irreplaceable indigenous South African hardwoods. New furniture production contributes to deforestation, generates manufacturing emissions, and involves significant transport pollution &mdash; especially for imported pieces.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: CTA */}
            <section id="contact" className="bg-forest-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get a Free Restoration Quote</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Before you spend thousands on new furniture, find out what restoration would cost. Send us photos of your piece and we will provide a free, no-obligation quote within 24&ndash;48 hours. You might be surprised at how affordable the better option is.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="https://wa.me/27836860706?text=Hi%20Blooming%20Furniture%2C%20I%20am%20considering%20restoring%20furniture%20instead%20of%20buying%20new.%20Can%20you%20quote?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300"
                >
                  WhatsApp Us for a Quote
                </a>
                <Link
                  href="/book-consultation"
                  className="bg-golden-center text-dark-wood py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
              <p className="text-sm opacity-75">
                Blooming Furniture &mdash; Professional Restoration &amp; Refurbishment on the West Coast, South Africa
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
