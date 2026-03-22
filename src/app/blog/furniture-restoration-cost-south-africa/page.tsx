import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Restoration Cost in South Africa: Complete 2026 Price Guide',
  description: 'How much does furniture restoration cost in South Africa? Complete pricing guide for wood repair, refinishing, antique restoration and more. Get a free quote from Blooming Furniture.',
  keywords: 'furniture restoration cost south africa, furniture repair prices, antique restoration cost, furniture refinishing price, wood repair cost south africa, furniture restoration quotes',
  openGraph: {
    title: 'Furniture Restoration Cost in South Africa: Complete 2026 Price Guide',
    description: 'How much does furniture restoration cost in South Africa? Complete pricing guide for wood repair, refinishing, antique restoration and more. Get a free quote from Blooming Furniture.',
    url: 'https://bloomingfurniture.co.za/blog/furniture-restoration-cost-south-africa',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'Furniture Restoration Cost in South Africa - Complete Price Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/furniture-restoration-cost-south-africa',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/furniture-restoration-cost-south-africa",
  "headline": "Furniture Restoration Cost in South Africa: Complete 2026 Price Guide",
  "description": "How much does furniture restoration cost in South Africa? Complete pricing guide for wood repair, refinishing, antique restoration and more.",
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
    "@id": "https://bloomingfurniture.co.za/blog/furniture-restoration-cost-south-africa"
  },
  "articleSection": "Pricing Guides",
  "keywords": ["furniture restoration cost", "south africa", "pricing guide", "wood repair", "antique restoration", "furniture refinishing"],
  "wordCount": 2800,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to restore a dining table in South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restoring a dining table in South Africa typically costs between R1,500 and R8,000 depending on the size, condition, and desired finish. A basic strip, sand, and re-polish for a standard 6-seater table starts around R2,500, while a full antique restoration with French polishing can reach R8,000 or more."
      }
    },
    {
      "@type": "Question",
      "name": "Is antique furniture restoration worth the cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antique furniture restoration is almost always worth the cost. A quality antique piece increases in value after professional restoration, and the sentimental value is irreplaceable. Restoration typically costs 40-60% less than purchasing a comparable new solid wood piece, and you preserve craftsmanship that simply cannot be replicated today."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free quotes for furniture restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Blooming Furniture offers completely free, no-obligation quotes. Simply send us photos of your piece via WhatsApp or email, describe its condition and what you would like done, and we will provide a detailed estimate within 24-48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture refinishing cost in South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture refinishing in South Africa ranges from R1,000 to R5,000 for most pieces. A chalk paint or decorative finish starts around R1,000, while a full strip, sand, and re-polish costs between R1,500 and R5,000. French polishing, the most premium finish, ranges from R2,000 to R8,000."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest furniture restoration option?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most affordable restoration option is basic furniture repair, which covers joint tightening, leg repair, and minor structural fixes starting from R500. If your piece is structurally sound but needs cosmetic attention, a light sand and re-seal can start from around R800."
      }
    },
    {
      "@type": "Question",
      "name": "Does the condition of my furniture affect the restoration price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, condition is one of the biggest factors affecting restoration cost. A piece with minor wear and a stable structure will cost significantly less than one with woodworm damage, broken joints, missing veneer, or water damage. Severe damage can add 50-100% to the base restoration cost."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge for collection and delivery of furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Collection and delivery is available for R200 to R800 depending on distance. Local collection within the Langebaan and Saldanha Bay area starts from R200. For locations further along the West Coast or into Cape Town, costs increase based on distance. We can also arrange third-party couriers for long-distance projects."
      }
    },
    {
      "@type": "Question",
      "name": "How long does furniture restoration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Restoration timelines range from 1-3 days for basic repairs to 4 weeks or more for complex antique restoration. Most standard refinishing projects take 3-7 days. French polishing requires 1-2 weeks due to multiple coats and drying time. We always provide a timeline estimate with your quote."
      }
    }
  ]
};

export default function FurnitureRestorationCostSouthAfrica() {
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
            <span className="text-dark-wood">Furniture Restoration Cost South Africa</span>
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
                Pricing Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              Furniture Restoration Cost in South Africa: Complete 2026 Price Guide
            </h1>

            <p className="text-xl text-forest-green mb-6">
              How much does furniture restoration really cost? Whether you have a family heirloom that needs careful attention or a flea-market find waiting for a transformation, understanding pricing helps you plan your budget and avoid surprises. This complete guide breaks down every cost you can expect in 2026.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 14, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>14 min read</span>
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
                <a href="#introduction" className="block text-forest-green hover:text-dark-wood">1. Why Furniture Restoration Costs Vary</a>
                <a href="#pricing-table" className="block text-forest-green hover:text-dark-wood">2. Average Costs by Service Type</a>
                <a href="#factors" className="block text-forest-green hover:text-dark-wood">3. Factors That Affect Pricing</a>
                <a href="#restore-vs-buy" className="block text-forest-green hover:text-dark-wood">4. Cost Comparison: Restore vs Buy New</a>
                <a href="#coastal-climate" className="block text-forest-green hover:text-dark-wood">5. Coastal Climate Considerations</a>
                <a href="#get-a-quote" className="block text-forest-green hover:text-dark-wood">6. How to Get an Accurate Quote</a>
                <a href="#faq" className="block text-forest-green hover:text-dark-wood">7. Frequently Asked Questions</a>
                <a href="#contact" className="block text-forest-green hover:text-dark-wood">8. Get Your Free Quote Today</a>
              </nav>
            </div>

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Why Furniture Restoration Costs Vary
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  One of the most common questions we receive at <Link href="/services" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link> is: &quot;How much will it cost to restore my furniture?&quot; It is an important question, and the honest answer is that it depends on several factors. Unlike buying a mass-produced item off a shelf, furniture restoration is a skilled craft where every piece tells a different story.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  A simple chair that needs its joints re-glued will cost a fraction of what a full antique sideboard restoration demands. The type of wood, the current condition, the finish you want, and even your location in South Africa all play a role in the final price. What remains consistent, however, is that professional restoration almost always delivers better value than replacing quality furniture with cheaper modern alternatives.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  At Blooming Furniture, based on the beautiful West Coast near Langebaan, we have restored hundreds of pieces ranging from treasured family antiques to quirky market finds. Over the years, we have developed a deep understanding of what drives costs and, more importantly, how to deliver exceptional results at fair prices. This guide shares that knowledge so you can make informed decisions about your furniture.
                </p>

                <p className="text-lg text-forest-green leading-relaxed">
                  All prices listed in this guide are in South African Rand (ZAR) and reflect 2026 market rates. Actual costs may vary based on your specific piece and requirements. We always recommend getting a personalised quote, and at Blooming Furniture, quotes are always free.
                </p>
              </div>
            </section>

            {/* Section 2: Pricing Table */}
            <section id="pricing-table" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Average Furniture Restoration Costs by Service Type
              </h2>

              <p className="text-forest-green mb-6">
                The table below gives you a realistic overview of what different restoration services cost in South Africa. These are average ranges based on typical residential furniture pieces. Unusually large, rare, or severely damaged items may fall outside these ranges.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range (ZAR)</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Basic furniture repair (joints, legs)</td>
                      <td className="px-6 py-4 text-forest-green">R500 &ndash; R2,000</td>
                      <td className="px-6 py-4 text-forest-green">1&ndash;3 days</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Chair re-riempie (leather strip weaving)</td>
                      <td className="px-6 py-4 text-forest-green">R800 &ndash; R2,500</td>
                      <td className="px-6 py-4 text-forest-green">2&ndash;5 days</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Full strip, sand &amp; re-polish</td>
                      <td className="px-6 py-4 text-forest-green">R1,500 &ndash; R5,000</td>
                      <td className="px-6 py-4 text-forest-green">3&ndash;7 days</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Chalk paint / re-deco finish</td>
                      <td className="px-6 py-4 text-forest-green">R1,000 &ndash; R4,000</td>
                      <td className="px-6 py-4 text-forest-green">2&ndash;5 days</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">
                        <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">Antique restoration</Link>
                      </td>
                      <td className="px-6 py-4 text-forest-green">R3,000 &ndash; R15,000+</td>
                      <td className="px-6 py-4 text-forest-green">1&ndash;4 weeks</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">French polishing</td>
                      <td className="px-6 py-4 text-forest-green">R2,000 &ndash; R8,000</td>
                      <td className="px-6 py-4 text-forest-green">1&ndash;2 weeks</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Complete furniture redesign</td>
                      <td className="px-6 py-4 text-forest-green">R2,500 &ndash; R10,000+</td>
                      <td className="px-6 py-4 text-forest-green">1&ndash;3 weeks</td>
                    </tr>
                    <tr className="bg-daisy-cream/50">
                      <td className="px-6 py-4 text-dark-wood font-medium">Collection &amp; delivery</td>
                      <td className="px-6 py-4 text-forest-green">R200 &ndash; R800</td>
                      <td className="px-6 py-4 text-forest-green">Depends on distance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Important Note About Pricing</h3>
                <p className="text-forest-green">
                  These prices are indicative ranges for standard residential furniture. Oversized pieces (such as large farmhouse dining tables or armoires), pieces requiring rare materials, or items with extensive damage may exceed the upper range. The best way to get an accurate price is to <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">request a free consultation</Link> with photos of your piece.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-dark-wood mb-4">Understanding Each Service</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">Basic Furniture Repair (R500 &ndash; R2,000)</h4>
                  <p className="text-forest-green leading-relaxed">
                    This covers structural fixes such as re-gluing loose joints, repairing or replacing broken legs, fixing drawer runners, and tightening wobbly frames. It is the most affordable restoration service and can dramatically extend the life of a piece that is still cosmetically acceptable. At <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, basic repairs are our bread and butter, and we treat every joint with the same care whether the piece is a kitchen chair or a Cape Dutch antique.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">Chair Re-Riempie (R800 &ndash; R2,500)</h4>
                  <p className="text-forest-green leading-relaxed">
                    A uniquely South African craft, riempie weaving involves replacing the traditional leather strip seats and backs found on Cape Dutch and farmhouse chairs. The cost depends on the chair size, the pattern complexity, and whether genuine leather or synthetic riempie is used. Genuine leather riempie costs more but ages beautifully and lasts for decades.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">Full Strip, Sand &amp; Re-Polish (R1,500 &ndash; R5,000)</h4>
                  <p className="text-forest-green leading-relaxed">
                    This is the most popular <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">furniture refinishing</Link> service. It involves chemically stripping the old finish, hand-sanding to a smooth surface, and applying a new protective finish. The cost varies based on the piece size, the number of surfaces requiring attention, and the chosen finish type. A small side table sits at the lower end, while a large dining table or wardrobe approaches the upper range.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">Chalk Paint / Re-Deco Finish (R1,000 &ndash; R4,000)</h4>
                  <p className="text-forest-green leading-relaxed">
                    Chalk paint finishes have surged in popularity for their matte, vintage aesthetic. This service typically includes preparation, priming, two to three coats of chalk paint, and a protective wax or sealant. The decorative possibilities are vast, from single-colour farmhouse white to distressed multi-layer effects. Costs increase with complex techniques like colour layering, stencilling, or decoupage accents.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">Antique Restoration (R3,000 &ndash; R15,000+)</h4>
                  <p className="text-forest-green leading-relaxed">
                    <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">Antique restoration</Link> demands the highest level of skill and patience. It involves preserving the original character while repairing damage accumulated over decades or centuries. This may include veneer repair, marquetry restoration, structural rebuilding, hardware restoration, and period-appropriate finishing. The wide price range reflects the enormous variation in antique pieces, from a Victorian side chair to a full Edwardian bedroom suite.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">French Polishing (R2,000 &ndash; R8,000)</h4>
                  <p className="text-forest-green leading-relaxed">
                    French polishing is the gold standard for fine wood finishes. This traditional technique involves building up dozens of thin shellac layers by hand using a rubber pad. The result is a deep, luminous finish that modern spray finishes simply cannot match. It is time-intensive, which is reflected in the cost, but the results on quality hardwoods are truly stunning.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-dark-wood mb-2">Complete Furniture Redesign (R2,500 &ndash; R10,000+)</h4>
                  <p className="text-forest-green leading-relaxed">
                    Sometimes a piece needs more than restoration. It needs reinvention. A complete redesign might involve converting a dresser into a bathroom vanity, transforming a wardrobe into a bar cabinet, or reimagining a dated piece into something contemporary. The cost depends on the scope of modification, additional materials required, and the complexity of the new design.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Factors That Affect Pricing */}
            <section id="factors" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Factors That Affect Furniture Restoration Pricing
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Understanding what drives restoration costs helps you anticipate your budget more accurately. Here are the six primary factors that influence the final price of any restoration project.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">1. Size &amp; Complexity</h3>
                  <p className="text-forest-green">
                    Larger pieces require more materials, more labour hours, and often more complex logistics. A bedside table might take a day to refinish, while a full dining table with eight chairs could take two weeks. Pieces with intricate carvings, turned legs, or complex joinery also take longer because each detail requires individual attention.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">2. Current Condition</h3>
                  <p className="text-forest-green">
                    A well-maintained piece needing a cosmetic refresh costs far less than one with structural damage, woodworm, water damage, or missing components. Severe damage can double the restoration cost because it requires additional repair work before any finishing can begin. Sending photos helps us assess condition accurately before quoting.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">3. Wood Type</h3>
                  <p className="text-forest-green">
                    Different wood species respond differently to restoration techniques. Hardwoods like Stinkwood, Mahogany, and Teak are durable but require specific approaches. Softwoods like Pine are easier to work but dent more readily. Exotic or indigenous woods may require specialised knowledge and products, adding to the cost.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">4. Desired Finish</h3>
                  <p className="text-forest-green">
                    The finish you choose has a significant impact on cost. A simple oil or wax finish is the most affordable. Spray lacquer or polyurethane falls in the mid-range. French polishing sits at the premium end due to the extensive hand labour involved. Decorative finishes vary widely based on complexity.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">5. Hardware &amp; Materials</h3>
                  <p className="text-forest-green">
                    If your piece needs replacement hardware, new hinges, drawer handles, locks, or glass panels, these material costs are added to the labour price. Period-appropriate hardware for antiques can be particularly expensive, especially if it needs to be custom-made or sourced from specialist suppliers.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">6. Location &amp; Logistics</h3>
                  <p className="text-forest-green">
                    If you are local to the <Link href="/furniture-restoration-langebaan" className="text-dark-wood font-semibold hover:underline">Langebaan and West Coast area</Link>, collection and delivery costs are minimal. For clients in Cape Town or further afield, transport costs increase. Some large or fragile pieces require special handling, which also affects the price.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Restore vs Buy New */}
            <section id="restore-vs-buy" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Cost Comparison: Restore vs Buy New
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                One of the smartest financial decisions you can make is choosing restoration over replacement. Here is why the numbers consistently favour restoration for quality furniture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-bold text-dark-wood">Restoration</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full dining table refinish: <strong>R2,500 &ndash; R5,000</strong></span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Solid wood &mdash; built to last another generation</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unique character and history preserved</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Environmentally responsible &mdash; zero landfill waste</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Customisable finish to match your decor</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-xl font-bold text-dark-wood">Buying New</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comparable solid wood table: <strong>R8,000 &ndash; R25,000+</strong></span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Budget options are often MDF or veneer &mdash; shorter lifespan</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mass-produced with no unique character</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Old piece goes to landfill</span>
                    </li>
                    <li className="flex items-start text-forest-green">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Limited finish options at lower price points</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-golden-center/20 border border-golden-center rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">The Bottom Line</h3>
                <p className="text-forest-green leading-relaxed">
                  Professional furniture restoration typically costs <strong>40&ndash;60% less</strong> than purchasing a new piece of comparable quality. A solid wood dining table that costs R15,000&ndash;R25,000 new can be beautifully restored for R2,500&ndash;R5,000. You save money, you keep a piece with character and history, and you make an environmentally responsible choice. For antique furniture, restoration can actually <em>increase</em> the piece&apos;s value, making it an investment rather than an expense.
                </p>
              </div>
            </section>

            {/* Section 5: Coastal Climate Considerations */}
            <section id="coastal-climate" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Coastal Climate Considerations: West Coast Pricing Factors
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Living on the West Coast of South Africa comes with unique challenges for furniture. At <Link href="/furniture-restoration-langebaan" className="text-dark-wood font-semibold hover:underline">Blooming Furniture in Langebaan</Link>, we see the effects of coastal living on furniture every day. Understanding these factors helps explain why some restoration work in coastal areas may cost more than inland equivalents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-dark-wood mb-2">Salt Air Damage</h3>
                  <p className="text-sm text-forest-green">
                    Salt particles corrode metal hardware and accelerate finish deterioration. Furniture near the coast often needs hardware replacement and more intensive surface preparation, adding R500&ndash;R2,000 to a typical restoration.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="font-bold text-dark-wood mb-2">UV Sun Damage</h3>
                  <p className="text-sm text-forest-green">
                    The intense West Coast sun causes wood to bleach, finishes to crack, and glue joints to weaken. UV-damaged pieces require deeper sanding and UV-resistant finishes, which may add R300&ndash;R1,000 to the cost.
                  </p>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="font-bold text-dark-wood mb-2">Humidity Cycling</h3>
                  <p className="text-sm text-forest-green">
                    Coastal humidity causes wood to expand and contract repeatedly, loosening joints and cracking panels. Restoration must include moisture-stabilising treatments and flexible finishes that accommodate this movement.
                  </p>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed mb-4">
                The good news is that when restoration is done properly with coastal conditions in mind, your furniture will be better protected than it was originally. At Blooming Furniture, every coastal restoration includes protective treatments specifically chosen for the West Coast environment. We use marine-grade hardware where appropriate, UV-resistant finishes, and moisture-barrier treatments that extend the life of the restoration significantly.
              </p>

              <p className="text-forest-green leading-relaxed">
                If you are unsure whether your furniture has coastal damage, look for telltale signs: white salt deposits on surfaces, green or white corrosion on metal fittings, wood that feels rough or raised-grain despite being finished, and joints that have become loose over a short period. These are all indicators that salt air and humidity are actively affecting your furniture and that restoration should include coastal-specific treatments.
              </p>
            </section>

            {/* Section 6: How to Get an Accurate Quote */}
            <section id="get-a-quote" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                How to Get an Accurate Furniture Restoration Quote
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Getting a fair and accurate quote does not have to be complicated. Follow these steps to receive a detailed estimate from Blooming Furniture or any professional restorer.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-wood mb-2">Take Clear Photos</h3>
                    <p className="text-forest-green leading-relaxed">
                      Photograph the entire piece from multiple angles, plus close-ups of any damage, hardware, and the underside. Good lighting makes a huge difference. We need at least 4&ndash;6 photos: front, back, top, any damaged areas, and a shot showing overall size (place a common object nearby for scale).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-wood mb-2">Describe the Condition</h3>
                    <p className="text-forest-green leading-relaxed">
                      Tell us about any specific issues: wobbly legs, water stains, peeling finish, missing parts, or areas of concern. Mention how long you have had the piece and any previous repairs. The more detail you provide, the more accurate our initial estimate will be.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-wood mb-2">Share Your Vision</h3>
                    <p className="text-forest-green leading-relaxed">
                      Let us know what you want the end result to look like. Do you want the piece restored to its original condition? Would you prefer a modern update with chalk paint? Are you looking for a natural, low-sheen finish or a high-gloss French polish? Reference photos from Pinterest or Instagram are always helpful.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-wood mb-2">Receive Your Free Assessment</h3>
                    <p className="text-forest-green leading-relaxed">
                      Once we have your photos and description, we provide a detailed estimate within 24&ndash;48 hours. This includes a breakdown of recommended services, the estimated cost range, and the expected timeframe. There is absolutely no obligation, and the quote is always free.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-daisy-cream p-6 rounded-lg">
                <h3 className="text-lg font-bold text-dark-wood mb-3">The Easiest Way to Get a Quote</h3>
                <p className="text-forest-green mb-4">
                  Most of our clients find it easiest to send photos via WhatsApp. Simply save our number, send your photos with a brief description, and we will respond with an estimate. You can also email us or <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">book a consultation</Link> through our website.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/27836860706?text=Hi%20Blooming%20Furniture%2C%20I%20would%20like%20a%20quote%20for%20furniture%20restoration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    WhatsApp Us for a Quote
                  </a>
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center justify-center bg-forest-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How much does it cost to restore a dining table in South Africa?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Restoring a dining table typically costs between R1,500 and R8,000 depending on the size, condition, and desired finish. A basic strip, sand, and re-polish for a standard 6-seater table starts around R2,500, while a full antique restoration with French polishing can reach R8,000 or more. Factors like the wood type, extent of damage, and whether chairs are included all affect the final price.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Is antique furniture restoration worth the cost?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Antique furniture restoration is almost always worth the investment. Quality antique pieces were built with craftsmanship and materials that are rare or unavailable today. Professional restoration can actually increase the monetary value of antiques, and the sentimental value is priceless. Restoration typically costs 40&ndash;60% less than purchasing a comparable new solid wood piece, making it both financially and emotionally rewarding. Learn more about our <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">antique restoration services</Link>.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Do you offer free quotes for furniture restoration?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, Blooming Furniture offers completely free, no-obligation quotes. Simply send us photos of your piece via WhatsApp or email, describe its condition and what you would like done, and we will provide a detailed estimate within 24&ndash;48 hours. You can also <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">book a free consultation</Link> through our website. There is never any pressure or obligation.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How much does furniture refinishing cost in South Africa?</h3>
                  <p className="text-forest-green leading-relaxed">
                    <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">Furniture refinishing</Link> in South Africa ranges from R1,000 to R5,000 for most standard pieces. A chalk paint or decorative finish starts around R1,000 for a small item, while a full strip, sand, and re-polish costs between R1,500 and R5,000. French polishing, the most premium hand-applied finish, ranges from R2,000 to R8,000 depending on the piece size and complexity.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">What is the cheapest furniture restoration option?</h3>
                  <p className="text-forest-green leading-relaxed">
                    The most affordable restoration option is basic <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">furniture repair</Link>, which covers joint tightening, leg repair, and minor structural fixes starting from R500. If your piece is structurally sound but needs cosmetic refreshing, a light sand and re-seal can start from around R800. For budget-conscious projects, we always discuss the most cost-effective approach during the quoting process.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Does the condition of my furniture affect the restoration price?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, condition is one of the biggest factors affecting restoration cost. A piece with minor wear and a stable structure costs significantly less than one with woodworm damage, broken joints, missing veneer, or extensive water damage. Severe structural damage can add 50&ndash;100% to the base restoration cost because additional repair work is required before any finishing can begin. This is why we always ask for detailed photos during the quoting process.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Do you charge for collection and delivery of furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Collection and delivery is available for R200 to R800 depending on distance. Local collection within the <Link href="/furniture-restoration-langebaan" className="text-dark-wood font-semibold hover:underline">Langebaan</Link> and Saldanha Bay area starts from R200. For locations further along the West Coast or towards Cape Town, costs increase based on distance. We can also arrange third-party couriers for clients outside the West Coast region.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How long does furniture restoration take?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Restoration timelines range from 1&ndash;3 days for basic repairs to 4 weeks or more for complex antique restoration. Most standard refinishing projects take 3&ndash;7 days. French polishing requires 1&ndash;2 weeks due to multiple coats and drying time between each layer. During peak seasons (especially around December and January on the West Coast), timelines may extend slightly. We always provide a clear timeline estimate with your quote so you can plan accordingly.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: CTA */}
            <section id="contact" className="bg-forest-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get Your Free Furniture Restoration Quote Today</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Ready to give your furniture a new lease on life? Whether it is a treasured antique or a beloved family piece, we would love to help. Send us photos and we will provide a free, detailed estimate within 24&ndash;48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="https://wa.me/27836860706?text=Hi%20Blooming%20Furniture%2C%20I%20would%20like%20a%20quote%20for%20furniture%20restoration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300"
                >
                  WhatsApp: 083 686 0706
                </a>
                <Link
                  href="/book-consultation"
                  className="bg-golden-center text-dark-wood py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors duration-300"
                >
                  View All Services
                </Link>
              </div>
              <p className="text-sm opacity-75">
                Blooming Furniture &mdash; Professional Furniture Restoration &amp; Refurbishment on the West Coast, South Africa
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
