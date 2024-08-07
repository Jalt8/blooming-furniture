import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-daisy-cream text-dark-wood">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Blooming Furnitures</h2>
            <p className="text-forest-green max-w-xs">
              Breathing new life into cherished furniture pieces, preserving memories for generations to come.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-green hover:text-dark-wood transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-forest-green hover:text-dark-wood transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-forest-green hover:text-dark-wood hover:underline transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-forest-green" />
                <span>(079) 375 2588</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-forest-green" />
                <a href="mailto:info@bloomingfurniture.co.za" className="hover:underline">info@bloomingfurniture.co.za</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-forest-green mt-1" />
                <span>Langebaan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-golden-center">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-sm text-forest-green">&copy; 2024 Blooming Furniture. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-forest-green hover:text-dark-wood hover:underline transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-forest-green hover:text-dark-wood hover:underline transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;