import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Vintage Sideboard Refinishing - Two-Tone Coastal Transformation",
  description: "See the stunning transformation of a vintage buffet from dark traditional finish to fresh coastal-modern two-tone style with crisp white body and natural wood top featuring circular medallion doors.",
  keywords: "sideboard refinishing, buffet restoration, two-tone furniture, coastal furniture, medallion cabinet, modern farmhouse, white furniture",
  openGraph: {
    title: "Vintage Sideboard - Coastal Two-Tone Refinishing",
    description: "Dramatic transformation from dark traditional to fresh coastal-modern with crisp white body and warm natural wood top featuring distinctive medallion cabinet doors.",
    url: "https://bloomingfurniture.co.za/portfolio/vintage-sideboard-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/image_41.jpeg",
        width: 800,
        height: 600,
        alt: "Vintage Sideboard Restoration - Two-Tone Finish",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/vintage-sideboard-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Vintage Buffet/Sideboard - Complete Two-Tone Refinishing",
  "description": "Professional furniture refinishing transforming classic buffet from dark traditional finish to stunning coastal-modern two-tone aesthetic with white body and natural wood top.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/image_41.jpeg",
  "dateCreated": "2025-11-08",
  "keywords": ["vintage sideboard", "two-tone refinishing", "coastal furniture", "medallion doors", "modern farmhouse"]
};

export default function VintageSideboardRestoration() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Initial Assessment & Planning",
      process: "Careful examination of dark finish condition, medallion details, and wood structure to plan two-tone transformation approach",
      purpose: "Determined refinishing strategy preserving architectural details while achieving coastal modern aesthetic",
      images: ["/images/portfolio/image_40.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Finish Stripping",
      process: "Professional removal of old dark stain from all cabinet surfaces, doors with medallion details, drawer fronts, and turned legs",
      purpose: "Created clean foundation revealing natural wood ready for two-tone finish application",
      images: ["/images/portfolio/image_40.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Multi-Stage Surface Preparation",
      process: "Thorough progressive sanding across all surfaces ensuring smooth finish-ready foundation for both paint and stain",
      purpose: "Eliminated imperfections and prepared wood for optimal adhesion of new finishes",
      images: ["/images/portfolio/image_44.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Repair & Conditioning",
      process: "Structural repairs and deep conditioning treatment across cabinet body, drawer components, and decorative elements",
      purpose: "Ensured piece integrity and prepared surfaces for even paint and stain absorption",
      images: ["/images/portfolio/image_44.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Top Surface Staining",
      process: "Application of warm natural wood stain on top surface creating beautiful contrast foundation",
      purpose: "Preserved wood grain beauty and warmth as focal point against white cabinet body",
      images: ["/images/portfolio/image_43.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Crisp White Paint Application",
      process: "Professional multi-coat white paint on cabinet body, medallion doors, drawer fronts, and turned legs",
      purpose: "Achieved fresh coastal-modern look highlighting architectural medallion details and turned leg craftsmanship",
      images: ["/images/portfolio/image_38.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Hardware Refinishing",
      process: "Cleaning and refinishing of all drawer and door hardware in classic black for vintage appeal",
      purpose: "Created perfect accent detail complementing two-tone finish and completing sophisticated look",
      images: ["/images/portfolio/image_39.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of matte clear finish on all surfaces for lasting durability and smooth professional appearance",
      purpose: "Protected beautiful two-tone finish ensuring years of beauty in daily use",
      images: ["/images/portfolio/image_41.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Final Installation",
      process: "Professional delivery and placement in client's home as stunning focal piece",
      purpose: "Completed transformation ready to serve as elegant statement in dining or living space",
      images: ["/images/portfolio/image_42.jpeg"]
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
                  🏖️ Vintage Sideboard Revival
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Two-Tone Coastal Transformation
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This elegant vintage buffet with distinctive circular medallion cabinet doors arrived with
                  a dark, outdated finish that concealed its beautiful architectural details. Through expert
                  refinishing, we created a stunning two-tone coastal aesthetic combining crisp white body
                  with warm natural wood top.
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
                  src="/images/portfolio/image_41.jpeg"
                  alt="Vintage Sideboard - Final Two-Tone Restoration" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Modern Farmhouse</span>
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
              The Dramatic Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">BEFORE</h3>
                </div>
                <Image
                  src="/images/portfolio/image_40.jpeg"
                  alt="Before restoration - dark traditional finish" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Dated dark wood finish concealing beautiful medallion cabinet details and
                    architectural charm. Traditional styling limited versatility.
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                  <h3 className="text-xl font-semibold">AFTER</h3>
                </div>
                <Image
                  src="/images/portfolio/image_41.jpeg"
                  alt="After restoration - fresh two-tone finish" width={800} height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-forest-green">
                    Fresh coastal-modern style with crisp white body and natural wood top.
                    Medallion details highlighted, black hardware adds vintage charm.
                  </p>
                </div>
              </div>
            </div>

            {/* Before/After Collage */}
            <div className="bg-white-daisy p-4 rounded-lg shadow-lg">
              <Image
                src="/images/portfolio/image_8.jpeg"
                alt="Before/After comparison collage" width={800} height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Design Features */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Distinctive Design Elements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "⚪",
                  title: "Circular Medallion Doors",
                  description: "Unique ornate circular medallion details on cabinet doors, now beautifully highlighted in crisp white finish"
                },
                {
                  icon: "🎨",
                  title: "Two-Tone Coastal Aesthetic",
                  description: "Fresh white body creates beautiful contrast with warm natural wood top surface"
                },
                {
                  icon: "⚫",
                  title: "Vintage Black Hardware",
                  description: "Classic black drawer and door hardware providing perfect accent detail"
                },
                {
                  icon: "🏛️",
                  title: "Turned Leg Details",
                  description: "Elegant turned legs highlighted in white showcasing traditional craftsmanship"
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

        {/* Workshop Progress */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              In Our Workshop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: "/images/portfolio/image_44.jpeg", caption: "Final workshop details and quality inspection" },
                { src: "/images/portfolio/image_38.jpeg", caption: "Side view showcasing pristine white finish and black hardware" }
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
              The Expert Refinishing Process
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
              A Stunning Coastal Showpiece
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Perfect Two-Tone Balance",
                  description: "Crisp white cabinet body beautifully contrasts with warm natural wood top creating visual interest and coastal sophistication."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Medallion Details Highlighted",
                  description: "Distinctive circular medallion cabinet doors now stand out as focal architectural feature in fresh white finish."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Modern Farmhouse Appeal",
                  description: "Fresh contemporary styling while maintaining vintage charm through turned legs and medallion details."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Versatile Elegance",
                  description: "Perfect for dining rooms, entryways, or living spaces seeking sophisticated coastal-modern aesthetic."
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

            {/* In Client's Home */}
            <div className="bg-golden-center/20 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Image
                  src="/images/portfolio/image_42.jpeg"
                  alt="Sideboard installed in client's home" width={800} height={600}
                  className="rounded-lg w-full h-80 object-cover"
                />
                <Image
                  src="/images/portfolio/image_43.jpeg"
                  alt="Top-down view showing natural wood top contrast" width={800} height={600}
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "This piece is absolutely stunning! The two-tone finish is exactly what we wanted for our coastal home."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Homeowners</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Professional Refinishing Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Finish Stripping",
                  description: "Professional removal of old dark stain revealing natural wood foundation",
                  benefit: "Clean slate for transformation"
                },
                {
                  title: "Multi-Stage Sanding",
                  description: "Progressive sanding creating smooth foundation for paint and stain",
                  benefit: "Flawless surface quality"
                },
                {
                  title: "Two-Tone Application",
                  description: "Expert coordination of white paint and natural wood stain finishes",
                  benefit: "Beautiful contrast"
                },
                {
                  title: "Medallion Detail Preservation",
                  description: "Careful refinishing highlighting unique circular cabinet door details",
                  benefit: "Architectural charm intact"
                },
                {
                  title: "Hardware Refinishing",
                  description: "Classic black finish on all drawer and door hardware",
                  benefit: "Perfect vintage accent"
                },
                {
                  title: "Matte Protective Coating",
                  description: "Multiple clear coat layers ensuring durability and smooth finish",
                  benefit: "Long-lasting beauty"
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
              Want a Two-Tone Coastal Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in creating beautiful two-tone refinishing that brings fresh coastal-modern
              style to vintage furniture. Let us transform your sideboard or buffet into a stunning focal piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Refinishing Quote
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
