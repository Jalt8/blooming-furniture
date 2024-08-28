'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-daisy-cream shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <CldImage
                width="100"
                height="100"
                src="BloomingFurniture/android-chrome-256x256_zkcmph"
                alt="Blooming Furniture"
                className="h-16 w-auto mr-2 sm:mr-4"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-wood whitespace-nowrap">Blooming Furniture</span>
                <span className="text-xs sm:text-sm text-forest-green">Restoration and Refurbishment</span>
              </div>
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden lg:flex flex-grow items-center justify-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href
                      ? 'text-white-daisy bg-forest-green'
                      : 'text-dark-wood hover:text-forest-green hover:bg-golden-center'
                  } transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button with Hover Effect */}
          <div className="hidden lg:block">
            <Link
              href="/book-consultation"
              className="bg-forest-green text-white-daisy py-2 px-4 rounded-full font-semibold text-sm hover:bg-dark-wood hover:text-white-daisy transition duration-300 inline-flex items-center"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-wood hover:text-forest-green hover:bg-golden-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-green"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-white-daisy bg-forest-green'
                    : 'text-dark-wood hover:text-forest-green hover:bg-golden-center'
                } transition-colors duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              className="block w-full text-center bg-forest-green text-white-daisy py-2 px-4 rounded-full font-semibold text-sm hover:bg-dark-wood transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;