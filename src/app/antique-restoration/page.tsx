import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Crown, Shield, Clock, Award, Heart, Phone, MessageCircle, Check, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Antique Furniture Restoration West Coast | Heirloom Restoration Experts',
  description: 'Professional antique furniture restoration services on the West Coast. Preserve family heirlooms with expert craftsmanship. Traditional techniques for Yellowwood, Stinkwood & antique pieces.',
  keywords: 'antique restoration, antique furniture repair, heirloom restoration, Yellowwood restoration, Stinkwood furniture, vintage furniture restoration, West Coast antiques, period furniture restoration',
  openGraph: {
    title: 'Antique Furniture Restoration | Blooming Furniture',
    description: 'Expert restoration of antique and heirloom furniture using traditional techniques. Preserve your family treasures.',
    url: 'https://bloomingfurniture.co.za/antique-restoration',
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/antique-restoration',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Antique Furniture Restoration",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://bloomingfurniture.co.za",
    "name": "Blooming Furniture",
    "image": "https://bloomingfurniture.co.za/blooming-furniture.png",
    "telephone": "+27793752588"
  },
  "description": "Professional antique furniture restoration using traditional techniques. Specializing in preserving historical integrity while restoring functionality of heirloom pieces.",
  "offers": {
    "@type": "Offer",
    "priceRange": "$$"
  }
};

const specializations = [
  {
    title: "Period Furniture",
    description: "Victorian, Edwardian, Art Deco, and Colonial era pieces restored with period-appropriate techniques",
    icon: Crown
  },
  {
    title: "Heirloom Preservation",
    description: "Family treasures restored to preserve memories and value for future generations",
    icon: Heart
  },
  {
    title: "South African Antiques",
    description: "Yellowwood, Stinkwood, Kiaat, and other indigenous wood antiques",
    icon: Award
  },
  {
    title: "Structural Integrity",
    description: "Careful rebuilding and reinforcement while maintaining authenticity",
    icon: Shield
  }
];

const antiqueTypes = [
  "Victorian Furniture",
  "Edwardian Pieces",
  "Art Deco Items",
  "Colonial Furniture",
  "Cape Dutch Antiques",
  "Yellowwood Tables",
  "Stinkwood Chairs",
  "Vintage Cabinets",
  "Antique Desks",
  "Period Sideboards",
  "Heirloom Beds",
  "Old World Chests"
];

const restorationApproach = [
  {
    title: "Historical Research",
    description: "We research the period and style of your antique to ensure authentic restoration techniques and materials."
  },
  {
    title: "Minimal Intervention",
    description: "We preserve as much original material as possible, only replacing what's absolutely necessary."
  },
  {
    title: "Traditional Methods",
    description: "Using time-honored techniques like hide glue, French polish, and hand-rubbed finishes."
  },
  {
    title: "Documentation",
    description: "We photograph and document the entire process, providing you with a restoration history."
  },
  {
    title: "Reversible Repairs",
    description: "Where possible, we use reversible methods that future restorers can undo if needed."
  },
  {
    title: "Value Preservation",
    description: "Our approach maintains or enhances the value of your antique investment."
  }
];

export default function AntiqueRestorationPage() {
  return (
    <div className="min-h-screen bg-daisy-cream pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-dark-wood via-forest-green to-dark-wood text-white-daisy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-10 w-10 text-golden-center" />
                  <span className="text-golden-center font-semibold">Antique Restoration Specialists</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Preserve Your Family Heirlooms for Generations
                </h1>
                <p className="text-xl mb-6">
                  Expert restoration of antique and period furniture using traditional techniques. We understand the historical and sentimental value of your treasured pieces.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Period-appropriate restoration techniques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Preserve historical integrity & value</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-golden-center" />
                    <span>Free assessment & consultation</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold hover:bg-white-daisy transition duration-300"
                  >
                    Request Assessment
                  </Link>
                  <a
                    href="tel:+27793752588"
                    className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Expert
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/services/antique-restoration-hero.svg"
                  alt="Antique furniture restoration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white-daisy p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 fill-golden-center text-golden-center" />
                    <div>
                      <div className="font-bold text-dark-wood">10+ Years</div>
                      <div className="text-sm text-forest-green">Antique Expertise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Specializations */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Our Antique Restoration Specializations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializations.map((spec, idx) => (
                <div key={idx} className="text-center p-6 bg-daisy-cream rounded-lg hover:shadow-lg transition duration-300">
                  <spec.icon className="h-16 w-16 text-forest-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dark-wood mb-3">{spec.title}</h3>
                  <p className="text-forest-green">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Antiques */}
        <section className="py-16 bg-daisy-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Antiques We Restore
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-2xl mx-auto">
              From Victorian treasures to Cape Dutch heirlooms, we restore all types of antique furniture with care and expertise.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {antiqueTypes.map((type, idx) => (
                <div key={idx} className="bg-white-daisy p-4 rounded-lg text-center hover:bg-golden-center/10 transition duration-300 border border-golden-center/20">
                  <p className="font-semibold text-dark-wood">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-4">
              Our Antique Restoration Philosophy
            </h2>
            <p className="text-center text-forest-green mb-12 max-w-3xl mx-auto">
              We believe in preserving the authenticity and historical value of antique furniture while making it functional for modern use. Our approach balances preservation with practical restoration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restorationApproach.map((approach, idx) => (
                <div key={idx} className="bg-daisy-cream p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark-wood mb-3 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-forest-green" />
                    {approach.title}
                  </h3>
                  <p className="text-forest-green">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Traditional Techniques */}
        <section className="py-16 bg-forest-green text-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Traditional Restoration Techniques We Use
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-golden-center">Period Finishes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>French polishing (shellac)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Oil and wax finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Hand-rubbed varnishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Patina preservation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-golden-center">Traditional Joinery</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Hide glue repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Mortise and tenon reconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Dovetail joint repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Period-appropriate wood matching</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-golden-center">Structural Restoration</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Woodworm treatment & prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Crack and split repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Veneer restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Missing piece fabrication</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white-daisy/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-golden-center">Surface Restoration</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Gentle cleaning methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Water damage reversal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Scratch and dent filling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Color matching & touch-ups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 bg-white-daisy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark-wood text-center mb-12">
              Why Trust Your Heirlooms to Us?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Clock className="h-16 w-16 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">10+ Years Experience</h3>
                <p className="text-forest-green">Decade of expertise in antique and period furniture restoration</p>
              </div>
              <div className="text-center p-6">
                <Heart className="h-16 w-16 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Passion for History</h3>
                <p className="text-forest-green">We treat every antique with the respect and care it deserves</p>
              </div>
              <div className="text-center p-6">
                <Shield className="h-16 w-16 text-golden-center mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-wood mb-3">Value Preservation</h3>
                <p className="text-forest-green">Methods that maintain or enhance your antique's worth</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-dark-wood to-forest-green text-white-daisy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Crown className="h-16 w-16 text-golden-center mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Preserve Your Family Legacy</h2>
            <p className="text-xl mb-8">
              Let our experts assess your antique furniture and provide a detailed restoration plan. Free consultations available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-golden-center text-dark-wood px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white-daisy transition duration-300"
              >
                Request Free Assessment
              </Link>
              <a
                href="https://wa.me/27793752588"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-golden-center text-golden-center px-8 py-4 rounded-lg font-semibold text-lg hover:bg-golden-center hover:text-dark-wood transition duration-300 inline-flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}
