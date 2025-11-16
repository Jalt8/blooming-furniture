'use client';

import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Crown, MapPin, Shield, Award, Camera, BookOpen, Users, Star } from 'lucide-react';
import Image from 'next/image';

export default function AntiqueRestorationClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Image */}
      <div className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <CldImage
            width="1200"
            height="600"
            src="BloomingFurniture/antique-heritage-guide"
            alt="Victorian furniture restoration showcasing West Coast heritage pieces"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Table of Contents */}
        <div className="bg-daisy-cream p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-dark-wood mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Heritage Restoration Guide
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="#heritage-timeline" className="block text-forest-green hover:text-dark-wood">1. West Coast Furniture Heritage Timeline</a>
            <a href="#period-identification" className="block text-forest-green hover:text-dark-wood">2. Period Style Identification</a>
            <a href="#authentication-methods" className="block text-forest-green hover:text-dark-wood">3. Authentication Methods</a>
            <a href="#restoration-vs-conservation" className="block text-forest-green hover:text-dark-wood">4. Restoration vs Conservation</a>
            <a href="#historical-techniques" className="block text-forest-green hover:text-dark-wood">5. Period-Appropriate Techniques</a>
            <a href="#documentation-preservation" className="block text-forest-green hover:text-dark-wood">6. Documentation & Provenance</a>
            <a href="#market-values" className="block text-forest-green hover:text-dark-wood">7. Understanding Market Values</a>
            <a href="#professional-assessment" className="block text-forest-green hover:text-dark-wood">8. Professional Assessment Guide</a>
          </nav>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-forest-green leading-relaxed">
            The West Coast of South Africa holds a treasure trove of furniture heritage, spanning from indigenous craftsmanship 
            to colonial imports and Victorian grandeur. Each piece tells a story of the people, cultures, and historical events 
            that shaped our region. Understanding this heritage is crucial for proper restoration that preserves both beauty and historical significance.
          </p>
          
          <p className="text-lg text-forest-green leading-relaxed">
            This comprehensive guide will help you navigate the complex world of antique furniture restoration, ensuring you 
            preserve the historical integrity while returning pieces to functional beauty. Whether you own a family heirloom 
            or have discovered a hidden gem, this guide provides the expertise needed for authentic restoration.
          </p>
        </div>

        {/* Heritage Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
            <Crown className="h-8 w-8 text-amber-600 mb-3" />
            <h3 className="font-bold text-dark-wood mb-2">Colonial Era</h3>
            <p className="text-sm text-forest-green">1652-1800: Dutch, French Huguenot, and British influences</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
            <Award className="h-8 w-8 text-purple-600 mb-3" />
            <h3 className="font-bold text-dark-wood mb-2">Victorian Period</h3>
            <p className="text-sm text-forest-green">1837-1901: Ornate designs and imported luxury pieces</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
            <Users className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-bold text-dark-wood mb-2">Union & Modern</h3>
            <p className="text-sm text-forest-green">1910-present: South African identity and design evolution</p>
          </div>
        </div>

        {/* Section 1: Heritage Timeline */}
        <section id="heritage-timeline" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6 flex items-center">
            <Calendar className="h-8 w-8 mr-3 text-forest-green" />
            West Coast Furniture Heritage Timeline
          </h2>
          
          <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-dark-wood mb-3">1650s-1795: Dutch Colonial Period</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Characteristics:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Heavy, functional designs</li>
                    <li>• Indigenous Yellowwood and Stinkwood</li>
                    <li>• Dutch joinery techniques</li>
                    <li>• Brass corner reinforcements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Common Pieces:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Kas (large wardrobes)</li>
                    <li>• Riempie chairs</li>
                    <li>• Yellow-wood tables</li>
                    <li>• Storage chests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-dark-wood mb-3">1795-1820: British Colonial Transition</h3>
              <div className="grid grid-cols-1 md:grid-2 gap-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Influences:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Georgian style imports</li>
                    <li>• Mahogany becomes popular</li>
                    <li>• Refined proportions</li>
                    <li>• Military furniture styles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-dark-wood mb-3">1837-1901: Victorian Era</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Hallmarks:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Ornate carving and upholstery</li>
                    <li>• Imported hardwoods</li>
                    <li>• Machine-made components</li>
                    <li>• Status symbol furniture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Popular Styles:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Gothic Revival</li>
                    <li>• Rococo Revival</li>
                    <li>• Renaissance Revival</li>
                    <li>• Aesthetic Movement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-dark-wood mb-3">1910-1950: Union Period</h3>
              <div className="prose max-w-none">
                <p className="text-forest-green">
                  Emergence of distinctly South African furniture styles, combining European techniques with local materials 
                  and African influences. Art Deco and Arts & Crafts movements gain popularity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Period Identification */}
        <section id="period-identification" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Period Style Identification Guide</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-dark-wood mb-4">🔍 Expert Identification Checklist</h3>
            <p className="text-forest-green mb-4">
              Use this systematic approach to identify the period and authenticity of antique furniture pieces:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-4">Construction Analysis</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Joinery Methods:</strong>
                    <p className="text-sm text-forest-green">Hand-cut dovetails (pre-1900), machine dovetails (post-1900)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Wood Analysis:</strong>
                    <p className="text-sm text-forest-green">Indigenous woods vs imports, growth patterns, aging characteristics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Hardware Examination:</strong>
                    <p className="text-sm text-forest-green">Hand-forged vs machine-made, patina patterns, screw types</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-4">Style Characteristics</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Proportions:</strong>
                    <p className="text-sm text-forest-green">Classical ratios vs Victorian exuberance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Decorative Elements:</strong>
                    <p className="text-sm text-forest-green">Carving styles, inlay patterns, surface treatments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Functional Design:</strong>
                    <p className="text-sm text-forest-green">Colonial practicality vs Victorian ornamentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Authentication Methods */}
        <section id="authentication-methods" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Professional Authentication Methods</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3">⚠️ Authentication Importance</h3>
            <p className="text-forest-green">
              Proper authentication protects investment value and ensures historically appropriate restoration approaches. 
              Misidentified pieces can lose significant value through inappropriate restoration methods.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Documentation Research</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Primary Sources:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• Family records and photographs</li>
                    <li>• Estate sale documentation</li>
                    <li>• Insurance appraisals</li>
                    <li>• Previous restoration records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Research Resources:</h4>
                  <ul className="text-sm space-y-1 text-forest-green">
                    <li>• SA Museum furniture collections</li>
                    <li>• Period furniture catalogues</li>
                    <li>• Colonial inventory records</li>
                    <li>• Auction house archives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Physical Examination Techniques</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Camera className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-dark-wood mb-2">Photographic Documentation</h4>
                    <p className="text-sm text-forest-green">
                      Systematic photography of construction details, wear patterns, maker's marks, and tool marks 
                      provides crucial evidence for authentication and guides restoration decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-dark-wood mb-2">Provenance Tracking</h4>
                    <p className="text-sm text-forest-green">
                      Establishing ownership history through West Coast families, estates, and regional collections 
                      helps verify authenticity and cultural significance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Restoration vs Conservation */}
        <section id="restoration-vs-conservation" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Restoration vs Conservation: Making the Right Choice</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-3">Conservation Approach</h3>
              <p className="text-forest-green mb-3">
                Preserves original materials and finishes to maintain historical integrity and maximum value.
              </p>
              <ul className="space-y-2 text-sm text-forest-green">
                <li>• Minimal intervention philosophy</li>
                <li>• Stabilize existing finishes</li>
                <li>• Document all work performed</li>
                <li>• Reversible treatments only</li>
                <li>• Maintain patina and wear patterns</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-3">Restoration Approach</h3>
              <p className="text-forest-green mb-3">
                Returns functionality and appearance, may involve component replacement or refinishing.
              </p>
              <ul className="space-y-2 text-sm text-forest-green">
                <li>• Return to functional use</li>
                <li>• Replace damaged components</li>
                <li>• Period-appropriate refinishing</li>
                <li>• Structural reinforcement</li>
                <li>• Enhanced durability</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3">Decision Matrix</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-forest-green mb-2">Choose Conservation:</h4>
                <ul className="text-sm space-y-1 text-forest-green">
                  <li>• Museum-quality pieces</li>
                  <li>• Documented historical importance</li>
                  <li>• Original finish intact</li>
                  <li>• Investment/collection pieces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-forest-green mb-2">Choose Restoration:</h4>
                <ul className="text-sm space-y-1 text-forest-green">
                  <li>• Family functional pieces</li>
                  <li>• Severely damaged items</li>
                  <li>• Daily use requirements</li>
                  <li>• Moderate historical value</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-forest-green mb-2">Professional Assessment:</h4>
                <ul className="text-sm space-y-1 text-forest-green">
                  <li>• Uncertain provenance</li>
                  <li>• High-value pieces</li>
                  <li>• Complex damage</li>
                  <li>• Insurance claims</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Historical Techniques */}
        <section id="historical-techniques" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Period-Appropriate Restoration Techniques</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Traditional West Coast Finishes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-forest-green mb-3">Colonial Period (1650-1800)</h4>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li><strong>Linseed Oil:</strong> Hand-rubbed finish for indigenous woods</li>
                    <li><strong>Beeswax:</strong> Natural protection for Yellowwood</li>
                    <li><strong>Shellac:</strong> Spirit-based finish for imported pieces</li>
                    <li><strong>Milk Paint:</strong> Traditional painted furniture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-3">Victorian Era (1837-1901)</h4>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li><strong>French Polish:</strong> High-gloss shellac finish</li>
                    <li><strong>Varnish:</strong> Durable coach varnish for quality pieces</li>
                    <li><strong>Ebonizing:</strong> Black lacquer treatments</li>
                    <li><strong>Gilding:</strong> Gold leaf decorative elements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Authentic Repair Methods</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Traditional Joinery Repairs</h4>
                  <p className="text-sm text-forest-green mb-2">
                    Maintain historical integrity by using period-appropriate joinery methods:
                  </p>
                  <ul className="text-sm space-y-1 text-forest-green ml-4">
                    <li>• Hand-cut dovetails for drawer repairs</li>
                    <li>• Mortise and tenon joint restoration</li>
                    <li>• Hide glue for reversible bonds</li>
                    <li>• Wooden dowels instead of modern screws</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Wood Matching and Patching</h4>
                  <p className="text-sm text-forest-green mb-2">
                    Source appropriate replacement materials for authentic repairs:
                  </p>
                  <ul className="text-sm space-y-1 text-forest-green ml-4">
                    <li>• Reclaimed period wood when possible</li>
                    <li>• Grain direction and color matching</li>
                    <li>• Age-appropriate weathering techniques</li>
                    <li>• Invisible patch integration methods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Market Values */}
        <section id="market-values" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Understanding Antique Furniture Market Values</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3">💰 West Coast Antique Market Overview</h3>
            <p className="text-forest-green">
              The West Coast antique furniture market reflects both local heritage value and international collector interest. 
              Understanding market dynamics helps make informed restoration investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-4">High-Value Categories</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-forest-green">Cape Dutch Furniture</h4>
                  <p className="text-sm text-forest-green">R15,000 - R150,000+</p>
                  <p className="text-xs text-gray-600">Authentic 18th-19th century pieces</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green">Victorian Mahogany</h4>
                  <p className="text-sm text-forest-green">R8,000 - R45,000</p>
                  <p className="text-xs text-gray-600">Quality imported pieces</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green">Yellowwood Pieces</h4>
                  <p className="text-sm text-forest-green">R5,000 - R25,000</p>
                  <p className="text-xs text-gray-600">Regional significance</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-4">Value Factors</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                  <div>
                    <strong className="text-dark-wood text-sm">Provenance:</strong>
                    <p className="text-xs text-forest-green">Documented history adds 20-50% value</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                  <div>
                    <strong className="text-dark-wood text-sm">Condition:</strong>
                    <p className="text-xs text-forest-green">Original finish vs restoration impact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                  <div>
                    <strong className="text-dark-wood text-sm">Rarity:</strong>
                    <p className="text-xs text-forest-green">Unique designs command premiums</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                  <div>
                    <strong className="text-dark-wood text-sm">Craftsmanship:</strong>
                    <p className="text-xs text-forest-green">Quality construction matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">How do I identify authentic West Coast antique furniture?</h3>
              <p className="text-forest-green">
                Look for construction methods like hand-cut dovetails, indigenous wood species like Yellowwood or Stinkwood, 
                and period-appropriate hardware. Documentation, provenance, and maker's marks also help verify authenticity. 
                Professional assessment is recommended for valuable pieces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">What's the difference between restoration and conservation of antiques?</h3>
              <p className="text-forest-green">
                Conservation preserves original materials and finishes, maintaining historical integrity with minimal intervention. 
                Restoration may involve replacing components or refinishing to return functionality, potentially affecting historical value. 
                The choice depends on the piece's significance and intended use.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">How much does professional antique furniture restoration cost?</h3>
              <p className="text-forest-green">
                Costs vary significantly based on piece complexity, required work, and historical significance. Simple repairs start around R2,000, 
                while comprehensive restoration of quality pieces ranges R5,000-R15,000. Museum-quality conservation of important pieces can exceed R15,000. 
                Assessment determines appropriate approach and investment level.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Preserve Your West Coast Heritage</h2>
          <p className="text-lg mb-6 opacity-90">
            Whether you own a family heirloom or have discovered an antique treasure, proper restoration preserves both beauty and historical significance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-600 py-3 px-6 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300"
            >
              Get Professional Assessment
            </Link>
            <Link
              href="/portfolio"
              className="border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300"
            >
              View Heritage Restorations
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}