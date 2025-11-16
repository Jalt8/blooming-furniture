import React from 'react';
import { Metadata } from 'next';
import AboutClient from './client';

export const metadata: Metadata = {
  title: 'About Blooming Furniture | Local Furniture Restoration Experts West Coast',
  description: 'Meet the craftsmen behind Blooming Furniture. 10+ years of expert furniture restoration experience serving Langebaan, Saldanha Bay, Vredenburg and West Coast communities. Eco-friendly practices, timeless craftsmanship.',
  keywords: 'about blooming furniture, furniture restoration craftsmen West Coast, local furniture restoration experts, eco-friendly restoration, Langebaan furniture experts, West Coast craftsmen, sustainable furniture repair',
  openGraph: {
    title: 'About Blooming Furniture | Local Restoration Experts West Coast SA',
    description: 'Expert furniture restoration craftsmen with 10+ years experience serving West Coast South Africa. Eco-friendly practices and timeless craftsmanship.',
    images: ['/blooming-furniture.png'],
    type: 'website',
    url: 'https://bloomingfurniture.co.za/about',
    locale: 'en_ZA'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}