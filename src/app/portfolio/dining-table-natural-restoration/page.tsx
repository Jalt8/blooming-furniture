import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Large Dining Table Natural Wood Restoration - Stunning Grain Revival",
  description: "See the breathtaking transformation of a large dining table from heavy dark finish to stunning natural wood beauty. Spectacular grain patterns with honey, amber, and walnut tones revealed.",
  keywords: "dining table restoration, natural wood finish, wood grain revival, butcher block table, table refinishing, farmhouse table, organic modern",
  openGraph: {
    title: "Large Dining Table - Natural Wood Restoration",
    description: "Breathtaking transformation revealing spectacular natural wood grain patterns hidden beneath heavy dark finish. Warm honey, amber, and walnut tones.",
    url: "https://bloomingfurniture.co.za/portfolio/dining-table-natural-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-13.jpeg",
        width: 800,
        height: 600,
        alt: "Large Dining Table Natural Wood Restoration - After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/dining-table-natural-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Large Dining Table - Natural Wood Restoration & Refinishing",
  "description": "Professional furniture restoration revealing stunning natural beauty hidden beneath heavy dark finish on substantial family dining table with spectacular grain patterns.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-13.jpeg",
  "dateCreated": "2025-11-11",
  "keywords": ["dining table restoration", "natural wood finish", "grain revival", "butcher block", "farmhouse table"]
};

export default function DiningTableNaturalRestoration() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Initial Assessment",
      process: "Careful examination of heavy dark finish concealing natural wood beauty beneath, evaluating wood species and grain potential",
      purpose: "Determined restoration approach to reveal spectacular hidden grain patterns and natural color variations",
      images: ["/images/portfolio/portfolio-14.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Finish Stripping",
      process: "Professional removal of dated heavy dark stain and old finish from entire tabletop surface and turned legs",
      purpose: "Revealed natural wood foundation hidden for years beneath dark coating",
      images: ["/images/portfolio/portfolio-14.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Multi-Stage Progressive Sanding",
      process: "Thorough progressive sanding across entire substantial tabletop using multiple grit stages to achieve smooth perfection",
      purpose: "Brought natural wood grain to life while creating flawless foundation for finish application",
      images: ["/images/portfolio/portfolio-14.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Repair & Surface Smoothing",
      process: "Expert repair of any imperfections and meticulous surface smoothing across large dining surface",
      purpose: "Ensured structural integrity and created glass-smooth foundation worthy of natural wood showcase",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Deep Wood Conditioning",
      process: "Professional conditioning treatment opening grain structure and preparing wood fibers for optimal stain absorption",
      purpose: "Enhanced natural color depth and prevented blotchy appearance ensuring even finish",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Natural Wood Stain Application",
      process: "Custom natural wood stain expertly applied to highlight rich honey, amber, and walnut tone variations",
      purpose: "Revealed spectacular grain patterns and color movement creating butcher block-style organic beauty",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Turned Leg Refinishing",
      process: "Careful refinishing of turned leg details maintaining design integrity while matching tabletop finish",
      purpose: "Created cohesive look throughout entire piece preserving classic architectural elements",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of high-quality protective clear coat designed for family-friendly everyday dining use",
      purpose: "Ensured table can handle daily meals, homework, and gatherings for years while maintaining beauty",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Satin Finish Application",
      process: "Professional satin finish providing perfect balance between protection and natural wood appearance",
      purpose: "Created warm inviting surface with subtle sheen showcasing grain without high-gloss distraction",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    },
    {
      step: "🔟",
      treatment: "Final Detailing",
      process: "Expert edge treatment, quality inspection, and final buffing ensuring museum-quality results",
      purpose: "Completed transformation ready to serve as stunning centerpiece in modern dining space",
      images: ["/images/portfolio/portfolio-13.jpeg"]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Header */}
        <section className="bg-white-daisy py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-forest-green hover:text-dark-wood transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-dark-wood mb-4">
                  🪵 Natural Wood Revival
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Large Dining Table Restoration
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This substantial family dining table arrived with a heavy dark finish completely
                  concealing gorgeous wood grain beneath. Through expert restoration, we revealed
                  spectacular natural beauty with honey, amber, and walnut tones flowing across the surface.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Natural Beauty</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/portfolio-13.jpeg"
                  alt="Large Dining Table - Natural Wood Restoration After" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Natural Wood</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Comparison */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Breathtaking Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-14.jpeg"
                  alt="Before restoration - heavy dark finish" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Heavy dated dark finish completely concealing the spectacular wood grain and natural
                    color variations hidden beneath. Potential beauty obscured by years of dark stain.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-13.jpeg"
                  alt="After restoration - stunning natural wood" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Breathtaking natural wood beauty revealed with spectacular grain patterns and rich honey,
                    amber, and walnut tones. Butcher block aesthetic with warm, inviting organic character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Natural Wood Features */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Natural Wood Beauty Revealed
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🌊",
                  title: "Spectacular Grain Patterns",
                  description: "Natural wood grain flows across surface creating visual movement and organic beauty with butcher block-style character"
                },
                {
                  icon: "🍯",
                  title: "Rich Color Variations",
                  description: "Honey, amber, and walnut tones blend naturally across tabletop creating warmth and depth"
                },
                {
                  icon: "✨",
                  title: "Satin Protective Finish",
                  description: "Family-friendly durability with subtle sheen that showcases wood beauty without high-gloss distraction"
                },
                {
                  icon: "🏛️",
                  title: "Turned Leg Details",
                  description: "Classic turned legs refinished to complement natural tabletop preserving architectural charm"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{feature.title}</h3>
                  <p className="text-forest-green">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Expert Restoration Process
            </h2>

            <div className="space-y-12">
              {restorationSteps.map((step, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-white-daisy p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{step.step}</span>
                        <h3 className="text-2xl font-semibold text-dark-wood">{step.treatment}</h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-forest-green mb-2">Process:</h4>
                          <p className="text-dark-wood">{step.process}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-forest-green mb-2">Purpose:</h4>
                          <p className="text-dark-wood">{step.purpose}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={step.images[0]}
                      alt={`${step.treatment} - Step ${step.step}`} width={800} height={600}
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Final Result */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Warm & Inviting Family Centerpiece
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Organic Beauty Revealed",
                  description: "Spectacular natural grain patterns with honey, amber, and walnut tones create visual movement and warmth across substantial dining surface."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Butcher Block Aesthetic",
                  description: "Natural wood character showcased through expert restoration creating authentic organic modern appeal with rich color variations."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Family-Friendly Durability",
                  description: "Multiple protective clear coat layers ensure this beautiful table handles daily meals, homework, and gatherings for years to come."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Timeless Versatility",
                  description: "Perfect for farmhouse, modern organic, or Scandinavian-inspired homes seeking warm authentic aesthetic with natural wood character."
                }
              ].map((result, index) => (
                <div key={index} className="bg-white-daisy/10 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {result.icon}
                    <h3 className="text-xl font-semibold text-golden-center ml-3">{result.title}</h3>
                  </div>
                  <p className="text-white-daisy">{result.description}</p>
                </div>
              ))}
            </div>

            {/* Final Showcase */}
            <div className="bg-golden-center/20 p-8 rounded-lg">
              <Image
                src="/images/portfolio/portfolio-13.jpeg"
                alt="Natural wood dining table as bright dining room centerpiece" width={800} height={600}
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "We had no idea such beautiful wood was hiding under that dark finish! It's absolutely stunning."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Family</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Professional Restoration Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Stripping",
                  description: "Professional removal of heavy dark stain revealing hidden natural wood foundation",
                  benefit: "Beauty unveiled"
                },
                {
                  title: "Multi-Stage Sanding",
                  description: "Progressive sanding bringing grain to life while achieving glass-smooth surface",
                  benefit: "Flawless foundation"
                },
                {
                  title: "Deep Conditioning",
                  description: "Professional treatment enhancing natural color depth and grain definition",
                  benefit: "Enhanced richness"
                },
                {
                  title: "Natural Stain Application",
                  description: "Custom stain highlighting honey, amber, and walnut tone variations",
                  benefit: "Color movement"
                },
                {
                  title: "Turned Leg Refinishing",
                  description: "Careful detail work maintaining classic architectural elements",
                  benefit: "Cohesive design"
                },
                {
                  title: "Satin Protective Finish",
                  description: "Family-friendly clear coat with perfect balance of protection and natural appearance",
                  benefit: "Lasting beauty"
                }
              ].map((technique, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-dark-wood mb-3">{technique.title}</h3>
                  <p className="text-forest-green mb-3">{technique.description}</p>
                  <div className="bg-golden-center/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-golden-center">{technique.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-golden-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-6">
              Want to Reveal Your Table's Natural Beauty?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in revealing the spectacular natural wood grain hidden beneath dark finishes.
              Let us transform your dining table into a warm, inviting centerpiece showcasing organic beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Natural Wood Quote
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-dark-wood text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-dark-wood hover:text-white-daisy transition duration-300"
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
