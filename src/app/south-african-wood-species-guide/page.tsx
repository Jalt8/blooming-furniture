import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, TreePine, Shield, Search, Sun, HelpCircle, Phone, MessageCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'South African Wood Species Guide: Identifying & Caring for Local Woods | Blooming Furniture',
  description: 'Complete guide to South African wood species used in furniture: Stinkwood, Yellowwood, Blackwood, Kiaat, Teak & more. Learn identification, care, and restoration tips.',
  keywords: 'south african wood types, stinkwood furniture, yellowwood furniture, kiaat wood, SA wood species, south african wood identification, indigenous wood furniture, wood furniture care south africa',
  openGraph: {
    title: 'South African Wood Species Guide: Identifying & Caring for Local Woods',
    description: 'Complete guide to South African wood species used in furniture: Stinkwood, Yellowwood, Blackwood, Kiaat, Teak & more. Learn identification, care, and restoration tips.',
    url: 'https://bloomingfurniture.co.za/south-african-wood-species-guide',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'South African Wood Species Guide - Blooming Furniture',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/south-african-wood-species-guide',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/south-african-wood-species-guide",
  "headline": "South African Wood Species Guide: Identifying & Caring for Local Woods",
  "description": "Complete guide to South African wood species used in furniture: Stinkwood, Yellowwood, Blackwood, Kiaat, Teak & more. Learn identification, care, and restoration tips.",
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
    "@id": "https://bloomingfurniture.co.za/south-african-wood-species-guide"
  },
  "articleSection": "Wood Species Guides",
  "keywords": ["south african wood types", "stinkwood", "yellowwood", "kiaat", "blackwood", "teak", "furniture wood identification", "wood care"],
  "wordCount": 4500,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know what wood my furniture is made from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by examining the colour, grain pattern, and weight. Stinkwood is very dark brown to black with a dense, heavy feel. Yellowwood is light golden with a fine, even grain. Kiaat is warm reddish-brown with a distinctive grain. Oregon pine is light with visible growth rings. The age and style of your furniture also provide clues — Cape Dutch pieces are often stinkwood or yellowwood, while mid-century modern pieces may be kiaat or teak. A professional restorer can identify your wood with certainty."
      }
    },
    {
      "@type": "Question",
      "name": "Is stinkwood furniture valuable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, stinkwood furniture is among the most valuable in South Africa. Stinkwood (Ocotea bullata) is a protected species and can no longer be commercially harvested, making existing pieces increasingly rare and valuable. Antique stinkwood Cape Dutch furniture regularly sells for tens of thousands of rands and appreciates over time. Even damaged stinkwood pieces are worth restoring due to the wood's rarity and the craftsmanship of historical pieces."
      }
    },
    {
      "@type": "Question",
      "name": "Can yellowwood furniture be restored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Yellowwood responds beautifully to restoration. Despite being a softer wood, it sands well, accepts stains evenly, and finishes to a gorgeous golden sheen. Common issues like water stains, scratches, and worn finishes can all be addressed. Because yellowwood is a protected indigenous species, restoring existing pieces is far preferable to replacement. Professional restoration preserves the beauty and value of these national treasures."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most durable South African wood for furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stinkwood is considered the most durable indigenous South African furniture wood, with exceptional hardness and natural resistance to decay. Among imported woods commonly used in SA furniture, teak is the most durable due to its natural oils that resist moisture, insects, and rot. Kiaat (Pterocarpus angolensis) is also highly durable and naturally termite-resistant, making it an excellent choice for furniture that needs to withstand the elements."
      }
    },
    {
      "@type": "Question",
      "name": "How do I care for kiaat wood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kiaat wood benefits from regular oiling with a quality wood oil such as teak oil or Danish oil every 6 to 12 months. Avoid harsh chemical cleaners — instead, wipe with a soft, slightly damp cloth. Kiaat darkens naturally over time, which enhances its beauty. Protect it from prolonged direct sunlight to prevent uneven colour changes. For kiaat furniture on the West Coast, apply a UV-protective finish and check for salt residue regularly."
      }
    },
    {
      "@type": "Question",
      "name": "Is it legal to buy stinkwood furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it is legal to buy, sell, and own existing stinkwood furniture. The protection applies to living stinkwood trees — it is illegal to fell or harvest stinkwood without a permit under the National Forests Act. However, antique and second-hand stinkwood furniture can be freely traded. This is actually another reason to restore stinkwood pieces rather than discard them: no new stinkwood furniture can be made, so existing pieces become more valuable over time."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between solid wood and veneer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solid wood furniture is made entirely from planks of real wood, while veneer furniture has a thin layer of real wood (typically 0.5mm to 3mm) glued over a substrate like plywood or MDF. Solid wood is more durable and can be sanded and refinished multiple times, while veneer can only be carefully refinished once or twice. Both can be beautiful, but solid wood — especially in indigenous species like stinkwood and yellowwood — holds significantly more value. A restorer can identify which you have by examining edges, joints, and the underside of the piece."
      }
    }
  ]
};

export default function SouthAfricanWoodSpeciesGuide() {
  const articleSchemaString = JSON.stringify(articleSchema);
  const faqSchemaString = JSON.stringify(faqSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchemaString,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: faqSchemaString,
        }}
      />

      <article className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'South African Wood Species Guide', href: '/south-african-wood-species-guide' }]} className="max-w-4xl mx-auto" />

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <span className="px-3 py-1 bg-golden-center text-dark-wood text-sm font-semibold rounded-full">
                Pillar Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              South African Wood Species Guide: Identifying &amp; Caring for Local Woods
            </h1>

            <p className="text-xl text-forest-green mb-6 leading-relaxed">
              South Africa boasts some of the world&apos;s most beautiful and sought-after furniture woods. From the legendary Stinkwood of Cape Dutch antiques to the warm glow of Kiaat in modern pieces, knowing your wood species is the foundation of proper care and restoration. This comprehensive guide covers every major wood type you will find in South African furniture.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 14, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>18 min read</span>
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
                <a href="#introduction" className="block text-forest-green hover:text-dark-wood transition-colors">1. Introduction: Why Knowing Your Wood Matters</a>
                <a href="#indigenous-woods" className="block text-forest-green hover:text-dark-wood transition-colors">2. Indigenous South African Woods</a>
                <a href="#stinkwood" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">a) Stinkwood (Ocotea bullata)</a>
                <a href="#yellowwood" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">b) Yellowwood (Podocarpus)</a>
                <a href="#blackwood" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">c) Blackwood (Acacia melanoxylon)</a>
                <a href="#kiaat" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">d) Kiaat (Pterocarpus angolensis)</a>
                <a href="#imbuia" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">e) Imbuia (Ocotea porosa)</a>
                <a href="#imported-woods" className="block text-forest-green hover:text-dark-wood transition-colors">3. Imported Woods Common in SA Furniture</a>
                <a href="#teak" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">f) Teak</a>
                <a href="#oregon-pine" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">g) Oregon Pine (Douglas Fir)</a>
                <a href="#mahogany" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">h) Mahogany</a>
                <a href="#oak" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">i) Oak</a>
                <a href="#meranti" className="block text-forest-green hover:text-dark-wood transition-colors pl-4">j) Meranti</a>
                <a href="#identification" className="block text-forest-green hover:text-dark-wood transition-colors">4. How to Identify Your Wood</a>
                <a href="#western-cape-care" className="block text-forest-green hover:text-dark-wood transition-colors">5. Caring for Wood in the Western Cape Climate</a>
                <a href="#restore-vs-replace" className="block text-forest-green hover:text-dark-wood transition-colors">6. When to Restore vs Replace</a>
                <a href="#faq" className="block text-forest-green hover:text-dark-wood transition-colors">7. Frequently Asked Questions</a>
                <a href="#cta" className="block text-forest-green hover:text-dark-wood transition-colors">8. Get Expert Help With Your Wood Furniture</a>
              </nav>
            </div>

            {/* Section 1: Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                1. Introduction: Why Knowing Your Wood Matters
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  If you own furniture in South Africa, chances are you own a piece of living history. The chair you sit in at dinner might be crafted from a tree that stood for centuries in the Knysna forests. The dresser in your bedroom could be made from wood that can no longer be legally harvested. Understanding what wood your furniture is made from is not merely academic curiosity &mdash; it is essential knowledge that directly affects how you care for, restore, and value your pieces.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  South Africa has a remarkable heritage of indigenous woods that are found nowhere else on earth. Species like <strong className="text-dark-wood">Stinkwood</strong> and <strong className="text-dark-wood">Yellowwood</strong> are now protected under the National Forests Act, meaning no new commercial harvesting is permitted. Every piece of furniture made from these woods is irreplaceable. Treating a stinkwood table with the wrong product, or failing to protect a yellowwood cabinet from coastal humidity, can cause irreversible damage to something that can never be remade.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Different woods also respond differently to restoration techniques. A finish that works beautifully on kiaat may ruin mahogany. The solvent that strips Oregon pine cleanly might damage an imbuia surface. At <Link href="/services" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we encounter every type of wood across the West Coast, and we have learned that proper identification is always the first step in any successful <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">restoration project</Link>.
                </p>

                <p className="text-lg text-forest-green leading-relaxed">
                  This guide will walk you through every major wood species you are likely to encounter in South African furniture. For each species, we cover how to recognise it, what makes it special, how to care for it, and whether it is worth restoring. We also address the unique challenges of maintaining wood furniture in the Western Cape&apos;s coastal climate.
                </p>
              </div>
            </section>

            {/* Section 2: Indigenous South African Woods */}
            <section id="indigenous-woods" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                2. Indigenous South African Woods
              </h2>

              <p className="text-lg text-forest-green leading-relaxed mb-8">
                South Africa&apos;s indigenous hardwoods are among the finest furniture timbers in the world. Many are now protected, which makes existing furniture pieces all the more precious. Here are the five indigenous species you are most likely to find in South African homes.
              </p>

              {/* Stinkwood */}
              <div id="stinkwood" className="mb-10 border-l-4 border-golden-center pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  a) Stinkwood <span className="text-lg font-normal text-forest-green">(Ocotea bullata)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-golden-center/20 text-dark-wood text-xs font-semibold rounded-full mb-4">Protected Species &mdash; SA&apos;s Most Prized Furniture Wood</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Dark brown to almost black, sometimes with lighter streaks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Fine, interlocked grain with beautiful figure</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Very hard and dense (Janka hardness ~1,400 lbf)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Heavy &mdash; noticeably heavier than most other furniture woods</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Stinkwood is, without question, the most prized furniture wood in South Africa. Its curious name comes from the unpleasant smell when freshly cut, but once dried and finished, it becomes one of the most beautiful and durable woods in the world. The dark, rich colour deepens with age, developing a magnificent patina that collectors prize.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Historical use:</strong> Stinkwood has been the timber of choice for South African master furniture makers since the 1700s. It is the defining wood of <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">Cape Dutch furniture</Link> &mdash; the ornate armoires, writing desks, and dining tables that are considered among the finest antiques produced in the Southern Hemisphere. It was also extensively used in church pews, government buildings, and the homes of early Cape settlers. Many surviving pieces date back 200 to 300 years.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Stinkwood is unmistakably dark. Look for a deep brown to near-black colour with a fine, even texture. It feels noticeably heavy when you lift a piece. The grain is typically straight to interlocked and often shows a subtle shimmer or figure when light catches it. On older pieces, the patina will be very dark, almost black, especially on exposed surfaces. Check the underside or inside of drawers for the lighter, unfinished wood which will still appear dark brown.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Stinkwood responds exceptionally well to traditional finishes. French polishing brings out the depth and figure of the grain beautifully. Avoid modern polyurethane finishes on antique stinkwood as they can look plasticky and diminish value. Regular dusting with a soft cloth and occasional treatment with a quality beeswax polish is ideal for maintenance. For damaged pieces, <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">professional repair</Link> is strongly recommended to preserve value.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Worth restoring?</strong> Always, without exception. Stinkwood is a protected species and cannot be commercially harvested. Every piece is irreplaceable and increases in value. Even severely damaged stinkwood furniture should be professionally assessed before considering disposal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Yellowwood */}
              <div id="yellowwood" className="mb-10 border-l-4 border-golden-center pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  b) Yellowwood <span className="text-lg font-normal text-forest-green">(Podocarpus spp.)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-golden-center/20 text-dark-wood text-xs font-semibold rounded-full mb-4">Protected Species &mdash; South Africa&apos;s National Tree</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Light golden yellow, sometimes with a pinkish tinge</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Fine, straight, even grain with a smooth texture</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Medium soft &mdash; softer than stinkwood but still workable</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Medium &mdash; lighter than stinkwood, heavier than pine</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Yellowwood is South Africa&apos;s national tree, and its timber has been central to South African furniture making for centuries. There are three species commonly referred to as &ldquo;yellowwood&rdquo;: Real Yellowwood (<em>Podocarpus latifolius</em>), Outeniqua Yellowwood (<em>Podocarpus falcatus</em>), and Common Yellowwood. All three produce beautiful, workable timber with a distinctive warm golden colour.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Historical use:</strong> Yellowwood was the workhorse timber of South African building and furniture making. It was used extensively for floorboards, ceiling planks, door and window frames, and a wide range of furniture. In the Cape, yellowwood floorboards and ceiling beams are a hallmark of historic homesteads. It was often paired with stinkwood in Cape Dutch furniture, where yellowwood formed the structural elements and stinkwood provided the decorative external surfaces.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Yellowwood is easily recognised by its light golden to pale yellow colour. It has a fine, even grain that is typically very straight, without the dramatic figuring seen in stinkwood. The surface feels smooth and silky when sanded. It is moderately heavy but noticeably lighter than stinkwood or blackwood. On older pieces, the colour may have darkened to a honey or amber tone, and there may be a slight pinkish cast.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Yellowwood is softer than most hardwoods and scratches more easily, so it benefits from a durable protective finish. Traditional wax or oil finishes work well for antique pieces, while modern sealers provide better protection for high-use furniture. Yellowwood sands beautifully and accepts stains evenly, making <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">refinishing</Link> straightforward. Avoid placing hot items directly on yellowwood surfaces, and use coasters and placemats to prevent water rings.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Worth restoring?</strong> Absolutely. Yellowwood is protected and can no longer be harvested commercially. Antique yellowwood furniture is a piece of South African heritage and increases in value. Even utilitarian pieces like floorboards and door frames are worth preserving.
                    </p>
                  </div>
                </div>
              </div>

              {/* Blackwood */}
              <div id="blackwood" className="mb-10 border-l-4 border-golden-center pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  c) Blackwood <span className="text-lg font-normal text-forest-green">(Acacia melanoxylon)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-forest-green/10 text-dark-wood text-xs font-semibold rounded-full mb-4">Premium Hardwood &mdash; Beautiful Figure &amp; Grain</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Golden brown to dark brown with dramatic lighter streaks</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Interlocked, wavy grain with striking figure and chatoyance</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Hard (Janka hardness ~1,160 lbf)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Moderately heavy with a solid, substantial feel</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Blackwood, also known as Australian Blackwood in some South African contexts, produces timber with some of the most spectacular figure and colour variation of any furniture wood. The dramatic interplay of dark and light tones, combined with a wavy, interlocked grain, makes it a favourite of furniture makers and musical instrument builders alike.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Historical use:</strong> Blackwood has been used extensively in high-end South African furniture, particularly for dining tables, sideboards, and display cabinets where the stunning grain can be showcased. It is also prized for musical instruments &mdash; guitars, piano frames, and organ cases &mdash; due to its resonant tonal qualities. In South Africa, it was commonly used from the late 1800s onward as an alternative to the increasingly scarce stinkwood.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Look for a rich palette of colours ranging from golden brown to deep chocolate, often within the same board. The grain is typically wavy or fiddleback, creating a shimmering effect as light plays across the surface. It is hard and dense, with a smooth texture that finishes beautifully. The contrast between heartwood (dark) and sapwood (pale golden) is often dramatic.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Blackwood finishes superbly with either oil or lacquer. Its dense grain takes a high polish and is naturally resistant to wear. Regular dusting and periodic oiling are sufficient for maintenance. When restoring blackwood, take care with stripping as the interlocked grain can tear if sanded against the grain direction. A clear finish is almost always the best choice to showcase the wood&apos;s natural beauty.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Worth restoring?</strong> Yes. Blackwood is a premium hardwood with increasingly limited availability. Its beautiful figure makes restored pieces highly desirable. The quality of the timber far exceeds what is commonly available in modern furniture production.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kiaat */}
              <div id="kiaat" className="mb-10 border-l-4 border-golden-center pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  d) Kiaat <span className="text-lg font-normal text-forest-green">(Pterocarpus angolensis)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-forest-green/10 text-dark-wood text-xs font-semibold rounded-full mb-4">Also Known As: Mukwa / African Teak &mdash; Naturally Termite-Resistant</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Warm reddish-brown that deepens with age to a rich mahogany tone</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Moderately coarse with interlocked grain, often with attractive figure</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Medium hard &mdash; durable but workable</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Medium weight &mdash; lighter than stinkwood or blackwood</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Kiaat is one of the most popular furniture woods in modern South African furniture making. Its warm reddish-brown colour, natural durability, and termite resistance make it an outstanding choice for both indoor and sheltered outdoor furniture. It is also known as Mukwa in some regions and sometimes marketed as &ldquo;African Teak,&rdquo; although it is not related to true teak.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Historical use:</strong> Kiaat has been used in Southern African furniture for generations, particularly in the northern regions of South Africa, Zimbabwe, and Mozambique where the trees grow naturally. It became widely popular in South African furniture production from the mid-20th century onward, appearing in everything from coffee tables and bookshelves to headboards and dining suites. Its warm colour palette made it the defining wood of mid-century South African interior design.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Kiaat is easy to spot thanks to its distinctive warm, reddish-brown colour. Fresh cuts show a bright orange-red that settles to a deeper brown over time. The grain is moderately coarse with an interlocked pattern that can produce attractive ribbon-like figure on quartersawn surfaces. It has a slightly oily feel, similar to teak, and a faintly sweet aroma when freshly sanded.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Kiaat thrives on oil-based finishes. Teak oil or Danish oil applied every six to twelve months will maintain its rich colour and protect the surface. Avoid water-based finishes as kiaat&apos;s natural oils can cause adhesion issues. The wood darkens naturally with age and UV exposure, so protect from prolonged direct sunlight if you want to maintain a consistent colour. For <Link href="/coastal-furniture-protection" className="text-dark-wood font-semibold hover:underline">West Coast homes</Link>, a UV-protective oil finish is essential.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Worth restoring?</strong> Yes. Kiaat is a durable, beautiful wood that restores exceptionally well. Its natural resistance to pests means structural integrity is usually well preserved even in older pieces. Quality kiaat furniture is worth considerably more than equivalent modern production furniture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Imbuia */}
              <div id="imbuia" className="mb-10 border-l-4 border-golden-center pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  e) Imbuia <span className="text-lg font-normal text-forest-green">(Ocotea porosa)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-forest-green/10 text-dark-wood text-xs font-semibold rounded-full mb-4">Rich Brown Hardwood &mdash; Popular in Vintage SA Furniture</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Rich medium to dark brown with olive and chocolate tones</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Fine to medium, interlocked, with a silky lustre</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Medium hard &mdash; similar to walnut</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Medium &mdash; lighter than stinkwood</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Imbuia is closely related to stinkwood (both belong to the Lauraceae family) and shares many of its finest qualities. It produces a beautifully figured, rich brown timber that has been used in quality furniture across Southern Africa. While originally native to Brazil, imbuia timber was imported and widely used in South African furniture production, particularly during the mid-20th century.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Historical use:</strong> Imbuia became extremely popular in South African furniture from the 1930s through the 1970s. It was used for bedroom suites, dining room sets, sideboards, and desks. Many South African families own imbuia furniture that was purchased new by parents or grandparents during this golden era of South African furniture production. Its rich colour and beautiful grain made it the aspirational wood for middle-class South African households.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Imbuia is sometimes confused with stinkwood due to its similar dark brown colour. However, imbuia tends to have more olive and golden tones, while stinkwood skews darker and blacker. Imbuia often displays a distinctive silky lustre and a fine, sometimes wavy grain pattern. It is not as dense or heavy as stinkwood. The aroma when sanded is slightly spicy, quite different from stinkwood&apos;s characteristic smell.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Imbuia finishes beautifully with traditional lacquer or oil finishes. It takes stain well if you want to alter the colour, though its natural rich brown is usually preferred. Regular waxing or oiling maintains the lustre. When restoring vintage imbuia pieces, be careful with chemical strippers as some can discolour the wood. Gentle sanding and fresh finishing typically produce stunning results. For professional <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">furniture refinishing</Link>, imbuia is a pleasure to work with.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Worth restoring?</strong> Yes. Imbuia is now quite scarce and is no longer commonly available for new furniture production. Vintage imbuia pieces represent solid craftsmanship and quality timber that would cost a premium to replicate today. Restoration almost always makes sense both financially and sentimentally.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Imported Woods */}
            <section id="imported-woods" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                3. Imported Woods Common in South African Furniture
              </h2>

              <p className="text-lg text-forest-green leading-relaxed mb-8">
                Alongside indigenous timbers, a number of imported wood species have become staples in South African furniture making. Some, like Oregon Pine, have been used here for so long that many people assume they are local. Here are the five imported species you will most commonly encounter.
              </p>

              {/* Teak */}
              <div id="teak" className="mb-10 border-l-4 border-forest-green pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  f) Teak <span className="text-lg font-normal text-forest-green">(Tectona grandis)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full mb-4">Imported &mdash; Premium Outdoor &amp; Indoor Wood</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Golden brown that weathers to silver-grey if left untreated</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Straight to slightly wavy, medium texture with an oily feel</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Hard and extremely durable</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Moderately heavy with a solid, dense feel</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Teak is the gold standard for outdoor furniture worldwide, and South Africa is no exception. Its natural oils make it extraordinarily resistant to moisture, insects, and decay, even without any applied finish. This makes it the ideal choice for garden furniture, patio sets, and any furniture exposed to the elements &mdash; especially critical on the <Link href="/coastal-furniture-protection" className="text-dark-wood font-semibold hover:underline">salt-laden West Coast</Link>.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Teak has a warm, golden-brown colour when freshly finished, and an unmistakable oily or waxy feel. Rub your finger across the surface and you will feel a slight slickness. It has a distinctive leather-like aroma when freshly sanded. Untreated teak exposed to the elements develops a characteristic silver-grey patina that many people find attractive.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Teak requires oil-based care. Apply teak oil every three to six months for outdoor pieces, less frequently for indoor furniture. Avoid varnish and polyurethane on teak as they tend to peel. If your teak has turned grey, a light sanding followed by teak oil will restore the golden colour. For salt-damaged teak on the West Coast, a thorough clean with fresh water, followed by light sanding and re-oiling, works wonders.
                </p>
              </div>

              {/* Oregon Pine */}
              <div id="oregon-pine" className="mb-10 border-l-4 border-forest-green pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  g) Oregon Pine <span className="text-lg font-normal text-forest-green">(Pseudotsuga menziesii &mdash; Douglas Fir)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full mb-4">Imported &mdash; Widely Used in Cape Homes Since the 1800s</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Light pinkish-brown to warm orange-brown with age</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Prominent growth rings creating a bold, decorative grain pattern</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Soft to medium &mdash; dents and scratches easily</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Light to medium &mdash; noticeably lighter than hardwoods</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Oregon Pine, properly known as Douglas Fir, is so deeply embedded in South African building heritage that most people do not realise it is an imported softwood from North America. It was shipped to the Cape in enormous quantities from the mid-1800s and became the standard building timber for floorboards, door frames, ceiling beams, and furniture throughout the Western Cape and beyond.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Oregon pine is easy to identify by its prominent, clearly visible growth rings that create a bold, cathedral-like grain pattern. The colour ranges from pinkish-white (sapwood) to warm orange-brown (heartwood), and it darkens significantly with age and UV exposure. It is much lighter in weight than any hardwood and dents easily under a fingernail. The strong, resinous pine scent when sanded is distinctive.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Oregon pine&apos;s softness means it scratches and dents easily but also sands quickly and accepts stains and finishes well. It is commonly finished with varnish, lacquer, or polyurethane for protection. White-washing and chalk paint finishes are popular for Oregon pine furniture. When restoring old Oregon pine floorboards or furniture, filling and sanding is usually straightforward. The <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">refinishing process</Link> can transform tired Oregon pine into a beautiful feature.
                </p>
              </div>

              {/* Mahogany */}
              <div id="mahogany" className="mb-10 border-l-4 border-forest-green pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  h) Mahogany <span className="text-lg font-normal text-forest-green">(Swietenia / Khaya spp.)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full mb-4">Imported &mdash; Classic Furniture Hardwood</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Deep reddish-brown that darkens richly over time</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Straight to interlocked, often with ribbon figure on quartersawn surfaces</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Medium hard &mdash; durable and stable</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Medium weight with a solid, refined feel</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Mahogany has been synonymous with fine furniture for centuries, and South Africa has a rich tradition of mahogany furniture brought by British colonists and local craftsmen influenced by European styles. It was the wood of choice for Victorian and Edwardian furniture, and fine mahogany pieces are found in homes, government buildings, and churches throughout South Africa.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Mahogany is recognised by its distinctive warm, reddish-brown colour that deepens to a rich burgundy-brown with age. The grain is typically straight and even, sometimes with an attractive ribbon-like figure on quartersawn surfaces. It has a fine, uniform texture that finishes to a smooth, lustrous surface. It is harder and heavier than Oregon pine but lighter than stinkwood. When freshly sanded, it has a slightly sweet, cedar-like aroma.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Mahogany is a dream to restore. It sands beautifully, takes stain evenly, and responds magnificently to French polishing. Regular dusting and occasional waxing maintain its lustre. For <Link href="/antique-restoration" className="text-dark-wood font-semibold hover:underline">antique mahogany pieces</Link>, traditional shellac or French polish finishes are recommended to maintain period authenticity and value. Avoid stripping antique mahogany unless absolutely necessary, as the aged patina adds significant value.
                </p>
              </div>

              {/* Oak */}
              <div id="oak" className="mb-10 border-l-4 border-forest-green pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  i) Oak <span className="text-lg font-normal text-forest-green">(Quercus spp.)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full mb-4">Imported &mdash; European-Influenced Classic</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Light straw to medium tan-brown, varying by species</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Prominent, open grain with distinctive ray flecks on quartersawn cuts</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Hard and very durable &mdash; excellent wear resistance</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Heavy &mdash; solid and substantial</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Oak has a long history in South African furniture, brought by European settlers who valued it for its strength, durability, and handsome grain. European Oak (White Oak) is the most common variety found in South African furniture, though American Red Oak also appears in more modern pieces. Oak furniture ranges from rustic farmhouse tables to refined Victorian library furniture.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Oak is distinguished by its prominent open grain with clearly visible pores. On quartersawn surfaces, you will see distinctive medullary ray flecks &mdash; small, shimmering lines that run across the grain. The colour ranges from light straw to a warm tan-brown, and it darkens to a rich golden brown with age. Oak is heavy and hard, with a coarse texture that you can feel under your fingers. Fumed oak (treated with ammonia) has a distinctive dark brown colour.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Oak is robust and handles restoration well. Its open grain means it benefits from a grain filler before finishing for a smooth surface, or the open pores can be left as a feature for a more rustic look. Oil, wax, lacquer, and polyurethane all work well on oak. For <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">structural repairs</Link>, oak&apos;s strength means joints tend to be very reliable. When refinishing, be aware that oak reacts with iron-based compounds (including steel wool), which can cause dark staining.
                </p>
              </div>

              {/* Meranti */}
              <div id="meranti" className="mb-10 border-l-4 border-forest-green pl-6">
                <h3 className="text-2xl font-bold text-dark-wood mb-2">
                  j) Meranti <span className="text-lg font-normal text-forest-green">(Shorea spp.)</span>
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full mb-4">Imported &mdash; Budget-Friendly Furniture Timber</span>

                <div className="bg-daisy-cream rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-dark-wood">Colour:</p>
                      <p className="text-forest-green">Pale pinkish-red to dark reddish-brown (depending on variety)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Grain:</p>
                      <p className="text-forest-green">Interlocked, moderately coarse with a slightly woolly texture</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Hardness:</p>
                      <p className="text-forest-green">Soft to medium &mdash; less durable than premium hardwoods</p>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-wood">Weight:</p>
                      <p className="text-forest-green">Light to medium &mdash; lighter than most hardwoods</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Meranti is a Southeast Asian tropical timber that has become the budget workhorse of South African furniture production. It is widely used for doors, window frames, furniture, and plywood. While it does not have the prestige of indigenous woods or premium imports, it is a versatile, affordable timber that appears in a huge number of South African homes.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">How to identify:</strong> Meranti ranges from pale pinkish-red (light red meranti) to dark reddish-brown (dark red meranti). It has a moderately coarse, interlocked grain that can feel slightly woolly or fibrous. It is notably lighter in weight than kiaat, blackwood, or stinkwood. The surface may show small resin canals (tiny holes) in the grain. Fresh-cut meranti has a slightly cedarlike smell.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  <strong className="text-dark-wood">Care and restoration:</strong> Meranti is softer and less durable than premium hardwoods, so it requires a good protective finish. Polyurethane or marine varnish provides the best protection. The interlocked grain can be challenging to sand smoothly &mdash; always sand with progressively finer grits. Meranti accepts stain well and can be finished to look quite attractive. For outdoor use, it must be thoroughly sealed and maintained, as it is not naturally resistant to moisture or insects.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Worth restoring?</strong> It depends. Meranti furniture is generally less valuable than indigenous or premium imported wood pieces. Simple repairs and refinishing can extend the life of well-made meranti pieces, but extensive restoration is usually only worthwhile for items with strong sentimental value. For furniture investment purposes, prioritise restoring indigenous wood pieces first.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: How to Identify Your Wood */}
            <section id="identification" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                4. How to Identify Your Wood: A Step-by-Step Guide
              </h2>

              <p className="text-lg text-forest-green leading-relaxed mb-6">
                Not sure what wood your furniture is made from? Follow this systematic approach to narrow it down. While definitive identification sometimes requires expert assessment, these steps will give you a strong starting point.
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">Examine the Colour</h3>
                    <p className="text-forest-green leading-relaxed">
                      Look at a clean area (inside a drawer, underneath, or on the back). <strong>Very dark brown to black</strong> = likely stinkwood or imbuia. <strong>Light golden</strong> = likely yellowwood. <strong>Warm reddish-brown</strong> = likely kiaat, mahogany, or meranti. <strong>Light with bold grain rings</strong> = likely Oregon pine. <strong>Golden-brown with oily feel</strong> = likely teak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">Study the Grain Pattern</h3>
                    <p className="text-forest-green leading-relaxed">
                      Fine, even grain suggests stinkwood, yellowwood, or mahogany. Bold, prominent growth rings indicate Oregon pine. Open, visible pores with ray flecks suggest oak. Wavy, figured grain points to blackwood. A coarse, slightly fibrous grain suggests meranti.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">Test the Weight</h3>
                    <p className="text-forest-green leading-relaxed">
                      Lift the piece or a removable component like a drawer. Very heavy and dense = stinkwood, blackwood, or oak. Medium weight = kiaat, mahogany, or imbuia. Noticeably light = Oregon pine or meranti. For comparison, a stinkwood chair will feel significantly heavier than a similar Oregon pine chair.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">Check for Smell</h3>
                    <p className="text-forest-green leading-relaxed">
                      If you can sand a small, hidden area, the aroma can be revealing. Stinkwood has a distinctive pungent smell (hence the name). Oregon pine is resinous and piney. Teak smells like leather. Kiaat has a faintly sweet scent. Cedar-like aromas may indicate meranti or mahogany.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">Consider the Age and Style</h3>
                    <p className="text-forest-green leading-relaxed">
                      The era and style of your furniture provide strong clues. Cape Dutch pieces (1700s-1800s) are typically stinkwood and yellowwood. Victorian and Edwardian pieces often use mahogany or oak. Mid-century (1940s-1970s) South African furniture frequently features imbuia or kiaat. Modern production furniture may use meranti. Check for maker&apos;s marks, labels, or stamps inside drawers or on the underside.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start bg-daisy-cream p-6 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">6</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-wood mb-2">Look for Maker&apos;s Marks</h3>
                    <p className="text-forest-green leading-relaxed">
                      Check inside drawers, on the back panel, and underneath the piece for stamps, labels, or branded marks. Many South African furniture makers stamped their pieces with the wood species and origin. Some also used numbered tags. These marks can provide definitive identification and add significantly to the piece&apos;s provenance and value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <Search className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Still Unsure?</h4>
                    <p className="text-blue-800 text-sm">
                      Professional wood identification is part of what we do at Blooming Furniture. Send us clear photos of your piece &mdash; including close-ups of the grain, any exposed unfinished areas, and the overall style &mdash; and we can usually identify the wood species for you. <Link href="/book-consultation" className="font-semibold underline">Book a free consultation</Link> for a definitive assessment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Western Cape Climate Care */}
            <section id="western-cape-care" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                5. Caring for Different Wood Types in the Western Cape Climate
              </h2>

              <p className="text-lg text-forest-green leading-relaxed mb-6">
                The Western Cape presents unique challenges for wood furniture. The combination of salt-laden air, intense UV radiation, seasonal humidity changes, and coastal winds can accelerate deterioration if furniture is not properly protected. Here is how to care for your wood in these conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-daisy-cream rounded-lg p-6">
                  <Sun className="h-8 w-8 text-golden-center mb-3" />
                  <h3 className="text-lg font-bold text-dark-wood mb-3">UV Protection</h3>
                  <p className="text-forest-green text-sm mb-3">
                    The Western Cape receives intense sunlight year-round. UV radiation fades colours, degrades finishes, and dries out wood.
                  </p>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Position furniture away from direct window sunlight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Use UV-filtering window film or blinds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Apply UV-protective finishes, especially on kiaat and yellowwood</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Rotate items periodically to ensure even aging</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <Shield className="h-8 w-8 text-golden-center mb-3" />
                  <h3 className="text-lg font-bold text-dark-wood mb-3">Salt Air Defence</h3>
                  <p className="text-forest-green text-sm mb-3">
                    Salt-laden air is the biggest threat to furniture on the West Coast. Salt draws moisture into wood and corrodes hardware.
                  </p>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Wipe surfaces regularly to remove salt deposits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Use marine-grade finishes for near-coast furniture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Keep windows closed during strong onshore winds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-golden-center mt-0.5 flex-shrink-0" />
                      <span>Treat <Link href="/coastal-furniture-protection" className="text-dark-wood font-semibold hover:underline">coastal exposure</Link> as a maintenance priority</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-wood mb-4">Seasonal Maintenance Schedule</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Season</th>
                      <th className="px-6 py-4 text-left font-semibold">Tasks</th>
                      <th className="px-6 py-4 text-left font-semibold">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Summer (Dec&ndash;Feb)</td>
                      <td className="px-6 py-4 text-forest-green">UV protection check, re-oil outdoor furniture, inspect finishes</td>
                      <td className="px-6 py-4 text-forest-green">Sun and heat damage prevention</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Autumn (Mar&ndash;May)</td>
                      <td className="px-6 py-4 text-forest-green">Deep clean, apply protective wax, check for salt buildup</td>
                      <td className="px-6 py-4 text-forest-green">Preparing for winter moisture</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Winter (Jun&ndash;Aug)</td>
                      <td className="px-6 py-4 text-forest-green">Monitor humidity levels, check for swelling or warping, ventilate rooms</td>
                      <td className="px-6 py-4 text-forest-green">Moisture management</td>
                    </tr>
                    <tr className="bg-daisy-cream/50">
                      <td className="px-6 py-4 text-dark-wood font-medium">Spring (Sep&ndash;Nov)</td>
                      <td className="px-6 py-4 text-forest-green">Inspect for winter damage, re-oil or re-wax as needed, address salt damage</td>
                      <td className="px-6 py-4 text-forest-green">Recovery and preparation for summer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-bold text-dark-wood mb-3">Wood-Specific Climate Tips</h4>
                <ul className="space-y-2 text-sm text-yellow-800">
                  <li><strong>Stinkwood &amp; Imbuia:</strong> These dense woods handle humidity well but still need regular waxing. Avoid placing near heaters in winter as rapid drying can cause cracks.</li>
                  <li><strong>Yellowwood:</strong> More susceptible to moisture damage. Keep away from open windows during winter rains and maintain a consistent finish.</li>
                  <li><strong>Kiaat:</strong> Its natural oils provide some protection, but re-oil twice yearly in coastal areas instead of once.</li>
                  <li><strong>Oregon Pine:</strong> Most vulnerable to coastal damage. Requires a robust finish and regular maintenance. Address any finish failures immediately.</li>
                  <li><strong>Teak:</strong> Best natural resistance to coastal conditions. Still benefits from regular oiling, especially outdoor pieces exposed to salt spray.</li>
                </ul>
              </div>
            </section>

            {/* Section 6: Restore vs Replace */}
            <section id="restore-vs-replace" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                6. When to Restore vs Replace: Value Assessment by Wood Type
              </h2>

              <p className="text-lg text-forest-green leading-relaxed mb-6">
                Not every piece of furniture warrants a full restoration. The decision depends on the wood type, the piece&apos;s condition, its sentimental value, and the cost-benefit equation. Here is a practical framework for making that decision.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Wood Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Restoration Verdict</th>
                      <th className="px-6 py-4 text-left font-semibold">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Stinkwood</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Always Restore</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Protected, irreplaceable, high and increasing value</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Yellowwood</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Always Restore</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Protected national tree, heritage value, cannot be replaced</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Blackwood</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Always Restore</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Premium timber, stunning figure, increasingly scarce</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Kiaat</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Always Restore</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Quality hardwood, durable, restores beautifully, good value</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Imbuia</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Always Restore</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Scarce timber, quality craftsmanship era, appreciating value</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Teak</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Strongly Recommended</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Premium import, extremely durable, high replacement cost</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Mahogany</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Strongly Recommended</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Classic furniture timber, antique value, restores beautifully</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Oak</td>
                      <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-sm">Strongly Recommended</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Durable, timeless, solid replacement cost is high</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Oregon Pine</td>
                      <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold text-sm">Usually Worth It</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Heritage value if antique, affordable restoration cost</td>
                    </tr>
                    <tr className="bg-daisy-cream/50">
                      <td className="px-6 py-4 text-dark-wood font-medium">Meranti</td>
                      <td className="px-6 py-4"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-semibold text-sm">Case by Case</span></td>
                      <td className="px-6 py-4 text-forest-green text-sm">Low timber value; restore if sentimental or well-crafted piece</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-forest-green leading-relaxed mb-4">
                As a general rule: if the furniture is made from indigenous South African wood, it is always worth restoring. The cost of <Link href="/blog/furniture-restoration-cost-south-africa" className="text-dark-wood font-semibold hover:underline">professional restoration</Link> is a fraction of the replacement cost (if replacement is even possible), and these pieces appreciate in value over time. Even for imported hardwoods like teak, mahogany, and oak, restoration typically makes sound financial sense because the quality of timber and craftsmanship in older pieces far exceeds modern mass-produced alternatives.
              </p>

              <p className="text-lg text-forest-green leading-relaxed">
                When in doubt, always get a professional assessment before making a decision. A piece you consider worthless may turn out to be a valuable species. At Blooming Furniture, we have rescued pieces that owners were on the verge of discarding, only to reveal beautiful stinkwood or yellowwood beneath layers of old paint.
              </p>
            </section>

            {/* Section 7: FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                7. Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    How do I know what wood my furniture is made from?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Start by examining the colour, grain pattern, and weight. Stinkwood is very dark brown to black with a dense, heavy feel. Yellowwood is light golden with a fine, even grain. Kiaat is warm reddish-brown with a distinctive grain. Oregon pine is light with visible growth rings. The age and style of your furniture also provide clues &mdash; Cape Dutch pieces are often stinkwood or yellowwood, while mid-century modern pieces may be kiaat or teak. A professional restorer can identify your wood with certainty. See our <a href="#identification" className="text-dark-wood font-semibold hover:underline">identification guide above</a> for detailed steps.
                  </p>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    Is stinkwood furniture valuable?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, stinkwood furniture is among the most valuable in South Africa. Stinkwood is a protected species and can no longer be commercially harvested, making existing pieces increasingly rare and valuable. Antique stinkwood Cape Dutch furniture regularly sells for tens of thousands of rands and appreciates over time. Even damaged stinkwood pieces are worth restoring due to the wood&apos;s rarity and the craftsmanship of historical pieces. If you own stinkwood furniture, treat it as a valuable asset.
                  </p>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    Can yellowwood furniture be restored?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Absolutely. Yellowwood responds beautifully to restoration. Despite being a softer wood, it sands well, accepts stains evenly, and finishes to a gorgeous golden sheen. Common issues like water stains, scratches, and worn finishes can all be addressed by a <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">professional restorer</Link>. Because yellowwood is a protected indigenous species, restoring existing pieces is far preferable to replacement. Professional restoration preserves the beauty and value of these national treasures.
                  </p>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    What is the most durable South African wood for furniture?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Stinkwood is considered the most durable indigenous South African furniture wood, with exceptional hardness and natural resistance to decay. Among imported woods commonly used in SA furniture, teak is the most durable due to its natural oils that resist moisture, insects, and rot. Kiaat is also highly durable and naturally termite-resistant, making it an excellent choice for furniture that needs to withstand the elements, particularly in <Link href="/coastal-furniture-protection" className="text-dark-wood font-semibold hover:underline">coastal areas</Link>.
                  </p>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    How do I care for kiaat wood?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Kiaat wood benefits from regular oiling with a quality wood oil such as teak oil or Danish oil every six to twelve months. Avoid harsh chemical cleaners &mdash; instead, wipe with a soft, slightly damp cloth. Kiaat darkens naturally over time, which enhances its beauty. Protect it from prolonged direct sunlight to prevent uneven colour changes. For kiaat furniture on the West Coast, apply a UV-protective finish and check for salt residue regularly.
                  </p>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    Is it legal to buy stinkwood furniture?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, it is legal to buy, sell, and own existing stinkwood furniture. The protection applies to living stinkwood trees &mdash; it is illegal to fell or harvest stinkwood without a permit under the National Forests Act. However, antique and second-hand stinkwood furniture can be freely traded. This is another reason to restore stinkwood pieces rather than discard them: no new stinkwood furniture can be made, so existing pieces become more valuable over time.
                  </p>
                </div>

                <div className="bg-daisy-cream rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-golden-center mt-0.5 flex-shrink-0" />
                    What is the difference between solid wood and veneer?
                  </h3>
                  <p className="text-forest-green leading-relaxed">
                    Solid wood furniture is made entirely from planks of real wood, while veneer furniture has a thin layer of real wood (typically 0.5mm to 3mm) glued over a substrate like plywood or MDF. Solid wood is more durable and can be sanded and <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">refinished</Link> multiple times, while veneer can only be carefully refinished once or twice. Both can be beautiful, but solid wood &mdash; especially in indigenous species like stinkwood and yellowwood &mdash; holds significantly more value. A restorer can identify which you have by examining edges, joints, and the underside of the piece.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: CTA */}
            <section id="cta" className="mb-8">
              <div className="bg-gradient-to-br from-dark-wood to-forest-green rounded-lg p-8 text-white-daisy text-center">
                <TreePine className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Get Expert Help With Your Wood Furniture</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Whether you need help identifying your wood species, restoring a cherished heirloom, or protecting your furniture from the West Coast elements, our team of experts is here to help. Free consultations and assessments available.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Link
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 inline-flex items-center"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Link>
                  <a
                    href="https://wa.me/27793752588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
                  <Link href="/antique-restoration" className="hover:text-golden-center transition-colors underline">Antique Restoration</Link>
                  <Link href="/wood-furniture-repair" className="hover:text-golden-center transition-colors underline">Wood Furniture Repair</Link>
                  <Link href="/furniture-refinishing" className="hover:text-golden-center transition-colors underline">Furniture Refinishing</Link>
                  <Link href="/coastal-furniture-protection" className="hover:text-golden-center transition-colors underline">Coastal Protection</Link>
                </div>
              </div>
            </section>

            {/* Related Content */}
            <section className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-dark-wood mb-6">Related Articles &amp; Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/antique-restoration" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                  <h4 className="font-semibold text-forest-green">Antique Furniture Restoration</h4>
                  <p className="text-sm text-dark-wood mt-1">Preserve family heirlooms with expert period-appropriate techniques</p>
                </Link>
                <Link href="/blog/furniture-restoration-cost-south-africa" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                  <h4 className="font-semibold text-forest-green">Furniture Restoration Cost Guide</h4>
                  <p className="text-sm text-dark-wood mt-1">Complete 2026 pricing guide for all restoration services</p>
                </Link>
                <Link href="/coastal-furniture-protection" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                  <h4 className="font-semibold text-forest-green">Coastal Furniture Protection</h4>
                  <p className="text-sm text-dark-wood mt-1">Marine-grade weatherproofing for West Coast homes</p>
                </Link>
                <Link href="/furniture-refinishing" className="block p-4 bg-daisy-cream rounded-lg shadow hover:shadow-md transition">
                  <h4 className="font-semibold text-forest-green">Furniture Refinishing</h4>
                  <p className="text-sm text-dark-wood mt-1">Custom stains, paints, and professional finish restoration</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
