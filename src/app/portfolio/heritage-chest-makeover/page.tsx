import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Star, Clock, Award, Sparkles, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: "Heritage Chest Makeover - Mahogany Restoration Case Study | Blooming Furniture",
  description: "See the complete transformation of a family heirloom mahogany blanket chest from water-stained and faded to museum-ready showpiece. Expert grain revival, custom staining, and piano-smooth finish.",
  keywords: "mahogany restoration, heritage furniture, blanket chest restoration, antique furniture repair, wood grain revival, french polishing, furniture refinishing",
  openGraph: {
    title: "Heritage Chest Makeover - Mahogany Restoration Before & After",
    description: "Family heirloom mahogany chest transformed from tired and blotchy to deep, glass-smooth showpiece with expert restoration techniques.",
    url: "https://bloomingfurniture.co.za/portfolio/heritage-chest-makeover",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/Chest1.jpg",
        width: 800,
        height: 600,
        alt: "Heritage Chest Makeover - Before and After Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/heritage-chest-makeover",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Heritage Chest Makeover - Mahogany Blanket Chest Restoration",
  "description": "Complete restoration of a family heirloom mahogany blanket chest, including finish removal, grain revival, custom staining, and museum-quality refinishing.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/Chest1.jpg",
  "dateCreated": "2024-11-01",
  "keywords": ["mahogany restoration", "heritage furniture", "antique restoration", "furniture refinishing"]
};

export default function HeritageChestMakeover() {
  const restorationSteps = [
    {
      step: "1️⃣",
      treatment: "Finish Removal",
      process: "Hand-scraped the old shellac, followed by eco-stripper & a nylon brush",
      purpose: "Exposed raw timber without raising the grain",
      images: ["/images/portfolio/Chest2.jpg"]
    },
    {
      step: "2️⃣", 
      treatment: "Progressive Sanding",
      process: "100 → 150 → 220 grit on the top, plus detail sanding inside mouldings",
      purpose: "Erased water marks & levelled decades of uneven wear",
      images: ["/images/portfolio/Chest3.jpg"]
    },
    {
      step: "3️⃣",
      treatment: "Grain Revival", 
      process: "Wet-down & final 320-grit 'slurry sand' to minimise grain-raise",
      purpose: "Left the surface silky pre-finish",
      images: ["/images/portfolio/Chest4.jpg"]
    },
    {
      step: "4️⃣",
      treatment: "Custom Dye Stain",
      process: "Warm cherry-mahogany mix hand-rubbed in two coats", 
      purpose: "Restored uniform tone while highlighting cathedral grain & knots",
      images: ["/images/portfolio/Chest5.jpg"]
    },
    {
      step: "5️⃣",
      treatment: "Oil-Based Sealer",
      process: "Flood-coat of tung-oil/poly blend, burnished between coats",
      purpose: "Locked in colour, added depth, hardened the surface", 
      images: ["/images/portfolio/Chest6.jpg"]
    },
    {
      step: "6️⃣",
      treatment: "High-Build Satin Varnish",
      process: "Three sprayed coats, de-nibbed to 800 grit, then a final rub-out with micro-mesh",
      purpose: "Created a low-sheen 'piano-smooth' top resistant to spills",
      images: ["/images/portfolio/Chest7.jpg"]
    },
    {
      step: "7️⃣", 
      treatment: "Hardware Refurb",
      process: "Pulled, stripped & French-polished original timber handles; lubricated runners",
      purpose: "Drawers now glide softly and keep their vintage charm",
      images: ["/images/portfolio/Chest8.jpg"]
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
                  🌟 Heritage Chest Make-Over
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Mahogany Blanket Chest Restoration
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  A family-heirloom blanket chest arrived in our workshop looking tired and blotchy 
                  after decades of heat, humidity, and an unfortunate planter-pot spill. Today it's 
                  a deep, glass-smooth showpiece ready to anchor our client's guest bedroom.
                </p>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">3 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Museum-Quality Finish</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/portfolio/Chest1.jpg"
                  alt="Heritage Chest Makeover - Before and After"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 fill-current mr-1" />
                    <span className="font-semibold">Heirloom Quality</span>
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
                  icon: "💧",
                  title: "Water & Heat Damage",
                  description: "Water & heat stains had etched cloudy rings across the entire lid"
                },
                {
                  icon: "☀️", 
                  title: "Sun Fading",
                  description: "Sun-faded panels left the frame two full shades lighter than the top"
                },
                {
                  icon: "📏",
                  title: "Surface Damage", 
                  description: "Fine-surface scratches & dents dulled the once-lively mahogany grain"
                },
                {
                  icon: "🔧",
                  title: "Hardware Issues",
                  description: "Drawer runners were binding and the handmade pulls were caked with wax"
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

        {/* Restoration Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              What We Did
            </h2>
            
            <div className="space-y-12">
              {restorationSteps.map((step, index) => (
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
                      alt={`${step.treatment} - Step ${step.step}`}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md w-full"
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
              The Transformation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Stunning Visual Appeal",
                  description: "Deep ruby-brown lustre reveals swirling heartwood and a striking knot feature – no more cloudy haze."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-golden-center" />,
                  title: "Perfect Color Match",
                  description: "Uniform colour match between lid and panels restores the piece's architectural lines."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Piano-Smooth Finish",
                  description: "Silk-satin finish repels water rings and cleans with a single wipe."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Vintage Functionality",
                  description: "Whisper-smooth drawers retain original keyholes for that classic period look."
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
            
            <div className="bg-golden-center/20 p-8 rounded-lg text-center">
              <blockquote className="text-2xl italic text-golden-center mb-4">
                "I never realised this chest was hiding such beautiful grain. It looks museum-ready!"
              </blockquote>
              <cite className="text-white-daisy font-semibold">— Client reaction</cite>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Expert Techniques Used
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hand-Scraped Removal",
                  description: "Careful removal of old shellac without damaging the underlying mahogany",
                  benefit: "Preserves wood integrity"
                },
                {
                  title: "Progressive Sanding",
                  description: "Multi-grit sanding process from 100 to 320 grit for perfect smoothness",
                  benefit: "Museum-quality surface"
                },
                {
                  title: "Custom Color Matching",
                  description: "Hand-mixed cherry-mahogany stain to restore original color depth",
                  benefit: "Authentic appearance"
                },
                {
                  title: "Tung Oil Sealing",
                  description: "Deep penetrating oil seal with poly blend for durability",
                  benefit: "Long-lasting protection"
                },
                {
                  title: "Piano-Smooth Finish",
                  description: "Three coats of varnish with 800-grit de-nibbing and micro-mesh",
                  benefit: "Glass-like surface"
                },
                {
                  title: "French Polish Hardware",
                  description: "Traditional French polishing on original timber handles",
                  benefit: "Period authenticity"
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
              Have a Family Heirloom That Needs Restoration?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              Transform your treasured furniture with our museum-quality restoration services. 
              We specialize in heritage pieces and antique furniture restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Book Heritage Assessment
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