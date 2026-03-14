import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Is It Worth Restoring Old Furniture? A Honest Cost-Benefit Analysis | Blooming Furniture',
  description: 'Is it worth restoring old furniture? Honest cost-benefit analysis covering sentimental value, build quality, environmental benefits, and real cost comparison scenarios for South African homeowners.',
  keywords: 'is it worth restoring old furniture, furniture restoration worth it, restore vs buy new furniture, old furniture value, furniture restoration cost benefit, antique furniture restoration south africa',
  openGraph: {
    title: 'Is It Worth Restoring Old Furniture? A Honest Cost-Benefit Analysis',
    description: 'Is it worth restoring old furniture? Honest cost-benefit analysis covering sentimental value, build quality, environmental benefits, and real cost comparison scenarios.',
    url: 'https://bloomingfurniture.co.za/blog/is-it-worth-restoring-old-furniture',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'Is It Worth Restoring Old Furniture - Cost-Benefit Analysis',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/is-it-worth-restoring-old-furniture',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/is-it-worth-restoring-old-furniture",
  "headline": "Is It Worth Restoring Old Furniture? A Honest Cost-Benefit Analysis",
  "description": "Is it worth restoring old furniture? Honest cost-benefit analysis covering sentimental value, build quality, environmental benefits, and real cost comparison scenarios.",
  "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
  "datePublished": "2026-03-14",
  "dateModified": "2026-03-14",
  "author": {
    "@type": "Organization",
    "name": "Blooming Furniture - Restoration & Refurbishment"
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
    "@id": "https://bloomingfurniture.co.za/blog/is-it-worth-restoring-old-furniture"
  },
  "articleSection": "Decision Guides",
  "keywords": ["is it worth restoring old furniture", "furniture restoration", "cost benefit", "restore vs buy new", "antique furniture value"],
  "wordCount": 2200,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it cheaper to restore furniture or buy new?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, restoring quality furniture is 40-60% cheaper than buying a comparable new piece. A solid wood dining table that costs R15,000-R25,000 new can be restored for R2,500-R5,000. However, if the piece is made from cheap chipboard or MDF, buying new may be more cost-effective."
      }
    },
    {
      "@type": "Question",
      "name": "What furniture is NOT worth restoring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture not worth restoring includes flat-pack chipboard or MDF pieces, items with severe structural damage where the repair cost exceeds replacement value, mass-produced furniture with no sentimental value, and pieces with extensive woodworm damage that has compromised structural integrity."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my old furniture piece is valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for signs of quality: solid wood construction (check weight and grain), dovetail joints in drawers, quality hardware, maker's marks or labels, and signs of hand craftsmanship. Pieces made from Stinkwood, Yellowwood, Mahogany, or Teak are typically valuable. A professional restorer can help assess the value and restoration potential."
      }
    },
    {
      "@type": "Question",
      "name": "Does restoring antique furniture decrease its value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional restoration done correctly typically maintains or increases antique furniture value. The key is using period-appropriate techniques and materials. Avoid over-restoration or modernising an antique piece, as this can reduce its value. Always work with a specialist who understands antique restoration."
      }
    },
    {
      "@type": "Question",
      "name": "How long does restored furniture last compared to new furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Properly restored solid wood furniture can last another 50-100 years or more. In contrast, most modern mass-produced furniture made from MDF, chipboard, or veneer typically lasts only 5-15 years. The solid wood construction found in older furniture simply cannot be matched by budget modern alternatives."
      }
    }
  ]
};

export default function IsItWorthRestoringOldFurniture() {
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
            <span className="text-dark-wood">Is It Worth Restoring Old Furniture?</span>
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
                Decision Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              Is It Worth Restoring Old Furniture? A Honest Cost-Benefit Analysis
            </h1>

            <p className="text-xl text-forest-green mb-6">
              You have inherited a dining table from your grandmother. The finish is worn, one leg wobbles, and it has seen better days. Is it worth the effort and money to restore it, or should you simply buy something new? This comprehensive guide walks you through every factor you need to consider before making that decision.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 14, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>11 min read</span>
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
                <a href="#when-worth-it" className="block text-forest-green hover:text-dark-wood">1. When Restoration Makes Absolute Sense</a>
                <a href="#build-quality" className="block text-forest-green hover:text-dark-wood">2. Build Quality: Old Solid Wood vs Modern MDF</a>
                <a href="#sentimental-value" className="block text-forest-green hover:text-dark-wood">3. The Sentimental Value Factor</a>
                <a href="#environmental" className="block text-forest-green hover:text-dark-wood">4. Environmental Benefits of Restoration</a>
                <a href="#cost-scenarios" className="block text-forest-green hover:text-dark-wood">5. Real Cost Comparison Scenarios</a>
                <a href="#when-not-worth" className="block text-forest-green hover:text-dark-wood">6. When Restoration Is NOT Worth It</a>
                <a href="#decision-checklist" className="block text-forest-green hover:text-dark-wood">7. Your Decision Framework Checklist</a>
                <a href="#faq" className="block text-forest-green hover:text-dark-wood">8. Frequently Asked Questions</a>
                <a href="#contact" className="block text-forest-green hover:text-dark-wood">9. Get Expert Advice on Your Piece</a>
              </nav>
            </div>

            {/* Section 1: When Restoration Makes Sense */}
            <section id="when-worth-it" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                When Restoration Makes Absolute Sense
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  The short answer to &quot;is it worth restoring old furniture?&quot; is almost always <strong>yes</strong> &mdash; provided the piece was well-made to begin with. At <Link href="/services" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we have restored hundreds of pieces over the years, and the vast majority of clients are thrilled they chose restoration over replacement. But let us be honest: it is not the right choice in every situation.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Restoration makes the most sense when your piece meets one or more of these criteria: it is made from solid wood, it has sentimental or family significance, it was built with genuine craftsmanship, it is an antique or vintage piece with potential value, or it has a design quality that you simply cannot find in modern mass-produced furniture.
                </p>

                <p className="text-lg text-forest-green leading-relaxed">
                  The truth that many people overlook is that the cost of quality has changed dramatically. A solid Yellowwood or Stinkwood table that your grandparents bought decades ago was made from materials that are now extraordinarily expensive or altogether unavailable. Replacing that piece with something of equivalent quality would cost a fortune. Restoring it is almost always the smarter financial decision.
                </p>
              </div>
            </section>

            {/* Section 2: Build Quality Comparison */}
            <section id="build-quality" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Build Quality: Old Solid Wood vs Modern MDF
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Understanding the fundamental difference in build quality between older furniture and modern budget alternatives is crucial to making your decision. Here is a direct comparison that illustrates why older pieces are so often worth saving.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold text-dark-wood">Older Solid Wood Furniture</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Solid hardwood throughout &mdash; Stinkwood, Yellowwood, Mahogany, Teak, Oregon Pine</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Traditional joinery: mortise and tenon, dovetail joints</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lifespan: <strong>50&ndash;200+ years</strong> with proper care</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Can be sanded and refinished multiple times</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Gains character and often value with age</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-xl font-bold text-dark-wood">Modern Budget Furniture</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MDF, chipboard, or thin veneer over particleboard</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cam locks, dowels, and stapled joints</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lifespan: <strong>5&ndash;15 years</strong> with average use</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cannot be sanded &mdash; one scratch exposes the core</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Depreciates immediately and cannot be resold</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed mb-4">
                This quality gap is not just about aesthetics. Solid wood furniture can be repaired, re-glued, sanded, and refinished repeatedly throughout its life. Every scratch or dent in MDF or chipboard is essentially permanent. Once the thin veneer chips or the particleboard swells from moisture, the piece is destined for the landfill.
              </p>

              <p className="text-forest-green leading-relaxed">
                Consider this: a well-made solid wood dining table from the 1960s has already lasted 60+ years. With a professional restoration costing a fraction of a new table, it will easily last another 60 years. Can you say the same about a flat-pack table from a chain store?
              </p>
            </section>

            {/* Section 3: Sentimental Value */}
            <section id="sentimental-value" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                The Sentimental Value Factor
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Not everything can be measured in Rands and cents. Some pieces carry stories, memories, and emotional significance that no amount of money can replace. At Blooming Furniture, some of the most meaningful projects we work on involve family heirlooms.
              </p>

              <div className="bg-golden-center/20 border border-golden-center rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">When Sentiment Outweighs Cost</h3>
                <p className="text-forest-green leading-relaxed mb-4">
                  If you can answer &quot;yes&quot; to any of these questions, the sentimental value alone likely makes restoration worthwhile:
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Was this piece in your family for more than one generation?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Do you have specific memories associated with this furniture?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Would you regret parting with it in five years?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Would you like to pass this piece to your children or grandchildren?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Does this piece represent a significant life event (wedding gift, inheritance, first home)?</span>
                  </li>
                </ul>
              </div>

              <p className="text-forest-green leading-relaxed">
                We have seen clients light up when they see a beloved piece restored to its former glory. That grandmother&apos;s sideboard, that grandfather&apos;s desk, that wedding-gift dresser &mdash; these are not just objects. They are tangible connections to people and moments that matter. Professional restoration preserves both the physical piece and the stories it carries, passing them forward to the next generation in beautiful condition.
              </p>
            </section>

            {/* Section 4: Environmental Benefits */}
            <section id="environmental" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Environmental Benefits of Restoration
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                In an era of increasing environmental awareness, the sustainability argument for furniture restoration is compelling. Every piece you restore is one less item in a landfill and one less new piece that needs to be manufactured.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Zero Landfill Waste</h3>
                  <p className="text-sm text-forest-green">
                    South Africa&apos;s landfills receive tonnes of discarded furniture each year. A single restored piece eliminates approximately 50&ndash;150kg of waste. MDF and chipboard furniture is especially problematic in landfills because it releases formaldehyde as it decomposes.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Reduced Carbon Footprint</h3>
                  <p className="text-sm text-forest-green">
                    Manufacturing new furniture produces significant carbon emissions through logging, processing, transport, and retail. Restoration uses a fraction of the energy and materials, making it one of the greenest choices you can make for your home.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Preserving Irreplaceable Wood</h3>
                  <p className="text-sm text-forest-green">
                    Many older South African pieces are made from indigenous hardwoods like Stinkwood and Yellowwood that are now protected species. Restoring these pieces preserves this irreplaceable natural resource rather than demanding new timber from already-stressed forests.
                  </p>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed">
                When you choose restoration, you are making a meaningful environmental statement. You are saying that quality craftsmanship deserves to be preserved, that not everything needs to be disposable, and that the most sustainable furniture is the furniture that already exists.
              </p>
            </section>

            {/* Section 5: Cost Comparison Scenarios */}
            <section id="cost-scenarios" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Real Cost Comparison Scenarios
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Let us look at three common furniture restoration scenarios with real South African pricing. These comparisons use actual <Link href="/blog/furniture-restoration-cost-south-africa" className="text-dark-wood font-semibold hover:underline">restoration costs</Link> versus current retail prices from popular South African furniture retailers.
              </p>

              <div className="space-y-8 mb-8">
                {/* Scenario 1: Dining Table */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Scenario 1: Solid Wood Dining Table (6-Seater)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-forest-green text-white">
                          <th className="px-6 py-4 text-left font-semibold">Option</th>
                          <th className="px-6 py-4 text-left font-semibold">Cost (ZAR)</th>
                          <th className="px-6 py-4 text-left font-semibold">Expected Lifespan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 border-b border-gray-200">
                          <td className="px-6 py-4 text-dark-wood font-medium">Professional restoration (strip, sand, refinish)</td>
                          <td className="px-6 py-4 text-forest-green font-semibold">R2,500 &ndash; R5,000</td>
                          <td className="px-6 py-4 text-forest-green">50&ndash;100+ years</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                          <td className="px-6 py-4 text-dark-wood font-medium">New solid wood table (Coricraft / similar)</td>
                          <td className="px-6 py-4 text-forest-green">R15,000 &ndash; R35,000</td>
                          <td className="px-6 py-4 text-forest-green">30&ndash;50 years</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="px-6 py-4 text-dark-wood font-medium">New MDF/veneer table (Mr Price Home / @Home)</td>
                          <td className="px-6 py-4 text-forest-green">R4,000 &ndash; R10,000</td>
                          <td className="px-6 py-4 text-forest-green">5&ndash;10 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-forest-green mt-4 text-sm leading-relaxed">
                    <strong>Verdict:</strong> Restoration saves R12,500&ndash;R30,000 compared to buying equivalent quality. Even compared to a budget MDF table, restoration delivers vastly superior longevity and quality for a similar or lower investment.
                  </p>
                </div>

                {/* Scenario 2: Wardrobe */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Scenario 2: Large Solid Wood Wardrobe</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-forest-green text-white">
                          <th className="px-6 py-4 text-left font-semibold">Option</th>
                          <th className="px-6 py-4 text-left font-semibold">Cost (ZAR)</th>
                          <th className="px-6 py-4 text-left font-semibold">Expected Lifespan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 border-b border-gray-200">
                          <td className="px-6 py-4 text-dark-wood font-medium">Professional restoration (refinish + hardware)</td>
                          <td className="px-6 py-4 text-forest-green font-semibold">R3,500 &ndash; R7,000</td>
                          <td className="px-6 py-4 text-forest-green">50&ndash;100+ years</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                          <td className="px-6 py-4 text-dark-wood font-medium">New solid wood wardrobe (quality brand)</td>
                          <td className="px-6 py-4 text-forest-green">R20,000 &ndash; R45,000</td>
                          <td className="px-6 py-4 text-forest-green">25&ndash;40 years</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="px-6 py-4 text-dark-wood font-medium">New flat-pack wardrobe (budget retailer)</td>
                          <td className="px-6 py-4 text-forest-green">R5,000 &ndash; R12,000</td>
                          <td className="px-6 py-4 text-forest-green">3&ndash;8 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-forest-green mt-4 text-sm leading-relaxed">
                    <strong>Verdict:</strong> Restoration is the clear winner. The cost of a new solid wood wardrobe is staggering, and budget alternatives are notorious for sagging shelves and broken hinges within a few years.
                  </p>
                </div>

                {/* Scenario 3: Antique Chair */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Scenario 3: Antique Dining Chair (Set of 6)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-forest-green text-white">
                          <th className="px-6 py-4 text-left font-semibold">Option</th>
                          <th className="px-6 py-4 text-left font-semibold">Cost (ZAR)</th>
                          <th className="px-6 py-4 text-left font-semibold">Expected Lifespan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-green-50 border-b border-gray-200">
                          <td className="px-6 py-4 text-dark-wood font-medium">Professional <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">antique restoration</Link> (6 chairs)</td>
                          <td className="px-6 py-4 text-forest-green font-semibold">R4,000 &ndash; R12,000</td>
                          <td className="px-6 py-4 text-forest-green">50&ndash;100+ years</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                          <td className="px-6 py-4 text-dark-wood font-medium">New solid wood dining chairs (6x quality brand)</td>
                          <td className="px-6 py-4 text-forest-green">R18,000 &ndash; R42,000</td>
                          <td className="px-6 py-4 text-forest-green">20&ndash;40 years</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="px-6 py-4 text-dark-wood font-medium">New budget dining chairs (6x from chain store)</td>
                          <td className="px-6 py-4 text-forest-green">R6,000 &ndash; R15,000</td>
                          <td className="px-6 py-4 text-forest-green">3&ndash;7 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-forest-green mt-4 text-sm leading-relaxed">
                    <strong>Verdict:</strong> Antique chairs, once restored, increase in value over time. Budget alternatives will need replacing multiple times over the same period, costing far more in the long run.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: When NOT Worth Restoring */}
            <section id="when-not-worth" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                When Restoration Is NOT Worth It
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Honesty is important, and we would rather save you money than take on a project that does not make sense. Here are the situations where buying new is genuinely the better option.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Chipboard or MDF Construction</h3>
                      <p className="text-forest-green">
                        If the piece is made entirely from chipboard, MDF, or particleboard with a laminate or paper veneer, restoration is rarely worthwhile. These materials cannot be sanded or refinished effectively, and water damage is typically irreversible. The labour cost of attempting to restore a chipboard piece often exceeds the cost of buying a new one.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Severe Structural Failure</h3>
                      <p className="text-forest-green">
                        If a piece has broken into multiple major sections, has extensive rot throughout (not just surface), or has been so badly damaged by woodworm that the wood crumbles when touched, the cost of structural rebuilding may exceed the piece&apos;s value &mdash; unless it has significant antique or sentimental worth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Mass-Produced Items With No Attachment</h3>
                      <p className="text-forest-green">
                        A generic flat-pack bookshelf from ten years ago that holds no sentimental value is not worth professional restoration. These items were designed to be disposable, and your restoration budget is better spent on a quality piece that deserves the investment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Restoration Cost Exceeds Replacement Value</h3>
                      <p className="text-forest-green">
                        If a non-sentimental piece requires R8,000 in restoration but an equivalent quality new piece costs R6,000, the numbers do not work. This scenario is rare with solid wood furniture but can occur with heavily damaged mid-range pieces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Not Sure? Ask Us</h3>
                <p className="text-forest-green">
                  If you are unsure whether your piece is worth restoring, send us photos. At <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we will give you an honest assessment. If we think restoration is not worthwhile, we will tell you. We would rather earn your trust than take on a project that leaves you disappointed.
                </p>
              </div>
            </section>

            {/* Section 7: Decision Checklist */}
            <section id="decision-checklist" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Your Decision Framework Checklist
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Use this practical checklist to determine whether your specific piece is a good candidate for restoration. The more boxes you can tick, the stronger the case for restoration.
              </p>

              <div className="bg-daisy-cream p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-dark-wood mb-4">Restoration Checklist: Score Your Piece</h3>

                <div className="space-y-4">
                  <div className="border-b border-gray-300 pb-3">
                    <h4 className="font-bold text-dark-wood mb-2">Material Quality (High Priority)</h4>
                    <ul className="space-y-2 text-forest-green">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Is it made from solid wood? (Not MDF, chipboard, or laminate)</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Does it have traditional joinery? (Dovetails, mortise and tenon)</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Is the wood a quality species? (Yellowwood, Stinkwood, Oak, Mahogany, Teak)</span></li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-300 pb-3">
                    <h4 className="font-bold text-dark-wood mb-2">Structural Integrity</h4>
                    <ul className="space-y-2 text-forest-green">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Is the basic structure intact? (No major breaks or rot)</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Are problems mainly cosmetic? (Scratches, stains, worn finish)</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Can loose joints be re-glued rather than rebuilt?</span></li>
                    </ul>
                  </div>

                  <div className="border-b border-gray-300 pb-3">
                    <h4 className="font-bold text-dark-wood mb-2">Value Factors</h4>
                    <ul className="space-y-2 text-forest-green">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Does it have sentimental or family significance?</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Is it an antique or vintage piece with potential monetary value?</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Is the design unique or no longer available?</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-dark-wood mb-2">Financial Sense</h4>
                    <ul className="space-y-2 text-forest-green">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Would a comparable new piece cost more than restoration?</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Will the restored piece last significantly longer than a new alternative?</span></li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" /><span>Is the estimated restoration cost within your budget?</span></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-forest-green font-semibold">
                    <strong>Scoring:</strong> If you ticked 8 or more boxes, restoration is almost certainly worth it. 5&ndash;7 boxes: restoration is likely worthwhile but get a professional assessment. Under 5 boxes: buying new may be more practical, but consider the sentimental factor.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Is it cheaper to restore furniture or buy new?</h3>
                  <p className="text-forest-green leading-relaxed">
                    In most cases, restoring quality furniture is 40&ndash;60% cheaper than buying a comparable new piece. A solid wood dining table that costs R15,000&ndash;R25,000 new can be restored for R2,500&ndash;R5,000. However, if the piece is made from cheap chipboard or MDF, buying new may be more cost-effective. The key factor is the original build quality &mdash; solid wood furniture is almost always worth restoring. Check our <Link href="/blog/furniture-restoration-cost-south-africa" className="text-dark-wood font-semibold hover:underline">complete pricing guide</Link> for detailed cost breakdowns.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">What furniture is NOT worth restoring?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Furniture not worth restoring includes flat-pack chipboard or MDF pieces where the material cannot be sanded or refinished, items with severe structural damage throughout (not just cosmetic issues), mass-produced furniture with no sentimental value where the restoration cost exceeds replacement cost, and pieces with extensive woodworm damage that has compromised the structural integrity of the wood itself.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How do I know if my old furniture piece is valuable?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Look for telltale signs of quality construction: solid wood throughout (check the weight &mdash; solid wood is heavy), dovetail joints in drawers rather than staples or nails, quality brass or iron hardware, maker&apos;s marks or labels on the underside or inside drawers, and evidence of hand craftsmanship such as slightly irregular hand-cut joints. South African pieces made from Stinkwood, Yellowwood, Mahogany, or Teak are typically valuable. A professional restorer can help assess both the monetary and restoration potential of your piece &mdash; <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">book a free consultation</Link> to find out.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Does restoring antique furniture decrease its value?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Professional restoration done correctly typically maintains or increases <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">antique furniture</Link> value. The key is using period-appropriate techniques and materials that respect the original character of the piece. What can decrease value is over-restoration &mdash; stripping original patina unnecessarily, modernising the design, or using inappropriate materials. Always work with a restoration specialist who understands antique pieces and their unique requirements.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How long does restored furniture last compared to new furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Properly restored solid wood furniture can last another 50&ndash;100 years or more with reasonable care. In contrast, most modern mass-produced furniture made from MDF, chipboard, or thin veneer typically lasts only 5&ndash;15 years before joints fail, surfaces delaminate, or hinges break. The solid wood construction, traditional joinery, and quality materials found in older furniture simply cannot be matched by budget modern alternatives. When you factor in the cost per year of use, restoration is almost always the best value.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: CTA */}
            <section id="contact" className="bg-forest-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get Expert Advice on Your Piece</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Still unsure whether your furniture is worth restoring? Send us photos and we will give you an honest, no-obligation assessment. We will tell you the estimated cost, expected results, and whether we genuinely think it is worth the investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="https://wa.me/27836860706?text=Hi%20Blooming%20Furniture%2C%20I%20have%20a%20piece%20I%20am%20wondering%20about%20restoring.%20Can%20you%20advise?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300"
                >
                  WhatsApp Us Photos
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
                Blooming Furniture &mdash; Honest Advice, Premium Restoration on the West Coast, South Africa
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
