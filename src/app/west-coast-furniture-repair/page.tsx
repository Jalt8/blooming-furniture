import React from 'react';
import { Metadata } from 'next';
import WestCoastClient from './client';

export const metadata: Metadata = {
  title: 'Furniture Repair West Coast South Africa',
  description: 'Professional furniture repair and restoration services in West Coast, South Africa. Serving Saldanha Bay, Vredenburg, Langebaan, Paternoster. Expert craftsmen, free quotes, collection & delivery available.',
  keywords: 'furniture repair West Coast South Africa, furniture restoration Saldanha Bay, furniture refinishing Vredenburg, antique restoration Langebaan, furniture makeover Paternoster, West Coast furniture services',
  openGraph: {
    title: 'Furniture Repair West Coast South Africa | Blooming Furniture',
    description: 'Professional furniture repair and restoration services in West Coast, South Africa. Expert craftsmen serving Saldanha Bay, Vredenburg, Langebaan.',
    images: ['/blooming-furniture.png'],
    type: 'website',
    locale: 'en_ZA'
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/west-coast-furniture-repair',
  },
};

export default function WestCoastFurnitureRepairPage() {
  return <WestCoastClient />;
}