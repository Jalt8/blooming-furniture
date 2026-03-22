import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Traditional TV Console Whitewash Refinishing - Coastal Media Unit",
  description: "See the transformation of a traditional media console from dark wood to fresh whitewashed coastal style. Features open shelving, decorative molding, and scalloped base details perfect for modern living rooms.",
  keywords: "TV console refinishing, media unit whitewash, coastal TV stand, entertainment center makeover, whitewash furniture, media cabinet restoration",
  openGraph: {
    title: "Traditional TV Console - Whitewash Refinishing",
    description: "Traditional media console transformed to fresh coastal style with custom whitewash finish, open shelving, and preserved architectural molding details.",
    url: "https://bloomingfurniture.co.za/portfolio/tv-console-whitewash-refinishing",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-29.jpeg",
        width: 800,
        height: 600,
        alt: "TV Console Whitewash Refinishing - After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/tv-console-whitewash-refinishing",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Traditional TV Console/Media Unit - Whitewash Refinishing",
  "description": "Professional furniture refinishing transforming substantial media console into fresh coastal piece with whitewash finish, open shelving, and decorative molding details.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-29.jpeg",
  "dateCreated": "2025-11-16",
  "keywords": ["TV console refinishing", "whitewash media unit", "coastal furniture", "entertainment center", "media cabinet"]
};

export default function TVConsoleWhitewashRefinishing() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Initial Assessment & Planning",
      process: "Detailed examination of traditional media console structure, decorative molding, scalloped base, and open shelving components",
      purpose: "Developed refinishing strategy preserving architectural details while achieving fresh coastal whitewash aesthetic",
      images: ["/images/portfolio/portfolio-28.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Surface Preparation",
      process: "Comprehensive sanding of console body, open shelving compartments, decorative molding, and scalloped base brackets",
      purpose: "Created smooth uniform foundation for whitewash application across all surfaces and architectural elements",
      images: ["/images/portfolio/portfolio-28.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Wood Conditioning Treatment",
      process: "Deep conditioning across entire media unit preparing wood fibers for even whitewash absorption",
      purpose: "Ensured consistent cream finish without blotchy appearance while preparing for grain visibility",
      images: ["/images/portfolio/portfolio-30.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Custom Whitewash Application",
      process: "Expert application of sophisticated cream/whitewash finish allowing subtle wood grain to show through for depth and texture",
      purpose: "Transformed traditional dark wood into light airy coastal style maintaining organic character",
      images: ["/images/portfolio/portfolio-30.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Open Shelving Refinishing",
      process: "Whitewash finish on interior shelving compartments sized for media components and decorative accessories",
      purpose: "Created functional storage coordinating with overall coastal aesthetic for equipment placement",
      images: ["/images/portfolio/portfolio-29.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Decorative Molding Preservation",
      process: "Careful whitewash application on trim and molding details maintaining dimensional definition",
      purpose: "Highlighted architectural character adding visual interest to clean coastal design",
      images: ["/images/portfolio/portfolio-29.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Scalloped Base Restoration",
      process: "Refinishing of elegant scalloped base brackets and architectural stepped platform maintaining detail integrity",
      purpose: "Preserved vintage charm and traditional craftsmanship in fresh coastal context",
      images: ["/images/portfolio/portfolio-29.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of durable clear finish protecting whitewash while maintaining smooth professional appearance",
      purpose: "Ensured lasting protection suitable for daily living room use with media equipment",
      images: ["/images/portfolio/portfolio-29.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Final Quality Inspection",
      process: "Comprehensive review ensuring smooth finish, architectural detail preservation, and coastal aesthetic perfection",
      purpose: "Verified professional quality standards for functional media storage and elegant focal point",
      images: ["/images/portfolio/portfolio-29.jpeg"]
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
                  📺 Coastal Media Console
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  TV Console Whitewash Refinishing
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This substantial traditional media console with decorative molding and elegant scalloped
                  base details was transformed into a fresh coastal piece. Custom whitewash finish showcases
                  wood grain while providing functional storage for modern living rooms.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">2 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Coastal Style</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/portfolio-29.jpeg"
                  alt="TV Console Whitewash - Installed in Home" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Whitewash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Process Gallery */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Transformation Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-lg font-semibold">WORKSHOP PROGRESS</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-28.jpeg"
                  alt="Console during refinishing showing progress" width={400} height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-forest-green">
                    Workshop view showing mid-restoration progress with surface preparation
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-lg font-semibold">WHITEWASH APPLICATION</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-30.jpeg"
                  alt="Media unit with whitewashed top" width={400} height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-forest-green">
                    Custom whitewash finish application revealing beautiful wood grain
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-lg font-semibold">FINAL RESULT</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-29.jpeg"
                  alt="Completed console in home" width={400} height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-forest-green">
                    Beautifully installed console serving as coastal living room focal point
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Features */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Coastal Media Console Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "📺",
                  title: "Low-Profile Design",
                  description: "Perfect height for modern wall-mounted TVs maintaining clean sightlines and contemporary aesthetic"
                },
                {
                  icon: "📦",
                  title: "Open Shelving Storage",
                  description: "Generous compartments for media components, gaming systems, and decorative accessories"
                },
                {
                  icon: "🎨",
                  title: "Decorative Molding Details",
                  description: "Preserved trim and molding adding architectural character and visual dimension"
                },
                {
                  icon: "🌊",
                  title: "Scalloped Base Brackets",
                  description: "Elegant traditional craftsmanship beautifully updated in fresh whitewash finish"
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

        {/* Refinishing Process */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Professional Refinishing Process
            </h2>

            <div className="space-y-12">
              {refinishingSteps.map((step, index) => (
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
              Fresh Coastal Living Room Focal Point
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Sophisticated Whitewash",
                  description: "Custom cream finish allows subtle wood grain visibility adding depth and texture while maintaining fresh beachy coastal aesthetic."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Architectural Detail Preserved",
                  description: "Decorative molding and scalloped base brackets beautifully highlighted adding character and visual interest to clean design."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Functional Media Storage",
                  description: "Low-profile design perfect for wall-mounted TVs with generous open shelving for equipment and decorative items."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Versatile Contemporary Style",
                  description: "Perfect for coastal, Scandinavian, or modern farmhouse living spaces seeking light fresh aesthetic with traditional charm."
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
                src="/images/portfolio/portfolio-29.jpeg"
                alt="Whitewashed TV console as living room centerpiece" width={800} height={600}
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "The whitewash finish is absolutely perfect! It brightened our entire living room while maintaining that classic charm."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Happy Homeowners</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Expert Refinishing Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Preparation",
                  description: "Comprehensive sanding across console body, shelving, and decorative elements",
                  benefit: "Uniform foundation"
                },
                {
                  title: "Custom Whitewash",
                  description: "Sophisticated cream finish preserving subtle wood grain for depth",
                  benefit: "Organic character"
                },
                {
                  title: "Molding Preservation",
                  description: "Careful detail work maintaining dimensional trim and decorative elements",
                  benefit: "Visual interest"
                },
                {
                  title: "Scalloped Base Care",
                  description: "Expert refinishing of elegant base brackets maintaining traditional charm",
                  benefit: "Period character"
                },
                {
                  title: "Functional Shelving",
                  description: "Open compartment refinishing coordinating with overall coastal aesthetic",
                  benefit: "Practical storage"
                },
                {
                  title: "Durable Protection",
                  description: "Professional clear coat ensuring lasting beauty in daily living room use",
                  benefit: "Long-term durability"
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
              Want to Transform Your Media Console?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in whitewash refinishing that brings fresh coastal style to traditional furniture.
              Let us update your TV console or entertainment center for modern living room elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Console Refinishing Quote
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
