import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Remove Scratches from Wooden Furniture: DIY & Professional Guide | Blooming Furniture',
  description: 'Learn how to remove scratches from wooden furniture with DIY methods and know when to call a professional. Step-by-step guide covering walnut trick, furniture markers, sanding, staining, and deep scratch repair.',
  keywords: 'remove scratches wooden furniture, fix scratches wood furniture, scratch repair furniture, DIY furniture scratch removal, wood scratch repair south africa, furniture scratch fix',
  openGraph: {
    title: 'How to Remove Scratches from Wooden Furniture: DIY & Professional Guide',
    description: 'Learn how to remove scratches from wooden furniture with DIY methods and know when to call a professional. Complete step-by-step guide.',
    url: 'https://bloomingfurniture.co.za/blog/how-to-remove-scratches-from-wooden-furniture',
    type: 'article',
    locale: 'en_ZA',
    images: [
      {
        url: '/blooming-furniture.png',
        width: 1200,
        height: 630,
        alt: 'How to Remove Scratches from Wooden Furniture - Complete Guide',
      },
    ],
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/blog/how-to-remove-scratches-from-wooden-furniture',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://bloomingfurniture.co.za/blog/how-to-remove-scratches-from-wooden-furniture",
  "headline": "How to Remove Scratches from Wooden Furniture: DIY & Professional Guide",
  "description": "Learn how to remove scratches from wooden furniture with DIY methods and know when to call a professional. Step-by-step guide for all scratch depths.",
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
    "@id": "https://bloomingfurniture.co.za/blog/how-to-remove-scratches-from-wooden-furniture"
  },
  "articleSection": "DIY & Professional Guides",
  "keywords": ["remove scratches", "wooden furniture", "DIY furniture repair", "scratch removal", "wood furniture care"],
  "wordCount": 2400,
  "inLanguage": "en-ZA"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you really fix furniture scratches with a walnut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, rubbing a raw walnut kernel over minor surface scratches works surprisingly well on wooden furniture. The natural oils in the walnut fill the scratch and darken it to blend with the surrounding wood. This method works best on light, surface-level scratches that have not penetrated through the finish into the wood itself."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best product to remove scratches from wood furniture in South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For minor scratches, furniture touch-up markers (available from Builders Warehouse or hardware stores) work well. For medium scratches, Woodoc Touch-Up Oil or Briwax are excellent South African-available options. For deep scratches, a proper sand-and-stain approach or professional repair is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "How do I fix deep scratches and gouges in wooden furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deep scratches and gouges require filling with wood filler or wax sticks matched to your wood colour, followed by careful sanding and refinishing. For valuable or antique pieces, professional repair is strongly recommended as incorrect technique can cause more visible damage than the original scratch."
      }
    },
    {
      "@type": "Question",
      "name": "Will sanding remove scratches from wooden furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sanding can effectively remove medium-depth scratches from solid wood furniture. Start with 150-grit sandpaper and progress to 220-grit for a smooth finish. However, sanding only works on solid wood - never sand veneer, MDF, or laminate surfaces as you will sand through the thin top layer and cause irreparable damage."
      }
    },
    {
      "@type": "Question",
      "name": "When should I call a professional to fix furniture scratches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call a professional when scratches are deep enough to catch your fingernail, when the piece is an antique or has significant value, when scratches cover a large area requiring full refinishing, when the furniture has a specialty finish like French polish, or when previous DIY attempts have made the damage worse."
      }
    }
  ]
};

export default function HowToRemoveScratchesFromWoodenFurniture() {
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
            <span className="text-dark-wood">How to Remove Scratches from Wooden Furniture</span>
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
                DIY &amp; Professional Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-dark-wood mb-6">
              How to Remove Scratches from Wooden Furniture: DIY &amp; Professional Guide
            </h1>

            <p className="text-xl text-forest-green mb-6">
              From the everyday surface scuff to a deep gouge that catches the light every time you walk past, scratches on wooden furniture are one of the most common frustrations for homeowners. The good news? Many scratches can be fixed at home with simple household items. This guide covers every type of scratch and the best approach for each.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-forest-green">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 14, 2026</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
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
                <a href="#identify-scratch" className="block text-forest-green hover:text-dark-wood">1. First Step: Identify Your Scratch Type</a>
                <a href="#minor-scratches" className="block text-forest-green hover:text-dark-wood">2. Minor Surface Scratches: Easy DIY Fixes</a>
                <a href="#medium-scratches" className="block text-forest-green hover:text-dark-wood">3. Medium Scratches: Sanding and Staining</a>
                <a href="#deep-scratches" className="block text-forest-green hover:text-dark-wood">4. Deep Scratches and Gouges: When to Call a Professional</a>
                <a href="#materials-needed" className="block text-forest-green hover:text-dark-wood">5. Materials and Products You Will Need</a>
                <a href="#mistakes-to-avoid" className="block text-forest-green hover:text-dark-wood">6. Common Mistakes to Avoid</a>
                <a href="#prevention" className="block text-forest-green hover:text-dark-wood">7. Preventing Future Scratches</a>
                <a href="#faq" className="block text-forest-green hover:text-dark-wood">8. Frequently Asked Questions</a>
                <a href="#contact" className="block text-forest-green hover:text-dark-wood">9. Need Professional Help?</a>
              </nav>
            </div>

            {/* Section 1: Identify Scratch Type */}
            <section id="identify-scratch" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                First Step: Identify Your Scratch Type
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  Before reaching for any product or tool, you need to understand what kind of scratch you are dealing with. The depth of the scratch determines the repair method, and using the wrong approach can actually make things worse. Run your fingernail across the scratch &mdash; this simple test tells you everything you need to know.
                </p>

                <p className="text-lg text-forest-green leading-relaxed mb-4">
                  All wooden furniture has layers: the wood itself at the core, often a stain layer for colour, and a protective finish (varnish, lacquer, polyurethane, or wax) on top. Where the scratch stops within these layers determines how you should fix it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Minor (Finish Only)</h3>
                  <p className="text-sm text-forest-green mb-2">
                    Your fingernail slides over the scratch without catching. The scratch is only in the protective finish layer &mdash; it has not reached the wood.
                  </p>
                  <p className="text-sm font-semibold text-green-700">DIY difficulty: Easy</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-dark-wood mb-2">Medium (Into the Stain)</h3>
                  <p className="text-sm text-forest-green mb-2">
                    Your fingernail catches slightly. The scratch has gone through the finish into the stain or surface of the wood, showing as a lighter line.
                  </p>
                  <p className="text-sm font-semibold text-yellow-700">DIY difficulty: Moderate</p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-dark-wood mb-2">Deep (Gouge into Wood)</h3>
                  <p className="text-sm text-forest-green mb-2">
                    Your fingernail catches significantly. The wood is visibly dented or gouged. You can feel a clear groove or depression in the surface.
                  </p>
                  <p className="text-sm font-semibold text-red-700">DIY difficulty: Hard &mdash; consider professional help</p>
                </div>
              </div>
            </section>

            {/* Section 2: Minor Scratches */}
            <section id="minor-scratches" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Minor Surface Scratches: Easy DIY Fixes
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                These are the scratches that are only in the protective finish layer. They appear as light marks, white lines, or slight dulling of the surface. The great news is that these are the easiest to fix, and you may already have what you need at home.
              </p>

              <div className="space-y-8">
                {/* Method 1: Walnut */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Method 1: The Walnut Trick</h3>
                  <p className="text-forest-green mb-4 leading-relaxed">
                    This is the simplest and most natural method, and it genuinely works. The oils in raw walnut kernels fill minor scratches and naturally darken to blend with the wood.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</div>
                      <p className="text-forest-green">Take a raw, shelled walnut half (not roasted or salted).</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</div>
                      <p className="text-forest-green">Rub the walnut meat firmly along the scratch, following the grain direction.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</div>
                      <p className="text-forest-green">Let the natural oils sit for 5&ndash;10 minutes.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</div>
                      <p className="text-forest-green">Buff gently with a soft cloth. Repeat if needed.</p>
                    </div>
                  </div>
                  <p className="text-sm text-forest-green mt-4 italic">Best for: Light scratches on dark to medium-toned wood.</p>
                </div>

                {/* Method 2: Furniture Marker */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Method 2: Furniture Touch-Up Markers</h3>
                  <p className="text-forest-green mb-4 leading-relaxed">
                    Touch-up markers are purpose-made felt-tip pens filled with furniture-grade stain. They are available in a range of wood tones and are the most convenient solution for quick fixes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</div>
                      <p className="text-forest-green">Clean the scratched area with a damp cloth and let it dry completely.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</div>
                      <p className="text-forest-green">Choose a marker colour that matches your wood (test on an inconspicuous area first).</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</div>
                      <p className="text-forest-green">Draw the marker along the scratch with light, even strokes following the wood grain.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</div>
                      <p className="text-forest-green">Wipe away any excess immediately with a soft cloth. Apply a thin coat of furniture wax to seal.</p>
                    </div>
                  </div>
                  <p className="text-sm text-forest-green mt-4 italic">Available at: Builders Warehouse, Leroy Merlin, and most hardware stores in South Africa. Brands to look for: Mohawk, Minwax, or generic furniture markers.</p>
                </div>

                {/* Method 3: Wax Stick */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Method 3: Furniture Wax Sticks</h3>
                  <p className="text-forest-green mb-4 leading-relaxed">
                    Wax sticks (also called fill sticks or crayons) work like a coloured wax crayon that fills the scratch and leaves a smooth surface. They are particularly effective for slightly deeper surface scratches.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</div>
                      <p className="text-forest-green">Clean the area thoroughly and ensure it is dry.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</div>
                      <p className="text-forest-green">Rub the wax stick firmly into the scratch, pressing to fill the groove.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</div>
                      <p className="text-forest-green">Use a plastic scraper or credit card edge to remove excess wax, scraping flat with the surface.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</div>
                      <p className="text-forest-green">Buff with a soft cloth until smooth. Apply furniture polish over the area.</p>
                    </div>
                  </div>
                  <p className="text-sm text-forest-green mt-4 italic">Tip: Buy a multi-pack with various wood tones. You can blend two colours by layering to achieve a better match.</p>
                </div>

                {/* Method 4: Oil-based home remedy */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-dark-wood mb-4">Method 4: Olive Oil and Vinegar Solution</h3>
                  <p className="text-forest-green mb-4 leading-relaxed">
                    A popular home remedy that works well for very light surface scratches and general surface refreshing. Mix equal parts olive oil and white vinegar in a small bowl.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">1</div>
                      <p className="text-forest-green">Mix equal parts olive oil and white vinegar (about a tablespoon of each).</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">2</div>
                      <p className="text-forest-green">Apply the mixture to the scratch using a soft cloth, rubbing in the direction of the grain.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">3</div>
                      <p className="text-forest-green">Let it sit for one to two hours to allow the oils to penetrate.</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">4</div>
                      <p className="text-forest-green">Wipe clean and buff with a dry cloth. The oil moisturises the wood while the vinegar cleans it.</p>
                    </div>
                  </div>
                  <p className="text-sm text-forest-green mt-4 italic">Note: This works best on untreated or oil-finished wood. Avoid on lacquered or polyurethane-finished surfaces.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Medium Scratches */}
            <section id="medium-scratches" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Medium Scratches: Sanding and Staining
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Medium scratches have penetrated through the finish into the stain or surface of the wood. They show as lighter-coloured lines because the bare wood underneath is exposed. These require more effort than a quick fix but are still manageable as a DIY project on solid wood furniture.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Important: Only for Solid Wood</h3>
                <p className="text-forest-green">
                  The sanding method described below is <strong>only suitable for solid wood furniture</strong>. Never sand veneer, MDF, or laminate surfaces. Sanding these materials removes the thin decorative top layer and causes irreparable damage. If you are unsure whether your piece is solid wood, check an inconspicuous area or <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">consult a professional</Link>.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-dark-wood mb-4">Step-by-Step: Sand and Stain Repair</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-wood mb-2">Clean the Area</h4>
                    <p className="text-forest-green leading-relaxed">
                      Wipe the scratched area with a damp cloth to remove dust and debris. Let it dry completely. Any dirt left on the surface will be sanded into the wood and can affect the final finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-wood mb-2">Sand the Scratched Area</h4>
                    <p className="text-forest-green leading-relaxed">
                      Using 150-grit sandpaper, sand lightly along the direction of the wood grain. Focus only on the scratched area and about 2cm around it. Apply even, light pressure &mdash; let the sandpaper do the work. Then switch to 220-grit sandpaper and repeat for a smoother finish. Wipe away all sanding dust with a tack cloth or slightly damp rag.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-wood mb-2">Apply Matching Stain</h4>
                    <p className="text-forest-green leading-relaxed">
                      Using a small artist&apos;s brush or cotton swab, apply wood stain that matches the original colour. Apply in thin coats, building up the colour gradually. It is much easier to add more stain than to remove too much. Let each coat dry for 15&ndash;30 minutes before assessing. Products like Woodoc Gel Stain or Plascon Wood Stain are readily available in South Africa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest-green text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-wood mb-2">Seal with a Protective Finish</h4>
                    <p className="text-forest-green leading-relaxed">
                      Once the stain has dried completely (at least 24 hours), apply a protective finish that matches the rest of the piece. A clear polyurethane, Woodoc 5 or 10, or furniture wax will protect the repair and blend it with the surrounding area. Apply thin, even coats and allow proper drying time between each.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-daisy-cream p-6 rounded-lg">
                <h3 className="text-lg font-bold text-dark-wood mb-3">Pro Tip: Feathering</h3>
                <p className="text-forest-green">
                  To achieve an invisible repair, &quot;feather&quot; the edges of your sanded area. This means gradually blending the sanded zone into the surrounding untouched finish using very light pressure with fine sandpaper. Abrupt transitions between repaired and original areas are what make DIY repairs look obvious.
                </p>
              </div>
            </section>

            {/* Section 4: Deep Scratches */}
            <section id="deep-scratches" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Deep Scratches and Gouges: When to Call a Professional
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Deep scratches and gouges go well into the wood itself, leaving a visible groove or depression. While it is possible to attempt these repairs at home, the risk of making the damage more visible is significant. For valuable pieces, antiques, or prominent furniture, <Link href="/scratched-furniture-repair" className="text-dark-wood font-semibold hover:underline">professional scratch repair</Link> is strongly recommended.
              </p>

              <h3 className="text-2xl font-bold text-dark-wood mb-4">What Professionals Can Do That DIY Cannot</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-dark-wood mb-3">Steam Raising for Dents</h4>
                  <p className="text-forest-green">
                    Professional restorers use controlled steam to swell compressed wood fibres back to their original position. This technique can literally raise a dent out of solid wood without any filling or sanding. It requires precise temperature and moisture control that is difficult to achieve with home equipment.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-dark-wood mb-3">Colour-Matched Filling</h4>
                  <p className="text-forest-green">
                    Professionals mix custom wood fillers that precisely match the colour and grain pattern of your wood. This goes far beyond off-the-shelf wood putty. The result is a repair that is virtually invisible, even on close inspection. This skill takes years to develop.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-dark-wood mb-3">Grain Painting</h4>
                  <p className="text-forest-green">
                    After filling a deep gouge, skilled restorers hand-paint grain lines across the repair to match the surrounding wood pattern. This artistic technique is what transforms a visible patch into an invisible repair. It requires both artistic skill and deep knowledge of wood grain patterns.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-dark-wood mb-3">Full <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">Refinishing</Link></h4>
                  <p className="text-forest-green">
                    When scratches cover a large area, the most cost-effective solution is often a complete strip and refinish. Professional refinishing removes all surface damage and produces a uniform, beautiful result that spot repairs simply cannot match. This is especially worthwhile for dining tables and other high-visibility pieces.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-dark-wood mb-2">When DIY Will Not Work</h3>
                    <ul className="space-y-2 text-forest-green">
                      <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Scratches on antique furniture with original finish (restoration can affect value)</span></li>
                      <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>French polished surfaces (this finish requires specialist knowledge)</span></li>
                      <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Deep gouges on prominent surfaces like dining table tops</span></li>
                      <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>Scratches through veneer (the thin wood layer cannot be sanded)</span></li>
                      <li className="flex items-start"><AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" /><span>When previous DIY attempts have made the problem worse</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-forest-green leading-relaxed">
                At <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, we regularly repair scratches and gouges that clients have attempted to fix themselves. We never judge &mdash; it is natural to try a DIY approach first. But if the result is not what you hoped for, professional repair can still achieve an excellent outcome. The key is not to keep adding layers of product on top of a failed repair, as this makes our job harder and can increase the final cost.
              </p>
            </section>

            {/* Section 5: Materials Needed */}
            <section id="materials-needed" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Materials and Products You Will Need
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Here is a practical shopping list for your scratch repair toolkit. All of these products are available in South Africa from major hardware retailers.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-forest-green text-white">
                      <th className="px-6 py-4 text-left font-semibold">Product</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                      <th className="px-6 py-4 text-left font-semibold">Where to Buy (SA)</th>
                      <th className="px-6 py-4 text-left font-semibold">Approx. Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Furniture touch-up markers (set)</td>
                      <td className="px-6 py-4 text-forest-green">Minor scratches</td>
                      <td className="px-6 py-4 text-forest-green">Builders Warehouse, Leroy Merlin</td>
                      <td className="px-6 py-4 text-forest-green">R80 &ndash; R180</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Wax fill sticks (multi-pack)</td>
                      <td className="px-6 py-4 text-forest-green">Minor to medium scratches</td>
                      <td className="px-6 py-4 text-forest-green">Builders, hardware stores</td>
                      <td className="px-6 py-4 text-forest-green">R60 &ndash; R150</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Sandpaper (150 &amp; 220 grit)</td>
                      <td className="px-6 py-4 text-forest-green">Medium scratches</td>
                      <td className="px-6 py-4 text-forest-green">Any hardware store</td>
                      <td className="px-6 py-4 text-forest-green">R15 &ndash; R40 per sheet</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Woodoc Gel Stain</td>
                      <td className="px-6 py-4 text-forest-green">Re-staining sanded areas</td>
                      <td className="px-6 py-4 text-forest-green">Builders, hardware stores</td>
                      <td className="px-6 py-4 text-forest-green">R120 &ndash; R250</td>
                    </tr>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Woodoc 5 or 10 (clear sealer)</td>
                      <td className="px-6 py-4 text-forest-green">Sealing repairs</td>
                      <td className="px-6 py-4 text-forest-green">Builders Warehouse</td>
                      <td className="px-6 py-4 text-forest-green">R180 &ndash; R350</td>
                    </tr>
                    <tr className="bg-daisy-cream/50 border-b border-gray-200">
                      <td className="px-6 py-4 text-dark-wood font-medium">Briwax (furniture wax)</td>
                      <td className="px-6 py-4 text-forest-green">Final protection and sheen</td>
                      <td className="px-6 py-4 text-forest-green">Hardware stores, online</td>
                      <td className="px-6 py-4 text-forest-green">R200 &ndash; R400</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 text-dark-wood font-medium">Soft cotton cloths / tack cloth</td>
                      <td className="px-6 py-4 text-forest-green">Cleaning and buffing</td>
                      <td className="px-6 py-4 text-forest-green">Any hardware store</td>
                      <td className="px-6 py-4 text-forest-green">R30 &ndash; R80</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Mistakes to Avoid */}
            <section id="mistakes-to-avoid" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Common Mistakes to Avoid
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                We see the results of well-intentioned DIY repairs that have gone wrong. Here are the most common mistakes and how to avoid them.
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Sanding Against the Grain</h3>
                      <p className="text-forest-green">Always sand in the direction of the wood grain, never across it. Cross-grain sanding creates thousands of tiny scratches that are extremely difficult to remove and will show prominently when stain or finish is applied.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Using Too Dark a Stain</h3>
                      <p className="text-forest-green">Always start lighter than you think you need. You can apply additional coats to darken, but removing stain that is too dark requires sanding everything back and starting over. Test on a hidden area first.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Sanding Veneer</h3>
                      <p className="text-forest-green">Veneer is a thin layer of quality wood glued over a cheaper substrate. It can be as thin as 0.6mm. Even gentle sanding can go through it, exposing the chipboard or MDF underneath. If your furniture is veneered, stick to marker and wax methods only.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-dark-wood mb-2">Skipping the Sealer</h3>
                      <p className="text-forest-green">After staining, you must apply a protective sealer or finish. Stain alone provides no protection and will quickly fade, absorb spills, and attract dirt. A clear coat of polyurethane or furniture wax is essential for a lasting repair.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Prevention */}
            <section id="prevention" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">
                Preventing Future Scratches
              </h2>

              <p className="text-forest-green mb-6 leading-relaxed">
                Prevention is always easier (and cheaper) than repair. Here are practical measures that significantly reduce scratching.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Use Felt Pads</h3>
                  <p className="text-sm text-forest-green">
                    Apply self-adhesive felt pads under all objects that sit on wooden surfaces: vases, lamps, ornaments, coasters. Replace them every 6&ndash;12 months as they collect grit that can itself cause scratches.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Tablecloths and Placemats</h3>
                  <p className="text-sm text-forest-green">
                    Use quality placemats and coasters for every meal. The underside of ceramic plates and glasses can be abrasive. A simple cloth placemat prevents years of daily micro-scratching that dulls table surfaces.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Lift, Do Not Slide</h3>
                  <p className="text-sm text-forest-green">
                    Train family members to lift objects rather than sliding them across wooden surfaces. This one habit prevents more scratches than any other measure. This includes plates, laptops, books, and any decorative items.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-dark-wood mb-2">Regular Waxing</h3>
                  <p className="text-sm text-forest-green">
                    Apply furniture wax (like Briwax or beeswax polish) every 3&ndash;6 months. The wax layer acts as a sacrificial barrier &mdash; scratches affect the wax rather than the wood finish. It also keeps wood hydrated and prevents drying-related damage.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Can you really fix furniture scratches with a walnut?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Yes, rubbing a raw walnut kernel over minor surface scratches works surprisingly well on wooden furniture. The natural oils in the walnut fill the scratch and darken it to blend with the surrounding wood. This method works best on light, surface-level scratches on medium to dark wood that have not penetrated through the finish into the wood itself. It will not work on deep scratches or very light-coloured wood.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">What is the best product to remove scratches from wood furniture in South Africa?</h3>
                  <p className="text-forest-green leading-relaxed">
                    For minor scratches, furniture touch-up markers (available from Builders Warehouse, Leroy Merlin, or most hardware stores) are the most convenient option. For medium scratches that need filling, Woodoc Touch-Up Oil or Briwax are excellent locally available products. For a comprehensive repair of medium scratches, Woodoc Gel Stain combined with Woodoc 5 or 10 sealer delivers professional-quality results. For deep scratches or gouges, we recommend <Link href="/scratched-furniture-repair" className="text-dark-wood font-semibold hover:underline">professional scratch repair</Link>.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">How do I fix deep scratches and gouges in wooden furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Deep scratches and gouges require filling with wood filler or wax sticks carefully matched to your wood colour, followed by precise sanding and refinishing. For the best results on prominent surfaces, professional repair is recommended because colour-matching, grain painting, and seamless blending are skills that take years to develop. At <Link href="/wood-furniture-repair" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link>, deep scratch repair typically costs R500&ndash;R1,500 depending on the size and location of the damage.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">Will sanding remove scratches from wooden furniture?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Sanding can effectively remove medium-depth scratches from solid wood furniture. Start with 150-grit sandpaper and progress to 220-grit for a smooth result, always sanding in the direction of the wood grain. However, sanding only works on solid wood &mdash; never sand veneer, MDF, or laminate surfaces as you will go through the thin decorative layer and cause permanent damage. After sanding, you will need to re-stain and seal the area to match the surrounding finish.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">When should I call a professional to fix furniture scratches?</h3>
                  <p className="text-forest-green leading-relaxed">
                    Call a professional when scratches are deep enough to catch your fingernail firmly, when the piece is an antique or has significant monetary or sentimental value, when scratches cover a large area that would benefit from <Link href="/furniture-refinishing" className="text-dark-wood font-semibold hover:underline">full refinishing</Link>, when the furniture has a specialty finish like French polish, or when previous DIY attempts have made the damage more visible. A professional assessment from <Link href="/book-consultation" className="text-dark-wood font-semibold hover:underline">Blooming Furniture</Link> is always free.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: CTA */}
            <section id="contact" className="bg-forest-green text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Professional Help With Scratched Furniture?</h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Whether the scratches are beyond DIY repair or you simply want a perfect result, our team can help. Send us photos of the damage and we will provide a free assessment and quote within 24&ndash;48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="https://wa.me/27836860706?text=Hi%20Blooming%20Furniture%2C%20I%20have%20scratched%20furniture%20that%20needs%20repair.%20Can%20you%20help?"
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
                Blooming Furniture &mdash; Professional Scratch Repair &amp; Wood Restoration on the West Coast, South Africa
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
}
