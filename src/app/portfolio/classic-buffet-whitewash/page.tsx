import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Classic Buffet Whitewash Refinishing - Elegant Transformation",
  description: "See the stunning transformation of a traditional buffet from dark wood to sophisticated whitewash finish. Features raised panel doors, fluted pilasters, and modern black hardware contrast.",
  keywords: "buffet refinishing, credenza whitewash, raised panel doors, fluted pilasters, modern buffet, coastal buffet, whitewash furniture",
  openGraph: {
    title: "Classic Buffet - Elegant Whitewash Refinishing",
    description: "Traditional buffet transformed from dark wood to sophisticated coastal-contemporary style with custom whitewash finish highlighting architectural details.",
    url: "https://bloomingfurniture.co.za/portfolio/classic-buffet-whitewash",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-7.jpeg",
        width: 800,
        height: 600,
        alt: "Classic Buffet Whitewash Refinishing - Elegant Transformation",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/classic-buffet-whitewash",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Classic Buffet/Credenza - Elegant Whitewash Refinishing",
  "description": "Professional furniture refinishing transforming traditional buffet from dark finish to sophisticated whitewash style with preserved architectural details and modern hardware.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-7.jpeg",
  "dateCreated": "2025-11-09",
  "keywords": ["buffet refinishing", "whitewash finish", "raised panels", "fluted pilasters", "coastal furniture"]
};

export default function ClassicBuffetWhitewash() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Initial Assessment & Planning",
      process: "Detailed examination of traditional dark finish, architectural molding details, and wood structure to plan whitewash transformation",
      purpose: "Determined refinishing approach preserving raised panels, fluted pilasters, and decorative rosettes",
      images: ["/images/portfolio/portfolio-6.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Finish Stripping",
      process: "Professional removal of heavy dark stain from all surfaces including raised panel doors, fluted columns, crown molding, and base trim",
      purpose: "Created clean foundation revealing natural wood ready for sophisticated light finish",
      images: ["/images/portfolio/portfolio-6.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Multi-Stage Surface Preparation",
      process: "Comprehensive progressive sanding across flat surfaces, raised panels, fluted details, and intricate molding elements",
      purpose: "Ensured smooth uniform foundation for whitewash application across all architectural features",
      images: ["/images/portfolio/portfolio-6.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Conditioning",
      process: "Deep conditioning treatment across entire buffet preparing wood fibers for even whitewash absorption",
      purpose: "Prevented blotchy staining ensuring consistent light finish across all surfaces and details",
      images: ["/images/portfolio/portfolio-9.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Custom Whitewash Application",
      process: "Expert application of translucent light stain allowing natural wood grain to show through while achieving coastal aesthetic",
      purpose: "Transformed dark traditional piece into sophisticated contemporary style while maintaining warmth",
      images: ["/images/portfolio/portfolio-9.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Architectural Detail Enhancement",
      process: "Careful whitewash finish on raised panel doors, fluted column pilasters, decorative rosette corners, crown molding, and base trim",
      purpose: "Highlighted beautiful architectural elements previously concealed by heavy dark finish",
      images: ["/images/portfolio/portfolio-9.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Modern Hardware Upgrade",
      process: "Replacement with contemporary black knobs providing crisp contrast against whitewashed finish",
      purpose: "Added modern edge to classic piece creating perfect blend of traditional and contemporary",
      images: ["/images/portfolio/portfolio-8.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of professional matte clear finish across all surfaces ensuring durability",
      purpose: "Protected beautiful whitewash while maintaining sophisticated low-sheen aesthetic",
      images: ["/images/portfolio/portfolio-7.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Final Styling & Installation",
      process: "Professional delivery and placement in client's home as elegant statement piece",
      purpose: "Completed transformation ready to serve as sophisticated focal point with substantial storage",
      images: ["/images/portfolio/portfolio-7.jpeg"]
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
                  🏛️ Classic Buffet Refinishing
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Elegant Whitewash Transformation
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This substantial traditional buffet with raised panel doors and fluted pilasters arrived
                  with a heavy dark finish concealing its beautiful architectural details. Through expert
                  refinishing, we created a sophisticated coastal-contemporary statement piece.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Coastal Elegance</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/portfolio-7.jpeg"
                  alt="Classic Buffet - Final Whitewash Transformation" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Whitewash Elegance</span>
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
              The Stunning Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-6.jpeg"
                  alt="Before restoration - dark traditional finish" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Heavy dark traditional finish concealing beautiful architectural details including
                    raised panels, fluted pilasters, and decorative molding.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <Image
                  src="/images/portfolio/portfolio-9.jpeg"
                  alt="After restoration - sophisticated whitewash finish" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Sophisticated whitewash finish highlighting architectural elements, with natural
                    wood grain subtly visible and modern black hardware adding crisp contrast.
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
              Distinguished Architectural Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🚪",
                  title: "Raised Panel Cabinet Doors",
                  description: "Classic raised panel construction now beautifully highlighted in soft whitewash finish showcasing dimensional depth"
                },
                {
                  icon: "🏛️",
                  title: "Fluted Column Pilasters",
                  description: "Elegant vertical fluted columns on each side adding architectural sophistication and classical charm"
                },
                {
                  icon: "🌺",
                  title: "Decorative Rosette Corners",
                  description: "Ornate rosette corner details preserved and enhanced through refinishing process"
                },
                {
                  icon: "👑",
                  title: "Crown Molding & Base Trim",
                  description: "Detailed crown molding and base trim refinished to complement the overall elegant aesthetic"
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

        {/* In Client's Home */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Beautifully Styled in Its New Home
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: "/images/portfolio/portfolio-7.jpeg", caption: "Elegantly styled as dining room focal point" },
                { src: "/images/portfolio/portfolio-8.jpeg", caption: "Angled view showing architectural details and modern hardware" }
              ].map((image, index) => (
                <div key={index} className="bg-white-daisy rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image.src}
                    alt={image.caption} width={800} height={600}
                    className="w-full h-80 object-cover"
                  />
                  <p className="p-4 text-sm text-forest-green text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refinishing Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Professional Refinishing Process
            </h2>

            <div className="space-y-12">
              {refinishingSteps.map((step, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-daisy-cream p-6 rounded-lg">
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
              A Sophisticated Statement Piece
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Sophisticated Whitewash",
                  description: "Custom light finish beautifully showcases architectural details while natural wood grain remains subtly visible adding warmth and texture."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Enhanced Architectural Features",
                  description: "Raised panels, fluted pilasters, rosettes, and molding now highlighted as focal design elements rather than concealed by heavy finish."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Modern Hardware Contrast",
                  description: "Black knobs provide crisp contemporary accent against soft whitewashed finish creating perfect traditional-modern balance."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Timeless Versatility",
                  description: "Perfect for dining rooms, living spaces, or entryways seeking refined modern aesthetic with classic architectural charm."
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
                src="/images/portfolio/portfolio-7.jpeg"
                alt="Beautifully styled buffet as dining room centerpiece" width={800} height={600}
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "This buffet is absolutely stunning! The whitewash finish is exactly what we envisioned for our coastal dining room."
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
                  description: "Professional removal of heavy dark stain from all surfaces and intricate details",
                  benefit: "Clean foundation"
                },
                {
                  title: "Multi-Stage Sanding",
                  description: "Progressive sanding across flat and architectural surfaces for uniform smoothness",
                  benefit: "Flawless preparation"
                },
                {
                  title: "Custom Whitewash",
                  description: "Translucent light stain preserving visible wood grain with coastal aesthetic",
                  benefit: "Warmth with brightness"
                },
                {
                  title: "Detail Preservation",
                  description: "Careful refinishing of raised panels, flutes, rosettes, and molding",
                  benefit: "Architectural integrity"
                },
                {
                  title: "Modern Hardware",
                  description: "Contemporary black knobs creating crisp contrast against light finish",
                  benefit: "Traditional-modern fusion"
                },
                {
                  title: "Matte Protection",
                  description: "Multiple clear coat layers ensuring durability with sophisticated low-sheen",
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
              Want an Elegant Whitewash Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in sophisticated whitewash refinishing that highlights architectural details
              while creating coastal-contemporary style. Let us transform your traditional furniture.
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
