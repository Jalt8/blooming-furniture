import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Star, Clock, Award, Waves, Sparkles, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: "Coastal-Chic Hope Chest - Lime-Wash Transformation Case Study | Blooming Furniture",
  description: "See the complete lime-wash transformation of a dark cedar trunk into a stunning coastal statement piece. Expert cerusing, brass restoration, and weathered sun-kissed finish techniques.",
  keywords: "lime wash furniture, coastal furniture makeover, cerusing technique, hope chest restoration, coastal chic style, weathered furniture finish, brass hardware restoration",
  openGraph: {
    title: "Coastal-Chic Hope Chest - Lime-Wash Transformation Before & After",
    description: "Dark, water-stained cedar trunk transformed into a breezy coastal statement piece with expert lime-wash and cerusing techniques.",
    url: "https://bloomingfurniture.co.za/portfolio/coastal-chic-hope-chest",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/Lime-Wash1.jpg",
        width: 800,
        height: 600,
        alt: "Coastal-Chic Hope Chest - Lime-Wash Transformation",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/coastal-chic-hope-chest",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Coastal-Chic Hope Chest - Complete Lime-Wash Transformation",
  "description": "Transformation of a dark, water-stained cedar trunk into a coastal statement piece using lime-wash, cerusing, and brass restoration techniques.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/Lime-Wash1.jpg",
  "dateCreated": "2024-10-01",
  "keywords": ["lime wash", "coastal furniture", "cerusing", "brass restoration", "coastal chic"]
};

export default function CoastalChicHopeChest() {
  const restorationSteps = [
    {
      step: "1",
      title: "Strip & Neutralise",
      description: "Soy-based remover and gentle scraping lifted the century-old finish without raising the grain.",
      images: ["/Lime-Wash2.jpg"],
      technique: "Eco-friendly stripping"
    },
    {
      step: "2", 
      title: "Deep Clean & Sand",
      description: "Progressive sanding (100 → 220 grit) on flat panels; hand-sanding inside the vertical flutes to reveal crisp profiles.",
      images: ["/Lime-Wash3.jpg"],
      technique: "Progressive grain preparation"
    },
    {
      step: "3",
      title: "Cerusing / Lime-Wash", 
      description: "Custom grey-white wax infused into open grain, then lightly buffed back to create that weathered, sun-kissed look while letting knots peek through.",
      images: ["/Lime-Wash4.jpg", "/Lime-Wash5.jpg"],
      technique: "Specialized cerusing"
    },
    {
      step: "4",
      title: "Hardware Restoration",
      description: "Brass hinges, escutcheon and campaign pulls soaked in a mild citric bath, then hand-polished and sealed with micro-crystalline wax for a satin glow—not a mirror shine.",
      images: ["/Lime-Wash6.jpg"], 
      technique: "Brass revival"
    },
    {
      step: "5",
      title: "Protective Finish",
      description: "Two coats of dead-flat water-based varnish lock in the wash, repel spills, and keep the chalky matte aesthetic intact.",
      images: ["/Lime-Wash7.jpg"],
      technique: "Matte protection"
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
                  🏖️ Coastal-Chic Hope Chest
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Complete Lime-Wash Transformation
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  Once a dark, water-stained cedar trunk, this heirloom is now a breezy statement 
                  piece that brightens our client's seaside living room.
                </p>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">2 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Waves className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Coastal Specialist</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/Lime-Wash1.jpg"
                  alt="Coastal-Chic Hope Chest - Before and After"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Sun className="h-4 w-4 fill-current mr-1" />
                    <span className="font-semibold">Sun-Kissed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Original Condition */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              The Original Condition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌊",
                  title: "Water Damage",
                  description: "Patchy, sun-bleached lid with drink rings and scorch marks"
                },
                {
                  icon: "🌑", 
                  title: "Heavy Dark Stain",
                  description: "Heavy mahogany stain obscuring carved flutes and scalloped skirt"
                },
                {
                  icon: "🔧",
                  title: "Tarnished Hardware", 
                  description: "Tarnished brass strap-hinges and campaign handles hidden under grime"
                }
              ].map((issue, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{issue.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{issue.title}</h3>
                  <p className="text-forest-green">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Revival Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Our 5-Step Revival
            </h2>
            
            <div className="space-y-12">
              {restorationSteps.map((step, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-daisy-cream p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-xl mr-4">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-dark-wood">{step.title}</h3>
                          <span className="text-sm text-forest-green font-semibold">{step.technique}</span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-forest-green leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`grid gap-4 ${step.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {step.images.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt={`${step.title} - Step ${step.step}`}
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-dark-wood">
              The Result
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Waves className="h-8 w-8 text-blue-500" />,
                  title: "Coastal Harmony",
                  description: "Soft driftwood tones complement coastal décor yet still show the chest's ribbon-grain character."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Jewelry-Like Hardware",
                  description: "Refreshed brass details pop against the pale body, turning functional hardware into jewellery."
                },
                {
                  icon: <Sun className="h-8 w-8 text-yellow-500" />,
                  title: "Authentic Aging",
                  description: "Subtle distressed highlights along mouldings and paw feet give the piece authentic age without looking 'shabby.'"
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-green-500" />,
                  title: "Perfect Function",
                  description: "Lid now closes smoothly, and interior cedar smell was revived with a light re-oil—perfect for linen storage."
                }
              ].map((result, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {result.icon}
                    <h3 className="text-xl font-semibold text-dark-wood ml-3">{result.title}</h3>
                  </div>
                  <p className="text-forest-green">{result.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white/80 p-8 rounded-lg text-center shadow-lg">
              <blockquote className="text-2xl italic text-blue-700 mb-4">
                "It looks like it came straight from a designer showroom on the Cape!"
              </blockquote>
              <cite className="text-dark-wood font-semibold">— Client review</cite>
            </div>
          </div>
        </section>

        {/* Technique Spotlight */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Specialized Techniques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cerusing/Lime-Wash",
                  description: "Specialized technique using grey-white wax infused into open grain for weathered coastal look",
                  benefit: "Authentic sun-kissed appearance",
                  icon: "🏖️"
                },
                {
                  title: "Soy-Based Stripping",
                  description: "Eco-friendly century-old finish removal without damaging delicate cedar grain",
                  benefit: "Grain preservation",
                  icon: "🌱"
                },
                {
                  title: "Progressive Hand-Sanding",
                  description: "Detailed work inside vertical flutes and carved elements to reveal crisp profiles",
                  benefit: "Architectural detail retention",
                  icon: "✋"
                },
                {
                  title: "Citric Brass Revival",
                  description: "Mild citric bath followed by hand-polishing for satin glow, not mirror shine",
                  benefit: "Period-appropriate finish",
                  icon: "✨"
                },
                {
                  title: "Dead-Flat Protection",
                  description: "Water-based varnish that locks in lime-wash while maintaining chalky aesthetic",
                  benefit: "Spill resistance",
                  icon: "🛡️"
                },
                {
                  title: "Cedar Revival",
                  description: "Interior cedar scent restoration with light re-oiling for aromatic linen storage",
                  benefit: "Natural preservation",
                  icon: "🌲"
                }
              ].map((technique, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-3 text-center">{technique.icon}</div>
                  <h3 className="text-lg font-semibold text-dark-wood mb-3">{technique.title}</h3>
                  <p className="text-forest-green mb-3 text-sm">{technique.description}</p>
                  <div className="bg-blue-50 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-blue-700">{technique.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Style Guide */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Coastal-Chic Style Elements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-dark-wood mb-6">Design Philosophy</h3>
                <ul className="space-y-4">
                  {[
                    "Weathered, sun-kissed aesthetic that looks naturally aged",
                    "Soft driftwood tones that complement seaside living",
                    "Brass hardware treated as decorative jewelry",
                    "Chalky matte finish that repels coastal humidity",
                    "Authentic distressing without 'shabby' appearance",
                    "Functional beauty perfect for linen storage"
                  ].map((element, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-forest-green">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-dark-wood mb-4">Perfect For:</h4>
                <div className="space-y-3">
                  {[
                    "🏖️ Coastal homes and beach houses",
                    "🌊 Seaside guest bedrooms", 
                    "🐚 Living rooms with nautical themes",
                    "🌅 Sunrooms and conservatories",
                    "🏡 Hamptons-style interiors"
                  ].map((use, index) => (
                    <div key={index} className="text-forest-green">{use}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Want a Coastal-Chic Transformation?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Transform your furniture with our specialized lime-wash and cerusing techniques. 
              Perfect for creating that weathered, sun-kissed coastal aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Book Coastal Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
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