'use client';

import Link from 'next/link';
import { Shield, Droplets, Sun, Wind, AlertTriangle, CheckCircle, Calendar, Thermometer, Eye } from 'lucide-react';
import Image from 'next/image';

export default function LeatherCareClient() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Image */}
      <div className="mb-12">
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            width={1200}
            height={600}
            src="/blog/leather-care-guide.jpg"
            alt="Leather furniture care in coastal environment showing protection techniques"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Table of Contents */}
        <div className="bg-daisy-cream p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-dark-wood mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Coastal Leather Care Guide
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="#coastal-challenges" className="block text-forest-green hover:text-dark-wood">1. Coastal Environment Challenges</a>
            <a href="#leather-types" className="block text-forest-green hover:text-dark-wood">2. Leather Types & Vulnerabilities</a>
            <a href="#protection-strategies" className="block text-forest-green hover:text-dark-wood">3. Protection Strategies</a>
            <a href="#maintenance-schedule" className="block text-forest-green hover:text-dark-wood">4. Maintenance Schedule</a>
            <a href="#damage-assessment" className="block text-forest-green hover:text-dark-wood">5. Damage Assessment</a>
            <a href="#repair-techniques" className="block text-forest-green hover:text-dark-wood">6. Professional Repair Techniques</a>
            <a href="#product-recommendations" className="block text-forest-green hover:text-dark-wood">7. Product Recommendations</a>
            <a href="#emergency-treatments" className="block text-forest-green hover:text-dark-wood">8. Emergency Treatment Guide</a>
          </nav>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-forest-green leading-relaxed">
            Living on the West Coast means your leather furniture faces some of the most challenging environmental conditions.
            The combination of <Link href="/blog/sea-salt-furniture-damage-west-coast" className="text-dark-wood font-semibold hover:underline">salt-laden air</Link>, high humidity, and intense UV exposure can quickly deteriorate even the finest leather
            if not properly protected and maintained.
          </p>
          
          <p className="text-lg text-forest-green leading-relaxed">
            This comprehensive guide provides professional-grade strategies for protecting, maintaining, and restoring leather furniture 
            in coastal environments. From daily care routines to emergency treatments, you'll learn everything needed to keep your 
            leather investments looking beautiful for decades.
          </p>
        </div>

        {/* Coastal Impact Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
            <Wind className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <h3 className="font-bold text-dark-wood text-sm">Salt Air</h3>
            <p className="text-xs text-forest-green">Draws moisture, accelerates aging</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
            <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-dark-wood text-sm">High Humidity</h3>
            <p className="text-xs text-forest-green">Promotes mold, weakens fibers</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
            <Sun className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <h3 className="font-bold text-dark-wood text-sm">UV Exposure</h3>
            <p className="text-xs text-forest-green">Fades color, cracks surface</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
            <Thermometer className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-bold text-dark-wood text-sm">Temperature Swings</h3>
            <p className="text-xs text-forest-green">Causes expansion/contraction</p>
          </div>
        </div>

        {/* Section 1: Coastal Challenges */}
        <section id="coastal-challenges" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Understanding Coastal Environment Challenges</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
              Why Coastal Conditions Are So Damaging
            </h3>
            <p className="text-forest-green">
              Coastal environments create a perfect storm for leather deterioration. The salt particles in the air act as desiccants, 
              drawing moisture from leather while simultaneously making it more susceptible to humidity absorption. This creates 
              a destructive cycle that can age leather 3-5 times faster than inland conditions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Salt Air Impact on Leather</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Immediate Effects:</h4>
                  <ul className="space-y-1 text-sm text-forest-green">
                    <li>• White salt residue on surface</li>
                    <li>• Increased moisture absorption</li>
                    <li>• Accelerated drying cycles</li>
                    <li>• Surface texture changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Long-term Damage:</h4>
                  <ul className="space-y-1 text-sm text-forest-green">
                    <li>• Deep cracking and splitting</li>
                    <li>• Color fading and discoloration</li>
                    <li>• Leather stiffening</li>
                    <li>• Stitching deterioration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Humidity and Temperature Effects</h3>
              <div className="prose max-w-none">
                <p className="text-forest-green mb-3">
                  The West Coast's humidity fluctuations cause leather to expand and contract repeatedly. This mechanical stress, 
                  combined with temperature changes, weakens the leather's fiber structure and can cause permanent deformation.
                </p>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <strong className="text-dark-wood">Optimal Conditions:</strong>
                  <span className="text-forest-green"> 45-55% humidity, 18-22°C temperature, minimal direct sunlight</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Leather Types */}
        <section id="leather-types" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Leather Types & Coastal Vulnerabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-4">High-Risk Leather Types</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Aniline Leather:</strong>
                    <p className="text-sm text-forest-green">Unprotected, absorbs salt and moisture readily</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Nubuck & Suede:</strong>
                    <p className="text-sm text-forest-green">Textured surface traps salt particles</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Vintage/Antique Leather:</strong>
                    <p className="text-sm text-forest-green">Already compromised, needs extra protection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-4">More Resistant Types</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Protected/Pigmented:</strong>
                    <p className="text-sm text-forest-green">Surface coating provides barrier</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Semi-Aniline:</strong>
                    <p className="text-sm text-forest-green">Light protection with natural feel</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-dark-wood">Synthetic Leather:</strong>
                    <p className="text-sm text-forest-green">Artificial materials resist salt damage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Protection Strategies */}
        <section id="protection-strategies" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Comprehensive Protection Strategies</h2>
          
          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Environmental Controls</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-forest-green mb-3">Placement Strategies:</h4>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li>• Keep 2+ meters from windows</li>
                    <li>• Avoid direct ocean views/exposure</li>
                    <li>• Use UV-filtering window treatments</li>
                    <li>• Position away from air vents</li>
                    <li>• Create wind barriers for outdoor areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-3">Climate Control:</h4>
                  <ul className="space-y-2 text-sm text-forest-green">
                    <li>• Maintain 45-55% humidity</li>
                    <li>• Use dehumidifiers in high-humidity seasons</li>
                    <li>• Install air filtration systems</li>
                    <li>• Monitor with hygrometers</li>
                    <li>• Ensure good air circulation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Protective Treatments</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Pre-Treatment Applications</h4>
                  <p className="text-sm text-forest-green mb-3">
                    Apply protective treatments before exposure to coastal conditions for maximum effectiveness:
                  </p>
                  <ul className="text-sm space-y-1 text-forest-green ml-4">
                    <li>• Water-repellent sprays for initial protection</li>
                    <li>• UV-blocking treatments for sun exposure</li>
                    <li>• Conditioning treatments to maintain flexibility</li>
                    <li>• Antifungal treatments for humidity protection</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-forest-green mb-2">Ongoing Protection Maintenance</h4>
                  <ul className="text-sm space-y-1 text-forest-green ml-4">
                    <li>• Reapply protective coatings every 6 months</li>
                    <li>• Condition monthly in high-exposure areas</li>
                    <li>• Clean salt residue weekly</li>
                    <li>• Rotate cushions to distribute wear</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Maintenance Schedule */}
        <section id="maintenance-schedule" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Coastal Climate Maintenance Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-dark-wood mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Daily
              </h3>
              <ul className="text-sm space-y-1 text-forest-green">
                <li>• Remove surface salt with dry cloth</li>
                <li>• Check for new damage</li>
                <li>• Ensure good ventilation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-dark-wood mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Weekly
              </h3>
              <ul className="text-sm space-y-1 text-forest-green">
                <li>• Deep clean with leather cleaner</li>
                <li>• Vacuum crevices and seams</li>
                <li>• Inspect for early wear signs</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-dark-wood mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Monthly
              </h3>
              <ul className="text-sm space-y-1 text-forest-green">
                <li>• Apply leather conditioner</li>
                <li>• Check humidity levels</li>
                <li>• Rotate/flip cushions</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-dark-wood mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Seasonal
              </h3>
              <ul className="text-sm space-y-1 text-forest-green">
                <li>• Reapply protective treatments</li>
                <li>• Professional assessment</li>
                <li>• Deep conditioning treatment</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3">Storm Season Preparation</h3>
            <p className="text-forest-green mb-3">
              Before the West Coast's winter storm season, take extra protective measures:
            </p>
            <ul className="text-sm space-y-1 text-forest-green ml-4">
              <li>• Apply extra protective coating</li>
              <li>• Move furniture away from windows</li>
              <li>• Increase dehumidifier usage</li>
              <li>• Cover or store outdoor leather furniture</li>
              <li>• Schedule professional pre-season treatment</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Damage Assessment */}
        <section id="damage-assessment" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Early Damage Detection & Assessment</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-dark-wood mb-3 flex items-center">
              <Eye className="h-5 w-5 mr-2 text-red-600" />
              Warning Signs of Coastal Damage
            </h3>
            <p className="text-forest-green">
              Early detection prevents minor issues from becoming expensive repairs. Check for these signs monthly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-700 mb-3">Immediate Action Required</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">White salt crystallization on surface</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">New cracks or splits appearing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Mold or mildew spots</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Strong chemical or musty odors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-yellow-700 mb-3">Monitor Closely</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Surface becoming rough or dry</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Color fading or discoloration</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Stitching loosening or fraying</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-yellow-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Leather stiffening</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-green-700 mb-3">Normal Wear</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Gradual patina development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Slight softening in high-use areas</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Minor surface scratches</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span className="text-forest-green">Natural aging characteristics</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Emergency Treatment */}
        <section id="emergency-treatments" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Emergency Treatment Protocols</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Salt Water Exposure</h3>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-red-700 mb-2">Immediate Action (First 30 minutes):</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-forest-green">
                  <li>Blot (don't rub) excess moisture with clean, dry cloth</li>
                  <li>Rinse lightly with distilled water to remove salt</li>
                  <li>Blot dry again immediately</li>
                  <li>Allow to air dry naturally (never use heat)</li>
                  <li>Apply emergency conditioning once completely dry</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-dark-wood mb-4">Mold/Mildew Discovery</h3>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-700 mb-2">Safe Removal Process:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-forest-green">
                  <li>Isolate affected furniture to prevent spread</li>
                  <li>Wear protective equipment (mask, gloves)</li>
                  <li>Vacuum surface mold with HEPA filter vacuum</li>
                  <li>Clean with mild antifungal solution</li>
                  <li>Dry thoroughly and treat with antifungal protectant</li>
                  <li>Monitor for recurrence over following weeks</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Product Recommendations */}
        <section id="product-recommendations" className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Professional Product Recommendations</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-dark-wood mb-4">Coastal Climate Product Kit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-forest-green mb-3">Essential Products:</h4>
                <ul className="space-y-2 text-sm text-forest-green">
                  <li>• Salt-neutralizing leather cleaner</li>
                  <li>• Marine-grade conditioning cream</li>
                  <li>• UV-protective spray treatment</li>
                  <li>• Antifungal leather protectant</li>
                  <li>• Microfiber cleaning cloths</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-forest-green mb-3">Professional Tools:</h4>
                <ul className="space-y-2 text-sm text-forest-green">
                  <li>• Digital hygrometer for monitoring</li>
                  <li>• Soft-bristled cleaning brushes</li>
                  <li>• Distilled water for rinsing</li>
                  <li>• Clean cotton rags</li>
                  <li>• Emergency repair kit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-dark-wood mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">How often should I clean leather furniture in coastal areas?</h3>
              <p className="text-forest-green">
                In coastal environments, clean leather furniture monthly with a damp cloth to remove salt particles, and condition every 3-6 months 
                depending on exposure levels. High-exposure areas (within sight of ocean) may need weekly cleaning during storm seasons.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">What are the signs of salt air damage to leather furniture?</h3>
              <p className="text-forest-green">
                Salt air damage appears as white residue on the surface, accelerated drying and cracking, stiffening of the leather, 
                color fading, and deterioration of stitching. You may also notice a rough texture developing and increased brittleness. 
                Early intervention prevents permanent damage.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-dark-wood mb-2">Can leather furniture be repaired after coastal climate damage?</h3>
              <p className="text-forest-green">
                Yes, most coastal damage can be repaired through <Link href="/furniture-restoration-langebaan" className="text-dark-wood font-semibold hover:underline">professional restoration</Link> including reconditioning treatments,
                color restoration, crack repair, and protective coating application. Severe cases may require partial reupholstery
                or component replacement. Early treatment provides better outcomes and lower costs.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion & CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Protect Your Leather Investment</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't let coastal conditions destroy your beautiful leather furniture. Professional care and protection keep your pieces looking stunning for decades. Learn more about <Link href="/blog/how-to-care-for-wooden-furniture-coastal-climate" className="text-white font-semibold underline hover:opacity-80">caring for all your furniture in a coastal climate</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule Leather Assessment
            </Link>
            <Link
              href="/services"
              className="border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Leather Restoration Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}