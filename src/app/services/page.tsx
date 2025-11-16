import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './client';

export const metadata: Metadata = {
  title: 'Expert Furniture Restoration Services West Coast SA | Repair & Refinish',
  description: 'Professional furniture restoration, repair, stripping, sanding, and re-polishing services on the West Coast South Africa. Transform your cherished pieces with expert craftsmanship. Free quotes available.',
  keywords: 'furniture restoration services West Coast, furniture repair Langebaan, furniture refinishing Saldanha Bay, wood furniture restoration, antique restoration, furniture makeover, re-riempie, furniture restoration Vredenburg',
  openGraph: {
    title: 'Expert Furniture Restoration Services | Blooming Furniture West Coast',
    description: 'Professional furniture restoration, repair, and refinishing services. Expert craftsmanship serving West Coast South Africa communities.',
    images: ['/blooming-furniture.png'],
    type: 'website',
    url: 'https://bloomingfurniture.co.za/services',
    locale: 'en_ZA'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}