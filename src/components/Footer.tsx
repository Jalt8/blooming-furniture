'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-wood text-white-daisy">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center group">
              <Image
                width={48}
                height={48}
                src="/android-chrome-256x256.png"
                alt="Blooming Furniture"
                className="h-12 w-auto mr-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white-daisy">
                  Blooming Furniture
                </span>
                <span className="text-xs text-golden-center font-medium">
                  West Coast Restoration
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Expert woodwork restoration and furniture refinishing across the West Coast. Preserving memories for generations.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-golden-center uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/wood-furniture-repair" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Wood Furniture Repair
                </Link>
              </li>
              <li>
                <Link href="/furniture-refinishing" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Furniture Refinishing
                </Link>
              </li>
              <li>
                <Link href="/antique-restoration" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Antique Restoration
                </Link>
              </li>
              <li>
                <Link href="/table-restoration" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Table Restoration
                </Link>
              </li>
              <li>
                <Link href="/cabinet-restoration" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Cabinet Restoration
                </Link>
              </li>
              <li>
                <Link href="/french-polishing" className="text-gray-300 hover:text-white-daisy transition-colors">
                  French Polishing
                </Link>
              </li>
              <li>
                <Link href="/outdoor-furniture-restoration" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Outdoor Furniture Restoration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white-daisy transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
            <h3 className="text-sm font-bold text-golden-center uppercase tracking-wide pt-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/south-african-wood-species-guide" className="text-gray-300 hover:text-white-daisy transition-colors">
                  SA Wood Species Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/furniture-restoration-cost-south-africa" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Restoration Cost Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-golden-center uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/furniture-restoration-langebaan" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Langebaan
                </Link>
              </li>
              <li>
                <Link href="/furniture-repair-saldanha-bay" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Saldanha Bay
                </Link>
              </li>
              <li>
                <Link href="/furniture-restoration-vredenburg" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Vredenburg
                </Link>
              </li>
              <li>
                <Link href="/furniture-repair-paternoster" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Paternoster
                </Link>
              </li>
              <li>
                <Link href="/furniture-restoration-velddrif" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Velddrif
                </Link>
              </li>
              <li>
                <Link href="/furniture-restoration-hopefield" className="text-gray-300 hover:text-white-daisy transition-colors">
                  Hopefield
                </Link>
              </li>
              <li>
                <Link href="/furniture-restoration-st-helena-bay" className="text-gray-300 hover:text-white-daisy transition-colors">
                  St Helena Bay
                </Link>
              </li>
              <li>
                <Link href="/west-coast-furniture-repair" className="text-gray-300 hover:text-white-daisy transition-colors">
                  All West Coast Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-golden-center uppercase tracking-wide">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-golden-center flex-shrink-0" />
                  <a href="tel:0793752588" className="text-gray-300 hover:text-white-daisy transition-colors">
                    (079) 375 2588
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-golden-center flex-shrink-0" />
                  <a href="mailto:wendydanie@gmail.com" className="text-gray-300 hover:text-white-daisy transition-colors break-all">
                    wendydanie@gmail.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-golden-center flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Langebaan, West Coast</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-golden-center text-dark-wood py-2 px-4 rounded-lg font-semibold text-sm hover:bg-white-daisy transition-all duration-300 w-full"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Blooming Furniture. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/about" className="text-gray-300 hover:text-white-daisy transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white-daisy transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white-daisy transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white-daisy transition-colors">
                FAQ
              </Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white-daisy transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-white-daisy transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;