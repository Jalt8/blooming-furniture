import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Antique Victorian Washstand Complete Restoration - Marble Top & Ornate Details | Blooming Furniture",
  description: "See the spectacular restoration of an elaborate Victorian washstand with ornate carved details, marble countertop, decorative mirror frame, and rich mahogany finish. Complete disassembly and meticulous restoration.",
  keywords: "Victorian washstand restoration, antique furniture restoration, marble top washstand, ornate carved furniture, Victorian vanity, mahogany restoration",
  openGraph: {
    title: "Victorian Washstand - Complete Restoration with Marble Top",
    description: "Magnificent Victorian-era washstand restoration showcasing ornate scroll pediment, decorative finials, marble countertop, and meticulous craftsmanship.",
    url: "https://bloomingfurniture.co.za/portfolio/victorian-washstand-restoration",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/portfolio-18.jpeg",
        width: 800,
        height: 600,
        alt: "Victorian Washstand Complete Restoration - After",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/victorian-washstand-restoration",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Antique Victorian Washstand - Complete Restoration with Marble Top",
  "description": "Professional furniture restoration of magnificent Victorian-era washstand featuring ornate carved details, marble countertop, elaborate mirror frame, and complete disassembly for proper restoration.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/portfolio-18.jpeg",
  "dateCreated": "2025-11-12",
  "keywords": ["Victorian washstand", "antique restoration", "marble top", "ornate carved furniture", "mahogany restoration"]
};

export default function VictorianWashstandRestoration() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Complete Disassembly",
      process: "Careful separation of ornate mirror frame, decorative pediment, carved finials, base cabinet unit, marble top, and all decorative components",
      purpose: "Enabled proper access to every surface and intricate detail for comprehensive restoration treatment",
      images: ["/images/portfolio/portfolio-15.jpeg"]
    },
    {
      step: "2️⃣",
      treatment: "Ornate Component Documentation",
      process: "Detailed cataloging of elaborate carved scroll pediment, decorative side finials, turned spindles, and flowing carved elements",
      purpose: "Ensured correct reassembly of complex Victorian architectural elements maintaining historical accuracy",
      images: ["/images/portfolio/portfolio-17.jpeg"]
    },
    {
      step: "3️⃣",
      treatment: "Complete Wood Stripping",
      process: "Professional removal of old finish from base cabinet, mirror frame, ornate pediment, carved details, turned legs, and all wood components",
      purpose: "Revealed natural wood foundation ready for meticulous restoration of period-appropriate finish",
      images: ["/images/portfolio/portfolio-16.jpeg"]
    },
    {
      step: "4️⃣",
      treatment: "Intricate Detail Repair",
      process: "Expert wood repair and restoration of elaborate carved scroll work, decorative finials, turned spindles, and flowing ornamental elements",
      purpose: "Preserved precious Victorian craftsmanship maintaining historical integrity of carved details",
      images: ["/images/portfolio/portfolio-16.jpeg"]
    },
    {
      step: "5️⃣",
      treatment: "Rich Mahogany Refinishing",
      process: "Expert application of authentic Victorian-era mahogany/walnut tones across all wood components highlighting grain and carved details",
      purpose: "Restored period-appropriate color depth beautifully showcasing elaborate architectural elements",
      images: ["/images/portfolio/portfolio-18.jpeg"]
    },
    {
      step: "6️⃣",
      treatment: "Marble Top Restoration",
      process: "Professional cleaning, polishing, and restoration of authentic marble countertop insert",
      purpose: "Brought pristine period charm back to this elegant functional surface maintaining Victorian authenticity",
      images: ["/images/portfolio/portfolio-18.jpeg"]
    },
    {
      step: "7️⃣",
      treatment: "Decorative Mirror Backing",
      process: "Installation of tile-pattern decorative backing in mirror frame adding visual interest and wall protection",
      purpose: "Enhanced functionality while maintaining period-appropriate aesthetic character",
      images: ["/images/portfolio/portfolio-18.jpeg"]
    },
    {
      step: "8️⃣",
      treatment: "Hardware & Detail Preservation",
      process: "Careful cleaning and preservation of vintage hardware, turned leg refinishing, drawer and cabinet door alignment",
      purpose: "Maintained functional integrity while preserving authentic Victorian hardware and mechanical elements",
      images: ["/images/portfolio/portfolio-18.jpeg"]
    },
    {
      step: "9️⃣",
      treatment: "Protective Clear Coating",
      process: "Multiple layers of museum-quality clear finish protecting mahogany refinishing and preserving carved details",
      purpose: "Ensured lasting protection of meticulous restoration work maintaining period elegance for generations",
      images: ["/images/portfolio/portfolio-18.jpeg"]
    },
    {
      step: "🔟",
      treatment: "Expert Reassembly",
      process: "Precise reassembly of mirror frame, ornate pediment, carved components, base unit, and structural reinforcement",
      purpose: "Completed transformation ensuring structural integrity of this elaborate Victorian masterpiece",
      images: ["/images/portfolio/portfolio-18.jpeg"]
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
                  👑 Victorian Washstand Masterpiece
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Complete Antique Restoration with Marble Top
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  This magnificent Victorian-era washstand with elaborate carved details, ornate scroll
                  pediment, and marble countertop required complete disassembly for proper restoration.
                  Every intricate detail meticulously restored to preserve this piece's historical elegance.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">6 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Victorian Era</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/portfolio/portfolio-18.jpeg"
                  alt="Victorian Washstand - Complete Restoration"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Period Restoration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disassembly & Process */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Restoration Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-lg font-semibold">Ornate Components</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-15.jpeg"
                  alt="Disassembled ornate mirror frame and carved components"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-forest-green">
                    Elaborate mirror frame, scroll pediment, and decorative finials carefully disassembled
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-lg font-semibold">Base Unit Stripped</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-16.jpeg"
                  alt="Base cabinet stripped to natural wood"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-forest-green">
                    Cabinet structure revealed showing arched doors and turned leg details
                  </p>
                </div>
              </div>

              <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
                <div className="bg-forest-green text-white-daisy py-3 px-6 text-center">
                  <h3 className="text-lg font-semibold">Decorative Elements</h3>
                </div>
                <img
                  src="/images/portfolio/portfolio-17.jpeg"
                  alt="Top view of disassembled mirror frame"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-forest-green">
                    Ornate mirror frame top view showing intricate carved scroll work
                  </p>
                </div>
              </div>
            </div>

            {/* Final Result */}
            <div className="bg-white-daisy rounded-lg overflow-hidden shadow-lg">
              <div className="bg-golden-center text-dark-wood py-3 px-6 text-center">
                <h3 className="text-xl font-semibold">AFTER - Victorian Magnificence Restored</h3>
              </div>
              <img
                src="/images/portfolio/portfolio-18.jpeg"
                alt="Completed Victorian washstand restoration"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <p className="text-forest-green">
                  Spectacular transformation showcasing rich mahogany finish, pristine marble top, ornate
                  scroll pediment, decorative finials, and meticulously restored carved details representing
                  the finest Victorian craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Victorian Features */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Elaborate Victorian Craftsmanship
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "👑",
                  title: "Ornate Scroll Pediment",
                  description: "Elaborate carved scroll top pediment showcasing Victorian decorative artistry"
                },
                {
                  icon: "✨",
                  title: "Decorative Finials",
                  description: "Ornamental side finials adding vertical elegance and period character"
                },
                {
                  icon: "🪞",
                  title: "Elaborate Mirror Frame",
                  description: "Intricately carved mirror frame with decorative tile-pattern backing"
                },
                {
                  icon: "⚪",
                  title: "Marble Countertop",
                  description: "Authentic marble top insert providing pristine period charm and functionality"
                },
                {
                  icon: "🏛️",
                  title: "Turned Leg Details",
                  description: "Classic turned legs showcasing traditional Victorian furniture craftsmanship"
                },
                {
                  icon: "🚪",
                  title: "Arched Cabinet Doors",
                  description: "Elegant arched panel doors and multiple storage compartments"
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
              Meticulous Restoration Process
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
              Victorian Elegance Preserved
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Rich Period Finish",
                  description: "Authentic Victorian-era mahogany tones beautifully showcase elaborate carved scroll work, decorative finials, and flowing ornamental elements."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Ornate Details Revealed",
                  description: "Every intricate carved detail, turned spindle, and architectural element meticulously restored preserving precious Victorian craftsmanship."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Marble Elegance",
                  description: "Pristine marble countertop and decorative tile-pattern mirror backing provide authentic period charm with modern functionality."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Historical Character",
                  description: "Perfect for traditional, vintage-inspired, or eclectic interiors seeking authentic Victorian period elegance and craftsmanship."
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
                src="/images/portfolio/portfolio-18.jpeg"
                alt="Victorian washstand masterpiece fully restored"
                className="rounded-lg mb-6 mx-auto max-w-3xl w-full"
              />
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "This restoration is absolutely magnificent. Every detail is perfect - it looks like a museum piece!"
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Antique Collector</cite>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Expert Antique Restoration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Complete Disassembly",
                  description: "Careful separation of ornate mirror frame, pediment, and all decorative components",
                  benefit: "Access to every detail"
                },
                {
                  title: "Intricate Detail Repair",
                  description: "Expert restoration of elaborate carved scroll work and flowing ornamental elements",
                  benefit: "Craftsmanship preserved"
                },
                {
                  title: "Period-Appropriate Finish",
                  description: "Authentic Victorian mahogany tones highlighting grain and carved details",
                  benefit: "Historical accuracy"
                },
                {
                  title: "Marble Restoration",
                  description: "Professional cleaning and polishing of authentic marble countertop",
                  benefit: "Period charm intact"
                },
                {
                  title: "Decorative Backing",
                  description: "Tile-pattern installation in mirror frame adding visual interest",
                  benefit: "Enhanced functionality"
                },
                {
                  title: "Museum-Quality Protection",
                  description: "Multiple clear coat layers preserving meticulous restoration work",
                  benefit: "Generational preservation"
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
              Have a Victorian Antique Needing Restoration?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We specialize in meticulous restoration of elaborate Victorian furniture preserving precious
              period craftsmanship. Let us bring your antique masterpiece back to its former glory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Antique Restoration Quote
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
