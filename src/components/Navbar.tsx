'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
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
        setIsServicesDropdownOpen(false);
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Streamlined main navigation - only 3 core items
  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  // Services mega dropdown
  const servicesDropdown = {
    featured: [
      { name: 'Wood Furniture Repair', href: '/wood-furniture-repair', desc: 'Fix broken legs, joints & cracks' },
      { name: 'Furniture Refinishing', href: '/furniture-refinishing', desc: 'Custom colors & finishes' },
      { name: 'Antique Restoration', href: '/antique-restoration', desc: 'Preserve family heirlooms' },
      { name: 'Table Restoration', href: '/table-restoration', desc: 'Dining, coffee & side tables' },
      { name: 'Cabinet Restoration', href: '/cabinet-restoration', desc: 'Kitchen, display & antique cabinets' },
    ],
    other: [
      { name: 'All Services', href: '/services' },
      { name: 'Custom Furniture', href: '/custom-furniture' },
    ]
  };

  // Location dropdown
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

  return (
    <nav className="bg-daisy-cream shadow-lg fixed w-full z-50 border-b border-golden-center/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                width={56}
                height={56}
                src="/android-chrome-256x256.png"
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
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                  pathname && (pathname.includes('/services') || pathname.includes('/wood-furniture') || pathname.includes('/refinishing') || pathname.includes('/antique'))
                    ? 'text-white-daisy bg-forest-green shadow-md'
                    : 'text-dark-wood hover:text-forest-green hover:bg-golden-center/30'
                }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-2xl z-50">
                  <div className="p-4">
                    <div className="mb-3">
                      <p className="text-xs font-bold text-forest-green uppercase tracking-wide mb-2">Popular Services</p>
                      {servicesDropdown.featured.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-lg hover:bg-golden-center/10 transition-colors"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          <div className="font-semibold text-dark-wood text-sm">{item.name}</div>
                          <div className="text-xs text-forest-green">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex gap-2">
                        {servicesDropdown.other.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex-1 text-xs px-3 py-2 text-center bg-daisy-cream rounded-lg hover:bg-golden-center/20 text-dark-wood font-medium transition-colors"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular nav items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname && pathname === item.href
                    ? 'text-white-daisy bg-forest-green shadow-md'
                    : 'text-dark-wood hover:text-forest-green hover:bg-golden-center/30'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-dark-wood hover:text-forest-green hover:bg-golden-center/30 transition-all duration-300 flex items-center gap-1"
              >
                Locations
                <ChevronDown className={`h-4 w-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    <p className="px-3 py-2 text-xs font-bold text-forest-green uppercase tracking-wide">West Coast Areas</p>
                    {locationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-dark-wood rounded-lg hover:bg-golden-center/10 transition-colors"
                        onClick={() => setIsLocationDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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

      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-golden-center/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Featured Services */}
            <div className="mb-3">
              <div className="px-2 py-1 text-xs font-bold text-forest-green uppercase tracking-wide">
                Services
              </div>
              {servicesDropdown.featured.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-dark-wood hover:bg-golden-center/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="block px-4 py-2 rounded-lg text-sm font-medium text-forest-green hover:bg-golden-center/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                View All Services →
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="border-t border-golden-center/20 pt-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    pathname && pathname === item.href
                      ? 'text-white-daisy bg-forest-green shadow-md'
                      : 'text-dark-wood hover:text-forest-green hover:bg-golden-center/30'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Locations */}
            <div className="border-t border-golden-center/20 pt-3">
              <div className="px-2 py-1 text-xs font-bold text-forest-green uppercase tracking-wide">
                West Coast Locations
              </div>
              <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto">
                {locationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-sm text-dark-wood hover:bg-golden-center/20 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="border-t border-golden-center/20 pt-3 flex gap-2">
              <Link
                href="/faq"
                className="flex-1 text-center px-3 py-2 text-sm bg-daisy-cream rounded-lg text-dark-wood hover:bg-golden-center/20"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/blog"
                className="flex-1 text-center px-3 py-2 text-sm bg-daisy-cream rounded-lg text-dark-wood hover:bg-golden-center/20"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            {/* CTA Button */}
            <div className="border-t border-golden-center/20 pt-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-forest-green text-white-daisy py-3 px-6 rounded-full font-semibold text-base hover:bg-dark-wood hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="inline mr-2 h-4 w-4" />
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;