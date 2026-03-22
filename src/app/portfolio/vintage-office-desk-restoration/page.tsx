import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Star, Clock, Award, Sparkles, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: "Vintage Office Desk Restoration - Complete Transformation",
  description: "Witness the dramatic transformation of a faded vintage office desk from deteriorated pink-mauve to luxurious mahogany finish. Expert restoration showcasing complete refinishing and drawer renewal.",
  keywords: "office desk restoration, vintage furniture refinishing, mahogany staining, desk restoration, furniture transformation, antique desk repair, wood refinishing",
  openGraph: {
    title: "Vintage Office Desk - Complete Restoration Before & After",
    description: "From faded pink to luxurious mahogany - see how we transformed this vintage office desk into a stunning statement piece.",
    url: "https://bloomingfurniture.co.za/portfolio/vintage-office-desk-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/chest10.jpeg",
        width: 800,
        height: 600,
        alt: "Vintage Office Desk Restoration - Before and After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/vintage-office-desk-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Vintage Office Desk - Complete Restoration",
  "description": "Professional furniture restoration transforming a tired vintage office desk from faded pinkish-mauve finish to stunning deep mahogany with drawer restoration.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/chest10.jpeg",
  "dateCreated": "2025-11-05",
  "keywords": ["office desk restoration", "vintage furniture", "mahogany refinishing", "furniture transformation"]
};

export default function VintageWineChestRestoration() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Complete Finish Removal",
      process: "Stripped old faded pinkish-mauve finish and deteriorated protective coating",
      purpose: "Removed all damaged layers to reveal bare wood ready for transformation",
      images: ["/images/portfolio/Chest1.jpg"]
    },
    {
      step: "2️⃣",
      treatment: "Surface Preparation",
      process: "Multi-stage sanding process addressing water damage and surface deterioration",
      purpose: "Created smooth, even surface while removing all imperfections and stains",
      images: ["/images/portfolio/Chest2.jpg"]
    },
    {
      step: "3️⃣",
      treatment: "Interior Restoration",
      process: "Careful restoration and refinishing of interior drawer compartments",
      purpose: "Preserved functionality while ensuring structural integrity",
      images: ["/images/portfolio/Chest3.jpg"]
    },
    {
      step: "4️⃣",
      treatment: "Wood Conditioning",
      process: "Deep conditioning treatment to prepare wood fibers for optimal stain absorption",
      purpose: "Ensured even stain penetration and prevented blotching on restored surface",
      images: ["/images/portfolio/Chest8.jpg"]
    },
    {
      step: "5️⃣",
      treatment: "Custom Mahogany Stain",
      process: "Hand-applied rich mahogany/walnut stain blend in multiple coats",
      purpose: "Transformed faded pink to luxurious deep reddish-brown highlighting natural grain",
      images: ["/images/portfolio/Chest4.jpg"]
    },
    {
      step: "6️⃣",
      treatment: "Interior Refinishing",
      process: "Drawer refinishing with hardware preservation and interior sealing",
      purpose: "Completed interior transformation matching exterior elegance",
      images: ["/images/portfolio/Chest5.jpg"]
    },
    {
      step: "7️⃣",
      treatment: "Protective Topcoats",
      process: "Multiple layers of high-gloss protective finish with professional polish",
      purpose: "Created stunning showroom-quality glossy finish protecting for generations",
      images: ["/images/portfolio/Chest7.jpg"]
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
                  💼 Vintage Office Desk Revival
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Complete Office Desk Restoration
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This vintage office desk arrived with a severely faded pinkish-mauve finish,
                  surface deterioration, water damage, and worn-out protective coating. Through expert restoration,
                  we transformed it into a stunning statement piece with luxurious deep reddish-brown finish.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">4 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Showroom Quality</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/chest10.jpeg"
                  alt="Vintage Office Desk - Before Restoration" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Dramatic Transformation</span>
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
              The Challenge
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Severely Faded Finish",
                  description: "Original pinkish-mauve finish had faded to an unappealing washed-out appearance"
                },
                {
                  icon: "💧",
                  title: "Water Damage",
                  description: "Multiple water stains and damage spots across the surface requiring deep repair"
                },
                {
                  icon: "🔍",
                  title: "Surface Deterioration",
                  description: "Worn protective coating had completely lost its luster and protective qualities"
                },
                {
                  icon: "🗄️",
                  title: "Interior Drawers",
                  description: "Interior drawer compartments needed careful restoration and refinishing"
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
              The "Before" Condition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { src: "/images/portfolio/Chest1.jpg", caption: "Original worn condition with faded surface" },
                { src: "/images/portfolio/Chest2.jpg", caption: "Close-up of deteriorated pinkish finish" },
                { src: "/images/portfolio/Chest6.jpg", caption: "Worn, faded surface texture" }
              ].map((image, index) => (
                <div key={index} className="bg-daisy-cream rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image.src}
                    alt={image.caption} width={400} height={300}
                    className="w-full h-64 object-cover"
                  />
                  <p className="p-4 text-sm text-forest-green text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Restoration Journey
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

        {/* The Transformation */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              The Stunning Result
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Luxurious Deep Finish",
                  description: "Transformed from faded pink to rich mahogany/walnut with exceptional depth and natural grain prominently displayed."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-golden-center" />,
                  title: "Showroom Quality",
                  description: "Stunning high-gloss finish creating a luxurious appearance worthy of any elegant home."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-golden-center" />,
                  title: "Restored Functionality",
                  description: "Interior drawers and compartments fully restored and functional, providing elegant storage."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Generational Protection",
                  description: "Multiple protective topcoat layers ensure this piece will be cherished for generations to come."
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
                  src="/images/portfolio/Chest4.jpg"
                  alt="Beautifully restored top with rich reddish-brown finish" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="text-center text-golden-center mt-2">Rich mahogany finish showcasing natural grain</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/Chest7.jpg"
                  alt="Completed chest showcasing full restoration" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="text-center text-golden-center mt-2">Complete transformation in workshop</p>
              </div>
            </div>

            <div className="bg-golden-center/20 p-8 rounded-lg text-center">
              <Image
                src="/images/portfolio/chest9.jpeg"
                alt="Final result in client's home with stunning glossy finish" width={800} height={600}
                className="rounded-lg mb-6 mx-auto max-w-2xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4">
                "I can't believe this is the same piece! It's now the focal point of our dining room."
              </blockquote>
              <cite className="text-white-daisy font-semibold">— Delighted Client</cite>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Expert Restoration Techniques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Stripping",
                  description: "Total removal of old faded finish revealing bare wood canvas",
                  benefit: "Fresh start foundation"
                },
                {
                  title: "Water Damage Repair",
                  description: "Deep sanding and conditioning to eliminate all water stains",
                  benefit: "Flawless surface"
                },
                {
                  title: "Custom Stain Blend",
                  description: "Hand-mixed mahogany/walnut stain for perfect color transformation",
                  benefit: "Rich, luxurious tone"
                },
                {
                  title: "Drawer Restoration",
                  description: "Careful restoration of interior drawer compartments and hardware",
                  benefit: "Preserved functionality"
                },
                {
                  title: "High-Gloss Finish",
                  description: "Multiple protective topcoat layers creating stunning shine",
                  benefit: "Showroom appearance"
                },
                {
                  title: "Professional Polish",
                  description: "Final hand polishing for exceptional luster and depth",
                  benefit: "Mirror-like brilliance"
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
              Have a Tired Piece Ready for Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              No matter how faded or damaged your furniture appears, we can bring it back to life.
              Specializing in complete transformations and dramatic color changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Free Quote
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
