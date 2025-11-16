import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Award, Sparkles, Eye, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: "Grocery Store Custom Signage - Hand-Painted Display System | Blooming Furniture",
  description: "See the complete transformation of grocery store visual merchandising with artisan hand-painted signage across bakery, produce, wine, and egg departments. Custom chalkboard-style display headers.",
  keywords: "custom store signage, hand-painted signs, grocery store displays, bakery signage, chalkboard art, retail merchandising, artisan signage",
  openGraph: {
    title: "Grocery Store Custom Signage - Artisan Display System",
    description: "Professional hand-painted signage system transforming grocery store departments with charming chalkboard-style artwork and cohesive visual merchandising.",
    url: "https://bloomingfurniture.co.za/portfolio/grocery-store-signage",
    type: "article",
    locale: "en_ZA",
    images: [
      {
        url: "/images/portfolio/image_23.jpeg",
        width: 800,
        height: 600,
        alt: "Grocery Store Custom Signage - Bakery Department",
      },
    ],
  },
  alternates: {
    canonical: "https://bloomingfurniture.co.za/portfolio/grocery-store-signage",
  },
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Grocery Store Custom Signage - Complete Hand-Painted Display System",
  "description": "Professional hand-painted signage project transforming grocery store visual merchandising with artisan-quality display headers across bakery, produce, wine, and egg departments.",
  "creator": {
    "@type": "Organization",
    "name": "Blooming Furniture",
    "url": "https://bloomingfurniture.co.za"
  },
  "image": "/images/portfolio/image_23.jpeg",
  "dateCreated": "2025-11-07",
  "keywords": ["custom signage", "hand-painted", "grocery store", "chalkboard art", "retail displays"]
};

export default function GroceryStoreSignage() {
  const departments = [
    {
      name: "🥖 Bakery Department",
      description: "Comprehensive bakery signage system with multiple coordinating signs",
      signs: [
        {
          title: "Honey on Toast Feature Sign",
          details: "Charming illustrated bread and butter artwork with hand-lettered messaging",
          image: "/images/portfolio/image_17.jpeg"
        },
        {
          title: "VARS BROOD (Fresh Bread) Header",
          details: "Traditional Dutch-inspired bakery signage with bread illustrations",
          image: "/images/portfolio/image_18.jpeg"
        },
        {
          title: "BAKERY Main Header",
          details: "Elegant department header featuring decorative wheat sheaf artwork",
          image: "/images/portfolio/image_19.jpeg"
        },
        {
          title: "I Love Baking Display",
          details: "Playful rolling pin design with 'Just roll with it' messaging",
          image: "/images/portfolio/image_20.jpeg"
        },
        {
          title: "Bake It Section Signs",
          details: "Multiple coordinating signs for rolls and baked goods with heart details",
          image: "/images/portfolio/image_21.jpeg"
        },
        {
          title: "Wheat Decoration Detail",
          details: "Close-up of hand-painted wheat motif showing artistic craftsmanship",
          image: "/images/portfolio/image_22.jpeg"
        },
        {
          title: "Bakery Section Overview",
          details: "Full installation view of coordinated bakery signage system",
          image: "/images/portfolio/image_23.jpeg"
        },
        {
          title: "Freshly Baked MMM Sign",
          details: "Appetizing messaging with Foot Long bread section header",
          image: "/images/portfolio/image_24.jpeg"
        },
        {
          title: "Baked Rolls & Bread Headers",
          details: "Department section dividers with consistent styling",
          image: "/images/portfolio/image_25.jpeg"
        },
        {
          title: "Bread of Life Feature",
          details: "Inspirational messaging with decorative wheat motif artwork",
          image: "/images/portfolio/image_26.jpeg"
        }
      ]
    },
    {
      name: "🥕 Produce Department",
      description: "Vibrant hand-painted vegetable artwork creating fresh, inviting atmosphere",
      signs: [
        {
          title: "Produce Section Header",
          details: "Colorful hand-painted pumpkins, peppers, and eggplant artwork above fresh produce display",
          image: "/images/portfolio/image_30.jpeg"
        },
        {
          title: "Vegetable Artwork Detail",
          details: "Close-up of detailed hand-painted vegetable illustrations",
          image: "/images/portfolio/image_28.jpeg"
        }
      ]
    },
    {
      name: "🥚 Egg Department",
      description: "Elegant cream finish with sophisticated gold metallic lettering",
      signs: [
        {
          title: "EGGS Department Header",
          details: "Cream-colored background with refined gold 'EGGS' lettering creating upscale aesthetic",
          image: "/images/portfolio/image_29.jpeg"
        }
      ]
    },
    {
      name: "🍷 Wine Section",
      description: "Decorative grape artwork for beverage department",
      signs: [
        {
          title: "Wine Section Signage",
          details: "Artistic grape cluster artwork complementing wine display",
          image: "/images/portfolio/image_27.jpeg"
        }
      ]
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
                  🎨 Grocery Store Custom Signage
                </h1>
                <p className="text-xl text-forest-green mb-6">
                  Complete Hand-Painted Display System
                </p>
                <p className="text-lg text-forest-green leading-relaxed mb-6">
                  A comprehensive store-wide signage project transforming visual merchandising across
                  multiple departments. Hand-painted chalkboard-style artwork brings warmth, authenticity,
                  and artisan quality to the shopping experience.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">4 weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-golden-center mr-2" />
                    <span className="text-forest-green">Multi-Department System</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/portfolio/image_23.jpeg"
                  alt="Grocery Store Bakery Signage - Complete Installation"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-golden-center text-dark-wood px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Palette className="h-4 w-4 mr-1" />
                    <span className="font-semibold">Artisan Signage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Scope */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood mb-8 text-center">
              Project Scope
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Custom Artwork",
                  description: "Hand-painted illustrations featuring bread, vegetables, grapes, and decorative motifs"
                },
                {
                  icon: "✍️",
                  title: "Professional Lettering",
                  description: "Various typography styles including serif, script, and casual hand-drawn fonts"
                },
                {
                  icon: "🖌️",
                  title: "Chalkboard Aesthetic",
                  description: "Rustic dark background with vibrant painted elements creating authentic artisan feel"
                },
                {
                  icon: "🛡️",
                  title: "Durable Protection",
                  description: "Clear coating for longevity in high-traffic retail environment"
                }
              ].map((scope, index) => (
                <div key={index} className="bg-white-daisy p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{scope.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-wood mb-3">{scope.title}</h3>
                  <p className="text-forest-green">{scope.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Galleries */}
        {departments.map((dept, deptIndex) => (
          <section key={deptIndex} className={`py-16 ${deptIndex % 2 === 0 ? 'bg-white-daisy' : 'bg-daisy-cream'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-dark-wood mb-4 text-center">
                {dept.name}
              </h2>
              <p className="text-center text-forest-green mb-12 max-w-3xl mx-auto">
                {dept.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.signs.map((sign, signIndex) => (
                  <div key={signIndex} className="bg-white-daisy rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={sign.image}
                      alt={sign.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-dark-wood mb-2">{sign.title}</h3>
                      <p className="text-sm text-forest-green">{sign.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Design Elements */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Design Excellence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: <Palette className="h-8 w-8 text-golden-center" />,
                  title: "Visual Cohesion",
                  description: "Consistent dark background color scheme and complementary artwork style creates unified store identity across all departments."
                },
                {
                  icon: <Eye className="h-8 w-8 text-golden-center" />,
                  title: "Detailed Illustrations",
                  description: "Hand-painted food artwork adds warmth and authenticity, elevating product presentation and customer engagement."
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-golden-center" />,
                  title: "Typography Variety",
                  description: "Multiple lettering styles from elegant serif to playful hand-drawn create visual interest while maintaining readability."
                },
                {
                  icon: <Award className="h-8 w-8 text-golden-center" />,
                  title: "Retail Durability",
                  description: "Professional clear coating ensures signs remain vibrant and attractive through years of daily retail use."
                }
              ].map((element, index) => (
                <div key={index} className="bg-white-daisy/10 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {element.icon}
                    <h3 className="text-xl font-semibold text-golden-center ml-3">{element.title}</h3>
                  </div>
                  <p className="text-white-daisy">{element.description}</p>
                </div>
              ))}
            </div>

            {/* Featured Installation */}
            <div className="bg-golden-center/20 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <img
                  src="/images/portfolio/image_28.jpeg"
                  alt="Produce section with vibrant vegetable artwork"
                  className="rounded-lg w-full h-80 object-cover"
                />
                <img
                  src="/images/portfolio/image_23.jpeg"
                  alt="Bakery section with I Love Baking signage"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
              <blockquote className="text-2xl italic text-golden-center mb-4 text-center">
                "The hand-painted signs completely transformed our store atmosphere. Customers constantly compliment the artwork!"
              </blockquote>
              <cite className="text-white-daisy font-semibold block text-center">— Store Manager</cite>
            </div>
          </div>
        </section>

        {/* Artistic Techniques */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Professional Craftsmanship
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Illustration",
                  description: "Hand-painted food artwork including bread, vegetables, grapes, and wheat",
                  benefit: "Authentic artisan quality"
                },
                {
                  title: "Chalkboard Styling",
                  description: "Dark background with vibrant painted elements for rustic appeal",
                  benefit: "Warm inviting aesthetic"
                },
                {
                  title: "Multi-Style Lettering",
                  description: "Professional typography ranging from elegant to playful",
                  benefit: "Visual variety and interest"
                },
                {
                  title: "Color Coordination",
                  description: "Consistent palette across departments for cohesive branding",
                  benefit: "Unified store identity"
                },
                {
                  title: "Protective Coating",
                  description: "Clear finish for durability in retail environment",
                  benefit: "Long-lasting vibrancy"
                },
                {
                  title: "Department Integration",
                  description: "Coordinated signage system across bakery, produce, wine, and eggs",
                  benefit: "Complete visual merchandising"
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

        {/* Featured Signs Gallery */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark-wood mb-12">
              Signature Pieces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: "/images/portfolio/image_19.jpeg", caption: "Bakery header with wheat sheaf" },
                { src: "/images/portfolio/image_29.jpeg", caption: "Elegant gold EGGS lettering" },
                { src: "/images/portfolio/image_30.jpeg", caption: "Vibrant produce artwork" },
                { src: "/images/portfolio/image_20.jpeg", caption: "Playful rolling pin design" }
              ].map((image, index) => (
                <div key={index} className="bg-daisy-cream rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover"
                  />
                  <p className="p-4 text-sm text-forest-green text-center">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-golden-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-dark-wood mb-6">
              Need Custom Signage for Your Business?
            </h2>
            <p className="text-lg text-forest-green mb-8">
              We create professional hand-painted signage that elevates your retail space and enhances customer experience.
              Let us design a custom visual merchandising system for your store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-dark-wood text-white-daisy px-8 py-3 rounded-lg font-semibold hover:bg-forest-green transition duration-300"
              >
                Get Your Custom Signage Quote
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
