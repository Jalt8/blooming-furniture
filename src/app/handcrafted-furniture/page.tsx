import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Hammer, Heart, TreePine, Users, CheckCircle, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Handcrafted Furniture | Artisan Made Wooden Furniture',
  description: 'Discover authentic handcrafted furniture made by skilled artisans. Each piece is carefully crafted using traditional techniques and sustainable materials. Quality that lasts generations.',
  keywords: 'handcrafted furniture, artisan furniture, handmade furniture, wooden furniture, handcrafted wooden furniture, artisan made furniture, traditional furniture making',
  openGraph: {
    title: 'Handcrafted Furniture | Traditional Artisan Craftsmanship',
    description: 'Authentic handcrafted furniture made with passion and skill. Traditional techniques meet modern design. Sustainable materials, lifetime quality.',
    images: ['/blooming-furniture.png'],
    type: 'website'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/handcrafted-furniture'
  }
}

export default function HandcraftedFurniturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Handcrafted Furniture',
    'description': 'Artisan-made furniture crafted using traditional techniques and sustainable materials',
    'brand': {
      '@type': 'Brand',
      'name': 'Blooming Furniture'
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'ZAR',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'LocalBusiness',
        '@id': 'https://bloomingfurniture.co.za',
        'name': 'Blooming Furniture',
        'telephone': '+27793752588'
      }
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '67'
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
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Handcrafted Furniture Made with Passion & Skill
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Experience the warmth and character of genuine handcrafted furniture. 
                Each piece tells a story of traditional craftsmanship and sustainable artistry
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio">
                  <Button size="lg" className="bg-golden-center text-dark-wood hover:bg-daisy-cream">
                    View Handcrafted Pieces <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/book-consultation">
                  <Button size="lg" variant="outline" className="border-white-daisy text-white-daisy hover:bg-white-daisy hover:text-forest-green">
                    Commission Your Piece
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Art of Handcrafting */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-dark-wood">
                  The Art of Handcrafting Furniture
                </h2>
                <p className="text-lg text-forest-green mb-6">
                  In an age of mass production, handcrafted furniture stands as a testament to human skill, 
                  creativity, and dedication. Our artisans pour their hearts into every piece, creating 
                  furniture that's not just functional, but meaningful.
                </p>
                <p className="text-lg text-forest-green mb-8">
                  Using time-honored techniques passed down through generations, we transform raw materials 
                  into beautiful, lasting pieces that bring warmth and character to your home.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Hammer className="h-10 w-10 text-golden-center mb-3" />
                    <h3 className="font-semibold text-dark-wood mb-1">100% Handmade</h3>
                    <p className="text-sm text-forest-green">No mass production lines</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <TreePine className="h-10 w-10 text-golden-center mb-3" />
                    <h3 className="font-semibold text-dark-wood mb-1">Sustainable Wood</h3>
                    <p className="text-sm text-forest-green">Responsibly sourced materials</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-forest-green text-white-daisy p-8 lg:p-12 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Why Choose Handcrafted?</h3>
                <ul className="space-y-4">
                  {[
                    "Each piece is unique with its own character",
                    "Superior construction using traditional joinery",
                    "Supports local artisans and communities",
                    "Environmentally sustainable practices",
                    "Furniture that improves with age",
                    "Customizable to your exact needs"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-golden-center mr-3 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Process */}
        <section className="py-16 lg:py-24 bg-daisy-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-dark-wood">
              Our Handcrafting Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Material Selection",
                  description: "We carefully select each piece of wood, examining grain patterns and ensuring quality. Only the finest materials make it to our workshop.",
                  features: ["Kiln-dried hardwoods", "Sustainable sourcing", "Natural beauty preserved"]
                },
                {
                  title: "Traditional Techniques",
                  description: "Using hand tools and time-tested methods, our artisans shape each piece with precision and care, creating strong, beautiful joints.",
                  features: ["Mortise & tenon joints", "Hand-cut dovetails", "Traditional finishing"]
                },
                {
                  title: "Finishing Touches",
                  description: "Hours of hand sanding and finishing bring out the natural beauty of the wood, creating a smooth, lustrous surface that ages gracefully.",
                  features: ["Hand-rubbed finishes", "Natural oils & waxes", "Eco-friendly products"]
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-4xl font-bold text-golden-center mb-4">{index + 1}</div>
                  <h3 className="text-xl font-bold mb-3 text-dark-wood">{step.title}</h3>
                  <p className="text-forest-green mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-forest-green flex items-center">
                        <span className="w-2 h-2 bg-golden-center rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Handcrafted Furniture */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-dark-wood">
              Handcrafted Furniture for Every Room
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  room: "Living Room",
                  items: ["Coffee tables with live edges", "Handcarved console tables", "Artisan bookshelf units", "Custom entertainment centers"],
                  highlight: "Natural wood grain showcased"
                },
                {
                  room: "Dining Room",
                  items: ["Solid wood dining tables", "Hand-turned chair legs", "Carved dining benches", "Display cabinets"],
                  highlight: "Built for family gatherings"
                },
                {
                  room: "Bedroom",
                  items: ["Platform beds with storage", "Handcrafted nightstands", "Wooden dressers", "Blanket chests"],
                  highlight: "Peaceful, natural aesthetics"
                },
                {
                  room: "Home Office",
                  items: ["Writing desks", "Ergonomic desk chairs", "Filing cabinets", "Floating shelves"],
                  highlight: "Productive workspace solutions"
                },
                {
                  room: "Kitchen",
                  items: ["Butcher block islands", "Spice racks", "Wine racks", "Bar stools"],
                  highlight: "Functional artistry"
                },
                {
                  room: "Outdoor",
                  items: ["Garden benches", "Patio dining sets", "Adirondack chairs", "Planters"],
                  highlight: "Weather-resistant finishes"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-dark-wood">{category.room}</h3>
                  <ul className="space-y-2 mb-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-forest-green flex items-start">
                        <span className="text-golden-center mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-golden-center">{category.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Artisans */}
        <section className="py-16 lg:py-24 bg-forest-green text-white-daisy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="h-16 w-16 mx-auto mb-6 text-golden-center" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Meet Our Master Artisans
              </h2>
              <p className="text-xl mb-8">
                Our team of skilled craftspeople brings decades of experience and a deep passion for 
                woodworking. Each artisan specializes in different techniques, from traditional joinery 
                to artistic carving, ensuring every piece receives expert attention.
              </p>
              <blockquote className="text-lg italic mb-6">
                "There's something magical about transforming a piece of wood into furniture that will 
                be part of someone's home for generations. That's what drives us every day."
              </blockquote>
              <cite className="text-golden-center font-semibold">— Johan, Lead Craftsman</cite>
            </div>
          </div>
        </section>

        {/* Quality Guarantee */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-golden-center/10 p-8 lg:p-12 rounded-lg max-w-4xl mx-auto text-center">
              <Award className="h-16 w-16 mx-auto mb-6 text-golden-center" />
              <h2 className="text-3xl font-bold mb-6 text-dark-wood">
                Our Handcrafted Promise
              </h2>
              <p className="text-lg text-forest-green mb-8">
                Every piece of handcrafted furniture from Blooming Furniture comes with our guarantee 
                of quality. We stand behind our work with:
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-bold text-dark-wood mb-2">10-Year Warranty</h3>
                  <p className="text-forest-green">On all structural elements</p>
                </div>
                <div>
                  <h3 className="font-bold text-dark-wood mb-2">Free Maintenance</h3>
                  <p className="text-forest-green">First year care included</p>
                </div>
                <div>
                  <h3 className="font-bold text-dark-wood mb-2">Lifetime Support</h3>
                  <p className="text-forest-green">Care advice whenever needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-dark-wood text-white-daisy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Experience Handcrafted Excellence
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to bring the warmth and character of handcrafted furniture into your home? 
              Let's create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-golden-center text-dark-wood hover:bg-daisy-cream">
                  Start Your Project <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-golden-center text-golden-center hover:bg-golden-center hover:text-dark-wood">
                  Learn About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}