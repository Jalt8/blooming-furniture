import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vintage Bar Cart Whitewash Refinishing | Tea Trolley Restoration | Blooming Furniture',
  description: 'Professional restoration of vintage serving cart with claw feet into chic whitewashed bar trolley. Features raised gallery edges, tiered open shelving, rolling casters perfect for coastal and French country entertaining.',
  keywords: 'bar cart refinishing, tea trolley restoration, vintage serving cart, whitewash bar cart, coastal bar trolley, claw foot cart, mobile bar cart, entertaining furniture, French country bar cart, vintage trolley refinishing',
  openGraph: {
    title: 'Vintage Bar Cart Whitewash Refinishing - Elegant Tea Trolley Transformation',
    description: 'Professional transformation of vintage serving cart into sophisticated whitewashed bar trolley. Features decorative claw feet, raised gallery edges, and tiered shelving for modern entertaining.',
    images: ['/images/portfolio/portfolio-40.jpeg'],
    type: 'article',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vintage Bar Cart Whitewash Refinishing - Tea Trolley Restoration",
  "description": "Professional furniture restoration transforming elegant vintage serving cart into chic whitewashed entertaining piece with claw feet, raised gallery edges, and rolling casters.",
  "image": [
    "https://bloomingfurniture.co.za/images/portfolio/portfolio-40.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/portfolio-41.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/portfolio-39.jpeg"
  ],
  "author": {
    "@type": "Organization",
    "name": "Blooming Furniture"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bloomingfurniture.co.za/logo.png"
    }
  }
};

const refinishingSteps = [
  {
    title: "Complete Finish Stripping",
    description: "Removed original dark wood finish using professional stripping techniques, working outdoors to safely eliminate all existing coating from frame, shelves, and decorative elements."
  },
  {
    title: "Thorough Surface Preparation",
    description: "Meticulously sanded all components including frame structure, tiered shelves, raised gallery edges, and decorative claw feet ensuring smooth foundation for refinishing."
  },
  {
    title: "Wood Conditioning",
    description: "Applied wood conditioner throughout frame and shelf surfaces ensuring even absorption of whitewash finish and preventing blotchiness on this vintage piece."
  },
  {
    title: "Claw Foot Detail Restoration",
    description: "Carefully restored carved claw foot details preserving vintage charm and dimensional character while ensuring smooth finish application in all carved areas."
  },
  {
    title: "Raised Gallery Edge Preservation",
    description: "Refinished decorative raised gallery edges on top shelf maintaining practical containment for bottles and glassware while achieving beautiful finish."
  },
  {
    title: "Custom Whitewash Application",
    description: "Applied sophisticated whitewash/cream finish creating elegant coastal-chic aesthetic that serves as versatile backdrop for entertaining essentials."
  },
  {
    title: "Tiered Shelf Refinishing",
    description: "Refinished open shelving across multiple tiers ensuring smooth, durable surfaces suitable for displaying barware, decanters, and decorative accessories."
  },
  {
    title: "Caster Functionality Restoration",
    description: "Cleaned and restored rolling caster wheels ensuring smooth mobility between rooms and outdoor entertaining areas with effortless rolling action."
  },
  {
    title: "Multiple Protective Clear Coats",
    description: "Applied several layers of protective clear coating ensuring durability for entertaining use including glassware placement, bottle service, and regular handling."
  },
  {
    title: "Professional Smooth Finish",
    description: "Achieved flawless smooth finish throughout all surfaces suitable for delicate glassware and serving pieces without snags or rough areas."
  }
];

export default function VintageBarCartWhitewashRefinishing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white-daisy">
        {/* Header */}
        <header className="bg-gradient-to-b from-daisy-cream to-white-daisy py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/portfolio"
              className="text-forest-green hover:text-dark-wood mb-6 inline-block"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-dark-wood mb-6">
              Vintage Bar Cart Whitewash Refinishing
            </h1>
            <p className="text-xl text-forest-green leading-relaxed">
              Professional restoration transforming elegant vintage serving cart into sophisticated coastal-chic bar trolley. Features decorative claw feet, raised gallery edges, tiered open shelving, and convenient rolling casters perfect for modern entertaining.
            </p>
          </div>
        </header>

        {/* Before/During/After Comparison */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Complete Transformation Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img
                  src="/images/portfolio/portfolio-41.jpeg"
                  alt="Original dark wood finish bar cart in workshop before refinishing"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 font-semibold">
                  BEFORE
                </p>
                <p className="text-center text-forest-green text-sm italic">
                  Original dark wood finish
                </p>
              </div>
              <div>
                <img
                  src="/images/portfolio/portfolio-39.jpeg"
                  alt="Stripped bar cart frame during outdoor refinishing process"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 font-semibold">
                  DURING RESTORATION
                </p>
                <p className="text-center text-forest-green text-sm italic">
                  Stripped and prepared
                </p>
              </div>
              <div>
                <img
                  src="/images/portfolio/portfolio-40.jpeg"
                  alt="Completed whitewashed bar cart styled in home with decorative accessories"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 font-semibold">
                  AFTER
                </p>
                <p className="text-center text-forest-green text-sm italic">
                  Whitewashed and styled
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Bar Cart Features & Details
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Decorative Claw Feet</h3>
                <p className="text-forest-green">
                  Beautifully carved claw foot details adding vintage charm and sophisticated elegance to this entertaining piece.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Raised Gallery Edges</h3>
                <p className="text-forest-green">
                  Practical raised gallery edges on top shelf providing secure containment for bottles, decanters, and glassware during service.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Tiered Open Shelving</h3>
                <p className="text-forest-green">
                  Multiple shelf levels offering generous display and storage space for barware, spirits, and decorative accessories.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Rolling Casters</h3>
                <p className="text-forest-green">
                  Functional rolling wheels ensuring easy mobility between rooms, outdoor spaces, or wherever entertaining happens.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Whitewash Finish</h3>
                <p className="text-forest-green">
                  Sophisticated cream/whitewash finish creating elegant backdrop that complements any glassware, bottles, or decorative styling.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Entertaining Versatility</h3>
                <p className="text-forest-green">
                  Perfect for cocktail service, afternoon tea trolley, coffee station, or mobile drink cart for any gathering.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Display Functionality</h3>
                <p className="text-forest-green">
                  Open shelving showcases beautiful glassware collections, crystal decanters, and curated bar accessories.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Coastal-Chic Aesthetic</h3>
                <p className="text-forest-green">
                  Refined whitewashed finish perfect for coastal, French country, or modern eclectic interior styles.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Vintage Character</h3>
                <p className="text-forest-green">
                  Preserved vintage details including carved elements and classic proportions maintaining timeless entertaining elegance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refinishing Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Professional Restoration Process
            </h2>
            <div className="space-y-8">
              {refinishingSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green text-white-daisy rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-wood mb-2">
                      {step.title}
                    </h3>
                    <p className="text-forest-green leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Result Description */}
        <section className="py-16 px-4 bg-golden-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-6 text-center">
              Sophisticated Entertaining Transformation
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-forest-green leading-relaxed mb-4">
                This vintage bar cart restoration showcases a stunning transformation from dated dark wood to sophisticated coastal-chic serving trolley. The soft whitewashed finish creates an elegant, versatile backdrop for entertaining essentials while maintaining the piece's vintage character and charm.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                The raised gallery edges on the top shelf provide practical containment for bottles and glassware, preventing accidents during service or when rolling the cart between locations. This thoughtful design detail combines beauty with functionality, essential for any entertaining piece.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Tiered open shelving offers generous display and storage space perfect for showcasing crystal decanters, beautiful glassware collections, bar tools, and curated accessories. The multi-level design allows for organized arrangement of everything needed for cocktail hour, afternoon tea service, or casual entertaining.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Preserved decorative claw feet add vintage charm and sophisticated elegance, grounding the piece visually while the whitewashed finish keeps the overall aesthetic light and fresh. These carved details showcase the quality craftsmanship of vintage furniture construction.
              </p>
              <p className="text-forest-green leading-relaxed">
                Rolling casters ensure easy mobility, allowing this versatile piece to serve wherever needed - from indoor dining areas to outdoor patios for summer entertaining. Now serving as both functional bar service and stylish accent piece, this restored trolley proves perfect for modern entertaining needs while bringing effortless elegance to coastal, French country, or eclectic interiors.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Technical Excellence in Bar Cart Restoration
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Carved Detail Preservation
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Restoring intricate claw foot carvings while achieving smooth whitewash finish requires careful technique and attention to detail. Our process preserves dimensional carved elements while ensuring even finish coverage that enhances rather than obscures these vintage details.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Gallery Edge Refinishing
                </h3>
                <p className="text-forest-green leading-relaxed">
                  The raised gallery edges require precise refinishing to maintain their functional profile while achieving beautiful finish. These practical elements must be both visually appealing and sufficiently durable to handle bottle placement and service use without chipping or wearing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Entertaining Durability
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Bar carts experience unique demands including glassware placement, liquid spills, frequent moving, and regular handling. Multiple protective clear coat layers ensure this refinished piece withstands entertaining use while maintaining its beautiful appearance through countless cocktail hours and gatherings.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Smooth Surface Finish
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Achieving perfectly smooth surfaces suitable for delicate glassware and serving pieces requires expert finishing techniques. The result is snag-free shelving that won't catch on glass bases or scratch fine crystal, ensuring both aesthetic beauty and practical functionality for sophisticated entertaining.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Styling Ideas */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Entertaining & Styling Ideas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Classic Bar Service
                </h3>
                <ul className="space-y-3 text-forest-green">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Top shelf: Premium spirits in crystal decanters with gallery edge protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Middle tier: Glassware collection including cocktail, wine, and tumbler glasses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Bottom shelf: Bar tools, cocktail napkins, mixers, and garnish accessories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Add ice bucket, cocktail shaker, and fresh flowers for entertaining elegance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Alternative Uses
                </h3>
                <ul className="space-y-3 text-forest-green">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Afternoon tea trolley with fine china, teapot, and pastry tiered stands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Coffee station with espresso machine, mugs, and coffee accessories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Outdoor beverage cart for patio entertaining and summer gatherings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Guest room service cart for welcoming visitors with refreshments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-serif text-dark-wood mb-6">
              Transform Your Vintage Bar Cart
            </h2>
            <p className="text-xl text-forest-green mb-8">
              Have a vintage serving cart or tea trolley that needs updating? We specialize in transforming entertaining furniture into sophisticated coastal-chic pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-forest-green text-white-daisy rounded-full text-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-golden-center text-dark-wood rounded-full text-lg font-semibold hover:bg-white-daisy transition-colors duration-300"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
