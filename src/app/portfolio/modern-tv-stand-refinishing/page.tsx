import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Modern TV Stand Two-Tone Refinishing - Custom Blue-Gray & Wood | Blooming Furniture",
  description: "See the stunning transformation of a modern TV stand with custom two-tone refinishing. Sophisticated blue-gray body with natural wood drawer fronts and brushed nickel hardware.",
  keywords: "TV stand refinishing, media console makeover, two-tone furniture, blue-gray furniture, modern entertainment unit, custom furniture colors",
  openGraph: {
    title: "Modern TV Stand - Custom Two-Tone Refinishing",
    description: "Custom two-tone transformation with sophisticated blue-gray body and natural wood drawer fronts creating designer-quality media console.",
    url: "https://bloomingfurniture.co.za/portfolio/modern-tv-stand-refinishing",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-11.jpeg",
        width: 800,
        height: 600,
        alt: "Modern TV Stand Two-Tone Refinishing - Blue-Gray & Wood",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/modern-tv-stand-refinishing",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Modern TV Stand/Entertainment Unit - Custom Two-Tone Refinishing",
  "description": "Professional furniture refinishing creating stunning contemporary two-tone aesthetic with blue-gray body and natural wood drawer fronts on modern media console.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-11.jpeg",
  "dateCreated": "2025-11-10",
  "keywords": ["TV stand refinishing", "two-tone furniture", "blue-gray paint", "media console", "modern furniture"]
};

export default function ModernTVStandRefinishing() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Design Consultation & Color Selection",
      process: "Collaborated with client to select sophisticated blue-gray for cabinet body complemented by natural wood drawer fronts",
      purpose: "Created custom two-tone color scheme elevating standard piece into designer-quality statement",
      images: ["/images/portfolio/portfolio-10.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Disassembly",
      process: "Careful removal of drawer fronts, hardware, and all removable components for separate finishing treatments",
      purpose: "Enabled precise two-tone application with clean color separation and professional results",
      images: ["/images/portfolio/portfolio-10.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Multi-Surface Preparation",
      process: "Comprehensive sanding of cabinet body, drawer fronts, shelving, and all surfaces requiring refinishing",
      purpose: "Created smooth uniform foundation for both paint and stain applications",
      images: ["/images/portfolio/portfolio-10.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Conditioning",
      process: "Deep conditioning treatment across all components ensuring even finish absorption",
      purpose: "Prevented blotchy appearance and ensured consistent color in both painted and stained areas",
      images: ["/images/portfolio/portfolio-10.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Blue-Gray Paint Application",
      process: "Professional multi-coat sophisticated blue-gray paint on main cabinet body and frame structure",
      purpose: "Achieved contemporary elegant base color creating modern aesthetic foundation",
      images: ["/images/portfolio/portfolio-11.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Natural Wood Drawer Staining",
      process: "Warm natural wood stain application on drawer fronts preserving grain visibility and texture",
      purpose: "Created organic contrast against blue-gray body adding warmth and visual interest",
      images: ["/images/portfolio/portfolio-11.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Interior Shelving Finish",
      process: "Coordinating darker tone finish on interior open shelving compartments",
      purpose: "Added depth while helping media components blend seamlessly into overall design",
      images: ["/images/portfolio/portfolio-11.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Hardware Upgrade",
      process: "Installation of modern brushed nickel bar pulls on natural wood drawer fronts",
      purpose: "Completed refined aesthetic with contemporary metal accent complementing two-tone finish",
      images: ["/images/portfolio/portfolio-12.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple clear coat layers with matte finish on painted surfaces and satin finish on natural wood",
      purpose: "Protected beautiful two-tone finish ensuring durability in daily media console use",
      images: ["/images/portfolio/portfolio-12.jpeg"]
    },
    {
      step: "🔟",
      treatment: "Final Assembly & Installation",
      process: "Professional reassembly and placement in client's bedroom as functional media storage and design focal point",
      purpose: "Completed transformation ready to serve as both practical entertainment unit and stunning statement piece",
      images: ["/images/portfolio/portfolio-11.jpeg"]
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
                  📺 Modern TV Stand Makeover
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Custom Two-Tone Refinishing
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This sleek modern entertainment unit with clean lines and open shelving received a
                  spectacular custom two-tone transformation. Sophisticated blue-gray body paired with
                  warm natural wood drawer fronts creates designer-quality aesthetic.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">2 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Modern Design</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/portfolio/portfolio-11.jpeg"
                  alt="Modern TV Stand - Custom Two-Tone Transformation"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Two-Tone Design</span>
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
              The Custom Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-10.jpeg"
                  alt="Before refinishing - workshop process"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Standard modern TV stand during workshop refinishing process, ready for custom
                    two-tone color transformation.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-11.jpeg"
                  alt="After refinishing - designer two-tone finish"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Designer-quality two-tone finish with sophisticated blue-gray body, natural wood
                    drawer fronts, and brushed nickel hardware.
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
              Two-Tone Design Elements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Sophisticated Blue-Gray Body",
                  description: "Custom contemporary blue-gray paint on cabinet frame creating modern elegant foundation"
                },
                {
                  icon: "🪵",
                  title: "Natural Wood Drawer Fronts",
                  description: "Warm wood grain preserved on drawer fronts adding organic texture and visual interest"
                },
                {
                  icon: "⚫",
                  title: "Darker Interior Shelving",
                  description: "Coordinating deeper tone on interior compartments creating depth and helping media blend"
                },
                {
                  icon: "✨",
                  title: "Brushed Nickel Hardware",
                  description: "Modern bar pulls in brushed metal finish complementing two-tone color scheme"
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
              Styled in Its New Home
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: "/images/portfolio/portfolio-11.jpeg", caption: "Serving as functional media storage and bedroom focal point" },
                { src: "/images/portfolio/portfolio-12.jpeg", caption: "Alternative angle showcasing two-tone design and modern hardware" }
              ].map((image, index) => (
                <div key={index} className="bg-white-daisy rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.src}
                    alt={image.caption}
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
              The Custom Refinishing Process
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
              Designer-Quality Media Console
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Thoughtful Color Blocking",
                  description: "Custom two-tone scheme with sophisticated blue-gray body and warm wood drawer fronts creates visual interest and modern sophistication."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Organic Texture Contrast",
                  description: "Natural wood grain on drawer fronts adds warmth and dimension against smooth painted surfaces creating balanced aesthetic."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Coordinated Interior Depth",
                  description: "Darker interior shelving creates visual depth while helping media components blend seamlessly into overall design."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Versatile Modern Style",
                  description: "Perfect for modern, mid-century, or Scandinavian-inspired interiors seeking custom furniture with designer appeal."
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
                src="/images/portfolio/portfolio-11.jpeg"
                alt="Modern TV stand as bedroom focal point"
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "This is exactly what we envisioned! The custom colors transformed it into a true statement piece."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Homeowners</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Professional Custom Finishing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Color Consultation",
                  description: "Collaborative design process selecting sophisticated blue-gray and wood tones",
                  benefit: "Personalized aesthetic"
                },
                {
                  title: "Component Disassembly",
                  description: "Careful separation of drawer fronts for precise two-tone application",
                  benefit: "Clean color separation"
                },
                {
                  title: "Multi-Surface Preparation",
                  description: "Comprehensive sanding creating uniform foundation for different finishes",
                  benefit: "Professional quality"
                },
                {
                  title: "Blue-Gray Paint Application",
                  description: "Sophisticated contemporary color on cabinet body and frame",
                  benefit: "Modern elegance"
                },
                {
                  title: "Natural Wood Staining",
                  description: "Warm grain-preserving stain on drawer fronts for organic contrast",
                  benefit: "Visual warmth"
                },
                {
                  title: "Dual Finish Protection",
                  description: "Matte clear coat on painted surfaces, satin on natural wood",
                  benefit: "Optimal durability"
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
              Want a Custom Two-Tone Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in creating custom color schemes that transform standard furniture into
              designer-quality statement pieces. Let us help you choose the perfect two-tone finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Custom Color Quote
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
