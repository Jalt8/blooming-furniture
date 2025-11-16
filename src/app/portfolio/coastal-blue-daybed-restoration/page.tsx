import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Outdoor Pine Daybed Coastal Blue Restoration | Blooming Furniture",
  description: "See the stunning coastal transformation of a weathered outdoor daybed from sun-damaged pine to vibrant turquoise blue frame with natural wood slats. Resort-style elegance for outdoor living.",
  keywords: "outdoor daybed restoration, coastal blue furniture, turquoise daybed, outdoor furniture refinishing, pine daybed, weather-resistant finish, pool furniture",
  openGraph: {
    title: "Outdoor Pine Daybed - Coastal Blue Restoration",
    description: "Weathered outdoor daybed transformed into coastal-chic resort-style piece with vibrant turquoise frame and natural wood slats.",
    url: "https://bloomingfurniture.co.za/portfolio/coastal-blue-daybed-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-21.jpeg",
        width: 800,
        height: 600,
        alt: "Coastal Blue Daybed Restoration - After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/coastal-blue-daybed-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Outdoor Pine Daybed - Coastal Restoration & Refinishing",
  "description": "Professional furniture restoration transforming weathered outdoor daybed from sun damage to vibrant coastal blue frame with natural wood slats and weather-resistant finish.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-21.jpeg",
  "dateCreated": "2025-11-13",
  "keywords": ["outdoor daybed", "coastal blue", "weather restoration", "resort furniture", "pine refinishing"]
};

export default function CoastalBlueDaybedRestoration() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Deep Cleaning & Assessment",
      process: "Thorough cleaning of all outdoor-damaged surfaces removing years of dirt, grime, and weather exposure",
      purpose: "Revealed extent of sun damage and structural condition for comprehensive restoration planning",
      images: ["/images/portfolio/portfolio-22.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Surface Sanding",
      process: "Comprehensive sanding of severely weathered wood across frame, slats, scalloped headboard, and all decorative elements",
      purpose: "Removed oxidized surface layer revealing fresh wood ready for dual-finish application",
      images: ["/images/portfolio/sunbed2.jpg"]
    },
    {
      step: "3️⃣",
      treatment: "Wood Repair & Conditioning",
      process: "Expert repair of sun-damaged areas and deep conditioning treatment across all pine components",
      purpose: "Restored wood integrity and prepared surfaces for optimal paint and stain absorption",
      images: ["/images/portfolio/sunbed3.jpg"]
    },
    {
      step: "4️⃣",
      treatment: "Scalloped Detail Preservation",
      process: "Careful preparation and refinishing of decorative scalloped headboard maintaining vintage character",
      purpose: "Preserved architectural charm while preparing for fresh coastal aesthetic",
      images: ["/images/portfolio/sunbed4.jpg"]
    },
    {
      step: "5️⃣",
      treatment: "Coastal Blue Frame Painting",
      process: "Professional multi-coat sophisticated turquoise/coastal blue paint application on entire frame structure",
      purpose: "Created vibrant seaside charm and resort-style elegance foundation",
      images: ["/images/portfolio/portfolio-21.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Natural Wood Slat Finishing",
      process: "Contrasting natural wood stain application on seat slats preserving grain visibility and warmth",
      purpose: "Added visual depth and interest through dual-finish approach creating beautiful contrast",
      images: ["/images/portfolio/portfolio-21.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Slatted Back Panel Restoration",
      process: "Refinishing of slatted back and side panels coordinating with overall two-tone design",
      purpose: "Ensured cohesive aesthetic across all structural elements",
      images: ["/images/portfolio/sunbed6.jpg"]
    },
    {
      step: "8️⃣",
      treatment: "UV-Resistant Clear Coating",
      process: "Multiple layers of outdoor-grade clear coat with UV protection across all painted and stained surfaces",
      purpose: "Protected beautiful coastal finish from future sun damage and weather exposure",
      images: ["/images/portfolio/portfolio-21.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Weather-Resistant Sealing",
      process: "Professional application of weather-resistant protective finish suitable for outdoor exposure",
      purpose: "Ensured durability in patio, pool, and garden environments maintaining beauty through seasons",
      images: ["/images/portfolio/portfolio-21.jpeg"]
    },
    {
      step: "🔟",
      treatment: "Final Quality Inspection",
      process: "Comprehensive inspection ensuring smooth application, protective coating integrity, and coastal aesthetic perfection",
      purpose: "Completed transformation ready to serve as stunning outdoor focal point for years to come",
      images: ["/images/portfolio/portfolio-21.jpeg"]
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
                  🏝️ Coastal Blue Daybed
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Outdoor Pine Daybed Restoration
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This substantial outdoor pine lounger with slatted construction arrived severely
                  weathered from sun exposure. Through expert restoration, we created a vibrant
                  coastal-chic piece with turquoise frame and natural wood slats evoking resort elegance.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Coastal Resort Style</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/portfolio/portfolio-21.jpeg"
                  alt="Coastal Blue Daybed - After Restoration"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Coastal Blue</span>
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
              From Weathered to Coastal Chic
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-22.jpeg"
                  alt="Before restoration - weathered sun-damaged daybed"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Severely weathered from outdoor sun exposure with faded, deteriorated wood showing
                    extensive UV damage across frame and slats. Natural weathering had taken its toll.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-21.jpeg"
                  alt="After restoration - vibrant coastal blue finish"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Stunning coastal transformation with sophisticated turquoise blue frame contrasting
                    beautifully against natural wood slats. Resort-style elegance with weather protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Damage Gallery */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Extent of Weather Damage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: "/images/portfolio/sunbed1.jpg", caption: "Original faded condition" },
                { src: "/images/portfolio/sunbed3.jpg", caption: "Side view showing sun damage" },
                { src: "/images/portfolio/sunbed5.jpg", caption: "Footboard natural weathering" },
                { src: "/images/portfolio/sunbed7.jpg", caption: "Overhead deterioration view" }
              ].map((image, index) => (
                <div key={index} className="bg-daisy-cream rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-48 object-cover"
                  />
                  <p className="p-3 text-sm text-forest-green text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Features */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Coastal Design Elements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🌊",
                  title: "Vibrant Turquoise Frame",
                  description: "Sophisticated coastal blue paint on frame evoking seaside charm and resort-style elegance"
                },
                {
                  icon: "🪵",
                  title: "Natural Wood Slats",
                  description: "Contrasting warm wood finish on seat slats adding organic texture and visual interest"
                },
                {
                  icon: "🏖️",
                  title: "Scalloped Vintage Detail",
                  description: "Preserved decorative scalloped headboard maintaining vintage character with coastal flair"
                },
                {
                  icon: "☀️",
                  title: "UV-Resistant Protection",
                  description: "Outdoor-grade finish with UV protection ensuring lasting beauty in sun exposure"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{feature.title}</h3>
                  <p className="text-forest-green">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Coastal Restoration Process
            </h2>

            <div className="space-y-12">
              {restorationSteps.map((step, index) => (
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
              Resort-Style Outdoor Elegance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Seaside Color Harmony",
                  description: "Sophisticated turquoise blue frame creates beautiful contrast against warm natural wood slats evoking coastal resort aesthetic."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Dual-Finish Visual Depth",
                  description: "Painted frame with natural slat combination provides visual interest and dimension perfect for outdoor living spaces."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Weather-Ready Protection",
                  description: "Outdoor-grade UV-resistant finish ensures vibrant coastal beauty withstands sun, weather, and outdoor exposure."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Versatile Outdoor Appeal",
                  description: "Perfect for patios, pool areas, gardens - ideal for coastal, Mediterranean, or tropical-inspired outdoor living."
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
                src="/images/portfolio/portfolio-21.jpeg"
                alt="Coastal blue daybed as outdoor focal point"
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "The transformation is incredible! It looks like something from a luxury beach resort."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Homeowner</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Professional Outdoor Restoration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Weather Damage Reversal",
                  description: "Complete sanding removing oxidized layers revealing fresh pine foundation",
                  benefit: "Like-new surface"
                },
                {
                  title: "Dual-Finish Application",
                  description: "Expert coordination of coastal blue paint and natural wood stain",
                  benefit: "Visual contrast"
                },
                {
                  title: "Scalloped Detail Care",
                  description: "Preservation of decorative vintage headboard maintaining character",
                  benefit: "Charm retained"
                },
                {
                  title: "UV Protection Coating",
                  description: "Outdoor-grade clear coat preventing future sun damage",
                  benefit: "Long-term beauty"
                },
                {
                  title: "Weather-Resistant Sealing",
                  description: "Professional finish suitable for year-round outdoor exposure",
                  benefit: "Seasonal durability"
                },
                {
                  title: "Quality Outdoor Finish",
                  description: "Smooth professional application across all surfaces",
                  benefit: "Resort elegance"
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
              Want to Transform Your Outdoor Furniture?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in coastal-inspired outdoor furniture restoration with weather-resistant finishes.
              Let us bring resort-style elegance to your patio, pool, or garden space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Outdoor Restoration Quote
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
