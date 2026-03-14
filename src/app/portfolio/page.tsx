import React from 'react';
import { Metadata } from 'next';
import PortfolioClient from './client';

export const metadata: Metadata = {
  title: 'Furniture Restoration Portfolio - Before & After Gallery',
  description: 'View our stunning furniture restoration portfolio featuring vintage, modern, antique, and rustic furniture transformations. See before & after photos of our expert craftsmanship.',
  keywords: 'furniture restoration portfolio, before after furniture, furniture makeover gallery, vintage restoration, antique furniture restoration, modern furniture makeover',
  openGraph: {
    title: 'Furniture Restoration Portfolio | Blooming Furniture',
    description: 'Stunning before & after gallery of furniture restoration projects including vintage, modern, and antique pieces.',
    images: ['/blooming-furniture.png'],
    type: 'website'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}