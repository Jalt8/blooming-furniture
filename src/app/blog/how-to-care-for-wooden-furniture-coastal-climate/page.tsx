import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Care for Wooden Furniture in a Coastal Climate: West Coast Guide | Blooming Furniture',
  description: 'Expert guide on caring for wooden furniture in South Africa coastal climate. Cover salt air damage, humidity, UV protection, seasonal care calendar, and room-by-room advice for West Coast homes.',
  keywords: 'wooden furniture care coastal climate, furniture care west coast, salt air furniture damage, coastal furniture protection, furniture care south africa, wood furniture humidity damage',
  openGraph: {
    title: 'How to Care for Wooden Furniture in a Coastal Climate: West Coast Guide',
    description: 'Expert guide on caring for wooden furniture in coastal South Africa. Salt air, humidity, UV damage, and seasonal care advice.',
    url: 'https://bloomingfurniture.co.za/blog/how-to-care-for-wooden-furniture-coastal-climate',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'How to Care for Wooden Furniture in Coastal Climate - West Coast Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/how-to-care-for-wooden-furniture-coastal-climate',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/how-to-care-for-wooden-furniture-coastal-climate",
  "headline": "How to Care for Wooden Furniture in a Coastal Climate: West Coast Guide",
  "description": "Expert guide on caring for wooden furniture in South Africa coastal climate. Salt air, humidity, UV protection, and seasonal care.",
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
    "@id": "https://bloomingfurniture.co.za/blog/how-to-care-for-wooden-furniture-coastal-climate"
  },
  "articleSection": "Care Guides",
  "keywords": ["wooden furniture care", "coastal climate", "west coast", "salt air damage", "furniture protection", "south africa"],
  "wordCount": 2500,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does salt air damage wooden furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt air damages wooden furniture in several ways: it corrodes metal hardware (hinges, handles, screws), accelerates the breakdown of protective finishes, draws moisture into wood causing swelling and warping, and creates a gritty residue that acts as an abrasive on surfaces. Furniture within 5km of the coast is most affected."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I polish or wax wooden furniture in a coastal area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In a coastal area, apply quality furniture wax or polish every 2-3 months rather than the standard 6 months recommended for inland areas. The wax layer acts as a sacrificial barrier against salt air and humidity. Use products like Briwax, beeswax polish, or Woodoc interior sealer for best protection."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best finish for wooden furniture in coastal South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marine-grade polyurethane or spar varnish provides the best protection for coastal conditions. For indoor furniture, a high-quality polyurethane (like Woodoc 10) with UV inhibitors offers excellent moisture and salt resistance. For outdoor furniture, marine-grade varnish or quality exterior oil like teak oil is essential. Avoid shellac and French polish in high-humidity coastal rooms."
      }
    },
    {
      "@type": "Question",
      "name": "Can the intense South African sun damage indoor furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, South African sunlight is significantly more intense than European or Northern Hemisphere sunlight. Direct sun through windows causes wood to bleach or darken unevenly, finishes to crack and peel, glue joints to dry and weaken, and upholstery to fade. Use UV-filtering window film, curtains, or blinds during peak sun hours (10am-3pm) to protect indoor furniture."
      }
    },
    {
      "@type": "Question",
      "name": "How do I protect outdoor wooden furniture on the West Coast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Protect outdoor wooden furniture by using hardwood species like teak, iroko, or treated pine. Apply marine-grade sealant or teak oil every 3-6 months. Use furniture covers when not in use. Elevate legs off direct ground contact using furniture glides. Rinse with fresh water weekly to remove salt deposits. Move furniture under cover during berg wind conditions."
      }
    }
  ]
};

export default function HowToCareForWoodenFurnitureCoastalClimate() {
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
            <span className="text-dark-wood">Wooden Furniture Care in Coastal Climate</span>
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
                Care Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              How to Care for Wooden Furniture in a Coastal Climate: West Coast Guide
            </h1>

            <p className="text-xl text-forest-green mb-6">
              Living on the West Coast of South Africa is a privilege &mdash; the sunsets, the ocean, the laid-back lifestyle. But the same salt air, intense UV, and humidity that define our beautiful coastline can quietly wreak havoc on your wooden furniture. This guide gives you a practical, season-by-season plan to keep your furniture looking its best in coastal conditions.
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
                <a href="#coastal-threats" className="block text-forest-green hover:text-dark-wood">1. The Four Coastal Threats to Your Furniture</a>
                <a href="#seasonal-calendar" className="block text-forest-green hover:text-dark-wood">2. Seasonal Care Calendar for the West Coast</a>
                <a href="#products" className="block text-forest-green hover:text-dark-wood">3. Recommended Products for the SA Market</a>
                <a href="#room-by-room" className="block text-forest-green hover:text-dark-wood">4. Room-by-Room Advice</a>
                <a href="#outdoor-furniture" className="block text-forest-green hover:text-dark-wood">5. Outdoor vs Indoor Furniture Care</a>
                <a href="#warning-signs" className="block text-forest-green hover:text-dark-wood">6. Warning Signs That Your Furniture Needs Attention</a>
                <a href="#professional-care" className="block text-forest-green hover:text-dark-wood">7. When to Call a Professional</a>
                <a href="#faq" className="block text-forest-green hover:text-dark-wood">8. Frequently Asked Questions</a>
                <a href="#contact" className="block text-forest-green hover:text-dark-wood">9. Get Professional Coastal Furniture Care</a>
              </nav>
            </div>

            {/* Section 1: Coastal Threats */}
            <section id="coastal-threats" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">The Four Coastal Threats to Your Furniture</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-forest-green leading-relaxed mb-6">Understanding what you are fighting against is the first step to winning. The West Coast of South Africa presents four distinct threats to wooden furniture, and each requires a specific response. At <Link href="/west-coast-furniture-repair" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we see the effects of these threats daily and have developed proven strategies to combat each one.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">1. Salt Air</h3>
                  <p className="text-forest-green mb-3">The West Coast breeze carries microscopic salt particles that settle on every surface. These particles are hygroscopic &mdash; they attract and hold moisture. The result is a constant low-level assault on your furniture.</p>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /><span>Corrodes metal hardware (hinges, handles, screws)</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /><span>Breaks down protective finishes prematurely</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /><span>Creates gritty residue that acts as an abrasive</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" /><span>Draws moisture into wood, accelerating decay</span></li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">2. Humidity Fluctuations</h3>
                  <p className="text-forest-green mb-3">The West Coast experiences significant humidity swings. Sea fog can push humidity above 90%, while summer berg winds can drop it below 20% in hours. This constant expansion and contraction stresses wood mercilessly.</p>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /><span>Wood swells in humid conditions, shrinks in dry</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /><span>Joints loosen as wood repeatedly moves</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /><span>Panel splits and cracks develop</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" /><span>Veneer lifts and bubbles</span></li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">3. Intense UV Sun Damage</h3>
                  <p className="text-forest-green mb-3">South Africa&apos;s UV index regularly reaches extreme levels. The West Coast, with its clear skies and reflective sand and ocean, amplifies this effect. Even furniture behind windows receives significant UV exposure.</p>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Bleaches or darkens wood unevenly</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Causes finishes to crack, peel, and yellow</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Dries out and weakens glue joints</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Fades upholstery and fabric elements</span></li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">4. Berg Winds</h3>
                  <p className="text-forest-green mb-3">The hot, dry berg winds that sweep down from the interior are uniquely damaging to furniture. These winds can drop humidity dramatically in just a few hours, creating extreme stress on wood.</p>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Rapid moisture loss causes sudden shrinkage</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Can crack panels overnight</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Carries fine sand that scratches surfaces</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Extreme heat can soften wax finishes</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Seasonal Care Calendar */}
            <section id="seasonal-calendar" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Seasonal Care Calendar for the West Coast</h2>
              <p className="text-forest-green mb-6 leading-relaxed">The West Coast climate is dramatically different season to season. Here is a practical care calendar that tells you exactly what to do and when.</p>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Spring (September &ndash; November): Preparation Season</h3>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Deep clean all furniture</strong> &mdash; wipe down with a damp cloth to remove winter salt buildup</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Apply fresh wax or polish</strong> to all wooden surfaces (Briwax or beeswax)</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Check all hardware</strong> for corrosion &mdash; replace or treat any affected hinges, handles, screws</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Prepare outdoor furniture</strong> &mdash; apply fresh oil or sealant before summer use begins</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Check UV protection</strong> &mdash; ensure curtains, blinds, or UV film are in place before the intense summer sun</span></li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Summer (December &ndash; February): Active Protection Season</h3>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Close curtains during peak sun</strong> (10am&ndash;3pm) to protect furniture from direct UV</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>During berg winds</strong>: close windows, bring outdoor furniture under cover, and wipe indoor surfaces</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Wipe outdoor furniture weekly</strong> with fresh water to remove salt deposits</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Re-apply outdoor oil</strong> if surfaces appear dry or water is no longer beading</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Use coasters and mats</strong> &mdash; cold drinks condensation is a major summer risk</span></li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Autumn (March &ndash; May): Maintenance Season</h3>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Apply a fresh coat of wax or polish</strong> to indoor furniture &mdash; the second of four annual applications</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Inspect joints</strong> &mdash; summer heat may have loosened glue joints; address any wobbles now</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Clean and store outdoor furniture</strong> or apply a heavy-duty protection coat for winter</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Check for UV damage</strong> &mdash; look for fading, bleaching, or cracking finish after summer</span></li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Winter (June &ndash; August): Protection Season</h3>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Manage humidity</strong> &mdash; winter rain increases indoor humidity; use a dehumidifier if needed</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Keep furniture away from heaters</strong> &mdash; direct heat dries wood rapidly and causes cracking</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Wipe down surfaces more frequently</strong> &mdash; higher humidity means more salt deposit activity</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Apply third annual wax</strong> to maintain the protective barrier through the wet season</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /><span><strong>Check stored outdoor furniture</strong> regularly for moisture, mould, or condensation under covers</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Recommended Products */}
            <section id="products" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Recommended Products for the South African Market</h2>
              <p className="text-forest-green mb-6 leading-relaxed">These products are readily available in South Africa and have proven effective in our West Coast restoration work.</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Product</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                      <th className="px-6 py-4 text-left font-semibold">Approx. Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Briwax (original or clear)</td>
                      <td className="px-6 py-4 text-forest-green">Indoor furniture protection and polishing</td>
                      <td className="px-6 py-4 text-forest-green">R200 &ndash; R400</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Woodoc 10 (interior sealer)</td>
                      <td className="px-6 py-4 text-forest-green">Heavy-duty indoor surface protection</td>
                      <td className="px-6 py-4 text-forest-green">R180 &ndash; R350</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Woodoc 50 (exterior sealer)</td>
                      <td className="px-6 py-4 text-forest-green">Outdoor and high-exposure furniture</td>
                      <td className="px-6 py-4 text-forest-green">R200 &ndash; R400</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Teak oil (Roko or similar)</td>
                      <td className="px-6 py-4 text-forest-green">Outdoor hardwood furniture (teak, iroko)</td>
                      <td className="px-6 py-4 text-forest-green">R150 &ndash; R300</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">WD-40 or marine-grade lubricant</td>
                      <td className="px-6 py-4 text-forest-green">Hardware protection (hinges, locks)</td>
                      <td className="px-6 py-4 text-forest-green">R80 &ndash; R150</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">UV-filtering window film</td>
                      <td className="px-6 py-4 text-forest-green">Protecting furniture from sun through windows</td>
                      <td className="px-6 py-4 text-forest-green">R300 &ndash; R800 per window</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-dark-wood font-medium">Microfibre cloths (quality)</td>
                      <td className="px-6 py-4 text-forest-green">Regular dusting and salt removal</td>
                      <td className="px-6 py-4 text-forest-green">R50 &ndash; R120 (pack)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Product Warning</h3>
                <p className="text-forest-green">Avoid silicone-based furniture sprays (common supermarket brands). While they create an instant shine, silicone builds up over time, traps moisture underneath, and makes future restoration or refinishing extremely difficult. Stick to natural wax or quality wood-specific products for long-term furniture health.</p>
              </div>
            </section>

            {/* Section 4: Room-by-Room */}
            <section id="room-by-room" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Room-by-Room Advice</h2>
              <p className="text-forest-green mb-6 leading-relaxed">Different rooms present different challenges for wooden furniture. Here is specific advice for each area of your coastal home.</p>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Living Room and Lounge</h3>
                  <p className="text-forest-green mb-3">Often the most sun-exposed room. Your dining table, sideboard, and display cabinet face the highest UV risk.</p>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Position furniture away from direct window sunlight paths</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Use sheer curtains to filter UV while maintaining natural light</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Rotate ornaments and table items regularly to prevent uneven fading</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Wax exposed surfaces every 2&ndash;3 months</span></li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Kitchen</h3>
                  <p className="text-forest-green mb-3">Steam, heat, and spills make the kitchen the most hostile indoor environment for wood.</p>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Use a rangehood or extractor fan to reduce steam and humidity</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Wipe up spills immediately &mdash; never let water sit on wood surfaces</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Apply a more durable finish (polyurethane rather than wax) to kitchen furniture</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Use trivets and cutting boards to protect surfaces from heat and knife marks</span></li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Bedroom</h3>
                  <p className="text-forest-green mb-3">Generally the most furniture-friendly room, but coastal humidity still poses risks.</p>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Allow air circulation around wardrobes &mdash; leave a 5cm gap from walls</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Use moisture absorbers inside wardrobes during winter</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Protect bedside tables with coasters for water glasses and lamps</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Keep drawers and doors slightly ajar on humid days to allow ventilation</span></li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">Bathroom</h3>
                  <p className="text-forest-green mb-3">High humidity, water splashes, and temperature swings make this room very challenging for wood.</p>
                  <ul className="space-y-2 text-forest-green">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Use marine-grade or polyurethane finishes on any wooden furniture in bathrooms</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Ensure good ventilation &mdash; open windows or use an extractor fan after showers</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Avoid placing wooden furniture directly against tiled walls where condensation collects</span></li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Consider teak or other moisture-resistant woods for bathroom vanities</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Outdoor vs Indoor */}
            <section id="outdoor-furniture" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Outdoor vs Indoor Furniture Care</h2>
              <p className="text-forest-green mb-6 leading-relaxed">Outdoor furniture on the West Coast faces the full brunt of coastal conditions. The care requirements are significantly more intensive than indoor furniture.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Indoor Furniture Care Routine</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Dust with damp microfibre cloth</span><span className="text-dark-wood font-semibold">Weekly</span></div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Apply furniture wax or polish</span><span className="text-dark-wood font-semibold">Every 2&ndash;3 months</span></div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Check hardware for corrosion</span><span className="text-dark-wood font-semibold">Every 6 months</span></div>
                    <div className="flex justify-between items-center"><span className="text-forest-green">Professional inspection</span><span className="text-dark-wood font-semibold">Annually</span></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Outdoor Furniture Care Routine</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Rinse with fresh water</span><span className="text-dark-wood font-semibold">Weekly</span></div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Deep clean with mild soap</span><span className="text-dark-wood font-semibold">Monthly</span></div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Apply teak oil or exterior sealer</span><span className="text-dark-wood font-semibold">Every 3&ndash;6 months</span></div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2"><span className="text-forest-green">Check for rot, mould, or damage</span><span className="text-dark-wood font-semibold">Monthly</span></div>
                    <div className="flex justify-between items-center"><span className="text-forest-green">Full sand and re-seal</span><span className="text-dark-wood font-semibold">Annually</span></div>
                  </div>
                </div>
              </div>
              <div className="bg-daisy-cream p-6 rounded-lg">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Outdoor Furniture Best Practices</h3>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Choose hardwoods: teak, iroko, or properly treated pine for outdoor use</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Use stainless steel or marine-grade brass hardware only</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Elevate furniture legs using furniture glides to prevent ground-contact moisture</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Invest in quality covers for when furniture is not in use</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" /><span>Bring cushions and fabric elements indoors overnight</span></li>
                </ul>
              </div>
            </section>

            {/* Section 6: Warning Signs */}
            <section id="warning-signs" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Warning Signs That Your Furniture Needs Attention</h2>
              <p className="text-forest-green mb-6 leading-relaxed">Catching problems early prevents expensive repairs later. Here are the signs that your furniture is being affected by coastal conditions and needs immediate care.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-bold text-dark-wood mb-2">Urgent: Act Immediately</h3>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Green or white corrosion on metal hardware</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Visible cracks in wood panels</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Mould or mildew on any surface</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Loose joints or wobbling structure</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Peeling or flaking finish</span></li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-bold text-dark-wood mb-2">Preventive: Address Soon</h3>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Dull or hazy finish that used to be glossy</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Wood feels rough or raised-grain despite being finished</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>White salt deposits on surfaces</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Drawers sticking or not closing properly</span></li>
                    <li className="flex items-start"><AlertTriangle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" /><span>Uneven colour or fading in sun-exposed areas</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: When to Call Professional */}
            <section id="professional-care" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">When to Call a Professional</h2>
              <p className="text-forest-green mb-6 leading-relaxed">Regular maintenance can be done at home, but some situations require professional intervention. At <Link href="/furniture-restoration-langebaan" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we specialise in coastal furniture restoration and see these issues regularly.</p>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Significant salt or water damage</h3>
                  <p className="text-forest-green">When salt has penetrated the finish and is affecting the wood underneath, or when water damage has caused swelling, warping, or white marks, professional <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">salt damage repair</Link> is needed to properly strip, treat, and refinish the piece.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Sun fading and UV damage</h3>
                  <p className="text-forest-green">Severe UV damage causes finishes to crack, wood to bleach unevenly, and joints to weaken. <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">Sun faded furniture restoration</Link> involves stripping the damaged finish, evening out the colour, and applying a UV-resistant protective finish.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Structural issues from humidity cycling</h3>
                  <p className="text-forest-green">If joints have loosened, panels have cracked, or drawers no longer function properly due to humidity-related wood movement, professional <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">restoration</Link> can rebuild joints, fill cracks, and apply moisture-stabilising treatments.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Complete finish failure</h3>
                  <p className="text-forest-green">When the protective finish has failed across a large area, the underlying wood is exposed to accelerated damage. A full strip and refinish with coastal-appropriate products is the most effective solution. Attempting to patch a failing finish typically creates an uneven result.</p>
                </div>
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How does salt air damage wooden furniture?</h3>
                  <p className="text-forest-green leading-relaxed"><Link href="/blog/sea-salt-furniture-damage-west-coast" className="text-dark-wood font-semibold hover:underline">Salt air damages wooden furniture</Link> in several ways: it corrodes metal hardware including hinges, handles, and screws; it accelerates the breakdown of protective finishes exposing the bare wood; it draws moisture into wood causing swelling and warping; and it creates a gritty residue that acts as an abrasive, gradually wearing through surfaces when objects are moved across them. Furniture within 5km of the coastline is most significantly affected, but salt particles can travel much further during strong onshore winds.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How often should I polish or wax wooden furniture in a coastal area?</h3>
                  <p className="text-forest-green leading-relaxed">In a coastal area, apply quality furniture wax or polish every 2&ndash;3 months rather than the standard 6 months recommended for inland areas. The wax layer acts as a sacrificial barrier against salt air and humidity. Products like Briwax, beeswax polish, or Woodoc interior sealer provide excellent protection. This means approximately four applications per year, ideally aligned with our seasonal care calendar: spring (September), summer (December), autumn (March), and winter (June).</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">What is the best finish for wooden furniture in coastal South Africa?</h3>
                  <p className="text-forest-green leading-relaxed">For indoor furniture, a high-quality polyurethane (like Woodoc 10) with UV inhibitors offers excellent moisture and salt resistance. For outdoor furniture, marine-grade varnish or quality exterior oil like teak oil is essential. For high-humidity rooms like kitchens and bathrooms, marine-grade polyurethane provides the best protection. Avoid shellac and French polish in high-humidity coastal rooms, as these finishes are moisture-sensitive. At <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we select finishes specifically suited to each piece&apos;s coastal exposure.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Can the intense South African sun damage indoor furniture?</h3>
                  <p className="text-forest-green leading-relaxed">Yes, South African sunlight is significantly more intense than European or Northern Hemisphere sunlight, with UV index values regularly reaching extreme levels. Direct sun through windows causes wood to bleach or darken unevenly, finishes to crack and peel, glue joints to dry and weaken, and any upholstery or fabric to fade rapidly. Use UV-filtering window film, sheer curtains, or blinds during peak sun hours (10am&ndash;3pm) to protect indoor furniture. Even indirect reflected light from the ocean or sand can contribute to <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">UV damage</Link>.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How do I protect outdoor wooden furniture on the West Coast?</h3>
                  <p className="text-forest-green leading-relaxed">Protect outdoor wooden furniture by choosing hardwood species like teak, iroko, or properly treated pine. Apply marine-grade sealant or teak oil every 3&ndash;6 months. Use quality furniture covers when the furniture is not in use. Elevate furniture legs off direct ground contact using stainless steel furniture glides. Rinse with fresh water weekly to remove salt deposits. During berg wind conditions, move furniture under cover or into shade to prevent rapid drying and cracking. Use only stainless steel or marine-grade brass hardware to prevent corrosion.</p>
                </div>
              </div>
            </section>

            {/* Section 9: CTA */}
            <section id="contact" className="bg-forest-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Get Professional Coastal Furniture Care</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">Is your furniture showing signs of coastal damage? Whether it needs a protective refinish, salt damage repair, or a complete restoration, we specialise in bringing coastal furniture back to life. Send us photos for a free assessment.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="https://wa.me/27836860706?text=Hi%20Blooming%20Furniture%2C%20I%20have%20furniture%20with%20coastal%20damage%20that%20needs%20attention.%20Can%20you%20help?"
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
              <p className="text-sm opacity-75">Blooming Furniture &mdash; Coastal Furniture Specialists on the West Coast, South Africa</p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
