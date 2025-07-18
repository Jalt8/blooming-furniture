import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Furniture Restoration Service Areas | West Coast South Africa | Blooming Furniture",
  description: "Professional furniture restoration services across the West Coast, South Africa. Serving Langebaan, Saldanha Bay, Vredenburg, Paternoster and surrounding areas with expert craftsmanship.",
  keywords: "furniture restoration West Coast, furniture repair service areas, Langebaan furniture restoration, Saldanha Bay furniture repair, Vredenburg furniture services, Paternoster furniture restoration",
  openGraph: {
    title: "Furniture Restoration Service Areas | West Coast South Africa",
    description: "Professional furniture restoration services across the West Coast, South Africa. Serving Langebaan, Saldanha Bay, Vredenburg, Paternoster and surrounding areas.",
    url: "https://bloomingfurniture.co.za/service-areas",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Blooming Furniture - West Coast Service Areas",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/service-areas",
  },
};

const serviceAreas = [
  {
    name: "Langebaan",
    href: "/furniture-restoration-langebaan",
    description: "Professional furniture restoration in Langebaan with specialized coastal treatments",
    image: "/image_21.jpeg",
    services: ["Furniture Restoration", "Coastal Protection", "Antique Repair"],
    featured: true
  },
  {
    name: "Saldanha Bay",
    href: "/furniture-repair-saldanha-bay",
    description: "Expert furniture repair services for residential and commercial clients in Saldanha Bay",
    image: "/image_22.jpeg",
    services: ["Emergency Repairs", "Commercial Services", "Industrial Furniture"],
    featured: true
  },
  {
    name: "Vredenburg", 
    href: "/furniture-restoration-vredenburg",
    description: "Complete furniture restoration services for Vredenburg residents and businesses",
    image: "/image_23.jpeg",
    services: ["Antique Restoration", "Modern Makeovers", "Custom Refinishing"],
    featured: true
  },
  {
    name: "Paternoster",
    href: "/furniture-repair-paternoster", 
    description: "Premium furniture repair and restoration for Paternoster's coastal properties",
    image: "/image_24.jpeg",
    services: ["Holiday Home Care", "Luxury Restoration", "Salt Air Protection"],
    featured: true
  },
  {
    name: "Velddrif",
    href: "/contact",
    description: "Furniture restoration services for the fishing town of Velddrif",
    image: "/image_25.jpeg",
    services: ["Marine Environment Treatments", "Residential Services", "Boat Furniture"],
    featured: false
  },
  {
    name: "Hopefield",
    href: "/contact",
    description: "Professional furniture repair and restoration in Hopefield",
    image: "/image_26.jpeg", 
    services: ["Agricultural Community Services", "Family Furniture", "Heritage Pieces"],
    featured: false
  },
  {
    name: "St Helena Bay",
    href: "/contact",
    description: "Coastal furniture restoration services for St Helena Bay area",
    image: "/image_27.jpeg",
    services: ["Coastal Furniture Care", "Holiday Properties", "Fishing Lodge Furniture"], 
    featured: false
  },
  {
    name: "Yzerfontein",
    href: "/contact",
    description: "Expert furniture services for Yzerfontein coastal properties",
    image: "/image_28.jpeg",
    services: ["Beach House Furniture", "Salt Air Protection", "Modern Restoration"],
    featured: false
  }
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-green to-dark-wood text-white-daisy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Furniture Restoration Across the <span className="text-golden-center">West Coast</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional furniture restoration, repair, and refinishing services throughout 
            the Western Cape's beautiful West Coast region. From Langebaan to Paternoster, 
            we bring expert craftsmanship to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-consultation"
              className="bg-golden-center text-dark-wood px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy transition duration-300"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white-daisy text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-white-daisy hover:text-dark-wood transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-16 bg-white-daisy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-wood mb-4">
              Serving the Entire West Coast Region
            </h2>
            <p className="text-lg text-forest-green max-w-3xl mx-auto">
              With our base in Langebaan, we provide comprehensive furniture restoration 
              services throughout the West Coast, understanding the unique challenges of 
              coastal environments and local furniture styles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-golden-center mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark-wood mb-2">Extensive Coverage</h3>
              <p className="text-forest-green">
                Serving over 10 towns and communities across the West Coast region.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-golden-center mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark-wood mb-2">Local Service</h3>
              <p className="text-forest-green">
                Quick response times and convenient collection/delivery in all service areas.
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-golden-center mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark-wood mb-2">Coastal Expertise</h3>
              <p className="text-forest-green">
                Specialized knowledge of coastal furniture challenges and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Areas */}
      <section className="py-16 bg-daisy-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
            Primary Service Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.filter(area => area.featured).map((area, index) => (
              <div key={index} className="bg-white-daisy rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <Image
                  src={area.image}
                  alt={`Furniture restoration in ${area.name}`}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark-wood mb-3">{area.name}</h3>
                  <p className="text-forest-green mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-wood mb-2">Specialized Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-golden-center text-dark-wood px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={area.href}
                    className="inline-flex items-center text-forest-green hover:text-dark-wood font-semibold transition duration-300"
                  >
                    Learn More About {area.name} Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Areas */}
      <section className="py-16 bg-white-daisy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
            Additional Service Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.filter(area => !area.featured).map((area, index) => (
              <div key={index} className="bg-daisy-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <Image
                  src={area.image}
                  alt={`Furniture services in ${area.name}`}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-dark-wood mb-2">{area.name}</h3>
                  <p className="text-forest-green text-sm mb-3">{area.description}</p>
                  
                  <div className="mb-3">
                    {area.services.slice(0, 2).map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="inline-block bg-golden-center text-dark-wood px-2 py-1 rounded text-xs mr-2 mb-1"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={area.href}
                    className="text-forest-green hover:text-dark-wood text-sm font-semibold transition duration-300"
                  >
                    Get Quote for {area.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-16 bg-gradient-to-r from-forest-green to-dark-wood text-white-daisy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Commitment to the West Coast Community
              </h2>
              <p className="text-xl mb-6">
                We understand that each West Coast community has its unique character and furniture needs. 
                From traditional fishing village charm to modern coastal luxury, we adapt our services to 
                match local styles and requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-golden-center mr-3" />
                  <span>Local expertise in coastal furniture challenges</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-golden-center mr-3" />
                  <span>Convenient collection and delivery across all areas</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-golden-center mr-3" />
                  <span>Understanding of local architectural styles</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-golden-center mr-3" />
                  <span>Flexible scheduling for holiday home owners</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/image_29.jpeg"
                alt="West Coast furniture restoration services"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-forest-green text-white-daisy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Restore Your Furniture?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            No matter where you are on the West Coast, we're here to help restore and repair 
            your furniture with expert craftsmanship and local understanding.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 mr-3" />
              <span className="text-lg">(079) 375 2588</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3" />
              <span className="text-lg">Serving All West Coast Areas</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-6 w-6 mr-3" />
              <span className="text-lg">Mon-Fri 9am-6pm, Sat 10am-4pm</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-consultation"
              className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white-daisy text-white-daisy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy hover:text-dark-wood transition duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}