import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Check, Star, Phone, MessageCircle, Clock, Shield, Wind, Droplets, Umbrella } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Outdoor Furniture Restoration West Coast | Weather-Proof Refinishing',
  description: 'Professional outdoor furniture restoration on the West Coast, South Africa. Weather-proof refinishing for teak benches, patio sets, garden chairs & daybeds. Marine-grade UV-resistant coatings. Free quotes!',
  keywords: 'outdoor furniture restoration, outdoor furniture repair, teak furniture restoration, patio furniture refinishing, garden furniture repair, weather-proof furniture finish, outdoor furniture West Coast, marine-grade furniture finish',
  openGraph: {
    title: 'Outdoor Furniture Restoration West Coast | Blooming Furniture',
    description: 'Restore and weather-proof your outdoor furniture. Marine-grade finishes, UV protection, and salt-resistant coatings for West Coast living.',
    url: 'https://bloomingfurniture.co.za/outdoor-furniture-restoration',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/outdoor-furniture-restoration',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Outdoor Furniture Restoration",
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
  "description": "Professional outdoor furniture restoration with marine-grade, UV-resistant, and weather-proof finishes. Specialising in teak, hardwood patio sets, garden chairs, and daybeds for the West Coast climate.",
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
      "name": "How much does outdoor furniture restoration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outdoor furniture restoration typically costs R2,000-R8,000 depending on the piece size and condition. Single garden chairs start from R800-R1,500. A teak bench runs R2,000-R3,500. A full patio dining set (table + 6 chairs) ranges from R5,000-R8,000. Marine-grade weather-proof finishes are included in these prices. We provide free quotes after assessment."
      }
    },
    {
      "@type": "Question",
      "name": "How do you protect outdoor furniture from salt air damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use a multi-layer protection system: first, the wood is treated with a penetrating wood preservative. Then we apply marine-grade varnish or UV-resistant exterior oil specifically formulated for salt air environments. For exposed coastal locations, we recommend teak oil or marine spar varnish which creates a tough, flexible barrier against salt, UV rays, and moisture. We also advise on placement and seasonal maintenance to maximise longevity."
      }
    },
    {
      "@type": "Question",
      "name": "Can grey, weathered teak furniture be restored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Grey, weathered teak is not damaged -- it has simply developed a natural silver patina from UV exposure. We can restore it to its original honey-gold colour through a process of cleaning, light sanding, and teak oil application. Alternatively, some clients prefer the grey patina look, in which case we simply clean, repair any structural issues, and apply a clear protective coat to lock in the weathered aesthetic."
      }
    },
    {
      "@type": "Question",
      "name": "How often should outdoor furniture be re-treated on the West Coast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the West Coast, where salt air, UV exposure, and wind are constant, we recommend re-oiling or re-coating outdoor furniture every 12-18 months for optimal protection. Furniture in fully exposed positions (no shade or cover) may need attention every 8-12 months. Covered patio furniture can often go 18-24 months between treatments. Regular maintenance dramatically extends the life of the finish and the wood itself."
      }
    }
  ]
};

const outdoorChallenges = [
  {
    title: "Salt Air Corrosion",
    description: "The West Coast&apos;s salt-laden air penetrates finishes and wood fibres, causing accelerated degradation. Metal hardware rusts, wood fibres break down, and finishes peel faster than inland areas.",
    icon: Wind,
    solution: "Marine-grade finishes and stainless steel hardware replacements"
  },
  {
    title: "UV Sun Damage",
    description: "South Africa&apos;s intense UV radiation bleaches wood colour, breaks down finish molecules, and causes surface cracking and checking. The West Coast&apos;s clear skies intensify this effect.",
    icon: Sun,
    solution: "UV-resistant coatings and pigmented oils that filter harmful rays"
  },
  {
    title: "Rain & Moisture",
    description: "Winter storms drive rain into joints and grain. Repeated wetting and drying cycles cause wood to swell, contract, crack, and warp. Mould and mildew thrive in damp coastal conditions.",
    icon: Droplets,
    solution: "Penetrating water repellents, anti-fungal treatments, and sealed joints"
  },
  {
    title: "Wind & Abrasion",
    description: "The West Coast wind carries fine sand particles that sandblast furniture surfaces, wearing through finishes prematurely. Strong gusts can also stress joints and connections.",
    icon: Wind,
    solution: "Hard-wearing finishes and reinforced joint construction"
  }
];

const furnitureTypes = [
  {
    title: "Teak Benches & Seats",
    description: "Garden benches, park benches, memorial benches, and tree seats. Teak is ideal for outdoor use but still benefits enormously from proper restoration and protection.",
    priceRange: "R2,000 - R3,500"
  },
  {
    title: "Patio Dining Sets",
    description: "Outdoor dining tables and chair sets in teak, hardwood, or pine. We restore the full set to matching condition, including tightening all joints and re-finishing in a uniform colour.",
    priceRange: "R5,000 - R8,000"
  },
  {
    title: "Daybeds & Sun Loungers",
    description: "Poolside daybeds, sun loungers, and reclining garden chairs. These large pieces take a beating from UV, chlorine splash, and sunscreen. We strip back and refinish with resistant coatings.",
    priceRange: "R2,500 - R5,000"
  },
  {
    title: "Garden Chairs & Rockers",
    description: "Adirondack chairs, Cape-style strandstoel, rocking chairs, and folding garden chairs. Individual chairs are cost-effective to restore and extend their life by many years.",
    priceRange: "R800 - R2,000"
  },
  {
    title: "Planter Boxes & Pergola Elements",
    description: "Wooden planter boxes, raised garden beds, and pergola seating. We treat with wood preservative, repair rot damage, and apply weather-resistant finishes.",
    priceRange: "R1,500 - R4,000"
  },
  {
    title: "Boat & Marina Furniture",
    description: "Dock seating, marina bar furniture, and boat deck chairs. These require the highest level of marine-grade protection. We use the same products trusted by boatbuilders.",
    priceRange: "R2,500 - R6,000"
  }
];

const finishTypes = [
  {
    name: "Teak Oil",
    description: "Penetrates deep into teak and hardwoods, nourishing the wood and enhancing its natural golden colour. Easy to maintain with re-application.",
    durability: "8-12 months between coats",
    bestFor: "Teak, Iroko, Balau"
  },
  {
    name: "Marine Spar Varnish",
    description: "A tough, flexible film finish that provides excellent UV and moisture protection. Builds a visible gloss layer that repels water and salt.",
    durability: "12-18 months in exposed conditions",
    bestFor: "Hardwood dining sets, display pieces"
  },
  {
    name: "Exterior Wood Oil",
    description: "A blend of natural and synthetic oils with UV filters. Soaks into the wood for protection from within. Available in clear or tinted options.",
    durability: "12-18 months",
    bestFor: "All outdoor wood types"
  },
  {
    name: "Exterior Paint",
    description: "Full-coverage exterior paint in any colour. Provides maximum UV and moisture protection by completely sealing the wood surface.",
    durability: "2-4 years between recoats",
    bestFor: "Pine furniture, planter boxes, pergolas"
  }
];

const process = [
  {
    step: 1,
    title: "Assessment",
    description: "We inspect your outdoor furniture for structural damage, wood rot, finish failure, hardware corrosion, and mould. We photograph the current condition and provide a detailed restoration plan."
  },
  {
    step: 2,
    title: "Collection",
    description: "We collect the furniture from your home, garden, or patio. Large items are handled with care. We recommend bringing outdoor furniture indoors for restoration during winter."
  },
  {
    step: 3,
    title: "Deep Cleaning",
    description: "All dirt, mould, mildew, and grey oxidation is removed using appropriate cleaning solutions. For teak, we use specialised teak cleaner. For painted pieces, we assess for lead paint before stripping."
  },
  {
    step: 4,
    title: "Structural Repair",
    description: "Loose joints are re-glued with waterproof adhesive. Rotten wood is cut out and replaced with matching timber. Rusted hardware is replaced with stainless steel. All structural issues are resolved."
  },
  {
    step: 5,
    title: "Sanding & Preparation",
    description: "Surfaces are sanded to remove old finish and open the grain for optimal absorption of the new protective treatment. We use progressive grits for a smooth finish."
  },
  {
    step: 6,
    title: "Finishing & Protection",
    description: "Multiple coats of your chosen weather-proof finish are applied. Between coats, we lightly sand for adhesion. The final coat is cured fully before delivery."
  }
];

const maintenanceTips = [
  {
    season: "Summer",
    tips: [
      "Apply teak oil or exterior oil at the start of the season",
      "Use furniture covers when away for extended periods",
      "Rinse off salt spray weekly with fresh water",
      "Move furniture into shade during the hottest midday hours if possible"
    ]
  },
  {
    season: "Winter",
    tips: [
      "Consider bringing lightweight pieces indoors or under cover",
      "Apply a fresh coat of oil before the first rains",
      "Check for mould and treat early with diluted vinegar solution",
      "Ensure furniture is not sitting in puddles or on wet ground"
    ]
  },
  {
    season: "Year-Round",
    tips: [
      "Brush off dust and debris regularly",
      "Tighten any bolts or screws that work loose",
      "Avoid pressure washing, which can damage wood fibres",
      "Schedule professional re-treatment every 12-18 months"
    ]
  }
];

export default function OutdoorFurnitureRestorationPage() {
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
            { label: 'Outdoor Furniture Restoration', href: '/outdoor-furniture-restoration' }
          ]}
          className="max-w-7xl mx-auto"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="h-10 w-10 text-golden-center" />
                  <span className="text-golden-center font-semibold">Weather-Proof Restoration Specialists</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Outdoor Furniture Restoration for the West Coast
                </h1>
                <p className="text-xl mb-6">
                  The West Coast&apos;s salt air, fierce UV rays, and winter storms are brutal on outdoor furniture. We restore your patio sets, garden benches, daybeds, and outdoor tables with marine-grade finishes built to withstand the harshest coastal conditions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Marine-grade, UV-resistant finishes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Salt air and moisture protection</span>
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
                  src="/images/portfolio/sunbed1.jpg"
                  alt="Restored outdoor daybed with weather-proof finish"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white-daisy p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-forest-green" />
                    <div>
                      <div className="font-bold text-dark-wood">Marine-Grade</div>
                      <div className="text-sm text-forest-green">Weather Protection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* West Coast Challenges */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              The West Coast Challenge for Outdoor Furniture
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-3xl mx-auto">
              Living on the West Coast means your outdoor furniture faces conditions that would destroy furniture designed for sheltered inland gardens. Understanding these challenges is key to effective restoration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outdoorChallenges.map((challenge, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <challenge.icon className="h-12 w-12 text-forest-green mb-4" />
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{challenge.title}</h3>
                  <p className="text-forest-green text-sm mb-4">{challenge.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm text-forest-green"><strong>Our solution:</strong> {challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Outdoor Furniture */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Outdoor Furniture We Restore
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              From a single garden chair to a full patio dining set, we restore all types of outdoor wooden furniture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {furnitureTypes.map((type, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{type.title}</h3>
                  <p className="text-forest-green text-sm mb-4">{type.description}</p>
                  <div className="border-t border-golden-center/20 pt-3">
                    <p className="text-sm font-semibold text-dark-wood">
                      Price range: <span className="text-forest-green">{type.priceRange}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather-Proof Finish Options */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Marine-Grade Finish Options
            </h2>
            <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
              We use professional-grade products designed for the marine and coastal environment. These are the same finishes used on boats and waterfront structures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finishTypes.map((finish, idx) => (
                <div key={idx} className="bg-white-daisy/10 p-6 rounded-lg">
                  <h3 className="font-bold text-golden-center text-xl mb-3">{finish.name}</h3>
                  <p className="text-sm mb-4">{finish.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-golden-center">Durability:</span>
                      <span className="ml-1">{finish.durability}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-golden-center">Best for:</span>
                      <span className="ml-1">{finish.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm">
                Need help choosing? See our full{' '}
                <Link href="/furniture-refinishing" className="text-golden-center font-semibold underline hover:text-white-daisy">
                  refinishing options
                </Link>{' '}
                or read about{' '}
                <Link href="/coastal-furniture-protection" className="text-golden-center font-semibold underline hover:text-white-daisy">
                  coastal furniture protection
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Outdoor Furniture Restoration Process
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

        {/* Seasonal Maintenance Tips */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Seasonal Maintenance Tips for Outdoor Furniture
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              Proper maintenance between professional restorations dramatically extends the life of your outdoor furniture on the West Coast.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenanceTips.map((season, idx) => (
                <div key={idx} className="bg-white-daisy p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark-wood mb-4 flex items-center gap-2">
                    <Umbrella className="h-6 w-6 text-forest-green" />
                    {season.season}
                  </h3>
                  <ul className="space-y-3">
                    {season.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-forest-green">
                        <Check className="h-5 w-5 flex-shrink-0 mt-0.5 text-forest-green" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Restore */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
                When Should You Bring Outdoor Furniture Inside for Restoration?
              </h2>
              <div className="prose prose-lg max-w-none text-forest-green space-y-4 mt-8">
                <p>
                  The best time to have outdoor furniture professionally restored is during the cooler months, typically April to August. This timing works well because you are using the furniture less, restoration finishes cure better in moderate temperatures, and the piece is ready for the new outdoor season in September.
                </p>
                <p>
                  You should consider professional restoration when you notice the finish starting to crack or peel, the wood turning grey or silvery, joints becoming loose or wobbly, mould or mildew appearing despite regular cleaning, or the surface feeling rough and dry rather than smooth and nourished. Addressing these signs early prevents more extensive (and expensive) restoration later.
                </p>
                <p>
                  For West Coast residents, we recommend a full professional restoration every 2-3 years, with annual maintenance oiling or re-coating in between. This cycle keeps your outdoor furniture looking beautiful and structurally sound for decades. Many of our clients have outdoor teak sets that are 20-30 years old and still going strong with regular professional care.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/sun-faded-furniture-restoration" className="bg-daisy-cream p-4 rounded-lg hover:shadow-lg transition duration-300 block">
                  <h4 className="font-bold text-dark-wood mb-1">Sun-Faded Furniture Restoration</h4>
                  <p className="text-sm text-forest-green">Reverse UV damage and restore original colour to faded wood.</p>
                </Link>
                <Link href="/salt-damaged-furniture-repair" className="bg-daisy-cream p-4 rounded-lg hover:shadow-lg transition duration-300 block">
                  <h4 className="font-bold text-dark-wood mb-1">Salt Damage Repair</h4>
                  <p className="text-sm text-forest-green">Specialised treatment for furniture affected by coastal salt air.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Choose Blooming Furniture for Outdoor Restoration?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Marine-Grade Products</h3>
                <p className="text-forest-green">We use professional products trusted by boatbuilders and marinas</p>
              </div>
              <div className="text-center">
                <Sun className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">UV Protection</h3>
                <p className="text-forest-green">Specialised UV-filtering finishes for South Africa&apos;s intense sun</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Local Expertise</h3>
                <p className="text-forest-green">We live on the West Coast and understand the specific challenges</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-2">Lasting Results</h3>
                <p className="text-forest-green">Our finishes are built to last in coastal conditions, guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Frequently Asked Questions About Outdoor Furniture Restoration
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
        <section className="py-16 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sun className="h-16 w-16 text-golden-center mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Restore Your Outdoor Furniture Before the Season</h2>
            <p className="text-xl mb-8">
              Send us photos of your outdoor furniture and we will advise on the best restoration approach for your specific coastal conditions.
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
              Outdoor Furniture Restoration Across the West Coast
            </h3>
            <p className="text-forest-green mb-4">
              Langebaan - Saldanha Bay - Vredenburg - Paternoster - Velddrif - Hopefield - Yzerfontein - Elands Bay
            </p>
            <p className="text-sm text-forest-green">
              Collection and delivery available for all outdoor furniture restoration projects
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
