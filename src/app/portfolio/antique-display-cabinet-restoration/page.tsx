import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: "Antique Display Cabinet Restoration - Complete Refinishing",
  description: "Witness the complete restoration of a severely deteriorated antique display cabinet from faded and damaged to showroom mahogany beauty. Expert refinishing, glass restoration, and hardware polishing.",
  keywords: "antique cabinet restoration, display cabinet refinishing, mahogany restoration, furniture disassembly restoration, glass cabinet repair, antique furniture repair",
  openGraph: {
    title: "Antique Display Cabinet - Complete Restoration Transformation",
    description: "From severely deteriorated and disassembled to stunning showroom condition - see this dramatic cabinet restoration.",
    url: "https://bloomingfurniture.co.za/portfolio/antique-display-cabinet-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/image_2.jpeg",
        width: 800,
        height: 600,
        alt: "Antique Display Cabinet Restoration - Before and After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/antique-display-cabinet-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Antique Display Cabinet - Complete Restoration & Refinishing",
  "description": "Professional furniture restoration transforming severely deteriorated display cabinet to showroom condition with mahogany finish, glass restoration, and hardware refurbishment.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/image_2.jpeg",
  "dateCreated": "2025-11-05",
  "keywords": ["antique restoration", "display cabinet", "mahogany refinishing", "furniture restoration"]
};

export default function AntiqueDisplayCabinetRestoration() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Complete Disassembly",
      process: "Careful disassembly of cabinet, doors, glass shelving, and all hardware components",
      purpose: "Allowed proper access to all surfaces for thorough restoration work",
      images: ["/images/portfolio/image_2.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Finish Stripping",
      process: "Complete removal of old, faded, and peeling finish from all wood surfaces",
      purpose: "Eliminated damaged coating to reveal bare wood ready for repair and refinishing",
      images: ["/images/portfolio/image_2.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Wood Repair & Preparation",
      process: "Surface damage repair, wood conditioning, and multi-stage sanding across all components",
      purpose: "Restored structural integrity and created smooth foundation for new finish",
      images: ["/images/portfolio/image_3.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Custom Mahogany Staining",
      process: "Hand-applied rich mahogany/cherry stain blend highlighting natural wood grain",
      purpose: "Transformed faded wood into warm, elegant finish showcasing cabinet's classic design",
      images: ["/images/portfolio/image_3.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Glass & Hardware Restoration",
      process: "Professional cleaning of glass shelving and polishing of all metal hardware",
      purpose: "Restored clarity and shine to functional components matching refined woodwork",
      images: ["/images/portfolio/image_1.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of durable clear finish for lasting protection and beauty",
      purpose: "Sealed wood with showroom-quality finish ensuring years of preservation",
      images: ["/images/portfolio/image_1.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Precise Reassembly",
      process: "Expert reassembly with proper alignment, door fitting, and hardware installation",
      purpose: "Completed transformation with fully functional, perfectly aligned display cabinet",
      images: ["/images/portfolio/image_1.jpeg"]
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
                  🏺 Antique Cabinet Revival
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Complete Display Cabinet Restoration
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This elegant antique display cabinet arrived severely deteriorated with faded, peeling finish,
                  damaged wood surfaces, and cloudy glass. Through complete disassembly and expert restoration,
                  we transformed it into a stunning showroom-quality piece worthy of showcasing treasured collections.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">5 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Showroom Quality</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/portfolio/image_2.jpeg"
                  alt="Antique Display Cabinet - Before Restoration" width={800} height={600}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Wrench className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Complete Restoration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Restoration Challenge
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🪵",
                  title: "Severe Deterioration",
                  description: "Badly faded and peeling finish with extensive wood surface damage requiring complete stripping"
                },
                {
                  icon: "🔧",
                  title: "Disassembly Required",
                  description: "Complete disassembly necessary for proper access to all surfaces and components"
                },
                {
                  icon: "💎",
                  title: "Cloudy Glass & Tarnished Hardware",
                  description: "Glass shelving needed professional cleaning and all metal hardware required polishing"
                },
                {
                  icon: "🎯",
                  title: "Precision Reassembly",
                  description: "Proper alignment and fitting critical for doors, shelving, and structural integrity"
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

        {/* Before Image */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              The Original Condition
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-daisy-cream rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/portfolio/image_2.jpeg"
                  alt="Display cabinet disassembled showing deteriorated finish" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="p-4 text-sm text-forest-green text-center">
                  Severely deteriorated cabinet disassembled for complete restoration
                </p>
              </div>
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
              The Stunning Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Rich Mahogany Beauty",
                  description: "Warm, elegant mahogany finish beautifully highlights natural wood grain and classic cabinet design."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Crystal-Clear Glass",
                  description: "Professionally cleaned glass shelving provides perfect display clarity for treasured collections."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-golden-center" />,
                  title: "Polished Hardware",
                  description: "Refurbished metal hardware adds elegant finishing touches matching refined woodwork quality."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Showroom Condition",
                  description: "Flawless finish and perfect alignment make this piece worthy of showcasing finest possessions."
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
                  src="/images/portfolio/image_1.jpeg"
                  alt="Beautifully restored cabinet with mahogany finish" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="text-center text-golden-center mt-2">Stunning mahogany finish in client's home</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/portfolio/image_3.jpeg"
                  alt="Cabinet during final finishing stage" width={800} height={600}
                  className="w-full h-auto"
                />
                <p className="text-center text-golden-center mt-2">Final assembly and finishing process</p>
              </div>
            </div>

            <div className="bg-golden-center/20 p-8 rounded-lg text-center">
              <blockquote className="text-2xl italic text-golden-center mb-4">
                "I thought this cabinet was beyond saving. Now it's the jewel of our living room!"
              </blockquote>
              <cite className="text-white-daisy font-semibold">— Amazed Client</cite>
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
                  title: "Professional Disassembly",
                  description: "Careful component separation for comprehensive restoration access",
                  benefit: "Thorough workmanship"
                },
                {
                  title: "Complete Stripping",
                  description: "Total removal of damaged finish revealing bare wood for repair",
                  benefit: "Fresh foundation"
                },
                {
                  title: "Wood Surface Repair",
                  description: "Damage correction and conditioning across all components",
                  benefit: "Structural integrity"
                },
                {
                  title: "Custom Mahogany Stain",
                  description: "Hand-applied rich finish highlighting natural grain beauty",
                  benefit: "Elegant warmth"
                },
                {
                  title: "Glass & Hardware Care",
                  description: "Professional cleaning and polishing of all functional components",
                  benefit: "Complete refinement"
                },
                {
                  title: "Precision Reassembly",
                  description: "Expert reassembly ensuring perfect alignment and function",
                  benefit: "Flawless operation"
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
              Have a Deteriorated Antique Needing Expert Care?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in complete restorations of severely damaged antique furniture.
              From disassembly to showroom finish, we bring heirlooms back to their former glory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Free Assessment
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-dark-wood text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-dark-wood hover:text-white-daisy transition duration-300"
              >
                View More Restorations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
