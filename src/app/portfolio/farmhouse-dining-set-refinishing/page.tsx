import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Farmhouse Dining Set Refinishing - Modern Coastal Transformation | Blooming Furniture",
  description: "See the stunning refinishing of a farmhouse X-leg dining table and bench with custom whitewash finish and crisp white base. Modern coastal aesthetic with beautiful wood grain visibility.",
  keywords: "farmhouse table refinishing, X-leg table makeover, whitewash dining table, coastal furniture, modern farmhouse, dining set transformation",
  openGraph: {
    title: "Farmhouse Dining Set - Modern Coastal Refinishing",
    description: "Beautiful contrast between soft gray-washed wood grain and crisp white X-leg base creates perfect modern farmhouse aesthetic.",
    url: "https://bloomingfurniture.co.za/portfolio/farmhouse-dining-set-refinishing",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/image_7.jpeg",
        width: 800,
        height: 600,
        alt: "Farmhouse Dining Set Refinishing - Modern Coastal Finish",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/farmhouse-dining-set-refinishing",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Farmhouse Dining Table with Bench - Custom Refinishing",
  "description": "Professional furniture refinishing transforming farmhouse-style dining set with whitewash top and crisp white X-leg base for modern coastal aesthetic.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/image_7.jpeg",
  "dateCreated": "2025-11-05",
  "keywords": ["farmhouse table", "coastal refinishing", "whitewash finish", "modern farmhouse"]
};

export default function FarmhouseDiningSetRefinishing() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Complete Surface Preparation",
      process: "Thorough sanding of table top, bench seat, and all X-leg base components",
      purpose: "Created smooth foundation ready for two-tone finish application",
      images: ["/images/portfolio/image_6.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Wood Grain Conditioning",
      process: "Deep conditioning treatment on table and bench top surfaces",
      purpose: "Prepared wood fibers for optimal whitewash absorption and even finish",
      images: ["/images/portfolio/image_6.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Custom Whitewash Application",
      process: "Hand-applied translucent light gray/whitewash stain on table and bench tops",
      purpose: "Achieved soft coastal aesthetic while maintaining visible wood grain character",
      images: ["/images/portfolio/image_4.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Crisp White Base Finish",
      process: "Professional white paint application on X-leg base structures",
      purpose: "Created beautiful contrast and modern farmhouse signature look",
      images: ["/images/portfolio/image_4.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Color Coordination",
      process: "Careful blending and coordination between natural tones and painted elements",
      purpose: "Ensured cohesive aesthetic between whitewashed tops and white bases",
      images: ["/images/portfolio/image_5.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of durable matte clear finish on all surfaces",
      purpose: "Protected beautiful finish while maintaining smooth contemporary appearance",
      images: ["/images/portfolio/image_5.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Final Installation",
      process: "Professional delivery and setup in client's home",
      purpose: "Completed transformation ready to serve as perfect gathering spot",
      images: ["/images/portfolio/image_7.jpeg"]
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
                  🏖️ Coastal Farmhouse Dining Set
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Modern X-Leg Table & Bench Refinishing
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This charming farmhouse-style dining table with distinctive X-leg design and matching bench
                  received a complete refinishing transformation. We created a stunning coastal-modern aesthetic
                  with custom whitewash tops and crisp white bases, perfect for contemporary minimalist homes.
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
                <img
                  src="/images/portfolio/image_7.jpeg"
                  alt="Farmhouse Dining Set - Final Installation"
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

        {/* Design Vision */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Design Vision
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🌊",
                  title: "Coastal Aesthetic",
                  description: "Soft whitewash finish creating breezy, beach-inspired modern farmhouse look"
                },
                {
                  icon: "✨",
                  title: "Two-Tone Contrast",
                  description: "Beautiful balance between natural gray-washed grain and crisp white painted base"
                },
                {
                  icon: "🎨",
                  title: "Visible Wood Character",
                  description: "Translucent finish maintains natural wood grain texture adding warmth and interest"
                },
                {
                  icon: "🏡",
                  title: "Scandinavian Style",
                  description: "Perfect for modern minimalist and Scandinavian-inspired interior design"
                }
              ].map((vision, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{vision.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{vision.title}</h3>
                  <p className="text-forest-green">{vision.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              In Our Workshop
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: "/images/portfolio/image_6.jpeg", caption: "Refinishing process with careful surface preparation" },
                { src: "/images/portfolio/image_4.jpeg", caption: "Freshly finished with whitewash top and white base" }
              ].map((image, index) => (
                <div key={index} className="bg-daisy-cream rounded-lg overflow-hidden shadow-md">
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
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Refinishing Process
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
              The Beautiful Result
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Perfect Two-Tone Harmony",
                  description: "Soft gray-washed top beautifully contrasts with crisp white X-leg base creating signature modern farmhouse look."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Natural Wood Grain Beauty",
                  description: "Translucent whitewash finish maintains visible wood texture adding warmth and character to contemporary aesthetic."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Fresh Coastal Vibe",
                  description: "Light, airy finish perfect for beach-inspired, Scandinavian, or modern minimalist interior design."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Complete Dining Set",
                  description: "Matching table and bench create cohesive look perfect for gathering family and friends in style."
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

            {/* Final Installation */}
            <div className="bg-golden-center/20 p-8 rounded-lg">
              <img
                src="/images/portfolio/image_7.jpeg"
                alt="Complete dining set in client's home"
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "This set is absolutely perfect! The two-tone finish is exactly what we dreamed of for our coastal home."
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Happy Homeowners</cite>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Expert Refinishing Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Multi-Surface Preparation",
                  description: "Complete sanding of table top, bench seat, and all X-leg components",
                  benefit: "Uniform quality"
                },
                {
                  title: "Translucent Whitewash",
                  description: "Custom light gray stain allowing natural grain to show through",
                  benefit: "Warmth with modernity"
                },
                {
                  title: "Professional Paint Application",
                  description: "Crisp white finish on X-leg bases with smooth coverage",
                  benefit: "Clean contemporary look"
                },
                {
                  title: "Color Coordination",
                  description: "Careful balance between natural wood tones and painted elements",
                  benefit: "Cohesive aesthetic"
                },
                {
                  title: "Matte Clear Coating",
                  description: "Multiple protective layers maintaining smooth contemporary finish",
                  benefit: "Durable protection"
                },
                {
                  title: "Matching Set Finishing",
                  description: "Consistent finish application across table and bench",
                  benefit: "Complete harmony"
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
              Want a Modern Farmhouse Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in custom two-tone refinishing creating beautiful coastal and modern farmhouse aesthetics.
              Let us transform your dining furniture into the perfect centerpiece for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Custom Finish Quote
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
