import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Star, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Patio Daybed Revival - Furniture Restoration Case Study | Blooming Furniture",
  description: "See how we transformed a sun-bleached, weather-worn daybed into a stunning centerpiece. Complete restoration process including structural repairs, refinishing, and marine-grade protection.",
  keywords: "patio daybed restoration, outdoor furniture restoration, UV damage repair, structural furniture repair, marine-grade finish, coastal furniture protection",
  openGraph: {
    title: "Patio Daybed Revival - Before & After Restoration",
    description: "From sun-bleached wreck to stunning centerpiece - see the complete transformation of this coastal daybed restoration project.",
    url: "https://bloomingfurniture.co.za/portfolio/patio-daybed-revival",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/sunbed1.jpg",
        width: 800,
        height: 600,
        alt: "Patio Daybed Revival - Before and After Restoration",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/patio-daybed-revival",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Patio Daybed Revival - Furniture Restoration Project",
  "description": "Complete restoration of a sun-damaged patio daybed, including structural repairs, refinishing, and marine-grade protection for coastal climates.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/sunbed1.jpg",
  "dateCreated": "2024-12-01",
  "keywords": ["furniture restoration", "patio daybed", "coastal furniture", "UV damage repair"]
};

export default function PatioDaybedRevival() {
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
                  🌿 Patio Daybed Revival
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Client Restoration Project
                </p>
                <p className="text-lg text-forest-green leading-relaxed">
                  What began as a sun-bleached, weather-worn daybed destined for the scrap heap 
                  is now a solid, statement-making centerpiece that will serve our client for years to come.
                </p>
                
                <div className="mt-6 flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">2 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Coastal Climate Specialist</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/portfolio/sunbed1.jpg"
                  alt="Patio Daybed Revival - Before and After"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    <span className="font-semibold">Client Favorite</span>
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
              The Challenge
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "☀️",
                  title: "Severe UV Damage",
                  description: "UV fading & grey weathering across every rail and slat"
                },
                {
                  icon: "🔧",
                  title: "Structural Issues",
                  description: "Loose mortise-and-tenon joints causing wobble and creaks"
                },
                {
                  icon: "🦠",
                  title: "Surface Contamination",
                  description: "Surface grime & mildew embedded in the grain after years outdoors"
                }
              ].map((challenge, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{challenge.title}</h3>
                  <p className="text-forest-green">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restoration Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-12 text-center">
              Our Restoration Process
            </h2>
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Gentle Strip & Deep Clean",
                  description: "Eco-friendly wood cleaner lifted embedded dirt without harsh chemicals.",
                  images: ["/sunbed2.jpg", "/sunbed3.jpg"]
                },
                {
                  step: "2",
                  title: "Full Hand-Sanding",
                  description: "Progressed from 80-grit to 220-grit to reveal the warm, natural pine beneath the grey patina.",
                  images: ["/sunbed4.jpg"]
                },
                {
                  step: "3",
                  title: "Structural Repairs",
                  description: "Re-glued and clamped all joints, replaced two cracked seat slats, and added concealed screws for extra rigidity.",
                  images: ["/sunbed5.jpg", "/sunbed6.jpg"]
                },
                {
                  step: "4",
                  title: "Fine Detailing",
                  description: "Re-cut the scalloped backrest profile and eased sharp edges for a smoother tactile feel.",
                  images: ["/sunbed7.jpg"]
                },
                {
                  step: "5",
                  title: "Protective Finish",
                  description: "Two coats of marine-grade, matte water-based sealer provide UV resistance and a breathable barrier against moisture—perfect for coastal climates.",
                  images: ["/sunbed8.jpg"]
                }
              ].map((step, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-xl mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-semibold text-dark-wood">{step.title}</h3>
                    </div>
                    <p className="text-lg text-forest-green leading-relaxed">{step.description}</p>
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
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              The Result
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "✨",
                  title: "Rich Honey-Toned Grain",
                  description: "Now takes center stage, highlighted rather than hidden"
                },
                {
                  icon: "🔒",
                  title: "Rock-Solid Frame",
                  description: "Eliminates the previous sway—safe for afternoon naps or extra guest seating"
                },
                {
                  icon: "🏠",
                  title: "Perfect Finish",
                  description: "Low-sheen finish feels silky to the touch and complements both rustic and modern patio décor"
                }
              ].map((result, index) => (
                <div key={index} className="bg-white-daisy/10 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">{result.icon}</div>
                  <h3 className="text-xl font-semibold text-golden-center mb-3">{result.title}</h3>
                  <p className="text-white-daisy">{result.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-golden-center/20 p-8 rounded-lg text-center">
              <blockquote className="text-2xl italic text-golden-center mb-4">
                "Can't believe it's the same piece! You've given our favourite chill-out spot a new lease on life."
              </blockquote>
              <cite className="text-white-daisy font-semibold">— Client feedback</cite>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-golden-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-6">
              Have a Similar Project?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              Transform your weather-worn outdoor furniture with our expert restoration services. 
              We specialize in coastal climate protection and structural repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
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