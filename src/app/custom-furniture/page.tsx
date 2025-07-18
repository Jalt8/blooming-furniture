import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Ruler, Palette, Truck, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Custom Furniture Design & Manufacturing | Bespoke Furniture Makers',
  description: 'Transform your space with custom furniture designed and crafted to your exact specifications. Expert craftsmen creating bespoke pieces using premium materials. Free design consultation.',
  keywords: 'custom furniture, bespoke furniture, custom furniture makers, made to order furniture, custom furniture design, handcrafted furniture, custom dining tables, custom wardrobes',
  openGraph: {
    title: 'Custom Furniture | Handcrafted Bespoke Pieces | Blooming Furniture',
    description: 'Expert custom furniture makers creating unique pieces tailored to your style and space. From concept to completion. Free consultation available.',
    images: ['/blooming-furniture.png'],
    type: 'website'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/custom-furniture'
  }
}

export default function CustomFurniturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Custom Furniture Design & Manufacturing',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Blooming Furniture',
      'telephone': '+27793752588',
      'address': {
        '@type': 'PostalAddress',
        'addressRegion': 'Western Cape',
        'addressCountry': 'South Africa'
      }
    },
    'description': 'Professional custom furniture design and manufacturing services. Bespoke pieces crafted to your exact specifications.',
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': -33.0895,
        'longitude': 18.0371
      },
      'geoRadius': '100000'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Custom Furniture Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Custom Dining Tables',
            'description': 'Handcrafted dining tables made to your specifications'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Bespoke Wardrobes',
            'description': 'Custom-built wardrobes designed for your space'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Custom Shelving Units',
            'description': 'Made-to-measure shelving solutions'
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white-daisy">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-forest-green text-white-daisy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Custom Furniture Crafted for Your Unique Space
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Transform your vision into reality with handcrafted custom furniture designed and built to your exact specifications by master craftsmen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-consultation">
                  <Button size="lg" className="bg-golden-center text-dark-wood hover:bg-daisy-cream">
                    Get Free Design Consultation <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-white-daisy text-white-daisy hover:bg-white-daisy hover:text-forest-green">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Custom Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark-wood">
                Why Choose Custom Furniture?
              </h2>
              <p className="text-lg text-forest-green">
                Mass-produced furniture can't match the quality, fit, and personalization of custom-made pieces. 
                Our bespoke furniture is designed specifically for your space, style, and needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Ruler,
                  title: "Perfect Fit",
                  description: "Every piece is measured and crafted to fit your exact space requirements, maximizing functionality"
                },
                {
                  icon: Palette,
                  title: "Unique Design",
                  description: "Choose your materials, finishes, and style to create furniture that reflects your personal taste"
                },
                {
                  icon: Shield,
                  title: "Superior Quality",
                  description: "Built with premium materials and traditional craftsmanship techniques for lasting durability"
                },
                {
                  icon: CheckCircle,
                  title: "Sustainable Choice",
                  description: "Eco-friendly materials and local craftsmanship reduce environmental impact"
                },
                {
                  icon: Truck,
                  title: "Full Service",
                  description: "From design consultation to delivery and installation, we handle every detail"
                },
                {
                  icon: Shield,
                  title: "Lifetime Value",
                  description: "Custom furniture is an investment that adds value to your home for generations"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-forest-green mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-dark-wood">{feature.title}</h3>
                  <p className="text-forest-green">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Custom Furniture Types */}
        <section className="py-16 lg:py-24 bg-daisy-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-dark-wood">
              Popular Custom Furniture Pieces
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Custom Dining Tables</h3>
                <p className="text-forest-green mb-4">
                  Create the perfect gathering place with a custom dining table designed for your family's needs. 
                  Choose from various wood types, sizes, and finishes to match your dining room perfectly.
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Extendable options for entertaining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Live edge and reclaimed wood options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Matching benches and chairs available</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Bespoke Wardrobes</h3>
                <p className="text-forest-green mb-4">
                  Maximize your storage with custom wardrobes designed to fit your space perfectly. 
                  Our wardrobes combine functionality with elegant design.
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Built-in or freestanding options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom internal configurations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sliding or hinged door options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Custom Shelving Units</h3>
                <p className="text-forest-green mb-4">
                  Display your treasures with custom shelving designed for your specific needs. 
                  Perfect for libraries, living rooms, or office spaces.
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Floating or floor-standing designs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integrated lighting options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mixed materials for unique looks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Custom Bedroom Furniture</h3>
                <p className="text-forest-green mb-4">
                  Create your perfect sanctuary with custom bedroom furniture including beds, 
                  nightstands, and dressers designed to work together harmoniously.
                </p>
                <ul className="space-y-2 text-forest-green">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Platform beds with built-in storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Matching furniture sets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-golden-center mr-2 flex-shrink-0 mt-0.5" />
                    <span>Space-saving solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-dark-wood">
              Our Custom Furniture Process
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Design Consultation",
                    description: "We begin with a free consultation to understand your vision, space requirements, and style preferences. Our designers will work with you to create the perfect piece."
                  },
                  {
                    step: "2",
                    title: "Detailed Planning",
                    description: "We create detailed drawings and 3D renderings of your custom furniture, allowing you to visualize the final product and make any necessary adjustments."
                  },
                  {
                    step: "3",
                    title: "Material Selection",
                    description: "Choose from our curated selection of premium woods, finishes, and hardware. We'll guide you through options that match your style and budget."
                  },
                  {
                    step: "4",
                    title: "Expert Craftsmanship",
                    description: "Our master craftsmen bring your design to life using traditional techniques and modern precision tools, ensuring every detail is perfect."
                  },
                  {
                    step: "5",
                    title: "Quality Assurance",
                    description: "Each piece undergoes rigorous quality checks to ensure it meets our exacting standards before finishing and delivery."
                  },
                  {
                    step: "6",
                    title: "Delivery & Installation",
                    description: "We handle professional delivery and installation, ensuring your custom furniture is perfectly placed and secured in your home."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-golden-center rounded-full flex items-center justify-center text-dark-wood font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-dark-wood">{item.title}</h3>
                      <p className="text-forest-green">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-golden-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-dark-wood">
              Ready to Create Your Custom Furniture?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-forest-green">
              Start your custom furniture journey today with a free design consultation. 
              Let's bring your vision to life with handcrafted pieces that will last for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-forest-green text-white-daisy hover:bg-dark-wood">
                  Book Free Consultation <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white-daisy">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}