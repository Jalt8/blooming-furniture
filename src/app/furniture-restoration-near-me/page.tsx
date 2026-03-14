import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Search, CheckCircle, ArrowRight, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration Near Me | Local Expert Restoration Services",
  description: "Find professional furniture restoration services near you. Expert local craftsmen providing furniture repair, refinishing, and antique restoration. Free quotes, fast service, and guaranteed quality.",
  keywords: "furniture restoration near me, furniture repair near me, local furniture restoration, furniture refinishing near me, antique restoration near me, furniture services near me, furniture restoration services",
  openGraph: {
    title: "Furniture Restoration Near Me | Local Expert Services",
    description: "Professional furniture restoration services in your area. Expert craftsmanship, free quotes, and convenient local service. Transform your furniture today.",
    url: "https://bloomingfurniture.co.za/furniture-restoration-near-me",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Furniture Restoration Near Me - Local Expert Services",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-restoration-near-me",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za",
  "name": "Blooming Furniture - Local Furniture Restoration Services",
  "description": "Professional furniture restoration services near you. Expert local craftsmen providing comprehensive furniture repair, refinishing, and restoration services.",
  "url": "https://bloomingfurniture.co.za/furniture-restoration-near-me",
  "telephone": "(079) 375 2588",
  "email": "wendydanie@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0895,
    "longitude": 18.0371
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -33.0895,
      "longitude": 18.0371
    },
    "geoRadius": "100000"
  },
  "serviceType": [
    "Furniture Restoration Near Me",
    "Local Furniture Repair",
    "Furniture Refinishing Services",
    "Antique Restoration",
    "Furniture Refurbishment"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Local Furniture Restoration Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Local Assessment",
          "description": "Complimentary furniture assessment and quote at your location"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Collection and Delivery",
          "description": "Convenient pickup and delivery service in your area"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find furniture restoration services near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can find local furniture restoration services by searching online, checking local directories, or contacting Blooming Furniture for professional restoration services in the Western Cape area. We provide free assessments and quotes for all types of furniture restoration projects."
      }
    },
    {
      "@type": "Question", 
      "name": "What areas do you serve for furniture restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve the entire Western Cape region including Cape Town, West Coast towns like Langebaan, Saldanha Bay, Vredenburg, Paternoster, Velddrif, Hopefield, Yzerfontein, and Elands Bay. We provide collection and delivery services to all areas we serve."
      }
    },
    {
      "@type": "Question",
      "name": "How much does local furniture restoration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture repair costs vary depending on the piece, its condition, and services needed. Each project is unique. We provide free assessments and detailed quotes. Contact us for a personalized estimate."
      }
    }
  ]
};

export default function FurnitureRestorationNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Search className="h-8 w-8 text-golden-center mr-3" />
                  <span className="text-golden-center font-semibold">Found the Right Place!</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Furniture Restoration <span className="text-golden-center">Near You</span>
                </h1>
                <p className="text-xl mb-8">
                  Professional furniture restoration services in your local area. Expert craftsmen, 
                  free quotes, convenient collection & delivery. Transform your furniture today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 text-center inline-flex items-center justify-center"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Get Free Quote Today
                  </Link>
                  <Link 
                    href="tel:+27793752588"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (079) 375 2588
                  </Link>
                </div>
                <div className="flex items-center text-golden-center">
                  <Award className="h-8 w-8 mr-3" />
                  <span className="text-white-daisy">Trusted by local customers across the West Coast</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/portfolio-8.jpeg"
                  alt="Local furniture restoration services near you"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-golden-center text-dark-wood p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">FREE</div>
                    <div className="text-sm">Local Quotes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Local */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-wood mb-4">
                Why Choose Local Furniture Restoration?
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                When you search for "furniture restoration near me," you're looking for convenience, 
                expertise, and trust. Here's why local service makes all the difference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Convenient Location",
                  description: "Easy collection and delivery in your area. No long-distance shipping or complicated logistics."
                },
                {
                  icon: Clock,
                  title: "Faster Service",
                  description: "Quick response times and faster project completion with local, dedicated craftsmen."
                },
                {
                  icon: Award,
                  title: "Local Expertise",
                  description: "Understanding of local climate, styles, and preferences that affect furniture restoration."
                },
                {
                  icon: CheckCircle,
                  title: "Personal Touch",
                  description: "Face-to-face consultations, direct communication, and personalized service you can trust."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-12 w-12 text-golden-center mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-wood mb-2">{benefit.title}</h3>
                  <p className="text-forest-green">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-wood mb-4">
                Areas We Serve for Furniture Restoration
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Professional furniture restoration services delivered directly to your location 
                across the Western Cape region.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark-wood mb-6">Primary Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Langebaan", href: "/furniture-restoration-langebaan" },
                    { name: "Saldanha Bay", href: "/furniture-repair-saldanha-bay" },
                    { name: "Vredenburg", href: "/furniture-restoration-vredenburg" },
                    { name: "Paternoster", href: "/furniture-repair-paternoster" },
                    { name: "Velddrif", href: "/furniture-restoration-velddrif" },
                    { name: "Hopefield", href: "/furniture-restoration-hopefield" },
                    { name: "Yzerfontein", href: "/furniture-restoration-yzerfontein" },
                    { name: "Elands Bay", href: "/furniture-restoration-elands-bay" }
                  ].map((location, index) => (
                    <Link
                      key={index}
                      href={location.href}
                      className="bg-white-daisy p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-dark-wood">{location.name}</span>
                        <ArrowRight className="h-4 w-4 text-golden-center group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-forest-green text-white-daisy rounded-lg">
                  <h4 className="font-bold mb-2 text-golden-center">Don't See Your Area?</h4>
                  <p className="mb-4">We also serve surrounding areas within 100km of our base. Contact us to confirm service availability in your location.</p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-golden-center hover:text-white-daisy transition-colors"
                  >
                    Check Service Availability <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white-daisy p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-dark-wood mb-6">Our Local Service Promise</h3>
                <ul className="space-y-4">
                  {[
                    "Free assessment and quote at your location",
                    "Professional collection and delivery service",
                    "Local craftsmen with regional expertise",
                    "Understanding of local climate challenges",
                    "Same-day response to urgent requests",
                    "Transparent pricing with no hidden costs",
                    "Quality guarantee on all restoration work",
                    "Follow-up care and maintenance advice"
                  ].map((promise, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-golden-center mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-forest-green">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Near You */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-dark-wood mb-12">
              Complete Furniture Restoration Services Near You
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Antique Restoration",
                  description: "Expert restoration of valuable antiques and family heirlooms using traditional techniques and period-appropriate materials.",
                  features: ["Period-accurate restoration", "Structural repairs", "Traditional joinery", "Authentic finishes"]
                },
                {
                  title: "Furniture Refinishing",
                  description: "Complete refinishing services to transform tired furniture with new stains, paints, and protective coatings.",
                  features: ["Paint removal", "Wood preparation", "Custom staining", "Protective topcoats"]
                },
                {
                  title: "Upholstery Restoration",
                  description: "Professional reupholstering services with fabric selection, padding replacement, and structural repairs.",
                  features: ["Fabric consultation", "Padding replacement", "Frame repairs", "Custom designs"]
                },
                {
                  title: "Structural Repairs",
                  description: "Fix broken joints, damaged legs, loose connections, and other structural issues to restore furniture stability.",
                  features: ["Joint repair", "Wood replacement", "Hardware restoration", "Stability improvement"]
                },
                {
                  title: "French Polishing",
                  description: "Traditional French polishing technique for high-end furniture requiring the finest finish quality.",
                  features: ["Hand application", "Multiple coats", "Mirror finish", "Premium results"]
                },
                {
                  title: "Custom Matching",
                  description: "Match existing furniture pieces with custom stains, hardware, and finishes for cohesive room designs.",
                  features: ["Color matching", "Texture matching", "Hardware matching", "Style coordination"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{service.title}</h3>
                  <p className="text-forest-green mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-forest-green">
                        <CheckCircle className="h-4 w-4 text-golden-center mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Process */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-dark-wood mb-12">
              How Our Local Service Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description: "Call or book online for a free consultation. We'll discuss your furniture restoration needs and schedule a convenient time.",
                  icon: Phone
                },
                {
                  step: "2",
                  title: "Free Assessment",
                  description: "Our expert visits your location to assess the furniture, explain the restoration process, and provide a detailed quote.",
                  icon: Search
                },
                {
                  step: "3",
                  title: "Collection",
                  description: "We carefully collect your furniture with protective wrapping and transport it safely to our workshop.",
                  icon: MapPin
                },
                {
                  step: "4",
                  title: "Expert Restoration",
                  description: "Our skilled craftsmen restore your furniture using traditional techniques and quality materials in our workshop.",
                  icon: Award
                },
                {
                  step: "5",
                  title: "Quality Check",
                  description: "Every piece undergoes thorough quality inspection to ensure it meets our high standards before delivery.",
                  icon: CheckCircle
                },
                {
                  step: "6",
                  title: "Local Delivery",
                  description: "We deliver your beautifully restored furniture back to your home and position it exactly where you want it.",
                  icon: Clock
                }
              ].map((step, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg text-center shadow-md">
                  <div className="w-16 h-16 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-forest-green mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-dark-wood mb-2">{step.title}</h3>
                  <p className="text-forest-green text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  question: "How do I find the best furniture restoration services near me?",
                  answer: "Look for local services with good reviews, proper insurance, and examples of their work. Blooming Furniture has been serving the Western Cape region for years with expert craftsmanship and reliable service. We provide free consultations to help you make an informed decision."
                },
                {
                  question: "What areas do you serve for furniture restoration?",
                  answer: "We serve the entire Western Cape region including Cape Town and West Coast towns like Langebaan, Saldanha Bay, Vredenburg, Paternoster, Velddrif, Hopefield, Yzerfontein, and Elands Bay. We provide collection and delivery services to all areas within 100km of our workshop."
                },
                {
                  question: "How much does furniture restoration cost in my area?",
                  answer: "Costs vary based on the furniture type, condition, and restoration required. Minor repairs start from around R500, while complete antique restorations can range from R2000-R8000+. We provide detailed, transparent quotes with no hidden costs after assessing your specific pieces."
                },
                {
                  question: "Do you offer collection and delivery in my area?",
                  answer: "Yes! We provide professional collection and delivery services throughout our service area. Your furniture is carefully wrapped and transported in our specialized vehicles. Collection and delivery costs are included in most restoration quotes."
                },
                {
                  question: "How long does furniture restoration take?",
                  answer: "Timeline depends on the complexity of work needed. Simple refinishing projects typically take 1-2 weeks, while complex antique restorations may take 3-6 weeks. We'll give you an accurate timeline during your free consultation and keep you updated throughout the process."
                },
                {
                  question: "Do you provide warranties on restoration work?",
                  answer: "Yes, we stand behind our craftsmanship with warranties on all restoration work. Structural repairs are guaranteed for 2 years, and finishes are guaranteed for 1 year under normal use conditions. We also provide care instructions to help maintain your restored furniture."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-dark-wood mb-3">{faq.question}</h3>
                  <p className="text-forest-green">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-golden-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-dark-wood">
              Ready to Restore Your Furniture?
            </h2>
            <p className="text-xl mb-8 text-forest-green">
              Get expert furniture restoration services in your local area. Free consultation, 
              transparent pricing, and guaranteed quality craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/book-consultation"
                className="bg-dark-wood text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-forest-green transition duration-300 inline-flex items-center justify-center"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Get Your Free Quote
              </Link>
              <Link 
                href="tel:+27793752588"
                className="border-2 border-dark-wood text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-wood hover:text-white-daisy transition duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: (079) 375 2588
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-forest-green">
                <MapPin className="inline h-5 w-5 mr-1" />
                Serving Western Cape • Free Collection & Delivery • Expert Craftsmanship
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}