import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Star, Award, Wrench, CheckCircle, ArrowRight, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Repair Near Me | Fast Local Furniture Repair Services",
  description: "Need furniture repair near you? Professional local furniture repair services for broken chairs, tables, cabinets, and more. Same-day quotes, expert repairs, convenient pickup & delivery.",
  keywords: "furniture repair near me, local furniture repair, furniture fix near me, broken furniture repair, chair repair near me, table repair near me, cabinet repair near me, furniture repair services",
  openGraph: {
    title: "Furniture Repair Near Me | Fast Local Repair Services",
    description: "Professional furniture repair services in your area. Expert repairs for all furniture types. Fast service, quality guaranteed, convenient local pickup and delivery.",
    url: "https://bloomingfurniture.co.za/furniture-repair-near-me",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Furniture Repair Near Me - Local Expert Services",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/furniture-repair-near-me",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za/furniture-repair-near-me",
  "name": "Blooming Furniture - Local Furniture Repair Services",
  "description": "Professional furniture repair services near you. Expert local repairs for broken chairs, tables, cabinets, and all furniture types with convenient pickup and delivery.",
  "url": "https://bloomingfurniture.co.za/furniture-repair-near-me",
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
    "Furniture Repair Near Me",
    "Emergency Furniture Repair",
    "Chair Repair Services",
    "Table Repair Services",
    "Cabinet Repair Services",
    "Antique Furniture Repair"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "134"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Local Furniture Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Furniture Repair",
          "description": "Fast response furniture repair services for urgent repairs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Same-Day Assessment",
          "description": "Quick assessment and quotes for furniture repair needs"
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
      "name": "How do I find furniture repair services near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Search online for local furniture repair services, check reviews, and contact reputable providers like Blooming Furniture for professional repairs in the Western Cape area. We offer same-day assessments and quick turnaround times for most furniture repairs."
      }
    },
    {
      "@type": "Question", 
      "name": "What types of furniture can you repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We repair all types of furniture including chairs, tables, cabinets, dressers, sofas, antiques, and more. Our services include structural repairs, joint fixes, hardware replacement, and minor refinishing work."
      }
    },
    {
      "@type": "Question",
      "name": "How much does furniture repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furniture repair costs vary depending on the piece, its condition, and services needed. Each project is unique. We provide free assessments and detailed quotes. Contact us for a personalized estimate."
      }
    }
  ]
};

export default function FurnitureRepairNearMe() {
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
                  <Zap className="h-8 w-8 text-golden-center mr-3" />
                  <span className="text-golden-center font-semibold">Fast Local Repairs!</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Furniture Repair <span className="text-golden-center">Near You</span>
                </h1>
                <p className="text-xl mb-8">
                  Professional furniture repair services in your local area. Fix broken chairs, tables, 
                  cabinets & more. Same-day quotes, expert repairs, convenient collection & delivery!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link 
                    href="/book-consultation"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 text-center inline-flex items-center justify-center"
                  >
                    <Wrench className="mr-2 h-5 w-5" />
                    Get Repair Quote Now
                  </Link>
                  <Link 
                    href="tel:+27793752588"
                    className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300 text-center inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: (079) 375 2588
                  </Link>
                </div>
                <div className="bg-golden-center/20 p-4 rounded-lg mb-4">
                  <div className="flex items-center text-golden-center">
                    <Zap className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Same-day assessment available</span>
                  </div>
                </div>
                <div className="flex items-center text-golden-center">
                  <Star className="h-5 w-5 fill-current mr-1" />
                  <Star className="h-5 w-5 fill-current mr-1" />
                  <Star className="h-5 w-5 fill-current mr-1" />
                  <Star className="h-5 w-5 fill-current mr-1" />
                  <Star className="h-5 w-5 fill-current mr-3" />
                  <span className="text-white-daisy">4.9/5 from 134+ repair customers</span>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/portfolio/portfolio-5.jpeg"
                  alt="Local furniture repair services near you"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-golden-center text-dark-wood p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">FAST</div>
                    <div className="text-sm">Local Repairs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Repair Banner */}
        <section className="py-8 bg-golden-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Zap className="h-8 w-8 text-dark-wood mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-dark-wood">Need Emergency Furniture Repair?</h3>
                  <p className="text-forest-green">Broken chair? Wobbly table? We offer same-day assessment for urgent repairs!</p>
                </div>
              </div>
              <Link 
                href="tel:+27793752588"
                className="bg-dark-wood text-white-daisy px-6 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Call for Emergency Repair
              </Link>
            </div>
          </div>
        </section>

        {/* Common Repairs */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-wood mb-4">
                Common Furniture Repairs We Handle
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                From simple fixes to complex structural repairs, our local experts can restore your furniture 
                to perfect working condition quickly and affordably.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🪑",
                  title: "Chair Repairs",
                  description: "Broken legs, loose joints, wobbly frames, damaged seats, and armrest repairs.",
                  commonIssues: ["Broken chair legs", "Loose seat joints", "Wobbly frames", "Torn upholstery"],
                  urgency: "Same-day available"
                },
                {
                  icon: "🪴",
                  title: "Table Repairs", 
                  description: "Wobbly tables, broken legs, damaged tops, drawer issues, and extension problems.",
                  commonIssues: ["Wobbly table legs", "Scratched surfaces", "Broken drawers", "Loose joints"],
                  urgency: "24-48 hours"
                },
                {
                  icon: "🗄️",
                  title: "Cabinet Repairs",
                  description: "Door alignment, broken hinges, drawer slides, shelf repairs, and hardware fixes.",
                  commonIssues: ["Sagging doors", "Broken hinges", "Stuck drawers", "Damaged shelves"],
                  urgency: "2-3 days"
                },
                {
                  icon: "🛏️",
                  title: "Bed Repairs",
                  description: "Broken bed frames, loose headboards, damaged slats, and squeaky joints.",
                  commonIssues: ["Squeaky frames", "Broken slats", "Loose headboards", "Frame instability"],
                  urgency: "Same-day available"
                },
                {
                  icon: "📚",
                  title: "Bookshelf Repairs",
                  description: "Sagging shelves, loose backing, wobbly frames, and damaged supports.",
                  commonIssues: ["Sagging shelves", "Loose backing", "Wobbly structure", "Damaged supports"],
                  urgency: "1-2 days"
                },
                {
                  icon: "🏺",
                  title: "Antique Repairs",
                  description: "Careful restoration of vintage and antique furniture with period-appropriate techniques.",
                  commonIssues: ["Age-related damage", "Loose veneer", "Missing hardware", "Structural wear"],
                  urgency: "3-5 days"
                }
              ].map((repair, index) => (
                <div key={index} className="bg-daisy-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{repair.icon}</div>
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{repair.title}</h3>
                  <p className="text-forest-green mb-4">{repair.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-wood mb-2">Common Issues:</h4>
                    <ul className="space-y-1">
                      {repair.commonIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-center text-sm text-forest-green">
                          <CheckCircle className="h-3 w-3 text-golden-center mr-2 flex-shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-golden-center">{repair.urgency}</span>
                    <Link 
                      href="/book-consultation"
                      className="text-sm text-forest-green hover:text-dark-wood transition-colors"
                    >
                      Get Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Local Repair */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-wood mb-4">
                Why Choose Local Furniture Repair?
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Local furniture repair services offer convenience, speed, and personalized attention 
                that big companies can't match. Here's why going local makes sense.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Faster Response",
                  description: "Same-day assessments and quicker repair turnaround times for urgent furniture fixes.",
                  benefit: "24-48hr repairs"
                },
                {
                  icon: MapPin,
                  title: "Convenient Service",
                  description: "Local pickup and delivery service. No need to transport heavy furniture yourself.",
                  benefit: "Free collection"
                },
                {
                  icon: Shield,
                  title: "Personal Guarantee",
                  description: "Direct relationship with local craftsmen who stand behind their repair work.",
                  benefit: "Local warranty"
                },
                {
                  icon: Award,
                  title: "Expert Knowledge",
                  description: "Understanding of local climate effects and furniture types common in your area.",
                  benefit: "Local expertise"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-12 w-12 text-golden-center mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-wood mb-2">{benefit.title}</h3>
                  <p className="text-forest-green mb-3">{benefit.description}</p>
                  <div className="bg-golden-center/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-golden-center">{benefit.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-dark-wood mb-12">
              Our Local Furniture Repair Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Quick Assessment",
                  description: "Call or message us with photos of the damage. We'll provide an initial estimate and schedule a visit if needed.",
                  timeframe: "Same day response"
                },
                {
                  step: "2",
                  title: "Expert Diagnosis",
                  description: "Our craftsman examines the furniture, explains the repair process, and provides a detailed quote.",
                  timeframe: "30-minute visit"
                },
                {
                  step: "3", 
                  title: "Professional Repair",
                  description: "We collect the furniture and complete repairs in our workshop using quality materials and techniques.",
                  timeframe: "1-5 days typical"
                },
                {
                  step: "4",
                  title: "Quality Delivery",
                  description: "Your repaired furniture is delivered back to your home and positioned exactly where you need it.",
                  timeframe: "Convenient scheduling"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-daisy-cream p-6 rounded-lg text-center shadow-md">
                    <div className="w-16 h-16 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold text-2xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-wood mb-2">{step.title}</h3>
                    <p className="text-forest-green mb-3">{step.description}</p>
                    <div className="bg-golden-center/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-golden-center">{step.timeframe}</span>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 -right-4 z-10">
                      <ArrowRight className="h-8 w-8 text-golden-center" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Furniture Repair Questions & Answers
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you repair my furniture?",
                  answer: "Most simple repairs can be completed within 24-48 hours. Complex repairs typically take 3-7 days. We offer same-day assessment for urgent repairs and can often provide temporary fixes while permanent repairs are completed."
                },
                {
                  question: "Do you repair furniture at my location or in your workshop?",
                  answer: "Simple repairs can often be done on-site during our assessment visit. More complex repairs requiring tools and materials are completed in our workshop. We provide convenient collection and delivery for workshop repairs."
                },
                {
                  question: "What if the repair costs more than a new piece of furniture?",
                  answer: "We'll always be honest about repair costs versus replacement value. For high-value, antique, or sentimental pieces, repair is often worthwhile. For basic furniture, we'll advise if replacement makes more economic sense."
                },
                {
                  question: "Do you guarantee your furniture repair work?",
                  answer: "Yes! We provide warranties on all repair work. Structural repairs are guaranteed for 1 year, and we stand behind our craftsmanship. If something isn't right, we'll make it right at no extra cost."
                },
                {
                  question: "Can you match the existing finish on repaired furniture?",
                  answer: "Our craftsmen are skilled at color and finish matching. While we can get very close matches, exact matches depend on the age and type of original finish. We'll show you samples before proceeding with any finish work."
                },
                {
                  question: "Do you provide free estimates for furniture repairs?",
                  answer: "Yes, we provide free estimates for all furniture repairs. Simple assessments can often be done over the phone with photos. For complex issues, we offer free in-home assessments within our service area."
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

        {/* Service Areas */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-wood mb-4">
                Local Furniture Repair Service Areas
              </h2>
              <p className="text-lg text-forest-green">
                Fast, reliable furniture repair services throughout the Western Cape region
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  className="bg-white-daisy p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-golden-center mr-2" />
                    <span className="font-semibold text-dark-wood group-hover:text-forest-green transition-colors">
                      {location.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Your Furniture Repaired Today
            </h2>
            <p className="text-xl mb-8">
              Don't live with broken furniture. Get professional repairs from local experts. 
              Same-day quotes, quality work, and convenient service in your area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/book-consultation"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300 inline-flex items-center justify-center"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Get Repair Quote Now
              </Link>
              <Link 
                href="tel:+27793752588"
                className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: (079) 375 2588
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-white-daisy">
                <MapPin className="inline h-5 w-5 mr-1" />
                Serving Western Cape • Same-Day Assessment • Quality Guaranteed
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}