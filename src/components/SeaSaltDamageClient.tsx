'use client';

import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, AlertTriangle, Shield, Wrench, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function SeaSaltDamageClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Image */}
      <div className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            width={1200}
            height={600}
            src="/images/blog/salt-damage-guide.jpg"
            alt="Furniture damage from sea salt air on West Coast"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Table of Contents */}
        <div className="bg-daisy-cream p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-dark-wood mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Salt Damage Prevention Guide
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="#problem-overview" className="block text-forest-green hover:text-dark-wood">1. The Problem Overview</a>
            <a href="#science-salt-damage" className="block text-forest-green hover:text-dark-wood">2. Science of Salt Damage</a>
            <a href="#types-damage" className="block text-forest-green hover:text-dark-wood">3. Types of Damage</a>
            <a href="#early-warning-signs" className="block text-forest-green hover:text-dark-wood">4. Early Warning Signs</a>
            <a href="#prevention-strategies" className="block text-forest-green hover:text-dark-wood">5. Prevention Strategies</a>
            <a href="#repair-solutions" className="block text-forest-green hover:text-dark-wood">6. Repair Solutions</a>
            <a href="#professional-help" className="block text-forest-green hover:text-dark-wood">7. When to Get Professional Help</a>
            <a href="#cost-considerations" className="block text-forest-green hover:text-dark-wood">8. Cost Considerations</a>
          </nav>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-forest-green leading-relaxed">
            Living on the beautiful West Coast comes with hidden costs for your furniture. Understanding how sea salt affects 
            wood, metal, and upholstery helps you protect your investments and maintain your home's beauty despite coastal challenges.
          </p>
          
          <p className="text-lg text-forest-green leading-relaxed">
            This guide reveals the science behind salt damage, shows you how to identify early warning signs, and provides 
            practical prevention strategies that can save you thousands in replacement costs.
          </p>
        </div>

        {/* The Problem Overview */}
        <section id="problem-overview" className="mb-12">
          <div className="bg-daisy-cream rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-dark-wood mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
              The Silent Destroyer
            </h2>
            <p className="text-lg text-forest-green leading-relaxed">
              Sea salt is an invisible enemy that attacks your furniture 24/7, even when you can't see or smell the ocean. 
              Unlike other forms of damage that happen suddenly, salt damage is cumulative and accelerates over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">300%</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-wood mb-2">Faster Aging</h3>
              <p className="text-sm text-forest-green">Salt accelerates furniture aging by 300-500% compared to inland locations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-wood mb-2">Continuous Attack</h3>
              <p className="text-sm text-forest-green">Salt crystals work around the clock, even in low humidity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">5km+</span>
              </div>
              <h3 className="text-lg font-semibold text-dark-wood mb-2">Inland Reach</h3>
              <p className="text-sm text-forest-green">Salt air can affect furniture up to 5km inland from the coast</p>
            </div>
          </div>
        </section>

        {/* Science of Salt Damage */}
        <section id="science-salt-damage" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">The Science of Salt Damage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-daisy-cream rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Salt Crystal Formation</h3>
              <p className="text-forest-green mb-4">
                As ocean spray evaporates, it leaves behind tiny salt crystals that become airborne and travel inland. 
                These crystals are hygroscopic, meaning they attract and absorb moisture from the air.
              </p>
              <ul className="text-sm space-y-2 text-forest-green">
                <li>• Crystals settle on furniture surfaces</li>
                <li>• Attract moisture from humid air</li>
                <li>• Create localized corrosion points</li>
                <li>• Penetrate wood grain and fabric fibers</li>
              </ul>
            </div>
            
            <div className="bg-daisy-cream rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Accelerated Aging Process</h3>
              <p className="text-forest-green mb-4">
                Salt acts as a catalyst for oxidation and decay processes, accelerating normal aging by 300-500% 
                in coastal environments compared to inland locations.
              </p>
              <ul className="text-sm space-y-2 text-forest-green">
                <li>• Breaks down protective finishes</li>
                <li>• Promotes metal corrosion</li>
                <li>• Weakens wood fibers</li>
                <li>• Fades fabrics and leather</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types of Damage */}
        <section id="types-damage" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Types of Salt Damage</h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-dark-wood mb-4 flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-orange-600" />
                  Metal Hardware
                </h3>
                <p className="text-forest-green mb-4">
                  Hinges, handles, screws, and decorative elements suffer the most visible damage from salt exposure.
                </p>
                <div className="bg-daisy-cream p-4 rounded">
                  <h4 className="font-semibold text-dark-wood mb-2">Common Issues:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Rust stains and corrosion</li>
                    <li>• Pitting and surface erosion</li>
                    <li>• Seized mechanisms</li>
                    <li>• Discoloration and staining</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white-daisy border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-dark-wood mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Wood Surfaces
                </h3>
                <p className="text-forest-green mb-4">
                  Wood absorbs salt crystals, leading to expansion, contraction, and eventual structural damage. Learn how to protect your pieces in our <Link href="/blog/how-to-care-for-wooden-furniture-coastal-climate" className="text-dark-wood font-semibold hover:underline">wooden furniture coastal care guide</Link>.
                </p>
                <div className="bg-daisy-cream p-4 rounded">
                  <h4 className="font-semibold text-dark-wood mb-2">Common Issues:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Warping and splitting</li>
                    <li>• Finish deterioration</li>
                    <li>• Joint separation</li>
                    <li>• Surface roughening</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white-daisy border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Upholstery and Fabric</h3>
              <p className="text-forest-green mb-4">
                Salt crystals penetrate fabric fibers, attracting moisture that promotes mold, mildew, and fabric degradation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark-wood mb-2">Visible Signs:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• White crystalline deposits</li>
                    <li>• Staining and discoloration</li>
                    <li>• Fabric stiffening</li>
                    <li>• Musty odors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-wood mb-2">Hidden Damage:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Fiber weakening</li>
                    <li>• Mold growth</li>
                    <li>• Foam deterioration</li>
                    <li>• Spring corrosion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early Warning Signs */}
        <section id="early-warning-signs" className="mb-12">
          <div className="bg-daisy-cream rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-dark-wood mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 text-yellow-600" />
              Early Warning Signs
            </h2>
            <p className="text-forest-green">
              Catching salt damage early can save you thousands in restoration costs. Look for these subtle signs 
              that indicate your furniture is under attack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white-daisy border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4 text-red-600">Immediate Concerns</h3>
              <ul className="space-y-3 text-forest-green">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>White, crusty deposits on surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Rust spots on metal hardware</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Sticky or rough texture on wood</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Musty odors from upholstery</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white-daisy border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4 text-orange-600">Developing Issues</h3>
              <ul className="space-y-3 text-forest-green">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Finish looking dull or cloudy</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Drawers or doors sticking</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Fabric feeling stiff or brittle</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Loose joints or wobbly legs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prevention Strategies */}
        <section id="prevention-strategies" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Prevention Strategies</h2>
          
          <div className="space-y-8">
            <div className="bg-daisy-cream rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-600" />
                Protective Measures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark-wood mb-3">Regular Maintenance</h4>
                  <ul className="text-sm space-y-2 text-forest-green">
                    <li>• Weekly dusting with microfiber cloth</li>
                    <li>• Monthly deep cleaning with appropriate products</li>
                    <li>• Quarterly waxing of wood surfaces</li>
                    <li>• Annual professional inspection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-wood mb-3">Environmental Controls</h4>
                  <ul className="text-sm space-y-2 text-forest-green">
                    <li>• Use dehumidifiers in humid seasons</li>
                    <li>• Position furniture away from windows</li>
                    <li>• Install air purifiers to reduce salt particles</li>
                    <li>• Maintain consistent indoor temperature</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-daisy-cream rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Protective Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-dark-wood mb-2">For Wood</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Marine-grade polyurethane</li>
                    <li>• Carnauba wax</li>
                    <li>• Tung oil finish</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-wood mb-2">For Metal</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Corrosion inhibitor sprays</li>
                    <li>• Marine wax</li>
                    <li>• Clear protective coatings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-wood mb-2">For Fabric</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Fabric protector sprays</li>
                    <li>• Moisture barrier treatments</li>
                    <li>• Regular professional cleaning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Solutions */}
        <section id="repair-solutions" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Repair Solutions</h2>
          
          <div className="bg-daisy-cream rounded-lg p-6">
            <h3 className="text-xl font-bold text-dark-wood mb-4">When Damage Occurs</h3>
            <p className="text-forest-green mb-6">
              Early intervention is crucial. Here's what you can do for different types of damage, 
              and when it's time to call professionals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white-daisy border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-dark-wood mb-3 text-red-600">DIY Fixes</h4>
                <ul className="space-y-2 text-forest-green">
                  <li>• Light surface cleaning with fresh water</li>
                  <li>• Gentle sanding of minor surface roughness</li>
                  <li>• Application of protective finishes</li>
                  <li>• Replacement of heavily corroded hardware</li>
                </ul>
              </div>
              
              <div className="bg-white-daisy border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-dark-wood mb-3 text-yellow-600">Professional Required</h4>
                <ul className="space-y-2 text-forest-green">
                  <li>• Structural damage to wood joints</li>
                  <li>• Extensive finish deterioration</li>
                  <li>• Upholstery replacement</li>
                  <li>• Antique or valuable pieces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Get Professional Help */}
        <section id="professional-help" className="mb-12">
          <div className="bg-white-daisy border border-green-200 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-dark-wood mb-4 flex items-center">
              <User className="h-6 w-6 mr-3 text-green-600" />
              When to Call Professionals
            </h2>
            <p className="text-forest-green mb-6">
              Professional restoration becomes necessary when damage threatens the structural integrity 
              or significant value of your furniture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-dark-wood mb-3">Signs You Need Help</h3>
                <ul className="space-y-2 text-forest-green">
                  <li>• Visible structural damage</li>
                  <li>• Extensive finish failure</li>
                  <li>• Valuable or antique pieces</li>
                  <li>• Repeated DIY failures</li>
                  <li>• Insurance claim requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-wood mb-3">What Professionals Offer</h3>
                <ul className="space-y-2 text-forest-green">
                  <li>• Damage assessment and documentation</li>
                  <li>• Specialized tools and techniques</li>
                  <li>• Access to commercial-grade products</li>
                  <li>• Warranty on restoration work</li>
                  <li>• Preservation of antique value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Considerations */}
        <section id="cost-considerations" className="mb-12">
          <div className="bg-daisy-cream rounded-lg p-6">
            <h2 className="text-3xl font-bold text-dark-wood mb-4">Cost Considerations</h2>
            <p className="text-forest-green mb-6">
              Understanding the costs involved helps you make informed decisions about prevention versus repair.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white-daisy rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Prevention</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">R500-2000</p>
                <p className="text-sm text-forest-green">Annual maintenance and protection</p>
              </div>
              <div className="bg-white-daisy rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Minor Repairs</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-2">R2000-8000</p>
                <p className="text-sm text-forest-green">Early intervention repairs</p>
              </div>
              <div className="bg-white-daisy rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-dark-wood mb-2">Major Restoration</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">R8000-25000+</p>
                <p className="text-sm text-forest-green">Extensive damage repair</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="bg-gradient-to-r from-forest-green to-dark-wood text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Protect Your West Coast Investment</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't let sea salt destroy your beautiful furniture. <Link href="/furniture-repair-saldanha-bay" className="text-white font-semibold underline hover:opacity-80">Professional assessment and protection</Link> can save thousands in replacement costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-forest-green py-3 px-6 rounded-lg font-semibold hover:bg-daisy-cream transition-colors duration-300"
            >
              Get Salt Damage Assessment
            </Link>
            <Link
              href="/blog/complete-guide-furniture-restoration-west-coast"
              className="border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors duration-300"
            >
              Read Complete Coastal Guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}