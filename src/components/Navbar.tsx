'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isNearMeDropdownOpen, setIsNearMeDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsCustomDropdownOpen(false);
        setIsLocationDropdownOpen(false);
        setIsNearMeDropdownOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const customFurnitureItems = [
    { name: 'Custom Furniture', href: '/custom-furniture' },
    { name: 'Bespoke Furniture', href: '/bespoke-furniture' },
    { name: 'Handcrafted Furniture', href: '/handcrafted-furniture' },
  ];

  const locationItems = [
    { name: 'Langebaan', href: '/furniture-restoration-langebaan' },
    { name: 'Saldanha Bay', href: '/furniture-repair-saldanha-bay' },
    { name: 'Vredenburg', href: '/furniture-restoration-vredenburg' },
    { name: 'Paternoster', href: '/furniture-repair-paternoster' },
    { name: 'Velddrif', href: '/furniture-restoration-velddrif' },
    { name: 'Hopefield', href: '/furniture-restoration-hopefield' },
    { name: 'Yzerfontein', href: '/furniture-restoration-yzerfontein' },
    { name: 'Elands Bay', href: '/furniture-restoration-elands-bay' },
  ];

  const nearMeItems = [
    { name: 'Furniture Restoration Near Me', href: '/furniture-restoration-near-me' },
    { name: 'Furniture Repair Near Me', href: '/furniture-repair-near-me' },
  ];

  return (
    <nav className="bg-daisy-cream shadow-lg fixed w-full z-50 border-b border-golden-center/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <CldImage
                width="100"
                height="100"
                src="BloomingFurniture/android-chrome-256x256_zkcmph"
                alt="Blooming Furniture"
                className="h-14 w-auto mr-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-dark-wood whitespace-nowrap">
                  Blooming Furniture
                </span>
                <span className="text-xs sm:text-sm text-forest-green font-medium">
                  Restoration & Refurbishment
                </span>
              </div>
            </Link>
          </div>

          {/* Primary Navigation Links */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-white-daisy bg-forest-green shadow-md'
                      : 'text-dark-wood hover:text-forest-green hover:bg-golden-center/30 hover:shadow-sm'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-forest-green text-white-daisy py-2.5 px-6 rounded-full font-semibold text-sm hover:bg-dark-wood hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-wood hover:text-forest-green hover:bg-golden-center/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-green transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Bar for Dropdowns */}
        <div className="hidden lg:flex items-center justify-center py-3 border-t border-golden-center/20">
          <div className="flex space-x-6">
            {/* Custom Furniture Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsCustomDropdownOpen(!isCustomDropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/30 transition-all duration-300 flex items-center"
              >
                Custom Furniture
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isCustomDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCustomDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    {customFurnitureItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-dark-wood hover:bg-golden-center/20 hover:text-forest-green transition-colors duration-300"
                        onClick={() => setIsCustomDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Locations Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/30 transition-all duration-300 flex items-center"
              >
                West Coast Locations
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLocationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-forest-green uppercase tracking-wide border-b border-gray-100">
                      Service Areas
                    </div>
                    {locationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-dark-wood hover:bg-golden-center/20 hover:text-forest-green transition-colors duration-300"
                        onClick={() => setIsLocationDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Near Me Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsNearMeDropdownOpen(!isNearMeDropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/30 transition-all duration-300 flex items-center"
              >
                Near Me Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isNearMeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isNearMeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    {nearMeItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-dark-wood hover:bg-golden-center/20 hover:text-forest-green transition-colors duration-300"
                        onClick={() => setIsNearMeDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-golden-center/20">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {/* Main Navigation Links */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-white-daisy bg-forest-green shadow-md'
                      : 'text-dark-wood hover:text-forest-green hover:bg-golden-center/30'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Custom Furniture Section */}
            <div className="border-t border-golden-center/20 pt-4">
              <div className="px-4 py-2 text-xs font-bold text-forest-green uppercase tracking-wide">
                Custom Furniture
              </div>
              <div className="space-y-1">
                {customFurnitureItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/20 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* West Coast Locations Section */}
            <div className="border-t border-golden-center/20 pt-4">
              <div className="px-4 py-2 text-xs font-bold text-forest-green uppercase tracking-wide">
                West Coast Locations
              </div>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {locationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/20 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Near Me Section */}
            <div className="border-t border-golden-center/20 pt-4">
              <div className="px-4 py-2 text-xs font-bold text-forest-green uppercase tracking-wide">
                Near Me Services
              </div>
              <div className="space-y-1">
                {nearMeItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/20 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="border-t border-golden-center/20 pt-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-forest-green text-white-daisy py-3 px-6 rounded-full font-semibold text-base hover:bg-dark-wood hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="inline mr-2 h-4 w-4" />
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;