import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Traditional Sideboard Whitewash Refinishing - Glass Display Cabinet | Blooming Furniture",
  description: "See the stunning transformation of a traditional buffet from dark wood to soft whitewashed finish. Features glass display section, raised panel doors, curved details, and vintage brass hardware.",
  keywords: "sideboard whitewash, buffet refinishing, glass display cabinet, whitewash furniture, French country buffet, coastal sideboard, farmhouse furniture",
  openGraph: {
    title: "Traditional Sideboard - Whitewash Refinishing with Glass Display",
    description: "Classic buffet transformed from heavy traditional to light cottage elegance with soft whitewashed finish showcasing raised panels and curved architectural details.",
    url: "https://bloomingfurniture.co.za/portfolio/traditional-sideboard-whitewash",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-24.jpeg",
        width: 800,
        height: 600,
        alt: "Traditional Sideboard Whitewash Refinishing - After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/traditional-sideboard-whitewash",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Traditional Sideboard/Buffet - Whitewash Refinishing Transformation",
  "description": "Professional furniture refinishing creating stunning coastal aesthetic on classic sideboard with glass display section, raised panel doors, and elegant architectural details.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-24.jpeg",
  "dateCreated": "2025-11-14",
  "keywords": ["sideboard whitewash", "glass display buffet", "French country", "coastal refinishing", "farmhouse furniture"]
};

export default function TraditionalSideboardWhitewash() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Initial Assessment & Planning",
      process: "Detailed examination of dark traditional finish, glass display section, raised panel details, and curved architectural elements",
      purpose: "Developed comprehensive refinishing strategy preserving elegant details while achieving fresh coastal aesthetic",
      images: ["/images/portfolio/portfolio-23.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Finish Stripping",
      process: "Professional removal of heavy dark stain from raised panel doors, glass cabinet frame, curved edges, scalloped base, and all surfaces",
      purpose: "Revealed natural wood foundation ready for transformation to light whitewashed elegance",
      images: ["/images/portfolio/portfolio-23.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Multi-Stage Surface Preparation",
      process: "Comprehensive progressive sanding across cabinet body, raised panels, glass frame, curved details, and decorative elements",
      purpose: "Created smooth uniform foundation for whitewash application across all architectural features",
      images: ["/images/portfolio/portfolio-23.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Conditioning Treatment",
      process: "Deep conditioning across entire buffet preparing wood fibers for even whitewash absorption and consistent finish",
      purpose: "Ensured beautiful uniform cream color without blotchy appearance across all surfaces",
      images: ["/images/portfolio/portfolio-24.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Custom Whitewash Application",
      process: "Expert application of soft cream/whitewash finish allowing subtle wood grain to show through for depth and character",
      purpose: "Transformed heavy traditional piece into light airy cottage elegance with coastal sophistication",
      images: ["/images/portfolio/portfolio-24.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Glass Display Cabinet Restoration",
      process: "Careful refinishing of glass cabinet frame, cleaning of glass panels, and interior shelving preparation for display lighting",
      purpose: "Enhanced functionality for showcasing treasured items while coordinating with overall whitewashed aesthetic",
      images: ["/images/portfolio/portfolio-24.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Architectural Detail Enhancement",
      process: "Whitewash finish expertly applied to raised panel doors, curved top edge, scalloped base, and graceful lines",
      purpose: "Highlighted beautiful architectural elements previously concealed by heavy dark finish",
      images: ["/images/portfolio/portfolio-24.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Vintage Hardware Preservation",
      process: "Careful cleaning and preservation of brass drawer and door hardware maintaining authentic character",
      purpose: "Provided warm metallic accents against cream finish creating perfect traditional-coastal balance",
      images: ["/images/portfolio/portfolio-24.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Ball Feet Refinishing",
      process: "Whitewash application on decorative ball feet maintaining design consistency throughout piece",
      purpose: "Completed cohesive aesthetic from top curved edge to bottom ball feet",
      images: ["/images/portfolio/portfolio-24.jpeg"]
    },
    {
      step: "🔟",
      treatment: "Protective Matte Coating",
      process: "Multiple layers of professional smooth matte clear finish protecting whitewash while maintaining soft cottage appearance",
      purpose: "Ensured lasting durability of beautiful transformation for years of elegant service",
      images: ["/images/portfolio/portfolio-24.jpeg"]
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
                  🏠 Cottage Elegance Buffet
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Traditional Sideboard Whitewash Transformation
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This classic buffet with glass display section, raised panel doors, and elegant curved
                  details arrived with heavy dark finish. Through expert refinishing, we created light and
                  airy cottage elegance with soft whitewashed beauty.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">French Country Style</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/portfolio/portfolio-24.jpeg"
                  alt="Traditional Sideboard - Whitewash Transformation"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Cottage Chic</span>
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
              From Traditional to Coastal Cottage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-23.jpeg"
                  alt="Before restoration - dark traditional finish"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Heavy dark traditional finish concealing beautiful architectural details including
                    raised panels, glass display section, and elegant curved elements.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-24.jpeg"
                  alt="After restoration - soft whitewashed finish"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Light and airy cottage elegance with soft whitewashed finish showcasing raised panels,
                    glass display, curved details, and vintage brass hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architectural Features */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Elegant Architectural Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🪟",
                  title: "Glass Display Cabinet",
                  description: "Upper glass section with interior lighting capability for showcasing treasured items"
                },
                {
                  icon: "🚪",
                  title: "Raised Panel Doors",
                  description: "Classic raised panel construction beautifully highlighted in soft whitewashed finish"
                },
                {
                  icon: "🌊",
                  title: "Curved Top Edge",
                  description: "Graceful curved top edge adding elegant flowing lines and visual interest"
                },
                {
                  icon: "🎭",
                  title: "Scalloped Base",
                  description: "Decorative scalloped base detail providing traditional charm and character"
                },
                {
                  icon: "✨",
                  title: "Vintage Brass Hardware",
                  description: "Preserved original brass pulls providing warm metallic accents against cream finish"
                },
                {
                  icon: "⚪",
                  title: "Ball Feet",
                  description: "Classic ball feet adding traditional elegance and stability"
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
                    <img
                      src={step.images[0]}
                      alt={`${step.treatment} - Step ${step.step}`}
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
              Light & Airy Cottage Elegance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Soft Whitewashed Beauty",
                  description: "Custom cream finish beautifully showcases architectural details while subtle wood grain adds depth and character creating warm cottage aesthetic."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Glass Display Elegance",
                  description: "Upper glass cabinet with interior lighting capability provides functional beauty for displaying treasured collections and cherished items."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Graceful Curves & Details",
                  description: "Curved top edge, scalloped base, and raised panel doors create flowing lines and visual interest throughout."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Versatile Coastal Style",
                  description: "Perfect for dining rooms, living spaces, or entryways seeking light fresh farmhouse or French country aesthetic with generous storage."
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
              <img
                src="/images/portfolio/portfolio-24.jpeg"
                alt="Whitewashed sideboard with glass display as elegant focal point"
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "The transformation is stunning! The whitewash finish is perfect for our French country home."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Homeowners</cite>
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
                  title: "Complete Stripping",
                  description: "Professional removal of heavy dark finish from all surfaces and details",
                  benefit: "Fresh foundation"
                },
                {
                  title: "Multi-Stage Sanding",
                  description: "Progressive sanding creating uniform smoothness across all architectural elements",
                  benefit: "Flawless preparation"
                },
                {
                  title: "Custom Whitewash",
                  description: "Soft cream finish allowing subtle grain visibility for depth and warmth",
                  benefit: "Cottage elegance"
                },
                {
                  title: "Glass Cabinet Care",
                  description: "Frame refinishing and glass cleaning with interior lighting preparation",
                  benefit: "Display functionality"
                },
                {
                  title: "Detail Preservation",
                  description: "Expert refinishing of curved edges, scalloped base, and raised panels",
                  benefit: "Architectural integrity"
                },
                {
                  title: "Matte Protection",
                  description: "Smooth professional clear coat maintaining soft cottage appearance",
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
              Want a Cottage-Style Whitewash Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in creating light and airy whitewashed finishes that bring cottage elegance
              to traditional furniture. Let us transform your buffet or sideboard into a coastal statement piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Whitewash Quote
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
