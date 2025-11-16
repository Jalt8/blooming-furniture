import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Church Kitchen Cabinet Refresh | Industrial-Style Gray Cabinet Refinishing | Blooming Furniture',
  description: 'Professional church kitchen cabinet transformation with modern charcoal-gray finish. Natural wood cabinets refinished into sleek industrial-style units with durable clear sealer perfect for high-traffic community spaces.',
  keywords: 'church kitchen cabinets, commercial kitchen refinishing, gray cabinet paint, industrial kitchen cabinets, community space renovation, charcoal gray cabinets, church renovation, cabinet sealer, modern kitchen refresh',
  openGraph: {
    title: 'Church Kitchen Cabinet Refresh - Modern Industrial-Style Transformation',
    description: 'Professional transformation of church kitchen cabinets from natural wood to sleek charcoal-gray finish with durable sealer for community space use.',
    images: ['/images/portfolio/cp5w3n.jpeg'],
    type: 'article',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Church Kitchen Cabinet Refresh - Industrial-Style Gray Cabinet Refinishing",
  "description": "Professional church kitchen cabinet transformation with modern charcoal-gray finish and clear sealer creating sleek industrial-style units for community space.",
  "image": [
    "https://bloomingfurniture.co.za/images/portfolio/cp5w3n.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/d7mc0v.jpeg",
    "https://bloomingfurniture.co.za/images/portfolio/kvreig.jpeg"
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
    title: "Cabinet Assessment & Planning",
    description: "Evaluated existing natural wood cabinet construction, hardware, and layout to plan comprehensive refinishing approach suitable for high-traffic church kitchen use."
  },
  {
    title: "Thorough Surface Preparation",
    description: "Cleaned and sanded all cabinet surfaces including doors, drawer fronts, and frames ensuring proper paint adhesion for long-lasting results in this community space."
  },
  {
    title: "Hardware Removal & Protection",
    description: "Carefully removed hinges, handles, and other hardware protecting functional components while ensuring complete access to all surfaces requiring refinishing."
  },
  {
    title: "Wood Conditioning",
    description: "Applied wood conditioner to cabinet surfaces ensuring even paint absorption and preventing blotchiness across the entire kitchen installation."
  },
  {
    title: "Modern Charcoal-Gray Paint Application",
    description: "Applied sophisticated charcoal-gray paint creating sleek, industrial-style aesthetic that complements the modern church kitchen design and architectural elements."
  },
  {
    title: "Multiple Paint Coat Application",
    description: "Built up multiple even coats of premium gray paint ensuring complete coverage, consistent color, and professional appearance across all cabinet components."
  },
  {
    title: "Clear Sealer Protection",
    description: "Applied durable clear sealer over painted surfaces providing essential protection for high-traffic community kitchen use including cooking activities and frequent cleaning."
  },
  {
    title: "Hardware Reinstallation",
    description: "Reinstalled all cabinet hardware ensuring proper alignment, smooth operation, and functional accessibility for church kitchen volunteers and staff."
  },
  {
    title: "Final Inspection & Touch-ups",
    description: "Conducted comprehensive quality inspection addressing any imperfections and ensuring all cabinets meet professional standards for community space durability."
  }
];

export default function ChurchKitchenCabinetRefresh() {
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
              Church Kitchen Cabinet Refresh
            </h1>
            <p className="text-xl text-forest-green leading-relaxed">
              Professional transformation of church kitchen cabinets from natural wood to modern charcoal-gray finish. Comprehensive refinishing with durable clear sealer creating sleek industrial-style units perfect for high-traffic community space use.
            </p>
          </div>
        </header>

        {/* Before/After Comparison */}
        <section className="py-16 px-4 bg-golden-center">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Dramatic Kitchen Transformation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <img
                  src="/images/portfolio/kvreig.jpeg"
                  alt="Church kitchen cabinets before refinishing showing natural wood finish"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 font-semibold">
                  BEFORE
                </p>
                <p className="text-center text-forest-green text-sm italic">
                  Original natural wood cabinets
                </p>
              </div>
              <div>
                <img
                  src="/images/portfolio/cp5w3n.jpeg"
                  alt="Completed church kitchen with sleek charcoal-gray cabinets"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-forest-green mt-3 font-semibold">
                  AFTER
                </p>
                <p className="text-center text-forest-green text-sm italic">
                  Modern charcoal-gray finish
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Result Images Gallery */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Completed Kitchen Transformation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <img
                  src="/images/portfolio/yjhunm.jpeg"
                  alt="Modern gray kitchen cabinets with industrial-style aesthetic"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/portfolio/d7mc0v.jpeg"
                  alt="Church kitchen cabinet detail showing smooth gray finish"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/portfolio/xi0gy3.jpeg"
                  alt="Complete church kitchen view with refinished gray cabinets"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/portfolio/qs3dco.jpeg"
                  alt="Kitchen workspace with modern gray cabinet finish"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/portfolio/eii8i2.jpeg"
                  alt="Church kitchen storage cabinets with charcoal-gray paint"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/portfolio/lfcviy.jpeg"
                  alt="Finished kitchen showing industrial-style gray cabinetry"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Project Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Modern Industrial Aesthetic</h3>
                <p className="text-forest-green">
                  Sophisticated charcoal-gray finish creating sleek, contemporary look that complements industrial-style church kitchen design and architecture.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Durable Clear Sealer</h3>
                <p className="text-forest-green">
                  Professional-grade clear sealer providing essential protection for high-traffic community kitchen use including cooking, cleaning, and frequent access.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Cost-Effective Transformation</h3>
                <p className="text-forest-green">
                  Cabinet refinishing providing dramatic kitchen update without the expense and disruption of full cabinet replacement, ideal for church budgets.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Community Space Functionality</h3>
                <p className="text-forest-green">
                  Maintained full kitchen functionality throughout with durable finish suitable for volunteer use, congregational events, and regular church activities.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Professional Color Consistency</h3>
                <p className="text-forest-green">
                  Uniform charcoal-gray color across all cabinet components including doors, drawers, and frames creating cohesive, professional appearance.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Long-Lasting Results</h3>
                <p className="text-forest-green">
                  High-quality materials and professional application ensuring beautiful appearance withstands years of community kitchen use and regular cleaning.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Modernized Church Space</h3>
                <p className="text-forest-green">
                  Updated kitchen aesthetic creating welcoming, contemporary environment for church volunteers, staff, and community members.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Easy Maintenance</h3>
                <p className="text-forest-green">
                  Sealed gray finish providing easy-to-clean surfaces that resist staining and maintain appearance despite frequent kitchen use.
                </p>
              </div>
              <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-dark-wood mb-3">Hardware Preservation</h3>
                <p className="text-forest-green">
                  Existing hardware carefully preserved and reinstalled maintaining functionality while budget-conscious approach saves on replacement costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refinishing Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-12 text-center">
              Professional Refinishing Process
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
              Revitalized Community Kitchen Space
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-forest-green leading-relaxed mb-4">
                This church kitchen cabinet refresh showcases how professional refinishing can dramatically transform community spaces with modern style and practical durability. The sophisticated charcoal-gray finish updates the entire kitchen environment, creating a sleek industrial aesthetic that feels contemporary and welcoming.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                The transformation from natural wood to modern gray represents more than just a color change - it's a complete visual update that modernizes the church's community gathering space. The industrial-style gray complements contemporary church architecture while providing a neutral backdrop that works beautifully with stainless steel appliances and modern kitchen equipment.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                Cabinet refinishing proved to be the ideal solution for this church kitchen renovation, providing dramatic results without the significant expense and extended disruption of full cabinet replacement. This budget-conscious approach allowed the church to achieve a stunning modern transformation while preserving functional cabinets and maintaining kitchen accessibility for ongoing church activities.
              </p>
              <p className="text-forest-green leading-relaxed mb-4">
                The durable clear sealer application ensures these refinished cabinets withstand the unique demands of community kitchen use. Church kitchens experience high traffic from volunteers, frequent cooking for congregational events, regular cleaning, and diverse users - all requiring a finish that maintains both appearance and functionality over time.
              </p>
              <p className="text-forest-green leading-relaxed">
                The completed kitchen now serves as a modernized community space that church members, volunteers, and staff enjoy using. The professional charcoal-gray finish creates an updated, cohesive environment perfect for preparing meals for church events, community gatherings, and hospitality activities while ensuring long-lasting beauty that serves the congregation for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif text-dark-wood mb-8 text-center">
              Commercial Kitchen Refinishing Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  High-Traffic Durability Requirements
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Church and community kitchens require exceptional finish durability to withstand constant use by multiple users, frequent cleaning, cooking activities, and regular access. Our professional-grade paint and sealer system ensures these cabinets maintain their beautiful appearance despite intensive community space demands.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Minimal Disruption Approach
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Working in active church facilities requires careful planning and efficient execution to minimize disruption to ongoing activities and events. Our systematic approach ensures quality results while respecting the church's schedule and community commitments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Comprehensive Coverage
                </h3>
                <p className="text-forest-green leading-relaxed mb-6">
                  Achieving consistent, professional gray finish across extensive cabinet installations requires expert technique and attention to detail. Each cabinet component receives thorough preparation and multiple coats ensuring uniform color and smooth appearance throughout the entire kitchen.
                </p>
                <h3 className="text-xl font-semibold text-dark-wood mb-4">
                  Protective Sealer Application
                </h3>
                <p className="text-forest-green leading-relaxed">
                  Clear sealer application provides crucial protection layer ensuring painted surfaces resist moisture, staining, and wear from daily kitchen activities. This professional finishing step distinguishes long-lasting commercial installations from standard cabinet painting projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-daisy-cream">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-serif text-dark-wood mb-6">
              Transform Your Community Kitchen
            </h2>
            <p className="text-xl text-forest-green mb-8">
              Have church, community center, or commercial kitchen cabinets that need updating? We specialize in durable refinishing solutions for high-traffic spaces.
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
