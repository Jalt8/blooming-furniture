import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Complete Bedroom Set Coastal White Refinishing - 8+ Piece Suite | Blooming Furniture",
  description: "See the stunning transformation of an entire bedroom furniture suite refinished in crisp coastal white. Includes bed frame, nightstands, dresser, chest, vanity desk, wardrobe, and more creating cohesive fresh sanctuary.",
  keywords: "bedroom set refinishing, coastal bedroom furniture, white bedroom suite, furniture set restoration, complete bedroom makeover, matching bedroom furniture",
  openGraph: {
    title: "Complete Bedroom Set - Coastal White Refinishing Suite",
    description: "Comprehensive 8+ piece bedroom suite transformation with coordinated crisp white finish creating fresh coastal sanctuary with bed, dresser, vanity, wardrobe, and storage.",
    url: "https://bloomingfurniture.co.za/portfolio/complete-bedroom-set-coastal-white",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-26.jpeg",
        width: 800,
        height: 600,
        alt: "Complete Bedroom Set Coastal White - Full Room After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/complete-bedroom-set-coastal-white",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Complete Bedroom Furniture Set - Coastal White Refinishing",
  "description": "Professional furniture restoration transforming entire bedroom suite into cohesive coastal-inspired ensemble with bed frame, nightstands, dresser, chest, vanity, wardrobe refinished in crisp white.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-26.jpeg",
  "dateCreated": "2025-11-15",
  "keywords": ["bedroom set refinishing", "coastal white", "complete furniture suite", "bedroom transformation", "matching furniture"]
};

export default function CompleteBedroomSetCoastalWhite() {
  const furniturePieces = [
    {
      icon: "🛏️",
      title: "Bed Frame",
      description: "Slatted headboard with clean-lined footboard creating coastal centerpiece"
    },
    {
      icon: "🕯️",
      title: "Matching Nightstands (2)",
      description: "Single drawer with slatted door design providing convenient bedside storage"
    },
    {
      icon: "👔",
      title: "Tall 6-Drawer Chest",
      description: "Generous vertical storage for clothing and linens"
    },
    {
      icon: "👗",
      title: "Double Dresser",
      description: "Wide horizontal storage with coordinating hardware"
    },
    {
      icon: "💄",
      title: "Vanity Desk with Mirror",
      description: "Practical grooming station with hutch mirror and drawer storage"
    },
    {
      icon: "🚪",
      title: "Wardrobe",
      description: "Double doors with interior shelving for hanging and folded clothing"
    }
  ];

  const refinishingSteps = [
    {
      step: "1️⃣",
      treatment: "Project Planning & Coordination",
      process: "Comprehensive assessment of 8+ piece bedroom suite planning coordinated refinishing timeline and color consistency",
      purpose: "Ensured cohesive result across all furniture pieces requiring weeks of systematic restoration work",
      images: ["/images/portfolio/portfolio-25.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Complete Suite Stripping",
      process: "Professional removal of original finish from bed frame, nightstands, dresser, chest, vanity, wardrobe, and all storage pieces",
      purpose: "Created uniform foundation across entire set for consistent white finish application",
      images: ["/images/portfolio/portfolio-25.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Multi-Piece Surface Preparation",
      process: "Systematic progressive sanding across all furniture components including slatted doors, drawer fronts, cabinet bodies, and frames",
      purpose: "Achieved smooth professional-grade foundation across every piece in the bedroom suite",
      images: ["/images/portfolio/portfolio-27.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Coordinated Wood Conditioning",
      process: "Deep conditioning treatment applied consistently across all 8+ pieces ensuring uniform finish absorption",
      purpose: "Prevented color variation maintaining consistent coastal white across entire bedroom set",
      images: ["/images/portfolio/portfolio-27.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Bed Frame Refinishing",
      process: "Crisp white paint on slatted headboard and clean-lined footboard with detail preservation",
      purpose: "Created stunning bedroom focal point with coastal aesthetic foundation",
      images: ["/images/portfolio/portfolio-38.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Nightstand Pair Restoration",
      process: "Matching white finish on both nightstands with slatted door details and drawer fronts",
      purpose: "Provided coordinated bedside storage maintaining design consistency",
      images: ["/images/portfolio/portfolio-38.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Dresser & Chest Refinishing",
      process: "White paint application on tall 6-drawer chest and double dresser with hardware coordination",
      purpose: "Created generous clothing storage solutions with cohesive coastal appearance",
      images: ["/images/portfolio/portfolio-37.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Vanity & Mirror Restoration",
      process: "Vanity desk with knee space and hutch mirror frame refinished in coordinating white finish",
      purpose: "Established functional grooming station matching overall bedroom aesthetic",
      images: ["/images/portfolio/portfolio-36.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Wardrobe Transformation",
      process: "Double door wardrobe with interior shelving refinished maintaining slatted detail consistency",
      purpose: "Provided substantial hanging and folded clothing storage completing bedroom functionality",
      images: ["/images/portfolio/portfolio-36.jpeg"]
    },
    {
      step: "🔟",
      treatment: "Suite-Wide Protection",
      process: "Multiple protective clear coat layers applied across all pieces with professional smooth matte finish",
      purpose: "Ensured lasting durability across entire bedroom set for years of daily use",
      images: ["/images/portfolio/portfolio-26.jpeg"]
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
                  🏖️ Complete Coastal Bedroom Suite
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  8+ Piece Bedroom Set Refinishing
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This comprehensive restoration transformed an entire bedroom suite into a cohesive
                  coastal sanctuary. Includes bed frame, nightstands, dresser, chest, vanity, wardrobe,
                  and more - all refinished in fresh crisp white creating the ultimate coastal retreat.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">6 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Complete Suite</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/portfolio/portfolio-26.jpeg"
                  alt="Complete Bedroom Set - Coastal White After"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Full Suite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Suite Gallery */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Complete Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {[
                { src: "/images/portfolio/portfolio-26.jpeg", caption: "Full bedroom with coastal blue bedding and complete white suite" },
                { src: "/images/portfolio/portfolio-38.jpeg", caption: "Bed frame with slatted headboard and matching nightstands" },
                { src: "/images/portfolio/portfolio-36.jpeg", caption: "Vanity desk with mirror and wardrobe coordination" },
                { src: "/images/portfolio/portfolio-37.jpeg", caption: "Wardrobe and tall chest of drawers in bedroom setting" },
                { src: "/images/portfolio/portfolio-27.jpeg", caption: "Complete suite outdoors showing all refinished pieces" },
                { src: "/images/portfolio/portfolio-25.jpeg", caption: "Workshop process showing headboard refinishing" }
              ].map((image, index) => (
                <div key={index} className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-forest-green text-center">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suite Components */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Complete 8+ Piece Bedroom Suite
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {furniturePieces.map((piece, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{piece.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{piece.title}</h3>
                  <p className="text-forest-green">{piece.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refinishing Process */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Comprehensive Refinishing Process
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
              A Fresh Coastal Sanctuary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Coordinated Cohesion",
                  description: "Crisp white finish unifies entire 8+ piece suite creating harmonious coastal aesthetic throughout bedroom sanctuary."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Slatted Detail Consistency",
                  description: "Matching slatted door details across bed headboard, nightstands, and wardrobe add texture and visual interest."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Complete Functionality",
                  description: "Everything needed for fully functional bedroom: sleeping, storage, grooming, and organization in coordinated style."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Versatile Bedding Palette",
                  description: "Clean white foundation creates perfect backdrop for any bedding style from coastal blues to neutral linens."
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
                src="/images/portfolio/portfolio-26.jpeg"
                alt="Complete coastal bedroom suite with white furniture"
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "Having the entire bedroom refinished as a matching set completely transformed the space into our dream coastal retreat!"
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Delighted Homeowners</cite>
            </div>
          </div>
        </section>

        {/* Project Scale */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Large-Scale Project Excellence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Suite-Wide Planning",
                  description: "Systematic coordination across 8+ pieces ensuring timeline and quality consistency",
                  benefit: "Cohesive result"
                },
                {
                  title: "Uniform Color Matching",
                  description: "Precise white finish application across all pieces preventing color variation",
                  benefit: "Perfect coordination"
                },
                {
                  title: "Multi-Piece Stripping",
                  description: "Complete original finish removal from entire bedroom suite",
                  benefit: "Consistent foundation"
                },
                {
                  title: "Coordinated Conditioning",
                  description: "Systematic wood treatment ensuring uniform finish absorption across set",
                  benefit: "No variation"
                },
                {
                  title: "Detail Preservation",
                  description: "Slatted doors, mirror frames, and architectural elements maintained throughout",
                  benefit: "Character retained"
                },
                {
                  title: "Suite Protection",
                  description: "Professional matte finish across all pieces for lasting durability",
                  benefit: "Complete longevity"
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
              Want a Complete Bedroom Suite Transformation?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in large-scale furniture refinishing projects creating cohesive room transformations.
              Let us turn your bedroom furniture into a coordinated coastal sanctuary with matching white finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Suite Refinishing Quote
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
