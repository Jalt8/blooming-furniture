import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Check, Star, Phone, MessageCircle, Clock, Shield, Layers, Eye } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'French Polishing Services West Coast | Traditional Wood Finishing | Blooming Furniture',
  description: 'Professional French polishing services on the West Coast, South Africa. Traditional shellac finishing for antiques & fine furniture. Unmatched depth & lustre. Prices from R2,000. Free quotes!',
  keywords: 'French polishing West Coast, French polish furniture, shellac finishing, traditional wood finishing, antique French polish, hand-rubbed finish, furniture French polishing South Africa, Langebaan French polish',
  openGraph: {
    title: 'French Polishing Services West Coast | Blooming Furniture',
    description: 'Traditional French polishing for antiques & fine furniture. Hand-applied shellac finishing with unmatched depth and warmth.',
    url: 'https://bloomingfurniture.co.za/french-polishing',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/french-polishing',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "French Polishing",
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
  "description": "Professional French polishing services using traditional shellac and rubber pad techniques. Ideal for antiques, fine furniture, and heirloom pieces requiring unmatched depth of finish.",
  "offers": {
    "@type": "Offer",
    "priceRange": "R2,000 - R8,000"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is French polishing and how is it different from varnishing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "French polishing is a traditional hand-applied finishing technique that uses shellac dissolved in alcohol, applied with a rubber pad in many thin coats. Unlike varnishing, which sits on top of the wood as a film, French polish penetrates the grain and builds up gradually to create unmatched depth, clarity, and warmth. The result is a mirror-like finish that showcases the wood's natural figure in a way no spray or brush-on finish can replicate."
      }
    },
    {
      "@type": "Question",
      "name": "How much does French polishing cost in South Africa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "French polishing costs in South Africa typically range from R2,000 to R8,000 depending on the size of the piece, the condition of the existing finish, and the level of gloss desired. Small items like side tables start around R2,000-R3,000, dining tables range from R4,000-R7,000, and large or complex pieces such as pianos or display cabinets can reach R8,000 or more. We provide free, detailed quotes after assessing your piece."
      }
    },
    {
      "@type": "Question",
      "name": "Is French polishing suitable for all furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "French polishing is best suited for antiques, fine furniture, display pieces, and any item where you want maximum visual depth and beauty. It is not ideal for kitchen tables or surfaces subject to heavy daily use, heat, or moisture, as shellac is more delicate than modern polyurethane finishes. For high-traffic surfaces, we may recommend a durable alternative or a hybrid approach combining French polish with a protective topcoat."
      }
    },
    {
      "@type": "Question",
      "name": "How long does French polishing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "French polishing is a labour-intensive process that requires patience. A small piece may take 1-2 weeks, while a dining table or large cabinet can take 2-4 weeks. The technique involves applying dozens of ultra-thin coats of shellac, with drying time between each session. Rushing the process compromises quality, so we allow each coat to cure properly for the best results."
      }
    }
  ]
};

const finishLevels = [
  {
    title: "High Gloss",
    description: "A mirror-like finish with maximum depth and reflectivity. The classic French polish look that showcases the finest wood grain detail.",
    bestFor: "Pianos, display cabinets, showpiece tables"
  },
  {
    title: "Semi-Gloss",
    description: "A rich, warm lustre with a gentle sheen. Elegant and refined without being overly reflective.",
    bestFor: "Dining tables, sideboards, antique desks"
  },
  {
    title: "Satin",
    description: "A soft, understated glow that feels natural and timeless. Hides minor imperfections while retaining warmth.",
    bestFor: "Bedroom furniture, bookcases, everyday antiques"
  },
  {
    title: "Matte (Rubbed Effect)",
    description: "A barely-there sheen achieved by rubbing back the final coat. The most subtle finish with a hand-rubbed feel.",
    bestFor: "Period pieces, colonial furniture, Arts & Crafts style"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Stripping & Preparation",
    description: "We carefully remove the old finish, whether it is varnish, lacquer, or a previous French polish. The bare wood is then sanded through multiple grits until silky smooth, and any repairs are completed."
  },
  {
    step: 2,
    title: "Grain Filling",
    description: "Open-grained woods like oak or mahogany are filled with a compatible grain filler to create a perfectly level surface. This step is critical for achieving the mirror-like depth that French polishing is known for."
  },
  {
    step: 3,
    title: "Building the Body",
    description: "Using a rubber pad (a ball of cotton wrapped in lint-free cloth) charged with shellac and a trace of oil, we apply dozens of ultra-thin coats in sweeping figure-eight motions. Each session adds translucent depth."
  },
  {
    step: 4,
    title: "Colouring (If Required)",
    description: "If the client wishes to adjust the tone, we introduce spirit-soluble stains or tinted shellac between body coats. This allows precise colour matching and enhancement of the wood's natural warmth."
  },
  {
    step: 5,
    title: "Spiriting Off",
    description: "The final stage removes any residual oil from the surface and brings the finish to its full clarity. We use a nearly dry rubber with a few drops of methylated spirits, applied in light, rapid strokes."
  },
  {
    step: 6,
    title: "Curing & Inspection",
    description: "The completed piece is allowed to cure undisturbed for several days. We then perform a thorough quality inspection under multiple light angles to ensure a flawless, consistent finish across every surface."
  }
];

export default function FrenchPolishingPage() {
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
            { label: 'French Polishing', href: '/french-polishing' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-dark-wood via-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-10 w-10 text-golden-center" />
                  <span className="text-golden-center font-semibold">Traditional Hand-Applied Finishing</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  French Polishing Services on the West Coast
                </h1>
                <p className="text-xl mb-6">
                  Nothing matches the depth and warmth of a hand-applied French polish. This centuries-old technique transforms fine wood into a mirror of rich, luminous beauty that modern spray finishes simply cannot replicate.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Traditional shellac & rubber pad technique</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Ideal for antiques & fine furniture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>From R2,000 | Free assessment</span>
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
                  src="/images/portfolio/Chest5.jpg"
                  alt="French polished furniture with deep lustre finish"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white-daisy p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 fill-golden-center text-golden-center" />
                    <div>
                      <div className="font-bold text-dark-wood">Unmatched Depth</div>
                      <div className="text-sm text-forest-green">Hand-Applied Lustre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is French Polishing */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
                What Is French Polishing?
              </h2>
              <p className="text-center text-forest-green mb-8 max-w-3xl mx-auto">
                The gold standard of wood finishing, perfected over centuries.
              </p>
              <div className="prose prose-lg max-w-none text-forest-green space-y-4">
                <p>
                  French polishing is one of the oldest and most revered wood finishing techniques in existence. Originating in the early 19th century, it involves the meticulous hand application of shellac -- a natural resin secreted by the lac beetle -- dissolved in denatured alcohol. The finish is built up layer by layer using a specially made rubber pad, a wad of cotton wool wrapped tightly in lint-free cloth.
                </p>
                <p>
                  Unlike modern varnishes or polyurethane coatings that sit as a film on top of the wood, French polish penetrates into the grain with each successive coat. The result is a finish of extraordinary depth and transparency that allows every detail of the wood&apos;s natural figure, colour, and chatoyance to shine through. Under light, a properly French-polished surface appears to glow from within.
                </p>
                <p>
                  The technique is labour-intensive. A single piece may require twenty to forty individual coats, each applied in deliberate, overlapping figure-eight strokes. Between sessions, the work must rest and cure. It is this patience and repetition that produces the unmistakable richness for which French polishing is prized -- a warmth and clarity that no spray gun or brush can achieve.
                </p>
                <p>
                  On the West Coast, where many families own heirloom furniture crafted from South African hardwoods such as Yellowwood, Stinkwood, and Kiaat, French polishing is the ideal way to honour the wood&apos;s heritage. Whether you have a Victorian dining table, an Edwardian writing desk, or a Cape Dutch sideboard, this finish brings out the absolute best in fine timber.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When Is French Polishing Appropriate */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              When Is French Polishing the Right Choice?
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              French polishing is the premium option for pieces that deserve the very best -- but it is not for every situation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-wood mb-4 flex items-center gap-2">
                  <Check className="h-6 w-6 text-forest-green" />
                  Ideal For
                </h3>
                <ul className="space-y-3 text-forest-green">
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Antique furniture</strong> -- preserves historical authenticity and value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Display cabinets and sideboards</strong> -- maximum visual impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Writing desks and bureaus</strong> -- elegant, warm surface feel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Musical instruments</strong> -- pianos, guitar bodies, violin cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Fine hardwoods</strong> -- Yellowwood, Stinkwood, Mahogany, Walnut, Rosewood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Period-correct restoration</strong> -- matching original finishes on heritage pieces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-wood mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-forest-green" />
                  We May Recommend Alternatives For
                </h3>
                <ul className="space-y-3 text-forest-green">
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Kitchen tables</strong> -- heavy daily use, hot plates, and spills need tougher finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Children&apos;s furniture</strong> -- requires a more resilient, child-proof surface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Outdoor furniture</strong> -- shellac is not moisture or UV resistant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-golden-center font-bold">-</span>
                    <span><strong>Bathroom pieces</strong> -- high-humidity environments degrade shellac</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-forest-green bg-daisy-cream p-3 rounded">
                  Not sure which finish is right? We offer a free assessment and will always recommend the best option for your piece and lifestyle. See our full range of <Link href="/furniture-refinishing" className="text-forest-green font-semibold underline hover:text-dark-wood">furniture refinishing services</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The French Polishing Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Our French Polishing Process
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Every step is performed by hand with meticulous attention to detail. There are no shortcuts to a perfect French polish.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, idx) => (
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

        {/* Finish Levels */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Choose Your Level of Lustre
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              French polishing is not limited to a high-gloss mirror finish. We can achieve a range of sheens to suit your taste and the character of your piece.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {finishLevels.map((level, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <Layers className="h-10 w-10 text-forest-green mb-3" />
                  <h3 className="text-xl font-bold text-dark-wood mb-2">{level.title}</h3>
                  <p className="text-sm text-forest-green mb-4">{level.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm text-forest-green">
                      <strong>Best for:</strong> {level.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Expectations */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              What to Expect: Before and After
            </h2>
            <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
              French polishing can breathe new life into tired, worn, or damaged furniture. Here is what our clients typically experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <Eye className="h-10 w-10 text-golden-center mb-3" />
                <h3 className="font-bold text-golden-center mb-2">Faded & Dull Surfaces</h3>
                <p className="text-sm mb-2"><strong>Before:</strong> Years of sun exposure, cleaning products, and wear have left the surface flat and lifeless.</p>
                <p className="text-sm"><strong>After:</strong> Deep, warm lustre returns. The wood grain becomes vivid and three-dimensional again, as if lit from within.</p>
              </div>
              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <Eye className="h-10 w-10 text-golden-center mb-3" />
                <h3 className="font-bold text-golden-center mb-2">Scratched & Ring-Marked</h3>
                <p className="text-sm mb-2"><strong>Before:</strong> Water rings, scratches, and minor surface damage obscure the beauty of the wood.</p>
                <p className="text-sm"><strong>After:</strong> A flawless, glass-smooth surface with no visible blemishes. The new finish is even and consistent across the entire piece.</p>
              </div>
              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <Eye className="h-10 w-10 text-golden-center mb-3" />
                <h3 className="font-bold text-golden-center mb-2">Previously Varnished</h3>
                <p className="text-sm mb-2"><strong>Before:</strong> A thick, plasticky varnish coat that yellowed over time and hides the true character of the wood.</p>
                <p className="text-sm"><strong>After:</strong> The synthetic film is replaced with natural shellac that enhances rather than masks the wood. Colour and figure are revealed in their full glory.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              French Polishing Pricing Guide
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Every piece is unique, so we provide detailed quotes after assessment. These ranges give you a starting point.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="font-bold text-dark-wood mb-3">Small Pieces</h3>
                  <p className="text-2xl font-bold text-forest-green mb-2">R2,000 - R3,500</p>
                  <p className="text-sm text-forest-green">Side tables, occasional tables, small desks, jewellery boxes, small cabinets</p>
                </div>
                <div className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="font-bold text-dark-wood mb-3">Medium Pieces</h3>
                  <p className="text-2xl font-bold text-forest-green mb-2">R3,500 - R5,500</p>
                  <p className="text-sm text-forest-green">Dining tables (4-seater), writing desks, dressers, bookcases, sideboards</p>
                </div>
                <div className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="font-bold text-dark-wood mb-3">Large Pieces</h3>
                  <p className="text-2xl font-bold text-forest-green mb-2">R5,500 - R8,000</p>
                  <p className="text-sm text-forest-green">Large dining tables (6-8 seater), display cabinets, wardrobes, pianos</p>
                </div>
                <div className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="font-bold text-dark-wood mb-3">Turnaround Time</h3>
                  <p className="text-2xl font-bold text-forest-green mb-2">1 - 4 Weeks</p>
                  <p className="text-sm text-forest-green">Depending on size, condition, and number of coats required. We never rush the process.</p>
                </div>
              </div>
              <p className="text-center text-sm text-forest-green mt-6">
                Prices are estimates and depend on current finish condition, wood type, and desired sheen level. For a detailed breakdown, see our{' '}
                <Link href="/blog/furniture-restoration-cost-south-africa" className="font-semibold underline hover:text-dark-wood">
                  furniture restoration cost guide
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Choose Blooming Furniture for French Polishing?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Traditional Expertise</h3>
                <p className="text-forest-green">Trained in authentic French polishing technique with years of hands-on practice</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Quality Guaranteed</h3>
                <p className="text-forest-green">We stand behind every finish. Not satisfied? We will make it right.</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">No Shortcuts</h3>
                <p className="text-forest-green">Every coat is applied by hand. We allow proper curing time between sessions.</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Antique Specialists</h3>
                <p className="text-forest-green">We understand period furniture and how to enhance its value through proper finishing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-dark-wood text-center mb-8">
              Related Services You May Need
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/antique-restoration" className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300 block">
                <h4 className="font-bold text-dark-wood mb-2">Antique Restoration</h4>
                <p className="text-sm text-forest-green">Full structural and cosmetic restoration for period furniture and heirloom pieces.</p>
              </Link>
              <Link href="/furniture-refinishing" className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300 block">
                <h4 className="font-bold text-dark-wood mb-2">Furniture Refinishing</h4>
                <p className="text-sm text-forest-green">Custom stains, paints, and modern finishes for a complete furniture transformation.</p>
              </Link>
              <Link href="/blog/furniture-restoration-cost-south-africa" className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300 block">
                <h4 className="font-bold text-dark-wood mb-2">Cost Guide</h4>
                <p className="text-sm text-forest-green">Detailed breakdown of furniture restoration costs in South Africa for 2026.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Frequently Asked Questions About French Polishing
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
        <section className="py-16 bg-gradient-to-br from-dark-wood to-forest-green text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="h-16 w-16 text-golden-center mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready for a Finish of Unmatched Beauty?</h2>
            <p className="text-xl mb-8">
              Send us photos of your furniture and we will advise whether French polishing is the right choice. Free consultations and detailed quotes provided.
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
              French Polishing Across the West Coast
            </h3>
            <p className="text-forest-green mb-4">
              Langebaan - Saldanha Bay - Vredenburg - Paternoster - Velddrif - Hopefield - Yzerfontein - Elands Bay
            </p>
            <p className="text-sm text-forest-green">
              Collection and delivery available. Contact us to arrange pickup of your piece.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
