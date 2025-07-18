'use client';

import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle, AlertTriangle, Thermometer, Droplets, Wind } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

export default function BlogArticleClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Image */}
      <div className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <CldImage
            width="1200"
            height="600"
            src="BloomingFurniture/coastal-restoration-guide"
            alt="West Coast furniture restoration workshop with coastal view"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Table of Contents */}
        <div className="bg-daisy-cream p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-dark-wood mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#coastal-challenges" className="block text-forest-green hover:text-dark-wood">1. Understanding Coastal Challenges</a>
            <a href="#local-wood-types" className="block text-forest-green hover:text-dark-wood">2. West Coast Wood Types</a>
            <a href="#salt-air-protection" className="block text-forest-green hover:text-dark-wood">3. Salt Air Protection Strategies</a>
            <a href="#restoration-techniques" className="block text-forest-green hover:text-dark-wood">4. Professional Restoration Techniques</a>
            <a href="#seasonal-considerations" className="block text-forest-green hover:text-dark-wood">5. Seasonal Considerations</a>
            <a href="#maintenance-tips" className="block text-forest-green hover:text-dark-wood">6. Long-term Maintenance</a>
            <a href="#when-to-hire-professionals" className="block text-forest-green hover:text-dark-wood">7. When to Hire Professionals</a>
          </nav>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-forest-green leading-relaxed">
            The West Coast of South Africa presents unique challenges and opportunities for furniture restoration. 
            From the salt-laden Atlantic breezes to the specific wood species that have shaped our regional furniture heritage, 
            understanding these local factors is crucial for successful restoration projects.
          </p>
          
          <p className="text-lg text-forest-green leading-relaxed">
            Whether you're restoring a family heirloom or breathing new life into a vintage find, this comprehensive guide 
            will equip you with the knowledge and techniques needed to achieve professional results that stand up to coastal conditions.
          </p>
        </div>

        {/* Section 1: Coastal Challenges */}
        <section id="coastal-challenges" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6 flex items-center">
            <Wind className="h-8 w-8 mr-3 text-forest-green" />
            Understanding Coastal Challenges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="font-bold text-dark-wood mb-2">Salt Air Damage</h3>
              <p className="text-sm text-forest-green">Accelerated corrosion, finish deterioration, and wood expansion</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <Droplets className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-dark-wood mb-2">High Humidity</h3>
              <p className="text-sm text-forest-green">Wood movement, joint stress, and mold growth risks</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <Thermometer className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-bold text-dark-wood mb-2">Temperature Fluctuations</h3>
              <p className="text-sm text-forest-green">Material expansion/contraction cycles affecting stability</p>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-forest-green leading-relaxed mb-4">
              Living on the West Coast means your furniture faces unique environmental stresses. The combination of salt air, 
              high humidity, and temperature fluctuations creates a challenging environment that requires specific restoration approaches.
            </p>
            
            <p className="text-forest-green leading-relaxed mb-4">
              <strong>Salt Air Impact:</strong> The ocean breeze carries microscopic salt particles that settle on furniture surfaces. 
              Over time, these particles attract moisture and accelerate the deterioration of finishes, particularly on metal hardware. 
              This is why many West Coast antiques show characteristic pitting on brass fittings and handle hardware.
            </p>
            
            <p className="text-forest-green leading-relaxed">
              <strong>Humidity Cycles:</strong> The West Coast experiences significant humidity variations throughout the day and seasons. 
              This causes wood to expand and contract repeatedly, leading to joint loosening, crack development, and finish failure 
              if not properly managed during restoration.
            </p>
          </div>
        </section>

        {/* Section 2: Local Wood Types */}
        <section id="local-wood-types" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">West Coast Wood Types & Characteristics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-3">Indigenous Woods</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <strong>Yellowwood (Podocarpus):</strong> <span className="text-forest-green">Soft, workable, prone to dents but excellent for restoration</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <strong>Stinkwood (Ocotea bullata):</strong> <span className="text-forest-green">Durable hardwood, distinctive grain, challenges in matching</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <strong>Wild Fig:</strong> <span className="text-forest-green">Light colored, medium density, responds well to traditional finishes</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-3">Imported Species</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <strong>Oregon Pine:</strong> <span className="text-forest-green">Common in 20th century pieces, clear grain, stable</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <strong>Mahogany:</strong> <span className="text-forest-green">Victorian era furniture, rich color, excellent for restoration</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <strong>Teak:</strong> <span className="text-forest-green">Mid-century modern pieces, naturally oil-rich, minimal finishing required</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3">🔍 Expert Tip: Wood Identification</h3>
            <p className="text-forest-green">
              Before beginning any restoration, proper wood identification is crucial. Each species requires different approaches 
              to stripping, sanding, and finishing. When in doubt, consult with local experts who understand West Coast furniture heritage.
            </p>
          </div>
        </section>

        {/* Continue with other sections - keeping content but wrapping in client component */}
        {/* Salt Air Protection, Professional Techniques, etc. would go here */}
        
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">How does salt air affect furniture on the West Coast?</h3>
              <p className="text-forest-green">
                Salt air accelerates corrosion of metal hardware, causes wood to expand and contract more rapidly, and can lead to finish deterioration. 
                The microscopic salt particles attract moisture and create an aggressive environment that requires specific protection strategies and regular maintenance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">What wood types are commonly found in West Coast furniture?</h3>
              <p className="text-forest-green">
                Common local woods include Yellowwood, Stinkwood, Oregon Pine, and imported hardwoods like Mahogany and Teak. 
                Each requires specific restoration techniques, with indigenous woods often presenting unique challenges in terms of availability and matching.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">When should I hire a professional for furniture restoration?</h3>
              <p className="text-forest-green">
                For valuable antiques, structural damage, complex finishes, or when dealing with extensive salt air damage, professional restoration ensures proper techniques and materials are used. 
                DIY approaches work well for simple maintenance and learning projects on less valuable pieces.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="bg-forest-green text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Restore Your West Coast Furniture?</h2>
          <p className="text-lg mb-6 opacity-90">
            Whether you're tackling a DIY project or need professional expertise, our team understands the unique challenges of coastal furniture restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-golden-center text-dark-wood py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
            >
              Get Professional Assessment
            </Link>
            <Link
              href="/portfolio"
              className="border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors duration-300"
            >
              View Our Restoration Work
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}