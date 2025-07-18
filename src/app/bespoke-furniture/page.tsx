import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Heart, Leaf, Clock, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Bespoke Furniture Design Services | Luxury Custom Furniture',
  description: 'Experience luxury bespoke furniture tailored to your unique style. Expert designers and master craftsmen create one-of-a-kind pieces using premium materials. Exclusive design service.',
  keywords: 'bespoke furniture, luxury furniture, bespoke furniture design, custom luxury furniture, handmade furniture, artisan furniture, bespoke furniture makers, designer furniture',
  openGraph: {
    title: 'Bespoke Furniture | Luxury Handcrafted Design | Blooming Furniture',
    description: 'Exclusive bespoke furniture design service creating luxury pieces tailored to your lifestyle. Premium materials, expert craftsmanship, lifetime quality.',
    images: ['/blooming-furniture.png'],
    type: 'website'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/bespoke-furniture'
  }
}

export default function BespokeFurniturePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Bespoke Furniture Design Services',
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
    'description': 'Luxury bespoke furniture design services creating unique, handcrafted pieces tailored to individual style and requirements.',
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': -33.0895,
        'longitude': 18.0371
      },
      'geoRadius': '100000'
    },
    'priceRange': '$$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5',
      'reviewCount': '47'
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
        <section className="relative py-20 lg:py-32 bg-dark-wood text-white-daisy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-golden-center mr-2" />
                <span className="text-golden-center uppercase tracking-wide">Exclusive Design Service</span>
                <Sparkles className="h-8 w-8 text-golden-center ml-2" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Bespoke Furniture Designed for Discerning Tastes
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Experience the luxury of furniture designed exclusively for you. Each piece is a unique work of art, 
                crafted by master artisans using the finest materials
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-consultation">
                  <Button size="lg" className="bg-golden-center text-dark-wood hover:bg-daisy-cream">
                    Schedule Design Consultation <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="border-golden-center text-golden-center hover:bg-golden-center hover:text-dark-wood">
                    View Bespoke Collections
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes It Bespoke */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark-wood">
                The Art of Bespoke Furniture
              </h2>
              <p className="text-lg text-forest-green">
                Bespoke furniture transcends ordinary custom work. It's a collaborative journey between you and our master craftsmen, 
                resulting in pieces that are truly one-of-a-kind
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Personal Story",
                  description: "Each piece tells your unique story, incorporating personal elements and memories into the design"
                },
                {
                  icon: Sparkles,
                  title: "Exclusive Design",
                  description: "Your furniture design will never be replicated, ensuring true exclusivity and individuality"
                },
                {
                  icon: Award,
                  title: "Museum Quality",
                  description: "Crafted to the highest standards using techniques passed down through generations"
                },
                {
                  icon: Leaf,
                  title: "Sustainable Luxury",
                  description: "Ethically sourced materials and eco-conscious practices without compromising on quality"
                },
                {
                  icon: Users,
                  title: "Collaborative Process",
                  description: "Work directly with designers and craftsmen throughout your furniture's creation"
                },
                {
                  icon: Clock,
                  title: "Timeless Investment",
                  description: "Heirloom-quality pieces designed to be cherished for generations"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <feature.icon className="h-12 w-12 text-golden-center mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-dark-wood">{feature.title}</h3>
                  <p className="text-forest-green">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bespoke Collections */}
        <section className="py-16 lg:py-24 bg-daisy-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-dark-wood">
              Bespoke Furniture Collections
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Heritage Collection</h3>
                <p className="text-forest-green mb-6">
                  Timeless designs inspired by classical furniture making traditions, reimagined for contemporary living. 
                  Each piece combines historical elegance with modern functionality.
                </p>
                <ul className="space-y-3 text-forest-green mb-6">
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Hand-carved details and traditional joinery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Premium hardwoods aged for stability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>French polish and hand-rubbed finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Customizable period-appropriate hardware</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-golden-center font-semibold hover:text-dark-wood transition-colors">
                  Explore Heritage Designs →
                </Link>
              </div>
              
              <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Contemporary Collection</h3>
                <p className="text-forest-green mb-6">
                  Modern aesthetic meets artisan craftsmanship. Clean lines and innovative materials create 
                  furniture that defines sophisticated contemporary spaces.
                </p>
                <ul className="space-y-3 text-forest-green mb-6">
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Minimalist designs with maximum impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Mixed materials including metals and glass</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Integrated technology solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Sustainable and innovative finishes</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-golden-center font-semibold hover:text-dark-wood transition-colors">
                  View Contemporary Pieces →
                </Link>
              </div>
              
              <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Artisan Collection</h3>
                <p className="text-forest-green mb-6">
                  Where furniture becomes art. Sculptural pieces that showcase exceptional craftsmanship 
                  and push the boundaries of traditional furniture design.
                </p>
                <ul className="space-y-3 text-forest-green mb-6">
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Live-edge and natural form designs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Exotic wood species and rare materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Artistic inlays and marquetry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Limited edition and signed pieces</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-golden-center font-semibold hover:text-dark-wood transition-colors">
                  Discover Artisan Works →
                </Link>
              </div>
              
              <div className="bg-white p-8 lg:p-12 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-dark-wood">Signature Collection</h3>
                <p className="text-forest-green mb-6">
                  The pinnacle of bespoke furniture. Completely custom designs created in collaboration 
                  with you, limited only by imagination.
                </p>
                <ul className="space-y-3 text-forest-green mb-6">
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Fully custom design process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>3D renderings and mock-ups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>Unlimited material options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-center mr-2">•</span>
                    <span>White-glove delivery worldwide</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-golden-center font-semibold hover:text-dark-wood transition-colors">
                  Begin Your Signature Piece →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Bespoke Experience */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-dark-wood">
              The Bespoke Experience
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto text-forest-green">
                <p className="mb-6">
                  Creating bespoke furniture is more than a transaction—it's a journey of discovery and creation. 
                  From your initial consultation to the moment your piece is unveiled, every step is designed to 
                  exceed expectations.
                </p>
                
                <div className="bg-golden-center/10 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-dark-wood">Your Journey Includes:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="font-bold text-dark-wood mr-2">1.</span>
                      <div>
                        <strong>Private Design Consultation:</strong> Meet with our lead designer in our showroom or your home
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-dark-wood mr-2">2.</span>
                      <div>
                        <strong>Concept Development:</strong> Collaborative design sessions to perfect your vision
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-dark-wood mr-2">3.</span>
                      <div>
                        <strong>Material Curation:</strong> Access to exclusive materials and finishes
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-dark-wood mr-2">4.</span>
                      <div>
                        <strong>Artisan Updates:</strong> Regular progress photos and workshop visits
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-dark-wood mr-2">5.</span>
                      <div>
                        <strong>White Glove Service:</strong> Professional delivery, installation, and styling
                      </div>
                    </li>
                  </ul>
                </div>
                
                <p className="text-center">
                  <span className="text-2xl font-bold text-dark-wood">Average Timeline: 8-16 weeks</span><br />
                  <span className="text-forest-green">Depending on complexity and materials</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 lg:py-24 bg-forest-green text-white-daisy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl lg:text-3xl italic mb-8">
                "The dining table Blooming Furniture created for us is more than furniture—it's where our family 
                creates memories. The attention to detail and quality is extraordinary."
              </blockquote>
              <cite className="text-golden-center font-semibold">— Michael & Sarah K., Cape Town</cite>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-golden-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-dark-wood">
              Begin Your Bespoke Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-forest-green">
              Experience the luxury of furniture designed exclusively for you. Schedule a private consultation 
              with our design team to begin creating your bespoke masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-consultation">
                <Button size="lg" className="bg-dark-wood text-white-daisy hover:bg-forest-green">
                  Book Private Consultation <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-dark-wood text-dark-wood hover:bg-dark-wood hover:text-white-daisy">
                  View Bespoke Portfolio
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-forest-green">
              Or call us directly at <a href="tel:+27793752588" className="font-bold underline">+27 79 375 2588</a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}