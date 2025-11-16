'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Star, Hammer, Paintbrush, RefreshCw, Truck } from 'lucide-react';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blooming Furniture",
  "description": "Professional furniture repair and restoration services in West Coast, South Africa",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Western Cape",
    "addressCountry": "South Africa",
    "addressLocality": "Cape Town"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0895,
    "longitude": 18.0371
  },
  "telephone": "+27793752588",
  "url": "https://bloomingfurniture.co.za/west-coast-furniture-repair",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -33.0895,
      "longitude": 18.0371
    },
    "geoRadius": "100000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Furniture Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Repair",
          "description": "Professional furniture repair services including structural repairs, joint reinforcement, and hardware replacement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Restoration",
          "description": "Complete furniture restoration including stripping, sanding, and re-polishing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furniture Refinishing",
          "description": "Furniture refinishing with custom colors and finishes"
        }
      }
    ]
  }
};

const WestCoastClient = () => {
  const serviceAreas = [
    'Cape Town', 'Saldanha Bay', 'Vredenburg', 'Langebaan', 'Paternoster', 
    'Velddrif', 'Hopefield', 'Yzerfontein', 'Dwarskersbos', 'Elands Bay', 'Lambert\'s Bay'
  ];

  const services = [
    {
      icon: Hammer,
      title: "Furniture Repairs",
      description: "Expert structural repairs, joint reinforcement, and hardware replacement for all types of furniture.",
      features: ["Broken chair repairs", "Table leg stabilization", "Drawer fixes", "Handle replacements"]
    },
    {
      icon: Paintbrush,
      title: "Furniture Restoration",
      description: "Complete restoration services including stripping, sanding, and refinishing to original beauty.",
      features: ["Antique restoration", "Wood refinishing", "Color matching", "Protective coating"]
    },
    {
      icon: RefreshCw,
      title: "Furniture Makeovers",
      description: "Transform your furniture with modern techniques and custom finishes.",
      features: ["Chalk paint finishes", "Custom colors", "Distressed effects", "Modern styling"]
    },
    {
      icon: Truck,
      title: "Collection & Delivery",
      description: "Convenient pickup and delivery service throughout the West Coast region.",
      features: ["Safe transportation", "Flexible scheduling", "Insured transit", "Free quotes"]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <div className="bg-daisy-cream min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-dark-wood mb-6">
                Furniture Repair West Coast South Africa
              </h1>
              <p className="text-xl md:text-2xl text-forest-green mb-8 max-w-4xl mx-auto">
                Professional furniture restoration and repair services based in Cape Town, serving Saldanha Bay, Vredenburg, Langebaan, and surrounding West Coast areas. Expert craftsmen bringing your beloved furniture back to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-forest-green text-white-daisy rounded-full text-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
                >
                  Get Free Quote
                </a>
                <a 
                  href="tel:+27793752588" 
                  className="px-8 py-4 bg-golden-center text-dark-wood rounded-full text-lg font-semibold hover:bg-daisy-cream transition-colors duration-300"
                >
                  Call Now: 079 375 2588
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <img
                  src="/images/portfolio/image_51.png"
                  alt="Furniture repair West Coast South Africa"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-dark-wood">Why Choose Blooming Furniture?</h2>
                <div className="space-y-4">
                  {[
                    "Over 10 years of furniture restoration experience",
                    "Serving all West Coast communities",
                    "Collection and delivery service available",
                    "Expert craftsmen using traditional techniques",
                    "Competitive pricing with transparent quotes",
                    "Fully insured and professional service"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-golden-center flex-shrink-0" />
                      <span className="text-forest-green">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white-daisy">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-dark-wood mb-4">
                Our Furniture Repair Services
              </h2>
              <p className="text-lg text-forest-green max-w-3xl mx-auto">
                Comprehensive furniture restoration and repair services for homes and businesses across the West Coast region.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-daisy-cream p-6 rounded-lg shadow-md"
                >
                  <service.icon className="w-12 h-12 text-forest-green mb-4" />
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{service.title}</h3>
                  <p className="text-forest-green mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-forest-green flex items-center">
                        <div className="w-1.5 h-1.5 bg-golden-center rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-dark-wood mb-4">
                West Coast Service Areas
              </h2>
              <p className="text-lg text-forest-green mb-8">
                Based in Cape Town, we proudly serve furniture repair and restoration needs throughout the West Coast region:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-golden-center p-8 rounded-lg"
              >
                <h3 className="text-2xl font-serif text-dark-wood mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="text-forest-green font-medium">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-forest-green mt-6 text-sm">
                  Don't see your area? Contact us - we may still be able to help!
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-dark-wood mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-forest-green" />
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-dark-wood">Phone:</span>
                      <a href="tel:+27793752588" className="text-forest-green hover:text-dark-wood ml-2">
                        079 375 2588
                      </a>
                    </div>
                    <div>
                      <span className="font-medium text-dark-wood">WhatsApp:</span>
                      <a href="https://wa.me/27793752588" className="text-forest-green hover:text-dark-wood ml-2">
                        079 375 2588
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-dark-wood mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-forest-green" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-forest-green">
                    <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                    <div>Saturday: 8:00 AM - 2:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery Teaser */}
        <section className="py-16 px-4 bg-white-daisy">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-dark-wood mb-4">
                West Coast Furniture Transformations
              </h2>
              <p className="text-lg text-forest-green mb-8">
                See how we've transformed furniture for families across the West Coast region.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { image: "image_39.jpeg", title: "Vintage Sideboard - Saldanha Bay" },
                { image: "image_7.jpeg", title: "Dining Set Makeover - Vredenburg" },
                { image: "image_31.jpeg", title: "Kitchen Refresh - Langebaan" }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-daisy-cream rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={`/images/portfolio/${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-dark-wood">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/portfolio" 
                className="inline-block px-8 py-3 bg-forest-green text-white-daisy rounded-full text-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
              >
                View Complete Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-golden-center">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-dark-wood mb-6">
                Ready to Restore Your Furniture?
              </h2>
              <p className="text-xl text-forest-green mb-8">
                Get a free quote for your furniture repair project. We serve all areas across the West Coast of South Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-forest-green text-white-daisy rounded-full text-lg font-semibold hover:bg-dark-wood transition-colors duration-300"
                >
                  Get Free Quote
                </a>
                <a 
                  href="/book-consultation" 
                  className="px-8 py-4 bg-white-daisy text-dark-wood rounded-full text-lg font-semibold hover:bg-daisy-cream transition-colors duration-300"
                >
                  Book Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WestCoastClient;