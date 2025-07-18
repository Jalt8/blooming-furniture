import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Blooming Furniture | Get Your Free Restoration Consultation",
  description: "Ready to restore your cherished furniture? Contact us for a free consultation. Expert furniture restoration services in West Coast South Africa. Call, email, or visit our workshop.",
  keywords: "contact blooming furniture, free restoration consultation, furniture restoration quote, furniture repair West Coast, restoration consultation",
  openGraph: {
    title: "Contact Blooming Furniture | Free Restoration Consultation",
    description: "Expert furniture restoration services in West Coast South Africa. Get your free consultation today for professional furniture repair and refinishing.",
    url: "https://bloomingfurniture.co.za/contact",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/blooming-furniture.png",
        width: 800,
        height: 600,
        alt: "Contact Blooming Furniture - Expert Restoration Services",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bloomingfurniture.co.za/contact",
  "name": "Blooming Furniture - Restoration & Refurbishment",
  "description": "Professional furniture restoration and repair services in West Coast South Africa. Expert craftsmanship serving Langebaan, Saldanha Bay, Vredenburg, and surrounding areas.",
  "url": "https://bloomingfurniture.co.za",
  "telephone": "(079) 375 2588",
  "email": "info@bloomingfurniture.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Langebaan",
    "addressLocality": "Langebaan",
    "addressRegion": "Western Cape",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.0895,
    "longitude": 18.0371
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Langebaan"
    },
    {
      "@type": "City", 
      "name": "Saldanha Bay"
    },
    {
      "@type": "City",
      "name": "Vredenburg"
    },
    {
      "@type": "City",
      "name": "Paternoster"
    }
  ],
  "serviceType": [
    "Furniture Restoration",
    "Furniture Repair", 
    "Furniture Refinishing",
    "Antique Restoration",
    "Wood Furniture Repair"
  ],
  "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
  "priceRange": "$$"
};

const ContactPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <div className="min-h-screen bg-daisy-cream pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-dark-wood mb-12">
            Start Your Furniture Restoration Journey
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white-daisy shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-dark-wood mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-forest-green mr-4" />
                    <span className="text-dark-wood">(079) 375 2588</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-forest-green mr-4" />
                    <span className="text-dark-wood">info@bloomingfurniture.co.za</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-forest-green mr-4" />
                    <span className="text-dark-wood">Langebaan, Western Cape, South Africa</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-forest-green mr-4" />
                    <span className="text-dark-wood">Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
                  </div>
                </div>
              </div>
              <div className="bg-golden-center p-4">
                <h3 className="text-dark-wood text-lg font-semibold mb-2">Quick Response Promise</h3>
                <p className="text-forest-green">We aim to respond to all inquiries within 24 hours.</p>
              </div>
            </div>

            <div className="bg-white-daisy shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-dark-wood mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white-daisy shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-dark-wood mb-6">Visit Our Workshop</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7462421127584!2d18.03714!3d-33.089459999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8040b11b2fc7a0cf%3A0x630296ab5098f51a!2sBlooming%20Furniture%20-%20Restoration%20%26%20Refurbishment!5e0!3m2!1sen!2sza!4v1748964384972!5m2!1sen!2sza"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;