import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Antique Pine Vanity with Delft Tiles - Complete Restoration",
  description: "See the stunning restoration of a Dutch-inspired antique pine vanity featuring beautiful Delft-style blue and white tile insets. From dull unfinished wood to rich honey-toned showpiece with high-gloss finish.",
  keywords: "antique vanity restoration, pine furniture refinishing, Delft tile furniture, Dutch-inspired vanity, dressing table restoration, Victorian furniture",
  openGraph: {
    title: "Antique Pine Vanity - Delft Tile Restoration",
    description: "Beautiful transformation of Dutch-inspired vanity from dull unfinished wood to rich honey-toned showpiece with preserved Delft tile accents.",
    url: "https://bloomingfurniture.co.za/portfolio/antique-washstand-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/image_11.jpeg",
        width: 800,
        height: 600,
        alt: "Antique Pine Vanity Restoration - Rich Honey Finish with Delft Tiles",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/antique-washstand-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Antique Pine Vanity with Delft Tile Insets - Complete Restoration",
  "description": "Professional furniture restoration transforming Dutch-inspired antique pine vanity from dull unfinished wood to stunning honey-toned showpiece with preserved Delft tile accents.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/image_11.jpeg",
  "dateCreated": "2025-11-06",
  "keywords": ["antique restoration", "pine vanity", "Delft tiles", "Dutch furniture", "Victorian dressing table"]
};

export default function AntiqueWashstandRestoration() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Initial Assessment & Deep Cleaning",
      process: "Thorough inspection of vanity condition, structural integrity check, and complete surface cleaning to remove years of accumulated dirt and grime",
      purpose: "Established baseline condition and prepared piece for proper restoration treatment",
      images: ["/images/portfolio/image_9.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Delft Tile Protection",
      process: "Careful masking and protection of all decorative blue and white Delft-style tile panels to preserve their original beauty during wood restoration",
      purpose: "Ensured precious decorative tiles remained undamaged throughout refinishing process",
      images: ["/images/portfolio/image_9.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Complete Surface Preparation",
      process: "Thorough multi-grit sanding of all pine wood surfaces including vanity top, drawer fronts, cabinet doors, scalloped mirror frame, and hexagonal base shelf",
      purpose: "Created smooth foundation removing old finish and preparing wood for optimal stain absorption",
      images: ["/images/portfolio/image_9.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Conditioning Treatment",
      process: "Deep conditioning of pine wood to open grain structure and ensure even stain penetration across all surfaces",
      purpose: "Prevented blotchy staining and enhanced natural pine grain patterns for uniform color",
      images: ["/images/portfolio/image_11.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Custom Honey-Tone Staining",
      process: "Expert application of warm honey-colored stain highlighting the pine's natural warmth and creating rich golden-amber tones throughout",
      purpose: "Achieved stunning transformation from dull gray wood to vibrant warm finish complementing the blue tile accents",
      images: ["/images/portfolio/image_11.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Mirror Frame & Hardware Restoration",
      process: "Careful restoration of scalloped mirror frame details, thorough cleaning and polishing of all drawer pulls and cabinet hardware",
      purpose: "Brought decorative elements back to life matching the quality of wood refinishing",
      images: ["/images/portfolio/image_11.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "High-Gloss Protective Coating",
      process: "Multiple layers of premium high-gloss clear finish applied to all wood surfaces with careful attention to even coverage",
      purpose: "Created showroom-quality shine while providing durable protection against daily wear",
      images: ["/images/portfolio/image_11.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Final Buffing & Quality Inspection",
      process: "Professional buffing to enhance gloss and smoothness, decorative tile cleaning, and comprehensive quality check of all elements",
      purpose: "Ensured every detail met our exacting standards for this stunning Victorian-era statement piece",
      images: ["/images/portfolio/image_11.jpeg"]
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
                  🏺 Dutch-Inspired Antique Washstand
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Pine Vanity with Delft Tile Insets - Complete Restoration
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This charming antique pine vanity featuring distinctive Delft-style blue and white
                  decorative tile panels arrived with dull, unprotected finish. Through expert restoration,
                  we transformed it into a stunning showpiece with rich honey-toned finish that beautifully
                  complements the tile accents.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Victorian Elegance</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/image_11.jpeg"
                  alt="Antique Pine Vanity - Final Restoration" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Antique Restoration</span>
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
              The Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <Image
                  src="/images/portfolio/image_9.jpeg"
                  alt="Before restoration - dull unfinished wood" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Dull, unfinished wood with worn surfaces lacking protective coating.
                    Beautiful Delft tile panels were overshadowed by tired wood finish.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <Image
                  src="/images/portfolio/image_11.jpeg"
                  alt="After restoration - rich honey-toned finish" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Stunning transformation with rich honey-toned finish and high-gloss protective coating.
                    The warm wood tones now beautifully complement the blue and white tile accents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Features */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Distinctive Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Delft-Style Tile Insets",
                  description: "Beautiful blue and white decorative tile panels adding authentic Dutch charm and visual interest"
                },
                {
                  icon: "🪞",
                  title: "Scalloped Mirror Frame",
                  description: "Ornate carved mirror frame with delicate scalloped detailing showcasing Victorian craftsmanship"
                },
                {
                  icon: "📦",
                  title: "Multi-Functional Storage",
                  description: "Multiple drawers, cabinet space, and hexagonal base shelf providing practical versatility"
                },
                {
                  icon: "✨",
                  title: "High-Gloss Finish",
                  description: "Professional showroom-quality shine enhancing wood beauty while ensuring lasting durability"
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
              A Stunning Victorian Showpiece
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Rich Honey-Toned Beauty",
                  description: "Warm golden-amber stain brings out the natural beauty of pine wood, creating stunning contrast with blue and white Delft tile accents."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Enhanced Natural Grain",
                  description: "Expert staining technique highlights pine's unique grain patterns adding depth and character to every surface."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Showroom-Quality Shine",
                  description: "Multiple layers of high-gloss protective finish create mirror-like sheen that catches light beautifully."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Statement Piece",
                  description: "Combines Victorian elegance with practical functionality - perfect focal point for bedroom or dressing area."
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
                src="/images/portfolio/image_11.jpeg"
                alt="Complete restored antique pine vanity with Delft tiles" width={800} height={600}
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "This piece is absolutely breathtaking! The honey finish makes the Delft tiles pop, and the mirror-like shine is stunning."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Collector</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Expert Restoration Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Delft Tile Preservation",
                  description: "Careful masking and protection of decorative tile panels throughout process",
                  benefit: "Original beauty intact"
                },
                {
                  title: "Multi-Surface Preparation",
                  description: "Thorough sanding of vanity top, drawers, cabinet, mirror frame, and base",
                  benefit: "Uniform foundation"
                },
                {
                  title: "Wood Conditioning",
                  description: "Deep pine grain conditioning for optimal stain absorption",
                  benefit: "Even color penetration"
                },
                {
                  title: "Custom Honey Staining",
                  description: "Warm golden-amber stain highlighting pine's natural character",
                  benefit: "Rich vibrant finish"
                },
                {
                  title: "High-Gloss Protection",
                  description: "Multiple clear coat layers creating showroom-quality shine",
                  benefit: "Durable beauty"
                },
                {
                  title: "Hardware Restoration",
                  description: "Cleaning and polishing of all drawer pulls and cabinet hardware",
                  benefit: "Complete transformation"
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
              Have an Antique Vanity Needing Restoration?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in bringing antique furniture back to life while preserving unique decorative elements.
              Let us transform your cherished piece into a stunning showpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Restoration Quote
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
