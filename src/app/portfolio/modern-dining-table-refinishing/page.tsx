import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Modern Dining Table Refinishing - Classic to Contemporary",
  description: "See the stunning transformation of a traditional mahogany dining table into a modern gray masterpiece. Expert refinishing showcasing color transformation while preserving classic craftsmanship.",
  keywords: "dining table refinishing, mahogany to gray, modern furniture makeover, table restoration, whitewash finish, contemporary dining furniture, furniture color change",
  openGraph: {
    title: "Classic Dining Table - Modern Gray Refinishing Transformation",
    description: "From dark traditional mahogany to sophisticated modern gray - see how we transformed this classic dining set into a contemporary showpiece.",
    url: "https://bloomingfurniture.co.za/portfolio/modern-dining-table-refinishing",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-1.jpeg",
        width: 800,
        height: 600,
        alt: "Modern Dining Table Refinishing - Before and After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/modern-dining-table-refinishing",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Classic Dining Table Set - Modern Refinishing Transformation",
  "description": "Professional furniture refinishing transforming traditional mahogany dining table to contemporary gray/whitewash finish while preserving classic design.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-1.jpeg",
  "dateCreated": "2025-11-05",
  "keywords": ["dining table refinishing", "modern furniture", "gray finish", "furniture transformation"]
};

export default function ModernDiningTableRefinishing() {
  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Complete Stain Removal",
      process: "Professional stripping of original dark mahogany finish from all surfaces",
      purpose: "Removed dated color while preparing wood for modern transformation",
      images: ["/images/portfolio/portfolio-1.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Surface Preparation",
      process: "Multi-stage sanding across table top, turned legs, and all wood surfaces",
      purpose: "Created smooth, even foundation ready for contemporary finish",
      images: ["/images/portfolio/portfolio-2.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Wood Conditioning",
      process: "Deep conditioning treatment to prepare wood fibers for optimal finish absorption",
      purpose: "Ensured even color penetration and prevented blotching on all surfaces",
      images: ["/images/portfolio/portfolio-4.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Custom Gray/Whitewash Application",
      process: "Hand-applied translucent gray finish allowing wood grain to remain visible",
      purpose: "Transformed traditional dark wood into sophisticated modern aesthetic",
      images: ["/images/portfolio/portfolio-4.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Grain Enhancement",
      process: "Strategic application technique highlighting natural wood texture through gray tones",
      purpose: "Preserved character and craftsmanship while achieving contemporary look",
      images: ["/images/portfolio/portfolio-3.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple furniture-grade matte clear coat layers for durability",
      purpose: "Ensured lasting protection for daily dining use while maintaining modern appearance",
      images: ["/images/portfolio/portfolio-5.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Final Finishing",
      process: "Professional hand-rubbing and polishing to achieve perfect matte sheen",
      purpose: "Created silky-smooth contemporary surface ready for years of use",
      images: ["/images/portfolio/portfolio-5.jpeg"]
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
                  🎨 Modern Dining Table Makeover
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Classic to Contemporary Refinishing
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This beautiful solid wood dining table with elegant turned legs arrived with a traditional
                  dark mahogany finish. Through expert refinishing, we transformed it into a sophisticated
                  modern centerpiece with a stunning gray/whitewash finish that perfectly suits contemporary
                  interiors while preserving its classic craftsmanship.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">2 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Contemporary Elegance</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/portfolio-1.jpeg"
                  alt="Classic Dining Table - Before Refinishing" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Style Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Starting Point */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Starting Point
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🪵",
                  title: "Dated Dark Finish",
                  description: "Traditional dark mahogany stain no longer suited modern aesthetic preferences"
                },
                {
                  icon: "🏠",
                  title: "Style Mismatch",
                  description: "Heavy traditional appearance clashed with client's contemporary interior design"
                },
                {
                  icon: "✨",
                  title: "Hidden Potential",
                  description: "Beautiful solid wood construction and turned leg details deserved updated presentation"
                },
                {
                  icon: "🔄",
                  title: "Transformation Opportunity",
                  description: "Quality solid wood construction perfect for complete color transformation"
                }
              ].map((issue, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{issue.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{issue.title}</h3>
                  <p className="text-forest-green">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before Images Gallery */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Original Condition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { src: "/images/portfolio/portfolio-1.jpeg", caption: "Original dark mahogany finish with traditional styling" },
                { src: "/images/portfolio/portfolio-2.jpeg", caption: "Rich dark wood tones showing dated appearance" }
              ].map((image, index) => (
                <div key={index} className="bg-daisy-cream rounded-lg overflow-hidden shadow-md">
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
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Refinishing Journey
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

        {/* The Transformation */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              The Beautiful Result
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Contemporary Color",
                  description: "Sophisticated gray/whitewash finish transforms traditional piece into modern showpiece perfectly suited for contemporary interiors."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Preserved Character",
                  description: "Translucent finish allows beautiful wood grain to remain visible, maintaining texture and visual interest."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-golden-center" />,
                  title: "Timeless Craftsmanship",
                  description: "Classic turned leg design and elegant proportions now shine in updated aesthetic that honors original quality."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Perfect Integration",
                  description: "Seamlessly blends timeless design with current trends, serving as perfect centerpiece in modernized home."
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

            {/* After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/portfolio-3.jpeg"
                  alt="Transformed table with elegant light gray finish" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="text-center text-golden-center mt-2">Modern gray aesthetic in contemporary setting</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/portfolio-4.jpeg"
                  alt="Close-up of refinished tabletop showing grain" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="text-center text-golden-center mt-2">Beautiful wood grain visible through translucent finish</p>
              </div>
            </div>

            <div className="bg-golden-center/20 p-8 rounded-lg text-center">
              <Image
                src="/images/portfolio/portfolio-5.jpeg"
                alt="Complete dining room setup showcasing transformation" width={800} height={600}
                className="rounded-lg mb-6 mx-auto max-w-2xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4">
                "You've given our family heirloom a second life! It looks absolutely stunning in our modern home."
              </blockquote>
              <cite className="text-white-daisy font-semibold">— Thrilled Homeowner</cite>
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
                  title: "Complete Stripping",
                  description: "Professional removal of original dark mahogany stain from all surfaces",
                  benefit: "Clean slate foundation"
                },
                {
                  title: "Multi-Surface Sanding",
                  description: "Careful preparation of table top, turned legs, and all wood components",
                  benefit: "Uniform finish quality"
                },
                {
                  title: "Translucent Gray Application",
                  description: "Custom whitewash/gray blend allowing grain visibility",
                  benefit: "Modern with character"
                },
                {
                  title: "Grain Enhancement",
                  description: "Strategic technique highlighting natural wood texture through finish",
                  benefit: "Visual depth retained"
                },
                {
                  title: "Matte Clear Coating",
                  description: "Multiple protective layers in contemporary matte sheen",
                  benefit: "Durable modern look"
                },
                {
                  title: "Hand Finishing",
                  description: "Professional hand-rubbing and polishing for perfect matte sheen",
                  benefit: "Silky smooth surface"
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
              Ready to Update Your Furniture Style?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              Transform your traditional pieces into contemporary showpieces with our expert refinishing services.
              We specialize in color transformations that preserve quality craftsmanship while updating aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Free Color Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-dark-wood text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-dark-wood hover:text-white-daisy transition duration-300"
              >
                View More Transformations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
