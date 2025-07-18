import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './client';

export const metadata: Metadata = {
  title: 'Furniture Restoration Services - Repair, Strip, Sand, Re-Polish',
  description: 'Complete furniture restoration services including repairs, stripping, sanding, re-polishing, re-deco, and re-riempie. Professional furniture makeovers in West Coast South Africa.',
  keywords: 'furniture restoration services, furniture repair, strip sand polish, furniture makeover, re-deco, re-riempie, West Coast furniture services',
  openGraph: {
    title: 'Furniture Restoration Services | Blooming Furniture',
    description: 'Complete furniture restoration services including repairs, stripping, sanding, re-polishing, and custom makeovers.',
    images: ['/blooming-furniture.png'],
    type: 'website'
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}